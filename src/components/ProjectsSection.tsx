"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { GithubIcon } from "@/components/SocialIcons";
import { projectsData, Project } from "@/data/portfolioData";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full border-b border-[#1a1a1a] bg-[#070707] py-12 lg:py-16 xl:py-20 scroll-mt-14 overflow-hidden">
      {/* Header bar matching reference image */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="px-6 sm:px-10 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#1a1a1a] gap-4"
      >
        <div>
          <span className="text-[11px] font-mono tracking-widest text-[#2563eb] uppercase font-bold block mb-1">
            PORTFOLIO HIGHLIGHTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-space">
            SELECTED WORK
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block text-[11px] font-mono uppercase text-[#737373]">
            {projectsData.length} FEATURED ARCHITECTURES
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#242424] hover:border-[#2563eb] text-xs font-mono font-medium text-[#e5e5e5] hover:text-[#2563eb] transition-all bg-[#0d0d0d]"
          >
            <span>DISCUSS A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#2563eb]" />
          </a>
        </div>
      </motion.div>

      {/* Grid of Projects matching the 3-card layout */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1a1a1a] border-b border-[#1a1a1a]">
        {projectsData.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer p-6 sm:p-8 lg:p-10 flex flex-col justify-between hover:bg-[#0c0c0c] transition-colors relative h-full"
          >
            {/* Top row: Number + Category */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-[#2563eb] bg-[#2563eb]/10 px-2 py-0.5 border border-[#2563eb]/20">
                {project.number}
              </span>
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#888888]">
                {project.tag}
              </span>
            </div>

            {/* Visual Mockup Preview Box */}
            <div className="w-full aspect-[16/10] bg-[#111111] border border-[#222222] group-hover:border-[#2563eb]/60 rounded-sm mb-6 overflow-hidden relative transition-all duration-300 flex flex-col">
              {/* Fake UI Header Bar */}
              <div className="h-6 bg-[#161616] border-b border-[#222222] px-3 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ef4444]/60" />
                  <span className="w-2 h-2 rounded-full bg-[#eab308]/60" />
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]/60" />
                </div>
                <span className="text-[9px] font-mono text-[#777777] uppercase tracking-wider">
                  {project.technologies[0]} • Brand Showcase
                </span>
              </div>

              {/* Logo / Showcase Content in Dark Theme matching Portfolio */}
              {project.image ? (
                <div className="flex-1 w-full relative flex items-center justify-center p-6 bg-[#0d0d0d] bg-gradient-to-br from-[#161616] via-[#0f0f0f] to-[#0a0a0a] overflow-hidden">
                  {/* Subtle grid pattern matching portfolio */}
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  {/* Soft ambient center backlight */}
                  <div className="absolute w-36 h-28 bg-[#2563eb]/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative w-full h-full flex items-center justify-center z-10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-contain p-3 group-hover:scale-105 transition-transform duration-300 ${
                        project.id === "tawakkal-store"
                          ? "drop-shadow-[0_0_1.5px_rgba(255,255,255,0.7)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
                          : "drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ) : (
                /* Fallback Styled Mockup Dashboard Content */
                <div className="p-4 h-full flex flex-col justify-between bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#0a0a0a]">
                  <div className="space-y-2">
                    <div className="inline-block px-2 py-0.5 text-[9px] font-mono uppercase bg-[#2563eb]/20 text-[#60a5fa] border border-[#2563eb]/30">
                      {project.category}
                    </div>
                    <h4 className="text-sm font-bold text-white tracking-wide font-space line-clamp-1 group-hover:text-[#3b82f6] transition-colors">
                      {project.title}
                    </h4>
                  </div>

                  <div className="space-y-1.5 pt-4">
                    <div className="flex justify-between text-[9px] font-mono text-[#777777]">
                      <span>PERFORMANCE</span>
                      <span className="text-emerald-400">99.8% HIGH-THROUGHPUT</span>
                    </div>
                    <div className="w-full h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#2563eb] rounded-full"
                        style={{ width: `${85 + idx * 5}%` }}
                      />
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-mono text-[#a1a1aa] bg-[#161616] px-1.5 py-0.5 border border-[#262626]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-[#2563eb]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center z-10">
                <span className="px-3 py-1 bg-[#0a0a0a]/90 text-[10px] font-mono uppercase text-[#3b82f6] border border-[#2563eb]/40 tracking-wider">
                  Click to inspect details
                </span>
              </div>
            </div>

            {/* Bottom info row matching design */}
            <div className="pt-2 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold tracking-tight text-white uppercase font-space group-hover:text-[#2563eb] transition-colors">
                  {project.title}
                </h3>
                {project.tagline && (
                  <p className="text-[11px] text-[#2563eb] font-mono mt-0.5 line-clamp-1">
                    {project.tagline}
                  </p>
                )}
                <p className="text-xs text-[#7f7f7f] mt-1 line-clamp-2 leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              <div className="w-8 h-8 rounded-full border border-[#222222] group-hover:border-[#2563eb] flex items-center justify-center text-[#777777] group-hover:text-[#2563eb] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>



      {/* Interactive Project Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#0d0d0d] border border-[#262626] p-6 sm:p-8 rounded-sm shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#1f1f1f]">
              <div className="flex items-center gap-4">
                {selectedProject.image && (
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded bg-[#141414] p-2 border border-[#262626] shrink-0 relative overflow-hidden flex items-center justify-center shadow-lg">
                    <div className="absolute inset-0 bg-radial from-white/[0.04] to-transparent pointer-events-none" />
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className={`object-contain p-1.5 ${
                        selectedProject.id === "tawakkal-store"
                          ? "drop-shadow-[0_0_1.5px_rgba(255,255,255,0.7)]"
                          : "drop-shadow-md"
                      }`}
                      sizes="64px"
                    />
                  </div>
                )}
                <div>
                  <span className="text-xs font-mono font-bold text-[#2563eb] uppercase tracking-widest">
                    PROJECT {selectedProject.number} • {selectedProject.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-space mt-1">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.tagline && (
                    <p className="text-xs font-mono text-[#60a5fa] mt-1 font-semibold">
                      {selectedProject.tagline}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-[#888888] hover:text-white p-1 font-mono text-sm border border-[#262626] rounded px-2"
              >
                ESC / ✕
              </button>
            </div>

            {/* Description */}
            <div className="py-6 space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase text-[#737373] tracking-widest mb-1.5">
                  OVERVIEW
                </h4>
                <p className="text-sm text-[#cccccc] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-[#737373] tracking-widest mb-2">
                  TECHNOLOGIES & ARCHITECTURE
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-[#161616] border border-[#2b2b2b] text-[#38bdf8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#141414] border border-[#222222] rounded-sm text-xs font-mono text-[#a1a1aa] space-y-2">
                <div className="text-white font-bold flex items-center gap-1.5 mb-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Key Features & Highlights:
                </div>
                {selectedProject.highlights && selectedProject.highlights.length > 0 ? (
                  selectedProject.highlights.map((highlight, hIdx) => (
                    <p key={hIdx} className="leading-relaxed">
                      • {highlight}
                    </p>
                  ))
                ) : (
                  <>
                    <p>• High-performance architecture with clean component design.</p>
                    <p>• Responsive UI built with Next.js, TypeScript & Tailwind CSS.</p>
                    <p>• Agile delivery lifecycle managed with sprint planning.</p>
                  </>
                )}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[#1f1f1f] flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] font-mono text-[#666666]">
                Ready to link your GitHub repo or live domain.
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 border border-[#2c2c2c] text-xs font-mono text-[#aaaaaa] hover:text-white"
                >
                  Close
                </button>
                <a
                  href={`mailto:connect.hassanabbas@gmail.com?subject=Inquiry regarding ${selectedProject.title}`}
                  className="px-4 py-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-xs font-mono font-bold text-white transition-colors"
                >
                  Inquire About This Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
