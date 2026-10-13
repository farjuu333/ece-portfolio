"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  enableSpotlight?: boolean;
  spotlightSize?: number;
  spotlightColor?: string;
  spotlightBorderColor?: string;
  useOverlayBlend?: boolean;
}

export function GlassCard({
  children,
  className,
  enableSpotlight = true,
  spotlightSize = 350,
  spotlightColor = "rgba(0, 255, 136, 0.22)",
  spotlightBorderColor = "rgba(0, 255, 136, 0.5)",
  useOverlayBlend = true,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!enableSpotlight || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty("--mouse-x", `${x}px`);
      cardRef.current.style.setProperty("--mouse-y", `${y}px`);

      if (onMouseMove) onMouseMove(e);
    },
    [enableSpotlight, onMouseMove]
  );

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setIsHovered(true);
      if (onMouseEnter) onMouseEnter(e);
    },
    [onMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setIsHovered(false);
      if (onMouseLeave) onMouseLeave(e);
    },
    [onMouseLeave]
  );

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-2xl overflow-hidden glass-card p-6 transition-all duration-300 group/card",
        className
      )}
      {...props}
    >
      {/* 1. Neon Border Spotlight Reveal */}
      {enableSpotlight && (
        <div
          className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 will-change-transform z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(${spotlightSize * 0.75}px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${spotlightBorderColor} 0%, rgba(16, 185, 129, 0.15) 35%, transparent 70%)`,
            maskImage:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskImage:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      )}

      {/* 2. Glowing Round Green Aura (mix-blend-mode: overlay) */}
      {enableSpotlight && useOverlayBlend && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 will-change-transform z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            mixBlendMode: "overlay",
            background: `radial-gradient(${spotlightSize}px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${spotlightColor} 0%, rgba(16, 185, 129, 0.08) 45%, transparent 80%)`,
          }}
        />
      )}

      {/* 3. Soft Ambient Radial Gradient Spotlight */}
      {enableSpotlight && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 will-change-transform z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(${spotlightSize * 0.9}px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 255, 136, 0.07) 0%, rgba(16, 185, 129, 0.02) 40%, transparent 75%)`,
          }}
        />
      )}

      {/* Card Content Wrapper */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </motion.div>
  );
}
