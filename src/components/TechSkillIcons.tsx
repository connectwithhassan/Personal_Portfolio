import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiFastify,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiLangchain,
  SiJira,
  SiGit,
  SiDocker,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { FaHandshake, FaComments, FaDiagramProject } from "react-icons/fa6";

interface SkillIconItem {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  hoverColor: string;
}

const skillIconMap: Record<string, SkillIconItem[]> = {
  "Next.js & React": [
    { icon: SiNextdotjs, name: "Next.js", hoverColor: "group-hover:text-white" },
    { icon: SiReact, name: "React", hoverColor: "group-hover:text-[#00d8ff]" },
  ],
  "Node.js & Fastify": [
    { icon: SiNodedotjs, name: "Node.js", hoverColor: "group-hover:text-[#68a063]" },
    { icon: SiFastify, name: "Fastify", hoverColor: "group-hover:text-white" },
  ],
  "Python & Django": [
    { icon: SiPython, name: "Python", hoverColor: "group-hover:text-[#ffde57]" },
    { icon: SiDjango, name: "Django", hoverColor: "group-hover:text-[#44b78b]" },
  ],
  "PostgreSQL & MongoDB": [
    { icon: SiPostgresql, name: "PostgreSQL", hoverColor: "group-hover:text-[#336791]" },
    { icon: SiMongodb, name: "MongoDB", hoverColor: "group-hover:text-[#00ed64]" },
  ],
  "AI & RAG Integration": [
    { icon: RiOpenaiFill, name: "OpenAI", hoverColor: "group-hover:text-[#10a37f]" },
    { icon: SiLangchain, name: "LangChain", hoverColor: "group-hover:text-[#f59e0b]" },
  ],
  "Agile Project Management": [
    { icon: SiJira, name: "Jira Agile", hoverColor: "group-hover:text-[#2684ff]" },
    { icon: FaDiagramProject, name: "Scrum & Sprint", hoverColor: "group-hover:text-[#60a5fa]" },
  ],
  "Client Communication": [
    { icon: FaHandshake, name: "Client Relations", hoverColor: "group-hover:text-[#60a5fa]" },
    { icon: FaComments, name: "Stakeholder Alignment", hoverColor: "group-hover:text-[#38bdf8]" },
  ],
  "Git & Docker": [
    { icon: SiGit, name: "Git", hoverColor: "group-hover:text-[#f05032]" },
    { icon: SiDocker, name: "Docker", hoverColor: "group-hover:text-[#2496ed]" },
  ],
};

export function SkillIcons({ skillName }: { skillName: string }) {
  const icons = skillIconMap[skillName];

  if (!icons || icons.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-1.5">
      {icons.map((item, i) => {
        const IconComponent = item.icon;
        return (
          <div
            key={i}
            title={item.name}
            className="w-7 h-7 rounded-sm bg-[#121212] border border-[#222222] group-hover:border-[#2563eb]/60 group-hover:bg-[#171717] flex items-center justify-center transition-all duration-200"
          >
            <IconComponent
              className={`w-3.5 h-3.5 text-[#2563eb] transition-all duration-200 group-hover:scale-110 ${item.hoverColor}`}
            />
          </div>
        );
      })}
    </div>
  );
}
