"use client";
import { useState } from "react";
import LeadFormModal from "./LeadFormModal";

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="portfolio" id="projects">
      <div className="wrap">
        <div className="section-head" style={{ maxWidth: "100%" }}>
          <p className="eyebrow">PROJECTS THAT DEMONSTRATE OUR CAPABILITIES.</p>
          <h2 style={{ lineHeight: 1.2, maxWidth: "100%" }}> Explore projects where Adroit united design, engineering, and execution to deliver success.</h2>
        </div>
        <div className="proj-grid">
          <div className="proj-card">
            <div className="proj-thumb">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" alt="Tech Park HQ Office Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="tag">Corporate Office</span>
            </div>
            <div className="proj-info">
              <h4>Tech Park HQ, 28,000 sq.ft.</h4>
              <p>Office Interior · Turnkey Fit-Out</p>
            </div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb">
              <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop" alt="Flagship Fashion Showroom Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="tag">Retail</span>
            </div>
            <div className="proj-info">
              <h4>Flagship Fashion Showroom</h4>
              <p>Commercial Interior · Retail Design</p>
            </div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb">
              <img src="/financial-office.jpg" alt="Financial Services Office Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="tag">Corporate Office</span>
            </div>
            <div className="proj-info">
              <h4>Financial Services Office</h4>
              <p>Corporate Interior · Renovation</p>
            </div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" alt="Boutique Restaurant Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="tag">Hospitality</span>
            </div>
            <div className="proj-info">
              <h4>Boutique Restaurant Interior</h4>
              <p>Commercial Interior · Turnkey Build</p>
            </div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" alt="Multi-Speciality Clinic Fit-Out" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="tag">Healthcare</span>
            </div>
            <div className="proj-info">
              <h4>Multi-Speciality Clinic Fit-Out</h4>
              <p>Commercial Interior · Turnkey Fit-Out</p>
            </div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop" alt="IT Campus Workspace Expansion" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="tag">Corporate Office</span>
            </div>
            <div className="proj-info">
              <h4>IT Campus Workspace Expansion</h4>
              <p>Corporate Interior · Space Planning</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <button
            className="btn solid"
            onClick={() => setIsModalOpen(true)}
          >
            See Full Portfolio
          </button>
        </div>
      </div>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
