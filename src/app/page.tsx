import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Mail, MapPin, MoveUpRight } from "lucide-react";
import { HeroArt } from "@/components/hero-art";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CarModelCarousel } from "@/components/car-model-carousel";
import { VehicleCard } from "@/components/vehicle-card";
import { AboutContactSection } from "@/components/about-contact-section";
import { sampleContactEmail, siteConfig } from "@/config/site";
import { services, vehicleCategories } from "@/data/site-content";

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><span className="eyebrow__line" /> CAR RENTALS · {siteConfig.area.toUpperCase()}</p>
            <h1>Make the miles<br />feel <span>like yours.</span></h1>
            <p className="hero-copy__description">Explore car rental categories from Indore. Share your route and travel date to request a quote that fits your journey.</p>
            <div className="hero-actions">
              <Link className="button button--primary" href="/contact#enquiry">Request a quote <ArrowUpRight size={17} aria-hidden="true" /></Link>
              <Link className="button button--text" href="/cars">Explore vehicles <ArrowRight size={17} aria-hidden="true" /></Link>
            </div>
            <div className="hero-meta">
              <MapPin size={16} aria-hidden="true" />
              <span>Based around {siteConfig.area}</span>
            </div>
          </div>
          <HeroArt />
        </div>
        <div className="hero-bottom container">
          <span className="hero-bottom__label">FIND A VEHICLE CATEGORY</span>
          <div className="hero-bottom__categories">
            {vehicleCategories.map((vehicle) => (
              <Link href={`/cars/${vehicle.slug}`} key={vehicle.slug}>
                {vehicle.name}<MoveUpRight size={14} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--vehicles" id="vehicles">
        <div className="container">
          <div className="section-heading-row" data-reveal>
            <SectionHeading
              eyebrow="THE FLEET CATEGORIES"
              title="Choose your kind of ride."
              description="Start with a vehicle category. Specific vehicle details and availability can be confirmed when you request a quote."
            />
            <Link className="text-link section-heading-row__link" href="/cars">Browse categories <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="vehicle-grid">
            {vehicleCategories.map((vehicle) => <VehicleCard key={vehicle.slug} vehicle={vehicle} />)}
          </div>
          <CarModelCarousel />
        </div>
      </section>

      <section className="section section--split">
        <div className="container split-panel" data-reveal>
          <div className="split-panel__intro">
            <p className="eyebrow eyebrow--light">MADE FOR YOUR ROUTE</p>
            <h2>One starting point.<br /><span>Many ways to travel.</span></h2>
            <p>From a local trip to a longer journey, tell us where you’re headed and which vehicle category you prefer. Pricing is shared by quote.</p>
            <Link className="button button--light" href="/pricing">How pricing works <ArrowUpRight size={16} aria-hidden="true" /></Link>
            <div className="split-panel__marker" aria-label="Service destinations">
              <span className="split-panel__marker-places">
                <span><MapPin size={15} aria-hidden="true" />INDORE</span>
                <span><MapPin size={15} aria-hidden="true" />MAHAKALESHWAR</span>
                <span><MapPin size={15} aria-hidden="true" />SAWARIYA SETH</span>
                <span><MapPin size={15} aria-hidden="true" />OMKARESHWAR</span>
                <span><MapPin size={15} aria-hidden="true" />UDAIPUR</span>
                <span><MapPin size={15} aria-hidden="true" />KHATU SHYAM</span>
              </span>
            </div>
          </div>
          <div className="split-panel__services">
            <div className="split-panel__services-heading">
              <span>TRIP OPTIONS</span>
              <Link href="/services" aria-label="View all services"><ArrowUpRight size={18} /></Link>
            </div>
            {services.map((service) => (
              <Link className="split-service" href="/services" key={service.slug}>
                <span>{service.name}</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--services">
        <div className="container">
          <div className="section-heading-row" data-reveal>
            <SectionHeading
              eyebrow="TRAVEL, YOUR WAY"
              title="The trip starts with a plan."
              description="Choose the kind of journey you have in mind, then share the details to request a quote."
            />
            <Link className="text-link section-heading-row__link" href="/services">All trip options <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="service-grid">
            {services.slice(0, 3).map((service, index) => <ServiceCard key={service.slug} service={service} index={index} showImage />)}
          </div>
        </div>
      </section>

      <section className="quote-banner-section">
        <div className="container">
          <div className="quote-banner" data-reveal>
            <div className="quote-banner__ornament" aria-hidden="true"><span /><span /><span /></div>
            <div>
              <p className="eyebrow eyebrow--light">A GOOD TRIP BEGINS HERE</p>
              <h2>Have a route in mind?</h2>
              <p>Tell us your pickup, destination, date, and preferred category to prepare an enquiry summary.</p>
            </div>
            <Link className="button button--amber" href="/contact#enquiry">Plan your enquiry <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <a className="quote-banner__email" href={`mailto:${sampleContactEmail}`}><Mail size={15} aria-hidden="true" /> {sampleContactEmail}</a>
            <span className="quote-banner__note"><Check size={14} aria-hidden="true" /> Pricing is shared by quote</span>
          </div>
        </div>
      </section>

      <AboutContactSection />
    </>
  );
}
