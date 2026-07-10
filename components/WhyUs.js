/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import LeadFormModal from "./LeadFormModal";

export default function WhyUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="why" id="why">
        <div className="wrap why-grid">
          <div>
            <p className="eyebrow">Why Adroit</p>
            <h2 className="section-h2" style={{ marginBottom: "34px" }}>
              Built For Businesses Where Quality, Cost And Timelines Matter.
            </h2>
            <div className="why-list">
              <div className="why-item">
                <span className="mark">→</span>
                <div>
                  <h4>Single-Point Accountability</h4>
                  <p>
                    One experienced team coordinating your project from concept to successful completion.
                  </p>
                </div>
              </div>
              <div className="why-item">
                <span className="mark">→</span>
                <div>
                  <h4>Multidisciplinary Expertise</h4>
                  <p>
                    Integrated Interior Design, Civil, MEP, Procurement and Project Management capabilities.
                  </p>
                </div>
              </div>
              <div className="why-item">
                <span className="mark">→</span>
                <div>
                  <h4>Transparent Project Control</h4>
                  <p>
                    Detailed BOQs, cost monitoring, progress tracking and systematic project management.
                  </p>
                </div>
              </div>
              <div className="why-item">
                <span className="mark">→</span>
                <div>
                  <h4>Quality-Focused Execution</h4>
                  <p>
                    Structured QA/QC procedures throughout project execution and final handover.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="why-cta-container">
              <button
                className="btn solid"
                onClick={() => setIsModalOpen(true)}
              >
                Talk To Our Consultants
              </button>
            </div>
          </div>
          <div className="why-visual">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
              alt="Modern corporate office interior designed and executed by Adroit Design"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
