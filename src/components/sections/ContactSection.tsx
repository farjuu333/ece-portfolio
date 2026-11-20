"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { PORTFOLIO_INFO } from "@/data/portfolioData";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Thesis Project / Hardware Consultation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `*New Inquiry from Portfolio*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}
Subject: ${formData.subject}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/8801777045300?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "Thesis Project / Hardware Consultation",
      message: "",
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative flex flex-col gap-12 py-12">
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
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Let&apos;s Build Hardware Solutions Together
          </h2>
        </div>
        <p className="text-sm text-[#94A3B8] max-w-lg leading-relaxed">
          Reach out for hardware design roles, Nexhardtech component inquiries, university thesis consultation, or specialized ECE research partnerships.
        </p>
      </motion.div>

      {/* Grid: Contact Info Cards + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Information & Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Location Card */}
          <GlassCard className="p-6 flex flex-col gap-4 group" whileHover={{ scale: 1.02 }}>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#00FF88]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#94A3B8] uppercase">
                  Address
                </span>
                <h3 className="font-heading text-lg font-bold text-white">
                  {PORTFOLIO_INFO.address}
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Based in Dhaka. Available for in-person hardware testing, university thesis lab consultations, and component deliveries.
            </p>
          </GlassCard>

          {/* Direct Phone Numbers Card */}
          <GlassCard className="p-6 flex flex-col gap-4 group" whileHover={{ scale: 1.02 }}>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#00FF88]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#94A3B8] uppercase">
                  Direct Phone Lines
                </span>
                <h3 className="font-heading text-lg font-bold text-white">
                  Call or WhatsApp
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-1 font-mono text-sm">
              <a
                href={`tel:${PORTFOLIO_INFO.phoneNumbers[0]}`}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-[#00FF88]/40 text-slate-200 hover:text-[#00FF88] transition-colors"
                data-cursor-hover
              >
                <span>+880 {PORTFOLIO_INFO.phoneNumbers[0]}</span>
                <span className="text-[11px] text-[#00FF88]">Primary</span>
              </a>
              <a
                href={`tel:${PORTFOLIO_INFO.phoneNumbers[1]}`}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-[#00FF88]/40 text-slate-200 hover:text-[#00FF88] transition-colors"
                data-cursor-hover
              >
                <span>+880 {PORTFOLIO_INFO.phoneNumbers[1]}</span>
                <span className="text-[11px] text-emerald-400">Secondary</span>
              </a>
            </div>
          </GlassCard>

          {/* Email & Profiles */}
          <GlassCard className="p-6 flex flex-col gap-4 group" whileHover={{ scale: 1.02 }}>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#00FF88]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono text-[#94A3B8] uppercase">
                  Official Email
                </span>
                <a
                  href={`mailto:${PORTFOLIO_INFO.email}`}
                  className="font-heading text-base font-bold text-white hover:text-[#00FF88] transition-colors line-clamp-1"
                >
                  {PORTFOLIO_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-white/[0.08]">
              <span className="text-[11px] font-mono text-[#94A3B8] uppercase block mb-3">
                Verified Online Presence:
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href={PORTFOLIO_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#00FF88]/40 hover:bg-[#00FF88]/5 transition-all text-slate-300 hover:text-[#00FF88] gap-1.5"
                  data-cursor-hover
                >
                  <FaLinkedinIn className="w-5 h-5" />
                  <span className="text-[11px] font-mono">LinkedIn</span>
                </a>
                <a
                  href={PORTFOLIO_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#00FF88]/40 hover:bg-[#00FF88]/5 transition-all text-slate-300 hover:text-[#00FF88] gap-1.5"
                  data-cursor-hover
                >
                  <FaGithub className="w-5 h-5" />
                  <span className="text-[11px] font-mono">GitHub</span>
                </a>
                <a
                  href={PORTFOLIO_INFO.socials.youtube || "https://www.youtube.com/@Nexhardtech"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#00FF88]/40 hover:bg-[#00FF88]/5 transition-all text-slate-300 hover:text-[#00FF88] gap-1.5"
                  data-cursor-hover
                >
                  <FaYoutube className="w-5 h-5 text-[#00FF88]" />
                  <span className="text-[11px] font-mono">YouTube</span>
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Clean Glassmorphic Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <GlassCard className="p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-6">
              <div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-sm text-[#94A3B8] mt-1">
                  Fill out the form below or write directly to{" "}
                  <a
                    href={`mailto:${PORTFOLIO_INFO.email}`}
                    className="text-[#00FF88] hover:underline font-mono"
                  >
                    {PORTFOLIO_INFO.email}
                  </a>
                </p>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between gap-3 p-4 rounded-xl bg-[#00FF88]/10 border border-[#00FF88]/30 text-white text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-[#00FF88] shrink-0" />
                    <div>
                      <span className="font-bold text-[#00FF88] block">Inquiry Opened in WhatsApp!</span>
                      <span className="text-slate-300">The form has been cleared and is ready for another message.</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-slate-400 hover:text-white text-xs font-mono px-2 py-1"
                    aria-label="Dismiss message"
                  >
                    ✕
                  </button>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Tanvir Ahmed"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00FF88]/60 focus:ring-1 focus:ring-[#00FF88]/40 transition-colors"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. name@university.edu"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00FF88]/60 focus:ring-1 focus:ring-[#00FF88]/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. 017XXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00FF88]/60 focus:ring-1 focus:ring-[#00FF88]/40 transition-colors"
                      />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Inquiry Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#0D0F12] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00FF88]/60 focus:ring-1 focus:ring-[#00FF88]/40 transition-colors"
                      >
                        <option value="Hardware Design Engineer Role">
                          Hardware Design Engineer Opportunity
                        </option>
                        <option value="Thesis Project / Hardware Consultation">
                          Thesis Project / Hardware Kit
                        </option>
                        <option value="Nexhardtech Power Ltd. Component Supply">
                          Nexhardtech Component Supply
                        </option>
                        <option value="Solar System / Power Backup Integration">
                          Solar / Power Backup Integration
                        </option>
                        <option value="Technical Collaboration / General">
                          Technical Collaboration / General
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Project Details or Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your hardware requirements, engineering team opportunity, or inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00FF88]/60 focus:ring-1 focus:ring-[#00FF88]/40 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="mt-2 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl neon-button text-sm font-semibold tracking-wide"
                    data-cursor-hover
                  >
                    <Send className="w-4 h-4 fill-current" />
                    <span>Send Message via WhatsApp</span>
                  </motion.button>
                </form>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
