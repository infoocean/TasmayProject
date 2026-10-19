import { PageIntro } from "@/components/page-intro";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Read the current privacy information for the Tasmay Car Rentals website enquiry form.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageIntro eyebrow="PRIVACY" title="Privacy policy" description="A draft notice describing how the current enquiry form behaves." />
      <section className="section legal-section"><div className="container legal-copy">
        <div className="legal-draft"><strong>Draft for review</strong><span>This page needs client and legal review before launch.</span></div>
        <h2>Information entered in the enquiry form</h2>
        <p>The current form validates and formats the details you enter in your browser. It does not send those details to Tasmay Car Rentals or save them to a server. You may copy the generated summary yourself.</p>
        <h2>Contact and analytics</h2>
        <p>No contact delivery service, analytics provider, or advertising integration is configured in this version. This policy must be updated if data collection or third-party services are added.</p>
        <h2>Questions</h2>
        <p>Business contact details have not been supplied. Add a verified contact method and have the final privacy notice reviewed before publishing.</p>
      </div></section>
    </>
  );
}
