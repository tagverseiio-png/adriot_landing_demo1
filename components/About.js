export default function About() {
  return (
    <>
      <div className="trustbar">
        <div className="wrap">
          <span>Corporate Offices</span>
          <span>Commercial Spaces</span>
          <span>Retail &amp; Showrooms</span>
          <span>Turnkey Fit-Outs</span>
          <span>Design-Build Execution</span>
        </div>
      </div>

      <section className="about" id="about">
        <div className="wrap about-grid">
          <div>
            <p className="eyebrow">Trusted By Corporate &amp; Commercial Clients</p>
            <h2>Interior design and execution, held to one standard of accountability.</h2>
          </div>
          <div>
            <div className="about-copy">
              <p>
                Adroit Design is a corporate and commercial interior design company built around a
                simple premise: the firm that designs your space should also be the firm that builds it.
                We work with businesses on office interiors, commercial fit-outs, retail environments
                and showrooms — carrying every project from the first floor plan through to final handover.
              </p>
              <p>
                Because design and execution sit under one roof, decisions made on the drawing board
                survive contact with the site. Our clients get a single point of contact, a fixed timeline,
                and a space that matches what was approved — not a value-engineered version of it.
              </p>
            </div>
            <div className="about-figures">
              <div className="fig">
                <div className="num">12+</div>
                <div className="lbl">Years in Practice</div>
              </div>
              <div className="fig">
                <div className="num">80+</div>
                <div className="lbl">Corporate Clients</div>
              </div>
              <div className="fig">
                <div className="num">30+</div>
                <div className="lbl">In-House Specialists</div>
              </div>
              <div className="fig">
                <div className="num">6-12</div>
                <div className="lbl">Week Avg. Fit-Out</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
