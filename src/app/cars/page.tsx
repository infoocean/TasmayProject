import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { VehicleCard } from "@/components/vehicle-card";
import { vehicleCategories } from "@/data/site-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Car Categories in Indore",
  description: "Explore Sedan, SUV, and Ertiga / Innova categories from Tasmay Car Rentals and request a quote for your route.",
  path: "/cars",
});

export default function CarsPage() {
  return (
    <>
      <PageIntro eyebrow="OUR CARS" title="Find the category for your journey." description="Explore the vehicle categories currently listed by Tasmay Car Rentals. Exact vehicles, specifications, and availability can be confirmed with a quote." />
      <section className="section page-section">
        <div className="container">
          <div className="vehicle-grid">
            {vehicleCategories.map((vehicle) => <VehicleCard key={vehicle.slug} vehicle={vehicle} />)}
          </div>
          <div className="notice-card" data-reveal><p>Photos are representative only. Confirm the exact vehicle and availability when requesting a quote.</p><Link className="text-link" href="/contact#enquiry">Request a quote <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>
    </>
  );
}
