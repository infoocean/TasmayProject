# Cursor Agent Prompt: Tasmay Car Rentals

Paste the prompt below into Cursor Agent with this repository open. Treat the attached project brief and visual reference as design context; implement the website in this repository.

---

## Role and objective

Act as a senior product designer and full-stack Next.js/TypeScript engineer. Build a polished, responsive, accessible, SEO-ready website for **Tasmay Car Rentals**. The primary goal is to help visitors understand the available vehicle categories and request a rental quote.

Implement the working application, not just a plan or homepage mockup. First inspect the repository, then summarize its current state and implementation approach before making changes. Preserve useful existing code and dependencies. If the repository is empty, scaffold a clean application using the stack below.

## Client facts and strict placeholder policy

Use these supplied details:

- Business name: `Tasmay Car Rentals`
- Service area in the supplied brief: `Indore, Madhya Pradesh, India`
- Vehicle categories: `Sedan`, `SUV`, `Ertiga / Innova`
- Pricing: `Request a Quote`
- Phone/WhatsApp number: **not supplied**
- Google Business/reviews URL: **not supplied**
- Social profile URLs: **not supplied**
- Production domain: **not supplied**

Never invent a phone number, WhatsApp number, email, address, business hours, domain, review link, social URL, rating, review count, testimonial, fleet count, vehicle capacity, vehicle specification, rate, discount, guarantee, company history, or other factual claim. Do not publish demo data as real business information.

Centralize missing values in a typed configuration module, for example `src/config/site.ts`. Represent unavailable values as `null` or empty values with clear `TODO: client to supply` comments. Do not use realistic-looking fake values. Do not create links from placeholders. Hide or render a non-interactive unavailable state for call, WhatsApp, social, map, and reviews actions until their real values are configured. Keep placeholders obvious to developers, while ensuring customers are not shown fake contact details or fabricated trust information.

The supplied brief describes Indore service and mentions local taxi, outstation taxi, airport transfers, corporate travel, and wedding/events. Treat these as proposed site content from the brief, and keep service data easy to edit. Do not add a service, destination, or operational claim that is not in the brief or confirmed by the client. If uncertain whether a detail is confirmed, leave it configurable and mark it for client verification.

## Design direction

Use the supplied visual reference as mood and brand direction, not as a layout to copy:

- Premium, calm automotive identity with a simple car/road motif and strong wordmark.
- Deep navy `#0F172A`, slate navy `#1E293B`, amber `#F59E0B`, white `#FFFFFF`, pale background `#F8FAFC`, and green only for a configured WhatsApp action.
- Use a modern sans-serif pairing such as Manrope or Plus Jakarta Sans for headings and Inter for body text.
- Strong contrast, restrained amber accents, generous but purposeful spacing, subtle borders/shadows, responsive car photography, and clear booking actions.
- Mobile-first, with a compact accessible navigation menu and touch-friendly controls.
- Create an original SVG logo only if no supplied logo asset exists. Do not copy a logo from reference websites. If no real fleet photographs are supplied, use clearly illustrative, properly licensed local assets or a neutral designed placeholder; never imply stock photos depict the client’s actual vehicles.
- Do not hotlink reference-site images or copy their code, branding, or exact layouts.
- Respect reduced-motion preferences. Avoid excessive animation, popups, horizontal overflow, emoji icons, and dead buttons.

## Technical approach

- Next.js App Router, TypeScript with strict mode, and Tailwind CSS, using compatible versions appropriate to the existing project.
- Prefer Server Components; use Client Components only for interactive navigation, forms, filters, or similar behavior.
- Use `next/image`, `next/font`, Lucide icons, semantic HTML, and accessible labels/focus states.
- Use typed data/configuration modules for vehicles, services, pricing, testimonials (empty until supplied), and contact/social details.
- Avoid adding a database, admin dashboard, payment system, availability engine, or unnecessary third-party services.
- Keep dependencies minimal and preserve the repository’s existing package manager and conventions.

## Pages and shared components

Implement a coherent set of working routes, using shared layouts and typed content rather than duplicated page code:

