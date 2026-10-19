"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, X, Layers, Cpu, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData, Project } from "@/data/portfolioData";
import { Button, Badge } from "@/components/ui";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const openModal = (project: Project, e: React.MouseEvent<HTMLElement>) => {
    triggerRef.current = e.currentTarget;
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  // Focus trap & Escape key listener for WCAG 2.1.2 & 2.4.3
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";

      // Focus first focusable item inside modal
      setTimeout(() => {
        if (modalRef.current) {
          const firstFocusable = modalRef.current.querySelector<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (firstFocusable) {
            firstFocusable.focus();
          }
        }
      }, 50);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="w-full border-b border-[#1c1d24] bg-[#070707] py-12 lg:py-16 xl:py-20 scroll-mt-14 overflow-hidden"
    >
      {/* Header bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="px-6 sm:px-10 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#1c1d24] gap-4"
      >
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-xs" aria-hidden="true" />
            <span className="text-[11px] font-mono tracking-widest text-[#3b82f6] uppercase font-bold">
              PORTFOLIO HIGHLIGHTS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-space">
            SELECTED ARCHITECTURES
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-wider text-[#94a3b8]">
            {projectsData.length} PRODUCTION IMPLEMENTATIONS
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#282a35] hover:border-[#3b82f6] text-xs font-mono font-medium text-[#f9fafb] hover:text-[#3b82f6] transition-all bg-[#111216] focus-visible:outline-2 focus-visible:outline-[#3b82f6]"
          >
            <span>DISCUSS A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#3b82f6]" aria-hidden="true" />
          </a>
        </div>
      </motion.div>

      {/* Grid of Projects */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1c1d24] border-b border-[#1c1d24]">
        {projectsData.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group p-6 sm:p-8 lg:p-10 flex flex-col justify-between hover:bg-[#0c0c0e] transition-colors relative h-full"
          >
            {/* Top row: Number + Tag */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#3b82f6] bg-[#2563eb]/10 px-2 py-0.5 border border-[#2563eb]/30 rounded-xs">
                  {project.number}
                </span>
                <span className="text-[10px] font-mono tracking-wider uppercase text-[#94a3b8]">
                  {project.tag}
                </span>
              </div>

              {/* Architectural Image Preview */}
              <div className="w-full aspect-[16/10] bg-[#111216] border border-[#282a35] group-hover:border-[#3b82f6]/50 rounded-sm mb-6 overflow-hidden relative transition-all duration-300 flex flex-col">
                <div className="h-7 bg-[#16171d] border-b border-[#282a35] px-3 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#3b82f6]" aria-hidden="true" />
                    <span className="text-[10px] font-mono text-[#cbd5e1] font-medium uppercase tracking-wider">
                      {project.role}
                    </span>
                  </div>
                </div>

                {project.image ? (
                  <div className="flex-1 w-full relative flex items-center justify-center p-6 bg-[#0c0c0e] bg-gradient-to-br from-[#14151b] via-[#0f1014] to-[#0a0a0c] overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-[0.03] pointer-events-none"
                      style={{
                        backgroundImage:
                          "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    <div className="absolute w-36 h-28 bg-[#2563eb]/10 rounded-full blur-2xl pointer-events-none" />

                    <div className="relative w-full h-full flex items-center justify-center z-10">
                      <Image
                        src={project.image}
                        alt={`${project.title} logo`}
                        fill
                        className={`object-contain p-4 transition-transform duration-500 group-hover:scale-105 ${
                          project.id === "tawakkal-store"
                            ? "drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]"
                            : "drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                        }`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 w-full flex items-center justify-center p-6 bg-[#0c0c0e]">
                    <span className="text-xs font-mono text-[#94a3b8] uppercase tracking-widest">
                      ARCHITECTURE PREVIEW
                    </span>
                  </div>
                )}
              </div>

              {/* Project Title and Role */}
              <div className="space-y-2.5 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#3b82f6] transition-colors font-space">
                  {project.title}
                </h3>

                {project.tagline && (
                  <p className="text-xs font-mono text-[#60a5fa] font-medium leading-snug">
                    {project.tagline}
                  </p>
                )}

                <p className="text-xs text-[#cbd5e1] line-clamp-2 leading-relaxed font-sans pt-1">
                  {project.description}
                </p>

                {/* Tech Badges with Badge primitive */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="default" size="sm">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="muted" size="sm">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Row: Category & Interactive Trigger Button */}
            <div className="pt-4 border-t border-[#1c1d24] flex items-center justify-between text-xs font-mono">
              <div className="pr-2">
                <span className="text-[10px] uppercase text-[#94a3b8] block">
                  CATEGORY & STACK
                </span>
                <p className="text-xs text-[#f9fafb] font-medium line-clamp-1">
                  {project.category}
                </p>
              </div>

              <Button
                variant="secondary"
                size="sm"
                icon={<ArrowUpRight className="w-3.5 h-3.5 text-[#3b82f6]" />}
                onClick={(e) => openModal(project, e)}
                aria-haspopup="dialog"
                aria-label={`View full case study and technical specs for ${project.title}`}
              >
                SPECS
              </Button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Accessible Interactive Project Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={closeModal}
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-2xl bg-[#0e0f14] border border-[#282a35] p-6 sm:p-8 rounded-sm shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-5 border-b border-[#1c1d24]">
                <div className="flex items-center gap-4">
                  {selectedProject.image && (
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded bg-[#14151b] p-2 border border-[#282a35] shrink-0 relative overflow-hidden flex items-center justify-center shadow-lg">
                      <Image
                        src={selectedProject.image}
                        alt={`${selectedProject.title} icon`}
                        fill
                        className="object-contain p-1.5"
                        sizes="64px"
                      />
                    </div>
                  )}
                  <div>
                    <span className="text-xs font-mono font-bold text-[#3b82f6] uppercase tracking-widest">
                      PROJECT {selectedProject.number} • {selectedProject.tag}
                    </span>
                    <h3 id="modal-title" className="text-xl sm:text-2xl font-black text-white font-space mt-0.5">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs font-mono text-[#cbd5e1] mt-1 font-semibold flex items-center gap-1.5">
                      <span className="text-[#3b82f6]">Role:</span> {selectedProject.role}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  className="text-[#94a3b8] hover:text-white p-2 font-mono text-xs border border-[#282a35] hover:border-[#3b82f6] rounded flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#3b82f6] cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                  <span className="hidden sm:inline">ESC</span>
                </button>
              </div>

              {/* Case Study Content Breakdown */}
              <div id="modal-description" className="py-6 space-y-5">
                {/* 1. Problem & Context */}
                <div className="p-4 bg-[#121318] border border-[#1c1d24] rounded-xs space-y-1.5">
                  <h4 className="text-xs font-mono font-bold uppercase text-[#3b82f6] tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-xs" aria-hidden="true" />
                    PROBLEM & CONTEXT
                  </h4>
                  <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* 2. Solution & Architecture */}
                <div className="p-4 bg-[#121318] border border-[#1c1d24] rounded-xs space-y-1.5">
                  <h4 className="text-xs font-mono font-bold uppercase text-emerald-400 tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-xs" aria-hidden="true" />
                    SOLUTION & ARCHITECTURE
                  </h4>
                  <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* 3. My Engineering Contribution */}
                <div className="p-4 bg-[#14161f] border border-[#2563eb]/30 rounded-xs space-y-1.5">
                  <h4 className="text-xs font-mono font-bold uppercase text-[#60a5fa] tracking-wider flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
                    MY CONTRIBUTION & TECHNICAL SCOPE
                  </h4>
                  <p className="text-xs sm:text-sm text-[#e2e8f0] leading-relaxed">
                    {selectedProject.myContribution}
                  </p>
                </div>

                {/* 4. Tech Stack */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#94a3b8] tracking-widest mb-2 font-semibold">
                    TECHNOLOGIES & STACK
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono bg-[#14151b] border border-[#282a35] text-[#60a5fa] rounded-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 5. Key Highlights */}
                {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                  <div className="p-4 bg-[#111216] border border-[#1c1d24] rounded-sm text-xs font-mono text-[#cbd5e1] space-y-2">
                    <div className="text-white font-bold flex items-center gap-1.5 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                      Verified Capabilities & Features Delivered:
                    </div>
                    {selectedProject.highlights.map((highlight, hIdx) => (
                      <p key={hIdx} className="leading-relaxed flex items-start gap-2">
                        <span className="text-[#3b82f6] mt-0.5">•</span>
                        <span>{highlight}</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-[#1c1d24] flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-[#94a3b8]">
                  Verified production architecture and sprint tracking.
                </span>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={closeModal}
                  >
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    href={`mailto:connect.hassanabbas@gmail.com?subject=Inquiry regarding ${selectedProject.title}`}
                    external
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    Discuss This Architecture
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
