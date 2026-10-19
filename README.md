# Tasmay Car Rentals

A Next.js website for exploring vehicle categories and preparing a rental quote enquiry. Inter and Manrope are bundled locally and optimized with `next/font/local`.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser. Use `npm run typecheck`, `npm run lint`, and `npm run build` for the project checks. The production build uses Next.js’s Webpack backend; the development server uses the default Next.js development bundler.

## Client configuration

Edit `src/config/site.ts` to add verified business details. The production domain can be set with `NEXT_PUBLIC_SITE_URL` after the client supplies it. Keep that value empty until then; canonical metadata and the sitemap are intentionally omitted without a configured domain.

Phone, WhatsApp, email, address, business hours, Google Business/reviews URLs, and social profiles are unset. The website omits actions that depend on those values. Add only real client-supplied details.

Vehicle categories and proposed service types are in `src/data/site-content.ts`. The service types need client confirmation before launch. No specific vehicle specifications, rates, testimonials, or review data are included.

## Vehicle imagery

The hero and category cards use representative stock photos stored in `public/images`. Image source pages are listed in `src/data/vehicle-images.ts`; replace these with client-approved fleet photography when available. The photos do not verify Tasmay's current vehicles or availability. See the [Unsplash License](https://unsplash.com/license) for usage terms.

## Enquiry form behavior

The contact form validates in the browser and produces a copyable enquiry summary. It does not send or save form data. There is no message delivery endpoint or configured contact channel, so the interface explicitly tells visitors that the summary has not been sent. Configure a real delivery method before describing the form as a submitted enquiry.

The privacy and terms pages are marked as drafts and need client/legal review before publication.
