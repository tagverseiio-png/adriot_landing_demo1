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
        </div>
      </section>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
