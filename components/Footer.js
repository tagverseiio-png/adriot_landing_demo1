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
            <p>+91 90000 00000</p>
            <p>hello@adroitdesign.example</p>
            <p>Chennai, Tamil Nadu, India</p>
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
