import React from "react";
import dynamic from "next/dynamic";
import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import AboutAndServices from "@/components/AboutAndServices";
import { ScrollProgressBar } from "@/components/ScrollAnimations";

// Dynamically split below-the-fold sections to trim initial JS bundle and avoid main-thread blocking
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), {
  loading: () => (
    <div className="w-full min-h-[400px] border-b border-[#1c1d24] bg-[#070707] flex items-center justify-center">
      <span className="text-xs font-mono text-[#94a3b8] uppercase tracking-widest animate-pulse">
        Loading Projects...
      </span>
    </div>
  ),
});

const ProcessAndExperience = dynamic(() => import("@/components/ProcessAndExperience"), {
  loading: () => (
    <div className="w-full min-h-[300px] border-b border-[#1c1d24] bg-[#070707] flex items-center justify-center">
      <span className="text-xs font-mono text-[#94a3b8] uppercase tracking-widest animate-pulse">
        Loading Experience & Stack...
      </span>
    </div>
  ),
});

const FooterSection = dynamic(() => import("@/components/FooterSection"), {
  loading: () => (
    <div className="w-full min-h-[300px] bg-[#050507] border-t border-[#1c1d24] flex items-center justify-center">
      <span className="text-xs font-mono text-[#94a3b8] uppercase tracking-widest animate-pulse">
        Loading Contact...
      </span>
    </div>
  ),
});

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
