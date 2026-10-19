import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const sitemap = siteConfig.siteUrl ? `${siteConfig.siteUrl.replace(/\/$/, "")}/sitemap.xml` : undefined;
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(sitemap ? { sitemap } : {}),
  };
}
