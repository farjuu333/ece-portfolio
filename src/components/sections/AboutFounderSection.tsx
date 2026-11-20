"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { PORTFOLIO_INFO } from "@/data/portfolioData";
import {
  Zap,
  GraduationCap,
  Sparkles,
  Layers,
  Sun,
  BookOpen,
  Boxes,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Target,
  Award,
} from "lucide-react";

export function AboutFounderSection() {
  const nexhardServices = [
    {
      title: "Electrical, Solar & Electronic Supplies",
      desc: "Authentic microcontrollers, high-power semiconductors, solar cells, sensor modules, and passive components for research & defense builds.",
      icon: Boxes,
    },
    {
      title: "University Defense Resources & Thesis Books",
      desc: "Complete hardware build packages, circuit schematics, thesis books, project manuals, and step-by-step technical guidance.",
      icon: BookOpen,
    },
    {
      title: "Hybrid Solar Power Integration",
      desc: "Engineering custom photovoltaic conversion systems, charge controllers (PWM/MPPT), and clean energy backup infrastructure.",
      icon: Sun,
    },
    {
      title: "Power Systems & Conduit Motor Wiring",
      desc: "Real-world execution in 3-phase industrial motor control (DOL, Star-Delta, Reverse & Forward), distribution panels, and conduit pipe wiring.",
      icon: Layers,
    },
  ];

  return (
    <section id="about-founder" className="relative flex flex-col gap-12 py-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6"
      >
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#00FF88] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile &amp; Career Vision</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Engineering Rigor &amp; Hardware Entrepreneurship
          </h2>
        </div>

      </motion.div>

      {/* Career Objective Feature Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <GlassCard className="p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-3.5 rounded-2xl bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] shrink-0">
              <Target className="w-8 h-8" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00FF88] font-bold">
                  Career Objective
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs text-slate-400 font-mono">
                  Hardware Design Engineer Aspirant
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {PORTFOLIO_INFO.careerObjective}
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Main Grid: Nexhardtech Power Ltd. + Academic History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Nexhardtech Power Ltd. Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
          className="lg:col-span-7 flex"
        >
          <GlassCard className="flex flex-col justify-between w-full p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#00FF88]/10 border border-[#00FF88]/25 text-[#00FF88]">
                    <Zap className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#00FF88] uppercase tracking-widest font-bold">
                      Founder &amp; Managing Director
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                      Nexhardtech Power Ltd.
                    </h3>
                    <p className="text-xs text-[#94A3B8] font-mono">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-emerald-400">
                  Established Venture
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Founded and directed by <strong className="text-white">Md. Morsalin Khan Noyon</strong>, <strong className="text-white">Nexhardtech Power Ltd., Dhaka</strong> provides comprehensive solutions for electrical, solar, and electronic project supplies, research materials, university defense project resources, thesis books, project manuals, and technical guidance.
              </p>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm text-slate-300 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#00FF88]" />
                  <span>Real-World Engineering Execution</span>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Specialized execution in industrial power systems, hybrid solar power integration, 3-phase motor control distribution (DOL, Star-Delta, Reverse &amp; Forward), and conduit pipe wiring for factories and research labs.
                </p>
              </div>

              {/* Service Capabilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {nexhardServices.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/[0.025] border border-white/[0.06] hover:border-[#00FF88]/30 transition-colors flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-2 text-white font-medium text-sm">
                        <Icon className="w-4 h-4 text-[#00FF88]" />
                        <span>{service.title}</span>
                      </div>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs text-[#94A3B8]">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
                Supplying defense kits &amp; engineering thesis teams nationwide
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-[#00FF88] hover:underline font-mono"
                data-cursor-hover
              >
                <span>Request Supplies &amp; Guidance</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </GlassCard>
        </motion.div>

        {/* Academic Journey: 3-Tier Education Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.01 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <GlassCard className="flex flex-col justify-between h-full p-8 relative overflow-hidden group">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#00FF88]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  4th Year • 7th Sem
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider">
                  Academic Milestones
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
                  Educational Background
                </h3>
              </div>

              {/* Education Timeline Cards */}
              <div className="flex flex-col gap-4">
                {/* 1. B.Sc (Honours) ECE */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#00FF88]/30 transition-colors flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-sm text-white">
                      B.Sc (Honours), ECE
                    </span>
                    <span className="text-[11px] font-mono text-[#00FF88]">
                      2022 – Running
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Institute of Science and Technology (IST), National University
                  </p>
                  <p className="text-[11px] text-[#94A3B8] font-mono">
                    4th Year, 7th Semester (Department 1st in 1st Semester)
                  </p>
                </div>

                {/* 2. HSC Science */}
                <div className="p-4 rounded-xl bg-white/[0.025] border border-white/[0.06] hover:border-white/20 transition-colors flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-sm text-white">
                      Higher Secondary Certificate (HSC)
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      2021
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Daulatpur College, Kushtia
                  </p>
                  <p className="text-[11px] text-[#94A3B8] font-mono">
                    Science Group
                  </p>
                </div>

                {/* 3. SSC Science */}
                <div className="p-4 rounded-xl bg-white/[0.025] border border-white/[0.06] hover:border-white/20 transition-colors flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-sm text-white">
                      Secondary School Certificate (SSC)
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      2019
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Daulatpur Government Pilot Model High School, Kushtia
                  </p>
                  <p className="text-[11px] text-[#94A3B8] font-mono">
                    Science Group
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#94A3B8]">
              <span>Institute of Science and Technology</span>
              <span className="font-mono text-[#00FF88]">Active Scholar</span>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
