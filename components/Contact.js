"use client";
import LeadForm from "./LeadForm";

export default function Contact() {
  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <p className="eyebrow" style={{ color: "#050505", visibility: "hidden" }}>
          Start a Project
        </p>
        <h2 style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>Planning An Upcoming Corporate Or Commercial Interior Project?</h2>
        <p className="cta-sub">
          Let’s discuss how Adroit can deliver your project.
        </p>
        <LeadForm />
      </div>
    </section>
  );
}
