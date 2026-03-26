"use client";

import { useState, useEffect } from "react";

const CALENDAR_LINK = "https://calendar.app.google/KjVPwqAM93d1CuiD7";

const navLinks = [
  { label: "Calcolatore", href: "#calcolatore" },
  { label: "Soluzioni", href: "#soluzioni" },
  { label: "Chi Sono", href: "#chi-sono" },
  { label: "Contatti", href: "#contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNav(e, "#hero")}
          className="font-display text-lg text-[#faf8f5] tracking-tight"
        >
          Broker Automazioni
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-sm text-[#e2e0dc]/70 hover:text-[#f59e0b] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CALENDAR_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f59e0b] hover:bg-[#d97706] text-[#0f172a] font-semibold text-sm px-5 py-2 rounded-lg transition-colors duration-200"
          >
            Prenota Chiamata
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#e2e0dc] p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a]/98 backdrop-blur-xl border-t border-white/5 px-4 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-[#e2e0dc]/70 hover:text-[#f59e0b] transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CALENDAR_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f59e0b] hover:bg-[#d97706] text-[#0f172a] font-semibold text-center py-3 rounded-lg transition-colors duration-200"
          >
            Prenota Chiamata
          </a>
        </div>
      )}
    </nav>
  );
}
