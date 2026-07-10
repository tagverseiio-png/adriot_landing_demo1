import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div>
          <p className="eyebrow">Corporate &amp; Commercial Interior Design</p>
          <h1>
            From <em>blueprint</em> to<br />
            built space — <em>one</em> team, start to finish.
          </h1>
          <p className="lead">
            Adroit Design plans, designs and executes corporate offices, commercial spaces and retail
            interiors as a single turnkey project — no fragmented vendors, no gaps between drawing
            and delivery.
          </p>
          <div className="hero-ctas">
            <Link href="#contact" className="btn solid">
              Start Your Project
            </Link>
            <Link href="#projects" className="btn">
              View Our Work
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <span className="num">120+</span>
              <span className="lbl">Projects Delivered</span>
            </div>
            <div>
              <span className="num">9 Lakh+</span>
              <span className="lbl">Sq. Ft. Executed</span>
            </div>
            <div>
              <span className="num">14 Days</span>
              <span className="lbl">Avg. Design Turnaround</span>
            </div>
            <div>
              <span className="num">100%</span>
              <span className="lbl">In-House Execution</span>
            </div>
          </div>
        </div>
        <div className="blueprint-box">
          <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
            <rect className="bp-line" x="30" y="30" width="340" height="440" />
            <line className="bp-line" x1="30" y1="180" x2="230" y2="180" />
            <line className="bp-line" x1="230" y1="30" x2="230" y2="180" />
            <line className="bp-line" x1="30" y1="340" x2="370" y2="340" />
            <line className="bp-line" x1="150" y1="180" x2="150" y2="340" />
            <rect className="bp-fill" x="250" y="200" width="100" height="120" opacity="0" />
            <rect className="bp-fill" x="50" y="360" width="150" height="90" opacity="0" />
            <circle className="bp-line" cx="300" cy="90" r="34" />
          </svg>
          <span className="tag">Concept → Construction Drawing</span>
        </div>
      </div>
    </section>
  );
}
