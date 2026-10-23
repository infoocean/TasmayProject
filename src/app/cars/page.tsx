import { PageIntro } from "@/components/page-intro";
import { VehicleCard } from "@/components/vehicle-card";
import { CarModelCarousel } from "@/components/car-model-carousel";
import { vehicleCategories } from "@/data/site-content";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = createPageMetadata({
  title: "Car Categories in Indore",
  description: `Explore Sedan, SUV, and Ertiga / Innova categories from ${siteConfig.name} and request a quote for your route.`,
  path: "/cars",
});

export default function CarsPage() {
  return (
    <>
      <PageIntro eyebrow="OUR CARS · FOR EVERY JOURNEY" title="Find the category for your journey." description={`Explore the vehicle categories currently listed by ${siteConfig.name}. Exact vehicles, specifications, and availability can be confirmed with a quote.`} />
      <section className="section page-section">
        <div className="container">
          <div className="vehicle-grid">
            {vehicleCategories.map((vehicle) => <VehicleCard key={vehicle.slug} vehicle={vehicle} />)}
          </div>
          <CarModelCarousel className="car-models--cars-page" mobilePages />
        </div>
      </section>
    </>
  );
}
