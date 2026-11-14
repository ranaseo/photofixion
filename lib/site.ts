// Single source of truth for brand facts.
export const site = {
  name: "Photo Fixion",
  legalName: "Photo Fixion",
  url: "https://www.photofixion.com",
  tagline: "A Home of Speed, Skill & Savings",
  description:
    "Photo Fixion is a professional photo editing service for e-commerce brands, photographers and agencies: clipping path, background removal, retouching, ghost mannequin and colour correction, delivered in 24 hours.",
  email: "photofixionbd@gmail.com",
  phone: "+8801718895943",
  phoneDisplay: "+880 1718-895943",
  whatsappUrl: "https://wa.me/8801718895943",
  foundedYears: 10,
  teamSize: "50+",
  turnaround: { standard: "24 hours", fast: "12 hours", rush: "6 hours" },
  /** Date the site content was last changed (YYYY-MM-DD). Update it when you edit copy: it feeds sitemap lastmod and schema dateModified. */
  lastUpdated: "2026-11-13",
  social: [] as string[], // add full profile URLs: they feed the Organization schema (sameAs)
};

export const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#turnaround", label: "Turnaround" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
