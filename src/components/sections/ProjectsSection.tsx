"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { VideoModal } from "@/components/ui/VideoModal";
import { PROJECTS, ProjectItem } from "@/data/portfolioData";
import {
  Play,
  Trophy,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  Zap,
} from "lucide-react";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeVideoProject, setActiveVideoProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: "all", label: "All Projects (17)" },
    { id: "power", label: "Power & Solar" },
    { id: "iot", label: "IoT & Smart Systems" },
    { id: "automation", label: "Industrial & Domestic Automation" },
    { id: "robotics", label: "Robotics" },
    { id: "electronics", label: "Biomedical & Circuit Gaming" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative flex flex-col gap-12 py-12">
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
            <span>Hardware Lab &amp; Prototypes</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            17+ Featured Engineering Projects
          </h2>
        </div>
        <p className="text-sm text-[#94A3B8] max-w-lg leading-relaxed">
          Comprehensive portfolio of working hardware solutions, research awards, and embedded systems created by Md. Morsalin Khan Noyon.
        </p>
      </motion.div>

      {/* Category Pills Bar */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === cat.id
                ? "bg-[#00FF88] text-[#08090A] font-bold shadow-lg shadow-[#00FF88]/20"
                : "glass-pill text-[#94A3B8] hover:text-white"
            }`}
            data-cursor-hover
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="flex"
            >
              <GlassCard className="flex flex-col justify-between w-full p-6 group relative">
                {/* Champion Ribbon Badge */}
                {project.isChampion && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[11px] font-semibold">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>IST Champion 2025</span>
                  </div>
                )}

                <div className="flex flex-col gap-4">
                  {/* Category & Project Index */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                    <span className="text-[#00FF88]">
                      #{String(idx + 1).padStart(2, "0")} • {project.category.toUpperCase()}
                    </span>
                    {!project.isChampion && project.featured && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px]">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#00FF88] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#64748B] font-mono mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Hardware Components Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.keyComponents.map((comp, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveVideoProject(project)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.05] hover:bg-[#00FF88]/15 border border-white/10 hover:border-[#00FF88]/40 text-xs font-medium text-white transition-all group/btn"
                    data-cursor-hover
                    data-cursor-text="Video"
                  >
                    <Play className="w-3.5 h-3.5 text-[#00FF88] fill-current group-hover/btn:scale-110 transition-transform" />
                    <span>Watch Video Demo</span>
                  </button>

                  {project.youtubeUrl && (
                    <a
                      href={project.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-[#94A3B8] hover:text-white hover:bg-white/[0.08] transition-colors"
                      title="Open YouTube Link"
                      data-cursor-hover
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Video Modal Component */}
      <VideoModal
        isOpen={Boolean(activeVideoProject)}
        onClose={() => setActiveVideoProject(null)}
        videoTitle={activeVideoProject?.title || ""}
        youtubeId={activeVideoProject?.youtubeId}
        youtubeUrl={activeVideoProject?.youtubeUrl}
      />
    </section>
  );
}
