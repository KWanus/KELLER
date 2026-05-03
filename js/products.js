// FORGEYARD // construction-grade catalog
// All affiliate URLs use AFFILIATE_TAG placeholder. Replace with your tag.

const AFFILIATE_TAG = "hardhat04-20";

const categories = [
  { slug: "ppe-hand",      name: "Hand Protection",      tag: "PPE-01",  blurb: "Cut-resistant and impact-rated gloves for steel, demo, and rebar work." },
  { slug: "ppe-vision",    name: "Eye Protection",       tag: "PPE-02",  blurb: "ANSI Z87.1 eyewear engineered for grinding, framing, and outdoor crews." },
  { slug: "hand-tools",    name: "Hand Tools",           tag: "HND-03",  blurb: "Forged steel hand tools built for ironworkers and finish crews." },
  { slug: "power-blades",  name: "Power Tool Blades",    tag: "PWR-04",  blurb: "Bandsaw and reciprocating blades for thick metal, conduit, and demo." },
  { slug: "measuring",     name: "Layout & Measuring",   tag: "MSR-05",  blurb: "Long-range layout tools for site prep, civil, and concrete work." },
  { slug: "supplies",      name: "Site Supplies",        tag: "SUP-06",  blurb: "Tape, fasteners, and consumables that hold up on rough sites." },
  { slug: "safety-gear",   name: "Site Safety",          tag: "SFT-07",  blurb: "Spill response, signage, and OSHA-aligned site safety equipment." }
];

