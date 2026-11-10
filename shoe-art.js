const svgNamespace = 'http://www.w3.org/2000/svg';
const outlineId = 'runfit-shoe-outline';

function svgElement(tag, attributes = {}) {
  const element = document.createElementNS(svgNamespace, tag);
  for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value);
  return element;
}

export function installOutlineFilter() {
  const svg = svgElement('svg', { class: 'shoe-art-definitions', 'aria-hidden': 'true' });
  const definitions = svgElement('defs');
  const filter = svgElement('filter', { id: outlineId, 'color-interpolation-filters': 'sRGB' });
  filter.append(
    svgElement('feColorMatrix', { type: 'saturate', values: '0' }),
    svgElement('feGaussianBlur', { stdDeviation: '0.4' }),
    svgElement('feConvolveMatrix', {
      order: '3', kernelMatrix: '-1 -1 -1 -1 8 -1 -1 -1 -1', preserveAlpha: 'true'
    }),
    svgElement('feColorMatrix', {
      type: 'matrix', values: '0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  3 0 0 0 0', result: 'edges'
    }),
    svgElement('feFlood', { 'flood-color': '#c8f575' }),
    svgElement('feComposite', { in2: 'edges', operator: 'in' })
  );
  definitions.append(filter);
  svg.append(definitions);
  document.body.append(svg);
}

const cushionedTypes = new Set(['recovery', 'long-run', 'super-trainer', 'ultra']);
const fastTypes = new Set(['speed', 'short-race', 'race', 'short-fast', 'trail-race']);
const ruggedTypes = new Set(['technical', 'mud', 'wet-weather']);

function categoryOutline(model) {
  const trail = model.surface === 'trail';
  const cushioned = cushionedTypes.has(model.category);
  const fast = fastTypes.has(model.category);
  const rugged = ruggedTypes.has(model.category);
  const heel = cushioned ? 72 : fast ? 78 : 76;
  const toe = fast ? 66 : 72;
  const tongue = rugged ? 27 : 30;
  const art = svgElement('g', {
    fill: 'none', stroke: 'currentColor', 'stroke-width': '1.35',
    'stroke-linecap': 'round', 'stroke-linejoin': 'round'
  });
  art.append(
    svgElement('path', {
      d: `M34 ${heel} Q33 62 38 53 L42 42 Q67 59 91 51 Q108 45 117 ${tongue} Q124 25 133 34 C154 51 181 56 205 61 Q231 67 258 ${toe - 4} Q279 ${toe - 7} 288 ${toe} Q292 76 282 82 C250 89 223 88 191 87 Q142 85 104 89 Q61 94 34 ${heel}Z`
    }),
    svgElement('path', {
      d: `M34 ${heel} Q58 94 104 89 Q142 85 191 87 Q255 92 288 ${toe} Q294 79 288 88 Q278 99 245 102 L52 103 Q34 101 29 94 Q25 89 34 ${heel}Z`
    }),
    svgElement('path', { d: 'M31 94Q57 101 104 97Q147 93 194 95Q247 98 281 87', opacity: '.68' }),
    svgElement('path', { d: 'M41 48Q66 63 94 56Q110 50 119 37M45 54L40 75M42 70Q59 72 75 83' }),
    svgElement('path', { d: 'M124 33Q150 55 186 61M115 51Q140 64 180 69Q207 74 239 74M208 74Q240 79 270 72', opacity: '.68' }),
    svgElement('path', { d: 'm125 41-11 11m22-6-10 12m22-7-9 11m22-7-9 11m22-8-8 11m21-9-8 11' }),
    svgElement('path', {
      d: trail
        ? 'M49 78Q78 88 107 81L139 68Q151 69 163 79L188 85M213 81Q241 80 275 74L284 77'
        : 'M70 78Q109 80 140 64Q154 60 175 69Q194 78 213 78',
      opacity: '.68'
    }),
    svgElement('path', {
      d: trail
        ? rugged
          ? 'M43 102l4 6h14l4-5m14 0 3 6h16l4-6m19 0 4 6h17l4-6m22 0 4 5h17l4-5m22 0 4 5h16l4-6m14-1 4 4 12-4'
          : 'M43 102l5 4h19l3-3m14 0 3 4h19l3-4m21 0 3 4h21l3-4m22 0 4 4h19l4-4m24 0 4 3 17-2'
        : 'M43 101Q57 106 106 104L241 104Q267 103 279 95',
      opacity: '.85'
    })
  );
  if (rugged) art.append(svgElement('path', { d: 'M36 61Q57 65 67 78M121 36l7 7m18 30 12 8m57-2 18-4', opacity: '.65' }));
  return art;
}

export function renderShoeArt(model, imageUrl) {
  const figure = document.createElement('span');
  figure.className = 'shoe-art';
  const frame = document.createElement('span');
  frame.className = 'shoe-art-frame';
  const svg = svgElement('svg', { viewBox: '0 0 320 120', 'aria-hidden': 'true' });
  const caption = document.createElement('span');
  caption.className = 'shoe-art-caption';
  caption.textContent = 'Category illustration';
  svg.append(categoryOutline(model));
  frame.append(svg);
  if (imageUrl) {
    const image = document.createElement('img');
    image.className = 'shoe-art-reference';
    image.alt = '';
    image.loading = 'lazy';
    image.decoding = 'async';
    frame.setAttribute('aria-busy', 'true');
    caption.textContent = 'Loading model outline…';
    image.addEventListener('load', () => {
      frame.className = 'shoe-art-frame model-outline-ready';
      frame.setAttribute('aria-busy', 'false');
      caption.textContent = 'Model outline · official image';
    });
    image.addEventListener('error', () => {
      image.remove();
      frame.className = 'shoe-art-frame';
      frame.setAttribute('aria-busy', 'false');
      caption.textContent = 'Category illustration';
    });
    image.src = imageUrl;
    frame.append(image);
  }
  figure.append(frame, caption);
  return figure;
}
