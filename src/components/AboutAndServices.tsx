"use client";

import React from "react";
import { Monitor, Code2, Cpu, Kanban, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo, services } from "@/data/portfolioData";

export default function AboutAndServices() {
  const iconMap: Record<string, React.ReactNode> = {
    Monitor: <Monitor className="w-4 h-4" aria-hidden="true" />,
    Code2: <Code2 className="w-4 h-4" aria-hidden="true" />,
    Cpu: <Cpu className="w-4 h-4" aria-hidden="true" />,
    Kanban: <Kanban className="w-4 h-4" aria-hidden="true" />,
  };

  return (
    <section
      id="about"
      className="w-full border-b border-[#1c1d24] bg-[#070707] min-h-[calc(100svh-60px)] lg:min-h-[calc(100vh-60px)] flex items-stretch scroll-mt-14 overflow-hidden"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1c1d24] items-stretch">
        {/* Card 1: ABOUT ME */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between h-full bg-[#070707]"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-xs" aria-hidden="true" />
              <span className="text-[11px] font-mono tracking-widest text-[#3b82f6] uppercase font-bold">
                ABOUT ME
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-5 font-space">
              Lead with vision. <br />
              <span className="text-[#94a3b8] font-normal">Code with precision.</span>
            </h2>

            <p className="text-sm text-[#cbd5e1] leading-relaxed mb-4 font-sans">
              I am a Technical Project Manager & Full-Stack Developer with hands-on expertise across modern engineering stacks. I bridge client vision with technical execution—translating product roadmaps into resilient architectures, sprint milestones, and production releases.
            </p>

            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Specialized in building high-throughput web applications with Next.js, Node.js, Fastify backends, Python/Django, and integrating intelligent AI/RAG capabilities.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1c1d24] flex items-center justify-between text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" /> Available for hire
            </span>
            <span className="text-[#94a3b8]">Karachi / Remote</span>
          </div>
        </motion.div>

        {/* Card 2: WHAT I DO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between h-full bg-[#0a0a0c]"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-xs" aria-hidden="true" />
              <span className="text-[11px] font-mono tracking-widest text-[#3b82f6] uppercase font-bold">
                CORE CAPABILITIES
              </span>
            </div>

            <div className="space-y-6">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.15 + idx * 0.08 }}
                  className="group flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-sm bg-[#111216] border border-[#282a35] group-hover:border-[#3b82f6] flex items-center justify-center text-[#94a3b8] group-hover:text-[#3b82f6] transition-colors shrink-0">
                    {iconMap[service.icon] || <Code2 className="w-4 h-4" aria-hidden="true" />}
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-white group-hover:text-[#3b82f6] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#94a3b8] mt-1 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1c1d24] flex items-center justify-between text-xs font-mono text-[#94a3b8]">
            <span className="text-[#3b82f6] font-medium">Core Specialization</span>
            <span>•</span>
            <span>Scalable Architecture</span>
          </div>
        </motion.div>

        {/* Card 3: METRICS & IMPACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between bg-gradient-to-b from-[#0c0c0e] to-[#070707] h-full"
        >
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#94a3b8] mb-3">
              DELIVERY PHILOSOPHY
            </p>
            <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white leading-snug font-space">
              I TURN COMPLEX PROBLEMS INTO{" "}
              <span className="text-[#3b82f6]">
                SIMPLE, SCALABLE & RESILIENT
              </span>{" "}
              SOLUTIONS.
            </h3>

            <div className="w-full h-px bg-[#1c1d24] my-8" />

            <div className="space-y-6">
              {/* Stat 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-black font-space text-white tracking-tight">
                    {personalInfo.metrics.experienceYears}
                  </span>
                  <span className="text-xs font-mono tracking-widest text-[#94a3b8] uppercase">
                    YEARS PRODUCTION & ACADEMIC
                  </span>
                </div>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-black font-space text-[#3b82f6] tracking-tight">
                    {personalInfo.metrics.projectsCompleted}
                  </span>
                  <span className="text-xs font-mono tracking-widest text-[#94a3b8] uppercase">
                    PROJECTS & ARCHITECTURES
                  </span>
                </div>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-black font-space text-emerald-400 tracking-tight">
                    {personalInfo.metrics.sprintDelivery}
                  </span>
                  <span className="text-xs font-mono tracking-widest text-[#94a3b8] uppercase">
                    ON-TIME SPRINT DELIVERY
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1c1d24]">
            <p className="text-[11px] font-mono uppercase tracking-wider text-[#94a3b8]">
              Agile Practitioner • Fastify & Next.js Specialist
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
