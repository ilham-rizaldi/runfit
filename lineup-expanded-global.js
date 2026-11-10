// Direct model pages and broader running catalogs from each manufacturer.
const products = {
  Nike: [
    ['Pegasus Plus 2', 'road', 'daily', 'https://www.nike.com/id/t/pegasus-plus-2-mens-road-running-shoes-EjLO0njP/IM2541-202'],
    ['Pegasus Premium', 'road', 'daily', 'https://www.nike.com/id/t/pegasus-premium-mens-road-running-shoes-xzQQKz'],
    ['Vomero Premium', 'road', 'recovery', 'https://www.nike.com/id/t/vomero-premium-mens-road-running-shoes-s9CFNhEB/IQ6943-001'],
    ['Structure Plus', 'road', 'stability', 'https://www.nike.com/id/t/structure-plus-mens-road-running-shoes-bU4cV52D/HQ3048-103'],
    ['Streakfly 2', 'road', 'short-race', 'https://www.nike.com/id/t/streakfly-2-mens-road-racing-shoes-lmUjPz7b'],
    ['Zoom Rival Fly 4', 'road', 'short-race', 'https://www.nike.com/id/t/zoom-rival-fly-4-road-racing-shoes-RjvSJm'],
    ['Zoom Fly 6', 'road', 'super-trainer', 'https://www.nike.com/id/t/zoom-fly-6-mens-road-racing-shoes-PZG8ZD'],
    ['Downshifter 14', 'road', 'daily', 'https://www.nike.com/id/t/downshifter-14-mens-road-running-shoe-6hPgelcN/IB1895-110'],
    ['Revolution 8', 'road', 'daily', 'https://www.nike.com/id/t/revolution-8-mens-road-running-shoes-WMhKGn'],
    ['Juniper Trail 3', 'trail', 'hardpack', 'https://www.nike.com/id/t/juniper-trail-3-mens-trail-running-shoes-b0qq1T/FQ0904-007'],
    ['ACG Ultrafly Trail', 'trail', 'trail-race', 'https://www.nike.com/id/t/acg-ultrafly-trail-racing-shoes-9h9W2HdO/IR7317-300'],
    ['ACG Pegasus Trail GORE-TEX', 'trail', 'wet-weather', 'https://www.nike.com/id/t/acg-pegasus-trail-gore-tex-mens-waterproof-trail-running-shoes-SSwfMTX3/IQ1084-600'],
    ['ACG Zegama Trail GORE-TEX', 'trail', 'wet-weather', 'https://www.nike.com/id/t/acg-zegama-trail-gore-tex-mens-waterproof-trail-running-shoes-G8sIfoQ7/IO7932-003'],
  ],
  adidas: [
    ['Adizero Takumi Sen 11', 'road', 'short-race', 'https://www.adidas.com/us/adizero-takumi-sen-11-shoes/JQ2812.html'],
    ['Adizero Adios 9', 'road', 'short-race', 'https://www.adidas.com/us/adizero-adios-9-running-shoes/KH8894.html'],
    ['Adizero Prime X3 Strung', 'road', 'super-trainer', 'https://www.adidas.com/us/adizero-prime-x3-strung-shoes/JP9192.html'],
    ['Adizero SL 2', 'road', 'daily', 'https://www.adidas.com/us/adizero-sl-2-shoes/JQ0352.html'],
    ['Supernova Prima 2', 'road', 'long-run', 'https://www.adidas.com/us/supernova-prima-2-running-shoes/JR7363.html'],
    ['Adistar 4', 'road', 'long-run', 'https://www.adidas.com/us/adistar-4-running-shoes/JR0314.html'],
    ['Duramo Speed 2', 'road', 'speed', 'https://www.adidas.com/us/duramo-speed-2-running-shoes/KJ2866.html'],
    ['Runfalcon 5', 'road', 'daily', 'https://www.adidas.com/us/runfalcon-5-running-shoes/JR5089.html'],
    ['Terrex Agravic GTX 2', 'trail', 'wet-weather', 'https://www.adidas.com/us/terrex-agravic-gtx-2-trail-running-shoes/HQ5089.html'],
    ['Terrex Agravic TT', 'trail', 'technical', 'https://www.adidas.com/us/terrex-agravic-tt-trail-running-shoes/HP7011.html'],
    ['Terrex Tracefinder Plus', 'trail', 'mixed', 'https://www.adidas.com/us/terrex-tracefinder-plus-trail-running-shoes/HQ5105.html'],
    ['Tracefinder', 'trail', 'hardpack', 'https://www.adidas.com/us/tracefinder-trail-running-shoes/JR9137.html'],
    ['Terrex Tracefinder 2 CLIMAPROOF', 'trail', 'wet-weather', 'https://www.adidas.com/us/terrex-tracefinder-2-climaproof-trail-running-shoes/JI0274.html'],
    ['Terrex Agravic SL', 'trail', 'short-fast', 'https://www.adidas.com/us/terrex-agravic-sl-trail-running-shoes/KJ0382.html'],
    ['Terrex Agravic Speed 2', 'trail', 'trail-race', 'https://www.adidas.com/us/terrex-agravic-speed-2-trail-running-shoes/HQ5074.html'],
  ],
  'New Balance': [
    ['Fresh Foam X 860v15', 'road', 'stability', 'https://www.newbalance.com/pd/fresh-foam-x-860v15/M860V15_RU-FTW-802888.html'],
    ['Fresh Foam X More v6', 'road', 'recovery', 'https://www.newbalance.com/pd/fresh-foam-x-more-v6/WMORLB6-D-075.html'],
    ['FuelCell SuperComp Pacer v2', 'road', 'short-race', 'https://www.newbalance.com/pd/fuelcell-supercomp-pacer-v2/MFCRR9HZ-D-09.html'],
    ['FuelCell SuperComp Trainer v3', 'road', 'super-trainer', 'https://www.newbalance.co.id/new-balance-rebel-men-s-running-shoes-black-yellow-1.html'],
    ['FuelCell Propel v5', 'road', 'daily', 'https://www.newbalance.co.uk/pd/fuelcell-propel-v5/MFCPRLK5-D-075.html'],
    ['DynaSoft Nitrel v6', 'trail', 'road-to-trail', 'https://www.newbalance.com/pd/dynasoft-nitrel-v6/MTNTRLG6-D-09.html'],
    ['Hierro v9 GORE-TEX', 'trail', 'wet-weather', 'https://www.newbalance.com/pd/hierro-v9-gore-tex/WHIG5G3-D-065.html'],
  ],
  Altra: [
    ['Escalante 5', 'road', 'daily', 'https://www.altrarunning.com/en-us/products/mens-escalante-5-al0a85t2'],
    ['Experience Flow 3', 'road', 'daily', 'https://www.altrarunning.com/en-us/products/mens-experience-flow-3-al0a85ss?variant=48060827828391'],
    ['Experience Flow ST', 'road', 'stability', 'https://www.altrarunning.com/en-us/products/mens-experience-flow-st-al0a85rj?variant=50873169248423'],
    ['Experience Form', 'road', 'stability', 'https://www.altrarunning.com/en-us/products/mens-experience-form-al0a85nt?variant=47943907901607'],
    ['Paradigm 8', 'road', 'stability', 'https://www.altrarunning.com/en-us/products/mens-paradigm-8-al0a85rm?variant=47944101724327'],
    ['Provision 8', 'road', 'stability', 'https://www.altrarunning.com/en-us/products/mens-provision-8-al0a85pa?variant=48060454076583'],
    ['FWD VIA 2', 'road', 'long-run', 'https://www.altrarunning.com/en-us/products/mens-fwd-via-2-al0a85sr?variant=47944128692391'],
    ['Escalante Racer 2', 'road', 'short-race', 'https://www.altrarunning.com/en-us/products/mens-escalante-racer-2-al0a85ng?variant=47943874511015'],
    ['Superior 7', 'trail', 'short-fast', 'https://www.altrarunning.com/en-us/products/mens-superior-7-al0a85q7'],
    ['Experience Wild 3', 'trail', 'mixed', 'https://www.altrarunning.com/en-us/products/mens-experience-wild-3-al0a85u6'],
    ['Experience Wild 3+', 'trail', 'technical', 'https://www.altrarunning.com/en-us/products/mens-experience-wild-3-al0a85v0?variant=48434266374311'],
    ['Mont Blanc Carbon', 'trail', 'trail-race', 'https://www.altrarunning.com/en-us/collections/zero-drop-shoes/products/mens-mont-blanc-carbon-al0a82ca'],
    ['Timp 6 GTX', 'trail', 'wet-weather', 'https://www.altrarunning.com/en-us/products/mens-timp-6-gtx-al0a85sp'],
    ['Lone Peak 9+ GTX', 'trail', 'wet-weather', 'https://www.altrarunning.com/en-us/products/mens-lone-peak-9-gtx-al0a85ut?variant=48060851355815'],
  ],
  On: [
    ['Cloudrunner 3', 'road', 'stability', 'https://www.on.com/en-us/products/cloudrunner-3-m-3mg1007/mens/agave-black-shoes-3MG10075016'],
    ['Cloudrunner 3 Max', 'road', 'stability', 'https://www.on.com/en-us/products/cloudrunner-3-max-m-3mg3020/mens/tide-celeste-shoes-3MG30205249'],
    ['Cloudrunner 3 Waterproof', 'road', 'stability', 'https://www.on.com/en-us/products/cloudrunner-3-wp-m-3mg1010/mens/pollen-haze-shoes-3MG10106044'],
    ['Cloudsurfer Max', 'road', 'long-run', 'https://www.on.com/en-us/products/cloudsurfer-max-m-3mf3043/mens/saffron-squash-shoes-3MF30435168'],
    ['Cloudsurfer Next', 'road', 'daily', 'https://www.on.com/en-us/products/cloudsurfer-next-3me3002/mens/stone-marsh-shoes-3ME30024720'],
    ['Cloudswift 4', 'road', 'daily', 'https://www.on.com/en-us/products/cloudswift-4-3mf1013/mens/eclipse-ember-shoes-3MF10135145'],
    ['Cloudmonster 3 Hyper', 'road', 'super-trainer', 'https://www.on.com/en-us/products/cloudmonster-3-hyper-3mg1006/mens/ivory-flurry-shoes-3MG10065262'],
    ['Cloudboom Max', 'road', 'race', 'https://www.on.com/en-us/products/cloudboom-max-m-3mf3031/mens/white-flurry-shoes-3MF30315187'],
    ['Cloudboom Volt', 'road', 'race', 'https://www.on.com/en-us/products/cloudboom-volt-m-3mf3098/mens/celeste-isle-shoes-3MF30985531'],
    ['LightSpray Cloudboom Strike 2', 'road', 'race', 'https://www.on.com/en-us/products/cloudboom-strike-2-ls-u-3ug3002/unisex/white-verdite-shoes-3UG30025363'],
    ['Cloudsoma', 'trail', 'short-fast', 'https://www.on.com/en-us/products/cloudsoma-m-3mf3065/mens/urchin-agave-shoes-3MF30655314'],
    ['Cloudvista 3', 'trail', 'mixed', 'https://www.on.com/en-us/products/cloudvista-3-m-3mg3004/mens/grain-saffron-shoes-3MG30045160'],
    ['Cloudvista 3 Waterproof', 'trail', 'wet-weather', 'https://www.on.com/en-us/products/cloudvista-3-waterproof-m-3mg3025/mens/silver-ore-shoes-3MG30255317'],
    ['Cloudsurfer Trail 2', 'trail', 'mixed', 'https://www.on.com/en-us/products/cloudsurfer-trail-2-m-3mf3022/mens/platinum-tide-shoes-3MF30225322'],
    ['Cloudsurfer Trail 2 Waterproof', 'trail', 'wet-weather', 'https://www.on.com/en-us/products/cloudsurfer-trail-2-wp-m-3mf3024/mens/portobello-pebble-shoes-3MF30245326'],
    ['Cloudultra Peak', 'trail', 'trail-race', 'https://www.on.com/en-us/products/cloudultra-peak-m-3mg1038/mens/black-black-shoes-3MG10381043'],
    ['Cloudultra Pro', 'trail', 'ultra', 'https://www.on.com/en-us/products/cloudultra-pro-m-3mf3017/mens/ivory-celeste-shoes-3MF30175298'],
  ],
  PUMA: [
    ['MagMax NITRO 2', 'road', 'recovery', 'https://us.puma.com/us/en/pd/magmax-nitro-2-mens-road-running-shoes/312125'],
    ['ForeverRun NITRO 3', 'road', 'stability', 'https://us.puma.com/us/en/pd/foreverrun-nitro-3-mens-road-running-shoes/312942?size=0230&swatch=02'],
    ['Deviate Pure NITRO', 'road', 'speed', 'https://us.puma.com/us/en/pd/deviate-pure-nitro-mens-running-shoes/313904?size=0230&swatch=18'],
    ['Deviate NITRO Elite 4', 'road', 'race', 'https://us.puma.com/us/en/pd/deviate-nitro-elite-4-mens-road-running-shoes/312127?size=0230&swatch=10'],
    ['FAST-R NITRO Elite 3', 'road', 'race', 'https://us.puma.com/us/en/pd/fast-r-nitro-elite-3-mens-road-running-shoes/312060?size=0260&swatch=12'],
    ['Velocity NITRO Trail', 'trail', 'road-to-trail', 'https://us.puma.com/us/en/pd/velocity-nitro-trail-running-shoes-men-mens-trail-running-shoes/312950?size=0230&swatch=01'],
    ['Deviate NITRO Elite Trail', 'trail', 'trail-race', 'https://us.puma.com/us/en/pd/deviate-nitro-elite-mens-trail-running-shoes/310034?size=0230&swatch=08'],
    ['Voyage NITRO 4 GORE-TEX', 'trail', 'wet-weather', 'https://us.puma.com/us/en/pd/voyage-nitro-4-gore-tex-mens-waterproof-trail-running-shoes/311043?swatch=03'],
    ['FAST-Trac NITRO 4 GORE-TEX', 'trail', 'wet-weather', 'https://us.puma.com/us/en/pd/fast-trac-nitro-4-gore-tex-mens-waterproof-trail-running-shoes/312136?size=0230&swatch=01'],
  ],
};

