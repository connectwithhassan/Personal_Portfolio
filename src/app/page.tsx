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
      <ScrollProgressBar />
      <HeaderNav />
      <main className="flex-1 flex flex-col w-full max-w-[1920px] mx-auto">
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
