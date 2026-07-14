"use client";

export default function LeadFormModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/thank-you";
  };

  return (
    <div className="qe-overlay" onClick={onClose}>
      <div className="qe-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button className="qe-close" onClick={onClose} aria-label="Close">✕</button>

        {/* Header */}
        <h2 className="qe-title">QUICK ENQUIRY</h2>
        <p className="qe-sub">
          If you are interested in any of our services, please submit your basic details below and we will get back to you as soon as possible!
        </p>

        {/* Form */}
        <form className="qe-form" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="qe-row">
            <div className="qe-field">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="qe-field">
              <input type="email" placeholder="Official Mail ID" required />
            </div>
          </div>

          {/* Row 2 */}
          <div className="qe-row">
            <div className="qe-field">
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className="qe-field">
              <select defaultValue="">
                <option value="" disabled>Select Category</option>
                <option>Office Interior Design</option>
                <option>Commercial Interior Design</option>
                <option>Turnkey Fit-Out</option>
                <option>Design &amp; Build</option>
                <option>Project Management</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="qe-row">
            <div className="qe-field">
              <input type="text" placeholder="Location" required />
            </div>
            <div className="qe-field">
              <input type="text" placeholder="Area (sq. ft.)" />
            </div>
          </div>

          {/* Row 4 — full width */}
          <div className="qe-field qe-field--full">
            <textarea placeholder="Message / Specifications" rows={4} />
          </div>

          {/* Submit */}
          <button type="submit" className="qe-submit">
            SEND INQUIRY &nbsp;→
          </button>
        </form>
      </div>
    </div>
  );
}
