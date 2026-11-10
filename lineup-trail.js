import { trail } from './charts-trail.js';

function lineupModel(brand, name, category, url, details = {}) {
  const surface = ['daily', 'long-run', 'speed', 'race'].includes(category) ? 'road' : 'trail';
  return { brand, name, surface, category, url, ...details };
}

function embeddedModel(brand, name, category, url, details = {}) {
  return lineupModel(brand, name, category, url, { sizeUrl: url, sizeKind: 'embedded', ...details });
}

function dynafitModel(name, category, url, chartName) {
  const { charts } = trail.find(brand => brand.name === chartName);
  return lineupModel('Dynafit', name, category, url, {
    sizeUrl: charts.men.url,
    sizeKind: 'model',
    charts
  });
}

const prodigio = 'https://www.lasportivausa.com/en-ca/products/prodigio-pro';
const bushidoWide = 'https://www.lasportivausa.com/products/bushido-iii-wide?variant=46886684229853';
const mudtalonSpeed = 'https://www.inov8.com/row/mudtalon-speed-v2-mens';
const roadfly = 'https://www.inov8.com/us/roadfly/roadfly-mens';
const ultraventure = 'https://www.topoathletic.com/mens-ultraventure-4';
const phantom = 'https://www.topoathletic.com/mens-phantom-4';
const agilityPeak = 'https://www.merrell.com/US/en/agility-peak-6/60949M.html?dwvar_60949M_color=J00005558';
const velocity = 'https://id.puma.com/en/pd/velocity-nitro%E2%84%A2-5-running-shoes-men/312944.html?dwvar_312944_color=09&dwvar_312944_size=0260';
const deviate = 'https://us.puma.com/us/en/pd/deviate-nitro-4-running-shoes-men/312123';

