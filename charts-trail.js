const inov8Lengths = [21.6, 22, 22.5, 22.9, 23.3, 23.7, 24.2, 24.6, 25, 25.4, 25.9, 26.3, 26.7, 27.1, 27.5, 27.9, 28.4, 28.8, 29.2, 30.1, 30.5];
const inov8Eu = [35.5, 36, 37, 37.5, 38, 38.5, 39.5, 40, 40.5, 41.5, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46.5, 47, 48, 50];
const inov8Uk = [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14];
const inov8Guide = 'https://www.inov8.com/us/size-guide';
const inov8Note = 'The official guide uses foot length in millimeters and advises going up half a size when in doubt.';

const nnormalLengths = [22.9, 23.3, 23.7, 24.1, 24.5, 25, 25.4, 25.8, 26.2, 26.7, 27.1, 27.5, 27.9, 28.4, 28.8, 29.2, 29.6, 30.5];
const nnormalEu = ['36⅔', '37⅓', '38', '38⅔', '39⅓', '40', '40⅔', '41⅓', '42', '42⅔', '43⅓', '44', '44⅔', '45⅓', '46', '46⅔', '47⅓', '48⅔'];
const nnormalUk = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13];
const nnormalGuide = 'https://www.nnormal.com/en_ES/men/shoes/kjr/nnormal-kjerag-N1ZKGM1-001';
const nnormalNote = 'Open Size guide on the product page. Between sizes, NNormal suggests the smaller size for a snug fit or narrow feet, and the larger size for a roomier fit or wide feet.';

const laSportivaGuide = 'https://lasportiva.jp/size.html';
const laSportivaNote = 'The Japan guide lists adult EU sizes using actual Mondopoint measurements. Some published ranges overlap at their endpoints. Check the chosen model for its available sizes.';
const laSportivaRows = [
  [22, 34, null, null], [22.5, 35, null, null], [23, 36, null, null],
  [24, 37, null, null, 23.5], [24.5, 38, null, null, 24], [25, 39, null, null],
  [26, 40, null, null, 25.5], [26.5, 41, null, null, 26], [27, 42, null, null],
  [28, 43, null, null, 27.5], [28.5, 44, null, null, 28], [29, 45, null, null],
  [30, 46, null, null, 29.5], [30.5, 47, null, null, 30], [31, 48, null, null],
];

const dynafitGuide = 'https://www.dynafit.com/trail-running-shoes-men-08-0000064111?sku=08-0000064111_0000000025';
const dynafitEu = [35, 36, 36.5, 37, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 46, 46.5, 47, 48, 48.5];
const dynafitMenRows = dynafitEu.map((eu, index) => [22 + index / 2, eu, 4 + index / 2, 3 + index / 2]);
const dynafitWomenRows = dynafitEu.slice(0, 14).map((eu, index) => [22 + index / 2, eu, 5 + index / 2, 3 + index / 2]);
const dynafitNewNote = 'This chart applies to Trail, Trail Graphic, Ultra, Ultra 100 V3, and the listed Traverse 2 and Transalper 2 models. Open Size guide to check the exact list.';
const dynafitOtherNote = 'This separate chart applies to the listed Alpine, Feline, Ultra 100, Ultra DNA, Ultra Pro 2, Sky DNA, Traverse, Podium, and Elevation models. Open Size guide to check the exact list.';

const mountToCoastGuide = 'https://mounttocoast.com/pages/size-guide';
const mountToCoastMenEu = [40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 46, 47, 47.5, 48, 49];
const mountToCoastWomenEu = [35.5, 36, 36.5, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43];
const raidlightGuide = 'https://raidlight.com/en/products/chaussures-trail-ultra-max';
const raidlightEu = [36, 37, 37.5, 38, 38.5, 39, 40, 41, 42, 42.5, 43, 43.5, 44, 44.5, 45, 46, 47];
const raidlightNote = 'Raidlight publishes this as its trail running shoe chart. Open Size guide on the product page.';

