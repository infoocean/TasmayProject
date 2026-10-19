import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { VehicleCategory } from "@/data/site-content";
import { vehiclePhotos } from "@/data/vehicle-images";

export function VehicleCard({ vehicle }: { vehicle: VehicleCategory }) {
  const photo = vehiclePhotos[vehicle.slug];

  return (
    <article className="vehicle-card" data-reveal>
      <Link className="vehicle-card__visual" href={`/cars/${vehicle.slug}`} aria-label={`View ${vehicle.name} category`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 580px) 100vw, (max-width: 820px) 50vw, 33vw"
          className="vehicle-card__photo"
        />
        <span className="vehicle-card__visual-note">Representative photo</span>
      </Link>
      <div className="vehicle-card__body">
        <div>
          <p className="vehicle-card__type">VEHICLE CATEGORY</p>
          <h3>{vehicle.name}</h3>
        </div>
        <p>{vehicle.description}</p>
        <Link className="text-link" href={`/cars/${vehicle.slug}`}>
          Explore category <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
