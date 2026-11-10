import { core } from './charts-core.js';
import { major } from './charts-major.js';
import { trail } from './charts-trail.js';
import { more } from './charts-more.js';
import { categories } from './categories.js?v=lineup-2';
import { findSize, parseLength } from './fit.js';
import { coreWidths, coreModelWidths } from './width-core.js';
import { majorWidths, majorModelWidths } from './width-major.js';
import { trailWidths, trailModelWidths } from './width-trail.js';
import { moreWidths } from './width-more.js';
import { mainLineup } from './lineup-main.js?v=lineup-2';
import { trailLineup } from './lineup-trail.js?v=lineup-2';
import { moreLineup } from './lineup-more.js';
import { expandedCore, coreCatalogs } from './lineup-expanded-core.js';
import { expandedGlobal, globalCatalogs } from './lineup-expanded-global.js';
import { expandedMountain, mountainCatalogs } from './lineup-expanded-mountain.js';
import { expandedSpecial, specialCatalogs } from './lineup-expanded-special.js';
import { expandedRemaining, remainingCatalogs } from './lineup-expanded-remaining.js';

const brands = [...core, ...major, ...trail, ...more];
const brandWidths = { ...coreWidths, ...majorWidths, ...trailWidths, ...moreWidths };
const modelWidths = { ...coreModelWidths, ...majorModelWidths, ...trailModelWidths };
const brandKey = name => name.split(' · ')[0];
const modelKey = ({ brand, name }) => brand + ' ' + name;
const examples = Object.entries(categories).flatMap(([surface, group]) => group.flatMap(category =>
  (category.models ?? []).map(model => ({ ...model, surface, category: category.id }))));
const expanded = [...expandedCore, ...expandedGlobal, ...expandedMountain, ...expandedSpecial, ...expandedRemaining];
const catalogs = { ...coreCatalogs, ...globalCatalogs, ...mountainCatalogs, ...specialCatalogs, ...remainingCatalogs };
const productMap = new Map();
for (const model of [...examples, ...mainLineup, ...trailLineup, ...moreLineup, ...expanded]) {
  const key = modelKey(model).toLowerCase() + '/' + model.surface;
  productMap.set(key, { ...productMap.get(key), ...model });
}
const lineup = [...productMap.values()];
const surfaceNames = { road: 'Road', trail: 'Trail' };
const categoryNames = Object.fromEntries(Object.values(categories).flat().map(category => [category.id, category.name]));
const typeGuides = {
  road: 'https://www.asics.com/gb/en-gb/asics-advice/asics-running-shoes-which-ones-are-right-for-you/',
  trail: 'https://www.salomon.com/en-gb/sg/a/how-to-choose-your-trail-running-shoes'
};
const undisclosed = 'Undisclosed by brand';
const statusNames = {
  exact: 'Exact chart row', next: 'Next larger size', nearest: 'Nearest chart row',
  choice: 'Between sizes', multiple: 'Multiple chart sizes', band: 'Within chart range',
  boundary: 'At range boundary'
};
const cmFormat = new Intl.NumberFormat('en', { maximumFractionDigits: 3 });
const fmt = number => cmFormat.format(number);
const element = id => document.getElementById(id);
const form = element('fit-form');
const input = element('length');
const error = element('error');
const lineupSearch = element('lineup-search');
const lineupBrand = element('lineup-brand');
const lineupCategory = element('lineup-category');
const lineupMore = element('lineup-more');
const pageSize = 12;
const state = { length: 28.5, example: true, surface: 'road', fit: 'men' };
let lineupLimit = pageSize;

function node(tag, className, text) {
  const item = document.createElement(tag);
  if (className) item.className = className;
  if (text != null) item.textContent = text;
  return item;
}

function externalLink(url, label, className = 'source-link') {
  const link = node('a', className, label);
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}

function widthText(width) {
  return width?.options?.length ? width.options.join(' · ') : undisclosed;
}

function widthDetail(width, label) {
  const block = node('div', 'width-detail');
  const title = node('p');
  title.append(node('strong', null, label + ' '), document.createTextNode(widthText(width)));
  block.append(title);
  if (width?.note) block.append(node('p', null, width.note));
  if (width?.url) block.append(externalLink(width.url, 'Official width source ↗'));
  return block;
}

function modelWidth(model) {
  return model.widths ?? modelWidths[modelKey(model)];
}

