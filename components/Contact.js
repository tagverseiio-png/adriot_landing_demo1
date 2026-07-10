"use client";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
  };

  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <p className="eyebrow" style={{ color: "#3c2f1c" }}>
          Start a Project
        </p>
        <h2>Tell us about your space. We&apos;ll send a plan, not a sales pitch.</h2>
        <p className="cta-sub">
          Share your requirement and our design team will get back within one business day with next
          steps.
        </p>
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
      </div>
    </section>
  );
}
