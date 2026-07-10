"use client";
import { useState } from "react";
import Link from "next/link";
import LeadFormModal from "./LeadFormModal";
import heroPic from "../app/HERO_PIC.jpeg";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="hero" id="top">
        <div className="wrap hero-wrap">
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">Corporate &amp; Commercial Interiors</p>
            <h1 className="hero-h1">
              Designed to <em>Perform.</em><br />
              Delivered with <em>Accountability.</em>
            </h1>
            <p className="lead">
              Integrated Interior Design, Design &amp; Build and Turnkey Project Solutions<br />
              from concept development to successful project handover.
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

        <div className="hero-image-wrapper">
          <img
            src={heroPic.src}
            alt="Building Architecture"
            className="hero-building-img"
          />
        </div>
      </section>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
