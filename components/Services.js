export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">ONE PARTNER. COMPLETE PROJECT DELIVERY.</p>
          <h2>Corporate &amp; Commercial Interior Services</h2>
        </div>
        <div className="svc-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          <div className="svc-card">
            <span className="idx">01</span>
            <h3>Corporate & Commercial Interior Design</h3>
            <p>
              Functional, efficient and inspiring workplaces designed around your business requirements, operations and brand identity.
            </p>
          </div>
          <div className="svc-card">
            <span className="idx">02</span>
            <h3>Design & Build</h3>
            <p>
              Integrated design, engineering, procurement and execution under a single point of responsibility.
            </p>
          </div>
          <div className="svc-card">
            <span className="idx">03</span>
            <h3>Turnkey Interior Execution</h3>
            <p>
              End-to-end execution covering interiors, civil works, MEP, furniture, specialist installations and final handover.
            </p>
          </div>
          <div className="svc-card">
            <span className="idx">04</span>
            <h3>Project Management</h3>
            <p>
              Professional planning, cost control, quality management and project monitoring for predictable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
