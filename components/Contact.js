"use client";
import LeadForm from "./LeadForm";

export default function Contact() {
  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <p className="eyebrow" style={{ color: "#3c2f1c" }}>
          Start a Project
        </p>
        <h2>Tell us about your space. We&apos;ll send a plan, not a sales pitch.</h2>
        <p className="cta-sub">
          Share your requirement and our design team will get back within one business day with next
          steps.
        </p>
        <LeadForm />
      </div>
    </section>
  );
}
