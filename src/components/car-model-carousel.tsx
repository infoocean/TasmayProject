"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Search } from "lucide-react";
import { carModels } from "@/data/car-models";
import { vehiclePhotos } from "@/data/vehicle-images";
import carModelImages from "@/data/car-model-images.json";

type ModelPhoto = {
  src: string;
  alt: string;
  title: string;
  sourceUrl: string;
  artist: string;
  license: string;
  licenseUrl: string;
};

function normalizeSearch(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function CarModelCarousel({ className = "", showPrice = false, mobilePages = false }: { className?: string; showPrice?: boolean; mobilePages?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const normalizedQuery = normalizeSearch(query.trim());
  const searchTerms = normalizedQuery.split(/\s+/).filter(Boolean);
  const filteredModels = carModels.filter((model) => {
    const searchableText = normalizeSearch(`${model.brand} ${model.name} ${model.segment}`);
    return searchTerms.every((term) => searchableText.includes(term));
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function updateControls() {
      const currentTrack = trackRef.current;
      if (!currentTrack) return;
      setCanScrollPrevious(currentTrack.scrollLeft > 1);
      setCanScrollNext(currentTrack.scrollLeft + currentTrack.clientWidth < currentTrack.scrollWidth - 1);
    }

    track.scrollLeft = 0;
    updateControls();
    track.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      track.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, [normalizedQuery, filteredModels.length]);

  useEffect(() => {
    if (isInteracting || normalizedQuery || filteredModels.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 580px)").matches) return;

    const interval = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
      const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
      const firstCard = track.querySelector(".car-model-card");
      const useMobilePages = mobilePages && window.matchMedia("(max-width: 580px)").matches;
      const nextLeft = atEnd
        ? 0
        : track.scrollLeft + (useMobilePages ? track.clientWidth : firstCard instanceof HTMLElement ? firstCard.offsetWidth + gap : track.clientWidth * 0.8);
      track.scrollTo({ left: nextLeft, behavior: "smooth" });
    }, 4000);

    return () => window.clearInterval(interval);
  }, [filteredModels.length, isInteracting, normalizedQuery, mobilePages]);

  function scrollByCard(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector(".car-model-card");
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const useMobilePages = mobilePages && window.matchMedia("(max-width: 580px)").matches;
    const step = useMobilePages ? track.clientWidth : firstCard instanceof HTMLElement ? firstCard.offsetWidth + gap : track.clientWidth * 0.8;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nextLeft = Math.max(0, Math.min(track.scrollLeft + direction * step, track.scrollWidth - track.clientWidth));
    track.scrollTo({ left: nextLeft, behavior: reducedMotion ? "auto" : "smooth" });
  }

  return (
    <section className={`car-models ${className}`.trim()} aria-labelledby="car-models-title" aria-roledescription="carousel">
      <div className="car-models__heading-row">
        <div>
          <p className="eyebrow">50 POPULAR MODELS</p>
          <h3 id="car-models-title">Browse all car models.</h3>
          <p className="car-models__description">{showPrice ? "Browse popular models with sample per-kilometre prices. Confirm your final rate when requesting a quote." : "Search popular models from across India and ask about one for your trip."}</p>
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
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onFocusCapture={() => setIsInteracting(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsInteracting(false);
          }}
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
            const photo = (carModelImages as Record<string, ModelPhoto>)[model.slug];
            const fallbackPhoto = vehiclePhotos[photoKey];
            const sampleRates = [10, 15, 20, 25, 30];
            const originalModelIndex = carModels.findIndex((carModel) => carModel.slug === model.slug);
            const sampleRate = sampleRates[originalModelIndex % sampleRates.length];

            return (
              <article className="car-model-card" key={model.slug} role="group" aria-roledescription="slide" aria-label={`${model.brand} ${model.name}, ${index + 1} of ${filteredModels.length}`}>
                <figure className="car-model-card__visual">
                  <Image
                    src={photo?.src ?? fallbackPhoto.src}
                    alt={photo?.alt ?? fallbackPhoto.alt}
                    fill
                    sizes="(max-width: 580px) 100vw, (max-width: 820px) 50vw, 340px"
                  />
                </figure>
                <div className="car-model-card__body">
                  <p className="car-model-card__meta"><span>{model.brand}</span><span aria-hidden="true">·</span>{model.segment}</p>
                  <h4>{model.name}</h4>
                  {showPrice && <p className="car-model-card__price"><span>Sample rate</span><strong>₹{sampleRate}<small> / km</small></strong></p>}
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

    </section>
  );
}
