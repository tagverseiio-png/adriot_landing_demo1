/* eslint-disable @next/next/no-img-element */
export default function WhyUs() {
  return (
    <section className="why" id="why">
      <div className="wrap why-grid">
        <div>
          <p className="eyebrow">Why Businesses Choose Adroit Design</p>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", marginBottom: "34px" }}>
            A design-and-build firm, not a design firm that subcontracts the build.
          </h2>
          <div className="why-list">
            <div className="why-item">
              <span className="mark">→</span>
              <div>
                <h4>Single point of accountability</h4>
                <p>
                  One contract, one project manager, one team responsible for design and site execution.
                </p>
              </div>
            </div>
            <div className="why-item">
              <span className="mark">→</span>
              <div>
                <h4>Fixed timelines, tracked weekly</h4>
                <p>
                  Every project runs on a published schedule with weekly progress updates, not
                  open-ended promises.
                </p>
              </div>
            </div>
            <div className="why-item">
              <span className="mark">→</span>
              <div>
                <h4>In-house execution teams</h4>
                <p>
                  Civil, electrical and carpentry crews are our own — not third-party subcontractors
                  we merely coordinate.
                </p>
              </div>
            </div>
            <div className="why-item">
              <span className="mark">→</span>
              <div>
                <h4>Transparent, itemised costing</h4>
                <p>
                  Detailed bill of quantities before work starts, so there are no surprise variations
                  at handover.
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