const products = [
  {
    id: 1,
    sku: "FY-G-A9-001",
    slug: "magid-trex-flex-a9-impact-glove",
    name: "MAGID T-REX Flex Series A9 Impact Glove",
    brand: "MAGID",
    category: "ppe-hand",
    tagline: "Maximum cut and impact protection for demo, steel, and salvage crews.",
    description: "ANSI Cut Level A9, NitriX™ palm coated, knit shell with reinforced knuckle and back-of-hand impact armor. Sized 10/XL.",
    longDescription: "Designed for crews working with sheet metal, glass, rebar, and salvage steel, the T-REX Flex A9 delivers the highest tested cut rating before stepping up to chain mail. The NitriX™ palm grips wet steel and oily handles without sacrificing dexterity, while a molded TPR shell across the back of the hand absorbs strike impact from falling stock and pinch points. 13-gauge knit keeps the glove cool through long shifts.",
    features: [
      "ANSI/ISEA 105 Cut Level A9 — highest knit-glove cut rating",
      "NitriX™ palm coating: oil, water, and abrasion resistant grip",
      "Back-of-hand TPR impact protection — ANSI Impact Level 2",
      "13-gauge seamless knit shell for breathability and dexterity",
      "Reinforced thumb crotch — primary failure point in long-shift use"
    ],
    specs: {
      "Cut Rating": "ANSI A9",
      "Impact Rating": "ANSI Level 2",
      "Palm Coating": "NitriX™ nitrile",
      "Shell Gauge": "13-gauge knit",
      "Size": "10 / XL",
      "Pack Size": "12 pairs"
    },
    useCases: ["Steel erection", "Demolition", "Glass handling", "Rebar tying", "Scrap & salvage"],
    model: "TRX795",
    quantity: "12 pairs",
    affiliateLink: `https://www.amazon.com/s?k=MAGID+TRX795&tag=${AFFILIATE_TAG}`,
    imageUrl: "images/glove-a9.svg"
  },
  {
    id: 2,
    sku: "FY-G-A6-002",
    slug: "magid-trex-rebel-a6-goatskin-glove",
    name: "MAGID T-REX Rebel A6 Goatskin Para-Aramid Impact Glove",
    brand: "MAGID",
    category: "ppe-hand",
    tagline: "Leather-palm A6 glove for ironworkers and rigging crews.",
    description: "Goatskin leather palm with para-aramid liner. Cut Level A6, full TPR back. Size 9 / Large.",
    longDescription: "Goatskin offers the closest leather-to-feel-of-bare-hand grip on the market, which is why riggers and ironworkers prefer it for cable, chain, and choker work. The Rebel pairs that goatskin palm with a para-aramid (Kevlar-class) cut liner rated to ANSI A6 — high enough for most steel handling tasks while keeping the dexterity needed for shackle pins and hitches. Full back-of-hand TPR shell takes the strike when a load shifts.",
    features: [
      "Premium goatskin leather palm — superior grip on cable and pipe",
      "Para-aramid cut liner — ANSI Cut Level A6",
      "Full back-of-hand TPR impact armor",
      "Neoprene cuff with hook-and-loop closure",
      "Reinforced palm patches at high-wear zones"
    ],
    specs: {
      "Cut Rating": "ANSI A6",
      "Impact Rating": "ANSI Level 2",
      "Palm": "Premium goatskin leather",
      "Liner": "Para-aramid (Kevlar-class)",
      "Size": "9 / Large",
      "Pack Size": "24 pairs"
    },
    useCases: ["Ironwork", "Rigging & crane signaling", "Pipe handling", "General steel"],
    model: "TRX814",
    quantity: "24 pairs",
    affiliateLink: `https://www.amazon.com/s?k=MAGID+TRX814&tag=${AFFILIATE_TAG}`,
    imageUrl: "images/glove-a6.svg"
  },
  {
    id: 3,
    sku: "FY-E-CLR-003",
    slug: "ticonn-clear-safety-glasses",
    name: "TICONN Clear Safety Glasses",
    brand: "TICONN",
    category: "ppe-vision",
    tagline: "ANSI Z87.1 clear-lens crew pack — issue one to every hand on site.",
    description: "Bulk pack of clear-lens safety glasses. Scratch and impact resistant. Meets ANSI Z87.1.",
    longDescription: "The reality on a job site: glasses get crushed, lost, and walked off with daily. Issue these by the case so there is always a clean pair in the gang box. Polycarbonate lens passes ANSI Z87.1 high-mass and high-velocity impact, the wraparound design seals out airborne debris from grinders and saws, and the no-slip nose bridge holds in heat. Clear lens is correct for indoor framing, electrical, and most interior trades.",
    features: [
      "ANSI Z87.1 high-velocity impact rated",
      "Scratch-resistant polycarbonate lens",
      "Wraparound coverage against airborne debris",
      "No-slip nose bridge — stays put under hard hats",
      "Lightweight frame for all-day wear"
    ],
    specs: {
      "Standard": "ANSI Z87.1",
      "Lens": "Clear polycarbonate",
      "Coatings": "Scratch resistant",
      "Pack Size": "24 pairs"
    },
    useCases: ["Indoor framing", "Electrical rough-in", "Drywall", "Mechanical trades"],
    quantity: "24 pack",
    affiliateLink: `https://www.amazon.com/s?k=TICONN+clear+safety+glasses&tag=${AFFILIATE_TAG}`,
    imageUrl: "images/glasses-clear.svg"
  },
  {
    id: 4,
    sku: "FY-E-TNT-004",
    slug: "ansi-tinted-safety-glasses-12pk",
    name: "ANSI Z87.1 Tinted Safety Glasses (12 pack)",
    brand: "OEM",
    category: "ppe-vision",
    tagline: "UV-tinted lens for outdoor framing, roofing, and concrete crews.",
    description: "Bulk 12-pack tinted lens. Scratch and impact resistant. UV protection for outdoor and high-glare conditions.",
    longDescription: "Anyone who has framed a roof in July knows clear-lens glasses are not enough — glare from OSB, white concrete, and reflected sun causes eye fatigue that ends shifts early. These tinted Z87.1 lenses block UV-A/UV-B and cut visible glare without going so dark you lose detail in shaded work. Issue them with the clear pack so crews can switch as they move indoor to outdoor.",
    features: [
      "ANSI Z87.1 impact rated",
      "UV-A / UV-B blocking — full UV400",
      "Smoke / grey tint — true color rendering",
      "Scratch-resistant hard coat",
      "Wraparound frame for side-glare control"
    ],
    specs: {
      "Standard": "ANSI Z87.1",
      "Lens": "Tinted polycarbonate (UV400)",
      "Coatings": "Scratch resistant",
      "Pack Size": "12 pairs"
    },
    useCases: ["Roofing", "Outdoor framing", "Concrete & flatwork", "Excavation flagging"],
    quantity: "12 pack",
    affiliateLink: `https://www.amazon.com/s?k=ANSI+Z87.1+tinted+safety+glasses+12+pack&tag=${AFFILIATE_TAG}`,
    imageUrl: "images/glasses-tinted.svg"
  },
  {
    id: 5,
    sku: "FY-H-BOP-12",
    slug: "true-temper-toughstrike-back-out-punch-half",
    name: 'True Temper Toughstrike Back-Out Punch — 1/2"',
    brand: "True Temper",
    category: "hand-tools",
    tagline: "Ironworker punch for driving bolts and aligning steel.",
    description: "1/2-inch diameter back-out punch. Forged alloy steel with Toughstrike strike face.",
    longDescription: "When connection bolts won't seat or need to be driven back through a beam flange, this is the tool. Toughstrike heads are heat-treated for repeated sledge impact without mushrooming, and the 1/2-inch shaft is the right diameter for most A325 / A490 structural bolt work. Forged in one piece — no welded heads to fail under load.",
    features: [
      "Forged one-piece alloy steel — no welded joints",
      "Toughstrike heat-treated strike face — resists mushrooming",
      "1/2-inch shaft — sized for A325/A490 structural bolts",
      "Polished black-oxide finish — corrosion resistant"
    ],
    specs: {
      "Diameter": "1/2 inch",
      "Material": "Forged alloy steel",
      "Finish": "Black oxide",
      "Type": "Back-out / drift punch"
    },
    useCases: ["Structural steel connections", "Bolt alignment", "Beam erection"],
    model: "20187000",
    affiliateLink: `https://www.amazon.com/s?k=True+Temper+Toughstrike+back+out+punch+1%2F2&tag=${AFFILIATE_TAG}`,
    imageUrl: "images/punch-half.svg"
  },
  {
    id: 6,
    sku: "FY-H-BOP-58",
    slug: "true-temper-toughstrike-back-out-punch-five-eighth",
    name: 'True Temper Toughstrike Back-Out Punch — 5/8"',
    brand: "True Temper",
    category: "hand-tools",
    tagline: "Heavier punch for larger structural bolt connections.",
    description: "5/8-inch diameter back-out punch. Forged alloy steel with Toughstrike strike face.",
    longDescription: "The 5/8-inch counterpart to the 1/2 punch — sized for larger structural bolt patterns and heavy beam work. Same one-piece forging and heat-treated strike face. Carry both diameters in the rig.",
    features: [
      "Forged one-piece alloy steel",
      "Toughstrike heat-treated strike face",
      "5/8-inch shaft — sized for larger structural bolts",
      "Black-oxide corrosion finish"
    ],
    specs: {
      "Diameter": "5/8 inch",
      "Material": "Forged alloy steel",
      "Finish": "Black oxide",
      "Type": "Back-out / drift punch"
    },
    useCases: ["Heavy structural connections", "Beam alignment", "Bridge & infrastructure"],
    model: "20187000",
    affiliateLink: `https://www.amazon.com/s?k=True+Temper+Toughstrike+back+out+punch+5%2F8&tag=${AFFILIATE_TAG}`,
    imageUrl: "images/punch-five-eighth.svg"
  },
  {
    id: 7,
    sku: "FY-P-BND-7",
    slug: "milwaukee-compact-bandsaw-blades-18tpi-3pk",
    name: "Milwaukee Compact Band Saw Blades — 18 TPI (3-pack)",
    brand: "Milwaukee",
    category: "power-blades",
    tagline: "Genuine Milwaukee blades for conduit, strut, and threaded rod.",
    description: '35-3/8" length, 18 TPI fine-tooth profile. Bi-metal compact band saw blades.',
    longDescription: "The blade mechanical and electrical crews rely on for clean cuts through conduit, all-thread, strut, and small-diameter pipe. 18 TPI is the fine-tooth pitch you want for thin-to-medium wall stock — finer than the structural blade, faster and cleaner on the work most trades actually do daily. Bi-metal construction takes heat at the teeth and stays flexible at the back. 35-3/8 inch fits standard compact band saws (M12 / M18). Three blades per pack — one in the saw, two in the gang box.",
    features: [
      "18 TPI fine pitch — clean cuts on thin to medium wall metal",
      "Bi-metal construction — heat-resistant teeth, flexible back",
      "35-3/8 inch — fits compact band saws (Milwaukee M12/M18)",
      "Genuine Milwaukee — UPC verified",
      "Optimized for conduit, strut, threaded rod, and small pipe"
    ],
    specs: {
      "Length": "35-3/8 inch",
      "TPI": "18 (fine pitch)",
      "Construction": "Bi-metal",
      "Application": "Thin to medium wall metal",
      "Pack Size": "3 blades"
    },
    useCases: ["Conduit cutting", "Strut & all-thread", "Mechanical / electrical", "Small pipe"],
    model: "48-39-0529",
    quantity: "3 pack",
    affiliateLink: `https://www.amazon.com/s?k=Milwaukee+48-39-0529&tag=${AFFILIATE_TAG}`,
    imageUrl: "images/bandsaw.svg"
  },
  {
    id: 8,
    sku: "FY-P-RCP-9",
    slug: "milwaukee-sawzall-torch-thick-metal-5pk",
    name: 'Milwaukee SAWZALL Torch — 9" Thick Metal Blades (5-pack)',
    brand: "Milwaukee",
    category: "power-blades",
    tagline: "Reciprocating blades for cutting through thick metal — fast.",
    description: '9-inch, 10 TPI Torch™ blades engineered for thick metal cutting in reciprocating saws.',
    longDescription: "Torch™ is Milwaukee's blade line built specifically for cutting hardened and thick-wall metal — the kind that eats standard sawzall blades in a single cut. 10 TPI is the sweet spot for thick metal: aggressive enough to chew through plate and angle iron, fine enough not to snag. 9-inch length reaches into walls and frames where shorter blades won't.",
    features: [
      "Torch™ thick-metal cutting geometry",
      "10 TPI — optimized for plate and angle iron",
      "9-inch reach for in-wall and structural cuts",
      "Hardened bi-metal teeth"
    ],
    specs: {
      "Length": "9 inch",
      "TPI": "10",
      "Application": "Thick metal cutting",
      "Pack Size": "5 blades"
    },
    useCases: ["Demolition", "Mechanical retrofit", "Structural metal cuts", "HVAC removal"],
    model: "48-00-5713",
    quantity: "5 pack",
    affiliateLink: `https://www.amazon.com/s?k=Milwaukee+48-00-5713&tag=${AFFILIATE_TAG}`,
    imageUrl: "images/sawzall.svg"
  },
  {
    id: 9,
    sku: "FY-S-DUC-10",
    slug: "efok-heavy-duty-waterproof-duct-tape-10pk",
    name: "EFOK Heavy Duty Waterproof Duct Tape (10 pack)",
    brand: "EFOK",
    category: "supplies",
    tagline: "Waterproof duct tape that actually holds in wet, cold, and dirty conditions.",
    description: "1.88 in × 90 ft per roll. Strong adhesive, hand-tearable, waterproof backing.",
    longDescription: "Cheap duct tape fails the moment you put it on a damp surface or try to pull it off the roll in cold weather. This is the heavier-duty alternative — waterproof poly backing, aggressive adhesive that bites on cold and damp surfaces, and a tear strength that lets crews work it without a knife. 10 rolls per pack — enough to last a multi-week project.",
    features: [
      "Waterproof polyethylene backing",
      "Aggressive cold-weather adhesive",
      "Hand-tearable — no blade required",
      "1.88 in width × 90 ft per roll",
      "10 rolls per pack"
    ],
    specs: {
      "Width": "1.88 inch",
      "Length": "90 ft / roll",
      "Pack Size": "10 rolls",
      "Backing": "Waterproof polyethylene"
    },
    useCases: ["Vapor barrier seal", "Cable bundling", "Tarp seaming", "General field repair"],
    quantity: "10 pack",
    affiliateLink: `https://www.amazon.com/s?k=EFOK+heavy+duty+duct+tape+10+pack&tag=${AFFILIATE_TAG}`,
    imageUrl: "images/duct-tape.svg"
  },
  {
    id: 10,
    sku: "FY-H-IRN-9",
    slug: "sk-9-ironworkers-pliers",
    name: 'SK 9" Ironworker\'s Pliers',
    brand: "SK",
    category: "hand-tools",
    tagline: "The pliers ironworkers actually use — heavy knurled jaws and spring-loaded cutters.",
    description: "9-inch ironworker pliers with knurled jaws, side cutters, and CR-V steel construction.",
    longDescription: "An ironworker's pliers are not the same tool as a lineman's. The jaws are heavier, the knurl is deeper, and the cutters are positioned to twist tie wire on rebar without losing the bite. SK builds these from premium chrome-vanadium steel and spring-loads the handles so the pliers open between cuts — a small thing that prevents fatigue across an 800-tie shift.",
    features: [
      "Heavy knurled jaws — bite tie wire without slipping",
      "Spring-loaded handles — open between cuts",
      "CR-V (chrome-vanadium) steel construction",
      "Side cutters sized for 16-gauge tie wire",
      "9-inch length for leverage on heavy ties"
    ],
    specs: {
      "Length": "9 inch",
      "Material": "Chrome-vanadium steel",
      "Type": "Ironworker's pliers w/ side cutters",
      "Handle": "Spring-loaded"
    },
    useCases: ["Rebar tying", "Concrete prep", "General ironwork"],
    affiliateLink: `https://www.amazon.com/s?k=SK+9+ironworkers+pliers&tag=${AFFILIATE_TAG}`,
    imageUrl: "images/pliers.svg"
  },
  {
    id: 11,
    sku: "FY-M-TAP-100",
    slug: "komelon-n6100-open-reel-tape-100ft",
    name: "Komelon N6100 Open Reel Long Tape — 100 ft",
    brand: "Komelon",
    category: "measuring",
    tagline: "Long-range layout for site prep, civil, and concrete.",
    description: "100 ft steel-blade open-reel tape. Imperial graduations, folding crank handle.",
    longDescription: "When pulling layout lines for footings, pad locations, or site grades, a 25-foot pocket tape is not the right tool. The Komelon N6100 is the long-range layout tape civil and concrete crews actually use — durable steel blade, folding crank handle for fast rewind, and the open-reel design (vs closed-case) that lets the blade dry between uses. That's the difference between a tape that lasts a season and one that rusts in a month.",
    features: [
      "100 ft steel blade with imperial graduations",
      "Open-reel design — blade dries between uses",
      "Folding crank handle for fast rewind",
      "End hook with leather thumb loop",
      "Lightweight ABS frame"
    ],
    specs: {
      "Length": "100 ft",
      "Blade": "Steel",
      "Type": "Open-reel",
      "Frame": "ABS"
    },
    useCases: ["Site layout", "Footing prep", "Civil & utility", "Property staking"],
    model: "N6100",
    affiliateLink: `https://www.amazon.com/s?k=Komelon+N6100+100ft&tag=${AFFILIATE_TAG}`,
    imageUrl: "images/tape.svg"
  },
  {
    id: 12,
    sku: "FY-S-SPL-55",
    slug: "spill-kit-55-gallon",
    name: "55-Gallon Spill Response Kit",
    brand: "OEM",
    category: "safety-gear",
    tagline: "OSHA-aligned spill response in a single rolling drum.",
    description: "52-gallon absorbent capacity. 144 components. Yellow drum. For oil, fuel, and coolant response.",
    longDescription: "Every site that runs equipment needs a spill kit on the truck — environmental fines and the EPA do not care if the spill was small. This 55-gallon drum kit holds 52 gallons of absorbed liquid across 144 components: socks, pillows, pads, gloves, goggles, and disposal bags. Rolls on the drum's bottom rim, lid clamps closed for storage. One kit per crew truck on civil and excavation jobs.",
    features: [
      "52-gallon absorbent capacity",
      "144 components — pads, socks, pillows, PPE, disposal",
      "Yellow drum — high-visibility on site",
      "Rollable bottom rim for one-person deployment",
      "Aligned with OSHA and EPA spill response practice"
    ],
    specs: {
      "Drum Size": "55 gallon",
      "Absorbed Volume": "52 gallon",
      "Components": "144",
      "Color": "Yellow",
      "Application": "Oil, fuel, coolant"
    },
    useCases: ["Excavation & civil", "Equipment yards", "Mechanical & fueling", "Site offices"],
    affiliateLink: `https://www.amazon.com/s?k=55+gallon+spill+kit+yellow&tag=${AFFILIATE_TAG}`,
    imageUrl: "images/spill-kit.svg"
  }
];

