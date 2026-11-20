"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ACHIEVEMENTS, VOLUNTEER_EXPERIENCES } from "@/data/portfolioData";
import {
  Trophy,
  Medal,
  ShieldCheck,
  Cpu,
  Camera,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  Award,
  Users,
} from "lucide-react";

export function AchievementsVolunteeringSection() {
  const achievementIcons: Record<string, React.ElementType> = {
    Trophy,
    Medal,
    ShieldCheck,
  };

  const volunteerIcons: Record<string, React.ElementType> = {
    Cpu,
    Camera,
    HeartHandshake,
  };

  return (
    <section id="achievements-volunteering" className="relative flex flex-col gap-16 py-12">
      {/* 1. Honors & Achievements */}
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Honors &amp; Recognition</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Major Achievements &amp; Academic Honors
            </h2>
          </div>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = achievementIcons[item.iconName] || Trophy;
            const isGold = item.id === "champion-exhibition-2025" || item.id === "ist-rank-1";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex"
              >
                <GlassCard
                  spotlightSize={340}
                  className="flex flex-col justify-between w-full p-6 sm:p-7 group relative"
                >
                  {isGold && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-[50px] pointer-events-none" />
                  )}

                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`p-3 rounded-xl border ${isGold
                          ? "bg-amber-400/10 border-amber-400/30 text-amber-300"
                          : "bg-[#00FF88]/10 border-[#00FF88]/30 text-[#00FF88]"
                          }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-xs font-mono px-3 py-1 rounded-full border ${isGold
                          ? "bg-amber-400/10 border-amber-400/25 text-amber-300"
                          : "bg-white/5 border-white/10 text-emerald-400"
                          }`}
                      >
                        {item.highlight}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#00FF88] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-300 font-medium mt-1">
                        {item.organization}
                      </p>
                      {item.referenceId && (
                        <p className="text-[11px] font-mono text-[#00FF88] mt-1">
                          {item.referenceId}
                        </p>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {item.details}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#94A3B8]">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 ${isGold ? "text-amber-400" : "text-[#00FF88]"
                          }`}
                      />
                      Verified Honor
                    </span>

                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 2. Volunteering & Leadership */}
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00FF88] uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>Campus &amp; Social Impact</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Volunteering &amp; Club Leadership
            </h2>
          </div>
          <p className="text-sm text-[#94A3B8] max-w-lg leading-relaxed">
            Leading robotics training, campus photography media, and community rural development initiatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VOLUNTEER_EXPERIENCES.map((item, idx) => {
            const Icon = volunteerIcons[item.iconName] || Users;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex"
              >
                <GlassCard
                  spotlightSize={340}
                  className="flex flex-col justify-between w-full p-6 sm:p-7 group"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#00FF88]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400">
                        {item.duration}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#00FF88] transition-colors leading-snug">
                        {item.role}
                      </h3>
                      <p className="text-xs text-emerald-400 font-medium mt-0.5">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 pt-1">
                      {item.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF88] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#94A3B8]">
                    <span>Leadership &amp; Mentorship</span>
                    <span className="font-mono text-[#00FF88]">Active</span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
