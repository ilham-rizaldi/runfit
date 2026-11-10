const hokaMenCm = [23, 23.4, 23.9, 24.3, 24.7, 25.1, 25.6, 26, 26.4, 26.8, 27.2, 27.7, 28.1, 28.5, 28.9, 29.4, 29.8, 30.2, 30.6, 31.1, 31.5];
const hokaWomenCm = [22, 22.4, 22.9, 23.3, 23.7, 24.1, 24.5, 25, 25.4, 25.8, 26.2, 26.7, 27.1, 27.5, 27.9];
const hokaMenEu = ['37⅓', '38', '38⅔', '39⅓', '40', '40⅔', '41⅓', '42', '42⅔', '43⅓', '44', '44⅔', '45⅓', '46', '46⅔', '47⅓', '48', '48⅔', '49⅓', '50', '50⅔'];
const hokaWomenEu = ['36', '36⅔', ...hokaMenEu.slice(0, 13)];
const hokaNote = 'HOKA uses the closest listed foot length within 2 mm. This is the regular-width chart.';

const salomonEu = ['36', '36⅔', '37⅓', '38', '38⅔', '39⅓', '40', '40⅔', '41⅓', '42', '42⅔', '43⅓', '44', '44⅔', '45⅓', '46', '46⅔', '47⅓', '48', '48⅔', '49⅓', '50', '50⅔'];

const brooksMenCm = [22.44, 22.86, 23.28, 23.71, 24.13, 24.55, 24.98, 25.4, 25.82, 26.25, 26.67, 27.09, 27.52, 27.94, 28.36, 28.79, 29.21, 30.06, 30.9, 31.75];
const brooksMenEu = [37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 46.5, 47.5, 48.5, 49.5, 50.5];
const brooksMenUs = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16];
const brooksWomenCm = [21.17, 21.59, 22.01, 22.44, 22.86, 23.28, 23.71, 24.13, 24.55, 24.98, 25.4, 25.82, 26.25, 26.67, 27.09, 27.52, 27.94];
const brooksWomenEu = [35.5, 36, 36.5, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5];
const brooksNote = 'Brooks suggests considering a half size above the measured chart size and checking for toe room.';

const asicsSizeGuide = 'https://www.asics.com/sg/en-sg/customer-service/size-fit-guide/size-fit-guide.html';
const asicsMeasurementGuide = 'https://www.asics.com/on/demandware.static/-/Sites-asics-sg-Library/default/dwabe1d96f/how-to-measure-your-shoe-size.pdf';
const asicsMenLabels = [22.5, 23, 23.5, 24, 24.5, 25, 25.5, 25.75, 26, 26.5, 27, 27.5, 28, 28.25, 28.5, 29, 29.5, 30, 30.5, 30.75, 31, 31.5, 32];
const asicsMenEu = [36, 37, 37.5, 38, 39, 39.5, 40, 40.5, 41.5, 42, 42.5, 43.5, 44, 44.5, 45, 46, 46.5, 47, 48, 48.5, 49, 49.5, 50.5];
const asicsWomenLabels = [21.5, 22, 22.5, 22.75, 23, 23.5, 24, 24.5, 25, 25.5, 25.75, 26, 26.5, 27, 27.5, 28, 28.5, 28.75, 29];
const asicsWomenEu = [34.5, 35, 35.5, 36, 37, 37.5, 38, 39, 39.5, 40, 40.5, 41.5, 42, 42.5, 43.5, 44, 44.5, 45, 46];
const asicsNote = 'The Singapore measurement guide adds 1.5 cm to your foot length before looking up its CM size. The calculator applies that step for you.';

const sauconyInches = [8.625, 8.75, 9, 9.125, 9.375, 9.5, 9.625, 9.75, 10, 10.125, 10.25, 10.5, 10.625, 10.75, 11, 11.125, 11.25, 11.5, 11.625, 11.75, 12, 12.125, 12.25, 12.5, 12.625, 13, 13.25];
const sauconyEu = [35, 35.5, 36, 37, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 46, 46.5, 47, 48, 48.5, 49, 49.5, 50, 51.5, 53];
const sauconyMenUs = [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 16, 17];
const sauconyWomenUs = [4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5];
const sauconyNote = 'Measured foot length is converted from inches. The Guide 19 road and Peregrine 16 trail pages publish the same chart.';

