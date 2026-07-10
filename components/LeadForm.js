"use client";

export default function LeadForm({ onSuccess }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    if (onSuccess) onSuccess();
  };

  return (
    <form className="cta-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Full Name" required />
      <input type="tel" placeholder="Phone Number" required />
      <input type="email" placeholder="Work Email" className="full" required />
      <select className="full" required defaultValue="">
        <option value="" disabled>Project Type</option>
        <option>Corporate Office Interior</option>
        <option>Commercial / Retail Interior</option>
        <option>Turnkey Fit-Out</option>
        <option>Renovation</option>
      </select>
      <textarea placeholder="Tell us about your space — location, area in sq.ft., timeline"></textarea>
      <button
        type="submit"
        className="btn on-paper full"
        style={{ justifyContent: "center" }}
      >
        Request a Callback
      </button>
    </form>
  );
}
