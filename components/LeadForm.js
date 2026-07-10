"use client";

export default function LeadForm({ onSuccess }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    if (onSuccess) onSuccess();
  };

  return (
    <form className="cta-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" required />
      <input type="text" placeholder="Company Name" required />
      <input type="tel" placeholder="Mobile Number" required />
      <input type="email" placeholder="Official Email" required />
      <input type="text" placeholder="Project Location" className="full" required />
      <input type="text" placeholder="Approximate Project Area" className="full" required />
      <textarea placeholder="Brief Project Requirement"></textarea>
      <button
        type="submit"
        className="btn on-paper full"
        style={{ justifyContent: "center" }}
      >
        Discuss My Project
      </button>
    </form>
  );
}
