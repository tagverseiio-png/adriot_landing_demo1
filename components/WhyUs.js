/* eslint-disable @next/next/no-img-element */
export default function WhyUs() {
  return (
    <section className="why" id="why">
      <div className="wrap why-grid">
        <div>
          <p className="eyebrow">Why Adroit</p>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", marginBottom: "34px", lineHeight: 1.2 }}>
            BUILT FOR BUSINESSES WHERE QUALITY, COST AND TIMELINES MATTER.
          </h2>
          <div className="why-list">
            <div className="why-item">
              <span className="mark">→</span>
              <div>
                <h4>Single-Point Accountability</h4>
                <p>
                  One experienced team coordinating your project from concept to successful completion.
                </p>
              </div>
            </div>
            <div className="why-item">
              <span className="mark">→</span>
              <div>
                <h4>Multidisciplinary Expertise</h4>
                <p>
                  Integrated Interior Design, Civil, MEP, Procurement and Project Management capabilities.
                </p>
              </div>
            </div>
            <div className="why-item">
              <span className="mark">→</span>
              <div>
                <h4>Transparent Project Control</h4>
                <p>
                  Detailed BOQs, cost monitoring, progress tracking and systematic project management.
                </p>
              </div>
            </div>
            <div className="why-item">
              <span className="mark">→</span>
              <div>
                <h4>Quality-Focused Execution</h4>
                <p>
                  Structured QA/QC procedures throughout project execution and final handover.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="why-visual">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
            alt="Modern corporate office interior designed and executed by Adroit Design"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
