import carModelImages from "@/data/car-model-images.json";
import { PageIntro } from "@/components/page-intro";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Image Credits",
  description: "Photographer and license credits for the car model images used on this website.",
  path: "/image-credits",
});

export default function ImageCreditsPage() {
  const credits = Object.values(carModelImages);

  return (
    <>
      <PageIntro eyebrow="IMAGE CREDITS" title="Car model photo credits" description="The following vehicle photos are used under their listed licenses. Photos are illustrative." />
      <section className="section page-section">
        <div className="container">
          <ul className="image-credits-list">
            {credits.map((credit) => (
              <li key={credit.src}>
                <a href={credit.sourceUrl} target="_blank" rel="noopener noreferrer">{credit.title}</a>
                <span> by {credit.artist} · </span>
                {credit.licenseUrl ? (
                  <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer">{credit.license}</a>
                ) : (
                  <span>{credit.license}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
