const antaPg7 = 'https://anta.com/products/mens-anta-pg7';
const antaC202 = 'https://anta.com/products/mens-anta-c202-5-gt';
const uaAssertWide = 'https://www.underarmour.com/en-us/p/ua_charged%2B_assert_11_camo_wide_4e_mens_running_shoes/6014707.html';
const columbiaKonos = 'https://www.columbia.com/p/mens-konos-featherweight-shoe---wide-2141612.html?color=100';

export const moreLineup = [
  {
    brand: 'Reebok',
    name: 'FloatZig 2',
    surface: 'road',
    category: 'daily',
    url: 'https://www.reebok.com/collections/floatzig-2'
  },
  {
    brand: 'Diadora',
    name: 'Mythos Blushield Vigore V',
    surface: 'road',
    category: 'daily',
    url: 'https://www.diadora.com/en/id/mythos_blushield_vigore_v/101.182723_C0362.html',
    widths: {
      options: ['Normal', 'Wide'],
      url: 'https://www.diadora.com/en/id/vigore/',
      note: 'Diadora’s Indonesia storefront lists both versions for men and women.'
    }
  },
  {
    brand: 'Diadora',
    name: 'Nucleo 2',
    surface: 'road',
    category: 'long-run',
    url: 'https://www.diadora.com/en/id/nucleo_2/101.181846_C0509.html'
  },
  {
    brand: 'Under Armour',
    name: 'Charged+ Assert 11 Camo',
    surface: 'road',
    category: 'daily',
    url: uaAssertWide,
    widths: {
      options: ['Normal', 'Wide'],
      url: uaAssertWide,
      note: 'The US men’s Camo model has regular and 4E wide versions.'
    }
  },
  {
    brand: 'Columbia',
    name: 'Konos Featherweight',
    surface: 'trail',
    category: 'road-to-trail',
    url: columbiaKonos,
    sizeUrl: columbiaKonos,
    sizeKind: 'embedded',
    widths: {
      options: ['Normal', 'Wide'],
      url: columbiaKonos,
      note: 'The US men’s listing shows Standard and Wide.'
    }
  },
  {
    brand: 'Columbia',
    name: 'Montrail Trinity AG II',
    surface: 'trail',
    category: 'short-fast',
    url: 'https://www.columbia.com/p/mens-montrail-trinity-ag-ii-trail-running-shoe-2062671.html'
  },
  {
    brand: 'ANTA',
    name: 'PG7',
    surface: 'road',
    category: 'daily',
    url: antaPg7,
    sizeUrl: antaPg7,
    sizeKind: 'embedded'
  },
  {
    brand: 'ANTA',
    name: 'C202 5 GT',
    surface: 'road',
    category: 'race',
    url: antaC202,
    sizeUrl: antaC202,
    sizeKind: 'embedded',
    widths: {
      options: ['Narrow fit'],
      url: antaC202,
      note: 'ANTA US says the men’s shoe runs narrow. This describes fit, with alternate widths undisclosed.'
    }
  }
];
