const adidasUrl = 'https://www.adidas.com/us/help/size_charts/shoes';
const adidasCm = [22.1, 22.5, 22.9, 23.3, 23.8, 24.2, 24.6, 25, 25.5, 25.9, 26.3, 26.7, 27.1, 27.6, 28, 28.4, 28.8, 29.3, 29.7, 30.1, 30.5, 31, 31.4, 31.8, 32.6, 33.5, 34.3, 35.2];
const adidasEu = '36|36 2/3|37 1/3|38|38 2/3|39 1/3|40|40 2/3|41 1/3|42|42 2/3|43 1/3|44|44 2/3|45 1/3|46|46 2/3|47 1/3|48|48 2/3|49 1/3|50|50 2/3|51 1/3|52 2/3|53 1/3|54 2/3|55 2/3'.split('|');
const adidasUsMen = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 16, 17, 18, 19, 20];
const adidasNote = 'adidas suggests the lower size for a tighter fit or the higher size for a looser fit when between rows.';
const altraUrl = 'https://www.altrarunning.com/en-us/pages/size-chart';
const nbUrl = 'https://www.newbalance.com/size-guide.html';
const onGuideUrl = 'https://www.on.com/en-id/faq/product-advice-sizing-stock';
const onNote = 'On recommends adding about 1 cm to your bare foot length, then checking the model’s JP size chart. This result is approximate.';
const nikeMenCm = [21.6, 22, 22.4, 22.9, 23.3, 23.7, 24.1, 24.5, 25, 25.4, 25.8, 26.2, 26.7, 27.1, 27.5, 27.9, 28.3, 28.8, 29.2, 29.6, 30, 30.5, 30.9, 31.3, 31.7, 32.2, 32.6, 33, 33.4, 33.9, 34.3, 34.7, 35.1, 35.5, 36, 36.4, 36.8, 37.2];
const nikeMenEu = [35.5, 36, 36.5, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48, 48.5, 49, 49.5, 50, 50.5, 51, 51.5, 52, 52.5, 53, 53.5, 54, 54.5, 55, 55.5, 56, 56.5];
const nikeMenUk = [3, 3.5, 4, 4.5, 5, 5.5, 6, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21];
const nikeWomenEu = [33.5, 34.5, 35, 35.5, 36, 36.5, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48, 48.5, 49, 50, 50.5];

