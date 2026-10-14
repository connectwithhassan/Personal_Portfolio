"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "@/data/portfolioData";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full border-b border-[#1a1a1a] bg-[#070707] overflow-hidden min-h-[calc(100svh-60px)] lg:h-[calc(100vh-60px)] lg:min-h-[640px] lg:max-h-[960px] flex items-stretch"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#1d4ed8]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 relative z-10 h-full">
        {/* Left & Center Canvas: Giant Typography + Portrait */}
        <div className="lg:col-span-7 xl:col-span-8 relative flex flex-col justify-between h-[420px] sm:h-[500px] lg:h-full px-4 sm:px-6 lg:px-6 xl:px-8 pb-3 sm:pb-6 pt-3 sm:pt-8 border-b lg:border-b-0 lg:border-r border-[#1a1a1a] overflow-hidden">
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
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#555555] uppercase">
              PORTFOLIO EDITION // {personalInfo.copyrightYear}
            </span>
            <span className="hidden sm:inline-block text-[10px] sm:text-[11px] font-mono tracking-widest text-[#2563eb] uppercase">
              KARACHI • REMOTE
            </span>
          </motion.div>

          {/* Giant PORTFOLIO Typography directly on the BACK of the Portrait */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[1] overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center leading-none whitespace-nowrap gap-20 sm:gap-28 md:gap-36 lg:gap-44 xl:gap-52 2xl:gap-60"
            >
              <span className="text-[20vw] sm:text-[18vw] lg:text-[clamp(6rem,10vw,12rem)] xl:text-[clamp(7.5rem,11.5vw,14.5rem)] 2xl:text-[clamp(9rem,13vw,17rem)] font-black uppercase font-bebas text-[#ededed] drop-shadow-md leading-none tracking-tight">
                PORT
              </span>
              <span className="text-[20vw] sm:text-[18vw] lg:text-[clamp(6rem,10vw,12rem)] xl:text-[clamp(7.5rem,11.5vw,14.5rem)] 2xl:text-[clamp(9rem,13vw,17rem)] font-black uppercase font-bebas text-[#2563eb] drop-shadow-md leading-none tracking-tight text-right">
                FOLIO
              </span>
            </motion.div>
          </div>

          {/* Hassan's High Quality Portrait in FRONT of PORT and FOLIO (Larger & Prominent) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[300px] sm:w-[380px] md:w-[440px] lg:w-[480px] xl:w-[560px] 2xl:w-[640px] max-w-[92%] h-[92%] sm:h-[92%] lg:h-[94%] z-10 pointer-events-none flex items-end justify-center"
          >
            <div className="relative w-full h-full flex items-end justify-center">
              <Image
                src="/profile-nobg.png"
                alt="S.M Hassan Abbas"
                fill
                priority
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
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#888888]">
                TECH STACK: NEXT.JS • FASTIFY • DJANGO • RAG AI
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Info Box: Intro, Bio & CTA (Original 2-column layout preserved) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center px-6 sm:px-10 lg:px-8 xl:px-12 py-10 lg:py-12 bg-[#070707] relative z-10 h-full overflow-y-auto"
        >
          <div className="max-w-md mx-auto lg:mx-0 w-full space-y-6">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#121212] border border-[#222222] text-[#999999] text-xs font-mono tracking-wider">
              <span>Hello, I&apos;m</span>
            </div>

            {/* Name */}
            <div>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white font-space uppercase">
                {personalInfo.name}
              </h2>
              {/* Electric blue accent bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="h-1.5 bg-[#2563eb] mt-3"
              />
            </div>

            {/* Bio paragraph from CV */}
            <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed font-sans">
              {personalInfo.heroBio}
            </p>

            {/* Core focus pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 text-[11px] font-mono uppercase bg-[#141414] border border-[#242424] text-[#cfcfcf]">
                Full Stack Engineering
              </span>
              <span className="px-2.5 py-1 text-[11px] font-mono uppercase bg-[#141414] border border-[#242424] text-[#cfcfcf]">
                Sprint Leadership
              </span>
              <span className="px-2.5 py-1 text-[11px] font-mono uppercase bg-[#141414] border border-[#242424] text-[#2563eb]">
                AI & Systems Architecture
              </span>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-between sm:justify-start gap-4 px-6 py-3.5 bg-[#0f0f0f] border border-[#262626] hover:border-[#2563eb] hover:bg-[#2563eb]/10 text-white rounded-none transition-all duration-300 shadow-sm"
              >
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#e0e0e0] group-hover:text-[#3b82f6] transition-colors">
                  LET&apos;S CREATE SOMETHING GREAT
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#2563eb] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
