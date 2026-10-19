"use client";

import React, { useState, useRef } from "react";
import { processSteps, experienceList, educationList, skillsList } from "@/data/portfolioData";
import { Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SkillIcons } from "@/components/TechSkillIcons";

type TabKey = "experience" | "education" | "skills";

export default function ProcessAndExperience() {
  const [activeTab, setActiveTab] = useState<TabKey>("experience");
  const tabListRef = useRef<HTMLDivElement>(null);

  const tabs: { key: TabKey; label: string; count: number }[] = [
    { key: "experience", label: "Experience", count: experienceList.length },
    { key: "education", label: "Education", count: educationList.length },
    { key: "skills", label: "Core Stack", count: skillsList.length },
  ];

  // Support Arrow navigation between tabs (WAI-ARIA tabs pattern)
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else {
      return;
    }
    e.preventDefault();
    setActiveTab(tabs[nextIndex].key);
    const buttons = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    if (buttons && buttons[nextIndex]) {
      buttons[nextIndex].focus();
    }
  };

  return (
    <section className="w-full border-b border-[#1c1d24] bg-[#070707] overflow-hidden">
      {/* 1. MY PROCESS */}
      <div id="process" className="py-12 lg:py-16 px-6 sm:px-10 lg:px-12 border-b border-[#1c1d24] scroll-mt-16">
        {/* Top heading strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#1c1d24] gap-2"
        >
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-xs" aria-hidden="true" />
              <span className="text-[11px] font-mono tracking-widest text-[#3b82f6] uppercase font-bold">
                DELIVERY METHODOLOGY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-space">
              MY PROCESS
            </h2>
          </div>
          <span className="text-xs font-mono tracking-widest uppercase text-[#3b82f6]">
            DISCIPLINED SPRINTS. MEASURED OUTCOMES.
          </span>
        </motion.div>

        {/* 5-Step Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#1c1d24] border-b border-[#1c1d24]">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-7 lg:p-8 flex flex-col justify-start group hover:bg-[#0c0c0e] transition-colors h-full"
            >
              <span className="text-2xl sm:text-3xl font-black font-space text-[#3b82f6] mb-3 group-hover:translate-x-1 transition-transform inline-block">
                {step.step}
              </span>
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-[#cbd5e1] leading-relaxed font-sans">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. CAREER EXPERIENCE & CREDENTIALS */}
      <div id="experience" className="py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-12 scroll-mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#1c1d24] gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-xs" aria-hidden="true" />
              <span className="text-[11px] font-mono tracking-widest text-[#3b82f6] uppercase font-bold">
                TRACK RECORD & CREDENTIALS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-space">
              EXPERIENCE & BACKGROUND
            </h2>
          </div>

          {/* Accessible Tab List (WAI-ARIA Compliant) */}
          <div
            ref={tabListRef}
            role="tablist"
            aria-label="Career, Education, and Skills"
            className="flex items-center gap-1.5 p-1 bg-[#111216] border border-[#282a35] rounded-xs text-xs font-mono"
          >
            {tabs.map((tab, idx) => {
              const isSelected = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  id={`tab-${tab.key}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${tab.key}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveTab(tab.key)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`px-3.5 py-1.5 transition-all rounded-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-[#3b82f6] ${
                    isSelected
                      ? "bg-[#2563eb] text-white font-bold shadow-sm"
                      : "text-[#94a3b8] hover:text-white hover:bg-[#17181f]"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Panels */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {/* Experience Panel */}
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                role="tabpanel"
                id="panel-experience"
                aria-labelledby="tab-experience"
                tabIndex={0}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4 focus:outline-none"
              >
                {experienceList.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                    className="p-6 sm:p-8 bg-[#0c0c0e] border border-[#1c1d24] hover:border-[#3b82f6] transition-all rounded-sm flex flex-col md:flex-row md:items-start justify-between gap-6 group"
                  >
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[10px] font-mono uppercase bg-[#2563eb]/20 text-[#60a5fa] px-2.5 py-0.5 border border-[#2563eb]/30 rounded-xs font-semibold">
                          {item.company}
                        </span>
                        <span className="text-xs font-mono text-[#94a3b8]">
                          {item.period}
                        </span>
                        {item.type && (
                          <span className="text-[10px] font-mono uppercase text-[#94a3b8] border border-[#282a35] px-2 py-0.5 rounded-xs">
                            {item.type}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold uppercase tracking-tight text-white font-space group-hover:text-[#3b82f6] transition-colors">
                        {item.role}
                      </h3>

                      <ul className="space-y-2 pt-2">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="text-xs text-[#cbd5e1] leading-relaxed flex items-start gap-2.5">
                            <span className="text-[#3b82f6] font-mono mt-0.5 shrink-0" aria-hidden="true">▸</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="hidden md:flex flex-col items-end justify-between h-full pt-1">
                      <div className="w-8 h-8 rounded-full border border-[#282a35] group-hover:border-[#3b82f6] flex items-center justify-center text-[#94a3b8] group-hover:text-[#3b82f6] transition-colors">
                        <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Education Panel */}
            {activeTab === "education" && (
              <motion.div
                key="education"
                role="tabpanel"
                id="panel-education"
                aria-labelledby="tab-education"
                tabIndex={0}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 focus:outline-none"
              >
                {educationList.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                    className="p-6 bg-[#0c0c0e] border border-[#1c1d24] hover:border-[#3b82f6] transition-all rounded-sm flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono text-[#3b82f6] bg-[#2563eb]/10 px-2 py-0.5 border border-[#2563eb]/30 rounded-xs">
                          {edu.period}
                        </span>
                        <GraduationCap className="w-4 h-4 text-[#94a3b8] group-hover:text-[#3b82f6] transition-colors" aria-hidden="true" />
                      </div>
                      <h3 className="text-base font-bold uppercase tracking-tight text-white font-space mt-1 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-[#cbd5e1] font-mono">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[#1c1d24] flex items-center gap-1.5 text-[11px] text-[#94a3b8] font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                      <span>{edu.statusNote || "Formal Education"}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Core Stack Panel */}
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                role="tabpanel"
                id="panel-skills"
                aria-labelledby="tab-skills"
                tabIndex={0}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 focus:outline-none"
              >
                {skillsList.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="p-5 bg-[#0c0c0e] border border-[#1c1d24] hover:border-[#3b82f6] transition-all rounded-sm flex flex-col justify-between group"
                  >
                    <div className="flex items-center justify-between">
                      <SkillIcons skillName={skill.name} />
                      <span className="text-[9px] font-mono uppercase text-[#94a3b8] tracking-wider">
                        {skill.category}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider mt-4 group-hover:text-[#3b82f6] transition-colors">
                      {skill.name}
                    </h3>
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