const scarpaGuide = 'https://ca.scarpa.com/pages/size-chart-and-fit-guide';
const scarpaNote = 'Samples from the official fit calculator are spaced every 0.5 cm. For an exact in-between measurement, use the linked SCARPA calculator.';
const scarpaEu = [33.5, 34.5, 35, 36, 36.5, 37.5, 38, 39, 39.5, 40.5, 41, 42, 42.5, 43.5, 44, 45, 45.5, 46.5, 47, 48, 48.5, 49.5, 50];
const scarpaUs = [3, 3.5, 4, 4.5, 5, 6, 6.5, 7, 7.5, 8, 8.5, 9.5, 10, 10.5, 11, 11.5, 12.5, 13, 13.5, 14, 14.5, 15, 16];

const sport361Guide = 'https://361sport.com/pages/size-chart';
const sport361Note = 'The official chart lists two sizes for 29.5 cm. The brand uses men’s US sizing on the box.';
const sport361Rows = [
  [23, 36, 4, 3.5], [23.5, 37.5, 5, 4], [24, 38.5, 6, 5], [24.5, 39, 6.5, 5.5],
  [25, 40, 7, 6], [25.5, 40.5, 7.5, 6.5], [26, 41, 8, 7], [26.5, 42, 8.5, 7.5],
  [27, 42.5, 9, 8], [27.5, 43, 9.5, 8.5], [28, 44, 10, 9], [28.5, 44.5, 10.5, 9.5],
  [29, 45, 11, 10], [29.5, 45.5, 11.5, 10.5], [29.5, 46, 12, 11], [30, 47, 12.5, 11.5],
  [30.5, 47.5, 13, 12], [31.5, 48.5, 14, 13], [32.5, 49.5, 15, 14],
];

