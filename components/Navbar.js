"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LeadFormModal from "./LeadFormModal";
import AdroitIcon from "./AdroitIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header style={{ boxShadow: scrolled ? "0 8px 24px rgba(0,0,0,0.25)" : "none" }}>
        <nav>
          <a href="https://www.adroitdesigns.in/" target="_blank" rel="noopener noreferrer" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <AdroitIcon width={48} height={48} />
            <span style={{ textTransform: 'uppercase', color: 'white', letterSpacing: '2px', fontWeight: '500' }}>ADROIT DESIGN</span>
          </a>

          <div className="nav-cta">
            <button className="btn solid" onClick={() => setIsModalOpen(true)}>
              Get a Quote
            </button>
            <button className="menu-btn" aria-label="Menu" onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        {/* Mobile Nav Overlay */}
        <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
          <Link href="#about" onClick={() => setIsOpen(false)}>Intro</Link>
          <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#why" onClick={() => setIsOpen(false)}>Why Adroit</Link>
          <Link href="#process" onClick={() => setIsOpen(false)}>Process</Link>
          <Link href="#faq" onClick={() => setIsOpen(false)}>FAQ</Link>
          <button
            className="btn solid"
            style={{ justifyContent: "center" }}
            onClick={() => {
              setIsOpen(false);
              setIsModalOpen(true);
            }}
          >
            Get a Quote
          </button>
        </div>
      </header>

      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
