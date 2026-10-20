import { PageIntro } from "@/components/page-intro";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/site-content";
import { createPageMetadata } from "@/lib/metadata";
import { ArrowUpRight, Info } from "lucide-react";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Car Rental Services in Indore",
  description: "Explore trip enquiry options for local taxi, outstation travel, airport transfers, corporate travel, and weddings or events with Tasmay Car Rentals in Indore.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="TRIP OPTIONS · PLAN YOUR JOURNEY" title="What kind of trip are you planning?" description="Choose a trip type to start your enquiry. Add your route, travel date, and preferred vehicle category to prepare a quote summary." />
      <section className="section page-section">
        <div className="container">
          <div className="service-grid service-grid--all">
            {services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} showImage />)}
          </div>
        </div>
      </section>
      <section className="quote-banner-section services-next">
        <div className="container">
          <div className="quote-banner" data-reveal>
            <div className="quote-banner__ornament" aria-hidden="true"><span /><span /><span /></div>
            <div>
              <p className="eyebrow eyebrow--light">READY WHEN YOU ARE</p>
              <h2>Start with a few trip details.</h2>
              <p>Choose a service card to preselect your trip type, then add your route, date, and vehicle category. The form prepares a summary in your browser; it does not send it.</p>
            </div>
            <Link className="button button--amber" href="/contact#enquiry">Open quote enquiry <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <span className="quote-banner__note"><Info size={14} aria-hidden="true" /> Your enquiry summary stays on this device</span>
          </div>
        </div>
      </section>
    </>
  );
}
