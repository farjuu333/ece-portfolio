"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  Sparkles,
  Trophy,
  Mail,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { HERO_BADGES } from "@/data/portfolioData";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-6 sm:pt-12 pb-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headlines, Badges & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
          {/* Top Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-xs text-[#94A3B8]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF88] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF88]"></span>
            </span>
            <span className="font-mono text-slate-200">
              Founder &amp; ECE Hardware Specialist
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#00FF88]" />
          </motion.div>

          {/* Persona & Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <span className="font-mono text-xs sm:text-sm tracking-widest text-[#00FF88] uppercase font-bold">
              Md. Morsalin Khan Noyon
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Engineering Hardware,{" "}
              <span className="text-gradient-neon neon-glow block sm:inline">
                Embedded Systems
              </span>{" "}
              &amp; IoT Innovations
            </h1>
          </motion.div>

          {/* Narrative Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-xl"
          >
            Electronics and Communication Engineering (ECE) student at the{" "}
            <strong className="text-white">Institute of Science and Technology (IST)</strong> and Founder of{" "}
            <strong className="text-white">Nexhardtech Power Ltd.</strong> Specializing in real-world power systems, industrial 3-phase motor controlling, hybrid solar integration, embedded microcontrollers, and university research defense kits.
          </motion.p>

          {/* All 9 Badges Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-2 pt-1"
          >
            {HERO_BADGES.map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:border-[#00FF88]/40 hover:text-white transition-colors"
                data-cursor-hover
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#00FF88]" />
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Quick CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-3"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#projects"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl neon-button text-sm font-semibold tracking-wide shadow-xl shadow-emerald-500/20"
                data-cursor-hover
                data-cursor-text="Projects"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>Explore Projects (17+)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl neon-button-outline glass-panel text-sm font-medium tracking-wide"
                data-cursor-hover
                data-cursor-text="Contact"
              >
                <Mail className="w-4 h-4 text-[#00FF88]" />
                <span>Contact Me</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Profile Image Container with Glowing Gradient Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group/avatar">
            {/* Ambient Background Glowing Orb */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#10B981] via-[#00FF88]/50 to-emerald-400/20 blur-xl opacity-60 group-hover/avatar:opacity-85 transition-opacity" />

            {/* Glowing Gradient Frame */}
            <div className="relative p-1.5 rounded-3xl bg-gradient-to-tr from-[#10B981] via-[#00FF88] to-emerald-300 shadow-2xl">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-[22px] overflow-hidden bg-[#0D0F12]">
                <Image
                  src="/images/noyon.jpeg"
                  alt="Md. Morsalin Khan Noyon - Founder & ECE Engineer"
                  fill
                  priority
                  sizes="(max-width: 768px) 320px, 400px"
                  className="object-cover object-top transition-transform duration-700 group-hover/avatar:scale-105"
                />

                {/* Subtle Inner Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090A]/90 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-panel border border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white font-heading">
                      Md. Morsalin Khan Noyon
                    </span>
                    <span className="text-[10px] text-[#00FF88] font-mono">
                      Founder @ Nexhardtech Power Ltd.
                    </span>
                  </div>
                  <span className="p-1.5 rounded-lg bg-emerald-500/10 text-[#00FF88]">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Floating Pill: 1st Semester Dept. 1st */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl glass-panel border border-amber-400/30 bg-[#0D0F12]/90 shadow-xl flex items-center gap-2"
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono text-amber-300 font-bold">
                  Dept. 1st • Semester 1
                </span>
                <span className="text-[9px] text-slate-300">IST ECE Cohort</span>
              </div>
            </motion.div>

            {/* Floating Pill: Exhibition Champion */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-4 -right-2 sm:-right-4 px-3.5 py-2 rounded-xl glass-panel border border-[#00FF88]/40 bg-[#0D0F12]/90 shadow-xl flex items-center gap-2"
            >
              <Cpu className="w-4 h-4 text-[#00FF88]" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono text-[#00FF88] font-bold">
                  Exhibition Champion
                </span>
                <span className="text-[9px] text-slate-300">ECO CHARGER 2025</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Quick Metrics Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-16"
      >
        <GlassCard
          spotlightSize={220}
          className="p-4 rounded-2xl flex flex-col items-center text-center"
          whileHover={{ scale: 1.03 }}
        >
          <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#00FF88]">
            17+
          </span>
          <span className="text-xs text-[#94A3B8] mt-1 font-mono">
            Hardware Projects Built
          </span>
        </GlassCard>

        <GlassCard
          spotlightSize={220}
          className="p-4 rounded-2xl flex flex-col items-center text-center"
          whileHover={{ scale: 1.03 }}
        >
          <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            Level-3
          </span>
          <span className="text-xs text-[#94A3B8] mt-1 font-mono">
            NSDA Certified (EIM)
          </span>
        </GlassCard>

        <GlassCard
          spotlightSize={220}
          className="p-4 rounded-2xl flex flex-col items-center text-center"
          whileHover={{ scale: 1.03 }}
        >
          <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#00FF88]">
            Rank 1
          </span>
          <span className="text-xs text-[#94A3B8] mt-1 font-mono">
            1st Sem Dept. Leader @ IST
          </span>
        </GlassCard>

        <GlassCard
          spotlightSize={220}
          className="p-4 rounded-2xl flex flex-col items-center text-center"
          whileHover={{ scale: 1.03 }}
        >
          <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white flex items-center gap-1">
            <Trophy className="w-5 h-5 text-amber-400" /> Champ
          </span>
          <span className="text-xs text-[#94A3B8] mt-1 font-mono">
            IST Exhibition 2025
          </span>
        </GlassCard>
      </motion.div>
    </section>
  );
}
