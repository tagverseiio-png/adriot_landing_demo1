"use client";
import LeadForm from "./LeadForm";

export default function LeadFormModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content cta" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <p className="eyebrow" style={{ color: "#3c2f1c", justifyContent: "center", visibility: "hidden", display: "none" }}>
          Start a Project
        </p>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Planning An Upcoming Coporate Or Commercial Interior Project?</h2>
        <p className="cta-sub" style={{ fontSize: "14px", marginBottom: "24px" }}>
          Let’s discuss how Adroit can deliver your project.
        </p>
        <LeadForm onSuccess={onClose} />
      </div>
    </div>
  );
}
