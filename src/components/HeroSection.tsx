"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "@/data/portfolioData";
import { Button, Badge } from "@/components/ui";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full border-b border-[#1c1d24] bg-[#070707] overflow-hidden min-h-[calc(100svh-60px)] lg:h-[calc(100vh-60px)] lg:min-h-[640px] lg:max-h-[960px] flex items-stretch"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#1d4ed8]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 relative z-10 h-full">
        {/* Left & Center Canvas: Giant Typography + Portrait */}
        <div className="lg:col-span-7 xl:col-span-8 relative flex flex-col justify-between h-[420px] sm:h-[500px] lg:h-full px-4 sm:px-6 lg:px-6 xl:px-8 pb-3 sm:pb-6 pt-3 sm:pt-8 border-b lg:border-b-0 lg:border-r border-[#1c1d24] overflow-hidden">
          {/* Subtle grid pattern in the background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Top subtle edition tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-20 flex items-center justify-between"
          >
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#94a3b8] uppercase">
              PORTFOLIO EDITION // {personalInfo.copyrightYear}
            </span>
            <span className="hidden sm:inline-block text-[10px] sm:text-[11px] font-mono tracking-widest text-[#3b82f6] uppercase">
              KARACHI • REMOTE
            </span>
          </motion.div>

          {/* Giant PORTFOLIO Typography directly on the BACK of the Portrait */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[1] overflow-hidden px-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center leading-none whitespace-nowrap gap-6 sm:gap-14 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-48"
            >
              <span className="text-[18vw] sm:text-[16vw] lg:text-[clamp(5rem,9vw,11.5rem)] xl:text-[clamp(6.5rem,10.5vw,13.5rem)] 2xl:text-[clamp(8rem,12vw,15.5rem)] font-black uppercase font-bebas text-[#e2e8f0] drop-shadow-md leading-none tracking-tight">
                PORT
              </span>
              <span className="text-[18vw] sm:text-[16vw] lg:text-[clamp(5rem,9vw,11.5rem)] xl:text-[clamp(6.5rem,10.5vw,13.5rem)] 2xl:text-[clamp(8rem,12vw,15.5rem)] font-black uppercase font-bebas text-[#2563eb] drop-shadow-md leading-none tracking-tight text-right">
                FOLIO
              </span>
            </motion.div>
          </div>

          {/* Hassan's High Quality Portrait in FRONT of PORT and FOLIO */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[300px] sm:w-[380px] md:w-[440px] lg:w-[480px] xl:w-[560px] 2xl:w-[640px] max-w-[92%] h-[92%] sm:h-[92%] lg:h-[94%] z-10 pointer-events-none flex items-end justify-center"
          >
            <div className="relative w-full h-full flex items-end justify-center">
              <Image
                src="/profile-nobg.webp"
                alt="S.M Hassan Abbas - Technical Project Manager & Full-Stack Developer"
                fill
                priority
                fetchPriority="high"
                className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 480px, 640px"
              />
              {/* Bottom gradient fade so the photo blends seamlessly into dark canvas */}
              <div className="absolute inset-x-0 bottom-0 h-14 sm:h-20 lg:h-28 bg-gradient-to-t from-[#070707] via-[#070707]/80 to-transparent z-10" />
            </div>
          </motion.div>

          {/* Bottom subtle status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative z-20 flex items-center justify-between pt-1 sm:pt-3"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#94a3b8]">
                CORE STACK: NEXT.JS • FASTIFY • DJANGO • RAG AI • AGILE
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Info Box: Intro, Bio & CTA */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center px-6 sm:px-10 lg:px-8 xl:px-12 py-8 sm:py-10 lg:py-12 bg-[#070707] relative z-10 h-full overflow-y-auto"
        >
          <div className="max-w-md mx-auto lg:mx-0 w-full space-y-5 sm:space-y-6">
            {/* Status & Role kicker */}
            <div className="flex items-center gap-2">
              <Badge variant="default" size="sm">
                HELLO, I&apos;M
              </Badge>
              <Badge variant="accent" size="sm" dot>
                KARACHI • REMOTE
              </Badge>
            </div>

            {/* Canonical H1 Name Heading & Dual Capability Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white font-space uppercase leading-tight">
                {personalInfo.name}
              </h1>
              {/* Electric blue accent bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="h-1 bg-[#2563eb] mt-3"
              />
              <p className="text-xs sm:text-sm font-mono text-[#3b82f6] uppercase tracking-wider font-semibold mt-2.5">
                Technical Project Manager & Full-Stack Developer
              </p>
            </div>

            {/* Concise Bio highlighting technical + agile execution */}
            <p className="text-[#cbd5e1] text-xs sm:text-sm leading-relaxed font-sans">
              I bridge executive product strategy with hands-on full-stack engineering. Experienced in architecting scalable Next.js, Fastify, and Python/AI systems while directing agile sprint milestones to on-time production delivery.
            </p>

            {/* Core Capability Pills via Badge Primitive */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <Badge variant="default" size="sm">
                Full-Stack Architecture
              </Badge>
              <Badge variant="default" size="sm">
                Agile Sprint Leadership
              </Badge>
              <Badge variant="accent" size="sm">
                AI / RAG Pipelines
              </Badge>
            </div>

            {/* Action CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex-1">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                  className="w-full justify-between"
                  aria-label="Navigate to contact form to discuss a project"
                >
                  LET&apos;S CREATE SOMETHING GREAT
                </Button>
              </div>

              <div className="w-full sm:w-auto">
                <Button
                  href="#projects"
                  variant="secondary"
                  size="md"
                  icon={<FolderGit2 className="w-4 h-4 text-[#3b82f6]" />}
                  iconPosition="left"
                  className="w-full sm:w-auto"
                  aria-label="View selected production projects"
                >
                  SELECTED WORK
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
