// ─── The Campervan ────────────────────────────────────────────────────────────
// Weinsberg CaraBus 600 DQ Edition [FIRE]

export const campers = [
  {
    id: "carabus",
    name: "Weinsberg CaraBus 600 DQ",
    edition: "Edition [FIRE]",
    tagline: "Adventure for four. Nothing left behind.",
    description:
      "Our Weinsberg CaraBus 600 DQ Edition [FIRE] is a premium compact motorhome built for the kind of trip you'll talk about for years. Just under 6 metres long — easy to park in Andalusian village squares and narrow coastal roads — yet packed with everything four travellers need to live comfortably on the road for weeks at a time. Two double beds, a full kitchen, private shower and toilet, and the distinctive Fire Edition styling that turns heads at every campsite.",
    sleeps: 4,
    seats: 4,
    transmission: "Automatic",
    engine: "Fiat Ducato 140 hp diesel",
    length: "5.99 m",
    kitchen: "2-burner gas hob, stainless steel sink, 95L compressor fridge",
    showerToilet: true,
    airConditioning: true,
    heating: "Gas heating + parking heater",
    storage: "Multiple interior cabinets + garage storage under rear bed",
    beds: "Fixed rear double bed + fold-down double bed over dinette",
    extras: "Awning, rear-view camera, alloy wheels, ESP, navigation system",
    idealFor: "Families, couples, groups of friends, extended road trips",
    imageLabel:
      "Weinsberg CaraBus 600 DQ Edition Fire — use official Weinsberg press photos or your own when the van arrives in June",
    pricing: {
      low: { label: "Low season (Nov–Mar)", price: 150 },
      mid: { label: "Mid season (Apr & Oct)", price: 180 },
      high: { label: "High season (May–Sep)", price: 220 },
    },
    minNights: 5,
    highlights: [
      "Sleeps 4 guests",
      "Private shower & toilet",
      "Air conditioning",
      "Automatic gearbox",
      "95L compressor fridge",
      "Awning included",
    ],
  },
];

// ─── Two Products ─────────────────────────────────────────────────────────────

export const products = [
  {
    id: "self-drive",
    name: "Self-Drive Rental",
    tagline: "Your van. Your route. Your pace.",
    description:
      "Rent the Carabus and go wherever the road takes you. We hand over the van fully equipped and briefed — and you take it from there. Choose your own campsites, change your plans on a whim, stay an extra night when you fall in love with a place. This is Andalusia on your terms.",
    includes: [
      "Fully equipped Weinsberg CaraBus 600 DQ Edition [FIRE]",
      "Fresh bedding, towels & full kitchen kit",
      "Awning, camp chairs & folding table",
      "Unlimited mileage across Spain & Portugal",
      "Comprehensive insurance",
      "Our printed Andalusia road trip guide",
      "24/7 WhatsApp support from Luis",
    ],
    pricing: "From €150/day (low season) · €180/day (mid) · €220/day (high)",
    minNights: 5,
    cta: "Request a Booking",
    ctaHref: "/contact",
    highlight: true,
  },
  {
    id: "guided-tour",
    name: "Guided Campervan Tour",
    tagline: "Expert guide, curated route, van included.",
    description:
      "Travel with Luis — a Seville-based guide with 15 years of experience across Andalusia, Portugal and Morocco. He drives, he guides, he knows every hidden corner, every restaurant worth eating at, every viewpoint the guidebooks miss. You arrive, you explore, you sleep in the van. Everything is taken care of.",
    includes: [
      "Luis as your private driver and expert guide",
      "Carabus 600 DQ Edition [FIRE] as your accommodation",
      "Fully customised itinerary tailored to your interests",
      "Local restaurant recommendations & reservations",
      "Seamless logistics — transfers, campsites, permits",
      "Cultural and natural context at every stop",
    ],
    pricing: "From €800/day — contact us for a personalised quote",
    note: "Every guided tour is built around you. Price varies by group size, duration, and itinerary.",
    cta: "Request a Quote",
    ctaHref: "/contact?type=guided",
    highlight: false,
  },
];

// ─── About Luis ───────────────────────────────────────────────────────────────

export const aboutLuis = {
  name: "Luis Miguel Andrade",
  title: "Founder & Lead Guide",
  location: "Seville, Andalusia",
  experience: "15+ years",
  bio: "I'm a Seville-based guide with over 15 years of experience designing private tours and road trips across Andalusia, Portugal and Morocco. I hold a degree in Environmental Sciences, which means I bring a deep understanding of the landscapes, ecosystems, and culture that make southern Spain so extraordinary. I started Andalusia Camper Vans because I believe the best way to experience this region is slowly — with freedom, comfort, and local knowledge at your fingertips.",
  linkedSite: "https://www.andalusiaguidedtours.com",
  linkedSiteLabel: "Andalusia Guided Tours",
  tripadvisorNote: "5-star rated on TripAdvisor · Hundreds of private tours",
};

// ─── Road Trips ───────────────────────────────────────────────────────────────