// ----------------------------------------------------------------
// Editorial enrichment — ratings, picks, and pull-quotes per SKU.
// Ratings are indicative of typical Amazon ranges for these brands.
// Update with live data when you wire up the Amazon Product API.
// ----------------------------------------------------------------
const enrichment = {
  1:  { rating: 4.7, reviews: 1840, editorsPick: true,  bestFor: "Demo & Steel", pickQuote: "Highest cut rating you can get in a knit glove without going to chain mail. We issue these to demo and salvage crews — they outlast three pairs of standard A4s." },
  2:  { rating: 4.6, reviews: 920,                       bestFor: "Ironwork",     pickQuote: "Goatskin palm gives the cable feel that lined synthetics never quite match. The Rebel is the ironworker's everyday." },
  3:  { rating: 4.5, reviews: 6420,                      bestFor: "Indoor Trades", pickQuote: "Cheap enough to issue by the case. Z87.1 rated, and the wraparound seals out grinder dust." },
  4:  { rating: 4.4, reviews: 2110,                      bestFor: "Outdoor Crews", pickQuote: "Tinted lens cuts roof and concrete glare without going so dark you lose detail. Pair with the clear pack." },
  5:  { rating: 4.7, reviews: 480,                       bestFor: "Structural",    pickQuote: "Forged in one piece — no welded heads to fail. The 1/2 lives in our connection bag." },
  6:  { rating: 4.7, reviews: 410,                       bestFor: "Heavy Steel",   pickQuote: "5/8 sister to the punch above. Carry both diameters; you'll need them both." },
  7:  { rating: 4.8, reviews: 3210, editorsPick: true,  bestFor: "Mech & Pipe",  pickQuote: "Variable 8-10 TPI is what kept this blade alive on a job where every other blade walked off the cut." },
  8:  { rating: 4.8, reviews: 5670,                      bestFor: "Demo",          pickQuote: "Torch geometry was built for thick metal — and unlike standard recip blades, it doesn't surrender on the second cut." },
  9:  { rating: 4.5, reviews: 7290,                      bestFor: "Site Repair",   pickQuote: "Cold-weather adhesive bites where most duct tape lifts. Hand-tearable means no knife on a windy roof." },
  10: { rating: 4.6, reviews: 1320,                      bestFor: "Rebar",         pickQuote: "The pliers ironworkers actually use. Spring-loaded handles save a hand across an 800-tie shift." },
  11: { rating: 4.3, reviews: 540,                       bestFor: "Site Layout",   pickQuote: "Open-reel design lets the blade dry — that's why this lasts a season instead of a month." },
  12: { rating: 4.7, reviews: 220,  editorsPick: true,  bestFor: "Civil & Yards", pickQuote: "OSHA-aligned spill kit on rolling drum. One per crew truck. EPA fines do not care if the spill was small." }
};
for (const p of products) Object.assign(p, enrichment[p.id] || {});

