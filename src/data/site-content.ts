export type VehicleCategory = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  details: string;
};

export const vehicleCategories: VehicleCategory[] = [
  {
    slug: "sedan",
    name: "Sedan",
    shortName: "Sedan",
    description: "A Sedan category is available to enquire about for your trip.",
    details:
      "Share your route and travel date to request a quote for the Sedan category. Vehicle specifications and availability can be confirmed with your quote.",
  },
  {
    slug: "suv",
    name: "SUV",
    shortName: "SUV",
    description: "Ask about the SUV category and request a quote for your route.",
    details:
      "Tell us where and when you plan to travel to request a quote for the SUV category. Specific vehicle details can be confirmed with your quote.",
  },
  {
    slug: "ertiga-innova",
    name: "Ertiga / Innova",
    shortName: "Ertiga / Innova",
    description: "Ertiga / Innova category enquiries are welcome.",
    details:
      "Share your route, date, and travel requirements to request a quote for the Ertiga / Innova category. Exact vehicle and availability details are not yet listed.",
  },
];

export type PricingData = {
  model: "quote";
  displayLabel: "Request a Quote";
  rates: null;
};

export const pricingData: PricingData = {
  model: "quote",
  displayLabel: "Request a Quote",
  rates: null,
};

export type Testimonial = {
  name: string;
  quote: string;
  approved: boolean;
};

// No authentic, client-approved testimonials have been supplied.
export const testimonials: Testimonial[] = [];

export type Service = {
  slug: string;
  name: string;
  summary: string;
  confirmationRequired: boolean;
};

// These service types appear in the supplied project brief and need client confirmation.
export const services: Service[] = [
  {
    slug: "local-taxi",
    name: "Local Taxi",
    summary: "Share your pickup and destination in Indore to request a local travel quote.",
    confirmationRequired: true,
  },
  {
    slug: "outstation-taxi",
    name: "Outstation Taxi",
    summary: "Share your route and dates to request an outstation travel quote.",
    confirmationRequired: true,
  },
  {
    slug: "airport-transfers",
    name: "Airport Transfers",
    summary: "Send your pickup and travel details to enquire about an airport transfer.",
    confirmationRequired: true,
  },
  {
    slug: "corporate-travel",
    name: "Corporate Travel",
    summary: "Share your requirements to enquire about a corporate travel quote.",
    confirmationRequired: true,
  },
  {
    slug: "wedding-events",
    name: "Wedding & Events",
    summary: "Share your schedule and route to enquire about event transportation.",
    confirmationRequired: true,
  },
];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our cars", href: "/cars" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
];

export const publicPaths = [
  "/",
  "/about",
  "/cars",
  "/pricing",
  "/services",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
];
