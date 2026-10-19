export const siteConfig = {
  name: "Tasmay Car Rentals",
  area: "Indore, Madhya Pradesh, India",
  // TODO: Client to supply the production domain before launch.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim() || null,
  // TODO: Client to supply verified business contact details.
  phone: null as string | null,
  whatsappNumber: null as string | null,
  email: null as string | null,
  address: null as string | null,
  businessHours: null as string | null,
  // TODO: Client to supply the verified Google Business Profile and review URLs.
  googleBusinessUrl: null as string | null,
  googleReviewsUrl: null as string | null,
  // TODO: Client to supply real profile URLs. Empty values are intentionally omitted.
  socials: {
    instagram: null as string | null,
    facebook: null as string | null,
    youtube: null as string | null,
    linkedin: null as string | null,
  },
  pricingLabel: "Request a Quote",
} as const;

export type SiteConfig = typeof siteConfig;
