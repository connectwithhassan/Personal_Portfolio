import React from "react";
import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import AboutAndServices from "@/components/AboutAndServices";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessAndExperience from "@/components/ProcessAndExperience";
import FooterSection from "@/components/FooterSection";
import { ScrollProgressBar } from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070707] text-[#ededed] flex flex-col w-full selection:bg-[#2563eb] selection:text-white">
      {/* Accessible Skip Link (WCAG 2.4.1 Bypass Blocks) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#2563eb] focus:text-white focus:font-mono focus:text-xs focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
      >
        Skip to main content
      </a>

      <ScrollProgressBar />
      <HeaderNav />
      <main id="main-content" className="flex-1 flex flex-col w-full max-w-[1920px] mx-auto focus:outline-none">
        <HeroSection />
        <AboutAndServices />
        <ProjectsSection />
        <ProcessAndExperience />
      </main>
      <div className="w-full max-w-[1920px] mx-auto">
        <FooterSection />
      </div>
    </div>
  );
}
