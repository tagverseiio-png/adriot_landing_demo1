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
        <p className="eyebrow" style={{ color: "#3c2f1c", justifyContent: "center" }}>
          Start a Project
        </p>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Tell us about your space.</h2>
        <p className="cta-sub" style={{ fontSize: "14px", marginBottom: "24px" }}>
          Share your requirement and our design team will get back within one business day with next steps.
        </p>
        <LeadForm onSuccess={onClose} />
      </div>
    </div>
  );
}
