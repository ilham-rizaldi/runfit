export const specialCatalogs = {
  'Mount to Coast': {
    road: 'https://global.mounttocoast.com/collections/mens-road-running-shoes',
    trail: 'https://global.mounttocoast.com/collections/mens-trail-running-shoes',
  },
  'Topo Athletic': {
    road: 'https://www.topoathletic.com/men/mens-shoes/activity/Road',
    trail: 'https://www.topoathletic.com/men/mens-shoes/activity/Trail',
  },
  Merrell: {
    road: 'https://www.merrell.com/US/en/mens-road-running/',
    trail: 'https://www.merrell.com/US/en/trail-running-shoes-apparel/',
  },
  KIPRUN: {
    road: 'https://www.decathlon.co.uk/shop-in-shop/kiprun-road-running-shoes',
    trail: 'https://www.decathlon.co.uk/shop-in-shop/kiprun-trail-running-shoes',
  },
  Mizuno: {
    road: 'https://emea.mizuno.com/eu/en/sports/running/shoes/',
    trail: 'https://emea.mizuno.com/eu/en-tr/sports/running/trail-running/shoes/',
  },
  Columbia: {
    trail: 'https://www.columbia.com/c/trailrunning-shoes/',
  },
};

const products = {
  'Mount to Coast': [
    ['C1', 'road', 'super-trainer', 'https://global.mounttocoast.com/products/c1'],
    ['C135', 'road', 'race', 'https://global.mounttocoast.com/products/c135'],
    ['S1', 'road', 'daily', 'https://global.mounttocoast.com/products/s1'],
    ['P1', 'road', 'stability', 'https://mounttocoast.com/products/p1'],
    ['M1', 'trail', 'technical', 'https://global.mounttocoast.com/products/m1'],
  ],
  'Topo Athletic': [
    ['Ultrafly 6', 'road', 'stability', 'https://www.topoathletic.com/mens-ultrafly-6'],
    ['Aura 2', 'road', 'stability', 'https://www.topoathletic.com/mens-aura'],
    ['Atmos 2', 'road', 'long-run', 'https://www.topoathletic.com/mens-atmos-2'],
    ['Specter 3', 'road', 'super-trainer', 'https://www.topoathletic.com/mens-specter'],
    ['Specter Elite', 'road', 'race', 'https://www.topoathletic.com/mens-specter-elite'],
    ['Magnifly 6', 'road', 'daily', 'https://www.topoathletic.com/mens-magnifly'],
    ['ST-6', 'road', 'daily', 'https://www.topoathletic.com/mens-st-6'],
    ['Aura', 'road', 'stability', 'https://www.topoathletic.com/mens-aura-1'],
    ['Fli-Lyte 6', 'road', 'daily', 'https://www.topoathletic.com/mens-fli-lyte-6'],
    ['Phantom 4 WP', 'road', 'long-run', 'https://www.topoathletic.com/mens-phantom-4-wp'],
    ['Cyclone 3', 'road', 'speed', 'https://www.topoathletic.com/mens-cyclone-3'],
    ['Specter 2', 'road', 'super-trainer', 'https://www.topoathletic.com/mens-specter-2'],
    ['Ultraventure 5', 'trail', 'ultra', 'https://www.topoathletic.com/mens-ultraventure'],
    ['Vista', 'trail', 'ultra', 'https://www.topoathletic.com/mens-vista'],
    ['MTN Racer 4', 'trail', 'trail-race', 'https://www.topoathletic.com/mens-mtn-racer-4'],
    ['Pursuit 3', 'trail', 'mixed', 'https://www.topoathletic.com/mens-pursuit'],
    ['Ultraventure 5 GTX', 'trail', 'wet-weather', 'https://www.topoathletic.com/mens-ultraventure-5-GTX'],
    ['Terraventure 5 GTX', 'trail', 'wet-weather', 'https://www.topoathletic.com/mens-terraventure-gtx'],
    ['Terraventure 4 WP', 'trail', 'wet-weather', 'https://www.topoathletic.com/mens-terraventure-4-WP'],
  ],
  Merrell: [
    ['Morphlite', 'trail', 'road-to-trail', 'https://www.merrell.com/US/en/morphlite/58734M.html?dwvar_58734M_color=J068063', {
      widths: {
        options: ['Normal', 'Wide'],
        url: 'https://www.merrell.com/US/en/morphlite-wide-width/59115M.html?dwvar_59115M_color=J068065W',
        note: 'Merrell US lists a separate men’s Wide Width version.',
      },
    }],
    ['ProMorph', 'trail', 'road-to-trail', 'https://www.merrell.com/US/en/promorph/60580M.html?dwvar_60580M_color=J068569'],
    ['Agility Trail', 'trail', 'mixed', 'https://www.merrell.com/US/en/agility-trail/60972M.html?dwvar_60972M_color=J00003280'],
    ['Agility Peak 6 GORE-TEX', 'trail', 'wet-weather', 'https://www.merrell.com/US/en/agility-peak-6-gore-tex/60984M.html?dwvar_60984M_color=J00005562'],
    ['Agility Peak 6 BOA', 'trail', 'technical', 'https://www.merrell.com/US/en/agility-peak-6-boa/61318M.html?dwvar_61318M_color=J00005569'],
    ['Nova 4', 'trail', 'mixed', 'https://www.merrell.com/US/en/nova-4/60175M.html?dwvar_60175M_color=J068407'],
    ['Nova 4 Waterproof', 'trail', 'wet-weather', 'https://www.merrell.com/US/en/nova-4-waterproof/60177M.html?dwvar_60177M_color=J068397'],
    ['Antora 4 Allure', 'trail', 'mixed', 'https://www.merrell.com/US/en/antora-4-allure/60989W.html?dwvar_60989W_color=J00003270'],
    ['Antora 4 Waterproof', 'trail', 'wet-weather', 'https://www.merrell.com/US/en/antora-4-waterproof/60160W.html?dwvar_60160W_color=J068442'],
    ['MTL Adapt Matryx', 'trail', 'ultra', 'https://www.merrell.com/US/en/mtl-adapt-maytrx/60172M.html?dwvar_60172M_color=J00004893'],
    ['MTL Skyfire 2 Matryx', 'trail', 'trail-race', 'https://www.merrell.com/US/en/mtl-skyfire-2-matryx/59188M.html'],
  ],
  KIPRUN: [
    ['Kipcore', 'road', 'daily', 'https://www.decathlon.co.uk/p/kiprun-kipcore-men-s-road-running-shoes-white-beige/353286/c227c179m8958670'],
    ['Kipcore Premium', 'road', 'daily', 'https://www.decathlon.co.uk/p/women-s-versatile-road-running-shoes-kiprun-kipcore-premium-blue-pink/353362/c406c140c141m8927043'],
    ['Kipcore WR', 'road', 'daily', 'https://www.decathlon.co.uk/p/women-s-water-repellent-running-shoes-kiprun-kipcore-wr-purple/353305/c190c89c126m8941109'],
    ['Kipride', 'road', 'daily', 'https://www.decathlon.co.uk/p/men-s-road-running-shoe-kiprun-kipride-blue/352928/c41c157c183m8960614'],
    ['Kipride Max', 'road', 'long-run', 'https://www.decathlon.co.uk/p/kiprun-kipride-max-men-s-road-running-shoes-blue-and-orange/362185/c309c231c125m8960620'],
    ['Kipstorm Tempo', 'road', 'speed', 'https://www.decathlon.co.uk/p/men-s-road-running-shoes-kiprun-kipstorm-tempo-green-yellow/362245/c266c132m9001574'],
    ['Kipstorm Challenger', 'road', 'race', 'https://www.decathlon.co.uk/p/men-s-carbon-running-shoes-kiprun-kipstorm-challenger-green-and-yellow/358423/c266c132m9001575'],
    ['KS900 2', 'road', 'long-run', 'https://www.decathlon.co.uk/p/kiprun-ks900-2-men-s-running-shoes-purple-yellow/_/R-p-341832?c=steel+blue_cotton+white_fluo+pale+orange'],
    ['KS900 Light', 'road', 'daily', 'https://www.decathlon.co.uk/p/men-s-kiprun-ks900-light-running-shoes-grey-yellow/333004/c406c132m8830204'],
    ['KD500 3', 'road', 'speed', 'https://www.decathlon.co.uk/p/kiprun-kd500-3-women-s-running-shoes-white-and-coral/347155/c227c139m8830231'],
    ['KD900 Light', 'road', 'speed', 'https://www.decathlon.co.uk/p/kiprun-kd900-light-women-s-running-shoes-blue-and-black/339629/c143c382m8967597'],
    ['KD900X LD 2', 'road', 'race', 'https://www.decathlon.co.uk/p/kiprun-kd900x-ld2-women-s-running-shoes-with-carbon-plate-pink/_/R-p-360791/'],
    ['Kipcore Gravel', 'trail', 'road-to-trail', 'https://www.decathlon.co.uk/p/kiprun-kipcore-gravel-men-s-road-and-trail-running-shoes-black-grey/362150/c382c208c248m8958677'],
    ['Kipride Gravel', 'trail', 'road-to-trail', 'https://www.decathlon.co.uk/p/men-s-road-and-trail-running-shoes-kiprun-kipride-gravel-beige-and-orange/365827/c279c222c126m8990034'],
    ['Kipsummit', 'trail', 'mixed', 'https://www.decathlon.co.uk/p/kiprun-kipsummit-men-s-trail-running-shoes-grey-orange/361994/c71m8932900'],
    ['Kipsummit Max', 'trail', 'ultra', 'https://www.decathlon.co.uk/p/kiprun-kipsummit-max-men-s-trail-running-shoes-grey-black/362206/c208c382m8933583'],
    ['Kipsummit WP', 'trail', 'wet-weather', 'https://www.decathlon.co.uk/p/men-s-waterproof-trail-running-shoe-kiprun-kipsummit-wp-yellow/362177/c153c177m8933573'],
    ['Kipsummit Race', 'trail', 'trail-race', 'https://www.decathlon.co.uk/p/men-s-trail-running-shoes-carbon-plate-kiprun-kipsummit-race-green/361989/c177m8947568'],
    ['Kipclimb', 'trail', 'technical', 'https://www.decathlon.co.uk/p/kiprun-kipclimb-men-s-trail-running-shoes-black/366862/c382c71m9001242'],
    ['Kipclimb Max', 'trail', 'technical', 'https://www.decathlon.co.uk/p/kiprun-kipclimb-max-men-s-trail-running-shoes-beige/366852/c370m9001260'],
    ['MTC2', 'trail', 'mixed', 'https://www.decathlon.co.uk/p/men-s-trail-running-shoe-kiprun-mtc2-beige/334466/c179c346c382m8914126'],
    ['TR2', 'trail', 'road-to-trail', 'https://www.decathlon.co.uk/p/men-s-trail-running-shoes-tr2-carbon-grey/312120/c71c169c356m8827180'],
    ['Race Ultra 2', 'trail', 'ultra', 'https://www.decathlon.co.uk/p/trail-running-shoes-kiprun-race-ultra-2/343740/c382m8772272'],
  ],
  Mizuno: [
    ['Wave Sky 9', 'road', 'long-run', 'https://emea.mizuno.com/eu/en-gb/wave-sky-9/J1GC250255.html'],
    ['Neo Zen 2', 'road', 'daily', 'https://emea.mizuno.com/eu/en/mizuno-neo-zen-2/J1GC268605.html'],
    ['Wave Rebellion Flash 3', 'road', 'speed', 'https://emea.mizuno.com/eu/en/wave-rebellion-flash-3/J1GC253551.html'],
    ['Wave Rebellion Pro 3', 'road', 'race', 'https://emea.mizuno.com/eu/hr-hr/wave-rebellion-pro-3/U1GD253303.html'],
    ['Wave Mujin 11', 'trail', 'technical', 'https://emea.mizuno.com/eu/en/wave-mujin-11/J1GJ257003.html'],
    ['Wave Ibuki 5', 'trail', 'mixed', 'https://emea.mizuno.com/eu/en-tr/wave-ibuki-5/J1GJ257301.html'],
    ['Wave Ibuki 5 GTX', 'trail', 'wet-weather', 'https://emea.mizuno.com/eu/en-tr/wave-ibuki-5-gtx/J1GJ255902.html'],
    ['Wave Rider TT', 'trail', 'road-to-trail', 'https://emea.mizuno.com/eu/en/wave-rider-tt/J1GC223201.html'],
    ['Neo Accera', 'trail', 'trail-race', 'https://emea.mizuno.com/eu/en/mizuno-neo-accera/J1GJ265051.html'],
  ],
  Columbia: [
    ['Konos TRS', 'trail', 'road-to-trail', 'https://www.columbia.com/p/mens-konos-trs-shoe-2079321.html?color=015'],
    ['Konos TRS OutDry', 'trail', 'wet-weather', 'https://www.columbia.com/p/mens-konos-trs-outdry-shoe-2099811.html?color=012'],
    ['Konos Speed Trail ATR', 'trail', 'technical', 'https://www.columbia.com/p/mens-konos-speed-trail-atr-shoe-2162101.html?color=426'],
    ['Konos Trillium ATR', 'trail', 'technical', 'https://www.columbia.com/p/mens-konos-trillium-atr-shoe-2145281.html'],
    ['Konos Trillium ATR OutDry', 'trail', 'wet-weather', 'https://www.columbia.com/p/mens-konos-trillium-atr-outdry-shoe-2169921.html'],
    ['Konos Elevate', 'trail', 'mixed', 'https://www.columbia.com/p/mens-konos-elevate-shoe-2144011.html'],
  ],
};

const embeddedGuideBrands = new Set(['Topo Athletic', 'Merrell']);

export const expandedSpecial = Object.entries(products).flatMap(([brand, models]) =>
  models.map(([name, surface, category, url, details]) => ({
    brand, name, surface, category, url,
    ...(embeddedGuideBrands.has(brand) ? { sizeKind: 'embedded', sizeUrl: url } : {}),
    ...details,
  }))
);
