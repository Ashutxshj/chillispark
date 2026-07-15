export const PHONE = "+918796652983";
export const PHONE_DISPLAY = "+91 87966 52983";
export const WHATSAPP_URL = "https://wa.me/918796652983";
export const EMAIL = "info.chillispark@gmail.com";
export const SITE_URL = "https://chillispark.in";

export const services = [
  {
    num: "01",
    title: "Business Websites",
    desc: "Modern, responsive websites that make local businesses look established and trustworthy from the very first click.",
  },
  {
    num: "02",
    title: "Landing Pages",
    desc: "High-converting pages built for ad campaigns and lead generation, where every element earns its place.",
  },
  {
    num: "03",
    title: "Website Redesign",
    desc: "Turn an outdated, slow site into a fast, modern experience that actually brings in customers.",
  },
  {
    num: "04",
    title: "E-commerce Websites",
    desc: "Clean online stores with easy product management and a checkout your customers trust.",
  },
  {
    num: "05",
    title: "Website Maintenance",
    desc: "Ongoing updates, backups, security and support so your site stays fast, safe and current.",
  },
  {
    num: "06",
    title: "SEO Foundation",
    desc: "On-page SEO built into every project so the right customers find you on Google.",
  },
];

export const why = [
  {
    title: "Modern Design",
    desc: "Clean, premium layouts that make you look more professional than the competition.",
  },
  {
    title: "Mobile Friendly",
    desc: "Perfect on every phone, where most of your customers actually find you.",
  },
  {
    title: "Fast Performance",
    desc: "Pages that load in seconds, so visitors stay and convert instead of bouncing.",
  },
  {
    title: "SEO Ready",
    desc: "Built to be found on Google from day one, no extra add-ons required.",
  },
  {
    title: "Affordable",
    desc: "Premium results at prices that make sense for a growing local business.",
  },
  {
    title: "Ongoing Support",
    desc: "We stick around with updates, tweaks and help whenever you need it.",
  },
];

export const industries = [
  "Dentists",
  "Medical Clinics",
  "Restaurants",
  "Cafés",
  "Salons",
  "Gyms",
  "Law Firms",
  "Real Estate",
  "Coaching",
  "Consultants",
  "Local Shops",
  "Manufacturers",
];

export type PortfolioItem = {
  slug: string;
  type: string;
  name: string;
  domain: string;
  result: string;
  image: string;
  shots: { src: string; label: string }[];
};

export const portfolio: PortfolioItem[] = [
  {
    slug: "ekosight",
    type: "AgriTech Platform",
    name: "Ekosight",
    domain: "ekosight.com",
    result:
      "Farmer-first agritech platform with crop guidance, soil nutrients and an online shop, built to make farming easy and profitable.",
    image: "/work/ekosight-hero.png",
    shots: [
      { src: "/work/ekosight-harvest.png", label: "Outcome-led messaging" },
      { src: "/work/ekosight-services.png", label: "Farming guidance cards" },
      {
        src: "/work/ekosight-testimonials.png",
        label: "Crop nutrients & farmer testimonials",
      },
      { src: "/work/ekosight-trust.png", label: "Institutional trust & partners" },
    ],
  },
  {
    slug: "aurakeebs",
    type: "E-commerce Store",
    name: "AuraKeebs",
    domain: "aurakeebs.com",
    result:
      "A premium mechanical-keyboard store with an interactive switch-acoustics tester, live customizer and a filterable catalogue that makes enthusiast hardware effortless to browse and buy.",
    image: "/work/aurakeebs-hero.png",
    shots: [
      { src: "/work/aurakeebs-catalog.png", label: "Filterable product catalogue" },
      { src: "/work/aurakeebs-products.png", label: "Keycaps & switches grid" },
    ],
  },
  {
    slug: "coverle",
    type: "SaaS Web App",
    name: "CoverLe",
    domain: "coverle.app",
    result:
      "A free student tool that turns academic formatting into a thirty-second task, fill a form, preview live and export watermark-free PDFs for assignments, resumes, certificates and theses.",
    image: "/work/coverle-hero.png",
    shots: [
      { src: "/work/coverle-tools.png", label: "Every document tool in one grid" },
      { src: "/work/coverle-features.png", label: "Why students choose it" },
      { src: "/work/coverle-faq.png", label: "FAQ & footer" },
    ],
  },
  {
    slug: "kinetic",
    type: "E-commerce Store",
    name: "Kinetic",
    domain: "kinetic.store",
    result:
      "A bold, motion-driven sneaker and streetwear store with cinematic product storytelling, shop-by-category browsing and a fast, conversion-focused new-arrivals flow.",
    image: "/work/kinetic-hero.png",
    shots: [
      { src: "/work/kinetic-arrivals.png", label: "Fresh-off-the-line arrivals" },
      { src: "/work/kinetic-categories.png", label: "Shop-by-category tiles" },
      { src: "/work/kinetic-bestsellers.png", label: "Bestseller product cards" },
    ],
  },
  {
    slug: "muskara",
    type: "Luxury E-commerce",
    name: "Muskara",
    domain: "muskara.in",
    result:
      "A niche Indian perfumery with a five-question scent finder, mood-based shopping and a transparent sourcing ledger showing batch codes, harvest dates and origins for every fragrance.",
    image: "/work/muskara-hero.png",
    shots: [
      { src: "/work/muskara-sourcing.png", label: "Transparent sourcing ledger" },
      { src: "/work/muskara-feature.png", label: "Featured fragrance & founder note" },
      { src: "/work/muskara-arrivals.png", label: "New arrivals collection" },
    ],
  },
];

export const faqs = [
  {
    q: "How long does a website take?",
    a: "Most local-business websites go live in about a month, depending on how many pages you need and how quickly we get your content. We agree on a clear timeline before we start.",
  },
  {
    q: "How much does it cost?",
    a: "Every project is scoped to your needs and budget. We focus on outcomes, not padding. You get a clear, fixed quote up front with no surprises.",
  },
  {
    q: "Will my website work on mobile?",
    a: "Always. Every site we build is mobile-first and tested across phones and tablets, because that is where most of your customers will find you.",
  },
  {
    q: "Can I edit my website myself?",
    a: "Yes. We build sites that are easy to manage, and we walk you through updating text, images and content so you stay in control.",
  },
  {
    q: "Do you provide ongoing maintenance?",
    a: "We do. Our maintenance plans cover updates, backups, security and support so your site stays fast and current long after launch.",
  },
];

export const stats = [
  { value: "20+", label: "Projects delivered" },
  { value: "1 month", label: "Avg. delivery time" },
  { value: "<2s", label: "Page load time" },
  { value: "5.0★", label: "Client rating" },
];

export const values = [
  {
    title: "Sell outcomes, not tech",
    desc: "More customers, more trust, never jargon.",
  },
  { title: "Results-driven", desc: "Every choice is made to convert visitors." },
  {
    title: "Honest & transparent",
    desc: "Clear pricing, clear timelines, no surprises.",
  },
  {
    title: "Long-term partners",
    desc: "We grow with you through quality and support.",
  },
];

