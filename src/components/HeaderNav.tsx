"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

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
    <header className="w-full border-b border-[#1a1a1a] bg-[#070707]/95 backdrop-blur-sm sticky top-0 z-30">
      <div className="max-w-[1920px] mx-auto w-full">
        {/* Desktop Info Strip */}
        <div className="hidden md:flex items-stretch divide-x divide-[#1a1a1a] text-xs">
        {/* Brand / Prominent Logo */}
        <Link
          href="#hero"
          onClick={scrollToHero}
          className="px-6 py-2.5 flex items-center shrink-0 hover:bg-[#0c0c0c] transition-colors group cursor-pointer"
          title={personalInfo.name}
        >
          <div className="relative h-11 w-28 flex items-center">
            <Image
              src="/logo.webp"
              alt="Hassan Abbas Logo"
              fill
              sizes="112px"
              className="object-contain object-left group-hover:scale-105 transition-transform"
              priority
            />
          </div>
        </Link>

        {/* Column 1: Navigation */}
        <div className="flex-1 px-6 py-3.5 flex items-center justify-end min-w-0">
          <nav className="flex items-center gap-6 text-[11px] uppercase tracking-wider text-[#737373]">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-[#2563eb] transition-colors">
              Projects
            </a>
            <a href="#process" className="hover:text-white transition-colors">
              Process
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>

        {/* Column 2: Location */}
        <div className="px-6 py-3.5 flex flex-col justify-center shrink-0">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#666666]">
            BASED IN
          </span>
          <span className="text-[11px] font-mono font-semibold tracking-wider text-[#2563eb] uppercase">
            {personalInfo.location}
          </span>
        </div>

        {/* Column 3: Availability & Action */}
        <div className="px-6 py-3.5 flex items-center gap-5 shrink-0">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#666666] block">
              STATUS
            </span>
            <span className="text-[11px] font-mono font-semibold tracking-wider text-[#2563eb] uppercase">
              {personalInfo.status}
            </span>
          </div>

          {/* Quick Social Links */}
          <div className="flex items-center gap-3 border-l border-[#1a1a1a] pl-4">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#777777] hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#777777] hover:text-[#0a66c2] transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Action: CV */}
          <a
            href={personalInfo.socialLinks.resume}
            download="Hassan-Abbas-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#262626] hover:border-[#2563eb] text-[11px] uppercase tracking-wider font-mono text-[#e5e5e5] hover:text-[#2563eb] transition-colors rounded-sm bg-[#0e0e0e]"
          >
            <FileDown className="w-3.5 h-3.5" />
            CV
          </a>
        </div>
      </div>

      {/* Mobile Top Header */}
      <div className="flex md:hidden items-center justify-between px-5 py-3">
        <Link href="#hero" onClick={scrollToHero} className="flex items-center gap-3">
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
          <div className="border-l border-[#222222] pl-3">
            <h1 className="text-xs font-bold tracking-wider uppercase text-white font-mono leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-[10px] text-[#2563eb] font-mono">
              Full Stack Developer & PM
            </p>
          </div>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 border border-[#262626] text-white rounded bg-[#111111]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#1a1a1a] bg-[#0c0c0c] px-6 py-6 flex flex-col gap-4 text-sm font-mono uppercase tracking-wider">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#a3a3a3] hover:text-white py-1 border-b border-[#181818]"
          >
            About Me
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#a3a3a3] hover:text-[#2563eb] py-1 border-b border-[#181818]"
          >
            Selected Work
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#a3a3a3] hover:text-white py-1 border-b border-[#181818]"
          >
            My Process
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#a3a3a3] hover:text-white py-1 border-b border-[#181818]"
          >
            Experience & Education
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#2563eb] hover:underline py-1 flex items-center justify-between"
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
              className="flex-1 py-2 text-center border border-[#2563eb] text-[#2563eb] rounded text-xs"
            >
              Download CV
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex-1 py-2 text-center bg-[#2563eb] text-white rounded text-xs"
            >
              Email Me
            </a>
          </div>
        </div>
      )}
      </div>
    </header>
  );
}
