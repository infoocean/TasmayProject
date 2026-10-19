import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadata = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({ title, description, path = "" }: PageMetadata): Metadata {
  const siteUrl = siteConfig.siteUrl;
  const canonical = siteUrl ? `${siteUrl.replace(/\/$/, "")}${path}` : undefined;

  return {
    title,
    description,
    ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      title,
      description,
      type: "website",
      ...(canonical ? { url: canonical } : {}),
      siteName: siteConfig.name,
    },
  };
}
