"use client";
import { useState } from "react";
import AdroitLogo from './AdroitLogo';
import LeadFormModal from './LeadFormModal';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="about" id="trusted" style={{ textAlign: "center" }}>
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
            <span style={{ width: "40px", height: "1px", backgroundColor: "#111111" }}></span>
            <p style={{ color: "#111111", margin: 0, letterSpacing: "2px", fontSize: "14px", fontWeight: "600" }}>TRUSTED BY LEADING BUSINESSES</p>
            <span style={{ width: "40px", height: "1px", backgroundColor: "#111111" }}></span>
          </div>
          <p style={{ maxWidth: "600px", margin: "0 auto 40px", fontSize: "20px", color: "#111111", fontWeight: "700", lineHeight: "1.75" }}>
            Adroit partners with Corporates, Institutions and Businesses to design and deliver high-quality workplaces and commercial environments.
          </p>
          <div className="client-logos" style={{ display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap", marginBottom: "40px" }}>
            {/* Replaced with precise SVG recreation of Adroit logo */}
            <AdroitLogo width="300" height="112" textColor="#111" />
          </div>

          <div style={{ marginTop: "20px" }}>
            <button onClick={() => setIsModalOpen(true)} style={{
              display: "inline-block",
              backgroundColor: "#c29b62", // tan/golden color matching image
              color: "#111111",
              padding: "16px 32px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "2px",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit"
            }}>
              GET A FREE VISIT
            </button>
          </div>
        </div>
      </section>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
