import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { QuoteForm } from "@/components/quote-form";
import { siteConfig, whatsappHref } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { vehicleCategories, services } from "@/data/site-content";
import { carModels } from "@/data/car-models";

export const metadata = createPageMetadata({
  title: "Contact and Rental Enquiry",
  description: "Contact Tasmay Car Rentals by phone or WhatsApp, or prepare a car rental quote enquiry.",
  path: "/contact",
});

type ContactPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const serviceSlug = typeof params.service === "string" ? params.service : undefined;
  const vehicleSlug = typeof params.vehicle === "string" ? params.vehicle : undefined;
  const modelSlug = typeof params.model === "string" ? params.model : undefined;
  const selectedService = services.find((service) => service.slug === serviceSlug);
  const selectedVehicle = vehicleCategories.find((vehicle) => vehicle.slug === vehicleSlug);
  const selectedModel = carModels.find((model) => model.slug === modelSlug);
  const modelVehicle = selectedModel?.vehicleSlug && vehicleCategories.find((vehicle) => vehicle.slug === selectedModel.vehicleSlug);
  const selectedVehicleForForm = selectedVehicle ?? modelVehicle;
  const initialValues = {
    ...(selectedService ? { tripType: selectedService.name } : {}),
    ...(selectedVehicleForForm ? { vehicle: selectedVehicleForForm.name } : {}),
    ...(selectedModel ? { model: `${selectedModel.brand} ${selectedModel.name}` } : {}),
  };
  return (
    <>
      <PageIntro eyebrow="CONTACT & ENQUIRIES" title="Tell us about the trip." description="Add your route, date, and preferred vehicle category to prepare a quote enquiry summary." />
      <section className="section page-section contact-section" id="enquiry">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <p className="eyebrow">A FEW DETAILS GO A LONG WAY</p>
            <h2>Let’s map out your request.</h2>
            <p>Share your trip details in the form. It will prepare a summary on this device only.</p>
            <div className="contact-methods">
              <div className="contact-method"><span><MapPin size={18} /></span><p><strong>Service area</strong><small>{siteConfig.area}</small></p></div>
              <a className="contact-method" href="tel:+919993111269"><span><Phone size={18} /></span><p><strong>Phone</strong><small>+91 99931 11269</small></p></a>
              <a className="contact-method" href={whatsappHref} target="_blank" rel="noopener noreferrer"><span><MessageCircle size={18} /></span><p><strong>WhatsApp</strong><small>Chat with us</small></p></a>
              <div className="contact-method contact-method--unavailable"><span><Mail size={18} /></span><p><strong>Email</strong><small>Address not supplied</small></p></div>
            </div>
            <div className="contact-warning"><span className="contact-warning__dot" /><p>Use the phone or WhatsApp links to contact us. The form prepares a summary on this device and does not submit it.</p></div>
          </aside>
          <div className="contact-form-card">
            <div className="contact-form-card__heading"><span>QUOTE ENQUIRY</span><span>01 <i /> 08</span></div>
            <QuoteForm initialValues={initialValues} />
          </div>
        </div>
      </section>
    </>
  );
}
