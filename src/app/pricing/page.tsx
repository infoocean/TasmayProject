import Link from "next/link";
import { ArrowUpRight, CircleHelp, Mail } from "lucide-react";
import { PricingCategoryTabs } from "@/components/pricing-category-tabs";
import { CarModelCarousel } from "@/components/car-model-carousel";
import { sampleContactEmail, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Rental Pricing | Request a Quote",
  description: `${siteConfig.name} pricing is available by quote. Share your route, travel date, and preferred vehicle category to prepare an enquiry.`,
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <section className="section page-section pricing-explorer-section">
        <div className="container">
          <PricingCategoryTabs />
          <CarModelCarousel className="car-models--pricing-page" showPrice mobilePages />
        </div>
      </section>
      <section className="section page-section pricing-details-section">
        <div className="container">
          <div className="pricing-layout">
            <div className="pricing-card">
              <span className="pricing-card__label">CURRENT PRICING</span>
              <h2>Request a<br /><span>Quote</span></h2>
              <p>No rates have been supplied for publication. Ask for a quote with your trip details.</p>
              <Link className="button button--primary" href="/contact#enquiry">Prepare an enquiry <ArrowUpRight size={17} /></Link>
              <span className="pricing-card__footnote">Send your enquiry through WhatsApp after reviewing it.</span>
              <a className="pricing-email-link" href={`mailto:${sampleContactEmail}`}><Mail size={16} /><span><small>Email us</small><strong>{sampleContactEmail}</strong></span></a>
            </div>
            <div className="pricing-info">
              <p className="eyebrow">HOW TO REQUEST PRICING</p>
              <h2>Tell us about your journey.</h2>
              <p>Include the information needed to describe the trip. Rates, inclusions, availability, and applicable terms must be confirmed by {siteConfig.name} before you make a booking decision.</p>
              <div className="pricing-info__items">
                <div><p><strong>Your route</strong><small>Pickup location and destination</small></p></div>
                <div><p><strong>Your travel date</strong><small>The date you plan to travel</small></p></div>
                <div><p><strong>Your vehicle category</strong><small>Sedan, SUV, or Ertiga / Innova</small></p></div>
              </div>
              <div className="info-note"><CircleHelp size={18} /><p>Minimum distance, driver allowance, tolls, parking, and other trip terms have not been provided. Confirm any applicable charges with the business.</p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
