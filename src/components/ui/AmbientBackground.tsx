"use client";

import React from "react";
import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#08090A]">
      {/* Radial Ambient Orbs */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#00FF88]/[0.06] blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, 15, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[10%] left-[25%] w-[550px] h-[550px] rounded-full bg-emerald-600/[0.07] blur-[140px]"
      />

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-grid-tech opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-vignette opacity-80" />
    </div>
  );
}
