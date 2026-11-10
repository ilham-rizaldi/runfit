const kiprunUrl = 'https://www.decathlon.co.uk/c/htc/ultimate-running-shoe-size-guide-what-size-running-shoe-should-i-get_09a70723-d24b-4e13-8201-4cc2fe058a33';
const kiprunNote = 'Decathlon UK asks runners to add 1 cm before using this chart. The foot-length values here already account for that allowance. Check the product page if your model gives its own guidance.';
const kiprunChart = {
  url: kiprunUrl,
  market: 'UK running guide',
  note: kiprunNote,
};

const mizunoEu = [35, 36, 36.5, 37, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 46, 46.5, 47, null, 48.5, null, 50, null, 51];
const mizunoChart = {
  url: 'https://emea.mizuno.com/eu/en-pt/sizeguide-page.html',
  market: 'Europe',
  rule: 'choice',
  note: 'Mizuno publishes a shared EU and UK conversion. It suggests the smaller size for a tighter fit and the larger size for a looser fit when between sizes.',
  rows: mizunoEu.map((eu, index) => [22 + index * 0.5, eu, null, 3 + index * 0.5]),
};

const reebokChart = {
  url: 'https://www.reebok.co.za/pages/size-guide',
  market: 'South Africa',
  note: 'Uses the chart’s heel-to-toe measurements in centimeters. Reebok advises sizing up between rows.',
};
const reebokMenLengths = [24.9, 25.4, 25.9, 26.4, 26.9, 27.4, 27.9, 28.4, 29, 29.5, 30, 30.5, 31, 31.5, 32, 32.5, 33];
const reebokMenEu = [39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 48, 48.5, 49, 50];
const reebokWomenLengths = [22.1, 22.6, 23.1, 23.6, 23.9, 24.4, 24.9, 25.4, 26.2, 26.4, 26.9, 27.4, 27.9, 29];
const reebokWomenEu = [35, 35.5, 36, 37, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 44];

const diadoraEu = [35, 35.5, 36, 36.5, 37, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48, 49, 49.5];
const diadoraChart = {
  url: 'https://www.diadora.com/en/id/sizechart',
  market: 'Indonesia',
  rule: 'choice',
  note: 'Uses Diadora’s running-shoe chart. Diadora suggests the smaller size for a tighter fit or the larger size for more room.',
};

const inchesToCm = inches => Number((inches * 2.54).toFixed(3));
const columbiaChart = {
  fillGaps: true,
  url: 'https://www.columbia.com/sizefit?isPage=true%EF%BF%BD',
  market: 'US',
  note: 'Uses the standard-width footwear chart. The published heel-to-toe ranges are converted from inches to centimeters.',
};
const columbiaMenBounds = [9.6, 9.7, 9.9, 10.1, 10.2, 10.4, 10.6, 10.7, 10.9, 11.1, 11.2, 11.4];
const columbiaWomenBounds = [8.6, 8.7, 8.9, 9.1, 9.3, 9.4, 9.6, 9.7, 9.9, 10.1, 10.2, 10.4, 10.6, 10.7, 10.9, 11.1];

const antaChart = {
  url: 'https://ae.anta.com/pages/shoes-size-guide',
  market: 'UAE',
};

