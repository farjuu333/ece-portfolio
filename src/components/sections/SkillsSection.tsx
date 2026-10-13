"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import {
  Zap,
  Cpu,
  Network,
  Wrench,
  CheckCircle2,
  Sparkles,
  Car,
  Users,
  Code,
} from "lucide-react";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categoryIcons: Record<string, React.ElementType> = {
    electrical: Zap,
    electronics: Cpu,
    "programming-networking": Code,
    tools: Wrench,
    driving: Car,
    "soft-skills": Users,
  };

  const filteredCategories =
    activeTab === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeTab);

  return (
    <section id="skills" className="relative flex flex-col gap-12 py-12">
      {/* Header */}
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
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Engineering &amp; Hardware Skills Matrix
          </h2>
        </div>
        <p className="text-sm text-[#94A3B8] max-w-lg leading-relaxed">
          From industrial 3-phase motor controlling and conduit wiring to embedded IoT sensors, CCNA networking, and auto-mechanics.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === "all"
              ? "bg-[#00FF88] text-[#08090A] font-bold shadow-lg shadow-[#00FF88]/20"
              : "glass-pill text-[#94A3B8] hover:text-white"
          }`}
          data-cursor-hover
        >
          All Domains (6)
        </button>
        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setActiveTab(cat.category)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === cat.category
                ? "bg-[#00FF88] text-[#08090A] font-bold shadow-lg shadow-[#00FF88]/20"
                : "glass-pill text-[#94A3B8] hover:text-white"
            }`}
            data-cursor-hover
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.category] || Wrench;
            return (
              <motion.div
                layout
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex"
              >
                <GlassCard
                  spotlightSize={340}
                  className="flex flex-col justify-between w-full p-6 sm:p-7 group"
                >
                  <div className="flex flex-col gap-5">
                    {/* Category Title & Icon */}
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-[#00FF88] group-hover:border-[#00FF88]/40 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#00FF88] transition-colors">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-[#94A3B8] font-mono">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Skills Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {cat.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                            skill.highlight
                              ? "bg-[#00FF88]/10 text-white border border-[#00FF88]/30 hover:bg-[#00FF88]/15"
                              : "bg-white/[0.03] text-slate-300 border border-white/[0.07] hover:border-white/20"
                          }`}
                          data-cursor-hover
                        >
                          <CheckCircle2
                            className={`w-3.5 h-3.5 ${
                              skill.highlight ? "text-[#00FF88]" : "text-[#64748B]"
                            }`}
                          />
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#64748B]">
                    <span>Field Verified</span>
                    <span className="font-mono text-emerald-400">Practical &amp; Academic</span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