const embeddedGuides = new Set([
  'New Balance Fresh Foam X 860v15', 'New Balance Fresh Foam X More v6',
  'New Balance FuelCell SuperComp Pacer v2', 'New Balance FuelCell SuperComp Trainer v3',
  'New Balance DynaSoft Nitrel v6', 'Altra Paradigm 8',
  'On Cloudrunner 3', 'On Cloudsurfer Max', 'On Cloudvista 3', 'On Cloudsurfer Trail 2 Waterproof',
]);

const widthRecords = {
  'New Balance Fresh Foam X 860v15': {
    options: ['Narrow', 'Normal', 'Wide', 'Extra Wide'],
    note: 'The US men’s listing shows B, D, 2E and 4E.',
  },
  'New Balance Fresh Foam X More v6': {
    options: ['Normal', 'Wide', 'Extra Wide'],
    note: 'The US women’s listing shows B, D and 2E.',
  },
  'New Balance FuelCell SuperComp Pacer v2': {
    options: ['Normal', 'Wide'], note: 'The US men’s listing shows D and 2E.',
  },
  'New Balance DynaSoft Nitrel v6': {
    options: ['Normal', 'Wide', 'Extra Wide'],
    note: 'The US men’s listing shows D, 2E and 4E.',
  },
  'Altra Paradigm 8': {
    options: ['Normal', 'Wide'], note: 'The US guide lists traditional D and Wide 2E for the Paradigm family.',
  },
  'On Cloudrunner 3': {
    options: ['Normal', 'Wide'], note: 'On US labels the standard model Regular and lists a separate Wide variant.',
    url: 'https://www.on.com/en-us/products/cloudrunner-3-wide-m-3mg1009/mens/ghost-verdite-shoes-3MG10095248',
  },
  'On Cloudsurfer Max': {
    options: ['Normal', 'Wide'], note: 'On US labels the standard model Regular and lists a separate Wide variant.',
    url: 'https://www.on.com/en-us/products/cloudsurfer-max-wide-m-3mf3080/mens/midnight-ivory-shoes-3MF30803053',
  },
};

