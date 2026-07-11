export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Client Feedback</p>
          <h2>What our clients say about working with Adroit Design</h2>
        </div>
        <div className="testi-grid">
          <div className="testi-card">
            <p className="quote">
              &quot;We handed over one brief and got back a finished office — on schedule, on budget,
              with none of the vendor chasing we expected.&quot;
            </p>
            <p className="who">Operations Head, Technology Company</p>
          </div>
          <div className="testi-card">
            <p className="quote">
              &quot;The design matched the render almost exactly. That alone set Adroit apart from every
              other contractor we spoke to.&quot;
            </p>
            <p className="who">Director, Retail Chain</p>
          </div>
          <div className="testi-card">
            <p className="quote">
              &quot;Weekly updates meant we always knew where the project stood. No surprises at
              handover, no last-minute cost additions.&quot;
            </p>
            <p className="who">Founder, Financial Services Firm</p>
          </div>
        </div>
      </div>
    </section>
  );
}
