"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { vehicleCategories } from "@/data/site-content";
import { vehiclePhotos } from "@/data/vehicle-images";

export function PricingCategoryTabs() {
  const [activeSlug, setActiveSlug] = useState(vehicleCategories[0].slug);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleTabKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % vehicleCategories.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + vehicleCategories.length) % vehicleCategories.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = vehicleCategories.length - 1;

    if (nextIndex !== undefined) {
      event.preventDefault();
      const nextVehicle = vehicleCategories[nextIndex];
      setActiveSlug(nextVehicle.slug);
      tabRefs.current[nextIndex]?.focus();
    }
  }

  return (
    <section className="pricing-categories" aria-labelledby="pricing-categories-title">
      <div className="pricing-categories__heading">
        <div>
          <p className="eyebrow">VEHICLE CATEGORIES</p>
          <h1 id="pricing-categories-title">Choose a category to explore.</h1>
          <p className="pricing-categories__description">Select a category to view its representative photo and quote details.</p>
        </div>
        <span className="pricing-categories__quote-label">PRICING BY QUOTE</span>
      </div>

      <div className="pricing-category-tabs" role="tablist" aria-label="Vehicle categories">
        {vehicleCategories.map((vehicle, index) => (
          <button
            key={vehicle.slug}
            ref={(element) => { tabRefs.current[index] = element; }}
            className="pricing-category-tab"
            id={`pricing-tab-${vehicle.slug}`}
            type="button"
            role="tab"
            aria-selected={activeSlug === vehicle.slug}
            aria-controls={`pricing-panel-${vehicle.slug}`}
            tabIndex={activeSlug === vehicle.slug ? 0 : -1}
            onClick={() => setActiveSlug(vehicle.slug)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            <span className="pricing-category-tab__name">{vehicle.name}</span>
            <ArrowRight className="pricing-category-tab__arrow" size={17} aria-hidden="true" />
          </button>
        ))}
      </div>

      {vehicleCategories.map((vehicle) => {
        const photo = vehiclePhotos[vehicle.slug];
        const isActive = activeSlug === vehicle.slug;

        return (
          <div
            key={vehicle.slug}
            className={`pricing-category-panel${isActive ? "" : " pricing-category-panel--hidden"}`}
            id={`pricing-panel-${vehicle.slug}`}
            role="tabpanel"
            aria-labelledby={`pricing-tab-${vehicle.slug}`}
            tabIndex={0}
            hidden={!isActive}
          >
            <figure className="pricing-category-panel__visual">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 820px) 100vw, 48vw"
                className="pricing-category-panel__image"
              />
              <figcaption>Representative vehicle photo</figcaption>
            </figure>
            <div className="pricing-category-panel__content">
              <p className="pricing-category-panel__label">VEHICLE CATEGORY</p>
              <h3>{vehicle.name}</h3>
              <p className="pricing-category-panel__description">{vehicle.details}</p>
              <p className="pricing-category-panel__note">Exact vehicle variants, availability, and rates can be confirmed with a quote.</p>
              <Link className="button button--primary" href={`/contact?vehicle=${encodeURIComponent(vehicle.slug)}#enquiry`}>
                Ask about {vehicle.shortName} <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
