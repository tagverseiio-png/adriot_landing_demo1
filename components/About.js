export default function About() {
  return (
    <section className="about" id="trusted" style={{ textAlign: "center" }}>
      <div className="wrap">
        <p className="eyebrow" style={{ justifyContent: "center" }}>TRUSTED BY LEADING BUSINESSES</p>
        <p style={{ maxWidth: "600px", margin: "0 auto 40px", fontSize: "16px", color: "var(--ink-dim)" }}>
          Adroit partners with Corporates, Institutions and Businesses to design and deliver high-quality workplaces and commercial environments.
        </p>
        <div className="client-logos" style={{ display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap", opacity: 0.6 }}>
          {/* [CLIENT LOGOS] */}
          <div>[CLIENT LOGOS]</div>
        </div>
      </div>
    </section>
  );
}
