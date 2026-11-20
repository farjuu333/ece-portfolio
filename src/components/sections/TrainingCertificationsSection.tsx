"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { TRAINING_CERTIFICATIONS } from "@/data/portfolioData";
import {
  ShieldCheck,
  Network,
  Cpu,
  Award,
  Sparkles,
  CheckCircle2,
  Calendar,
  Building,
  Sun,
  ExternalLink,
} from "lucide-react";

export function TrainingCertificationsSection() {
  const categoryIcons: Record<string, React.ElementType> = {
    technical: ShieldCheck,
    networking: Network,
    robotics: Cpu,
    solar: Sun,
    general: Award,
  };

  return (
    <section id="training-certifications" className="relative flex flex-col gap-12 py-12">
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
            <span>Vocational &amp; Technical Qualifications</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Training &amp; Professional Certifications
          </h2>
        </div>
        <p className="text-sm text-[#94A3B8] max-w-lg leading-relaxed">
          National Skills Development Authority (NSDA) government certified, Cisco CCNA networking, and specialized robotics camp credentials.
        </p>
      </motion.div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TRAINING_CERTIFICATIONS.map((item, idx) => {
          const Icon = categoryIcons[item.category] || Award;
          const isNsda = item.levelBadge?.includes("NSDA");
          const isCcna = item.levelBadge?.includes("CCNA");

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="flex"
            >
              <GlassCard
                spotlightSize={340}
                className="flex flex-col justify-between w-full p-6 sm:p-7 group relative"
              >
                <div className="flex flex-col gap-4">
                  {/* Top Bar with Icon & Duration Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`p-3 rounded-xl border ${isNsda
                          ? "bg-[#00FF88]/10 border-[#00FF88]/30 text-[#00FF88]"
                          : isCcna
                            ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                            : "bg-white/[0.04] border-white/10 text-emerald-400"
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400">
                        {item.levelBadge}
                      </span>
                      {item.credentialId && (
                        <span className="text-[10px] font-mono text-[#64748B] mt-1">
                          {item.credentialId}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#00FF88] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium mt-1.5">
                      <Building className="w-3.5 h-3.5 text-[#00FF88]" />
                      <span>{item.institution}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#64748B] mt-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Key Training Topics */}
                  <div className="flex flex-col gap-1.5 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
                      Core Competencies:
                    </span>
                    <ul className="flex flex-col gap-1 text-xs text-slate-300">
                      {item.topics.map((t, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF88] shrink-0 mt-0.5" />
                          <span className="leading-tight">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {item.certificateUrl ? (
                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-5 mt-5 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#94A3B8] hover:border-white/20 transition-all group/cert"
                    title={`View ${item.title} Certificate`}
                    data-cursor-hover
                    data-cursor-text="Certificate"
                  >
                    <span className="text-slate-400 group-hover/cert:text-slate-200 transition-colors">
                      Official Certification
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#00FF88] px-2.5 py-1 rounded-md bg-[#00FF88]/10 border border-[#00FF88]/20 group-hover/cert:bg-[#00FF88]/20 group-hover/cert:border-[#00FF88]/40 transition-all shadow-sm">
                      <span>Verified</span>
                      <span className="text-[#00FF88]/40">•</span>
                      <span className="text-slate-200 group-hover/cert:text-white flex items-center gap-1 font-sans font-medium">
                        <span>
                          View<span className="hidden sm:inline"> Certificate</span>
                        </span>
                        <ExternalLink className="w-3 h-3 group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-transform shrink-0" />
                      </span>
                    </span>
                  </a>
                ) : (
                  <div className="pt-5 mt-5 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#94A3B8]">
                    <span className="text-slate-400">Official Certification</span>
                    <span className="font-mono text-[11px] text-[#00FF88]">Verified</span>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
