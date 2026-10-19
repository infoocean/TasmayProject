import type { VehicleCategory } from "@/data/site-content";

export type CarModelSegment = "Sedan" | "Hatchback" | "SUV" | "MPV";

type CarModelEntry = {
  brand: string;
  name: string;
  segment: CarModelSegment;
  vehicleSlug?: VehicleCategory["slug"];
};

function slugify(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const carModelEntries: CarModelEntry[] = [
  { brand: "Maruti Suzuki", name: "Dzire", segment: "Sedan", vehicleSlug: "sedan" },
  { brand: "Honda", name: "Amaze", segment: "Sedan", vehicleSlug: "sedan" },
  { brand: "Honda", name: "City", segment: "Sedan", vehicleSlug: "sedan" },
  { brand: "Hyundai", name: "Verna", segment: "Sedan", vehicleSlug: "sedan" },
  { brand: "Hyundai", name: "Aura", segment: "Sedan", vehicleSlug: "sedan" },
  { brand: "Volkswagen", name: "Virtus", segment: "Sedan", vehicleSlug: "sedan" },
  { brand: "Škoda", name: "Slavia", segment: "Sedan", vehicleSlug: "sedan" },
  { brand: "Maruti Suzuki", name: "Swift", segment: "Hatchback" },
  { brand: "Maruti Suzuki", name: "Baleno", segment: "Hatchback" },
  { brand: "Maruti Suzuki", name: "WagonR", segment: "Hatchback" },
  { brand: "Maruti Suzuki", name: "Alto K10", segment: "Hatchback" },
  { brand: "Maruti Suzuki", name: "Fronx", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Toyota", name: "Glanza", segment: "Hatchback" },
  { brand: "Hyundai", name: "Grand i10 Nios", segment: "Hatchback" },
  { brand: "Hyundai", name: "i20", segment: "Hatchback" },
  { brand: "Tata", name: "Tiago", segment: "Hatchback" },
  { brand: "Tata", name: "Altroz", segment: "Hatchback" },
  { brand: "Maruti Suzuki", name: "Brezza", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Maruti Suzuki", name: "Grand Vitara", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Maruti Suzuki", name: "Jimny", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Maruti Suzuki", name: "Victoris", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Tata", name: "Punch", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Tata", name: "Nexon", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Tata", name: "Curvv", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Tata", name: "Harrier", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Tata", name: "Safari", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Hyundai", name: "Exter", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Hyundai", name: "Venue", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Hyundai", name: "Creta", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Hyundai", name: "Alcazar", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Mahindra", name: "XUV 3XO", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Mahindra", name: "XUV 7XO", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Mahindra", name: "Scorpio-N", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Mahindra", name: "Scorpio Classic", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Mahindra", name: "Thar", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Mahindra", name: "Thar Roxx", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Mahindra", name: "Bolero", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Kia", name: "Sonet", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Kia", name: "Seltos", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Kia", name: "Syros", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Toyota", name: "Urban Cruiser Hyryder", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Toyota", name: "Fortuner", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Honda", name: "Elevate", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Renault", name: "Kiger", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Nissan", name: "Magnite", segment: "SUV", vehicleSlug: "suv" },
  { brand: "Maruti Suzuki", name: "Ertiga", segment: "MPV", vehicleSlug: "ertiga-innova" },
  { brand: "Maruti Suzuki", name: "XL6", segment: "MPV", vehicleSlug: "ertiga-innova" },
  { brand: "Kia", name: "Carens", segment: "MPV", vehicleSlug: "ertiga-innova" },
  { brand: "Toyota", name: "Innova Crysta", segment: "MPV", vehicleSlug: "ertiga-innova" },
  { brand: "Toyota", name: "Innova Hycross", segment: "MPV", vehicleSlug: "ertiga-innova" },
];

export const carModels = carModelEntries.map((model) => ({
  ...model,
  slug: slugify(`${model.brand}-${model.name}`),
}));