export const major = [
  {
    name: 'Nike',
    surfaces: ['road', 'trail'],
    charts: {
      men: {
        url: 'https://www.nike.com/pl/size-fit/obuwie-meskie',
        market: 'Poland',
        rows: nikeMenCm.map((cm, index) => [cm, nikeMenEu[index], 3.5 + index / 2, nikeMenUk[index]]),
        note: 'Nike uses measured foot length and recommends sizing up between rows. The CM/JP on the box is a separate size label.',
      },
      women: {
        url: 'https://www.nike.com/size-fit/womens-footwear',
        market: 'US',
        rows: [20.8, 21.2, ...nikeMenCm.slice(0, 26)].map((cm, index) => [
          cm, nikeWomenEu[index], 3.5 + index / 2, index === 0 ? 1.5 : 1 + index / 2,
        ]),
        note: 'Nike uses measured foot length and recommends sizing up between rows. The CM/JP on the box is a separate size label.',
      },
    },
  },
  {
    name: 'adidas',
    surfaces: ['road', 'trail'],
    charts: {
      men: {
        url: adidasUrl,
        market: 'US',
        rows: adidasCm.map((cm, index) => [cm, adidasEu[index], adidasUsMen[index], adidasUsMen[index] - 0.5]),
        rule: 'choice',
        note: adidasNote,
      },
      women: {
        url: adidasUrl,
        market: 'US',
        rows: adidasCm.slice(0, 22).map((cm, index) => [cm, adidasEu[index], 5 + index / 2, adidasUsMen[index] - 0.5]),
        rule: 'choice',
        note: adidasNote,
      },
    },
  },
  {
    name: 'New Balance',
    surfaces: ['road', 'trail'],
    charts: {
      men: {
        url: nbUrl,
        market: 'US',
        rows: [
          [20.5, 34, 2.5, 2], [21, 35, 3, 2.5], [21.5, 35.5, 3.5, 3], [22, 36, 4, 3.5],
          [22.5, 37, 4.5, 4], [23, 37.5, 5, 4.5], [23.5, 38, 5.5, 5], [24, 38.5, 6, 5.5],
          [24.5, 39.5, 6.5, 6], [25, 40, 7, 6.5], [25.5, 40.5, 7.5, 7], [26, 41.5, 8, 7.5],
          [26.5, 42, 8.5, 8], [27, 42.5, 9, 8.5], [27.5, 43, 9.5, 9], [28, 44, 10, 9.5],
          [28.5, 44.5, 10.5, 10], [29, 45, 11, 10.5], [29.5, 45.5, 11.5, 11], [30, 46.5, 12, 11.5],
          [30.5, 47, 12.5, 12], [31, 47.5, 13, 12.5], [31.5, 48.5, 13.5, 13], [32, 49, 14, 13.5],
          [33, 50, 15, 14.5], [34, 51, 16, 15.5], [35, 52, 17, 16.5], [36, 53, 18, 17.5],
          [37, 54, 19, 18.5], [38, 55, 20, 19.5],
        ],
      },
      women: {
        url: nbUrl,
        market: 'US',
        rows: [
          [20, 33, 3, 1], [20.5, 33.5, 3.5, 1.5], [21, 34, 4, 2], [21.5, 34.5, 4.5, 2.5],
          [22, 35, 5, 3], [22.5, 36, 5.5, 3.5], [23, 36.5, 6, 4], [23.5, 37, 6.5, 4.5],
          [24, 37.5, 7, 5], [24.5, 38, 7.5, 5.5], [25, 39, 8, 6], [25.5, 40, 8.5, 6.5],
          [26, 40.5, 9, 7], [26.5, 41, 9.5, 7.5], [27, 41.5, 10, 8], [27.5, 42.5, 10.5, 8.5],
          [28, 43, 11, 9], [28.5, 43.5, 11.5, 9.5], [29, 44, 12, 10], [29.5, 45, 12.5, 10.5],
          [30, 45.5, 13, 11], [30.5, 46, 13.5, 11.5], [31, 46.5, 14, 12], [32, 48, 15, 13],
          [32.5, 49, 16, 14],
        ],
      },
    },
  },
  {
    name: 'Altra',
    surfaces: ['road', 'trail'],
    note: 'This lookup follows the US guide. Altra’s UK guide uses a different fitting instruction.',
    charts: {
      men: {
        url: altraUrl,
        market: 'US',
        rows: [
          [22, 37, 4, 3], [22.5, 37.5, 4.5, 3.5], [23, 38, 5, 4], [23.5, 38.5, 5.5, 4.5],
          [24, 39, 6, 5], [24.5, 39.5, 6.5, 5.5], [25, 40, 7, 6], [25.5, 40.5, 7.5, 6.5],
          [26, 41, 8, 7], [26.5, 42, 8.5, 7.5], [27, 42.5, 9, 8], [27.5, 43, 9.5, 8.5],
          [28, 44, 10, 9], [28.5, 44.5, 10.5, 9.5], [29, 45, 11, 10], [29.5, 46, 11.5, 10.5],
          [30, 46.5, 12, 11], [30.5, 47, 12.5, 11.5], [31, 48, 13, 12], [32, 49, 14, 13],
          [33, 50, 15, 14], [34, 51.5, 16, 15],
        ],
      },
      women: {
        url: altraUrl,
        market: 'US',
        rows: [
          [20.5, 34.5, 4, 2], [21, 35, 4.5, 2.5], [21.5, 35.5, 5, 3], [22, 36, 5.5, 3.5],
          [22.5, 37, 6, 4], [23, 37.5, 6.5, 4.5], [23.5, 38, 7, 5], [24, 38.5, 7.5, 5.5],
          [24.5, 39, 8, 6], [25, 40, 8.5, 6.5], [25.5, 40.5, 9, 7], [26, 41, 9.5, 7.5],
          [26.5, 42, 10, 8], [27, 42.5, 10.5, 8.5], [27.5, 43, 11, 9], [28, 44, 11.5, 9.5],
          [28.5, 44.5, 12, 10], [29.5, 46, 13, 11],
        ],
      },
    },
  },
  {
    name: 'On',
    surfaces: ['road', 'trail'],
    charts: {
      men: {
        url: 'https://www.on.com/en-id/products/cloudsurfer-2-3mf1012/mens',
        market: 'Indonesia',
        estimate: true,
        guideUrl: onGuideUrl,
        note: onNote,
        // Foot-length estimates are the published JP labels minus 1 cm.
        rows: [
          [24, 40, 7, 6.5], [24.5, 40.5, 7.5, 7], [25, 41, 8, 7.5], [25.5, 42, 8.5, 8],
          [26, 42.5, 9, 8.5], [26.5, 43, 9.5, 9], [27, 44, 10, 9.5], [27.5, 44.5, 10.5, 10],
          [28, 45, 11, 10.5], [28.5, 46, 11.5, 11], [29, 47, 12, 11.5], [29.5, 47.5, 12.5, 12],
          [30, 48, 13, 12.5], [30.5, 48.5, 13.5, 13], [31, 49, 14, 13.5], [32, 50, 15, 14.5],
        ].map(([length, eu, us, uk]) => [length, eu, us, uk, null, length + 1]),
      },
      women: {
        url: 'https://www.on.com/en-id/products/cloudmonster-61/womens',
        market: 'Indonesia',
        estimate: true,
        guideUrl: onGuideUrl,
        note: onNote,
        rows: [
          [21, 36, 5, 3], [21.5, 36.5, 5.5, 3.5], [22, 37, 6, 4], [22.5, 37.5, 6.5, 4.5],
          [23, 38, 7, 5], [23.5, 38.5, 7.5, 5.5], [24, 39, 8, 6], [24.5, 40, 8.5, 6.5],
          [25, 40.5, 9, 7], [25.5, 41, 9.5, 7.5], [26, 42, 10, 8], [26.5, 42.5, 10.5, 8.5],
          [27, 43, 11, 9], [28, 44, 12, 10],
        ].map(([length, eu, us, uk]) => [length, eu, us, uk, null, length + 1]),
      },
    },
  },
];
