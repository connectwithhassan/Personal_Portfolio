"use client";

import React, { useState } from "react";
import { processSteps, experienceList, educationList, skillsList } from "@/data/portfolioData";
import { Briefcase, GraduationCap, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SkillIcons } from "@/components/TechSkillIcons";

export default function ProcessAndExperience() {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "skills">("experience");

  return (
    <section className="w-full border-b border-[#1a1a1a] bg-[#070707] overflow-hidden">
      {/* 1. MY PROCESS - Matching exact 5-step layout from the reference image */}
      <div id="process" className="py-12 lg:py-16 px-6 sm:px-10 lg:px-12 border-b border-[#1a1a1a] scroll-mt-16">
        {/* Top heading strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#181818] gap-2"
        >
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#2563eb] uppercase font-bold block mb-1">
              METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-space">
              MY PROCESS
            </h2>
          </div>
          <span className="text-xs font-mono tracking-widest uppercase text-[#2563eb]">
            A CLEAR PROCESS. BETTER RESULTS.
          </span>
        </motion.div>

        {/* 5-Step Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#1a1a1a] border-b border-[#181818]">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-7 lg:p-8 flex flex-col justify-start group hover:bg-[#0c0c0c] transition-colors h-full"
            >
              <span className="text-2xl sm:text-3xl font-black font-space text-[#2563eb] mb-3 group-hover:translate-x-1 transition-transform inline-block">
                {step.step}
              </span>
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-[#808080] leading-relaxed font-sans">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. CAREER EXPERIENCE & EDUCATION FROM CV */}
      <div id="experience" className="py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-12 scroll-mt-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#181818] gap-4"
        >
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#2563eb] uppercase font-bold block mb-1">
              BACKGROUND & TRACK RECORD
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-space">
              EXPERIENCE & CREDENTIALS
            </h2>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center gap-2 p-1 bg-[#121212] border border-[#222222] rounded-sm text-xs font-mono">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-3 py-1.5 transition-all ${
                activeTab === "experience"
                  ? "bg-[#2563eb] text-white font-bold"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              Experience ({experienceList.length})
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-3 py-1.5 transition-all ${
                activeTab === "education"
                  ? "bg-[#2563eb] text-white font-bold"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              Education ({educationList.length})
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-3 py-1.5 transition-all ${
                activeTab === "skills"
                  ? "bg-[#2563eb] text-white font-bold"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              Core Stack ({skillsList.length})
            </button>
          </div>
        </motion.div>

        {/* Tab Content Display */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {/* Experience Tab */}
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4"
              >
                {experienceList.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-6 sm:p-8 bg-[#0c0c0c] border border-[#1f1f1f] hover:border-[#2563eb] transition-all rounded-sm flex flex-col md:flex-row md:items-start justify-between gap-6 group"
                  >
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[10px] font-mono uppercase bg-[#2563eb]/20 text-[#60a5fa] px-2.5 py-0.5 border border-[#2563eb]/30">
                          {item.company}
                        </span>
                        <span className="text-xs font-mono text-[#777777]">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold uppercase tracking-tight text-white font-space group-hover:text-[#2563eb] transition-colors">
                        {item.role}
                      </h3>

                      <ul className="space-y-2 pt-2">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="text-xs text-[#999999] leading-relaxed flex items-start gap-2.5">
                            <span className="text-[#2563eb] font-mono mt-0.5">▸</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="hidden md:flex flex-col items-end justify-between h-full pt-1">
                      <div className="w-8 h-8 rounded-full border border-[#262626] group-hover:border-[#2563eb] flex items-center justify-center text-[#666666] group-hover:text-[#2563eb] transition-colors">
                        <Briefcase className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Education Tab */}
            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {educationList.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-6 bg-[#0c0c0c] border border-[#1f1f1f] hover:border-[#2563eb] transition-all rounded-sm flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono text-[#2563eb] bg-[#2563eb]/10 px-2 py-0.5 border border-[#2563eb]/20">
                          {edu.period}
                        </span>
                        <GraduationCap className="w-4 h-4 text-[#666666] group-hover:text-[#2563eb] transition-colors" />
                      </div>
                      <h3 className="text-base font-bold uppercase tracking-tight text-white font-space mt-1 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-[#888888] font-mono">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[#181818] flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Degree
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Core Stack Tab */}
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {skillsList.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="p-5 bg-[#0c0c0c] border border-[#1f1f1f] hover:border-[#2563eb] transition-all rounded-sm flex flex-col justify-between group"
                  >
                    <div className="flex items-center justify-between">
                      <SkillIcons skillName={skill.name} />
                      <span className="text-[9px] font-mono uppercase text-[#666666] tracking-wider">
                        {skill.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider mt-4 group-hover:text-[#2563eb] transition-colors">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
