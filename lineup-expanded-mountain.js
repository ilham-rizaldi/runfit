import { trail } from './charts-trail.js';

function model(brand, name, category, url, details = {}) {
  const surface = category === 'daily' || category === 'long-run' ? 'road' : 'trail';
  return { brand, name, surface, category, url, ...details };
}

function withGuide(brand, name, category, url) {
  return model(brand, name, category, url, { sizeUrl: url, sizeKind: 'embedded' });
}

function dynafitModel(name, category, url, chartName) {
  const { charts } = trail.find(brand => brand.name === chartName);
  return model('Dynafit', name, category, url, {
    charts, sizeUrl: charts.men.url, sizeKind: 'model'
  });
}

export const mountainCatalogs = {
  INOV8: {
    road: 'https://www.inov8.com/us/running/shoes/road/mens',
    trail: 'https://www.inov8.com/us/running/shoes/trail/mens'
  },
  'The North Face': {
    trail: 'https://www.thenorthface.com/en-us/c/mens/mens-footwear/mens-trail-run-213281'
  },
  NNormal: {
    trail: 'https://www.nnormal.com/en_US/men/shoes/trail-running-collection'
  },
  'La Sportiva': {
    trail: 'https://www.lasportivausa.com/collections/footwear-running'
  },
  Dynafit: {
    trail: 'https://www.dynafit.com/en-us/men/footwear/trail-running'
  },
  SCARPA: {
    trail: 'https://us.scarpa.com/collections/trail-running'
  },
  Raidlight: {
    trail: 'https://raidlight.com/en/collections/chaussures-de-trail'
  }
};

