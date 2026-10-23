import { PageIntro } from "@/components/page-intro";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: `Read the current privacy information for the ${siteConfig.name} website enquiry form.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageIntro eyebrow="PRIVACY" title="Privacy policy" description="A draft notice describing how the current enquiry form behaves." />
      <section className="section legal-section"><div className="container legal-copy">
        <div className="legal-draft"><strong>Draft for review</strong><span>This page needs client and legal review before launch.</span></div>
        <h2>Information entered in the enquiry form</h2>
        <p>The enquiry form validates and formats the details you enter in your browser, then opens WhatsApp with those details in a prefilled message addressed to {siteConfig.name}. The website does not store or transmit the form details to its own server. You choose whether to send the message in WhatsApp; WhatsApp then processes it under its own privacy terms.</p>
        <h2>Contact and analytics</h2>
        <p>The website uses a WhatsApp link for enquiries. No analytics provider or advertising integration is configured in this version. This policy must be updated if data collection or third-party services are added.</p>
        <h2>Questions</h2>
        <p>Business contact details have not been supplied. Add a verified contact method and have the final privacy notice reviewed before publishing.</p>
      </div></section>
    </>
  );
}