export const core = [
  {
    name: 'HOKA',
    surfaces: ['road', 'trail'],
    charts: {
      men: {
        url: 'https://www.hoka.com/en/us/sizing-mens-footwear-cm.html',
        market: 'US',
        rows: hokaMenCm.map((cm, index) => [cm, hokaMenEu[index], 5 + index / 2, 4.5 + index / 2]),
        rule: 'nearest',
        tolerance: 0.2,
        note: hokaNote,
      },
      women: {
        url: 'https://www.hoka.com/en/us/sizing-womens-footwear-cm.html',
        market: 'US',
        rows: hokaWomenCm.map((cm, index) => [cm, hokaWomenEu[index], 5 + index / 2, 3.5 + index / 2]),
        rule: 'nearest',
        tolerance: 0.2,
        note: hokaNote,
      },
    },
  },
  {
    name: 'Salomon',
    surfaces: ['road', 'trail'],
    charts: {
      men: {
        url: 'https://sg.salomon.com/pages/mens-footwear',
        market: 'Singapore',
        rows: salomonEu.map((eu, index) => [21.5 + index / 2, eu, 4 + index / 2, 3.5 + index / 2]),
      },
      women: {
        url: 'https://id.salomon.com/en/pages/size-chart-example',
        market: 'Indonesia',
        rows: salomonEu.map((eu, index) => [21.5 + index / 2, eu, 5 + index / 2, 3.5 + index / 2]),
      },
    },
  },
  {
    name: 'Brooks',
    surfaces: ['road', 'trail'],
    charts: {
      men: {
        url: 'https://www.brooksrunning.com/en_be/main-size-guide/?getSelectedContent=true&sizeChartIdNew=size-men:size-men-shoes',
        guideUrl: 'https://www.brooksrunning.com/en_be/main-size-guide/',
        market: 'Belgium',
        rows: brooksMenCm.map((cm, index) => [cm, brooksMenEu[index], brooksMenUs[index], brooksMenUs[index] - 1]),
        note: brooksNote,
      },
      women: {
        url: 'https://www.brooksrunning.com/en_be/main-size-guide/',
        market: 'Belgium',
        rows: brooksWomenCm.map((cm, index) => [cm, brooksWomenEu[index], 5 + index / 2, 3 + index / 2]),
        note: brooksNote,
      },
    },
  },
  {
    name: 'ASICS',
    surfaces: ['road', 'trail'],
    charts: {
      men: {
        url: asicsSizeGuide,
        guideUrl: asicsMeasurementGuide,
        market: 'Singapore',
        rows: asicsMenLabels.map((label, index) => [label - 1.5, asicsMenEu[index], 4 + index / 2, 3 + index / 2]),
        estimate: true,
        note: asicsNote,
      },
      women: {
        url: asicsSizeGuide,
        guideUrl: asicsMeasurementGuide,
        market: 'Singapore',
        rows: asicsWomenLabels.map((label, index) => [label - 1.5, asicsWomenEu[index], 4 + index / 2, 2 + index / 2]),
        estimate: true,
        note: asicsNote,
      },
    },
  },
  {
    name: 'Saucony',
    surfaces: ['road', 'trail'],
    charts: {
      men: {
        url: 'https://www.saucony.com/en/guide-19/60838M.html',
        market: 'US',
        rows: sauconyInches.map((inches, index) => [inches * 2.54, sauconyEu[index], sauconyMenUs[index], sauconyMenUs[index] - 1]),
        note: sauconyNote,
      },
      women: {
        url: 'https://www.saucony.com/en/guide-19/60841W.html?dwvar_60841W_color=S11058-100',
        market: 'US',
        rows: sauconyInches.map((inches, index) => [inches * 2.54, sauconyEu[index], sauconyWomenUs[index], sauconyMenUs[index] - 1]),
        note: sauconyNote,
      },
    },
  },
];
