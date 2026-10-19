import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { vehicleCategories } from "@/data/site-content";
import { vehiclePhotos } from "@/data/vehicle-images";
import { createPageMetadata } from "@/lib/metadata";

type CarPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return vehicleCategories.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }: CarPageProps) {
  const { slug } = await params;
  const vehicle = vehicleCategories.find((item) => item.slug === slug);
  if (!vehicle) return {};
  return createPageMetadata({
    title: `${vehicle.name} Rental Category in Indore`,
    description: vehicle.description,
    path: `/cars/${vehicle.slug}`,
  });
}

export default async function CarDetailPage({ params }: CarPageProps) {
  const { slug } = await params;
  const vehicle = vehicleCategories.find((item) => item.slug === slug);
  if (!vehicle) notFound();
  const photo = vehiclePhotos[vehicle.slug];

  return (
    <>
      <PageIntro eyebrow="VEHICLE CATEGORY" title={vehicle.name} description={vehicle.description} />
      <section className="section page-section">
        <div className="container car-detail" data-reveal>
          <div className="car-detail__visual">
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 820px) 100vw, 55vw" className="car-detail__image" />
            <span>Representative photo · exact vehicle may differ</span>
          </div>
          <div className="car-detail__copy">
            <p className="eyebrow">QUOTE ON REQUEST</p>
            <h2>Details for your route, confirmed with your quote.</h2>
            <p>{vehicle.details}</p>
            <ul className="detail-checks">
              <li><CheckCircle2 size={18} /> Pricing: Request a Quote</li>
              <li><CheckCircle2 size={18} /> Vehicle details: confirm with the business</li>
              <li><CheckCircle2 size={18} /> Availability: confirm for your travel date</li>
            </ul>
            <Link className="button button--primary" href="/contact#enquiry">Request a quote <ArrowUpRight size={17} /></Link>
            <Link className="back-link" href="/cars"><ArrowLeft size={15} /> All vehicle categories</Link>
          </div>
        </div>
      </section>
    </>
  );
}
