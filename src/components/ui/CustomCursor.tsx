"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);

  // Springs for smooth tracking
  const springConfigInner = { damping: 30, stiffness: 450, mass: 0.2 };
  const springConfigOuter = { damping: 25, stiffness: 220, mass: 0.5 };
  const springConfigSpotlight = { damping: 40, stiffness: 150, mass: 0.8 };

  const cursorX = useSpring(-100, springConfigInner);
  const cursorY = useSpring(-100, springConfigInner);

  const outerX = useSpring(-100, springConfigOuter);
  const outerY = useSpring(-100, springConfigOuter);

  const spotlightX = useSpring(-300, springConfigSpotlight);
  const spotlightY = useSpring(-300, springConfigSpotlight);

  useEffect(() => {
    // Check if the device has a fine pointer (mouse/trackpad), not touch
    const isPointerFine = window.matchMedia("(pointer: fine)").matches;
    if (!isPointerFine) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      cursorX.set(clientX);
      cursorY.set(clientY);

      outerX.set(clientX);
      outerY.set(clientY);

      spotlightX.set(clientX);
      spotlightY.set(clientY);

      if (!isVisible) setIsVisible(true);

      // Check if hovering over an interactive element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveElement = target.closest<HTMLElement>(
        "a, button, input, textarea, select, [role='button'], [data-cursor-hover], .glass-card"
      );

      if (interactiveElement) {
        setIsHovered(true);
        const text = interactiveElement.getAttribute("data-cursor-text");
        setCursorText(text || null);
      } else {
        setIsHovered(false);
        setCursorText(null);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, outerX, outerY, spotlightX, spotlightY, isVisible]);

  if (!mounted) return null;

  return (
    <>
      {/* Ambient Mouse Spotlight Follower */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-10 hidden md:block rounded-full will-change-transform"
        style={{
          x: spotlightX,
          y: spotlightY,
          translateX: "-50%",
          translateY: "-50%",
          width: 550,
          height: 550,
          background:
            "radial-gradient(circle, rgba(0, 255, 136, 0.07) 0%, rgba(16, 185, 129, 0.02) 40%, transparent 70%)",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.3 } }}
      />

      {/* Outer Glass Ring / Follower */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 hidden md:flex items-center justify-center rounded-full will-change-transform"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovered ? (cursorText ? 76 : 52) : 34,
          height: isHovered ? (cursorText ? 76 : 52) : 34,
          scale: isClicking ? 0.85 : 1,
          backgroundColor: isHovered
            ? "rgba(0, 255, 136, 0.12)"
            : "rgba(255, 255, 255, 0.02)",
          borderColor: isHovered
            ? "rgba(0, 255, 136, 0.85)"
            : "rgba(255, 255, 255, 0.2)",
          backdropFilter: isHovered ? "blur(4px)" : "blur(1px)",
          boxShadow: isHovered
            ? "0 0 25px rgba(0, 255, 136, 0.35), inset 0 0 10px rgba(0, 255, 136, 0.15)"
            : "none",
        }}
        transition={{
          width: { type: "spring", damping: 25, stiffness: 350 },
          height: { type: "spring", damping: 25, stiffness: 350 },
          scale: { type: "spring", damping: 20, stiffness: 400 },
          backgroundColor: { duration: 0.2 },
          borderColor: { duration: 0.2 },
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#00FF88] select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Neon Core Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block rounded-full will-change-transform bg-[#00FF88]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          opacity: isVisible ? (isHovered && !cursorText ? 0.4 : 1) : 0,
          boxShadow: "0 0 10px #00FF88, 0 0 20px #10B981",
        }}
        animate={{
          scale: isClicking ? 0.6 : isHovered ? 1.5 : 1,
        }}
        transition={{
          scale: { type: "spring", damping: 20, stiffness: 500 },
        }}
      />
    </>
  );
}
