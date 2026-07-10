"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={{ boxShadow: scrolled ? "0 8px 24px rgba(0,0,0,0.25)" : "none" }}>
      <nav>
        <Link href="#top" className="logo">
          Adroit <span>Design</span>
        </Link>
        <div className="nav-links">
          <Link href="#about">Intro</Link>
          <Link href="#services">Services</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#why">Why Adroit</Link>
          <Link href="#process">Process</Link>
          <Link href="#faq">FAQ</Link>
        </div>
        <div className="nav-cta">
          <Link href="#contact" className="btn solid">
            Get a Quote
          </Link>
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
        <Link href="#contact" onClick={() => setIsOpen(false)} className="btn solid" style={{ justifyContent: "center" }}>
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
