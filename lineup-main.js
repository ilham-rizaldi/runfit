const products = {
  HOKA: [
    ['Clifton 11', 'road', 'daily', 'https://hoka.com.my/products/clifton-11-womens-1176573-wwh'],
    ['Bondi 9', 'road', 'long-run', 'https://hoka.com.my/products/bondi-9-men-1162011-sntf'],
    ['Mach 7', 'road', 'speed', 'https://hoka.com.my/products/mach-7-men-1171904-aycb'],
    ['Cielo X1 3.0', 'road', 'race', 'https://au.hoka.com/products/cielo-x1-30-1171927-crbn-crbn'],
    ['Mafate 5', 'trail', 'technical', 'https://hoka.com.my/products/mafate-5-men-1168722-cmntb'],
    ['Tecton X 4', 'trail', 'ultra', 'https://au.hoka.com/products/tecton-x-4-1176632-bnng-bnng'],
  ],
  Salomon: [
    ['Aero Blaze 4', 'road', 'daily', 'https://id.salomon.com/en/products/aero-blaze-4-l45395500'],
    ['Aero Glide 4', 'road', 'long-run', 'https://www.salomon.com/en-us/product/aero-glide-4-li8681'],
    ['S/LAB Phantasm 3', 'road', 'race', 'https://www.salomon.com/en-us/product/s-lab-phantasm-3-li8687'],
    ['Speedcross 6', 'trail', 'mud', 'https://www.salomon.com/en-us/product/speedcross-6-lg9212'],
    ['S/LAB Ultra Glide 2', 'trail', 'ultra', 'https://www.salomon.com/en-us/product/s-lab-ultra-glide-2-li1865/L45484100'],
  ],
  ASICS: [
    ['NOVABLAST 6', 'road', 'daily', 'https://www.asics.com/us/en-us/novablast-6/p/ANA_1011C243-100.html'],
    ['SUPERBLAST 3', 'road', 'long-run', 'https://www.asics.com/us/en-us/superblast-3/p/ANA_1013A177-001.html'],
    ['MAGIC SPEED 5', 'road', 'speed', 'https://www.asics.com/us/en-us/magic-speed-5/p/ANA_1013A183-001.html'],
    ['TRABUCO 14', 'trail', 'technical', 'https://www.asics.com/nz/en-nz/trabuco-14-mens-1011c166-001', 'embedded'],
    ['TRABUCO MAX 5', 'trail', 'ultra', 'https://www.asics.com/us/en-us/trabuco-max-5/p/ANA_1011C164-200.html'],
  ],
  Brooks: [
    ['Ghost 18', 'road', 'daily', 'https://www.brooksrunning.com/en_us/mens/shoes/road-running-shoes/ghost-18/110493.html'],
    ['Adrenaline GTS 25', 'road', 'daily', 'https://www.brooksrunning.com/en_us/mens/shoes/road-running-shoes/adrenaline-gts-25/110454.html'],
    ['Glycerin Max 2', 'road', 'long-run', 'https://www.brooksrunning.com/en_us/mens/shoes/road-running-shoes/glycerin-max-2/110479.html'],
    ['Hyperion 3', 'road', 'speed', 'https://stores.brooksrunning.com/product/2315851/brooks-running-mens-hyperion-3'],
    ['Divide 6', 'trail', 'road-to-trail', 'https://www.brooksrunning.com/en_de/mens/trail-running-shoes/divide-6/110460.html'],
  ],
  Saucony: [
    ['Ride 19', 'road', 'daily', 'https://www.saucony.com/en/ride-19/60823M.html', 'embedded'],
    ['Guide 19', 'road', 'daily', 'https://www.saucony.com/en/guide-19/60838M.html', 'embedded'],
    ['Triumph 24', 'road', 'long-run', 'https://www.saucony.com/en/triumph-24/61229M.html', 'embedded'],
    ['Endorphin Pro 5', 'road', 'race', 'https://www.saucony.com/en/endorphin-pro-5/60803M.html', 'embedded'],
    ['Peregrine 16', 'trail', 'technical', 'https://www.saucony.com/en/peregrine-16/60848M.html?dwvar_60848M_color=S21066-101', 'embedded'],
    ['Xodus Ultra 4', 'trail', 'ultra', 'https://www.saucony.com/en/xodus-ultra-4/60330M.html?dwvar_60330M_color=S21032-245', 'embedded'],
  ],
  Nike: [
    ['Structure 26', 'road', 'daily', 'https://www.nike.com/t/structure-26-mens-road-running-shoes-M4sx9fru'],
    ['Vomero 18', 'road', 'long-run', 'https://www.nike.com/id/t/vomero-18-mens-road-running-shoes-Fevnk8Px'],
    ['Vomero Plus', 'road', 'long-run', 'https://www.nike.com/id/t/vomero-plus-mens-road-running-shoes-xLq3NyNp'],
    ['Alphafly 3', 'road', 'race', 'https://www.nike.com/id/t/alphafly-3-mens-road-racing-shoes-d6x9mh/FD8311-600'],
    ['Wildhorse 10', 'trail', 'technical', 'https://www.nike.com/t/wildhorse-10-mens-trail-running-shoes-juOQGIPO/FV2338-010'],
    ['ACG Zegama Trail', 'trail', 'ultra', 'https://www.nike.com/id/t/acg-zegama-trail-trail-running-shoes-45IgRhjL/HV8113-002'],
  ],
  adidas: [
    ['Supernova Rise 3', 'road', 'daily', 'https://www.adidas.com/us/supernova-rise-3-running-shoes/KK1203.html'],
    ['Adizero EVO SL', 'road', 'speed', 'https://www.adidas.com/us/adizero-evo-sl-shoes/KH9604.html'],
    ['Adizero Boston 13', 'road', 'speed', 'https://www.adidas.com/us/adizero-boston-13-shoes/JS4958.html'],
    ['Adizero Adios Pro 4', 'road', 'race', 'https://www.adidas.com/us/adizero-adios-pro-4-shoes/KJ7036.html'],
    ['Terrex Agravic 4', 'trail', 'mixed', 'https://www.adidas.com/us/terrex-agravic-4-trail-running-shoes/KJ8870.html'],
    ['Terrex Agravic Speed Ultra 2', 'trail', 'ultra', 'https://www.adidas.com/us/terrex-agravic-speed-ultra-2-trail-running-shoes/JS3534.html'],
  ],
  'New Balance': [
    ['Fresh Foam X 880v15', 'road', 'daily', 'https://www.newbalance.com/pd/fresh-foam-x-880v15/M880I15-D-115.html', 'embedded'],
    ['1080v15', 'road', 'long-run', 'https://www.newbalance.com/pd/1080v15/M108078J-4E-075.html', 'embedded'],
    ['FuelCell Rebel v5', 'road', 'speed', 'https://www.newbalance.com/pd/fuelcell-rebel-v5/MFCXV5-50690-TB.html'],
    ['FuelCell SuperComp Elite v5', 'road', 'race', 'https://www.newbalance.com/pd/fuelcell-supercomp-elite-v5/MRCELV5-50683-PR.html?dwvar_MRCELV5-50683-PR_style=MRCELLR5'],
    ['Fresh Foam X Hierro v9', 'trail', 'ultra', 'https://www.newbalance.com/pd/fresh-foam-x-hierro-v9/MHIER6Y6-4E-08.html', 'embedded'],
  ],
  Altra: [
    ['Torin 8', 'road', 'daily', 'https://www.altrarunning.com/en-us/products/mens-torin-8-al0a85qe'],
    ['Escalante 4', 'road', 'daily', 'https://www.altrarunning.com/en-us/products/womens-escalante-4-al0a85nf', 'embedded'],
    ['Vanish Carbon 2', 'road', 'race', 'https://www.altrarunning.com/en-us/products/mens-vanish-carbon-2-al0a85pc'],
    ['Lone Peak 9+', 'trail', 'mixed', 'https://www.altrarunning.com/en-us/products/mens-lone-peak-9-al0a85rg?variant=50901966848167', 'embedded'],
    ['Timp 6', 'trail', 'technical', 'https://www.altrarunning.com/en-us/products/mens-timp-6-al0a85t6', 'embedded'],
    ['Olympus 6', 'trail', 'ultra', 'https://www.altrarunning.com/en-us/products/mens-olympus-6-al0a85nj'],
  ],
  On: [
    ['Cloudsurfer 2', 'road', 'daily', 'https://www.on.com/en-id/products/cloudsurfer-2-3mf1012/mens', 'embedded'],
    ['Cloudmonster 3', 'road', 'daily', 'https://www.on.com/en-id/products/cloudmonster-3-m-3mg1005/mens/rock-silver-shoes-3MG10054857', 'embedded'],
    ['Cloudflow 5', 'road', 'speed', 'https://www.on.com/en-id/products/cloudflow-5-m-3mf1011/mens/white-lime-shoes-3MF10112929', 'embedded'],
    ['Cloudboom Strike 2', 'road', 'race', 'https://www.on.com/en-id/products/cloudboom-strike-2-u-3ug3005', 'embedded'],
    ['Cloudvista 2', 'trail', 'mixed', 'https://www.on.com/en-us/products/cloudvista-2-3me3011', 'embedded'],
    ['Cloudultra 3', 'trail', 'ultra', 'https://www.on.com/en-id/products/cloudultra-3-m-3mf3023/mens', 'embedded'],
  ],
};