- `/` — homepage
- `/about` — editable company overview without invented company history
- `/cars` — the supplied vehicle categories
- `/cars/[slug]` — detail pages only for vehicle entries with confirmed details; otherwise keep the category information general and omit invented specifications
- `/pricing` — explain that customers should request a quote; show no fabricated amount or terms
- `/services` — services listed in the supplied brief, kept editable and subject to client verification
- `/contact` — enquiry form and honest contact-channel availability
- `/privacy-policy` and `/terms-and-conditions` — clear editable draft content, with no fabricated legal entity/contact details
- A custom not-found page

Only add individual destination or service landing pages when they can contain useful, accurate content from the supplied brief. Do not create thin SEO pages filled with guessed route distances, travel times, package rates, or unsupported claims.

### Homepage

Build a distinctive homepage with:

1. Header with original brand mark/wordmark, navigation, and configured contact actions only.
2. Hero heading such as **“Car Rentals in Indore”**, concise supporting copy about requesting a quote, and primary `Explore Cars` / `Request a Quote` actions. Do not promise availability or outcomes.
3. A compact vehicle-category preview for Sedan, SUV, and Ertiga / Innova. Do not invent makes, models, seating, luggage, transmission, fuel, or rates.
4. A service overview based on the supplied brief, with wording kept factual and editable.
5. A clear quote/enquiry section and a footer with only configured links.

Avoid unverified trust badges, star ratings, customer counts, experience claims, guarantees, or fabricated testimonials. If no authentic reviews are configured, omit the review block or use a neutral note that verified review details have not been provided; never simulate reviews.

### Quote and contact behavior

Provide an accessible enquiry form that can collect a visitor’s name, phone, pickup, destination, date, preferred supplied vehicle category, trip type, and optional message. Validate input and show clear field-level errors.

No phone number, WhatsApp number, email, or form backend has been supplied. Therefore:

- Do not create a fake `tel:`, `wa.me`, `mailto:`, form API, or success state that says an enquiry was sent.
- Keep the enquiry UI useful: validate and present a reviewable enquiry summary, and explain that a contact channel must be configured before submission can be delivered.
- If a real channel is later added to configuration, enable the matching action. Build WhatsApp URLs with `encodeURIComponent` and a number normalized for the `wa.me` path; use proper `tel:` and `mailto:` links for configured phone/email values.
- Clearly distinguish local form validation from successful delivery.

## SEO, accessibility, and performance

- Add unique page titles/descriptions, Open Graph metadata, semantic headings, descriptive alt text, internal links, `robots.ts`, and `sitemap.ts` where appropriate.
- Keep the production origin unset until the client supplies a domain. Do not invent a canonical production URL. Make metadata base/canonical generation conditional on a configured production URL.
- Use accurate structured data only when supported by configured facts. Never include fake ratings, reviews, prices, address, opening hours, or availability.
- Use static rendering for stable content where practical, optimize images and fonts, avoid unnecessary client JavaScript, and prevent layout shifts.
- Ensure keyboard navigation, visible focus states, labelled controls, sufficient contrast, reduced-motion support, and responsive layouts from small mobile screens through desktop.

## Implementation workflow and completion

1. Inspect the repository, package manager, existing routes, dependencies, and any project instructions.
2. Summarize the repository state and the concrete implementation plan.
3. Build the design system, configuration/data model, shared layout, header, and footer.
4. Implement the routes and enquiry experience above.
5. Add metadata, sitemap/robots, responsive behavior, and honest empty/unconfigured states.
6. Run the relevant type, lint, and production-build checks available in the project; fix implementation errors.
7. Report what was implemented, the checks run, and every client value still needed before launch.

Do not stop at a proposal. Make the application changes in the open repository and leave unknown client details as explicit configuration placeholders.

---

## Client configuration checklist

Before launch, request the real phone and WhatsApp number, Google Business/reviews URL, social profiles, production domain, and any missing vehicle photos/specifications, service confirmation, contact details, business hours, and approved legal copy. Keep pricing as **Request a Quote** until actual pricing terms are supplied.
