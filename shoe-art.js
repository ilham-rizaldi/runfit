import { auditedShoePhotos, shoeArtLayout } from './shoe-art-layout.js?v=artwork-full-catalog';

const svgNamespace = 'http://www.w3.org/2000/svg';
const outlineId = 'runfit-shoe-outline';
const directions = Object.values(shoeArtLayout);
const targetFacesLeft = directions.filter(([, , , , facesLeft]) => facesLeft).length > directions.length / 2;

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
    svgElement('feGaussianBlur', { stdDeviation: '0.4', edgeMode: 'duplicate' }),
    svgElement('feConvolveMatrix', {
      order: '3', kernelMatrix: '-1 -1 -1 -1 8 -1 -1 -1 -1', edgeMode: 'duplicate', preserveAlpha: 'true'
    }),
    svgElement('feColorMatrix', {
      type: 'matrix', values: '0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  4 0 0 0 -.12', result: 'edges'
    }),
    svgElement('feFlood', { 'flood-color': '#c8f575' }),
    svgElement('feComposite', { in2: 'edges', operator: 'in' })
  );
  definitions.append(filter);
  svg.append(definitions);
  document.body.append(svg);
}

export function renderShoeArt(model, imageUrl, key) {
  const figure = document.createElement('span');
  figure.className = 'shoe-art';
  const frame = document.createElement('span');
  frame.className = 'shoe-art-frame';
  const layout = shoeArtLayout[key];
  const source = auditedShoePhotos[key] ?? imageUrl;
  if (source && layout) {
    const image = document.createElement('img');
    image.className = 'shoe-art-reference';
    image.alt = '';
    image.loading = 'lazy';
    image.decoding = 'async';
    frame.setAttribute('aria-busy', 'true');
    image.addEventListener('load', () => {
      const [x, y, width, height, facesLeft] = layout;
      const mirrored = facesLeft !== targetFacesLeft;
      const artRatio = height * image.naturalHeight / (width * image.naturalWidth);
      const size = Math.min(0.92, 0.4 / artRatio);
      image.style.width = (100 * size / width) + '%';
      image.style.transform = `translate(${-100 * (mirrored ? 1 - x : x)}%, ${-100 * y}%) scaleX(${mirrored ? -1 : 1})`;
      if (y + height / 2 > 0.98) image.style.clipPath = 'inset(0.6%)';
      else if (x - width / 2 < 0.02 || x + width / 2 > 0.98) image.style.clipPath = 'inset(2% 0.4%)';
      frame.className = 'shoe-art-frame model-outline-ready';
      frame.setAttribute('aria-busy', 'false');
      image.alt = model.name + ' outline';
    });
    image.addEventListener('error', () => {
      image.remove();
      frame.className = 'shoe-art-frame';
      frame.setAttribute('aria-busy', 'false');
    });
    image.src = source;
    frame.append(image);
  }
  figure.append(frame);
  return figure;
}
