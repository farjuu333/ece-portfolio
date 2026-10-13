"use client";

import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutFounderSection } from "@/components/sections/AboutFounderSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TrainingCertificationsSection } from "@/components/sections/TrainingCertificationsSection";
import { AchievementsVolunteeringSection } from "@/components/sections/AchievementsVolunteeringSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 md:gap-24">
      {/* 1. Hero Section with Profile Image, Badges & CTAs */}
      <HeroSection />

      {/* 2. About & Founder Section (Nexhardtech & IST Dhanmondi) */}
      <AboutFounderSection />

      {/* 3. Skills Matrix (Electrical, Electronics, Programming, Tools, Driving, Soft Skills) */}
      <SkillsSection />

      {/* 4. Training & Professional Certifications (NSDA Level-3, Level-2, CCNA, etc.) */}
      <TrainingCertificationsSection />

      {/* 5. Achievements & Club Volunteering Leadership */}
      <AchievementsVolunteeringSection />

      {/* 6. Featured Projects Showcase (17+ Projects + YouTube Modal) */}
      <ProjectsSection />

      {/* 7. Contact Section & Details */}
      <ContactSection />
    </div>
  );
}
