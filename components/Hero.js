"use client";
import { useState } from "react";
import Link from "next/link";
import LeadFormModal from "./LeadFormModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="hero" id="top">
        <div className="wrap">
          <div>
            <p className="eyebrow">Corporate &amp; Commercial Interiors</p>
            <h1>
              Corporate &amp; Commercial Interiors. Designed to <em>Perform</em>. Delivered with <em>Accountability</em>.
            </h1>
            <p className="lead">
              Integrated Interior Design, Design &amp; Build and Turnkey Project Solutions — from concept development to successful project handover.
            </p>
            <div className="hero-ctas">
              <button className="btn solid" onClick={() => setIsModalOpen(true)}>
                Discuss Your Project
              </button>
              <Link href="#projects" className="btn">
                View Our Projects
              </Link>
            </div>
            <div className="hero-stats">
              <div>
                <span className="num">20+</span>
                <span className="lbl">Years of Experience</span>
              </div>
              <div>
                <span className="num">1.2M+</span>
                <span className="lbl">Sq.Ft. Delivered</span>
              </div>
              <div>
                <span className="num">500+</span>
                <span className="lbl">Projects</span>
              </div>
            </div>
          </div>
        <div className="blueprint-box">
          <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
            <rect className="bp-line" x="30" y="30" width="340" height="440" />
            <line className="bp-line" x1="30" y1="180" x2="230" y2="180" />
            <line className="bp-line" x1="230" y1="30" x2="230" y2="180" />
            <line className="bp-line" x1="30" y1="340" x2="370" y2="340" />
            <line className="bp-line" x1="150" y1="180" x2="150" y2="340" />
            <rect className="bp-fill" x="250" y="200" width="100" height="120" opacity="0" />
            <rect className="bp-fill" x="50" y="360" width="150" height="90" opacity="0" />
            <circle className="bp-line" cx="300" cy="90" r="34" />
          </svg>
          <span className="tag">Concept → Construction Drawing</span>
        </div>
      </div>
    </section>
    <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
