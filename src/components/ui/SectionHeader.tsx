"use client";

import React from "react";
import { motion } from "motion/react";

export interface SectionHeaderProps {
  kicker: string;
  title: string;
  tagline?: string;
  action?: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  kicker,
  title,
  tagline,
  action,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#1c1d24] gap-4 ${className}`}
    >
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-xs" aria-hidden="true" />
          <span className="text-[11px] font-mono tracking-widest text-[#3b82f6] uppercase font-bold">
            {kicker}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#f9fafb] font-space">
          {title}
        </h2>
      </div>

      {(tagline || action) && (
        <div className="flex items-center gap-4">
          {tagline && (
            <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-wider text-[#94a3b8]">
              {tagline}
            </span>
          )}
          {action && <div>{action}</div>}
        </div>
      )}
    </motion.div>
  );
}