function lineupLink(label, filters) {
  const link = node('a', 'source-link', label);
  link.href = '#lineup';
  link.addEventListener('click', () => {
    if (filters.surface && filters.surface !== state.surface) setSurface(filters.surface);
    lineupSearch.value = filters.search ?? '';
    lineupBrand.value = filters.brand ?? '';
    lineupCategory.value = filters.category ?? '';
    resetLineup();
  });
  return link;
}

function sizeText(row, index) {
  return String(row[index] ?? '–').replace(' 1/3', '⅓').replace(' 2/3', '⅔');
}

function sizeCell(match, index, label) {
  const cell = node('span', index === 1 ? 'size size-eu' : 'size');
  const multiple = match.kind === 'choice' || match.kind === 'multiple';
  const sizes = multiple ? [...new Set(match.candidates.map(row => sizeText(row, index)))] : [sizeText(match.primary, index)];
  cell.append(node('span', 'size-label', label), node('span', 'size-value', sizes.join(' / ')));
  return cell;
}

function sampleTable(match) {
  const table = node('table', 'chart-sample');
  const heading = table.createTHead().insertRow();
  const hasRanges = match.candidates.some(row => row[4] != null);
  for (const label of [hasRanges ? 'Foot length range' : 'Foot length', 'EU', 'US', 'UK']) {
    const head = node('th', null, label);
    head.scope = 'col';
    heading.append(head);
  }
  const body = table.createTBody();
  for (const row of match.candidates) {
    const line = body.insertRow();
    if (row === match.primary && match.kind !== 'choice' && match.kind !== 'multiple') line.className = 'chosen';
    const length = row[4] == null ? fmt(row[0]) : fmt(row[4]) + '–' + fmt(row[0]);
    for (const value of [length + ' cm', ...[1, 2, 3].map(index => sizeText(row, index))]) line.insertCell().textContent = value;
  }
  return table;
}

function fullChart(chart, label) {
  const disclosure = node('details', 'full-chart');
  disclosure.append(node('summary', null, label));
  disclosure.addEventListener('toggle', () => {
    if (disclosure.open && disclosure.children.length === 1) {
      disclosure.append(sampleTable({ candidates: chart.rows }));
    }
  });
  return disclosure;
}

function methodText(match) {
  switch (match.kind) {
    case 'choice': return 'Your length falls between these two rows. Use the fit guidance from the brand below.';
    case 'multiple': return match.rounded
      ? 'The next larger chart row lists more than one size. Check your model before choosing.'
      : 'The manufacturer lists more than one size at this length. Check your model before choosing.';
    case 'next': return 'Your length falls between chart rows. The larger row is the starting size.';
    case 'nearest': return 'The closest measured length is highlighted.';
    case 'boundary': return 'Two ranges meet at your foot length. The larger size is shown as the starting point.';
    case 'band': return 'Your foot length falls within this published range.';
    default: return 'Your foot length matches this chart row.';
  }
}

function brandRow(brand, chart, match) {
  const card = node('details', 'brand');
  const summary = node('summary', 'row-grid');
  const name = node('span', 'brand-identity');
  const key = brandKey(brand.name);
  const width = brandWidths[key];
  name.append(node('span', 'brand-name', brand.name), node('span', 'brand-width', widthText(width)));
  const status = node('span', match.kind === 'exact' && !chart.estimate ? 'status exact' : 'status',
    chart.estimate ? 'Brand-guided estimate' : statusNames[match.kind]);
  const chevron = node('span', 'chevron', '+');
  chevron.setAttribute('aria-hidden', 'true');
  summary.append(name, sizeCell(match, 1, 'EU'), sizeCell(match, 2, 'US'), sizeCell(match, 3, 'UK'), status, chevron);

  const detail = node('div', 'brand-details');
  detail.append(node('p', null, chart.estimate ? 'Starting size based on the brand’s measurement adjustment.' : methodText(match)), sampleTable(match));
  for (const note of [chart.note, brand.note]) if (note) detail.append(node('p', null, note));
  const sources = node('p', 'source-links');
  sources.append(externalLink(chart.url, 'Official chart ↗'), node('span', null, chart.market));
  if (chart.guideUrl) sources.append(externalLink(chart.guideUrl, 'Measurement guide ↗'));
  if (lineup.some(model => model.brand === key && model.surface === state.surface)) {
    sources.append(lineupLink('See models ↓', { brand: key }));
  }
  detail.append(sources);
  detail.append(widthDetail(width, 'Published brand widths'));
  card.append(summary, detail);
  return card;
}

