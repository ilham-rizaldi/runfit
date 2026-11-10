const hoka = 'https://au.hoka.com';
const brooks = 'https://www.brooksrunning.com/en_us';
const asics = 'https://www.asics.com/us/en-us';
const saucony = 'https://www.saucony.com/en';
const salomon = 'https://www.salomon.com/en-us';

export const coreCatalogs = {
  HOKA: { road: hoka + '/categories/mens/shoes/road-running', trail: hoka + '/categories/mens/shoes/trail-running' },
  Brooks: { road: brooks + '/mens/shoes/road-running-shoes/', trail: brooks + '/mens/shoes/trail-shoes/' },
  ASICS: { road: asics + '/running-shoes/c/aa80201000/men/', trail: asics + '/trail-running-shoes/c/aa80205000/' },
  Saucony: { road: saucony + '/running/', trail: saucony + '/dual-trail-running/' },
  Salomon: { road: salomon + '/c/sports/road-running/shoes', trail: salomon + '/c/sports/trail-running/shoes' }
};

const products = {
  HOKA: [
    ['Arahi 8', 'road', 'stability', hoka + '/products/m-arahi-8-1168690-nzn-nzn', ['Normal', 'Wide', 'Extra wide'], 'HOKA Australia lists men’s regular, Wide and X-Wide variants in its road catalog.'],
    ['Arahi 9', 'road', 'stability', hoka + '/products/arahi-9-1176531-bsq-bsq'],
    ['Gaviota 6', 'road', 'stability', hoka + '/products/m-gaviota-6-1171932-bblc-bblc', ['Normal', 'Wide'], 'HOKA Australia lists men’s regular and Wide versions in its road catalog.'],
    ['Rincon 4', 'road', 'daily', hoka + '/products/m-rincon-4-1155130-bwht-bwht'],
    ['Rincon 5', 'road', 'daily', hoka + '/products/rincon-5-wide-1177512-vtlb-vtlb', ['Wide'], 'This HOKA Australia listing is the men’s Wide model.'],
    ['Skyflow', 'road', 'long-run', hoka + '/products/m-skyflow-1155111-srys-srys', ['Normal', 'Wide'], 'HOKA Australia lists men’s regular and Wide versions separately.'],
    ['Skyward X', 'road', 'super-trainer', hoka + '/products/m-skyward-x-1147911-cslp-cslp'],
    ['Mach X 3', 'road', 'super-trainer', hoka + '/products/m-mach-x-3-1168720-nzs-nzs'],
    ['Rocket X 3', 'road', 'race', hoka + '/products/u-rocket-x-3-1168724-bkgd-bkgd'],
    ['Torrent 4', 'trail', 'short-fast', hoka + '/products/m-torrent-4-1155115-bhlt-bhlt'],
    ['Stinson 7', 'trail', 'road-to-trail', hoka + '/products/m-stinson-7-1141530-slbs-slbs'],
    ['Mafate X', 'trail', 'ultra', hoka + '/products/m-mafate-x-1161990-srsm-srsm'],
    ['Mafate Speed 4 Lite', 'trail', 'technical', hoka + '/products/u-mafate-speed-4-lite-1168450-ltm-ltm'],
    ['Rocket X Trail', 'trail', 'trail-race', hoka + '/products/rocket-x-trail-1176330-snnn-snnn'],
    ['Speedgoat 7 GTX', 'trail', 'wet-weather', hoka + '/products/speedgoat-7-gtx-1176674-adgl-adgl', ['Normal', 'Wide'], 'HOKA Australia lists men’s regular and Wide waterproof versions.'],
    ['Challenger 8 GTX', 'trail', 'wet-weather', hoka + '/products/challenger-8-gtx-1171958-pryb-pryb']
  ],
  Brooks: [
    ['Adrenaline GTS 26', 'road', 'stability', brooks + '/mens/shoes/road-running-shoes/adrenaline-gts-26/110509.html?dwvar_110509_color=079', ['Narrow', 'Normal', 'Wide', 'Extra wide'], 'Brooks US lists these widths for the men’s model.'],
    ['Ghost Max 4', 'road', 'recovery', brooks + '/mens/shoes/road-running-shoes/ghost-max-4/110496.html?dwvar_110496_color=463', ['Normal', 'Wide', 'Extra wide'], 'Brooks US lists Medium, Wide and Extra Wide for men.'],
    ['Glycerin GTS 23', 'road', 'stability', brooks + '/mens/shoes/road-running-shoes/glycerin-gts-23/110503.html?dwvar_110503_color=039', ['Normal', 'Wide', 'Extra wide'], 'Brooks US lists Medium, Wide and Extra Wide for men.'],
    ['Launch 12', 'road', 'daily', brooks + '/mens/shoes/road-running-shoes/launch-12/110481.html?dwvar_110481_color=433', ['Normal'], 'Brooks US lists Medium width for the men’s model.'],
    ['Hyperion Max 4', 'road', 'super-trainer', brooks + '/mens/shoes/road-running-shoes/hyperion-max-4/110498.html?dwvar_110498_color=130', ['Normal'], 'Brooks US lists Medium width for the men’s model.'],
    ['Hyperion Elite 6', 'road', 'race', brooks + '/featured/unisex-running-shoes/hyperion-elite-6/100054.html?dwvar_100054_color=699', ['Normal'], 'Brooks US lists this unisex version in Medium.'],
    ['Beast GTS 26', 'road', 'stability', brooks + '/mens/shoes/road-running-shoes/beast-gts-26/110455.html?dwvar_110455_color=422', ['Normal', 'Wide', 'Extra wide'], 'Brooks US lists Medium, Wide and Extra Wide for men.'],
    ['Addiction GTS 15', 'road', 'stability', brooks + '/mens/shoes/road-running-shoes/addiction-gts-15/110365.html?dwvar_110365_color=072', ['Narrow', 'Normal', 'Wide', 'Extra wide'], 'Brooks US lists Narrow, Medium, Wide and Extra Wide for men.'],
    ['Hyperion Elite 5', 'road', 'race', brooks + '/featured/unisex-running-shoes/hyperion-elite-5/100049.html?dwvar_100049_color=756', ['Normal'], 'Brooks US lists this unisex version in Medium.'],
    ['Cascadia 20', 'trail', 'technical', brooks + '/mens/shoes/trail-shoes/cascadia-20/110489.html?dwvar_110489_color=099', ['Normal', 'Wide'], 'Brooks US lists Medium and Wide for men.'],
    ['Cascadia 20 GTX', 'trail', 'wet-weather', brooks + '/mens/shoes/trail-shoes/cascadia-20-gtx/110488.html?dwvar_110488_color=030', ['Normal'], 'Brooks US lists Medium width for the men’s model.'],
    ['Cascadia 19 GTX', 'trail', 'wet-weather', brooks + '/mens/shoes/trail-shoes/cascadia-19-gtx/110456.html'],
    ['Cascadia Elite', 'trail', 'trail-race', brooks + '/featured/unisex-running-shoes/cascadia-elite/100055.html?dwvar_100055_color=622', ['Normal'], 'Brooks US lists this unisex version in Medium.'],
    ['Catamount Agil', 'trail', 'short-fast', brooks + '/featured/unisex-running-shoes/catamount-agil/100045.html?dwvar_100045_color=488', ['Normal'], 'Brooks US lists this unisex version in Medium.']
  ],
  ASICS: [
    ['GEL-KAYANO 33', 'road', 'stability', asics + '/gel-kayano-33/p/ANA_1011C167-001.html'],
    ['GT-2000 15', 'road', 'stability', asics + '/gt-2000-15/p/ANA_1011C235-003.html'],
    ['GT-1000 15', 'road', 'stability', asics + '/gt-1000-15/p/ANA_1011C230-100.html', ['Normal', 'Wide', 'Extra wide'], 'ASICS US lists standard, WIDE and EXTRA WIDE men’s versions.'],
    ['SONICBLAST 2', 'road', 'super-trainer', asics + '/sonicblast-2/p/ANA_1011C244-400.html'],
    ['METASPEED RAY', 'road', 'race', asics + '/metaspeed-ray/p/ANA_1013A176-100.html'],
    ['METASPEED EDGE TOKYO', 'road', 'race', asics + '/metaspeed-edge-tokyo/p/ANA_1013A163-600.html'],
    ['METAFUJI TRAIL 2', 'trail', 'trail-race', asics + '/metafuji-trail-2/p/ANA_1013A178-750.html'],
    ['FUJISPEED 4', 'trail', 'short-fast', asics + '/fujispeed-4/p/ANA_1013A179-401.html'],
    ['FUJI LITE 7', 'trail', 'mixed', asics + '/fuji-lite-7/p/ANA_1013A232-200.html'],
    ['GEL-VENTURE 11', 'trail', 'mixed', asics + '/gel-venture%C2%A011/p/ANA_1011C160-022.html', ['Normal', 'Extra wide'], 'ASICS US also lists a separate men’s EXTRA WIDE version.'],
    ['GEL-NIMBUS 28 TR', 'trail', 'road-to-trail', asics + '/gel-nimbus-28-tr/p/ANA_1011C216-300.html'],
    ['GEL-VENTURE 11 WATERPROOF', 'trail', 'wet-weather', asics + '/gel-venture-11-waterproof/p/ANA_1011C159-001.html'],
    ['FUJISETSU MAX GTX', 'trail', 'wet-weather', asics + '/fujisetsu-max-gtx/p/ANA_1011C115-001.html']
  ],
  Saucony: [
    ['Hurricane 26', 'road', 'stability', saucony + '/hurricane-26/61249M.html?dwvar_61249M_color=S101098-1017', ['Normal', 'Wide'], 'Saucony US lists a separate Hurricane 26 Wide men’s version.'],
    ['Echelon 11', 'road', 'stability', saucony + '/echelon-11/61273M.html?dwvar_61273M_color=S101000-1001', ['Normal', 'Wide', 'Extra wide'], 'Saucony US lists Wide and Extra Wide editions for men.'],
    ['Kinvara 16', 'road', 'speed', saucony + '/kinvara-16/60309M.html?dwvar_60309M_color=S21020-141'],
    ['Endorphin Azura', 'road', 'speed', saucony + '/endorphin-azura/60807M.html?dwvar_60807M_color=S101329-1041'],
    ['Endorphin Speed 6', 'road', 'super-trainer', saucony + '/endorphin-speed-6/61331M.html', ['Normal', 'Wide'], 'Saucony US also lists a separate Wide version for women.'],
    ['Endorphin Elite 3', 'road', 'race', saucony + '/endorphin-elite-3/61243U.html?dwvar_61243U_color=S100981-1021'],
    ['Ride TR3', 'trail', 'road-to-trail', saucony + '/ride-tr3/61276M.html?dwvar_61276M_color=S101114-1009'],
    ['Ride TR2 GTX', 'trail', 'wet-weather', saucony + '/ride-tr2-gtx/57941M.html?dwvar_57941M_color=S20953-260'],
    ['Ride TR3 GTX', 'trail', 'wet-weather', saucony + '/ride-tr3-gtx/61295M.html?dwvar_61295M_color=S101118-1006'],
    ['Peregrine 16 GTX', 'trail', 'wet-weather', saucony + '/peregrine-16-gtx/60852M.html?dwvar_60852M_color=S101530-1005'],
    ['Xodus Ultra 4 GTX', 'trail', 'wet-weather', saucony + '/xodus-ultra-4-gtx/61297M.html?dwvar_61297M_color=S101843-1002'],
    ['Endorphin Edge', 'trail', 'trail-race', saucony + '/endorphin-edge/52991M.html?dwvar_52991M_color=S20773-40']
  ],
  Salomon: [
    ['DRX Bliss 2', 'road', 'stability', 'https://id.salomon.com/en/products/drx-bliss-2-l47745300'],
    ['Spectur 2', 'road', 'speed', 'https://id.salomon.com/en/products/spectur-2-l47566900'],
    ['S/LAB Spectur', 'road', 'race', salomon + '/product/s-lab-spectur-li5293'],
    ['S/LAB Phantasm 3 SC', 'road', 'race', salomon + '/product/s-lab-phantasm-3-sc-li1695'],
    ['Aero Glide 4 GRVL', 'trail', 'hardpack', salomon + '/product/aero-glide-4-grvl-li9266/L49227500'],
    ['Aero Blaze 4 GRVL', 'trail', 'hardpack', salomon + '/product/aero-blaze-4-grvl-li9273/L45472700'],
    ['Aero Blaze 4 GRVL GTX', 'trail', 'wet-weather', salomon + '/product/aero-blaze-4-grvl-gtx-li9274/L45403700'],
    ['Thundercross', 'trail', 'mud', 'https://id.salomon.com/products/salomon-thundercross-mens-trail-running-shoes'],
    ['Thundercross GTX', 'trail', 'wet-weather', 'https://id.salomon.com/en/products/thundercross-gore-tex'],
    ['Genesis 2 GTX', 'trail', 'wet-weather', salomon + '/product/genesis-2-gtx-li9188/L49302000'],
    ['Genesis 2 GTX Spike', 'trail', 'wet-weather', salomon + '/product/genesis-2-gtx-spike-li1280/L45388400'],
    ['Speedcross 6 GTX', 'trail', 'wet-weather', salomon + '/product/speedcross-6-gore-tex-lg9214/L49226000'],
    ['XA Pro 3D V9', 'trail', 'technical', salomon + '/product/xa-pro-3d-v9-li3126/L47882900', ['Normal', 'Wide'], 'Salomon US lists a separate men’s Wide edition.'],
    ['XA Pro 3D V9 GTX', 'trail', 'wet-weather', salomon + '/product/xa-pro-3d-v9-gore-tex-li3151/L49199100', ['Normal', 'Wide'], 'Salomon US lists a separate men’s Wide waterproof edition.'],
    ['S/LAB Genesis 2', 'trail', 'ultra', salomon + '/product/s-lab-genesis-2-li9276/L49190100']
  ]
};

export const expandedCore = Object.entries(products).flatMap(([brand, models]) =>
  models.map(([name, surface, category, url, options, note]) => ({
    brand,
    name,
    surface,
    category,
    url,
    ...(options ? { widths: { options, url: coreCatalogs[brand][surface], note } } : {})
  }))
);
