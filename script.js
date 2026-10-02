/* OMKAR PLYWOOD — catalog + inquiry */
(function () {
  "use strict";

  const WA_NUMBER = "919819808552";
  const WA_BASE = "https://wa.me/" + WA_NUMBER;

  const CATEGORIES = [
    {
      id: "plywood",
      name: "Plywood sheets",
      short: "BWP, MR & commercial grades",
      tone: "tone-ply",
      icon: "sheet",
    },
    {
      id: "blockboard",
      name: "Block board / flush doors",
      short: "Doors & block boards",
      tone: "tone-block",
      icon: "door",
    },
    {
      id: "laminates",
      name: "Laminates / veneers",
      short: "Decorative surfaces",
      tone: "tone-lam",
      icon: "layers",
    },
    {
      id: "marble",
      name: "Marble slabs",
      short: "Natural & imported",
      tone: "tone-marble",
      icon: "stone",
    },
    {
      id: "granite",
      name: "Granite / other stone",
      short: "Granite & more",
      tone: "tone-granite",
      icon: "granite",
    },
    {
      id: "adhesives",
      name: "Adhesives",
      short: "Woodworking glues & sealants",
      tone: "tone-adhesive",
      icon: "droplet",
    },
    {
      id: "maintenance",
      name: "Maintenance and repair",
      short: "Wood preservatives & care",
      tone: "tone-repair",
      icon: "shield",
    },
  ];

  const PRODUCTS = [
    {
      id: "ply-bwp-18",
      category: "plywood",
      name: "Century Sainik 710 Marine Plywood",
      specs: ["BWP / IS:710", "Waterproof by CenturyPly"],
      detail: ["Grade: BWP / IS:710", "Brand: CenturyPly Sainik 710", "Type: Marine / waterproof plywood", "Use: Kitchens, wet areas, exterior-facing carpentry"],
      desc: "Century Sainik 710 marine plywood — BWP / IS:710 waterproof sheets from CenturyPly. Ideal for kitchens, bathrooms and exterior-facing carpentry. Ask for thickness, size and current stock.",
      price: "Ask for price",
      image: "images/sainik-710.jpg",
      images: ["images/sainik-710.jpg", "images/sainik-710-sheet.jpg"],
    },
    {
      id: "ply-club-prime",
      category: "plywood",
      name: "Century Club Prime Ply",
      specs: ["BWP marine", "CenturyPly Club Prime"],
      detail: ["Grade: BWP marine", "Brand: CenturyPly Club Prime", "Type: Marine / waterproof plywood", "Use: Kitchens, wet areas, exterior-facing carpentry"],
      desc: "Century Club Prime BWP marine plywood from CenturyPly — premium waterproof sheets for kitchens, bathrooms and wet-area carpentry. Ask for thickness, size and current stock.",
      price: "Ask for price",
      image: "images/club-prime-sheet.jpg",
      images: ["images/club-prime-sheet.jpg", "images/club-prime-brand.jpg"],
    },
    {
      id: "ply-green-710",
      category: "plywood",
      name: "Greenply Green Marine 710",
      specs: ["BWP / Green 710", "Greenply Virashield"],
      detail: ["Grade: BWP / Green 710", "Brand: Greenply Green Marine 710", "Technology: Virashield", "Type: Marine / waterproof plywood", "Use: Kitchens, wet areas, exterior-facing carpentry"],
      desc: "Greenply Green Marine 710 — BWP / Green 710 waterproof marine plywood with Virashield protection. Ideal for kitchens, bathrooms and wet-area carpentry. Ask for thickness, size and current stock.",
      price: "Ask for price",
      image: "images/green-710-sheet.jpg",
      images: ["images/green-710-sheet.jpg", "images/green-710-promo.png"],
    },
    {
      id: "ply-players-mr",
      category: "plywood",
      name: "Players MR Ply",
      specs: ["MR / AA", "IS 303:2024"],
      detail: ["Grade: MR (moisture resistant), MR / AA", "Brand: Players Ply & Boards", "Standard: IS 303:2024, CML 6400158814", "Face: 100% gurjan face veneer", "Type: Plywood for general purpose"],
      desc: "Players MR Ply from Players Ply & Boards — moisture-resistant (MR / AA) general-purpose plywood to IS 303:2024 (CML 6400158814), with 100% gurjan face veneer. Ask for thickness, size and current stock.",
      price: "Ask for price",
      image: "images/players-mr-ply.jpg",
      images: ["images/players-mr-ply.jpg", "images/players-mr-ply-2.jpg"],
    },
    {
      id: "bb-flush-32",
      category: "blockboard",
      name: "Flush Door 32mm",
      specs: ["Thickness: 32 mm", "Sizes: standard door"],
      detail: ["Core: Block / tubular", "Faces: Commercial / teak option", "Use: Internal doors"],
      desc: "Ready flush doors for residential and commercial interiors. Confirm size, lipping and finish when enquiring.",
      price: "Ask for price",
    },
    {
      id: "bb-block-19",
      category: "blockboard",
      name: "Block Board 19mm",
      specs: ["Thickness: 19 mm", "Size: 8 × 4 ft"],
      detail: ["Core: Softwood battens", "Face: Hardwood", "Use: Tables, panels"],
      desc: "Stable block board for tabletops, partitions and panel work where solid feel matters more than thin plywood.",
      price: "On request",
    },
    {
      id: "bb-flush-teak",
      category: "blockboard",
      name: "Teak Face Flush Door",
      specs: ["Thickness: 30–35 mm", "Face: Teak veneer"],
      detail: ["Finish: Natural teak look", "Edge: Matching lipping options", "Use: Premium interiors"],
      desc: "Teak-faced flush doors for homes and offices. Share opening size and quantity for a quote.",
      price: "Ask for price",
    },
    {
      id: "lam-hd",
      category: "laminates",
      name: "High-Pressure Laminate (HPL)",
      specs: ["Thickness: 0.8–1.0 mm", "Sheet: 8 × 4 ft"],
      detail: ["Finish: Matt / gloss / texture", "Use: Cabinets, wall panels", "Range: Solids & woodgrains"],
      desc: "Decorative HPL sheets for kitchen shutters, wardrobes and wall cladding. Tell us colour code or send a photo.",
      price: "Ask for price",
    },
    {
      id: "lam-veneer",
      category: "laminates",
      name: "Natural Wood Veneer Sheet",
      specs: ["Species: Teak / oak options", "Backing: Paper / fleece"],
      detail: ["Match: Book / slip", "Use: Furniture faces", "Finish: Needs polish"],
      desc: "Real wood veneers for premium furniture faces. Availability varies by species — ask before finalising designs.",
      price: "On request",
    },
    {
      id: "lam-acrylic",
      category: "laminates",
      name: "Acrylic / Gloss Shutters Sheet",
      specs: ["High gloss finish", "Common kitchen sizes"],
      detail: ["Look: Mirror gloss", "Use: Modern kitchens", "Care: Soft clean only"],
      desc: "Gloss acrylic-style panels popular for contemporary kitchens. Confirm colour and sheet size with us.",
      price: "Ask for price",
    },
    {
      id: "mar-italian",
      category: "marble",
      name: "Italian White Marble Slab",
      specs: ["Finish: Polished", "Thickness: ~18–20 mm"],
      detail: ["Look: White with grey veins", "Use: Floors, counters", "Selection: Lot matching"],
      desc: "Imported-look white marble slabs for flooring and vanity tops. Visit to select veins or request photos of current lots.",
      price: "Ask for price",
    },
    {
      id: "mar-makrana",
      category: "marble",
      name: "Makrana White Marble",
      specs: ["Origin style: Indian white", "Finish: Polished / honed"],
      detail: ["Use: Temples, floors, cladding", "Cut: Slabs & tiles options", "Grade: Ask for lot"],
      desc: "Classic Indian white marble for traditional and contemporary spaces. Rates depend on grade and finish.",
      price: "On request",
    },
    {
      id: "mar-green",
      category: "marble",
      name: "Green Marble Slab",
      specs: ["Colour: Forest / emerald tones", "Finish: Polished"],
      detail: ["Use: Feature walls, floors", "Thickness: Standard slab", "Pattern: Natural variation"],
      desc: "Statement green marble for feature flooring and wall cladding. Enquire for current stock slabs.",
      price: "Ask for price",
    },
    {
      id: "gr-black",
      category: "granite",
      name: "Black Galaxy Granite",
      specs: ["Finish: Polished", "Use: Kitchen counters"],
      detail: ["Look: Black with gold flecks", "Thickness: ~18–20 mm", "Edge: Profiling available"],
      desc: "Popular kitchen-counter granite. Share length, width and sink cut-out needs for a worktop quote.",
      price: "Ask for price",
    },
    {
      id: "gr-tan",
      category: "granite",
      name: "Tan Brown Granite",
      specs: ["Finish: Polished / leather", "Colour: Warm brown"],
      detail: ["Use: Floors, stairs, counters", "Durability: High", "Maintenance: Low"],
      desc: "Warm brown granite for stairs, flooring and outdoor-adjacent areas. Good wholesale option for projects.",
      price: "On request",
    },
    {
      id: "gr-kadappa",
      category: "granite",
      name: "Kadappa / Local Stone",
      specs: ["Colour: Dark grey-black", "Use: Flooring, utility"],
      detail: ["Finish: Natural / polished", "Budget: Value stone", "Sizes: Slabs & tiles"],
      desc: "Economical dark stone for utility floors, staircases and project work. Ask for current Mumbai rates.",
      price: "Ask for price",
    },
    {
      id: "adh-fevicol-marine",
      category: "adhesives",
      name: "Fevicol Marine Waterproof Adhesive",
      specs: ["Pidilite Fevicol Marine", "Waterproof woodworking adhesive"],
      detail: ["Brand: Pidilite Fevicol Marine", "Type: Waterproof woodworking adhesive", "Use: Plywood, laminates, wet-area carpentry", "Pack: Tub & pouch options"],
      desc: "Pidilite Fevicol Marine — waterproof woodworking adhesive for plywood, laminates and wet-area joinery. Ask for pack size and current price.",
      price: "Ask for price",
      image: "images/fevicol-marine-tub.jpg",
      images: ["images/fevicol-marine-tub.jpg", "images/fevicol-marine-pouch.webp"],
    },
    {
      id: "adh-euro-7000-wp",
      category: "adhesives",
      name: "Euro 7000 WP 2in1 Waterproof Adhesive",
      specs: ["Euro 7000 WP 2in1", "Waterproof wood adhesive, fast drying"],
      detail: ["Brand: Euro 7000 WP 2in1", "Type: Waterproof wood adhesive", "Features: Waterproof & fast drying", "Use: Plywood, laminates, woodworking", "Pack: Bucket & pouch options"],
      desc: "Euro 7000 WP 2in1 — waterproof, fast-drying wood adhesive for plywood, laminates and joinery. Ask for pack size and current price.",
      price: "Ask for price",
      image: "images/euro-7000-bucket.png",
      images: ["images/euro-7000-bucket.png", "images/euro-7000-pouch.jpg"],
    },
    {
      id: "adh-fevicol-heatx",
      category: "adhesives",
      name: "Fevicol HeatX Heatproof Adhesive",
      specs: ["Pidilite Fevicol HeatX", "Heatproof woodworking adhesive"],
      detail: ["Brand: Pidilite Fevicol HeatX", "Type: Heatproof woodworking adhesive", "Use: Woodworking, laminate pasting", "Pack: Can"],
      desc: "Pidilite Fevicol HeatX — heatproof woodworking adhesive for woodworking and laminate pasting. Ask for pack size and current price.",
      price: "Ask for price",
      image: "images/fevicol-heatx-can.jpg",
      images: ["images/fevicol-heatx-can.jpg", "images/fevicol-heatx-promo.png"],
    },
    {
      id: "adh-abro-6123",
      category: "adhesives",
      name: "Abro High Performance Masking Tape 6123",
      specs: ["Abro 6123", "High performance masking tape, 150+ microns"],
      detail: ["Brand: AIPL Abro 6123", "Type: High performance masking tape", "Thickness: 150+ microns", "Features: High adhesion, clean removal, no residue, sharp edge finish", "Use: Painting, finishing and masking"],
      desc: "AIPL Abro 6123 — high performance masking tape, 150+ microns, for painting and finishing. High adhesion with clean removal. Ask for width, length and current price.",
      price: "Ask for price",
      image: "images/abro-tape-pack.jpg",
      images: ["images/abro-tape-pack.jpg", "images/abro-tape-tin.jpg", "images/abro-tape-rolls.jpg", "images/abro-tape-use.jpg"],
    },
    {
      id: "adh-fevicol-hiper-star",
      category: "adhesives",
      name: "Fevicol Hi-Per Star",
      specs: ["Pidilite Fevicol Hi-Per Star", "High-performance woodworking adhesive, D3"],
      detail: ["Brand: Pidilite Fevicol Hi-Per Star", "Type: Synthetic resin adhesive", "Certification: D3 (EN 204/205)", "Features: High coverage up to 1.5 sheet/kg, high grab, waterproof, anti-bubble", "Trimming: 1.5 hours", "Use: Premium lamination and veneer pasting", "Pack: Jar & pouch options"],
      desc: "Pidilite Fevicol Hi-Per Star — high-performance woodworking adhesive for premium lamination and veneer pasting. Certified D3 (EN 204/205), waterproof with anti-bubble formulation. Ask for pack size and current price.",
      price: "Ask for price",
      image: "images/fevicol-hiper-star-jar.jpg",
      images: ["images/fevicol-hiper-star-jar.jpg", "images/fevicol-hiper-star-pouch.jpg", "images/fevicol-hiper-star-info.jpg"],
    },
    {
      id: "adh-fevicol-hiper",
      category: "adhesives",
      name: "Fevicol Hi-Per",
      specs: ["Pidilite Fevicol Hi-Per", "High-performance woodworking adhesive, D3"],
      detail: ["Brand: Pidilite Fevicol Hi-Per", "Type: High-performance woodworking adhesive", "Certification: D3", "Features: Anti-bubble, waterproof", "Use: Premium laminates and veneers", "Pack: Bucket & pouch options"],
      desc: "Pidilite Fevicol Hi-Per — high-performance woodworking adhesive for premium laminates and veneers. D3 certified, waterproof and anti-bubble. Ask for pack size and current price.",
      price: "Ask for price",
      image: "images/fevicol-hiper-bucket.jpg",
      images: ["images/fevicol-hiper-bucket.jpg", "images/fevicol-hiper-promo.jpg", "images/fevicol-hiper-pouch.jpg"],
    },
    {
      id: "adh-fevicol-nail-free-ultra",
      category: "adhesives",
      name: "Fevicol Nail Free Ultra",
      specs: ["Pidilite Fevicol Nail Free Ultra", "Multipurpose adhesive sealant"],
      detail: ["Brand: Pidilite Fevicol Nail Free Ultra", "Type: Multisubstrate adhesive sealant", "Features: Strong grab, heat and water resistant, super fast bonding", "Bonds: ACP, metal, concrete, stone, ceramic tiles", "Use: Wet areas; paintable after curing", "Pack: Cartridge"],
      desc: "Pidilite Fevicol Nail Free Ultra — multipurpose adhesive sealant with strong grab, heat and water resistance, and super fast bonding. Bonds ACP, metal, concrete, stone and ceramic tiles. Suitable for wet areas and paintable after curing. Ask for pack size and current price.",
      price: "Ask for price",
      image: "images/fevicol-nail-free-ultra.jpg",
      images: ["images/fevicol-nail-free-ultra.jpg", "images/fevicol-nail-free-ultra-features.jpg", "images/fevicol-nail-free-ultra-gun.jpg", "images/fevicol-nail-free-ultra-promo.jpg"],
    },
    {
      id: "adh-fevicol-nail-free-ultra-kwik",
      category: "adhesives",
      name: "Fevicol Nail Free Ultra Kwik",
      specs: ["Pidilite Fevicol Nail Free Ultra Kwik", "Multisubstrate adhesive sealant"],
      detail: ["Brand: Pidilite Fevicol Nail Free Ultra Kwik", "Type: Multisubstrate adhesive sealant", "Features: Instant grab, strong bond, heat and water resistant, solvent-free", "Claims: 1 kg in 10 seconds; quick mirror fixing and shelves/brackets, drill-free", "Suitable for: Mirror, ACP, ceramic tiles, MDF, mouldings, marble, wood", "Pack: Small tube and cartridge"],
      desc: "Pidilite Fevicol Nail Free Ultra Kwik — solvent-free multisubstrate adhesive sealant with instant grab, a strong bond, and heat and water resistance. Pack claims 1 kg in 10 seconds, with drill-free mirror fixing and shelves or brackets. Suitable for mirror, ACP, ceramic tiles, MDF, mouldings, marble and wood. Shown as a small tube and a cartridge. Ask for current price.",
      price: "Ask for price",
      image: "images/fevicol-nail-free-ultra-kwik.jpg",
      images: ["images/fevicol-nail-free-ultra-kwik.jpg", "images/fevicol-nail-free-ultra-kwik-mirror.jpg", "images/fevicol-nail-free-ultra-kwik-features.jpg", "images/fevicol-nail-free-ultra-kwik-shelves.jpg"],
    },
    {
      id: "adh-araldite-standard",
      category: "adhesives",
      name: "Araldite Standard Epoxy",
      specs: ["Araldite Standard", "Two-part epoxy adhesive"],
      detail: ["Brand: Araldite", "Type: Two-part epoxy", "Resin: Standard Epoxy Resin AW 106 IN", "Hardener: Standard Epoxy Hardener HV 953 IN", "Claims: Highest bond strength, multi substrate, heat and chemical resistant, waterproof, 75 years", "Also shown: Robust resin matrix, 120 kg/sq.cm impact resistance, 45-50 min pot life, bonds heavy granite, wood, metal and ceramic, 470+ kg load capacity"],
      desc: "Araldite Standard — two-part epoxy, Standard Epoxy Resin AW 106 IN and Standard Epoxy Hardener HV 953 IN. Pack claims highest bond strength, multi substrate use, heat and chemical resistance, waterproof, and 75 years. Also shown: robust resin matrix with 120 kg/sq.cm impact resistance, 45–50 min pot life, bonds heavy granite, wood, metal and ceramic, and 470+ kg load capacity. Ask for current price.",
      price: "Ask for price",
      image: "images/araldite-standard.jpg",
      images: ["images/araldite-standard.jpg", "images/araldite-standard-use.jpg"],
    },
    {
      id: "adh-fevi-seal-neutral-pro",
      category: "adhesives",
      name: "Fevi Seal Neutral Pro",
      specs: ["Fevi Seal / Pidilite", "Neutral cure silicone sealant, 280 ml"],
      detail: ["Brand: Fevi Seal / Pidilite (from the makers of Fevicol)", "Type: Neutral cure silicone sealant", "Pack: 280 ml", "Features: No corrosion, excellent adhesion, good weatherability, anti-fungal, high strength, long life", "Uses: Windows and door frames, bathrooms and kitchens, mirror and glass, interior gap filling", "Colours: Clear, black and white"],
      desc: "Fevi Seal Neutral Pro from Pidilite (from the makers of Fevicol) — neutral cure silicone sealant, 280 ml. No corrosion, excellent adhesion, good weatherability, anti-fungal, high strength and long life. For windows and door frames, bathrooms and kitchens, mirror and glass, and interior gap filling. Available in clear, black and white.",
      price: "Ask for price",
      image: "images/fevi-seal-neutral-pro.jpg",
      images: ["images/fevi-seal-neutral-pro.jpg", "images/fevi-seal-neutral-pro-promo.jpg"],
    },
    {
      id: "adh-fevicol-ezee-spray",
      category: "adhesives",
      name: "Fevicol Ezee Spray",
      specs: ["Pidilite Fevicol Ezee Spray", "Multi-purpose sprayable contact adhesive, 353 g (500 ml)"],
      detail: ["Brand: Pidilite / Fevicol", "Type: Multi-purpose sprayable contact adhesive and woodworking adhesive", "Pack: 353 g (500 ml) can", "Features: Instant bonding, excellent heat resistance, fast grab, controlled spray (low, medium, high)", "Uses: Ceiling lamination, vertical lamination, soundproofing, small-area veneer pasting without nails, acoustic foam panelling, DIY household projects", "Application: Hold about 10 seconds; poster claims no curing wait"],
      desc: "Pidilite Fevicol Ezee Spray — multi-purpose sprayable contact adhesive and woodworking adhesive in a 353 g (500 ml) can. Instant bonding, excellent heat resistance, fast grab, and controlled spray (low, medium and high). For ceiling lamination, vertical lamination, soundproofing, small-area veneer pasting without nails, acoustic foam panelling and DIY household projects. Poster says hold about 10 seconds, with no curing wait.",
      price: "Ask for price",
      image: "images/fevicol-ezee-spray.jpg",
      images: ["images/fevicol-ezee-spray.jpg", "images/fevicol-ezee-spray-use.jpg", "images/fevicol-ezee-spray-uses.jpg"],
    },
    {
      id: "adh-fevicol-probond",
      category: "adhesives",
      name: "Fevicol Probond",
      specs: ["Pidilite Fevicol Probond", "Special adhesive for PVC and acrylic laminates"],
      detail: ["Brand: Pidilite / Fevicol", "Type: Woodworking adhesive", "Use: PVC and acrylic laminates", "Features: Easy to apply, high coverage, high grab"],
      desc: "Pidilite Fevicol Probond — special adhesive for PVC and acrylic laminates, and a woodworking adhesive. Easy to apply, with high coverage and high grab. Ask for pack size and current price.",
      price: "Ask for price",
      image: "images/fevicol-probond.jpg",
      images: ["images/fevicol-probond.jpg", "images/fevicol-probond-promo.jpg"],
    },
    {
      id: "mnt-terminator-clear",
      category: "maintenance",
      name: "Terminator Clear Wood Preservative",
      specs: ["Terminator / Anpex", "Clear wood preservative"],
      detail: ["Brand: Terminator / Anpex", "Type: Clear wood preservative", "Formula: Anpex Insta Kill", "Claims: Kills termites, penetrates deep", "Pack claims: Eco friendly, harmless to the skin, DIY, non-staining, long lasting", "Use: Home and professional; safe for wood", "Pack: Can with spray trigger"],
      desc: "Terminator Clear — clear wood preservative from Terminator / Anpex. Anpex Insta Kill formula that kills termites and penetrates deep. Pack claims: eco friendly, harmless to the skin, DIY, non-staining, long lasting, for home and professional use, and safe for wood. Ask for current price.",
      price: "Ask for price",
      image: "images/terminator-clear.webp",
      images: ["images/terminator-clear.webp", "images/terminator-clear-features.jpg", "images/terminator-clear-defense.jpg"],
    },
  ];

  const ICONS = {
    sheet: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h12l4 4v12H4V4zm12 0v4h4"/><path d="M8 12h8M8 16h6" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
    door: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h10a1 1 0 011 1v16H5V4a1 1 0 011-1z"/><circle cx="14" cy="12" r="1" fill="currentColor"/></svg>',
    layers: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l9 5-9 5-9-5 9-5zm0 8l9 5-9 5-9-5 9-5z"/></svg>',
    stone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18l4-12h4l2 5 2-3h4l3 10H3z"/></svg>',
    granite: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="1"/><circle cx="8" cy="10" r="1.2" fill="currentColor"/><circle cx="14" cy="13" r="0.9" fill="currentColor"/><circle cx="11" cy="16" r="0.7" fill="currentColor"/></svg>',
    droplet: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c0 0-7 8-7 12a7 7 0 0014 0c0-4-7-12-7-12z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l8 3v6c0 5.25-3.4 8.9-8 11-4.6-2.1-8-5.75-8-11V5l8-3z"/></svg>',
  };

  let activeFilter = "all";

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function catById(id) {
    return CATEGORIES.find((c) => c.id === id);
  }

  function productImages(p) {
    if (Array.isArray(p.images) && p.images.length) return p.images.filter(Boolean);
    if (p.image) return [p.image];
    return [];
  }

  function primaryImage(p) {
    const imgs = productImages(p);
    return imgs[0] || null;
  }

  function waLink(text) {
    return WA_BASE + "?text=" + encodeURIComponent(text);
  }

  function productWaText(p) {
    return (
      "Hi Omkar Plywood, I'm interested in *" +
      p.name +
      "* (" +
      (catById(p.category)?.name || p.category) +
      "). Please share price and availability."
    );
  }

  function renderCategories() {
    const grid = $("#categoryGrid");
    grid.innerHTML = CATEGORIES.map((c) => {
      return (
        '<button type="button" class="cat-card" data-filter="' +
        c.id +
        '" role="listitem">' +
        '<span class="cat-icon ' +
        c.tone +
        '">' +
        ICONS[c.icon] +
        "</span>" +
        "<h3>" +
        c.name +
        "</h3>" +
        "<p>" +
        c.short +
        "</p>" +
        "</button>"
      );
    }).join("");

    const chips = $("#filterChips");
    chips.innerHTML =
      '<button type="button" class="chip active" data-filter="all">All</button>' +
      CATEGORIES.map(
        (c) =>
          '<button type="button" class="chip" data-filter="' +
          c.id +
          '">' +
          c.name.split(" / ")[0].split(" ")[0] +
          "</button>"
      ).join("");

    // Friendlier short chip labels
    const chipLabels = {
      plywood: "Plywood",
      blockboard: "Doors",
      laminates: "Laminates",
      marble: "Marble",
      granite: "Granite",
      adhesives: "Adhesives",
      maintenance: "Maintenance",
    };
    $$("#filterChips .chip").forEach((btn) => {
      const f = btn.dataset.filter;
      if (f !== "all" && chipLabels[f]) btn.textContent = chipLabels[f];
    });

    const dl = $("#productSuggestions");
    dl.innerHTML = PRODUCTS.map((p) => '<option value="' + p.name + '"></option>').join("");
  }

  function setFilter(filter, scroll) {
    activeFilter = filter;
    $$(".chip").forEach((c) => c.classList.toggle("active", c.dataset.filter === filter));
    $$(".cat-card").forEach((c) =>
      c.classList.toggle("active", filter !== "all" && c.dataset.filter === filter)
    );
    const label = $("#filterLabel");
    if (filter === "all") {
      label.textContent = "Showing all categories";
    } else {
      label.textContent = "Showing: " + (catById(filter)?.name || filter);
    }
    renderProducts();
    if (scroll) {
      $("#products").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function renderProducts() {
    const grid = $("#productGrid");
    const list =
      activeFilter === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === activeFilter);

    if (!list.length) {
      grid.innerHTML = '<p class="empty-state">No products in this category yet.</p>';
      return;
    }

    grid.innerHTML = list
      .map((p) => {
        const cat = catById(p.category);
        const primary = primaryImage(p);
        return (
          '<article class="product-card" data-id="' +
          p.id +
          '">' +
          '<div class="product-visual ' +
          cat.tone +
          (primary ? " has-image" : "") +
          '">' +
          (primary
            ? '<img src="' +
              primary +
              '" alt="' +
              p.name +
              '" loading="lazy" />'
            : ICONS[cat.icon]) +
          "</div>" +
          '<div class="product-body">' +
          '<p class="product-cat">' +
          cat.name +
          "</p>" +
          "<h3 data-open-detail>" +
          p.name +
          "</h3>" +
          '<p class="product-specs">' +
          p.specs.join(" · ") +
          "</p>" +
          '<div class="product-price">' +
          p.price +
          "</div>" +
          '<div class="product-actions">' +
          '<button type="button" class="btn btn-ghost" data-request-price>Request price</button>' +
          '<a class="btn btn-wa btn-sm" href="' +
          waLink(productWaText(p)) +
          '" target="_blank" rel="noopener">WhatsApp</a>' +
          "</div>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  /* Modal */
  const modal = $("#productModal");

  function openModal(productId) {
    const p = PRODUCTS.find((x) => x.id === productId);
    if (!p) return;
    const cat = catById(p.category);
    $("#modalTitle").textContent = p.name;
    $("#modalCat").textContent = cat.name;
    $("#modalPrice").textContent = p.price;
    $("#modalDesc").textContent = p.desc;
    const imgs = productImages(p);
    const visual = $("#modalVisual");
    visual.className =
      "modal-visual " +
      cat.tone +
      (imgs.length ? " has-image" : "") +
      (imgs.length > 1 ? " has-gallery" : "");
    if (!imgs.length) {
      visual.innerHTML = ICONS[cat.icon];
    } else if (imgs.length === 1) {
      visual.innerHTML =
        '<div class="modal-gallery-main">' +
        '<img src="' +
        imgs[0] +
        '" alt="' +
        p.name +
        '" />' +
        "</div>";
    } else {
      visual.innerHTML =
        '<div class="modal-gallery">' +
        '<div class="modal-gallery-main">' +
        '<img id="modalMainImg" src="' +
        imgs[0] +
        '" alt="' +
        p.name +
        '" />' +
        "</div>" +
        '<div class="modal-thumbs" role="tablist" aria-label="Product photos">' +
        imgs
          .map(function (src, i) {
            return (
              '<button type="button" class="modal-thumb' +
              (i === 0 ? " active" : "") +
              '" data-gallery-src="' +
              src +
              '" aria-label="Photo ' +
              (i + 1) +
              '" aria-selected="' +
              (i === 0 ? "true" : "false") +
              '">' +
              '<img src="' +
              src +
              '" alt="" loading="lazy" />' +
              "</button>"
            );
          })
          .join("") +
        "</div>" +
        "</div>";
    }
    $("#modalSpecs").innerHTML = (p.detail || p.specs)
      .map((s) => {
        const parts = s.split(":");
        if (parts.length >= 2) {
          return (
            "<li><span>" +
            parts[0].trim() +
            "</span><span>" +
            parts.slice(1).join(":").trim() +
            "</span></li>"
          );
        }
        return "<li><span>Spec</span><span>" + s + "</span></li>";
      })
      .join("");
    $("#modalWa").href = waLink(productWaText(p));
    $("#modalRequest").onclick = function () {
      closeModal();
      prefillInquiry(p.name, null);
      $("#inquiry").scrollIntoView({ behavior: "smooth" });
    };
    modal.hidden = false;
    document.body.classList.add("modal-open");
    $(".modal-close").focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  function prefillInquiry(productName, customerType) {
    if (productName) $("#product").value = productName;
    if (customerType) $("#customerType").value = customerType;
  }

  /* Form → WhatsApp */
  function buildInquiryMessage(data) {
    return (
      "Hi Omkar Plywood, I'd like a price quote.\n\n" +
      "*Name:* " +
      data.name +
      "\n" +
      "*Phone:* " +
      data.phone +
      "\n" +
      "*Customer type:* " +
      data.customerType +
      "\n" +
      "*Product interest:* " +
      (data.product || "General enquiry") +
      "\n" +
      "*Quantity / notes:* " +
      (data.notes || "—")
    );
  }

  /* Events */
  function bindEvents() {
    $("#navToggle").addEventListener("click", function () {
      const nav = $("#nav");
      const open = !nav.classList.contains("open");
      nav.classList.toggle("open", open);
      this.setAttribute("aria-expanded", open ? "true" : "false");
      this.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    $$("#nav a").forEach((a) => {
      a.addEventListener("click", () => {
        $("#nav").classList.remove("open");
        $("#navToggle").setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", function (e) {
      const filterBtn = e.target.closest("[data-filter]");
      if (filterBtn && (filterBtn.classList.contains("chip") || filterBtn.classList.contains("cat-card"))) {
        setFilter(filterBtn.dataset.filter, true);
        return;
      }

      const card = e.target.closest(".product-card");
      if (card) {
        if (e.target.closest("[data-request-price]")) {
          const p = PRODUCTS.find((x) => x.id === card.dataset.id);
          if (p) {
            prefillInquiry(p.name, null);
            $("#inquiry").scrollIntoView({ behavior: "smooth" });
          }
          return;
        }
        if (e.target.closest("[data-open-detail]") || e.target.closest(".product-visual")) {
          openModal(card.dataset.id);
        }
      }

      const thumb = e.target.closest("[data-gallery-src]");
      if (thumb && modal && !modal.hidden) {
        const src = thumb.dataset.gallerySrc;
        const main = $("#modalMainImg");
        if (main && src) {
          main.src = src;
          $$(".modal-thumb").forEach(function (t) {
            const on = t === thumb;
            t.classList.toggle("active", on);
            t.setAttribute("aria-selected", on ? "true" : "false");
          });
        }
        return;
      }

      if (e.target.closest("[data-close-modal]")) closeModal();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) closeModal();
    });

    $("#tradeCta").addEventListener("click", function () {
      prefillInquiry("", "Wholesale");
    });

    $("#inquiryForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const name = $("#name").value.trim();
      const phone = $("#phone").value.trim();
      if (!name || !phone) {
        if (!name) $("#name").focus();
        else $("#phone").focus();
        return;
      }
      const data = {
        name: name,
        phone: phone,
        product: $("#product").value.trim(),
        customerType: $("#customerType").value,
        notes: $("#notes").value.trim(),
      };
      window.open(waLink(buildInquiryMessage(data)), "_blank", "noopener");
    });
  }

  function init() {
    renderCategories();
    renderProducts();
    bindEvents();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