function otherItem(brand, chart, message) {
  const item = node('div', 'other-item');
  const detail = node('div');
  detail.append(node('p', null, message));
  if (chart?.note) detail.append(node('p', null, chart.note));
  const source = chart?.url ?? brand.reference?.url;
  if (source) detail.append(externalLink(source, 'Official chart ↗'));
  if (chart?.guideUrl) {
    detail.append(document.createTextNode(' · '), externalLink(chart.guideUrl, 'Measurement guide ↗'));
  }
  detail.append(widthDetail(brandWidths[brandKey(brand.name)], 'Published brand widths'));
  item.append(node('strong', null, brand.name), detail);
  return item;
}

function renderBrands() {
  const list = element('brands');
  const other = element('other-charts');
  const otherList = element('other-list');
  otherList.className = 'other-list';
  const matched = [];
  const unmatched = [];
  const availableBrands = brands.filter(brand => brand.surfaces.includes(state.surface));

  for (const brand of availableBrands) {
    const chart = brand.charts?.[state.fit];
    if (!chart) {
      const otherChart = brand.charts?.[state.fit === 'men' ? 'women' : 'men'];
      unmatched.push(otherItem(brand, brand.reference ? null : otherChart,
        brand.reference?.reason ?? 'A measured chart for this sizing selection is unavailable.'));
      continue;
    }
    const match = findSize(chart, state.length);
    if (match.primary) {
      matched.push(brandRow(brand, chart, match));
    } else {
      const message = match.kind === 'outside'
        ? 'Outside this chart’s measured range (' + fmt(match.min) + '–' + fmt(match.max) + ' cm).'
        : 'This foot length falls between supported measurements.';
      unmatched.push(otherItem(brand, chart, message));
    }
  }

  list.replaceChildren(...(matched.length ? matched : [node('p', 'empty', 'No size matches this foot length in the selected charts.')]));
  other.hidden = unmatched.length === 0;
  other.open = matched.length === 0;
  otherList.replaceChildren(...unmatched);
  element('other-title').textContent = 'Charts without a match (' + unmatched.length + ')';
  const count = matched.length === 1 ? '1 match' : matched.length + ' matches';
  const fit = state.fit === 'men' ? 'Men’s' : 'Women’s';
  element('results-meta').textContent = (state.example ? 'Example · ' : '') + fmt(state.length) + ' cm · '
    + surfaceNames[state.surface] + ' · ' + fit + ' · ' + count + ' across ' + availableBrands.length + ' charts';
}

function renderCategoryDetail(category, surface) {
  const info = node('div');
  const features = node('ul', 'features');
  for (const feature of category.features) features.append(node('li', null, feature));
  const fitCheck = node('p', 'category-check');
  fitCheck.append(node('strong', null, 'Fit check '), document.createTextNode(category.check));
  info.append(node('span', 'category-surface', surfaceNames[surface]), node('h3', null, category.name),
    node('p', null, category.summary), features, fitCheck,
    externalLink(typeGuides[surface], surfaceNames[surface] + ' shoe guide ↗'));

  const models = node('div', 'model-list');
  models.append(node('h4', null, 'EXAMPLE MODELS'));
  const matches = lineup.filter(model => model.category === category.id && model.surface === surface);
  const exampleBrands = [...new Set(matches.map(model => model.brand))].slice(0, 2);
  for (const brand of exampleBrands) {
    const model = matches.find(item => item.brand === brand);
    const link = externalLink(model.url, null, 'model-link');
    const arrow = node('span', null, '↗');
    arrow.setAttribute('aria-hidden', 'true');
    const name = node('span', 'model-link-name');
    name.append(node('strong', null, modelKey(model)), node('small', 'brand-width', widthText(modelWidth(model))));
    link.append(name, arrow);
    models.append(link);
  }
  if (matches.length) {
    models.append(lineupLink('Browse ' + matches.length + (matches.length === 1 ? ' model ↓' : ' models ↓'), { category: category.id, surface }));
  } else {
    models.append(node('p', null, 'Model examples are unavailable for this category.'));
  }
  element('category-detail').replaceChildren(info, models);
}