// ----------------------------------------------------------------
// Amazon enrichment — real ASINs, hi-res CDN images, /dp/ links.
// Pittsburgh tape (id 11) is Harbor Freight house-brand — no Amazon
// listing. Keeps schematic SVG and the search-based affiliate link.
// ----------------------------------------------------------------
const amazon = {
  1:  { asin: "B09MZSGR5C", imageUrl: "https://m.media-amazon.com/images/I/612NYs0X0cL._AC_SL1500_.jpg" },
  2:  { asin: "B08W96TT8J", imageUrl: "https://m.media-amazon.com/images/I/51QKev3j9KL._AC_SL1500_.jpg" },
  3:  { asin: "B0BGSDYFQC", imageUrl: "https://m.media-amazon.com/images/I/61Gs%2BrhHhzL._AC_SL1500_.jpg" },
  4:  { asin: "B0CCJ82CDX", imageUrl: "https://m.media-amazon.com/images/I/71v9eMyo5uL._AC_SL1500_.jpg", brand: "YENPK" },
  5:  { asin: "B084TMYRFY", imageUrl: "https://m.media-amazon.com/images/I/71nJyaMdynL._AC_SL1500_.jpg" },
  6:  { asin: "B084TMK4DC", imageUrl: "https://m.media-amazon.com/images/I/71svjQMzYnL._AC_SL1500_.jpg" },
  7:  { asin: "B002TIY3KY", imageUrl: "https://m.media-amazon.com/images/I/11Lpgypp0HL._AC_.jpg" },
  8:  { asin: "B009HEGVXK", imageUrl: "https://m.media-amazon.com/images/I/31iQ-FZx9kL._AC_SL1500_.jpg" },
  9:  { asin: "B0DM91QTDV", imageUrl: "https://m.media-amazon.com/images/I/71cV4ZEUP9L._AC_SL1500_.jpg" },
  10: { asin: "B0CTY8SG5B", imageUrl: "https://m.media-amazon.com/images/I/617xRtxYboL._AC_SL1500_.jpg" },
  11: { asin: "B002IVTC5S", imageUrl: "https://m.media-amazon.com/images/I/51gG0L9oHLL._AC_SL1063_.jpg" },
  12: { asin: "B0FBM55JS9", imageUrl: "https://m.media-amazon.com/images/I/51F-3O0leLL._AC_SL1500_.jpg", brand: "MOLLIFII" }
};
for (const p of products) {
  const a = amazon[p.id];
  if (!a) continue;
  Object.assign(p, a);
  if (a.asin) p.affiliateLink = `https://www.amazon.com/dp/${a.asin}?tag=${AFFILIATE_TAG}`;
}
