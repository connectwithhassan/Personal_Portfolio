"use client";

import React from "react";
import { Monitor, Code2, Cpu, Kanban, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "@/data/portfolioData";

export default function AboutAndServices() {
  return (
    <section
      id="about"
      className="w-full border-b border-[#1a1a1a] bg-[#070707] min-h-[calc(100svh-60px)] lg:min-h-[calc(100vh-60px)] flex items-stretch scroll-mt-14 overflow-hidden"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1a1a1a] items-stretch">
        {/* Card 1: ABOUT ME */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 p-8 sm:p-10 lg:p-12 xl:p-16 flex flex-col justify-between h-full"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-[#2563eb]" />
              <span className="text-[11px] font-mono tracking-widest text-[#2563eb] uppercase font-bold">
                ABOUT ME
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-5 font-space">
              Lead with vision. <br />
              <span className="text-[#a1a1aa] font-normal">Code with precision.</span>
            </h3>

            <p className="text-sm text-[#999999] leading-relaxed mb-6 font-sans">
              I am a Technical Project Manager & Full-Stack Developer with deep hands-on expertise across modern engineering stacks. I bridge client vision with technical execution—translating complex product scopes into clean architectures, sprint milestones, and production-ready applications.
            </p>

            <p className="text-sm text-[#777777] leading-relaxed">
              Specialized in building high-throughput web applications with Next.js, Node.js, Fastify backends, Python/Django, and integrating intelligent AI/RAG capabilities.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#181818] flex items-center gap-4 text-xs font-mono text-[#888888]">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> Available for hire
            </span>
            <span>•</span>
            <span>Karachi / Remote</span>
          </div>
        </motion.div>

        {/* Card 2: WHAT I DO */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 p-8 sm:p-10 lg:p-12 xl:p-16 flex flex-col justify-between h-full"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-[#2563eb]" />
              <span className="text-[11px] font-mono tracking-widest text-[#2563eb] uppercase font-bold">
                WHAT I DO
              </span>
            </div>

            <div className="space-y-6">
              {/* Service 1 */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="group flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-sm bg-[#121212] border border-[#222222] group-hover:border-[#2563eb] flex items-center justify-center text-[#999999] group-hover:text-[#2563eb] transition-colors shrink-0 group-hover:scale-105">
                  <Monitor className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white group-hover:text-[#2563eb] transition-colors">
                    FULL-STACK ARCHITECTURE
                  </h4>
                  <p className="text-xs text-[#808080] mt-1 leading-relaxed">
                    Modern Next.js & React frontend interfaces with clean component design and responsive UX.
                  </p>
                </div>
              </motion.div>

              {/* Service 2 */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="group flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-sm bg-[#121212] border border-[#222222] group-hover:border-[#2563eb] flex items-center justify-center text-[#999999] group-hover:text-[#2563eb] transition-colors shrink-0 group-hover:scale-105">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white group-hover:text-[#2563eb] transition-colors">
                    HIGH-PERFORMANCE BACKEND
                  </h4>
                  <p className="text-xs text-[#808080] mt-1 leading-relaxed">
                    Fastify, Node.js & Django RESTful APIs with optimized PostgreSQL & MongoDB throughput.
                  </p>
                </div>
              </motion.div>

              {/* Service 3 */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="group flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-sm bg-[#121212] border border-[#222222] group-hover:border-[#2563eb] flex items-center justify-center text-[#999999] group-hover:text-[#2563eb] transition-colors shrink-0 group-hover:scale-105">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white group-hover:text-[#2563eb] transition-colors">
                    AI & RAG INTEGRATION
                  </h4>
                  <p className="text-xs text-[#808080] mt-1 leading-relaxed">
                    Intelligent vector retrieval, LLM embeddings, agentic workflows, and semantic document search.
                  </p>
                </div>
              </motion.div>

              {/* Service 4 */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.55 }}
                className="group flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-sm bg-[#121212] border border-[#222222] group-hover:border-[#2563eb] flex items-center justify-center text-[#999999] group-hover:text-[#2563eb] transition-colors shrink-0 group-hover:scale-105">
                  <Kanban className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white group-hover:text-[#2563eb] transition-colors">
                    TECHNICAL PROJECT MANAGEMENT
                  </h4>
                  <p className="text-xs text-[#808080] mt-1 leading-relaxed">
                    End-to-end agile lifecycles, sprint planning, client demos, scope management & blocker resolution.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Card 2 Bottom Strip matching Card 1 & 3 */}
          <div className="mt-8 pt-6 border-t border-[#181818] flex items-center justify-between text-xs font-mono text-[#888888]">
            <span className="text-[#2563eb]">Core Specialization</span>
            <span>•</span>
            <span>Scalable Architecture</span>
          </div>
        </motion.div>

        {/* Card 3: METRICS & IMPACT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 p-8 sm:p-10 lg:p-12 xl:p-16 flex flex-col justify-between bg-gradient-to-b from-[#0a0a0a] to-[#070707] h-full"
        >
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#666666] mb-3">
              IMPACT PHILOSOPHY
            </p>
            <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white leading-snug font-space">
              I TURN COMPLEX PROBLEMS INTO{" "}
              <span className="text-[#2563eb]">
                SIMPLE, SCALABLE & BEAUTIFUL
              </span>{" "}
              SOLUTIONS.
            </h3>

            <div className="w-full h-px bg-[#1d1d1d] my-8" />

            <div className="space-y-6">
              {/* Stat 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-black font-space text-white tracking-tight">
                    {personalInfo.metrics.experienceYears}
                  </span>
                  <span className="text-xs font-mono tracking-widest text-[#777777] uppercase">
                    YEARS EXPERIENCE
                  </span>
                </div>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-black font-space text-[#2563eb] tracking-tight">
                    {personalInfo.metrics.projectsCompleted}
                  </span>
                  <span className="text-xs font-mono tracking-widest text-[#777777] uppercase">
                    PROJECTS COMPLETED
                  </span>
                </div>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-black font-space text-white tracking-tight">
                    {personalInfo.metrics.clientSatisfaction}
                  </span>
                  <span className="text-xs font-mono tracking-widest text-[#777777] uppercase">
                    ON-TIME SPRINT DELIVERY
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1a1a1a]">
            <p className="text-[11px] font-mono uppercase tracking-wider text-[#666666]">
              Agile certified • Fastify & Next.js specialist
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