export const expandedMountain = [
  withGuide('INOV8', 'Roadfly Zero', 'daily', 'https://www.inov8.com/us/roadfly-zero-mens'),
  model('INOV8', 'Roadfly Max', 'long-run', 'https://www.inov8.com/us/roadfly-max-mens'),
  withGuide('INOV8', 'Trailtalon Speed V2', 'short-fast', 'https://www.inov8.com/us/trailtalon-speed-v2-mens'),
  model('INOV8', 'Trailtalon', 'mixed', 'https://www.inov8.com/us/trailtalon-mens'),
  model('INOV8', 'Trailfly V2', 'hardpack', 'https://www.inov8.com/us/trailfly-v2-mens'),
  model('INOV8', 'Trailfly Max V2', 'ultra', 'https://www.inov8.com/us/trailfly-max-v2-mens'),
  model('INOV8', 'Trailfly Zero V2', 'hardpack', 'https://www.inov8.com/us/trailfly-zero-v2-mens'),
  model('INOV8', 'Trailfly Speed V2', 'short-fast', 'https://www.inov8.com/us/trailfly-speed-v2-mens'),
  model('INOV8', 'Mudtalon Zero V2', 'mud', 'https://www.inov8.com/us/mudtalon-zero-v2-mens'),

  model('The North Face', 'Offtrail Ultra', 'technical', 'https://www.thenorthface.com/en-us/p/mens/mens-footwear-211706/mens-offtrail-ultra-NF0A8G53?color=TTS'),
  model('The North Face', 'Altamesa 500 V2 GORE-TEX', 'wet-weather', 'https://www.thenorthface.com/en-us/p/mens/mens-footwear-211706/mens-altamesa-500-v2-gore-tex-NF0A8G4D?color=KX7'),
  model('The North Face', 'Altamesa 300 V2', 'mixed', 'https://www.thenorthface.com/en-us/p/mens/mens-footwear/mens-trail-run-213281/mens-altamesa-300-v2-NF0A8G6M?color=TSU'),
  model('The North Face', 'Offtrail TR GORE-TEX', 'wet-weather', 'https://www.thenorthface.com/en-us/p/mens/mens-footwear/mens-trail-run-213281/mens-offtrail-tr-gore-tex-shoes-NF0A8A9X?color=KX7'),
  model('The North Face', 'Summit VECTIV Sky 2', 'trail-race', 'https://www.thenorthface.com/en-us/p/shop-all/summit-series/summit-series-footwear-and-gear-829892/summit-series-vectiv-sky-2-shoes-NF0A8AEM?color=L2I'),

  model('NNormal', 'Cadí', 'hardpack', 'https://www.nnormal.com/en_US/men/shoes/cadi/nnormal-cadi_men_brown-NS4CD1M-005'),
  model('NNormal', 'Tomir 02 GORE-TEX', 'wet-weather', 'https://www.nnormal.com/en_US/men/shoes/tmi/nnormal-tomir_02_gtx_shoe_beige_white-N2ZTRG1-002'),
  model('NNormal', 'Kjerag 01', 'trail-race', 'https://www.nnormal.com/en_US/all/shoes/level_1_nnormal_calz/nnormal-kjerag-N1ZKGM1-002'),
  model('NNormal', 'Tomir 01', 'mixed', 'https://www.nnormal.com/en_US/men/shoes/level_2_nnormal_calz/nnormal-tomir_1_0-N2ZTR01-002'),

  model('La Sportiva', 'Prodigio 2', 'mixed', 'https://www.lasportivausa.com/products/prodigio-2?variant=47303407927517'),
  model('La Sportiva', 'Prodigio 2 GTX', 'wet-weather', 'https://www.lasportivausa.com/products/prodigio-2-gtx?variant=47973697814749'),
  model('La Sportiva', 'Prodigio Max', 'ultra', 'https://www.lasportivausa.com/products/prodigio-max?variant=48272264757469'),
  model('La Sportiva', 'Prodigio Max GTX', 'wet-weather', 'https://www.lasportivausa.com/products/prodigio-max-gtx?variant=47973702631645'),
  model('La Sportiva', 'Prodigio', 'ultra', 'https://www.lasportivausa.com/products/prodigio-womens?variant=46886694912221'),
  model('La Sportiva', 'Jackal II', 'ultra', 'https://www.lasportivausa.com/products/jackal-ii?variant=47303942897885'),
  model('La Sportiva', 'Jackal II BOA', 'ultra', 'https://www.lasportivausa.com/products/jackal-ii-boa-womens-2023'),
  model('La Sportiva', 'Mutant', 'technical', 'https://www.lasportivausa.com/products/mutant?variant=46886776897757'),
  model('La Sportiva', 'Helios III', 'short-fast', 'https://www.lasportivausa.com/products/helios-iii?bvstate=pg%3A2%2Fct%3Ar'),

  dynafitModel('Ultra', 'ultra', 'https://www.dynafit.com/en-us/ultra-running-shoe-men-08-0000064107?sku=08-0000064107_0000000020', 'Dynafit · Trail / Ultra 100 V3'),
  dynafitModel('Trail', 'mixed', 'https://www.dynafit.com/en-us/trail-running-shoes-men-08-0000064111?sku=08-0000064111_0000000006', 'Dynafit · Trail / Ultra 100 V3'),
  dynafitModel('Ultra DNA', 'trail-race', 'https://www.dynafit.com/en-gb/ultra-dna-running-shoe-unisex-08-0000064096?sku=08-0000064096_0000000032', 'Dynafit · Alpine / Feline / Ultra 100'),
  withGuide('Dynafit', 'Alpine DNA 2', 'trail-race', 'https://www.dynafit.com/en-us/alpine-dna-2-running-shoe-unisex-08-0000064093?sku=08-0000064093_0000000033'),
  model('Dynafit', 'Ultra 50', 'ultra', 'https://www.dynafit.com/ultra-50-running-shoe-men-08-0000064066'),

  model('SCARPA', 'Ribelle Run 2', 'technical', 'https://us.scarpa.com/products/ribelle-run-2-mens'),
  withGuide('SCARPA', 'Ribelle Run 2 GTX', 'wet-weather', 'https://us.scarpa.com/products/ribelle-run-2-gtx-mens'),
  model('SCARPA', 'Ribelle Run Kalibra G', 'wet-weather', 'https://us.scarpa.com/products/ribelle-run-kalibra-g'),
  model('SCARPA', 'Ribelle Run Kalibra HT', 'technical', 'https://us.scarpa.com/products/ribelle-run-kalibra-ht-men-s'),
  model('SCARPA', 'Spin Infinity', 'ultra', 'https://us.scarpa.com/products/spin-infinity-women-s'),
  model('SCARPA', 'Ribelle Run XT', 'technical', 'https://us.scarpa.com/products/ribelle-run-xt-men-s'),
  model('SCARPA', 'Spin 2.0', 'short-fast', 'https://us.scarpa.com/products/spin-2-0-women-s'),

  withGuide('Raidlight', 'Ultra Max Desert Protect', 'ultra', 'https://raidlight.com/en/collections/chaussures-de-trail/products/chaussures-trail-ultra-max-desert-protect'),
  model('Raidlight', 'Ultra 4 Desert Protect', 'ultra', 'https://raidlight.com/en/collections/chaussures-de-trail/products/chaussures-trail-ultra-4-desert-protect'),
  model('Raidlight', 'XP 2.0', 'mixed', 'https://raidlight.com/en/collections/chaussures-de-trail/products/chaussures-trail-femme-xp2'),
  model('Raidlight', 'Ultra 4', 'ultra', 'https://raidlight.com/en/collections/chaussures-de-trail/products/chaussures-trail-ultra-4')
];
