"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { motion, AnimatePresence } from "motion/react";

export default function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroEl = document.getElementById("hero");
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (window.history.pushState) {
      window.history.pushState(null, "", "#hero");
    }
  };

  return (
    <header className="w-full border-b border-[#1c1d24] bg-[#070707]/95 backdrop-blur-md sticky top-0 z-40 transition-colors">
      <div className="max-w-[1920px] mx-auto w-full">
        {/* Desktop Info Strip */}
        <div className="hidden md:flex items-stretch divide-x divide-[#1c1d24] text-xs">
          {/* Brand / Prominent Logo */}
          <Link
            href="#hero"
            onClick={scrollToHero}
            className="px-6 py-2.5 flex items-center shrink-0 hover:bg-[#0c0c0e] transition-colors group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#3b82f6] focus-visible:outline-offset-2"
            title={personalInfo.name}
            aria-label={`${personalInfo.name} - Return to top`}
          >
            <div className="relative h-11 w-28 flex items-center">
              <Image
                src="/logo.webp"
                alt="Hassan Abbas Logo"
                fill
                sizes="112px"
                className="object-contain object-left group-hover:scale-105 transition-transform duration-200"
                priority
              />
            </div>
          </Link>

          {/* Column 1: Navigation */}
          <div className="flex-1 px-6 py-3.5 flex items-center justify-end min-w-0">
            <nav className="flex items-center gap-6 text-[11px] uppercase tracking-wider text-[#94a3b8]" aria-label="Main Navigation">
              <a
                href="#about"
                className="hover:text-white transition-colors duration-200 py-1 focus-visible:outline-2 focus-visible:outline-[#3b82f6] rounded-xs"
              >
                About
              </a>
              <a
                href="#projects"
                className="hover:text-[#60a5fa] transition-colors duration-200 py-1 focus-visible:outline-2 focus-visible:outline-[#3b82f6] rounded-xs"
              >
                Projects
              </a>
              <a
                href="#process"
                className="hover:text-white transition-colors duration-200 py-1 focus-visible:outline-2 focus-visible:outline-[#3b82f6] rounded-xs"
              >
                Process
              </a>
              <a
                href="#experience"
                className="hover:text-white transition-colors duration-200 py-1 focus-visible:outline-2 focus-visible:outline-[#3b82f6] rounded-xs"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="hover:text-white transition-colors duration-200 py-1 focus-visible:outline-2 focus-visible:outline-[#3b82f6] rounded-xs"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Column 2: Location */}
          <div className="px-6 py-3.5 flex flex-col justify-center shrink-0">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#94a3b8]">
              BASED IN
            </span>
            <span className="text-[11px] font-mono font-semibold tracking-wider text-[#3b82f6] uppercase">
              {personalInfo.location}
            </span>
          </div>

          {/* Column 3: Availability & Action */}
          <div className="px-6 py-3.5 flex items-center gap-5 shrink-0">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#94a3b8] block">
                STATUS
              </span>
              <span className="text-[11px] font-mono font-semibold tracking-wider text-[#10b981] uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE FOR HIRE
              </span>
            </div>

            {/* Quick Social Links */}
            <div className="flex items-center gap-3 border-l border-[#1c1d24] pl-4">
              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-white transition-colors p-1 rounded focus-visible:outline-2 focus-visible:outline-[#3b82f6]"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors p-1 rounded focus-visible:outline-2 focus-visible:outline-[#3b82f6]"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Action: CV */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={personalInfo.socialLinks.resume}
              download="Hassan-Abbas-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-[#282a35] hover:border-[#3b82f6] text-[11px] uppercase tracking-wider font-mono text-[#f9fafb] hover:text-[#3b82f6] transition-all rounded-sm bg-[#111216] focus-visible:outline-2 focus-visible:outline-[#3b82f6]"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </motion.a>
          </div>
        </div>

        {/* Mobile Top Header - Semantic fix: replace h1 with paragraph so canonical h1 is in HeroSection */}
        <div className="flex md:hidden items-center justify-between px-5 py-3">
          <Link
            href="#hero"
            onClick={scrollToHero}
            className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-[#3b82f6]"
            aria-label={`${personalInfo.name} - Home`}
          >
            <div className="relative h-10 w-24">
              <Image
                src="/logo.webp"
                alt="Hassan Abbas Logo"
                fill
                sizes="96px"
                className="object-contain object-left"
                priority
              />
            </div>
            <div className="border-l border-[#1c1d24] pl-3">
              <p className="text-xs font-bold tracking-wider uppercase text-white font-mono leading-tight">
                {personalInfo.name}
              </p>
              <p className="text-[10px] text-[#3b82f6] font-mono">
                Full Stack Developer & PM
              </p>
            </div>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-[#282a35] text-white rounded bg-[#111216] focus-visible:outline-2 focus-visible:outline-[#3b82f6] cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden border-t border-[#1c1d24] bg-[#0c0c0e] px-6 py-6 flex flex-col gap-4 text-sm font-mono uppercase tracking-wider overflow-hidden"
            >
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#cbd5e1] hover:text-white py-1.5 border-b border-[#1c1d24] transition-colors"
              >
                About Me
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#cbd5e1] hover:text-[#3b82f6] py-1.5 border-b border-[#1c1d24] transition-colors"
              >
                Selected Work
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#cbd5e1] hover:text-white py-1.5 border-b border-[#1c1d24] transition-colors"
              >
                My Process
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#cbd5e1] hover:text-white py-1.5 border-b border-[#1c1d24] transition-colors"
              >
                Experience & Education
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#3b82f6] hover:underline py-1.5 flex items-center justify-between"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="pt-2 flex gap-3">
                <a
                  href={personalInfo.socialLinks.resume}
                  download="Hassan-Abbas-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-colors rounded text-xs"
                >
                  Download CV
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 py-2 text-center bg-[#2563eb] hover:bg-[#1d4ed8] text-white transition-colors rounded text-xs font-bold"
                >
                  Email Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