export const roadTrips = [
  {
    id: "white-villages",
    name: "The White Villages Route",
    subtitle: "Pueblos Blancos",
    description:
      "Wind through the iconic whitewashed hilltop villages of the Sierra de Cádiz and Serranía de Ronda. Narrow cobbled streets, unbeatable tapas, dramatic mountain scenery, and flamenco at night. This is the Andalusia of postcards — only better in person.",
    days: "5–7 days",
    highlights: ["Ronda's El Tajo gorge", "Zahara de la Sierra", "Arcos de la Frontera", "Grazalema Natural Park", "Jerez sherry bodegas"],
    bestFor: "First-time visitors, architecture lovers, foodies",
    startPoint: "Seville or Málaga",
    imageLabel: "White Villages route — Ronda gorge or Zahara de la Sierra photography here",
  },
  {
    id: "cabo-de-gata",
    name: "Cabo de Gata & Almería Coast",
    subtitle: "Desert meets sea",
    description:
      "Europe's driest corner is one of its most dramatic. The Cabo de Gata natural park offers wild volcanic beaches, crystalline coves, and a landscape straight out of a Spaghetti Western — because it literally is. Completely uncrowded, endlessly beautiful.",
    days: "4–6 days",
    highlights: ["Playa de los Genoveses", "Mini Hollywood Tabernas", "San José village", "Cala de Monsul", "Almería's Alcazaba"],
    bestFor: "Beach lovers, off-grid seekers, photographers",
    startPoint: "Málaga",
    imageLabel: "Cabo de Gata — volcanic beach & turquoise cove photography here",
  },
  {
    id: "seville-tarifa",
    name: "Seville to Tarifa & Cádiz",
    subtitle: "Where the Atlantic meets the Med",
    description:
      "Follow the Atlantic coast south from Seville through the sherry triangle, the oldest city in Europe, clifftop Vejer de la Frontera, and on to Tarifa — where the continent ends and Africa begins just 14 kilometres across the water.",
    days: "6–8 days",
    highlights: ["Cádiz old city", "Bolonia Roman ruins & dunes", "Vejer de la Frontera", "Tarifa & the Strait of Gibraltar", "Sherry tasting in Jerez"],
    bestFor: "History enthusiasts, surfers, adventurous couples",
    startPoint: "Seville",
    imageLabel: "Atlantic coast — Cádiz old town or Tarifa strait photography here",
  },
  {
    id: "granada-sierra-nevada",
    name: "Granada, Sierra Nevada & Tropical Coast",
    subtitle: "Mountains, Alhambra & hidden beaches",
    description:
      "An extraordinary contrast in a single trip: wake up beside the Alhambra, drive into Spain's highest mountains, descend through Alpujarra villages and mango groves, and end on the only subtropical coastline in continental Europe.",
    days: "5–7 days",
    highlights: ["Alhambra & Generalife", "Sierra Nevada National Park", "Las Alpujarras villages", "Nerja Caves", "Tropical Coast beaches"],
    bestFor: "Culture seekers, nature lovers, families",
    startPoint: "Málaga or Granada",
    imageLabel: "Granada + Sierra Nevada — Alhambra or mountain village photography here",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faqs = [
  {
    question: "What is the minimum rental period?",
    answer:
      "Our minimum rental is 5 nights. We find anything shorter doesn't give you enough time to truly experience Andalusia at a campervan pace. Most guests book between 7 and 14 nights.",
  },
  {
    question: "What insurance is included?",
    answer:
      "All rentals include comprehensive third-party liability insurance and collision damage waiver (CDW) with a standard excess. You can reduce the excess to zero by adding our Premium Protection package at the time of booking.",
  },
  {
    question: "Is mileage unlimited?",
    answer:
      "Yes — completely unlimited. We believe road trips should be spontaneous, not anxious. Drive as far as your adventure takes you, with no hidden per-kilometre charges.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "Yes, well-behaved dogs are welcome at no extra charge. We ask that you bring a cover for the bed area and return the van in the same clean condition. Please declare your pet when booking.",
  },
  {
    question: "Where can I pick up and drop off?",
    answer:
      "We operate throughout Andalusia — pickup and drop-off location is agreed at the time of booking. We can meet you in Seville, Málaga, or another convenient location across the region. Airport collection is also available.",
  },
  {
    question: "Do you offer airport pickup?",
    answer:
      "Yes. We offer meet-and-greet collection at Seville Airport (SVQ) and Málaga Airport (AGP). Share your flight details when booking and we'll make sure the van is ready when you land.",
  },
  {
    question: "What's included in the campervan?",
    answer:
      "Everything you need: fresh bedding, pillows, towels, full kitchen kit (pots, pans, crockery, cutlery, utensils), camp chairs, folding table, awning, gas, fresh water tank, and our printed Andalusia road trip guide with insider tips from Luis.",
  },
  {
    question: "Can I drive to Portugal?",
    answer:
      "Absolutely. Portugal is one of our most popular add-ons. The Algarve, Alentejo coast, and Lisbon are all within easy reach. Just let us know your plans when booking and we'll update the insurance documents. No extra charge.",
  },
  {
    question: "Can I take the ferry to Morocco?",
    answer:
      "Unfortunately Morocco is not currently covered under our insurance policy. You're welcome to park the van in Tarifa and take a day trip across the Strait on foot — it's a fantastic experience. If you want a guided Morocco tour combined with your campervan trip, ask us about our guided tour options.",
  },
  {
    question: "What is the deposit and cancellation policy?",
    answer:
      "A 25% deposit confirms your booking. The remaining balance is due 30 days before pickup. Cancellations more than 30 days in advance receive a full deposit refund. Cancellations within 30 days forfeit the deposit. We strongly recommend travel insurance.",
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contactInfo = {
  email: "hola@andalusiacampervans.com",
  pickupNote: "Pickup available throughout Andalusia — Seville, Málaga, airports, and more",
};
