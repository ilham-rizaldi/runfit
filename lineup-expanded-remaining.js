const modelsByBrand = {
  '361°': [
    ['MEGA3', 'road', 'daily', 'https://361sport.com/products/mega3-attitude'],
    ['MEGA3 Pro', 'road', 'speed', 'https://361sport.com/products/mega3-pro-attitude'],
    ['BOUNDAI 6', 'road', 'stability', 'https://361sport.com/products/boundai-6-gray', {
      widths: {
        options: ['Wide fit'],
        url: 'https://361sport.com/products/boundai-6-gray',
        note: '361° describes a widened last. Alternate widths are undisclosed.'
      }
    }],
    ['Fierce 6', 'road', 'daily', 'https://361sport.com/products/fierce-6-lychee'],
    ['Flame Double', 'road', 'race', 'https://361sport.com/products/flame-double-spectrum'],
    ['MIRO NUDE 2', 'road', 'race', 'https://361sport.com/products/miro-nude-2-blaze-run'],
    ['Furious Future 2.5', 'road', 'race', 'https://361sport.com/products/furious-future-2-5-overspeed'],
    ['BIOSPEED 5 PRO', 'road', 'speed', 'https://361sport.com/products/biospeed-5-pro-first-flight'],
    ['Flame 5 Future', 'road', 'race', 'https://361sport.com/products/flame-5-future-miro'],
    ['Flame 5 MIX', 'road', 'speed', 'https://361sport.com/products/flame-5-mix-romantic-themes'],
    ['Futura 3', 'trail', 'technical', 'https://www.361usa.com/products/mens-361-futura-3-dark-moss-orange-peel']
  ],
  Diadora: [
    ['Corsa', 'road', 'daily', 'https://www.diadora.com/en/us/corsa/101.183760_D1464.html', {
      sizeNote: 'Diadora describes a wider toe box on this last. Alternate widths are undisclosed.'
    }],
    ['Cellula 2', 'road', 'long-run', 'https://www.diadora.com/en/us/cellula_2/101.182721_C0526.html'],
    ['Atomo Star', 'road', 'long-run', 'https://www.diadora.com/en/us/atomo_star/101.181473_C4425.html'],
    ['Atomo V7000-2', 'road', 'daily', 'https://www.diadora.com/en/us/atomo_v7000-2/101.180223_D0872.html'],
    ['Equipe Nucleo', 'road', 'daily', 'https://www.diadora.com/en/us/equipe_nucleo/101.179094_C3513_6-.html'],
    ['Sestriere-XT 2', 'trail', 'mixed', 'https://www.diadora.com/sestriere-xt_2/101.180676_D1268.html']
  ],
  Reebok: [
    ['SpeedShifter', 'road', 'speed', 'https://www.reebok.com/products/reebok-speedshifter-running-shoes-red-white-blue-146120'],
    ['FloatZig Double', 'road', 'long-run', 'https://www.reebok.com/collections/contemporary-running-shoes-0adz00a/products/reebok-mens-floatzig-double-running-shoes-light-fog-light-fog-tranquil-teal-146118'],
    ['FloatZig Tread', 'road', 'daily', 'https://www.reebok.com/collections/men/products/reebok-mens-floatzig-tread-running-shoes-white-black-146214'],
    ['Viva Speed', 'road', 'daily', 'https://www.reebok.com/products/reebok-mens-viva-speed-shoes-black-black-grey-162108'],
    ['Zignition', 'road', 'daily', 'https://www.reebok.com/products/reebok-mens-zignition-running-shoes-blue-white-168223'],
    ['Energen Run 4', 'road', 'recovery', 'https://www.reebok.com/collections/running-shoes/products/reebok-mens-energen-run-4-running-shoes-light-fog-white-118745'],
    ['ZigWild Trail 6', 'trail', 'mixed', 'https://www.reebok.com/collections/running-shoes/products/reebok-zigwild-trail-6-shoes-black-cold-grey-7-ftwr-white-105487']
  ],
  'Under Armour': [
    ['UA Velociti SPD 5', 'road', 'speed', 'https://www.underarmour.com/en-us/p/ua_velociti_spd_5_womens_running_shoes/6000017.html?dwvar_6000017_color=698'],
    ['UA Velociti Pro 2', 'road', 'speed', 'https://www.underarmour.com/en-us/p/ua_velociti_pro_2_unisex_running_shoes/6005378.html?dwvar_6005378_color=102'],
    ['UA Velociti Pace', 'road', 'daily', 'https://www.underarmour.com/en-us/p/ua_velociti_pace_womens_running_shoes/6009108.html?dwvar_6009108_color=698'],
    ['UA Velociti Distance', 'road', 'long-run', 'https://www.underarmour.com/en-us/p/ua_velociti_distance_mens_running_shoes/6006030.html?dwvar_6006030_color=001'],
    ['UA Velociti Distance Storm', 'road', 'long-run', 'https://www.underarmour.com/en-us/p/ua_velociti_distance_storm_unisex_running_shoes/6013477.html?dwvar_6013477_color=100'],
    ['UA Surge 5', 'road', 'daily', 'https://www.underarmour.com/en-us/p/ua_surge_5_mens_running_shoes/6010459.html?dwvar_6010459_color=449', {
      widths: {
        options: ['Normal', 'Extra wide'],
        url: 'https://www.underarmour.com/en-us/p/ua_surge_5_wide_4e_mens_running_shoes/6010461.html?dwvar_6010461_color=001',
        note: 'The US men’s listing has a separate Wide (4E) version.'
      }
    }],
    ['UA Charged+ Turbulence 3', 'road', 'daily', 'https://www.underarmour.com/en-us/p/ua_charged%2B_turbulence_3_mens_running_shoes/6006717.html?dwvar_6006717_color=448'],
    ['UA Charged+ Assert 11', 'road', 'daily', 'https://www.underarmour.com/en-us/p/ua_charged%2B_assert_11_mens_running_shoes/6006723.html?dwvar_6006723_color=448'],
    ['UA Charged+ Rogue 6', 'road', 'daily', 'https://www.underarmour.com/en-us/p/ua_charged%2B_rogue_6_mens_running_shoes/6006719.html?dwvar_6006719_color=448'],
    ['UA Charged Bandit Trail 4', 'trail', 'mixed', 'https://www.underarmour.com/en-us/p/ua_charged_bandit_trail_4_mens_trail_running_shoes/6010413.html?dwvar_6010413_color=001']
  ],
  ANTA: [
    ['C202 7', 'road', 'long-run', 'https://ae.anta.com/products/anta-c202-7-men'],
    ['PG7 Journey 2', 'road', 'daily', 'https://ae.anta.com/products/anta-pg7-journey-2-men'],
    ['Cloudrise', 'road', 'daily', 'https://ae.anta.com/products/anta-cloudrise-running-shoes'],
    ['MACH 6.0', 'road', 'long-run', 'https://ae.anta.com/products/anta-mach-6-0-men'],
    ['Zone 2 90', 'road', 'super-trainer', 'https://ae.anta.com/products/812625579-7'],
    ['Saker', 'trail', 'mixed', 'https://anta.com/products/mens-anta-saker'],
    ['Wind Wander', 'trail', 'mixed', 'https://anta.com/products/mens-anta-wind-wander-running-shoes?variant=50360751816995']
  ]
};

export const expandedRemaining = Object.entries(modelsByBrand).flatMap(([brand, rows]) =>
  rows.map(([name, surface, category, url, extra]) => ({ brand, name, surface, category, url, ...extra }))
);

export const remainingCatalogs = {
  '361°': {
    road: 'https://361sport.com/collections/361-all-running-shoes',
    trail: 'https://www.361usa.com/collections/trail-running'
  },
  Diadora: {
    road: 'https://www.diadora.com/en/us/sport-running-shoes/',
    trail: 'https://www.diadora.com/en/id/sestriere/'
  },
  Reebok: {
    road: 'https://www.reebok.com/collections/running-shoes',
    trail: 'https://www.reebok.com/collections/trail-running-shoes?current=1'
  },
  'Under Armour': {
    road: 'https://www.underarmour.com/en-us/c/shoes/running/running/',
    trail: 'https://www.underarmour.com/en-us/c/shoes/outdoor/adult/'
  },
  ANTA: {
    road: 'https://ae.anta.com/collections/running',
    trail: 'https://anta.com/collections/trail-running'
  }
};
