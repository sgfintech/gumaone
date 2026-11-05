/*
  The Guma One app registry — single source of truth for the landing page.

  Every card on the home page, every footer link and the sitemap-ish lists
  come from here. To add an app: append an object; to relaunch one: change
  `status` and `url`. Photos are Pexels CDN URLs (free licence); each card
  falls back to a brand gradient if the image cannot load.

  status: "live" | "beta" | "building" | "soon"
*/

/* 4:3 crop at a card-friendly size so thumbnails load fast on mobile data. */
/* Photos are served from /photos (run `npm run photos` once to download them as WebP);
   if a local copy is missing, Photo falls back to the Pexels CDN URL in `remote`. */
export const pexelsRemote = (id, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${Math.round(w * 0.75)}`;
export const pexels = (id, w = 800) => `/photos/${id}-${w}.webp`;
export const remoteFor = (src) => {
  const m = /\/photos\/(\d+)-(\d+)\.webp/.exec(src || "");
  return m ? pexelsRemote(m[1], Number(m[2])) : src;
};

export const STATUS = {
  live: { label: "Live", tone: "bg-white text-ink" },
  beta: { label: "Beta", tone: "bg-white text-ink" },
  building: { label: "In development", tone: "bg-white/90 text-ink" },
  soon: { label: "Coming soon", tone: "bg-ink text-white" },
};

export const CATEGORIES = [
  { key: "all", label: "All apps", icon: "LayoutGrid" },
  { key: "commerce", label: "Commerce", icon: "ShoppingBag" },
  { key: "marketplace", label: "Marketplaces", icon: "Store" },
  { key: "logistics", label: "Logistics", icon: "Bike" },
  { key: "print", label: "Print", icon: "Printer" },
  { key: "intelligence", label: "Intelligence", icon: "BrainCircuit" },
];

export const APPS = [
  {
    key: "gumakart",
    pitch: "Turn chats into checkouts—and sellers into businesses.",
    forWhom: "tindahan",
    name: "Guma Kart",
    category: "commerce",
    categoryLabel: "Commerce platform",
    tagline: "Turn social selling into scalable commerce.",
    description: "Give Filipino merchants one simpler path from customer inquiry to payment and delivery—without forcing them to abandon the channels where they already sell.",
    status: "beta",
    url: "https://kart.guma.one",
    image: pexels(37212313),
    alt: "Shop owner using her phone inside a small local store",
    credit: "Micomedel / Pexels",
    gradient: "from-teal-600 to-emerald-800",
    featured: true,
  },
  {
    key: "kuyaeddie",
    pitch: "Local help, made accessible—even from abroad.",
    forWhom: "bahay",
    name: "Kuya Eddie",
    category: "marketplace",
    categoryLabel: "On-demand services",
    tagline: "Trusted services, directly connected to families.",
    description: "Connect households and OFWs with local service providers for everyday needs, with planned purpose-specific vouchers that make family support more accountable.",
    status: "live",
    url: "https://kuyaeddie.guma.one",
    image: pexels(7347538),
    alt: "Technician servicing a split-type air conditioner",
    credit: "Richard Low Hong / Pexels",
    gradient: "from-sky-600 to-indigo-800",
    featured: true,
  },
  {
    key: "printair",
    pitch: "Bring print buyers directly to the right suppliers.",
    forWhom: "tindahan",
    name: "PrintAir",
    category: "print",
    categoryLabel: "Print marketplace",
    tagline: "Commercial printing, without the sourcing maze.",
    description: "Connect businesses directly with print providers through clearer job specifications, competitive quotations and simpler order coordination.",
    status: "beta",
    url: "https://printair.guma.one",
    image: pexels(9550363),
    alt: "Industrial printing machine processing paper sheets",
    credit: "Criiv / Pexels",
    gradient: "from-rose-500 to-orange-700",
  },
  {
    key: "gumaprint",
    pitch: "Give print businesses the tools to grow profitably.",
    forWhom: "tindahan",
    name: "GumaPrint",
    category: "print",
    categoryLabel: "Print SaaS (PMOS)",
    tagline: "The operating system for independent print shops.",
    description: "Help printers manage quotations, jobs and customer follow-up in one workflow—reducing administrative friction and improving capacity to serve buyers.",
    status: "building",
    url: "https://frontdesk.guma.one",
    image: "/logos/gumaprint.png",
    alt: "Printer holding freshly printed sheets beside a press",
    credit: "Shkrabaanthony / Pexels",
    gradient: "from-amber-500 to-red-700",
  },
  {
    key: "veyron",
    pitch: "Enterprise-grade control for everyday merchants.",
    forWhom: "tindahan",
    name: "Veyron POS",
    category: "commerce",
    categoryLabel: "Point of sale",
    tagline: "Smarter checkout. Clearer inventory. Stronger margins.",
    description: "Equip small retailers and food businesses with practical point-of-sale, stock visibility and resilient operations—without enterprise-level complexity.",
    status: "building",
    url: "https://veyronpos.guma.one",
    image: pexels(12935081),
    alt: "Cashier using a touchscreen point-of-sale terminal",
    credit: "iMin Technology / Pexels",
    gradient: "from-slate-700 to-slate-900",
  },
  {
    key: "bayango",
    pitch: "Connect underserved communities to commerce.",
    forWhom: "kalsada",
    name: "BayanGo",
    category: "logistics",
    categoryLabel: "Delivery & mobility",
    tagline: "Local delivery infrastructure beyond big cities.",
    description: "Enable merchants, riders and households to coordinate affordable local fulfillment—helping direct-to-consumer businesses reach customers outside major urban centers.",
    status: "building",
    url: "https://bayango.guma.one",
    image: "/logos/bayango.png",
    alt: "Delivery rider passing a flower shop in Manila",
    credit: "Visionsofnico / Pexels",
    gradient: "from-lime-600 to-green-800",
  },
  {
    key: "rekta",
    pitch: "Shorten the supply chain. Share more value.",
    forWhom: "bahay",
    name: "REKTA",
    category: "marketplace",
    categoryLabel: "D2C marketplace",
    tagline: "Direct from producers to Filipino households.",
    description: "Build a direct-to-consumer channel where producers can reach buyers with fewer unnecessary markups, transparent sourcing and commercially viable fulfillment.",
    status: "soon",
    url: "https://rekta.guma.one",
    image: "/logos/rekta.png",
    alt: "Street vendors selling taho in Taal, Batangas",
    credit: "Meetjoeblack / Pexels",
    gradient: "from-fuchsia-600 to-purple-800",
  },
  {
    key: "seafoodsgo",
    pitch: "Better market access for fishers. Fresher supply for buyers.",
    forWhom: "bahay",
    name: "Seafoods GO",
    category: "marketplace",
    categoryLabel: "Fresh-catch marketplace",
    tagline: "From coastal catch to customer.",
    description: "Connect fishing communities directly with households, restaurants and hotels, pairing transparent sourcing with planned quality-controlled distribution.",
    status: "soon",
    url: "https://seafoodsgo.guma.one",
    image: "/logos/seafoodsgo.png",
    alt: "Fisherman holding a fresh fish, Philippines",
    credit: "Khurt Create / Pexels",
    gradient: "from-cyan-600 to-blue-800",
  },
  {
    key: "farmmer",
    pitch: "Let farmers earn from the market—not just the farmgate.",
    forWhom: "bahay",
    name: "FARMMER",
    category: "marketplace",
    categoryLabel: "Agri-commerce",
    tagline: "A more direct market for Philippine agriculture.",
    description: "Connect farmers and cooperatives with consumer and business demand, using consolidated orders and transparent sourcing to improve market access.",
    status: "soon",
    url: null,
    image: "/logos/farmmer.png",
    alt: "Filipino farmer working a rice field",
    credit: "Dave / Pexels",
    gradient: "from-green-600 to-emerald-900",
  },
  {
    key: "abios",
    pitch: "Practical AI that strengthens human-led businesses.",
    forWhom: "makina",
    name: "GUMA ABIOS",
    category: "intelligence",
    categoryLabel: "AI business operating system",
    tagline: "Shared intelligence. Human accountability.",
    description: "Develop an AI-capable operations layer for merchant workflows, insights and repetitive tasks, while keeping people responsible for consequential decisions.",
    status: "building",
    url: null,
    image: "/logos/abios.png",
    alt: "Abstract blue light trails on a dark background",
    credit: "Ian Panelo / Pexels",
    gradient: "from-indigo-700 to-slate-950",
    featured: true,
  },
  {
    key: "gumadial",
    pitch: "Make every customer conversation count.",
    forWhom: "makina",
    name: "GumaDial",
    category: "intelligence",
    categoryLabel: "AI predictive dialer",
    tagline: "Business communications with AI assistance.",
    description: "Bring inbound and outbound calling, virtual numbers and AI-assisted lead handling into one planned workflow for growing service and sales teams.",
    status: "building",
    url: null,
    image: "/logos/gumadial.png",
    alt: "Call-centre agent wearing a headset",
    credit: "Mikhail Nilov / Pexels",
    gradient: "from-violet-600 to-indigo-900",
  },
  {
    key: "gumaweb",
    pitch: "Help offline businesses become discoverable and sellable.",
    forWhom: "makina",
    name: "GUMAweb",
    category: "intelligence",
    categoryLabel: "Claim-your-website",
    tagline: "A digital storefront for every local business.",
    description: "Help underserved merchants establish a credible online presence and connect it to customer inquiries, commerce tools and future direct sales.",
    status: "soon",
    url: null,
    image: "/logos/gumaweb.png",
    alt: "Hands typing on a laptop showing an online store",
    credit: "Shoper / Pexels",
    gradient: "from-sky-500 to-cyan-800",
  },
  {
    key: "aistudio",
    pitch: "Put AI productivity within reach of small businesses.",
    forWhom: "makina",
    name: "GUMA AI Studio",
    category: "intelligence",
    categoryLabel: "Creative & agent studio",
    tagline: "Useful AI workflows without an AI department.",
    description: "Give merchants accessible tools to create marketing content, customer assistants and repeatable workflows—with human review and control.",
    status: "soon",
    url: null,
    image: "/logos/aistudio.png",
    alt: "Glowing blue optical fibres",
    credit: "Gstudio / Pexels",
    gradient: "from-pink-500 to-rose-800",
  },
  {
    key: "gumalo",
    pitch: "Smarter buying. Better selling. More direct access.",
    forWhom: "bahay",
    name: "GUMALO",
    category: "marketplace",
    categoryLabel: "AI-assisted marketplace",
    tagline: "An AI-capable marketplace built around buyer value.",
    description: "Plan a multi-category marketplace with transparent delivered-price comparisons, seller intelligence and direct channels for local producers.",
    status: "soon",
    url: null,
    image: pexels(5632402),
    alt: "Customer browsing an online marketplace",
    gradient: "from-orange-500 to-purple-700",
  },
  {
    key: "rektafuel",
    pitch: "Connect commercial fuel buyers more directly with suppliers.",
    forWhom: "tindahan",
    name: "REKTAFuel",
    category: "marketplace",
    categoryLabel: "Fuel sourcing marketplace",
    tagline: "Direct fuel sourcing for businesses.",
    description: "An in-development B2B fuel sourcing platform designed to connect commercial buyers with qualified suppliers, simplify quotations and make procurement more transparent, subject to applicable regulations.",
    status: "building",
    url: null,
    image: "/logos/REKTAFuel AI Energy Logo.png",
    alt: "REKTAFuel brand logo",
    gradient: "from-orange-600 to-red-800",
  },
  {
    key: "solarekta",
    pitch: "Make solar decisions clearer before money is spent.",
    forWhom: "bahay",
    name: "SOLARekta",
    category: "marketplace",
    categoryLabel: "Solar advisory marketplace",
    tagline: "AI-assisted solar advice. Human-led installation.",
    description: "Help households and small businesses assess potential solar savings, compare proposals and connect directly with qualified installers—without promising guaranteed returns.",
    status: "building",
    url: null,
    image: "/logos/solarekta.png",
    alt: "Solar panels installed on a rooftop",
    gradient: "from-lime-600 to-emerald-800",
  },
];

// The moving app showcase uses real-world photography, never brand logos.
// These are local photos included in /public/photos; replace provisional images
// for REKTAFuel and SOLARekta with licensed, category-specific photos when available.
export const MARQUEE_PHOTOS = {
  gumakart: pexels(37212313),
  kuyaeddie: pexels(7347538),
  printair: pexels(9550363),
  gumaprint: pexels(9550363),
  veyron: pexels(12935081),
  bayango: pexels(33634164),
  rekta: pexels(37441565),
  seafoodsgo: pexels(23106805),
  farmmer: pexels(36033665),
  abios: pexels(9174687),
  gumadial: pexels(7681120),
  gumaweb: pexels(17485352),
  aistudio: pexels(8640331),
  gumalo: pexels(17485352),
  rektafuel: pexels(36006125),
  solarekta: pexels(36033665),
};

export const MARQUEE_LOGOS = {
  gumaprint: "/logos/marquee-gumaprint.webp",
  veyron: "/logos/marquee-veyron.webp",
  bayango: "/logos/marquee-bayango.webp",
  rekta: "/logos/marquee-rekta.webp",
  seafoodsgo: "/logos/marquee-seafoodsgo.webp",
  farmmer: "/logos/marquee-farmmer.webp",
  abios: "/logos/marquee-abios.webp",
  gumadial: "/logos/marquee-gumadial.webp",
  gumaweb: "/logos/marquee-gumaweb.webp",
  aistudio: "/logos/marquee-aistudio.webp",
  rektafuel: "/logos/marquee-rektafuel.webp",
  solarekta: "/logos/marquee-solarekta.webp",
};

/* "Para kanino" groups used by the editorial app list on the home page. */
export const FOR_WHOM = [
  { key: "tindahan", label: "For sellers", sub: "If you sell online, at the market or from a print shop" },
  { key: "bahay", label: "For home and family", sub: "Services, food and remittances that arrive at the door" },
  { key: "kalsada", label: "On the road", sub: "The logistics that carries everything above" },
  { key: "makina", label: "Behind it all", sub: "The engine, the intelligence and Guma One’s own tools" },
];

export const appsByCategory = (key) =>
  key === "all" ? APPS : APPS.filter((a) => a.category === key);

export const searchApps = (q) => {
  const s = q.trim().toLowerCase();
  if (!s) return APPS;
  return APPS.filter((a) =>
    [a.name, a.tagline, a.description, a.categoryLabel, a.category].join(" ").toLowerCase().includes(s)
  );
};

export const liveApps = () => APPS.filter((a) => a.url);
