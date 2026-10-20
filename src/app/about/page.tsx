import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AboutContactSection } from "@/components/about-contact-section";
import { vehiclePhotos, heroPhoto } from "@/data/vehicle-images";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About Tasmay Car Rentals",
  description: "Explore Tasmay Car Rentals vehicle categories and prepare a rental quote enquiry from Indore, Madhya Pradesh.",
  path: "/about",
});

const categories = [
  {
    slug: "sedan",
    title: "Sedan",
    description: "A sedan category to consider for your trip.",
    photo: vehiclePhotos.sedan,
  },
  {
    slug: "suv",
    title: "SUV",
    description: "Explore the SUV category and include it in your enquiry.",
    photo: vehiclePhotos.suv,
  },
  {
    slug: "ertiga-innova",
    title: "Ertiga / Innova",
    description: "Ask about the Ertiga / Innova category for your journey.",
    photo: vehiclePhotos["ertiga-innova"],
  },
];

const vijayNagarMap = "https://www.openstreetmap.org/export/embed.html?bbox=75.874%2C22.735%2C75.917%2C22.767&layer=mapnik&marker=22.75115%2C75.89555";
const vijayNagarMapLink = "https://www.openstreetmap.org/?mlat=22.75115&mlon=75.89555#map=16/22.75115/75.89555";

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero__inner">
          <div className="about-hero__copy" data-reveal>
            <p className="eyebrow">ABOUT TASMAY CAR RENTAL</p>
            <h1>Your next journey starts here.</h1>
            <p className="about-hero__description">
              Find a vehicle category that suits your plans, then share your trip details with Tasmay Car Rental to request a quote from Indore.
            </p>
            <div className="about-hero__actions">
              <Link className="button button--primary" href="#categories">
                Explore vehicle categories <ArrowRight size={17} />
              </Link>
              <span className="about-hero__location"><MapPin size={16} /> {siteConfig.area}</span>
            </div>
          </div>
          <figure className="about-hero__visual" data-reveal>
            <Image
              src="/images/model-photos/hyundai-verna.jpg"
              alt="Hyundai Verna sedan, representative model photo"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 54vw"
              className="about-hero__image"
            />
            <figcaption className="about-photo-label">Explore the open road</figcaption>
            <Link className="about-hero__secondary" href="#categories" aria-label="Explore vehicle categories">
              <div className="about-hero__secondary-visual">
                <Image src={heroPhoto.src} alt={heroPhoto.alt} fill sizes="160px" />
              </div>
              <div><span>YOUR TRIP, YOUR WAY</span><strong>Find your ride</strong></div>
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </figure>
        </div>
      </section>

      <section className="section section--about">
        <div className="container about-approach">
          <figure className="about-approach__visual" data-reveal>
            <Image
              src={vehiclePhotos.suv.src}
              alt={vehiclePhotos.suv.alt}
              fill
              sizes="(max-width: 820px) 100vw, 46vw"
              className="about-approach__image"
            />
            <figcaption className="about-photo-label">Representative photo</figcaption>
          </figure>

          <div className="about-approach__content" data-reveal>
            <p className="eyebrow">THE APPROACH</p>
            <h2>The details that make a useful quote.</h2>
            <p className="about-approach__intro">
              Share where you’re travelling, when you need the car, and which category you have in mind. Tasmay Car Rentals lists service from {siteConfig.area}.
            </p>
            <div className="about-steps">
              <div className="about-step">
                <p><strong>Tell us about the trip</strong><small>Add your pickup point, destination, and travel date.</small></p>
              </div>
              <div className="about-step">
                <p><strong>Choose a category</strong><small>Pick Sedan, SUV, or Ertiga / Innova.</small></p>
              </div>
              <div className="about-step">
                <p><strong>Request a quote</strong><small>Rates and trip terms are confirmed with each quote.</small></p>
              </div>
            </div>
            <Link className="button button--primary" href="/contact#enquiry">
              Prepare an enquiry <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="about-categories" id="categories">
        <div className="container">
          <div className="about-categories__heading" data-reveal>
            <div>
              <p className="eyebrow">VEHICLE CATEGORIES</p>
              <h2>Choose a starting point for your plans.</h2>
            </div>
            <Link className="text-link" href="/cars">View all categories <ArrowUpRight size={15} /></Link>
          </div>
          <div className="about-category-grid">
            {categories.map((category) => (
              <article className="about-category-card" key={category.slug} data-reveal>
                <Link className="about-category-card__visual" href={`/cars/${category.slug}`} aria-label={`Explore ${category.title} category`}>
                  <Image
                    src={category.photo.src}
                    alt={category.photo.alt}
                    fill
                    sizes="(max-width: 580px) 100vw, (max-width: 820px) 50vw, 33vw"
                    className="about-category-card__image"
                  />
                  <span className="about-category-card__photo-note">Representative photo</span>
                </Link>
                <div className="about-category-card__body">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <Link className="text-link" href={`/cars/${category.slug}`}>Explore category <ArrowUpRight size={15} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AboutContactSection className="about-contact-section--compact" />

      <section className="about-map-section">
        <div className="container">
          <div className="about-map-section__heading" data-reveal>
            <p className="eyebrow">LOCATION</p>
            <h2>Vijay Nagar, Indore.</h2>
            <p>Explore the Vijay Nagar area on the map.</p>
          </div>
          <div className="about-map-panel" data-reveal>
            <div className="about-map__details">
              <span className="about-map__pin"><MapPin size={20} /></span>
              <p className="about-map__label">AREA REFERENCE</p>
              <h3>Vijay Nagar</h3>
              <p className="about-map__city">Indore, Madhya Pradesh</p>
              <p className="about-map__note">The map pin marks Vijay Nagar Square as a neighborhood reference point.</p>
              <a className="button button--light" href={vijayNagarMapLink} target="_blank" rel="noreferrer">
                Open map <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="about-map__embed">
              <iframe
                src={vijayNagarMap}
                title="Map centered on Vijay Nagar Square in Indore"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