export const trailLineup = [
  lineupModel('La Sportiva', 'Bushido III', 'technical', 'https://www.lasportivausa.com/products/bushido-iii', {
    widths: { options: ['Normal', 'Wide'], url: bushidoWide, note: 'Wide is sold as a separate Bushido III Wide variant.' }
  }),
  lineupModel('La Sportiva', 'Prodigio Pro', 'ultra', prodigio, {
    widths: { options: ['Wide'], url: prodigio, note: 'La Sportiva labels the Tempo Ultra last Wide on this model. This is the listed fit.' }
  }),
  lineupModel('La Sportiva', 'Akasha II', 'ultra', 'https://www.lasportivausa.com/products/akasha-ii'),

  embeddedModel('NNormal', 'Kjerag 02', 'short-fast', 'https://www.nnormal.com/en_ES/women/shoes/kjerag/nnormal-kjerag_02_shoe_black-N1ZKGM2-001'),
  embeddedModel('NNormal', 'Tomir 02', 'mixed', 'https://www.nnormal.com/en_US/men/shoes/level_2_nnormal_calz/nnormal-tomir_2_0-N2ZTR02-005'),
  embeddedModel('NNormal', 'Kjerag Brut', 'technical', 'https://www.nnormal.com/en_US/producto?option=N1ZKSM1-001'),

  embeddedModel('INOV8', 'Trailfly Max', 'ultra', 'https://www.inov8.com/us/trailfly-max-mens'),
  embeddedModel('INOV8', 'Mudtalon Speed V2', 'technical', mudtalonSpeed, {
    widths: { options: ['Narrow', 'Wide'], url: mudtalonSpeed, note: 'INOV8 calls the closer fit Precision. This model also comes in Wide.' }
  }),
  embeddedModel('INOV8', 'Roadfly', 'daily', roadfly, {
    widths: { options: ['Normal', 'Wide'], url: 'https://www.inov8.com/us/roadfly', note: 'INOV8 offers Standard Fit and Wide Fit across the toe box.' }
  }),

  lineupModel('The North Face', 'VECTIV Enduris 4', 'ultra', 'https://www.thenorthface.com/en-us/p/mens/mens-footwear/mens-trail-run-213281/mens-vectiv-enduris-4-shoes-NF0A8AEP?color=TCJ'),
  lineupModel('The North Face', 'Altamesa 500 V2', 'mixed', 'https://www.thenorthface.com/en-us/p/mens/mens-footwear/mens-trail-run-213281/mens-altamesa-500-v2-NF0A8DAJ'),
  lineupModel('The North Face', 'Summit VECTIV Pro 3', 'ultra', 'https://www.thenorthface.com/en-us/p/shop-all/summit-series/summit-series-footwear-and-gear-829892/summit-series-vectiv-pro-3-shoes-NF0A8AEJ?color=TEW'),

  dynafitModel('Ultra 100 V3', 'ultra', 'https://www.dynafit.com/en-us/ultra-100-v3-running-shoes-men-08-0000064117', 'Dynafit · Trail / Ultra 100 V3'),
  dynafitModel('Sky DNA', 'short-fast', 'https://www.dynafit.com/en-us/sky-dna-running-shoe-men-08-0000064070?sku=08-0000064070_0000000020', 'Dynafit · Alpine / Feline / Ultra 100'),
  lineupModel('Dynafit', 'Alpine Pro 2', 'technical', 'https://www.dynafit.com/en-us/alpine-pro-2-running-shoes-men-08-0000064094'),

  lineupModel('Mount to Coast', 'T1', 'mixed', 'https://mounttocoast.com/products/t1'),
  lineupModel('Mount to Coast', 'H1', 'road-to-trail', 'https://global.mounttocoast.com/products/h1'),
  lineupModel('Mount to Coast', 'R1', 'long-run', 'https://mounttocoast.com/products/r1'),

  embeddedModel('Topo Athletic', 'Ultraventure 4', 'ultra', ultraventure, {
    widths: { options: ['Normal', 'Wide'], url: ultraventure, note: 'The official product page lists a separate Wide option.' }
  }),
  embeddedModel('Topo Athletic', 'Terraventure 5', 'technical', 'https://www.topoathletic.com/mens-terraventure-5'),
  embeddedModel('Topo Athletic', 'Phantom 4', 'long-run', phantom, {
    widths: { options: ['Normal', 'Wide'], url: phantom, note: 'The US men’s listing includes a separately labeled Wide option.' }
  }),

  embeddedModel('Merrell', 'Agility Peak 6', 'ultra', agilityPeak, {
    widths: { options: ['Normal', 'Wide'], url: agilityPeak, note: 'The US men’s listing offers Medium Width and Wide Width.' }
  }),
  embeddedModel('Merrell', 'MTL Long Sky 2 Matryx', 'technical', 'https://www.merrell.com/US/en/mtl-long-sky-2-matryx/59211M.html?dwvar_59211M_color=J00005265'),
  embeddedModel('Merrell', 'Trail Glove 8', 'mixed', 'https://www.merrell.com/US/en/trail-glove-8/61055M.html'),

  embeddedModel('SCARPA', 'Golden Gate 2', 'road-to-trail', 'https://us.scarpa.com/products/golden-gate-2-mens'),
  embeddedModel('SCARPA', 'Spin Ultra 2', 'ultra', 'https://us.scarpa.com/products/spin-ultra-2-mens'),
  embeddedModel('SCARPA', 'Spin Planet', 'ultra', 'https://us.scarpa.com/products/spin-planet-mens'),

  lineupModel('KIPRUN', 'Race Light', 'short-fast', 'https://www.decathlon.co.uk/p/men-s-trail-running-shoe-kiprun-race-light-blue/312132/c409m8572253'),
  lineupModel('KIPRUN', 'MT3', 'technical', 'https://www.decathlon.co.uk/p/kiprun-mt3-men-s-trail-running-shoes-black-and-white/341192/c382c183m8828396'),
  lineupModel('KIPRUN', 'Kipstorm Pro', 'race', 'https://www.decathlon.co.uk/p/men-s-running-shoes-with-carbon-plate-kiprun-kipstorm-pro-white-yellow/360707/c227c269m8961996'),

  lineupModel('Mizuno', 'Wave Daichi 9', 'mixed', 'https://emea.mizuno.com/eu/en-gb/wave-daichi-9/J1GJ257151.html'),
  lineupModel('Mizuno', 'Wave Rider 29', 'daily', 'https://emea.mizuno.com/eu/en-si/wave-rider-29/J1GC250305.html'),
  lineupModel('Mizuno', 'Neo Vista 2', 'long-run', 'https://emea.mizuno.com/eu/en-gb/mizuno-neo-vista-2/J1GC253453.html'),

  lineupModel('PUMA', 'Velocity NITRO 5', 'daily', velocity, {
    widths: { options: ['Normal'], url: velocity, note: 'PUMA Indonesia labels this men’s listing Regular.' }
  }),
  lineupModel('PUMA', 'Deviate NITRO 4', 'speed', deviate, {
    widths: { options: ['Normal'], url: deviate, note: 'PUMA labels this model Regular.' }
  }),
  lineupModel('PUMA', 'Voyage NITRO 4', 'ultra', 'https://us.puma.com/us/en/pd/voyage-nitro-4-mens-trail-running-shoes/311041'),
  lineupModel('PUMA', 'FAST-Trac NITRO 4', 'mixed', 'https://eu.puma.com/lu/en/pd/fast-trac-nitro-4-trail-running-shoes-men/312134?swatch=03', {
    widths: { options: ['Normal'], url: 'https://eu.puma.com/lu/en/pd/fast-trac-nitro-4-trail-running-shoes-men/312134?swatch=03', note: 'PUMA Europe labels this men’s listing Regular.' }
  }),

  embeddedModel('Raidlight', 'Ultra Max', 'ultra', 'https://raidlight.com/en/collections/ultra-trail-160km/products/chaussures-trail-ultra-max'),
  embeddedModel('Raidlight', 'Dynamic 3', 'mixed', 'https://raidlight.com/en/collections/femme/products/chaussures-trail-dynamic-3'),

  lineupModel('Columbia', 'Montrail Trinity FKT', 'technical', 'https://www.columbia.com/p/mens-montrail-trinity-fkt-trail-running-shoe-2027151.html?size=11.5'),

  embeddedModel('Diadora', 'Frequenza 2', 'speed', 'https://www.diadora.com/frequenza_2/101.181495_C0133.html'),
  lineupModel('Diadora', 'Cellula', 'long-run', 'https://www.diadora.com/en/us/cellula/101.180243_D1257.html'),

  lineupModel('ANTA', 'C202 G9-2 Elite', 'race', 'https://ae.anta.com/products/anta-c202-g9-2-elite-men'),
  lineupModel('ANTA', 'MACH 6 SE', 'daily', 'https://ae.anta.com/products/812615582-3'),

  lineupModel('361°', 'Flame 4', 'race', 'https://361sport.com/products/flame-4-cqt'),
  lineupModel('361°', 'Phoenix 2', 'daily', 'https://www.361usa.com/products/mens-361-phoenix-2-cloud-grey-orange-peel', {
    widths: { options: ['Normal', 'Wide'], url: 'https://www.361usa.com/pages/phoenix', note: 'The US line lists regular and separate Wide 2E men’s variants.' }
  }),

  lineupModel('Under Armour', 'UA Infinite Pro 2', 'long-run', 'https://www.underarmour.com/en-us/p/ua_infinite_pro_2_mens_running_shoes/3028168.html?dwvar_3028168_color=101'),
  lineupModel('Under Armour', 'UA Velociti Elite 3', 'race', 'https://www.underarmour.com/en-us/p/ua_velociti_elite_3_unisex_running_shoes/6005377.html?dwvar_6005377_color=004'),

  lineupModel('Reebok', 'FloatZig 1 Adventure', 'mixed', 'https://www.reebok.eu/en-gb/products/floatzig-adventure-1-mens-sneaker-100225399-2459')
];
