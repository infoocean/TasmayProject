import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Brand } from "@/components/brand";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__main">
          <div className="site-footer__brand-block">
            <Brand inverse />
            <p>Choose a vehicle category and request a quote for your journey from Indore.</p>
            <div className="site-footer__area"><MapPin size={15} aria-hidden="true" /> {siteConfig.area}</div>
          </div>
          <div className="site-footer__column">
            <h2>Explore</h2>
            <Link href="/about">About</Link>
            <Link href="/cars">Our cars</Link>
            <Link href="/services">Services</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className="site-footer__column">
            <h2>Get started</h2>
            <Link href="/contact#enquiry">Request a quote <ArrowUpRight size={14} aria-hidden="true" /></Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/terms-and-conditions">Terms and conditions</Link>
          </div>
          <div className="site-footer__contact">
            <span className="eyebrow eyebrow--light">HAVE A ROUTE IN MIND?</span>
            <p>Share a few trip details to prepare an enquiry summary.</p>
            <Link className="button button--light" href="/contact#enquiry">Request a quote <ArrowUpRight size={16} aria-hidden="true" /></Link>
            {!siteConfig.phone && !siteConfig.whatsappNumber && (
              <span className="site-footer__small">Phone and WhatsApp details have not been supplied.</span>
            )}
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <span>Pricing: {siteConfig.pricingLabel}</span>
        </div>
      </div>
    </footer>
  );
}