export const more = [
  {
    name: 'Mizuno',
    surfaces: ['road', 'trail'],
    charts: { men: mizunoChart, women: mizunoChart },
  },
  {
    name: 'KIPRUN',
    surfaces: ['road', 'trail'],
    charts: {
      men: {
        ...kiprunChart,
        rows: [
          [23, 39, 6, 5.5], [24, 40, 7, 6.5], [24.5, 41, 7.5, 7],
          [25, 41.5, 8, 7.5], [25.5, 42, 8.5, 8], [26, '42.5 / 43', 9, 8.5],
          [26.5, 43.5, 9.5, 9], [27, 44, 10, 9.5], [27.5, 44.5, 10.5, 10],
          [28, '45 / 45.5', 11, 10.5], [28.5, 46, 11.5, 11], [29.5, 47, 13, 12],
        ],
      },
      women: {
        ...kiprunChart,
        rows: [
          [21, 36, 5, 3], [22, 37, 6, 4], [23, 38, 7, 5], [23.5, 39, 7.5, 5.5],
          [24.5, 40, 8.5, 6.5], [25, 41, 9, 7], [26, 42, 10, 8],
        ],
      },
    },
  },
  {
    name: 'Reebok',
    surfaces: ['road', 'trail'],
    charts: {
      men: {
        ...reebokChart,
        rows: reebokMenLengths.map((length, index) => [length, reebokMenEu[index], 7 + index * 0.5, 6 + index * 0.5]),
      },
      women: {
        ...reebokChart,
        rows: reebokWomenLengths.map((length, index) => {
          const us = index === 13 ? 12 : 5 + index * 0.5;
          return [length, reebokWomenEu[index], us, us - 2.5];
        }),
      },
    },
  },
  {
    name: 'Diadora',
    surfaces: ['road'],
    charts: {
      men: {
        ...diadoraChart,
        rows: diadoraEu.map((eu, index) => [21 + index * 0.5, eu, 3.5 + index * 0.5, 2.5 + index * 0.5]),
      },
      women: {
        ...diadoraChart,
        rows: diadoraEu.slice(0, 15).map((eu, index) => [21 + index * 0.5, eu, 5 + index * 0.5, 2.5 + index * 0.5]),
      },
    },
  },
  {
    name: 'PUMA',
    surfaces: ['road', 'trail'],
    reference: {
      url: 'https://nz.puma.com/nz/en/help/size-guide',
      reason: 'The adult chart gives a length in cm without identifying it as a heel-to-toe foot measurement.',
    },
  },
  {
    name: 'Under Armour',
    surfaces: ['road', 'trail'],
    charts: {
      women: {
        url: 'https://www.underarmour.com.au/en-au/t/sizechart-women-footwear.html',
        market: 'Australia',
        note: 'Uses the Australian women’s heel-to-toe chart. Under Armour recommends sizing up between measurements.',
        rows: [35.5, 36, 36.5, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5]
          .map((eu, index) => [22 + index * 0.5, eu, 5 + index * 0.5, 2.5 + index * 0.5]),
      },
    },
    reference: {
      url: 'https://www.underarmour.com/en-us/t/size-guide/mens-footwear/',
      reason: 'The men’s guide gives different size recommendations depending on whether the centimeter or inch column is used.',
    },
  },
  {
    name: 'Columbia',
    surfaces: ['trail'],
    charts: {
      men: {
        ...columbiaChart,
        rows: [
          ...columbiaMenBounds.slice(1).map((upper, index) => [
            inchesToCm(upper), 40 + index * 0.5, 7 + index * 0.5, 6 + index * 0.5,
            inchesToCm(columbiaMenBounds[index]),
          ]),
          ...[[11.6, 11.7], [11.7, 12.1], [12.1, 12.4], [12.4, 12.8], [12.8, 13.1]]
            .map(([lower, upper], index) => [inchesToCm(upper), 46 + index, 13 + index, 12 + index, inchesToCm(lower)]),
        ],
      },
      women: {
        ...columbiaChart,
        rows: columbiaWomenBounds.slice(1).map((upper, index) => [
          inchesToCm(upper), 36 + index * 0.5, 5 + index * 0.5, 3 + index * 0.5,
          inchesToCm(columbiaWomenBounds[index]),
        ]),
      },
    },
  },
  {
    name: 'ANTA',
    surfaces: ['road'],
    charts: {
      men: {
        ...antaChart,
        note: 'Uses the chart’s foot-length column. The US 17 entry is omitted because its published centimeter value conflicts with the adjacent lengths and the inch column.',
        rows: [
          [22.6, 36, 4, 3], [23.4, 37.5, 5, 4], [23.8, 38, 5.5, 4.5],
          [24.2, 39, 6.5, 6], [24.7, 40, 7, 6.5], [25.1, 40.5, 7.5, 6.5],
          [25.5, 41, 8, 7], [25.9, 42, 8.5, 7.5], [26.3, 42.5, 9, 8],
          [26.8, 43, 9.5, 8.5], [27.2, 44, 10, 9], [27.6, 44.5, 10.5, 9.5],
          [28, 45, 11, 10], [28.4, 45.5, 11.5, 10.5], [28.9, 46, 12, 11],
          [29.3, 47, 12.5, 11.5], [29.7, 47.5, 13, 12], [29.9, 48, 13.5, 12.5],
          [30.5, 48.5, 14, 13], [31.4, 49.5, 15, 14], [32.3, 50.5, 16, 15],
        ],
      },
      women: {
        ...antaChart,
        note: 'Uses the centimeter values published in ANTA’s foot-length column.',
        rows: [
          [22.1, 35.5, 5, 2.5], [22.6, 36, 5.5, 3], [23, 36.5, 6, 3.5],
          [23.4, 37.5, 6.5, 4], [23.8, 38, 7, 4.5], [24.2, 38.5, 7.5, 5],
          [24.6, 39, 8, 5.5], [25, 40, 8.5, 6], [25.4, 40.5, 9, 6.5],
          [25.8, 41, 9.5, 7], [26.2, 42, 10, 7.5], [26.7, 42.5, 10.5, 8],
        ],
      },
    },
  },
];
