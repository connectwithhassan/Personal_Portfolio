"use client";

import React, { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "@/data/portfolioData";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Stack Web App",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const projectTypes = [
    "Full-Stack Web App",
    "High-Performance Backend",
    "AI / RAG Solution",
    "Project Management",
    "Other Consultation",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "Full-Stack Web App",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try emailing directly.");
    }
  };

  return (
    <div className="w-full mt-6">
      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="p-6 bg-[#0a1c10] border border-emerald-500/40 rounded-sm space-y-3"
        >
          <div className="flex items-center gap-2.5 text-emerald-400 font-mono text-sm font-bold">
            <CheckCircle2 className="w-5 h-5" />
            <span>MESSAGE SENT DIRECTLY TO HASSAN!</span>
          </div>
          <p className="text-xs text-[#a3a3a3] font-sans leading-relaxed">
            Thank you for reaching out. Your message has been delivered to{" "}
            <span className="text-white font-mono">{personalInfo.email}</span>. I will review your project details and get back to you within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-xs font-mono text-emerald-400 underline hover:text-white pt-2 block focus-visible:outline-2 focus-visible:outline-emerald-400 cursor-pointer"
          >
            Send another message →
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 font-mono">
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="contact-name" className="text-[10px] uppercase text-[#777777] block mb-1 tracking-wider">
                Your Name *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Morgan"
                className="w-full px-3 py-2 text-xs bg-[#0b0b0b] border border-[#222222] focus:border-[#2563eb] focus:bg-[#101010] text-white rounded-none outline-none transition-all placeholder:text-[#444444] focus-visible:outline-2 focus-visible:outline-[#2563eb]"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="text-[10px] uppercase text-[#777777] block mb-1 tracking-wider">
                Email Address *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-3 py-2 text-xs bg-[#0b0b0b] border border-[#222222] focus:border-[#2563eb] focus:bg-[#101010] text-white rounded-none outline-none transition-all placeholder:text-[#444444] focus-visible:outline-2 focus-visible:outline-[#2563eb]"
              />
            </div>
          </div>

          {/* Row 2: Service / Subject Pills */}
          <div>
            <label className="text-[10px] uppercase text-[#777777] block mb-1.5 tracking-wider">
              Project Interest / Subject
            </label>
            <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="Project Interest">
              {projectTypes.map((type) => (
                <button
                  type="button"
                  key={type}
                  role="radio"
                  aria-checked={formData.subject === type}
                  onClick={() => setFormData({ ...formData, subject: type })}
                  className={`px-2.5 py-1 text-[10px] uppercase tracking-wider transition-all border cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2563eb] ${
                    formData.subject === type
                      ? "bg-[#2563eb]/20 text-[#60a5fa] border-[#2563eb]"
                      : "bg-[#0b0b0b] text-[#666666] border-[#222222] hover:border-[#333333] hover:text-[#999999]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Message */}
          <div>
            <label htmlFor="contact-message" className="text-[10px] uppercase text-[#777777] block mb-1 tracking-wider">
              Message / Project Scope *
            </label>
            <textarea
              id="contact-message"
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your timeline, tech stack, or business requirements..."
              className="w-full px-3 py-2 text-xs bg-[#0b0b0b] border border-[#222222] focus:border-[#2563eb] focus:bg-[#101010] text-white rounded-none outline-none transition-all placeholder:text-[#444444] resize-none focus-visible:outline-2 focus-visible:outline-[#2563eb]"
            />
          </div>

          {/* Error notice if any */}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              role="alert"
              className="p-3 bg-[#1f0a0a] border border-red-500/40 text-red-400 text-xs flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
              <a
                href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                  formData.subject
                )}&body=${encodeURIComponent(formData.message)}`}
                className="underline hover:text-white shrink-0 text-[11px] focus-visible:outline-2 focus-visible:outline-red-400"
              >
                Open in Email →
              </a>
            </motion.div>
          )}

          {/* Action Row */}
          <div className="flex items-center justify-between pt-1">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>SENDING TO HASSAN...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>SEND MESSAGE</span>
                </>
              )}
            </motion.button>

            <span className="text-[10px] text-[#555555]">
              Direct to inbox • 24h reply
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
