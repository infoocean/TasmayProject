import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { QuoteForm } from "@/components/quote-form";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact and Rental Enquiry",
  description: "Prepare a car rental quote enquiry for Tasmay Car Rentals. Phone, WhatsApp, email, and delivery channels are not yet configured.",
  path: "/contact",
});

export default function ContactPage() {
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
              <div className="contact-method contact-method--unavailable"><span><Phone size={18} /></span><p><strong>Phone</strong><small>Number not supplied</small></p></div>
              <div className="contact-method contact-method--unavailable"><span><MessageCircle size={18} /></span><p><strong>WhatsApp</strong><small>Number not supplied</small></p></div>
              <div className="contact-method contact-method--unavailable"><span><Mail size={18} /></span><p><strong>Email</strong><small>Address not supplied</small></p></div>
            </div>
            <div className="contact-warning"><span className="contact-warning__dot" /><p>Phone, WhatsApp, email, and a message delivery service have not been configured. Preparing a summary here does not submit it to the business.</p></div>
          </aside>
          <div className="contact-form-card">
            <div className="contact-form-card__heading"><span>QUOTE ENQUIRY</span><span>01 <i /> 08</span></div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
