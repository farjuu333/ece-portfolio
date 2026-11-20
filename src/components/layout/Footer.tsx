"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight, Cpu, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { PORTFOLIO_INFO } from "@/data/portfolioData";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#08090A]/90 backdrop-blur-2xl mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 text-[#00FF88]">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {PORTFOLIO_INFO.name}
              </span>
            </div>
            <p className="text-sm text-[#94A3B8] max-w-md leading-relaxed">
              Founder of <span className="text-white font-medium">Nexhardtech Power Ltd.</span> &amp; Electronics and Communication Engineering (ECE) Student at the Institute of Science &amp; Technology (IST), Dhaka (4th Year, 7th Semester). Specializing in power electronics, IoT automation, and research defense kits.
            </p>

            {/* Direct Contact Pills */}
            <div className="flex flex-col gap-2 pt-1 text-xs text-[#94A3B8] font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#00FF88]" />
                <span>{PORTFOLIO_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-[#00FF88]" />
                <span>{PORTFOLIO_INFO.phoneNumbers.join(" / ")}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-[#00FF88]" />
                <a
                  href={`mailto:${PORTFOLIO_INFO.email}`}
                  className="hover:text-[#00FF88] transition-colors"
                >
                  {PORTFOLIO_INFO.email}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PORTFOLIO_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#94A3B8] hover:text-[#00FF88] hover:border-[#00FF88]/40 transition-colors"
                aria-label="GitHub Profile"
                data-cursor-hover
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#94A3B8] hover:text-[#00FF88] hover:border-[#00FF88]/40 transition-colors"
                aria-label="LinkedIn Profile"
                data-cursor-hover
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_INFO.socials.youtube || "https://www.youtube.com/@Nexhardtech"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#94A3B8] hover:text-[#00FF88] hover:border-[#00FF88]/40 transition-colors flex items-center gap-1.5 text-xs font-mono"
                title="YouTube Channel"
                aria-label="YouTube Channel"
                data-cursor-hover
              >
                <FaYoutube className="w-4 h-4 text-[#00FF88]" />
                {/* <span className="hidden sm:inline">YouTube</span> */}
              </a>
              <a
                href={`mailto:${PORTFOLIO_INFO.email}`}
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#94A3B8] hover:text-[#00FF88] hover:border-[#00FF88]/40 transition-colors"
                aria-label="Email Noyon"
                data-cursor-hover
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#94A3B8]">
              <li>
                <Link href="#about-founder" className="hover:text-[#00FF88] transition-colors">
                  About &amp; Founder
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-[#00FF88] transition-colors">
                  Skills Matrix
                </Link>
              </li>
              <li>
                <Link href="#training-certifications" className="hover:text-[#00FF88] transition-colors">
                  Training &amp; Certifications
                </Link>
              </li>
              <li>
                <Link href="#achievements-volunteering" className="hover:text-[#00FF88] transition-colors">
                  Achievements &amp; Leadership
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-[#00FF88] transition-colors">
                  Featured Projects (17+)
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#00FF88] transition-colors">
                  Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Ventures & Institution */}
          <div>
            <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-white mb-4">
              Ventures &amp; Institution
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[#94A3B8]">
              <li className="flex flex-col">
                <span className="text-white font-medium flex items-center gap-1">
                  Nexhardtech Power Ltd. <ArrowUpRight className="w-3.5 h-3.5 text-[#00FF88]" />
                </span>
                <span className="text-xs text-[#64748B]">Founder &amp; Managing Director</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">Institute of Science &amp; Technology (IST)</span>
                <span className="text-xs text-[#64748B]">B.Sc in ECE (4th Year, 7th Semester)</span>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00FF88]" />
                  Open for Hardware Design &amp; R&amp;D
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© 2026 {PORTFOLIO_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Next.js 16 • Tailwind CSS • Framer Motion</span>
            <span className="text-[#00FF88]">●</span>
            <span>Rise Together Glassmorphism UI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
