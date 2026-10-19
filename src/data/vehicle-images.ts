export type VehiclePhoto = {
  src: string;
  alt: string;
  source: string;
};

// Representative stock photography only. These photos do not depict or verify
// vehicles currently available from Tasmay Car Rentals.
export const heroPhoto: VehiclePhoto = {
  src: "/images/hero-travel.jpg",
  alt: "Representative stock photo of a white SUV on a scenic road",
  source: "https://unsplash.com/photos/white-suv-on-road-during-daytime-SnmyIEUY1pQ",
};

export const vehiclePhotos: Record<string, VehiclePhoto> = {
  sedan: {
    src: "/images/vehicle-sedan.jpg",
    alt: "Representative stock photo of a white sedan travelling on a city road",
    source: "https://unsplash.com/photos/white-sedan-on-road-during-daytime-Lb91YlqW1WQ",
  },
  suv: {
    src: "/images/vehicle-suv.jpg",
    alt: "Representative stock photo of an SUV at sunset",
    source: "https://unsplash.com/photos/a-silver-suv-parked-in-a-parking-lot-DftcSDkR33Q",
  },
  "ertiga-innova": {
    src: "/images/vehicle-mpv.jpg",
    alt: "Representative stock photo of a passenger van on a rural road",
    source: "https://unsplash.com/photos/a-white-van-driving-down-a-road-next-to-a-forest-m6zvrRdtUzA",
  },
};
