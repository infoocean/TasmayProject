import Image from "next/image";
import { heroPhoto } from "@/data/vehicle-images";

export function HeroArt() {
  return (
    <div className="hero-art" data-reveal>
      <Image
        src={heroPhoto.src}
        alt={heroPhoto.alt}
        fill
        priority
        sizes="(max-width: 900px) 100vw, 54vw"
        className="hero-art__image"
      />
      <div className="hero-art__label">
        <span className="hero-art__label-dot" />
        <span>REPRESENTATIVE TRAVEL PHOTO</span>
      </div>
      <div className="hero-art__caption">
        <span className="hero-art__caption-kicker">A ride that starts with a conversation</span>
        <span className="hero-art__caption-title">Your route. Your choice.</span>
      </div>
    </div>
  );
}
