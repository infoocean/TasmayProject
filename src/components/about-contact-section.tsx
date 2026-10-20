import { Facebook, Instagram, Mail, MessageCircle, Phone, Youtube } from "lucide-react";
import { sampleContactEmail, siteConfig, whatsappHref } from "@/config/site";
const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/tasmaycarrentals", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/tasmaycarrentals", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/@tasmaycarrentals", icon: Youtube },
];

export function AboutContactSection({ className = "" }: { className?: string }) {
  return (
    <section className={`about-contact-section ${className}`.trim()}>
      <div className="container about-contact-panel" data-reveal>
        <div className="about-contact-copy">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let’s plan your next trip.</h2>
          <p>Contact Tasmay Car Rental in Indore or follow us on social media.</p>
        </div>
        <div className="about-contact-links">
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}><Phone size={17} /><span><small>Call us</small>{siteConfig.phone}</span></a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /><span><small>WhatsApp</small>Chat with us</span></a>
          <a href={`mailto:${sampleContactEmail}`}><Mail size={17} /><span><small>Email</small>{sampleContactEmail}</span></a>
          <div className="about-social-links" aria-label="Social media">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
