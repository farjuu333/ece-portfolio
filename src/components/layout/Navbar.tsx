"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Zap } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About & Founder", href: "#about-founder" },
  { name: "Skills Matrix", href: "#skills" },
  { name: "Training & Certifications", href: "#training-certifications" },
  { name: "Achievements & Volunteering", href: "#achievements-volunteering" },
  { name: "Projects (17+)", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "py-2.5 glass-nav" : "py-4 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <Link
            href="#home"
            className="flex items-center gap-3 group"
            data-cursor-hover
            data-cursor-text="Home"
          >
            <div className="relative">
              <Image
                src="/images/noyon.jpeg"
                alt="Md. Morsalin Khan Noyon"
                width={36}
                height={36}
                priority
                className="w-9 h-9 rounded-full object-cover border border-slate-700 group-hover:border-[#00FF88]/50 transition-colors"
              />
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF88] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FF88]"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-wide text-white group-hover:text-emerald-400 transition-colors">
                Md. Morsalin Khan Noyon
              </span>
              <span className="text-[11px] text-[#94A3B8] flex items-center gap-1 font-mono">
                Founder, <span className="text-[#00FF88]">Nexhardtech</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors rounded-full hover:bg-white/[0.05]"
                data-cursor-hover
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action & Status Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF88] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF88]"></span>
              </span>
              <span className="font-medium tracking-wide">ECE @ IST</span>
            </div>

            <Link
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full neon-button transition-transform active:scale-95"
              data-cursor-hover
              data-cursor-text="Connect"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-b border-white/10 bg-[#08090A]/95 backdrop-blur-2xl px-4 py-6"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 w-fit mb-2">
                <Zap className="w-3.5 h-3.5 text-[#00FF88]" />
                <span>Founder of Nexhardtech Power Ltd. | ECE IST</span>
              </div>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#94A3B8] hover:text-white hover:bg-white/[0.05] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl neon-button"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
