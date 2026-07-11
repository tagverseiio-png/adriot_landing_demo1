import Link from "next/link";
import FloatingContact from "../../components/FloatingContact";

export const metadata = {
  title: "Thank You | Adroit Design",
  description:
    "Thank you for reaching out to Adroit Design. Our team will contact you within 24 hours to discuss your project.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <div className="ty-root">
        {/* Noise overlay */}
        <div className="ty-noise" aria-hidden="true" />

        {/* Left gold accent bar */}
        <div className="ty-accent-bar" aria-hidden="true" />

        {/* Top-right corner decoration */}
        <div className="ty-corner-deco" aria-hidden="true">
          <span /><span /><span />
        </div>

        {/* Background watermark text */}
        <p className="ty-watermark" aria-hidden="true">ADROIT</p>

        {/* Main content */}
        <div className="ty-inner">

          {/* Brand label */}
          <p className="ty-brand">ADROIT DESIGN</p>

          {/* Gold checkmark badge */}
          <div className="ty-badge" aria-label="Success">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="ty-heading">
            THANK<br />YOU!
          </h1>

          {/* Sub copy */}
          <p className="ty-body">
            Your request has been received. Our team will<br className="ty-br" />
            contact you within <strong>24 hours</strong> to discuss your project.
          </p>

          {/* CTAs */}
          <div className="ty-ctas">
            <Link href="/" className="ty-btn ty-btn--gold" id="back-to-home">
              BACK TO HOME
            </Link>
            <Link href="/#portfolio" className="ty-btn ty-btn--outline" id="view-our-projects">
              VIEW OUR PROJECTS
            </Link>
          </div>

          {/* Divider */}
          <div className="ty-rule" aria-hidden="true" />

          {/* Stats */}
          <div className="ty-stats" aria-label="Company highlights">
            <div className="ty-stat">
              <span className="ty-stat-num">24 Hrs</span>
              <span className="ty-stat-lbl">RESPONSE TIME</span>
            </div>
            <div className="ty-stat-sep" aria-hidden="true" />
            <div className="ty-stat">
              <span className="ty-stat-num ty-gold">250+</span>
              <span className="ty-stat-lbl">CLIENTS</span>
            </div>
            <div className="ty-stat-sep" aria-hidden="true" />
            <div className="ty-stat">
              <span className="ty-stat-num">12 Yrs</span>
              <span className="ty-stat-lbl">EXPERIENCE</span>
            </div>
          </div>

        </div>
      </div>

      <FloatingContact />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Michroma&family=Montserrat:wght@400;500;600;700&display=swap');

        .ty-root {
          position: relative;
          min-height: 100vh;
          background: #080808;
          display: flex;
          align-items: center;
          overflow: hidden;
          font-family: 'Montserrat', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .ty-noise {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          pointer-events: none;
          z-index: 0;
        }

        .ty-accent-bar {
          position: absolute;
          left: 0;
          top: 12%;
          bottom: 12%;
          width: 3px;
          background: linear-gradient(to bottom, transparent, #c49b49 30%, #c49b49 70%, transparent);
          z-index: 1;
        }

        .ty-corner-deco {
          position: absolute;
          top: 44px;
          right: 56px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          z-index: 1;
        }
        .ty-corner-deco span {
          display: block;
          height: 1px;
          background: rgba(196,155,73,0.3);
        }
        .ty-corner-deco span:nth-child(1) { width: 52px; }
        .ty-corner-deco span:nth-child(2) { width: 34px; margin-left: auto; }
        .ty-corner-deco span:nth-child(3) { width: 18px; margin-left: auto; }

        .ty-watermark {
          position: absolute;
          right: -40px;
          bottom: -30px;
          font-size: clamp(110px, 18vw, 220px);
          font-weight: 900;
          letter-spacing: -6px;
          color: rgba(255,255,255,0.022);
          pointer-events: none;
          user-select: none;
          z-index: 0;
          line-height: 1;
          font-family: 'Montserrat', sans-serif;
        }

        .ty-inner {
          position: relative;
          z-index: 2;
          max-width: 1140px;
          width: 88%;
          margin: 0 auto;
          padding: 80px 60px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .ty-brand {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 4px;
          color: rgba(196,155,73,0.65);
          text-transform: uppercase;
          margin-bottom: 40px;
          font-family: 'Montserrat', monospace;
        }

        .ty-badge {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #c49b49;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          margin-bottom: 26px;
          box-shadow: 0 0 0 7px rgba(196,155,73,0.10), 0 0 0 14px rgba(196,155,73,0.04);
          animation: badgePop 0.55s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .ty-badge svg { width: 21px; height: 21px; }

        @keyframes badgePop {
          from { transform: scale(0) rotate(-20deg); opacity: 0; }
          to   { transform: scale(1) rotate(0deg);   opacity: 1; }
        }

        .ty-heading {
          font-family: 'Michroma', sans-serif;
          font-size: clamp(32px, 4.5vw, 58px);
          font-weight: 400;
          color: #ffffff;
          line-height: 0.88;
          letter-spacing: -3px;
          margin-bottom: 28px;
          text-transform: uppercase;
          animation: fadeUp 0.55s 0.08s ease both;
        }

        .ty-body {
          font-size: 15px;
          color: rgba(255,255,255,0.50);
          line-height: 1.85;
          max-width: 390px;
          margin-bottom: 44px;
          animation: fadeUp 0.55s 0.18s ease both;
        }
        .ty-body strong { color: rgba(255,255,255,0.78); font-weight: 600; }
        .ty-br { display: block; }

        .ty-ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 56px;
          animation: fadeUp 0.55s 0.28s ease both;
        }

        .ty-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 28px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          transition: transform 0.22s ease, box-shadow 0.22s ease,
                      background 0.22s ease, color 0.22s ease, border-color 0.22s ease;
          white-space: nowrap;
          font-family: 'Montserrat', sans-serif;
        }

        .ty-btn--gold {
          background: #c49b49;
          color: #000;
          border: 2px solid #c49b49;
        }
        .ty-btn--gold:hover {
          background: transparent;
          color: #c49b49;
          transform: translateY(-3px);
          box-shadow: 0 14px 34px rgba(196,155,73,0.22);
        }

        .ty-btn--outline {
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.32);
        }
        .ty-btn--outline:hover {
          border-color: #c49b49;
          color: #c49b49;
          transform: translateY(-3px);
          box-shadow: 0 14px 34px rgba(196,155,73,0.10);
        }

        .ty-rule {
          width: 100%;
          max-width: 500px;
          height: 1px;
          background: linear-gradient(to right, rgba(255,255,255,0.14), transparent);
          margin-bottom: 40px;
          animation: fadeUp 0.55s 0.38s ease both;
        }

        .ty-stats {
          display: flex;
          align-items: center;
          gap: 0;
          animation: fadeUp 0.55s 0.48s ease both;
        }

        .ty-stat {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-right: 40px;
        }

        .ty-stat-num {
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.5px;
          font-family: 'Michroma', sans-serif;
        }
        .ty-stat-num.ty-gold { color: #c49b49; }

        .ty-stat-lbl {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 2.5px;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          font-family: 'Montserrat', sans-serif;
        }

        .ty-stat-sep {
          width: 1px;
          height: 42px;
          background: rgba(255,255,255,0.12);
          margin-right: 40px;
          flex-shrink: 0;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        @media (max-width: 640px) {
          .ty-inner   { padding: 56px 28px; }
          .ty-heading { letter-spacing: -2px; }
          .ty-stats   { flex-wrap: wrap; gap: 24px; }
          .ty-stat    { padding-right: 0; }
          .ty-stat-sep, .ty-corner-deco { display: none; }
          .ty-br      { display: none; }
        }
      `}</style>
    </>
  );
}