export const trail = [
  {
    name: 'INOV8',
    surfaces: ['road', 'trail'],
    charts: {
      men: {
        url: inov8Guide,
        market: 'US',
        rows: inov8Lengths.map((cm, index) => [cm, inov8Eu[index], inov8Uk[index] + 1, inov8Uk[index]]),
        note: inov8Note,
      },
      women: {
        url: inov8Guide,
        market: 'US',
        rows: inov8Lengths.slice(0, 13).map((cm, index) => [cm, inov8Eu[index], inov8Uk[index] + 2.5, inov8Uk[index]]),
        note: inov8Note,
      },
    },
  },
  {
    name: 'The North Face',
    surfaces: ['trail'],
    charts: {
      men: {
        url: 'https://www.thenorthface.com/en-gb/help-section/product-info/size-charts?product=footwear',
        market: 'UK',
        rows: [39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48].map((eu, index) => [25 + index / 2, eu, 7 + index / 2, 6 + index / 2]),
      },
      women: {
        url: 'https://www.thenorthface.com/en-gb/help-section/product-info/size-charts?category=women%27s&product=jackets+%26+tops',
        market: 'UK',
        rows: [
          [22, 36, 5, 3], [22.5, 36.5, 5.5, 3.5], [23, 37, 6, 4], [23.5, 37.5, 6.5, 4.5],
          [24, 38, 7, 5], [24.5, 38.5, 7.5, 5.5], [25, 39, 8, 6], [25.5, 39.5, 8.5, 6.5],
          [26, 40, 9, 7], [26.5, 40.5, 9.5, 7.5], [27, 41, 10, 8], [28, 41.5, 10.5, 8.5], [28.5, 42, 11, 9],
        ],
        note: 'Scroll to Footwear on the women’s size chart. The UK guide advises going up when between sizes.',
      },
    },
  },
  {
    name: 'NNormal',
    surfaces: ['trail'],
    charts: {
      men: {
        url: nnormalGuide,
        market: 'Spain',
        rows: nnormalLengths.map((cm, index) => [cm, nnormalEu[index], nnormalUk[index] + 0.5, nnormalUk[index]]),
        rule: 'choice',
        note: nnormalNote,
      },
      women: {
        url: nnormalGuide,
        market: 'Spain',
        rows: nnormalLengths.map((cm, index) => [cm, nnormalEu[index], nnormalUk[index] + 1.5, nnormalUk[index]]),
        rule: 'choice',
        note: nnormalNote,
      },
    },
  },
  {
    name: 'La Sportiva',
    surfaces: ['trail'],
    charts: {
      men: {url: laSportivaGuide, market: 'Japan', rows: laSportivaRows, note: laSportivaNote},
      women: {url: laSportivaGuide, market: 'Japan', rows: laSportivaRows, note: laSportivaNote},
    },
  },
  {
    name: 'Dynafit · Trail / Ultra 100 V3',
    surfaces: ['trail'],
    charts: {
      men: {url: dynafitGuide, market: 'International', rows: dynafitMenRows, note: dynafitNewNote},
      women: {url: dynafitGuide, market: 'International', rows: dynafitWomenRows, note: dynafitNewNote},
    },
  },
  {
    name: 'Dynafit · Alpine / Feline / Ultra 100',
    surfaces: ['trail'],
    charts: {
      men: {
        url: dynafitGuide,
        market: 'International',
        rows: dynafitMenRows.map(([cm, eu, us, uk]) => [cm - 1, eu, us, uk]),
        note: dynafitOtherNote,
      },
      women: {
        url: dynafitGuide,
        market: 'International',
        rows: dynafitWomenRows.map(([cm, eu, us, uk]) => [cm - 1, eu, us, uk]),
        note: dynafitOtherNote,
      },
    },
  },
  {
    name: 'Mount to Coast',
    surfaces: ['road', 'trail'],
    charts: {
      men: {
        url: mountToCoastGuide,
        market: 'US',
        rows: mountToCoastMenEu.map((eu, index) => {
          const step = index === 13 ? 7 : index / 2;
          return [25 + step, eu, 7 + step, 6 + step];
        }),
      },
      women: {
        url: mountToCoastGuide,
        market: 'US',
        rows: mountToCoastWomenEu.map((eu, index) => [22 + index / 2, eu, 5 + index / 2, 3 + index / 2]),
      },
    },
  },
  {
    name: 'Raidlight',
    surfaces: ['trail'],
    charts: {
      men: {
        url: raidlightGuide,
        market: 'France',
        rows: raidlightEu.map((eu, index) => {
          const step = index === 16 ? 8.5 : index / 2;
          return [22.5 + step, eu, 4.5 + step, null];
        }),
        note: raidlightNote,
      },
      women: {
        url: raidlightGuide,
        market: 'France',
        rows: raidlightEu.map((eu, index) => {
          const step = index === 16 ? 8.5 : index / 2;
          return [22.5 + step, eu, 5.5 + step, null];
        }),
        note: raidlightNote,
      },
    },
  },
  {
    name: 'SCARPA',
    surfaces: ['trail'],
    charts: {
      men: {
        url: scarpaGuide,
        market: 'Canada',
        rows: scarpaEu.map((eu, index) => [21 + index / 2, eu, scarpaUs[index], null]),
        rule: 'nearest',
        note: scarpaNote,
      },
      women: {
        url: scarpaGuide,
        market: 'Canada',
        rows: scarpaEu.map((eu, index) => [21 + index / 2, eu, scarpaUs[index] + 1, null]),
        rule: 'nearest',
        note: scarpaNote,
      },
    },
  },
  {
    name: '361°',
    surfaces: ['road'],
    charts: {
      men: {url: sport361Guide, market: 'Global store', rows: sport361Rows, note: sport361Note},
      women: {
        url: sport361Guide,
        market: 'Global store',
        rows: sport361Rows.map(([cm, eu, us, uk]) => [cm, eu, us + 1.5, uk]),
        note: sport361Note,
      },
    },
  },
  {
    name: 'Topo Athletic',
    surfaces: ['road', 'trail'],
    reference: {
      url: 'https://www.topoathletic.ca/pages/size-chart',
      reason: 'The Canadian distributor publishes insole lengths. The official Japan chart lists a CM size without identifying it as measured foot length.',
    },
  },
  {
    name: 'Merrell',
    surfaces: ['trail'],
    reference: {
      url: 'https://www.merrell.com/CA/en_CA/content?caid=universal-sizechart',
      reason: 'This chart publishes JPN and CHN size labels. A measured heel-to-toe chart was unavailable in the official sources checked.',
    },
  },
];
