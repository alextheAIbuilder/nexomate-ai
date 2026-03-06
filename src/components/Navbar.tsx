"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0e1a]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold gradient-text tracking-tight">NexomateAI</a>
        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">{l.label}</a>
          ))}
        </div>
        <a href="https://2026-03-06-lead-magnet.vercel.app" className="hidden md:inline-block px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-400 hover:to-accent-400 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-primary-500/20">
          Get Free Automation Audit
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-300">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0a0e1a]/95 backdrop-blur-xl border-b border-white/5">
          <div className="px-4 py-4 flex flex-col gap-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-gray-300 hover:text-white transition">{l.label}</a>
            ))}
            <a href="https://2026-03-06-lead-magnet.vercel.app" className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold text-center">
              Get Free Automation Audit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