function renderCategories() {
  const options = element('category-tabs');
  options.replaceChildren();
  const buttons = [];
  for (const [surface, group] of Object.entries(categories)) {
    const panel = node('div', 'category-group panel');
    const description = surface === 'road' ? 'Pavement · Workout & race distance' : 'Off-road · Terrain, distance & conditions';
    const heading = node('h3', null, surfaceNames[surface]);
    heading.id = 'category-' + surface;
    panel.setAttribute('role', 'group');
    panel.setAttribute('aria-labelledby', heading.id);
    const chips = node('div', 'category-tabs');
    for (const category of group) {
      const button = node('button', null, category.name);
      button.type = 'button';
      button.setAttribute('aria-pressed', String(category.id === 'daily'));
      button.setAttribute('aria-controls', 'category-detail');
      button.addEventListener('click', () => {
        for (const option of buttons) option.setAttribute('aria-pressed', String(option === button));
        renderCategoryDetail(category, surface);
      });
      buttons.push(button);
      chips.append(button);
    }
    panel.append(heading, node('p', null, description), chips);
    options.append(panel);
  }
  renderCategoryDetail(categories.road[0], 'road');
}

function setOptions(select, defaultText, options) {
  const previous = select.value;
  select.replaceChildren(...[[ '', defaultText ], ...options].map(([value, label]) => {
    const option = node('option', null, label);
    option.value = value;
    return option;
  }));
  select.value = options.some(([value]) => value === previous) ? previous : '';
}

function updateLineupOptions() {
  const brandNames = [...new Set(lineup.filter(model => model.surface === state.surface).map(model => model.brand))];
  brandNames.sort((left, right) => left.localeCompare(right));
  setOptions(lineupBrand, 'All brands', brandNames.map(name => [name, name]));
  setOptions(lineupCategory, 'All uses', categories[state.surface].map(category => [category.id, category.name]));
}

function renderCatalogDirectory() {
  const entries = Object.entries(catalogs).sort(([left], [right]) => left.localeCompare(right));
  const rows = entries.map(([brand, surfaces]) => {
    const item = node('div', 'catalog-brand');
    const links = node('div', 'source-links');
    for (const [surface, url] of Object.entries(surfaces)) {
      if (url) links.append(externalLink(url, surfaceNames[surface] + ' ↗'));
    }
    item.append(node('strong', null, brand), links);
    return item;
  });
  element('catalog-directory').replaceChildren(...rows);
  element('lineup-coverage').textContent = lineup.length + ' indexed models · '
    + new Set(lineup.map(model => model.brand)).size + ' international brands';
}

function modelSizeSource(model) {
  const entries = brands.filter(brand => brandKey(brand.name) === model.brand);
  const brand = entries.length === 1 ? entries[0] : null;
  const brandChart = brand?.charts?.[state.fit];
  if (model.chart || model.charts || model.sizeUrl) {
    const chart = model.charts?.[state.fit] ?? model.chart ?? model.charts?.men ?? model.charts?.women;
    const label = model.sizeKind === 'embedded' ? 'Brand guide on product page' : 'Model size guide';
    return { label, url: chart?.url ?? model.sizeUrl ?? model.url, chart,
      brandChart: model.sizeKind === 'embedded' && !chart ? brandChart : null,
      reason: !chart && !brandChart ? brand?.reference?.reason : null };
  }
  if (brandChart) return { label: 'Brand size guide', url: brandChart.url, brandChart };
  if (brand?.reference) return { label: 'Brand guide · reference only', ...brand.reference };
  return { label: 'Sizing guide unavailable' };
}