export const expandedGlobal = Object.entries(products).flatMap(([brand, models]) =>
  models.map(([name, surface, category, url]) => {
    const key = brand + ' ' + name;
    const width = widthRecords[key];
    return {
      brand, name, surface, category, url,
      ...(embeddedGuides.has(key) ? { sizeUrl: url, sizeKind: 'embedded' } : {}),
      ...(width ? { widths: { url, ...width } } : {}),
    };
  })
);

export const globalCatalogs = {
  Nike: {
    road: 'https://www.nike.com/id/w/road-shoes-38l5kz8kwewzy7ok',
    trail: 'https://www.nike.com/id/w/mens-trail-running-shoes-75jcnznik1zy7ok',
  },
  adidas: {
    road: 'https://www.adidas.com/us/men-running-shoes',
    trail: 'https://www.adidas.com/us/men-trail_running-shoes',
  },
  'New Balance': {
    road: 'https://www.newbalance.com/running-shoes/',
    trail: 'https://www.newbalance.com/mens/shoes/hiking-and-trail/',
  },
  Altra: {
    road: 'https://www.altrarunning.com/en-us/collections/mens-road-running-shoes',
    trail: 'https://www.altrarunning.com/en-us/collections/mens-trail-running-shoes',
  },
  On: {
    road: 'https://www.on.com/en-us/shop/mens/shoes/road-running',
    trail: 'https://www.on.com/en-us/shop/mens/shoes/trail-running',
  },
  PUMA: {
    road: 'https://us.puma.com/us/en/sport/running/road-running',
    trail: 'https://us.puma.com/us/en/sport/running/trail-running',
  },
};
