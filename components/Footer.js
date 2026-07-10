import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="#top" className="logo">
              Adroit <span>Design</span>
            </Link>
            <p>
              Corporate &amp; commercial interior design and turnkey project execution — from
              blueprint to built space, under one team.
            </p>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <Link href="#services">Corporate Office Interiors</Link>
            <Link href="#services">Commercial Interior Design</Link>
            <Link href="#services">Turnkey Fit-Outs</Link>
            <Link href="#services">Renovation &amp; Refurbishment</Link>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <Link href="#about">About Adroit Design</Link>
            <Link href="#projects">Our Projects</Link>
            <Link href="#why">Why Choose Us</Link>
            <Link href="#faq">FAQs</Link>
          </div>
          <div className="footer-col">
            <h5>Get in Touch</h5>
            <p style={{ marginBottom: "16px" }}>+91 99400 64343 &nbsp;|&nbsp; 08041649813</p>
            <p style={{ marginBottom: "4px" }}>info@adroitdesigns.in</p>
            <p style={{ marginBottom: "20px" }}>fm@adroitdesigns.in</p>
            <span className="footer-office-label">Corporate Office (Chennai)</span>
            <p style={{ marginBottom: "20px" }}>No 8, MCN Nagar Extension, Thoraipakkam, Chennai - 97.</p>
            <span className="footer-office-label">Branch Office 1 (Bengaluru)</span>
            <p>SFD, P DOT G EMERALD, 16th A Cross Rd, Karuna Nagar, Electronic City Phase I, Doddathoguru, Bengaluru - 560100, Karnataka, India</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Adroit Design. All rights reserved.</span>
          <span>Corporate &amp; Commercial Interior Design · Turnkey Projects</span>
        </div>
        <div className="footer-seo">
          Adroit Design is a Chennai-based corporate and commercial interior design company offering
          turnkey interior fit-out services for offices, IT campuses, retail stores, showrooms,
          restaurants and clinics. Our services span office interior design, commercial interior
          design, workspace planning, furniture design and full turnkey project execution — covering
          civil work, electrical, HVAC, flooring and false ceiling — delivered by one accountable
          in-house team from concept to handover.
        </div>
      </div>
    </footer>
  );
}
