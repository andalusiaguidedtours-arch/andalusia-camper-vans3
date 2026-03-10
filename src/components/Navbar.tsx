"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/campers", label: "The Carabus" },
  { href: "/road-trips", label: "Road Trips" },
  { href: "/andalusia", label: "Andalusia" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Book Now" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/97 backdrop-blur-md border-b border-sand-200 py-3 shadow-sm"
          : "bg-charcoal/60 backdrop-blur-sm py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className={`font-display text-xl font-light tracking-wide transition-colors ${scrolled ? "text-charcoal" : "text-cream"}`}>
            Andalusia
          </span>
          <span className="font-mono text-[10px] tracking-widest text-terra-500 uppercase mt-0.5">
            Camper Vans
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-light tracking-wide transition-colors link-underline ${
                scrolled ? "text-charcoal/70 hover:text-charcoal" : "text-cream/80 hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Burger */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-terra-500 text-cream text-sm font-body font-medium tracking-wide rounded-sm hover:bg-terra-600 transition-colors"
          >
            Book Now
          </Link>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px transition-all ${scrolled ? "bg-charcoal" : "bg-cream"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px transition-all ${scrolled ? "bg-charcoal" : "bg-cream"} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px transition-all ${scrolled ? "bg-charcoal" : "bg-cream"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-sand-200 px-6 py-6">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-body text-base tracking-wide ${
                  link.label === "Book Now" ? "text-terra-500 font-medium" : "text-charcoal/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
