import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plane, BriefcaseBusiness, Map, CarFront, Sparkles } from "lucide-react";
import type { Service } from "@/data/site-content";
import { heroPhoto, vehiclePhotos, type VehiclePhoto } from "@/data/vehicle-images";

const serviceIcons = [CarFront, Map, Plane, BriefcaseBusiness, Sparkles];
const servicePhotos: Record<string, VehiclePhoto> = {
  "local-taxi": vehiclePhotos.sedan,
  "outstation-taxi": heroPhoto,
  "airport-transfers": vehiclePhotos["ertiga-innova"],
  "corporate-travel": vehiclePhotos.sedan,
  "wedding-events": vehiclePhotos.suv,
};

export function ServiceCard({ service, index = 0, showImage = false }: { service: Service; index?: number; showImage?: boolean }) {
  const Icon = serviceIcons[index % serviceIcons.length];
  const photo = servicePhotos[service.slug] ?? heroPhoto;
  return (
    <article className="service-card" data-reveal>
      {showImage && (
        <figure className="service-card__visual">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 580px) 100vw, (max-width: 820px) 50vw, 33vw"
            className="service-card__photo"
          />
          <figcaption>Representative stock photo</figcaption>
        </figure>
      )}
      <div className="service-card__topline">
        <span className="service-card__icon"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></span>
      </div>
      <h3>{service.name}</h3>
      <p>{service.summary}</p>
      <Link className="text-link" href={`/contact?service=${encodeURIComponent(service.slug)}#enquiry`}>
        Prepare this enquiry <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
