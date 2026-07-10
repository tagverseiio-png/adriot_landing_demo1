"use client";
import { useState } from "react";
import LeadFormModal from "./LeadFormModal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Does Adroit provide complete Design & Build services?",
      a: "Yes. Our services can cover Interior Design, Engineering, MEP, Procurement, Execution, Project Management and final handover."
    },
    {
      q: "What types of projects does Adroit undertake?",
      a: "We specialise in medium to large-scale Corporate and Commercial Interior Projects."
    },
    {
      q: "Can Adroit undertake projects across multiple locations?",
      a: "Yes. We undertake projects across Chennai, Bengaluru and other locations based on project requirements."
    },
    {
      q: "How does Adroit manage project quality and costs?",
      a: "Through detailed BOQs, systematic project planning, cost monitoring, QA/QC procedures and professional project management."
    }
  ];

  return (
    <>
      <section className="faq" id="faq">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow" style={{ visibility: "hidden" }}>FAQ</p>
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openIndex === idx ? "open" : ""}`}>
                <button className="faq-q" onClick={() => toggleFAQ(idx)}>
                  {faq.q}
                  <span className="plus">+</span>
                </button>
                <div
                  className="faq-a"
                  style={{ maxHeight: openIndex === idx ? "500px" : "0" }}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                background: "transparent",
                color: "var(--ink)",
                border: "1px solid var(--ink)",
                padding: "16px 48px",
                fontSize: "13px",
                fontFamily: "var(--mono)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: "2px",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={e => {
                e.target.style.background = "var(--brass)";
                e.target.style.borderColor = "var(--brass)";
                e.target.style.color = "var(--charcoal)";
              }}
              onMouseLeave={e => {
                e.target.style.background = "transparent";
                e.target.style.borderColor = "var(--ink)";
                e.target.style.color = "var(--ink)";
              }}
            >
              Ask Us a Question
            </button>
          </div>
        </div>
      </section>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
