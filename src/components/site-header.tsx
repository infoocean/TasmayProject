"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Phone, MapPin } from "lucide-react";
import { Brand } from "@/components/brand";
import { navigation } from "@/data/site-content";

function WhatsAppIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.273.297-1.04 1.016-1.04 2.479s1.064 2.875 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26C2.169 6.035 6.61 1.594 12.064 1.594a9.92 9.92 0 0 1 7.055 2.924 9.92 9.92 0 0 1 2.92 7.046c-.003 5.455-4.444 9.896-9.889 9.896m8.413-18.29A11.81 11.81 0 0 0 12.068 0C5.54 0 .225 5.315.222 11.843c-.001 2.08.543 4.11 1.574 5.9L.16 24l6.401-1.678a11.82 11.82 0 0 0 5.502 1.359h.005c6.527 0 11.842-5.315 11.845-11.843a11.82 11.82 0 0 0-3.449-8.343z" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
      <div className="site-header__mobile-contact" role="group" aria-label="Contact Tasmay Car Rentals">
        <a href="tel:+919131649079" aria-label="Call +91 91316 49079">
          <Phone size={15} aria-hidden="true" />
          <span>+91 91316 49079</span>
        </a>
        <a className="site-header__mobile-whatsapp" href="https://wa.me/919131649079" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
          <WhatsAppIcon size={15} />
          <span>WhatsApp</span>
        </a>
        <span className="site-header__mobile-location">
          <MapPin size={15} aria-hidden="true" />
          <span>Indore</span>
        </span>
      </div>
      <div className="site-header__inner container">
        <Brand />
        <nav id="mobile-navigation" className={`site-nav${open ? " site-nav--open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link className="site-nav__link" href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="button button--nav-mobile" href="/contact#enquiry" onClick={() => setOpen(false)}>
            Request a quote <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>
        <Link className="button button--header-mobile" href="/contact#enquiry" onClick={() => setOpen(false)}>
          <span className="button--header-mobile__full">Request a quote</span>
          <span className="button--header-mobile__short">Quote</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
        <div className="site-header__actions">
          <a className="site-header__phone" href="tel:+919131649079" aria-label="Call +91 91316 49079" title="Call +91 91316 49079">
            <Phone size={16} aria-hidden="true" />
            <span>+91 91316 49079</span>
          </a>
          <a className="site-header__whatsapp" href="https://wa.me/919131649079" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" title="Chat with us on WhatsApp">
            <WhatsAppIcon size={16} />
            <span>WhatsApp</span>
          </a>
          <Link className="button button--header" href="/contact#enquiry">
            Request a quote <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}
