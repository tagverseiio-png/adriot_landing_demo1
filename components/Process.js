"use client";
import { useState } from "react";
import LeadFormModal from "./LeadFormModal";

export default function Process() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      no: "01",
      title: "Understand",
      desc: "Project Brief & Site Assessment",
      detail: "We listen first. Every project begins with a deep-dive into your vision, goals, and site conditions.",
    },
    {
      no: "02",
      title: "Design",
      desc: "Design Development & Cost Planning",
      detail: "Our architects craft detailed designs, balancing aesthetics with budget precision.",
    },
    {
      no: "03",
      title: "Engineer",
      desc: "Detailed Engineering & Procurement",
      detail: "Structural and MEP engineers resolve every technical detail before ground breaks.",
    },
    {
      no: "04",
      title: "Execute",
      desc: "Project Execution & Management",
      detail: "On-site teams led by experienced project managers keep quality and timelines tight.",
    },
    {
      no: "05",
      title: "Deliver",
      desc: "Testing, Snag Closure & Handover",
      detail: "We don't leave until every snag is resolved and you're fully satisfied.",
    },
  ];

  return (
    <>
      <section className="process" id="process">
        <div className="wrap">
          <div className="process-header">
            <p className="eyebrow">FROM CONCEPT TO COMPLETION.</p>
            <h2 className="section-title">Our Work Process</h2>
            <p className="process-subtitle">
              A disciplined five-phase methodology — refined across hundreds of projects — ensures every build is delivered with precision, on time, and on budget.
            </p>
          </div>

          <div className="process-timeline">
            <div className="timeline-line"></div>
            {steps.map((step, i) => (
              <div className="pstep" key={i}>
                <div className="pstep-dot"></div>
                <div className="pstep-inner">
                  <div className="step-no">{step.no}</div>
                  <h4>{step.title}</h4>
                  <p className="step-desc">{step.desc}</p>
                  <p className="step-detail">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "56px" }}>
            <button className="btn solid" onClick={() => setIsModalOpen(true)}>
              Discuss Your Project
            </button>
          </div>
        </div>
      </section>

      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
