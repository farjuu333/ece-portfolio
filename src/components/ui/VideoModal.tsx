"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Play, Image as ImageIcon } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle: string;
  youtubeId?: string;
  youtubeUrl?: string;
  videoLink?: string;
  imageLink?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  videoTitle,
  youtubeId,
  youtubeUrl,
  videoLink,
  imageLink,
}: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const effectiveYoutubeUrl = videoLink || youtubeUrl;
  const effectiveYoutubeId =
    youtubeId ||
    (effectiveYoutubeUrl
      ? effectiveYoutubeUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)?.[1]
      : undefined);

  const isImageMode = !effectiveYoutubeId && Boolean(imageLink);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop with dark blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#08090A]/85 backdrop-blur-xl"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl rounded-2xl glass-panel border border-white/15 bg-[#0D0F12]/95 shadow-2xl overflow-hidden z-10 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[#00FF88]">
                  {isImageMode ? (
                    <ImageIcon className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 fill-current" />
                  )}
                </div>
                <div>
                  <h3
                    id="video-modal-title"
                    className="font-heading text-base sm:text-lg font-bold text-white line-clamp-1"
                  >
                    {videoTitle}
                  </h3>
                  <p className="text-xs text-[#94A3B8]">
                    {isImageMode
                      ? "Hardware Showcase & Documentation"
                      : "Hardware Demonstration & Working Prototype"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {(effectiveYoutubeUrl || imageLink) && (
                  <a
                    href={effectiveYoutubeUrl || imageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
                    title={effectiveYoutubeUrl ? "Open on YouTube" : "Open Original Image"}
                    aria-label={effectiveYoutubeUrl ? "Open on YouTube" : "Open Original Image"}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Player or Image Embed */}
            <div className="relative w-full aspect-video bg-black/90 flex items-center justify-center overflow-hidden">
              {effectiveYoutubeId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${effectiveYoutubeId}?autoplay=1&rel=0`}
                  title={videoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : isImageMode && imageLink ? (
                <div className="relative w-full h-full flex items-center justify-center bg-black/50 p-4">
                  <img
                    src={imageLink}
                    alt={videoTitle}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
                  />
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center gap-3">
                  <Play className="w-12 h-12 text-[#00FF88]/40" />
                  <p className="text-sm text-slate-300">
                    Preview initializing for {videoTitle}.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer info */}
            <div className="px-6 py-3.5 bg-white/[0.02] border-t border-white/10 flex items-center justify-between text-xs text-[#94A3B8]">
              <span>Md. Morsalin Khan Noyon • Engineering Portfolio</span>
              <span className="font-mono text-[#00FF88]">Nexhardtech Power Ltd.</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
