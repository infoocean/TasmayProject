import { PageIntro } from "@/components/page-intro";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms and Conditions",
  description: "Review the current draft terms for Tasmay Car Rentals website enquiries and quote requests.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow="INFORMATION" title="Terms and conditions" description="A draft information page for the website enquiry experience." />
      <section className="section legal-section"><div className="container legal-copy">
        <div className="legal-draft"><strong>Draft for review</strong><span>This page needs client and legal review before launch.</span></div>
        <h2>Enquiries and quotes</h2>
        <p>The enquiry form currently prepares a summary in your browser only. It does not submit a booking or deliver a message to the business. No booking is created by using this website.</p>
        <h2>Pricing, availability, and trip terms</h2>
        <p>Pricing is shown as “Request a Quote.” Rates, vehicle details, availability, inclusions, exclusions, and applicable trip terms have not been supplied for this website and must be confirmed directly with the business before a booking decision.</p>
        <h2>Business information</h2>
        <p>Verified legal business details and contact information have not been supplied. Replace this draft with terms approved by Tasmay Car Rentals and obtain legal review before launch.</p>
      </div></section>
    </>
  );
}