const widthNotes = {
  'HOKA Clifton 11': {
    options: ['Wide'],
    url: 'https://hoka.com.my/products/clifton-11-wide-mens-1177538-sccg',
    note: 'The Malaysia store lists a men’s Wide edition.',
  },
  'HOKA Bondi 9': {
    options: ['Wide'],
    url: 'https://hoka.com.my/products/bondi-9-wide-mens-1162013-wng',
    note: 'The Malaysia store lists a men’s Wide edition.',
  },
  'HOKA Mach 7': {
    options: ['Wide'],
    url: 'https://hoka.com.my/products/mach-7-wide-men-1171905-bwht',
    note: 'The Malaysia store lists a men’s Wide edition.',
  },
  'Salomon Speedcross 6': {
    options: ['Wide'],
    url: 'https://www.salomon.com/en-us/product/speedcross-6-wide-lg9372/L41744000',
    note: 'Salomon US lists a separate Wide edition.',
  },
  'Salomon S/LAB Ultra Glide 2': {
    options: ['Normal'],
    url: 'https://www.salomon.com/en-us/c/men/shoes/shopby/footwearFit-regular',
    note: 'Salomon US lists this model under Regular shoe width.',
  },
  'ASICS NOVABLAST 6': {
    options: ['Normal', 'Wide'],
    url: 'https://www.asics.com/us/en-us/novablast-6-wide/p/ANA_1011C242-002.html',
    note: 'ASICS US lists Standard and a separate men’s Wide edition.',
  },
  'ASICS SUPERBLAST 3': {
    options: ['Normal'],
    note: 'ASICS US labels this unisex model Standard width.',
  },
  'ASICS MAGIC SPEED 5': {
    options: ['Normal'],
    note: 'ASICS US labels this unisex model Standard width.',
  },
  'ASICS TRABUCO 14': {
    options: ['Normal'],
    note: 'ASICS New Zealand lists the men’s model as standard D. Its broader forefoot is part of the standard design.',
  },
  'ASICS TRABUCO MAX 5': {
    options: ['Normal'],
    note: 'ASICS US lists standard width on the men’s product page.',
  },
  'Brooks Ghost 18': {
    options: ['Narrow', 'Normal', 'Wide', 'Extra Wide'],
    note: 'US men’s listing names 1B, 1D, 2E and 4E. Stock varies by size and color.',
  },
  'Brooks Adrenaline GTS 25': {
    options: ['Narrow', 'Normal', 'Wide', 'Extra Wide'],
    note: 'US men’s listing names 1B, 1D, 2E and 4E. Stock varies by size and color.',
  },
  'Brooks Glycerin Max 2': {
    options: ['Normal'],
    note: 'US men’s listing shows medium width 1D.',
  },
  'Brooks Divide 6': {
    options: ['Normal'],
    note: 'Brooks Germany lists medium width 1D for the men’s model.',
  },
  'Saucony Ride 19': {
    options: ['Normal', 'Wide'],
    note: 'Saucony US lists Regular and Wide for the men’s model.',
  },
  'Saucony Guide 19': {
    options: ['Normal', 'Wide', 'Extra Wide'],
    note: 'Saucony US lists Regular, Wide and Extra Wide for the men’s model.',
  },
  'Saucony Triumph 24': {
    options: ['Normal', 'Wide'],
    note: 'Saucony US lists Regular and Wide for the men’s model.',
  },
  'Saucony Peregrine 16': {
    options: ['Normal', 'Wide'],
    note: 'Saucony US lists Regular and Wide for the men’s model.',
  },
  'Saucony Xodus Ultra 4': {
    options: ['Normal'],
    note: 'Saucony US lists the men’s version as Regular.',
  },
  'Nike Vomero 18': {
    options: ['Wide'],
    note: 'Nike Indonesia lists a separate men’s Wide edition.',
    url: 'https://www.nike.com/id/t/vomero-18-mens-road-running-shoes-wide-tSYEf6Qr',
  },
  'Nike Structure 26': {
    options: ['Wide'],
    note: 'Nike Indonesia lists a separate men’s Wide edition.',
    url: 'https://www.nike.com/id/t/structure-26-road-running-shoes-UbeMpzge/HQ2588-001',
  },
  'adidas Supernova Rise 3': {
    options: ['Wide'],
    note: 'adidas US lists a separate Wide edition.',
    url: 'https://www.adidas.com/us/supernova-rise-3-wide-running-shoes/JQ5953.html',
  },
  'New Balance Fresh Foam X 880v15': {
    options: ['Narrow', 'Normal', 'Wide', 'Extra Wide'],
    note: 'US men’s listing names B, D, 2E and 4E.',
  },
  'New Balance 1080v15': {
    options: ['Narrow', 'Normal', 'Wide', 'Extra Wide'],
    note: 'US men’s listing names B, D, 2E and 4E. Stock varies by size and color.',
  },
  'New Balance FuelCell Rebel v5': {
    options: ['Normal', 'Wide'],
    note: 'US men’s listing shows D and 2E.',
  },
  'New Balance Fresh Foam X Hierro v9': {
    options: ['Normal', 'Wide', 'Extra Wide'],
    note: 'US men’s listing shows D, 2E and 4E.',
  },
  'On Cloudsurfer 2': {
    options: ['Normal'],
    note: 'On Indonesia describes the listed men’s model as Regular.',
  },
  'On Cloudmonster 3': {
    options: ['Normal', 'Wide'],
    note: 'The On Indonesia product is Regular. On US lists a separate men’s Wide edition.',
    url: 'https://www.on.com/en-us/products/cloudmonster-3-wide-m-3mg1093/mens/black-black-shoes-3MG10931043',
  },
  'On Cloudflow 5': {
    options: ['Normal'],
    note: 'On Indonesia describes the listed men’s model as Regular.',
  },
  'On Cloudboom Strike 2': {
    options: ['Normal'],
    note: 'On Indonesia describes the listed all-gender model as Regular.',
  },
  'On Cloudultra 3': {
    options: ['Normal'],
    note: 'On Indonesia describes the listed men’s model as Regular.',
  },
};

export const mainLineup = Object.entries(products).flatMap(([brand, items]) =>
  items.map(([name, surface, category, url, sizeKind]) => {
    const width = widthNotes[brand + ' ' + name];
    return {
      brand, name, surface, category, url,
      ...(sizeKind ? { sizeKind, sizeUrl: url } : {}),
      ...(width ? { widths: { url, ...width } } : {}),
    };
  })
);