function modelCard(model) {
  const width = modelWidth(model);
  const source = modelSizeSource(model);
  const chart = source.chart;
  const eligible = chart && (!chart.fit || chart.fit === state.fit);
  const match = eligible ? findSize(chart, state.length) : null;
  const card = node('details', 'lineup-card panel');
  const summary = node('summary');
  const heading = node('span', 'lineup-heading');
  heading.append(node('span', 'lineup-brand', model.brand), node('strong', 'lineup-name', model.name));
  const plus = node('span', 'chevron', '+');
  plus.setAttribute('aria-hidden', 'true');
  heading.append(plus);
  const meta = node('span', 'lineup-card-meta');
  meta.append(node('span', null, categoryNames[model.category]), node('span', null, widthText(width)));
  const sizing = match?.primary && match.primary[1] != null
    ? 'EU ' + (match.kind === 'choice' || match.kind === 'multiple' ? [...new Set(match.candidates.map(row => sizeText(row, 1)))].join(' / ') : sizeText(match.primary, 1)) + ' · ' + source.label
    : source.label;
  summary.append(heading, meta, node('span', 'lineup-sizing', sizing));

  const detail = node('div', 'lineup-detail');
  const links = node('p', 'source-links');
  links.append(externalLink(model.url, 'Official product ↗'));
  if (source.url) links.append(externalLink(source.url, source.label + ' ↗'));
  detail.append(links);
  if (model.sizeNote) detail.append(node('p', null, model.sizeNote));
  if (source.reason) detail.append(node('p', null, source.reason));
  if (chart) {
    if (chart.note) detail.append(node('p', null, chart.note));
    const fitScope = chart.fit === 'men' ? ' · Men’s chart' : chart.fit === 'women' ? ' · Women’s chart' : '';
    if (chart.market) detail.append(node('p', null, chart.market + fitScope));
    if (match?.primary) {
      detail.append(node('p', null, fmt(state.length) + ' cm · ' + statusNames[match.kind]), sampleTable(match));
    } else if (match) {
      detail.append(node('p', null, 'No model-chart match at ' + fmt(state.length) + ' cm.'));
    } else {
      detail.append(node('p', null, 'This model chart uses a different sizing selection.'));
    }
    detail.append(fullChart(chart, 'View full foot-length chart'));
  } else if (source.brandChart) {
    const comparison = findSize(source.brandChart, state.length);
    if (comparison.primary) {
      detail.append(node('p', null, 'Brand chart at ' + fmt(state.length) + ' cm · ' + source.brandChart.market), sampleTable(comparison));
      if (source.brandChart.url !== source.url) detail.append(externalLink(source.brandChart.url, 'Chart used for this comparison ↗'));
    }
    detail.append(fullChart(source.brandChart, 'View full brand chart'));
  }
  detail.append(widthDetail(width, 'Published model widths'));
  card.append(summary, detail);
  return card;
}

function renderLineup() {
  const terms = lineupSearch.value.toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(Boolean);
  const models = lineup.filter(model => model.surface === state.surface
    && (!lineupBrand.value || model.brand === lineupBrand.value)
    && (!lineupCategory.value || model.category === lineupCategory.value)
    && terms.every(term => (modelKey(model) + ' ' + categoryNames[model.category]).toLowerCase().includes(term)));
  const cards = models.slice(0, lineupLimit).map(modelCard);
  element('lineup-models').replaceChildren(...(cards.length ? cards : [node('p', 'empty', 'No models match these filters.')]));
  const count = cards.length < models.length ? cards.length + ' of ' + models.length : models.length;
  element('lineup-meta').textContent = count + (models.length === 1 ? ' model' : ' models') + ' · ' + surfaceNames[state.surface];
  const catalog = catalogs[lineupBrand.value]?.[state.surface];
  element('lineup-catalog-link').replaceChildren(...(catalog ? [externalLink(catalog, 'Official ' + lineupBrand.value + ' catalog ↗')] : []));
  lineupMore.hidden = cards.length === models.length;
}

function resetLineup() {
  lineupLimit = pageSize;
  renderLineup();
}

function setSurface(surface) {
  state.surface = surface;
  for (const control of document.querySelectorAll('input[name="surface"], input[name="lineup-surface"]')) {
    control.checked = control.value === surface;
  }
  if (parseLength(input.value) !== state.length) calculate();
  renderBrands();
  updateLineupOptions();
  resetLineup();
}

function clearError() {
  input.removeAttribute('aria-invalid');
  error.hidden = true;
  error.textContent = '';
}

function calculate() {
  const length = parseLength(input.value);
  if (length == null) {
    input.setAttribute('aria-invalid', 'true');
    error.textContent = 'Enter a foot length from 15 to 45 cm, for example 28,5 or 28.5.';
    error.hidden = false;
    input.focus();
    return false;
  }
  clearError();
  state.length = length;
  state.example = false;
  return true;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (calculate()) {
    renderBrands();
    renderLineup();
  }
});
input.addEventListener('input', clearError);
for (const control of document.querySelectorAll('input[name="surface"], input[name="lineup-surface"]')) {
  control.addEventListener('change', () => setSurface(control.value));
}
for (const control of document.querySelectorAll('input[name="fit"]')) {
  control.addEventListener('change', () => {
    state.fit = control.value;
    renderBrands();
    renderLineup();
  });
}
lineupSearch.addEventListener('input', resetLineup);
lineupBrand.addEventListener('change', resetLineup);
lineupCategory.addEventListener('change', resetLineup);
lineupMore.addEventListener('click', () => {
  lineupLimit += pageSize;
  renderLineup();
});

renderBrands();
renderCategories();
renderCatalogDirectory();
updateLineupOptions();
renderLineup();
