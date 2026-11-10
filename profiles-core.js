import { categories } from './categories.js';
import { mainLineup } from './lineup-main.js';
import { expandedCore } from './lineup-expanded-core.js';

const models = [
  ...Object.values(categories).flatMap(group => group.flatMap(category => category.models ?? [])),
  ...mainLineup,
  ...expandedCore
];
const productUrls = Object.fromEntries(models.map(model => [model.brand + ' ' + model.name, model.url]));

const rows = {
  ASICS: [
    ['GEL-CUMULUS 28', 'A lightweight neutral trainer with FF BLAST MAX and a FLUIDRIDE outsole.', 'Soft landings, an energetic toe-off and a smooth transition.', 'Everyday road workouts across different distances.', 'https://www.asics.com/au/en-au/gel-cumulus-28/p/AOP_1011C143-003.html?lang=en_AU'],
    ['GEL-NIMBUS 28', 'A cushioned road trainer with FF BLAST PLUS, PureGEL and a knit upper.', 'Soft underfoot with an easy transition on longer runs.', 'Long, steady road mileage where cushioning comes first.'],
    ['METASPEED SKY TOKYO', 'A road racer with a higher-set plate and thicker forefoot foam than the EDGE TOKYO.', 'A bouncy landing and a springy forefoot.', 'Racing for runners who tend to lengthen their stride as they speed up.'],
    ['NOVABLAST 6', 'A road trainer with FF BLAST MAX and a FF TURBO SQUARED forefoot pod.', 'Soft on landing with a lively bounce at toe-off.', 'Daily training when you want a springier ride.'],
    ['SUPERBLAST 3', 'A training shoe with FF LEAP foam and a trampoline-shaped outsole pod.', 'Light and bouncy with an energized toe-off.', 'Everyday and long runs when you want a lively cushioned ride.'],
    ['MAGIC SPEED 5', 'A carbon-plated trainer with a lower stack than its predecessor.', 'Responsive underfoot, with a lower platform designed for control.', 'Faster road training and workouts.'],
    ['TRABUCO 14', 'A protected trail shoe with ASICSGRIP and a roomier forefoot.', 'Soft and responsive with a secure midfoot hold.', 'Technical terrain at moderate paces, including longer trail runs.'],
    ['TRABUCO MAX 5', 'A high-cushion trail shoe with FF BLAST PLUS and a water-repellent mesh upper.', 'Soft cushioning with a responsive push-off.', 'Long off-road efforts where underfoot comfort matters.'],
    ['GEL-KAYANO 33', 'A stability trainer with FLUIDSUPPORT and two FF BLAST foams.', 'Soft and responsive, with guidance during the transition.', 'Regular road mileage where cushioning and support are priorities.'],
    ['GT-2000 15', 'A stability trainer with 3D GUIDANCE and softer FF BLAST MAX foam.', 'Soft landings and springy toe-offs on a guided platform.', 'Daily road runs when you prefer adaptive support.'],
    ['GT-1000 15', 'A mesh-upper trainer with FF BLAST and 3D GUIDANCE.', 'Cushioned with a balanced, supported stride.', 'Regular road mileage when you want added guidance.'],
    ['SONICBLAST 2', 'A speed trainer with two-layer cushioning and a forked ASTROPLATE.', 'Light and bouncy with a forward-driving feel.', 'Faster road sessions and sustained uptempo work.'],
    ['METASPEED RAY', 'An ultralight racer with FF LEAP foam and a minimal carbon plate.', 'Bouncy and forward-driving, with a secure upper at speed.', 'Fast road racing, particularly for forefoot runners.'],
    ['METASPEED EDGE TOKYO', 'A carbon racer with a bouncy FF LEAP top layer and a firmer supporting foam below.', 'Responsive with a supported heel through mid-stance.', 'Racing for runners who tend to increase cadence as they speed up.'],
    ['METAFUJI TRAIL 2', 'A trail racer with a full-length carbon plate, dual foams and speed laces.', 'Cushioned at impact with a responsive toe-off and close upper hold.', 'Long trail races over roots, rocks and uneven terrain.'],
    ['FUJISPEED 4', 'A trail racer with a Pebax plate, dual-layer FF BLAST PLUS and ASICSGRIP.', 'Light, energetic cushioning with a guided push-off.', 'Fast off-road efforts with climbs and descents.'],
    ['FUJI LITE 7', 'A trail trainer with a protective woven upper and FF BLAST PLUS.', 'Light, responsive cushioning and a held-in midfoot.', 'Quicker trail runs that still need upper protection.'],
    ['GEL-VENTURE 11', 'A daily-use shoe with an AMPLIFOAM PLUS midsole.', 'A cushioned landing from a thicker foam platform than the previous version.', 'Daily wear and easy outings on light trails.'],
    ['GEL-NIMBUS 28 TR', 'A cushioned Nimbus with PureGEL and an ASICSGRIP/AHAR LO outsole.', 'Soft underfoot with a smooth transition over longer distances.', 'Long outings across pavement and easier trails.'],
    ['GEL-VENTURE 11 WATERPROOF', 'A waterproof upper paired with AMPLIFOAM PLUS cushioning.', 'Cushioned underfoot for easy outings.', 'Wet urban routes and easy trails.'],
    ['FUJISETSU MAX GTX', 'A GORE-TEX winter trail shoe with outsole spikes and FF BLAST PLUS.', 'Cushioned and responsive, with spikes to grip icy ground.', 'Icy trails and outings in rain or snow.']
  ],
  Salomon: [
    ['Sense Ride 5', 'A versatile mesh-upper trail shoe with SensiFit hold.', 'Balanced cushioning and response underfoot.', 'Mixed trails across short, fast runs and long efforts.', 'https://id.salomon.com/id/products/sense-ride-5'],
    ['S/LAB Pulsar 4', 'A light trail racer with dual-foam cushioning and a close-fitting upper.', 'A precise fit with a lively push-off.', 'Fast efforts on trails when precise foot placement matters.'],
    ['Genesis 2', 'A trail trainer with a Matryx upper, activeCHASSIS and All-Terrain Contagrip.', 'Cushioning with a guided, stable feel.', 'Mixed, rocky and technical trails.'],
    ['Ultra Glide 4', 'A cushioned trail shoe with a breathable engineered mesh and All-Terrain Contagrip.', 'A lighter, more dynamic ride than the prior version.', 'Long trail mileage, including hot or humid conditions.'],
    ['Aero Blaze 4', 'A light road trainer with optiFOAM² and an engineered mesh upper.', 'Cushioned landings and quick transitions.', 'Regular road sessions at varied paces.'],
    ['Aero Glide 4', 'A high-stack road trainer with optiFOAM² and a seamless upper.', 'Deep cushioning with bounce and a close upper fit.', 'Cushioned road runs and longer mileage.'],
    ['S/LAB Phantasm 3', 'An ultralight road racer with PEBA-based foam and a full-length carbon plate.', 'Responsive cushioning and a sharp push-off.', 'Road races at sustained speed.'],
    ['Speedcross 6', 'A mud-focused trail shoe with deep lugs and Mud Contagrip.', 'A secure, cushioned ride with an outsole designed to shed mud.', 'Loose, soft and muddy trails.'],
    ['S/LAB Ultra Glide 2', 'A distance trail shoe with a Matryx Micro upper and pressure-dispersing outsole design.', 'Responsive cushioning and a more stable ride than the prior version.', 'Long trail efforts where sustained comfort is important.'],
    ['DRX Bliss 2', 'A high-stack road trainer with a full-length activeCHASSIS.', 'Plush cushioning with a guided, cradled feel.', 'Road mileage when you want comfort and added stability.', 'https://id.salomon.com/en/products/drx-bliss-2'],
    ['Spectur 2', 'A speed trainer with a full-length glass-fiber plate and tuned sole shape.', 'Bouncy with a fluid transition on a stable platform.', 'Fast road workouts when you still want support.', 'https://id.salomon.com/en/products/spectur-2'],
    ['S/LAB Spectur', 'A road racer with a carbon blade, dual foam and stabilizing geometry.', 'A fluid rebound with more stability built into the platform.', 'Road races where a plated shoe with support is preferred.'],
    ['S/LAB Phantasm 3 SC', 'A light distance racer with PEBA-based foam, a carbon blade and an airy upper.', 'Responsive underfoot with a dynamic push-off.', 'Road distance races at faster paces.'],
    ['Aero Glide 4 GRVL', 'A road-to-gravel shoe with optiFOAM² and Gravel Contagrip.', 'Cushioned and bouncy with more tread for surface changes.', 'Runs split between pavement and gravel.'],
    ['Aero Blaze 4 GRVL', 'A light gravel shoe with optiFOAM², Gravel Contagrip and Quicklace neo.', 'Soft landings, lively rebound and a precise hold.', 'Road runs that include hardpack or gravel.'],
    ['Aero Blaze 4 GRVL GTX', 'A waterproof gravel hybrid with optiFOAM² and Gravel Contagrip.', 'A smooth, responsive transition with added weather protection.', 'Wet runs across pavement and gravel.'],
    ['Thundercross', 'A trail shoe with deep 5 mm lugs and a precise upper hold.', 'A cushioned, dynamic ride with aggressive bite.', 'Sticky singletrack, soft ground and rocky slopes.', 'https://id.salomon.com/en/products/thundercross-2'],
    ['Thundercross GTX', 'A waterproof trail shoe with 5 mm lugs.', 'A cushioned, energetic feel with a secure foothold.', 'Wet technical trails and soft, sticky surfaces.', 'https://id.salomon.com/en/products/thundercross-gore-tex-2'],
    ['Genesis 2 GTX', 'A GORE-TEX trail shoe with activeCHASSIS and All-Terrain Contagrip.', 'Cushioned and guided while allowing agile foot movement.', 'Wet, rocky and mixed trail terrain.'],
    ['Genesis 2 GTX Spike', 'A GORE-TEX winter trail shoe with tungsten spikes and an activeCHASSIS.', 'A steady, cushioned platform with extra bite on ice.', 'Winter trails where ice is common.'],
    ['Speedcross 6 GTX', 'A waterproof GORE-TEX trail shoe with Mud Contagrip.', 'Cushioned underfoot with deep lugs for soft ground.', 'Wet or muddy trails when a waterproof upper is useful.'],
    ['XA Pro 3D V9', 'A protective trail shoe with a stability chassis and All-Terrain Contagrip.', 'A strongly supported platform and a durable, grippy outsole.', 'Rugged terrain when stability and protection matter.'],
    ['XA Pro 3D V9 GTX', 'A waterproof trail shoe with a low-profile chassis and a reinforced toe.', 'A stable, protective platform with weather coverage.', 'Wet, rugged trails where support and toe protection are priorities.'],
    ['S/LAB Genesis 2', 'A trail shoe with a redesigned Contagrip outsole and integrated activeCHASSIS.', 'Responsive cushioning with stability built into the platform.', 'Long-distance runs on technical trails.']
  ],
  HOKA: [
    ['Mach 6', 'A lightweight neutral trainer with supercritical foam.', 'Springy cushioning with quick transitions.', 'Tempo workouts and everyday runs at a quicker pace.'],
    ['Speedgoat 7', 'Vibram Megagrip rubber with 5 mm lugs.', 'A cushioned trail platform with aggressive traction.', 'Steep, rocky or uneven trails.', 'https://vn.hoka.com/en/blogs/product-deep-dive/how-to-start-trail-running-tips-for-beginners'],
    ['Challenger 8', 'A road-to-trail shoe with a reinforced toe and multidirectional 4 mm lugs.', 'Cushy on pavement with added tread for loose surfaces.', 'Routes that mix paved streets, gravel and trail.'],
    ['Clifton 11', 'Compression-molded foam with a mesh upper and rocker.', 'Light, soft cushioning with an easy roll forward.', 'Routine road mileage and easy runs.'],
    ['Bondi 9', 'A high-stack neutral trainer with premium foam and a rocker.', 'Soft cushioning that rebounds into the next step.', 'Easy mileage and longer runs where cushioning is a priority.', 'https://nz.hoka.com/blog/introducing-the-bondi-9'],
    ['Mach 7', 'A light foam trainer with zoned ventilation and an internal gusset.', 'A quick rebound and a secure fit when picking up the pace.', 'Faster daily mileage and uptempo workouts.'],
    ['Cielo X1 3.0', 'An ultralight racer with PEBA foam and a carbon plate.', 'A soft landing followed by a sharp, forward-driving toe-off.', 'Road races run at goal pace.'],
    ['Mafate 5', 'A heavily cushioned trail shoe with Vibram Megagrip rubber.', 'Plush underfoot with grip for uneven surfaces.', 'Long runs on rugged trails.', 'https://vn.hoka.com/en/pages/cam-nang-chay-trail'],
    ['Tecton X 4', 'Dual-layer PEBA and parallel carbon plates with a Vibram outsole.', 'A springy race ride with a close hold from the knit collar and lacing.', 'Racing on technical trails.'],
    ['Arahi 8', 'A low-profile stability trainer with H-Frame support and dual-density EVA.', 'A secure, guided ride with softer cushioning than the prior version.', 'Everyday road runs when you prefer added guidance.'],
    ['Arahi 9', 'An H-Frame stability trainer with denser mesh on the inner side.', 'Soft cushioning on a guided platform.', 'Daily runs where medial support matters.'],
    ['Gaviota 6', 'An H-Frame trainer with compression-molded foam and internal lacing.', 'A steady, smooth transition with a held-in midfoot.', 'Daily mileage when you want cushioning and stability together.'],
    ['Rincon 4', 'A lightweight trainer with a two-layer midsole and rubberized EVA outsole.', 'Soft landings with more rebound than the earlier version.', 'Regular miles when you want a lighter shoe.'],
    ['Rincon 5', 'A lightweight EVA trainer with a rocker and podded rubber outsole.', 'Light cushioning with a smooth forward transition.', 'Easy daily miles and run-club outings.'],
    ['Skyflow', 'Supercritical EVA, a forefoot rocker and a heel-cradling frame.', 'Cushy and springy with a smooth transition.', 'Daily miles and longer steady road runs.'],
    ['Skyward X', 'Soft PEBA, a stable EVA frame and a curved carbon plate.', 'Deep cushioning with a spring-like rebound and a smooth roll.', 'Long, easy road miles with extra cushioning.'],
    ['Mach X 3', 'A PEBA-topped trainer with a Pebax plate and breathable woven upper.', 'Springy cushioning and a quick roll during faster strides.', 'Uptempo training and sustained speedwork.'],
    ['Rocket X 3', 'A carbon-plated PEBA racer with plate winglets and a sticky rubber outsole.', 'Responsive cushioning with a supported feel through toe-off.', 'Road races and fast training in variable conditions.'],
    ['Torrent 4', 'A trail trainer with a lighter midsole, heel cradle and 5 mm lugs.', 'Cushioned and bouncy with a secure rearfoot.', 'Trail runs that need aggressive grip.'],
    ['Stinson 7', 'A high-cushion hybrid with H-Frame support and multidirectional lugs.', 'Plush underfoot with a guided, stable feel.', 'Pavement, gravel and trail within one outing.'],
    ['Mafate X', 'A PEBA-topped trail shoe with a forked carbon plate and Vibram outsole.', 'Deep cushioning with a pop at toe-off.', 'Long trail efforts, gravel routes and ultras.'],
    ['Mafate Speed 4 Lite', 'A Mafate Speed 4 platform with a lightweight ripstop upper and Vibram outsole.', 'The ProFly+ midsole is paired with a low-bulk upper.', 'Trail outings when you want the Mafate base with less upper material.'],
    ['Rocket X Trail', 'A gravel racer with a pronounced rocker, carbon plate and 3 mm lugs.', 'A forward-rolling ride and a close, lightweight upper.', 'Fast races on smooth dirt and gravel.'],
    ['Speedgoat 7 GTX', 'A GORE-TEX trail shoe with a rugged Cordura upper and toggle lacing.', 'The springy Speedgoat midsole paired with a more protective upper.', 'Technical trail running in wet or rough conditions.', 'https://au.hoka.com/products/speedgoat-7-gtx-1176674-bbnb-bbnb'],
    ['Challenger 8 GTX', 'A waterproof road-to-trail shoe with a GORE-TEX liner and multidirectional lugs.', 'A smooth ride on pavement with tread for dirt.', 'Mixed-surface runs in rain or slush.', 'https://au.hoka.com/products/m-challenger-8-gtx-1171958-bbnb-bbnb']
  ],
  Brooks: [
    ['Glycerin 23', 'A cushioned road trainer with a secure heel and more dynamic forefoot.', 'Soft landings, smooth transitions and a more energized toe-off.', 'Long and everyday road runs where softness matters.'],
    ['Cascadia 19', 'A cushioned all-terrain shoe with an adaptable platform and wet/dry traction.', 'Stable underfoot with soft cushioning as the terrain changes.', 'Mountain routes and mixed technical trails.'],
    ['Catamount 4', 'A trail racer tuned for uphill efficiency with a breathable upper.', 'Light, springy cushioning and a quick feel uphill.', 'Fast, steep trail efforts and racing.'],
    ['Caldera 8', 'A high-cushion trail shoe with a breathable upper.', 'Plush cushioning and a smooth ride that adapts to uneven ground.', 'Long-distance trails and extended time on feet.'],
    ['Ghost 18', 'A daily road trainer with a secure fit and balanced support.', 'Soft, smooth cushioning with a lighter feel.', 'Easy, recovery and longer road runs.'],
    ['Adrenaline GTS 25', 'A daily trainer with GuideRails support and a breathable mesh upper.', 'Soft cushioning with a guided, held-in ride.', 'Daily road mileage when added support is preferred.'],
    ['Glycerin Max 2', 'A high-stack road shoe with a rocker to assist heel-to-toe movement.', 'A very soft landing with a smooth roll forward.', 'Long runs and recovery mileage.'],
    ['Hyperion 3', 'A lightweight trainer with nitrogen-infused DNA FLASH v2 foam.', 'Springy cushioning and a secure midfoot hold.', 'Speed sessions and quick everyday miles.', 'https://www.brooksrunning.com/en_be/mens/road-running-shoes/hyperion-3/110465.html?dwvar_110465_color=369'],
    ['Divide 6', 'A hybrid road-to-trail shoe with all-terrain rubber.', 'Soft cushioning with grip as pavement gives way to dirt.', 'Gravel roads, groomed trails and park paths.'],
    ['Adrenaline GTS 26', 'A daily support trainer with soft cushioning and a mesh upper.', 'Balanced cushioning and a guided stride.', 'Regular road runs and walking with added support.'],
    ['Ghost Max 4', 'A high-cushion road trainer with a rocker and a roomy platform.', 'Protective cushioning with an assisted roll through toe-off.', 'Easy road miles when a smooth transition is the priority.'],
    ['Glycerin GTS 23', 'A plush road trainer with GuideRails support.', 'A soft landing with more structured guidance than the neutral Glycerin.', 'Cushioned road training with added support.'],
    ['Launch 12', 'A lightweight daily trainer with an airy mesh upper and nitrogen-infused cushioning.', 'Springy with quick turnover.', 'Daily mileage when you want a lighter ride.'],
    ['Hyperion Max 4', 'A high-stack speed trainer with a nylon SpeedVault plate.', 'Springy underfoot with rocker-assisted transitions.', 'Faster training sessions ahead of race day.'],
    ['Hyperion Elite 6', 'A carbon-plated racer with DNA GOLD foam and a revised rocker.', 'Soft cushioning with a quick, propulsive roll.', 'Road racing when you want a light, plated shoe.'],
    ['Beast GTS 26', 'A wide-based road shoe with GuideRails support.', 'A smooth, stable ride with substantial support.', 'Daily running or walking when maximum support is preferred.'],
    ['Addiction GTS 15', 'A support trainer with a roomy forefoot and breathable upper.', 'Soft cushioning and a controlled transition.', 'Everyday runs or walks with extra support or orthotics.'],
    ['Hyperion Elite 5', 'A light PEBA racer with a size-specific carbon plate.', 'Soft, springy cushioning and fast transitions.', 'Speed workouts and road races from 5K through marathon.'],
    ['Cascadia 20', 'An all-terrain trail trainer with Vibram Megagrip and TrailAdapt.', 'Soft cushioning on a platform that adapts as the trail changes.', 'Mixed trails that call for grip and toe protection.'],
    ['Cascadia 20 GTX', 'A waterproof Cascadia with Vibram Megagrip and TrailAdapt.', 'Soft cushioning with an adaptable ride.', 'Wet or muddy trail runs where a waterproof upper is useful.'],
    ['Cascadia 19 GTX', 'A GORE-TEX version of the Cascadia with wet/dry trail traction.', 'Soft cushioning with a steady, adaptable ride.', 'Wet trails with changing terrain.'],
    ['Cascadia Elite', 'A PEBA trail racer with a Pebax propulsion plate and Vibram Megagrip Elite.', 'Light, springy cushioning with a close race fit.', 'Competitive trail efforts from vertical kilometers to ultras.'],
    ['Catamount Agil', 'A lightweight trail racer with a SpeedVault plate and secure upper.', 'Quick, responsive and nimble over technical ground.', 'Shorter technical trail races, especially under 50 km.']
  ],
  Saucony: [
    ['Endorphin Speed 5', 'A neutral speed shoe with PWRRUN PB foam and a semi-rigid nylon plate.', 'A springy ride with quick transitions.', 'Fast workouts and racing when you prefer a nylon plate.', 'https://www.saucony.com/en/endorphin-speed-5-wide/60707M.html'],
    ['Ride 19', 'A neutral trainer with reformulated PWRRUN+ and flex grooves.', 'Soft and springy with a smooth transition.', 'Easy mileage, steady long runs and faster daily training.'],
    ['Guide 19', 'A cushioned trainer with PWRRUN foam and guidance sidewalls.', 'A steady ride with bounce and a more flexible forefoot.', 'Daily miles when you prefer a guided platform.'],
    ['Triumph 24', 'A neutral high-mileage trainer with a thick stack of incrediLUX foam.', 'Plush cushioning in a lighter build than the previous version.', 'Long road runs where comfort is the priority.'],
    ['Endorphin Pro 5', 'A race shoe with two foams and a slotted carbon plate.', 'A responsive platform with quick, rolling transitions.', 'Road racing and race-pace efforts.'],
    ['Peregrine 16', 'A technical trail shoe with full-coverage Vibram Megagrip and PWRRUN foam.', 'Cushioned and protective on uneven ground.', 'Loose, wet or rocky trails.'],
    ['Xodus Ultra 4', 'A max-cushion trail shoe with PWRRUN PB, a PWRRUN frame and Vibram grip.', 'Soft rebound within a more protective platform.', 'Long, rugged trail runs.'],
    ['Hurricane 26', 'A max-cushion trainer built around incrediLUX foam.', 'Deep cushioning designed to stay soft under load.', 'Daily road runs when comfort and support are priorities.', 'https://www.saucony.com/UK/en_GB/saucony-hurricane-upg/'],
    ['Echelon 11', 'A structured stability trainer with a solid base and redesigned heel.', 'A smooth, cushioned ride with a secure heel hold.', 'Daily miles where a supportive platform is the priority.'],
    ['Kinvara 16', 'A lightweight neutral trainer with PWRRUN foam and a refined midsole shape.', 'Responsive cushioning and a smooth, natural transition.', 'Everyday runs when you want a lighter, quicker feel.'],
    ['Endorphin Azura', 'A speed trainer with PWRRUN PB foam, SPEEDROLL and XT-900 rubber.', 'Soft landings and a quick, rolling rebound.', 'Fast daily miles and uptempo training.'],
    ['Endorphin Speed 6', 'A speed trainer with PWRRUN PBX foam and a reshaped nylon plate.', 'A light, soft ride with a quick transition forward.', 'Faster training and sustained speed sessions.'],
    ['Endorphin Elite 3', 'A road racer with 40 mm of IncrediRUN foam and a slotted carbon plate.', 'A smooth, propulsive roll at race pace.', 'Road races where you want a high-stack plated ride.'],
    ['Ride TR3', 'A ruggedized Ride 19 for both road and trail.', 'The familiar neutral Ride feel with more off-road grip.', 'Outings that start on pavement and continue onto dirt.'],
    ['Ride TR2 GTX', 'A waterproof road-to-trail trainer with PWRTRAC grip.', 'Soft PWRRUN+ landings across changing surfaces.', 'Wet mixed-surface routes.'],
    ['Ride TR3 GTX', 'A waterproof hybrid with a GORE-TEX upper and PWRTRAC outsole.', 'Light, springy PWRRUN+ cushioning with smooth transitions.', 'Road-to-trail runs in wet weather.'],
    ['Peregrine 16 GTX', 'A GORE-TEX trail shoe with PWRRUN cushioning and Vibram Megagrip.', 'A flexible, low-profile feel with added underfoot protection.', 'Wet rock, loose dirt and technical trail runs.'],
    ['Xodus Ultra 4 GTX', 'A waterproof max-cushion trail shoe with Vibram Megagrip.', 'Soft, bouncy PWRRUN PB within a more protective PWRRUN frame.', 'Long trail efforts in wet or rugged conditions.', 'https://www.saucony.com/CA/en_CA/xodus-ultra-4-gtx/61297M.html'],
    ['Endorphin Edge', 'A trail racer with PWRRUN PB and a three-quarter Carbitex carbon plate.', 'Soft, light cushioning with a snappy toe-off.', 'Fast distance efforts on rugged trails.']
  ]
};

export const coreProfiles = Object.fromEntries(Object.entries(rows).flatMap(([brand, profiles]) =>
  profiles.map(([name, expect, feel, best, evidence]) => {
    const key = brand + ' ' + name;
    return [key, { expect, feel, best, url: evidence ?? productUrls[key] }];
  })
));
