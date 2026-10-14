"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe, ArrowUpRight, FileDown } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { motion } from "motion/react";
import { personalInfo } from "@/data/portfolioData";
import ContactForm from "@/components/ContactForm";

export default function FooterSection() {
  return (
    <footer id="contact" className="w-full bg-[#050505] border-t border-[#1a1a1a] scroll-mt-14 overflow-hidden">
      {/* Main CTA & Contact Grid matching the reference image layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1a1a1a]">
        {/* Left Column: Big Bold Statement */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between h-full"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono tracking-widest text-[#2563eb] uppercase font-bold block">
                START A CONVERSATION
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#888888]">
                  Available For Hire
                </span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black uppercase tracking-tight text-white leading-[0.95] font-space">
              LET&apos;S BUILD <br />
              <span className="text-[#2563eb]">SOMETHING</span> <br />
              EXTRAORDINARY.
            </h2>

            {/* Interactive Contact Form directly connected to Hassan's Gmail */}
            <ContactForm />
          </div>

          <div className="mt-8 pt-4 border-t border-[#181818] flex items-center justify-between text-xs font-mono text-[#888888]">
            <span className="text-[#666666]">Direct: {personalInfo.email}</span>
            <span className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> &lt; 24h Response
            </span>
          </div>
        </motion.div>

        {/* Middle Column: GET IN TOUCH */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3 p-8 sm:p-12 flex flex-col justify-between bg-[#080808] h-full"
        >
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#2563eb] uppercase font-bold block mb-6">
              GET IN TOUCH
            </span>

            <div className="space-y-6 text-xs sm:text-sm font-mono">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-start gap-3.5 text-[#a3a3a3] hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-sm bg-[#121212] border border-[#222222] group-hover:border-[#2563eb] flex items-center justify-center text-[#2563eb] shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="break-all">
                  <span className="text-[10px] text-[#666666] uppercase block">Email Address</span>
                  <span className="text-[#e2e2e2] group-hover:text-[#2563eb] transition-colors">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phoneRaw}`}
                className="group flex items-start gap-3.5 text-[#a3a3a3] hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-sm bg-[#121212] border border-[#222222] group-hover:border-[#2563eb] flex items-center justify-center text-[#2563eb] shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#666666] uppercase block">Direct Line</span>
                  <span className="text-[#e2e2e2] group-hover:text-[#2563eb] transition-colors">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3.5 text-[#a3a3a3]">
                <div className="w-8 h-8 rounded-sm bg-[#121212] border border-[#222222] flex items-center justify-center text-[#2563eb] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#666666] uppercase block">Location</span>
                  <span className="text-[#e2e2e2]">{personalInfo.location}</span>
                </div>
              </div>

              {/* Resume download */}
              <a
                href={personalInfo.socialLinks.resume}
                download="Hassan-Abbas-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3.5 text-[#a3a3a3] hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-sm bg-[#121212] border border-[#222222] group-hover:border-[#2563eb] flex items-center justify-center text-[#2563eb] shrink-0 group-hover:scale-105 transition-transform">
                  <FileDown className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#666666] uppercase block">Download Resume</span>
                  <span className="text-[#e2e2e2] group-hover:text-[#2563eb] transition-colors flex items-center gap-1">
                    Hassan CV.pdf <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="pt-8">
            <span className="text-[10px] font-mono uppercase text-[#555555]">
              Response time: Under 24 hours
            </span>
          </div>
        </motion.div>

        {/* Right Column: LET'S CONNECT & QR Box */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3 p-8 sm:p-12 flex flex-col justify-between items-center bg-[#070707] text-center h-full"
        >
          <div className="w-full flex flex-col items-center">
            <span className="text-[11px] font-mono tracking-widest text-[#2563eb] uppercase font-bold block mb-4 self-start">
              LET&apos;S CONNECT
            </span>

            {/* Framed QR Code matching reference image */}
            <div className="relative p-4 bg-[#0d0d0d] border border-[#242424] hover:border-[#2563eb] transition-all rounded-sm group mt-2 hover:scale-[1.02] duration-300">
              <a
                href={personalInfo.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                title="Scan or click to open WhatsApp chat"
                className="block"
              >
                {/* 100% Real, Scannable WhatsApp QR Code in electric blue */}
                <div className="w-44 h-44 sm:w-48 sm:h-48 mx-auto bg-[#0d0d0d] p-1 rounded-sm flex items-center justify-center">
                  <Image
                    src="/qr-whatsapp-blue.png"
                    alt="WhatsApp QR Code - Scan to chat with Hassan (+92 336 0817934)"
                    width={192}
                    height={192}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-[10px] font-mono uppercase text-[#888888] mt-3 group-hover:text-[#2563eb] transition-colors flex items-center justify-center gap-1.5">
                  <FaWhatsapp className="w-3.5 h-3.5 text-[#2563eb] group-hover:scale-110 transition-transform" />
                  <span>Scan / Tap for WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 text-[#2563eb]" />
                </p>
              </a>
            </div>

            {/* Social Links: LinkedIn, Instagram, Facebook */}
            <div className="mt-5 pt-4 border-t border-[#1a1a1a] w-full flex flex-col items-center">
              <span className="text-[10px] font-mono text-[#666666] uppercase tracking-wider mb-2.5">
                Connect On Social
              </span>
              <div className="flex items-center justify-center gap-2.5">
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="w-9 h-9 rounded-sm bg-[#121212] border border-[#222222] hover:border-[#0077b5] text-[#888888] hover:text-[#0077b5] hover:bg-[#0077b5]/10 flex items-center justify-center transition-all group"
                >
                  <FaLinkedinIn className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href={personalInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="w-9 h-9 rounded-sm bg-[#121212] border border-[#222222] hover:border-[#e1306c] text-[#888888] hover:text-[#e1306c] hover:bg-[#e1306c]/10 flex items-center justify-center transition-all group"
                >
                  <FaInstagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href={personalInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  className="w-9 h-9 rounded-sm bg-[#121212] border border-[#222222] hover:border-[#1877f2] text-[#888888] hover:text-[#1877f2] hover:bg-[#1877f2]/10 flex items-center justify-center transition-all group"
                >
                  <FaFacebookF className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-5 w-full text-center">
            <span className="text-[10px] font-mono text-[#555555] uppercase tracking-wider block">
              Direct: +92 336 0817934
            </span>
          </div>
        </motion.div>
      </div>

      {/* Very Bottom Copyright & Bar */}
      <div className="px-6 sm:px-10 py-5 border-t border-[#151515] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#666666] gap-3">
        <div>
          © {personalInfo.copyrightYear} {personalInfo.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Back to Top ↑
          </a>
          <span>•</span>
          <span className="text-[#888888]">Built with Next.js & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
