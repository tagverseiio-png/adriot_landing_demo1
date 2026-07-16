"use client";
import { useState } from "react";
import AdroitLogo from './AdroitLogo';
import LeadFormModal from './LeadFormModal';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="about" id="trusted" style={{ textAlign: "center", padding: "80px 0" }}>
        <div className="wrap">
          <p className="eyebrow">Trusted By Leading Businesses</p>
          <p style={{ maxWidth: "680px", margin: "0 auto 48px", fontFamily: "var(--body)", fontSize: "22px", color: "#050505", fontWeight: "500", lineHeight: "1.75" }}>
            Adroit partners with Corporates, Institutions and Businesses to design and deliver high-quality workplaces and commercial environments.
          </p>
          <div className="client-logos" style={{ display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
            {/* Replaced with precise SVG recreation of Adroit logo */}
            <AdroitLogo width="280" height="105" textColor="#050505" />
          </div>

          <div style={{ marginTop: "20px" }}>
            <button onClick={() => setIsModalOpen(true)} className="btn solid on-paper" style={{ fontSize: "13px", padding: "12px 28px", letterSpacing: "0.1em" }}>
              Get a Professional Consultation
            </button>
          </div>
        </div>
      </section>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
