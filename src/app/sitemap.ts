import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { publicPaths, vehicleCategories } from "@/data/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.siteUrl) return [];
  const origin = siteConfig.siteUrl.replace(/\/$/, "");
  const paths = [
    ...publicPaths,
    ...vehicleCategories.map((vehicle) => `/cars/${vehicle.slug}`),
  ];
  return paths.map((path) => ({
    url: `${origin}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
