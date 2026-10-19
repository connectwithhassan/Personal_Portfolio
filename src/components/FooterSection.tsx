"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight, FileDown } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa6";
import { motion } from "motion/react";
import { personalInfo } from "@/data/portfolioData";
import ContactForm from "@/components/ContactForm";

export default function FooterSection() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.history.pushState) {
      window.history.pushState(null, "", "#hero");
    }
  };

  return (
    <footer id="contact" className="w-full bg-[#050507] border-t border-[#1c1d24] scroll-mt-14 overflow-hidden">
      {/* Main CTA & Contact Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1c1d24]">
        {/* Left Column: Big Bold Statement & Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between h-full"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-xs" aria-hidden="true" />
                <span className="text-[11px] font-mono tracking-widest text-[#3b82f6] uppercase font-bold">
                  START A CONVERSATION
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#94a3b8]">
                  Available For Hire
                </span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black uppercase tracking-tight text-white leading-[0.95] font-space">
              LET&apos;S BUILD <br />
              <span className="text-[#3b82f6]">SOMETHING</span> <br />
              EXTRAORDINARY.
            </h2>

            {/* Interactive Contact Form */}
            <ContactForm />
          </div>

          <div className="mt-8 pt-4 border-t border-[#1c1d24] flex items-center justify-between text-xs font-mono text-[#94a3b8]">
            <span className="text-[#cbd5e1]">Direct: {personalInfo.email}</span>
            <span className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> &lt; 24h Response
            </span>
          </div>
        </motion.div>

        {/* Middle Column: DIRECT CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#08080a] h-full"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-xs" aria-hidden="true" />
              <span className="text-[11px] font-mono tracking-widest text-[#3b82f6] uppercase font-bold">
                DIRECT CONTACT
              </span>
            </div>

            <div className="space-y-6 text-xs sm:text-sm font-mono">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-start gap-3.5 text-[#cbd5e1] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#3b82f6]"
              >
                <div className="w-8 h-8 rounded-sm bg-[#111216] border border-[#282a35] group-hover:border-[#3b82f6] flex items-center justify-center text-[#3b82f6] shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="break-all">
                  <span className="text-[10px] text-[#94a3b8] uppercase block">Email Address</span>
                  <span className="text-[#f9fafb] group-hover:text-[#3b82f6] transition-colors">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phoneRaw}`}
                className="group flex items-start gap-3.5 text-[#cbd5e1] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#3b82f6]"
              >
                <div className="w-8 h-8 rounded-sm bg-[#111216] border border-[#282a35] group-hover:border-[#3b82f6] flex items-center justify-center text-[#3b82f6] shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] text-[#94a3b8] uppercase block">Direct Line</span>
                  <span className="text-[#f9fafb] group-hover:text-[#3b82f6] transition-colors">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3.5 text-[#cbd5e1]">
                <div className="w-8 h-8 rounded-sm bg-[#111216] border border-[#282a35] flex items-center justify-center text-[#3b82f6] shrink-0">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] text-[#94a3b8] uppercase block">Location</span>
                  <span className="text-[#f9fafb]">{personalInfo.location}</span>
                </div>
              </div>

              {/* Resume download */}
              <a
                href={personalInfo.socialLinks.resume}
                download="Hassan-Abbas-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3.5 text-[#cbd5e1] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#3b82f6]"
              >
                <div className="w-8 h-8 rounded-sm bg-[#111216] border border-[#282a35] group-hover:border-[#3b82f6] flex items-center justify-center text-[#3b82f6] shrink-0 group-hover:scale-105 transition-transform">
                  <FileDown className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] text-[#94a3b8] uppercase block">Download Curriculum Vitae</span>
                  <span className="text-[#f9fafb] group-hover:text-[#3b82f6] transition-colors flex items-center gap-1">
                    Hassan-CV.pdf <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1c1d24]">
            <span className="text-[10px] font-mono uppercase text-[#94a3b8]">
              Response SLA: Under 24 hours
            </span>
          </div>
        </motion.div>

        {/* Right Column: LET'S CONNECT & QR Box */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3 p-8 sm:p-10 lg:p-12 flex flex-col justify-between items-center bg-[#070707] text-center h-full"
        >
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4 self-start">
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-xs" aria-hidden="true" />
              <span className="text-[11px] font-mono tracking-widest text-[#3b82f6] uppercase font-bold">
                INSTANT CONNECT
              </span>
            </div>

            {/* Framed QR Code */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="relative p-4 bg-[#0e0f14] border border-[#282a35] hover:border-[#3b82f6] transition-all rounded-sm group mt-2 shadow-lg"
            >
              <a
                href={personalInfo.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                title="Scan or click to open WhatsApp chat"
                aria-label="Scan or click to chat with Hassan on WhatsApp (+92 336 0817934)"
                className="block focus-visible:outline-2 focus-visible:outline-[#3b82f6]"
              >
                <div className="w-44 h-44 sm:w-48 sm:h-48 mx-auto bg-[#0a0b0e] p-2 rounded-xs flex items-center justify-center border border-[#1c1d24]">
                  <Image
                    src="/qr-whatsapp-blue.png"
                    alt="WhatsApp QR Code - Scan to chat with Hassan (+92 336 0817934)"
                    width={192}
                    height={192}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-[10px] font-mono uppercase text-[#cbd5e1] mt-3 group-hover:text-[#3b82f6] transition-colors flex items-center justify-center gap-1.5 font-semibold">
                  <FaWhatsapp className="w-3.5 h-3.5 text-[#3b82f6] group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span>Scan / Tap for WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 text-[#3b82f6]" aria-hidden="true" />
                </p>
              </a>
            </motion.div>

            {/* Social Links */}
            <div className="mt-5 pt-4 border-t border-[#1c1d24] w-full flex flex-col items-center">
              <span className="text-[10px] font-mono text-[#94a3b8] uppercase tracking-wider mb-2.5">
                Connect On Professional Socials
              </span>
              <div className="flex items-center justify-center gap-2.5">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  aria-label="Hassan Abbas on GitHub"
                  className="w-9 h-9 rounded-sm bg-[#111216] border border-[#282a35] hover:border-white text-[#cbd5e1] hover:text-white hover:bg-white/10 flex items-center justify-center transition-all focus-visible:outline-2 focus-visible:outline-white"
                >
                  <FaGithub className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  aria-label="Hassan Abbas on LinkedIn"
                  className="w-9 h-9 rounded-sm bg-[#111216] border border-[#282a35] hover:border-[#0077b5] text-[#cbd5e1] hover:text-[#0077b5] hover:bg-[#0077b5]/10 flex items-center justify-center transition-all focus-visible:outline-2 focus-visible:outline-[#0077b5]"
                >
                  <FaLinkedinIn className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href={personalInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  aria-label="Hassan Abbas on Instagram"
                  className="w-9 h-9 rounded-sm bg-[#111216] border border-[#282a35] hover:border-[#e1306c] text-[#cbd5e1] hover:text-[#e1306c] hover:bg-[#e1306c]/10 flex items-center justify-center transition-all focus-visible:outline-2 focus-visible:outline-[#e1306c]"
                >
                  <FaInstagram className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href={personalInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  aria-label="Hassan Abbas on Facebook"
                  className="w-9 h-9 rounded-sm bg-[#111216] border border-[#282a35] hover:border-[#1877f2] text-[#cbd5e1] hover:text-[#1877f2] hover:bg-[#1877f2]/10 flex items-center justify-center transition-all focus-visible:outline-2 focus-visible:outline-[#1877f2]"
                >
                  <FaFacebookF className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-5 w-full text-center">
            <span className="text-[10px] font-mono text-[#94a3b8] uppercase tracking-wider block">
              Direct Phone: +92 336 0817934
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright & Bar */}
      <div className="px-6 sm:px-10 py-5 border-t border-[#1c1d24] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#94a3b8] gap-3">
        <div>
          © {personalInfo.copyrightYear} {personalInfo.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#3b82f6]"
          >
            Back to Top ↑
          </button>
          <span>•</span>
          <span className="text-[#94a3b8]">Engineered with Next.js, Motion & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
