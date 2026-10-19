"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Search } from "lucide-react";
import { carModels } from "@/data/car-models";
import { vehiclePhotos } from "@/data/vehicle-images";

function normalizeSearch(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function CarModelCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const normalizedQuery = normalizeSearch(query.trim());
  const searchTerms = normalizedQuery.split(/\s+/).filter(Boolean);
  const filteredModels = carModels.filter((model) => {
    const searchableText = normalizeSearch(`${model.brand} ${model.name} ${model.segment}`);
    return searchTerms.every((term) => searchableText.includes(term));
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      setCanScrollPrevious(false);
      setCanScrollNext(false);
      return;
    }

    function updateControls(track: HTMLDivElement) {
      setCanScrollPrevious(track.scrollLeft > 1);
      setCanScrollNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
    }

    track.scrollLeft = 0;
    const handleScrollOrResize = () => updateControls(track);
    handleScrollOrResize();
    track.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      track.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [normalizedQuery, filteredModels.length]);

  function scrollByCard(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * track.clientWidth * 0.82, behavior: reducedMotion ? "auto" : "smooth" });
  }

  return (
    <section className="car-models" aria-labelledby="car-models-title" aria-roledescription="carousel">
      <div className="car-models__heading-row">
        <div>
          <p className="eyebrow">50 POPULAR MODELS</p>
          <h3 id="car-models-title">Browse all car models.</h3>
          <p className="car-models__description">Search popular models from across India and ask about one for your trip.</p>
        </div>
      </div>

      <div className="car-models__toolbar">
        <label className="car-models__search">
          <Search size={17} aria-hidden="true" />
          <span className="sr-only">Search by car model, brand, or type</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by model, brand, or type"
            autoComplete="off"
          />
        </label>
        <div className="car-models__toolbar-end">
          <p className="car-models__result-count" aria-live="polite">Showing {filteredModels.length} of {carModels.length} models</p>
          <div className="car-models__controls" role="group" aria-label="Carousel controls">
            <button type="button" aria-label="Previous car models" onClick={() => scrollByCard(-1)} disabled={!canScrollPrevious}>
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button type="button" aria-label="Next car models" onClick={() => scrollByCard(1)} disabled={!canScrollNext}>
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {filteredModels.length > 0 ? (
        <div
          className="car-models__track"
          ref={trackRef}
          tabIndex={0}
          aria-label={`${filteredModels.length} matching car models`}
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              scrollByCard(-1);
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              scrollByCard(1);
            }
          }}
        >
          {filteredModels.map((model, index) => {
            const photoKey = model.segment === "SUV" ? "suv" : model.segment === "MPV" ? "ertiga-innova" : "sedan";
            const photo = vehiclePhotos[photoKey];

            return (
              <article className="car-model-card" key={model.slug} role="group" aria-roledescription="slide" aria-label={`${model.brand} ${model.name}, ${index + 1} of ${filteredModels.length}`}>
                <figure className="car-model-card__visual">
                  <Image
                    src={photo.src}
                    alt="Illustrative stock photo; the exact vehicle and model may differ"
                    fill
                    sizes="(max-width: 580px) 84vw, 340px"
                  />
                  <figcaption>Illustrative vehicle photo</figcaption>
                </figure>
                <div className="car-model-card__body">
                  <p className="car-model-card__meta"><span>{model.brand}</span><span aria-hidden="true">·</span>{model.segment}</p>
                  <h4>{model.name}</h4>
                  <Link className="text-link" href={`/contact?model=${model.slug}#enquiry`}>
                    Ask about {model.name} <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <p className="car-models__empty">No models match “{query.trim()}”. Try a different name or brand.</p>
      )}

      <p className="car-models__note">These are popular models sold in India, not a confirmed list of rental vehicles. Model availability is confirmed by quote; photos are illustrative.</p>
    </section>
  );
}
