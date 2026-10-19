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
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: boolean }>({});

  const projectTypes = [
    "Full-Stack Web App",
    "High-Performance Backend",
    "AI / RAG Solution",
    "Project Management",
    "Technical Consultation",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: boolean } = {};

    if (!formData.name.trim()) errors.name = true;
    if (!formData.email.trim() || !formData.email.includes("@")) errors.email = true;
    if (!formData.message.trim()) errors.message = true;

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      setErrorMessage("Please complete all required fields with a valid email address.");
      return;
    }

    setFieldErrors({});
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
    } catch (err: unknown) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "Something went wrong. Please email directly.";
      setErrorMessage(message);
    }
  };

  return (
    <div className="w-full mt-6">
      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="p-6 bg-[#0a1c10] border border-emerald-500/40 rounded-xs space-y-3"
        >
          <div className="flex items-center gap-2.5 text-emerald-400 font-mono text-sm font-bold">
            <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
            <span>MESSAGE DELIVERED DIRECTLY TO HASSAN</span>
          </div>
          <p className="text-xs text-[#cbd5e1] font-sans leading-relaxed">
            Thank you for reaching out. Your message has been dispatched to{" "}
            <span className="text-white font-mono font-semibold">{personalInfo.email}</span>. I will review your requirements and respond within 24 hours.
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
        <form onSubmit={handleSubmit} noValidate className="space-y-4 font-mono">
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="contact-name" className="text-[10px] uppercase text-[#cbd5e1] block mb-1 tracking-wider font-semibold">
                Your Name *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                aria-required="true"
                aria-invalid={!!fieldErrors.name}
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: false });
                }}
                placeholder="e.g. Alex Morgan"
                className={`w-full px-3.5 py-2.5 text-xs bg-[#0b0c10] border text-[#f9fafb] rounded-xs outline-none transition-all placeholder:text-[#64748b] focus-visible:outline-2 focus-visible:outline-[#3b82f6] ${
                  fieldErrors.name ? "border-red-500" : "border-[#282a35] focus:border-[#3b82f6]"
                }`}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="text-[10px] uppercase text-[#cbd5e1] block mb-1 tracking-wider font-semibold">
                Email Address *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                aria-required="true"
                aria-invalid={!!fieldErrors.email}
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: false });
                }}
                placeholder="alex@company.com"
                className={`w-full px-3.5 py-2.5 text-xs bg-[#0b0c10] border text-[#f9fafb] rounded-xs outline-none transition-all placeholder:text-[#64748b] focus-visible:outline-2 focus-visible:outline-[#3b82f6] ${
                  fieldErrors.email ? "border-red-500" : "border-[#282a35] focus:border-[#3b82f6]"
                }`}
              />
            </div>
          </div>

          {/* Row 2: Service / Subject Pills */}
          <div>
            <span className="text-[10px] uppercase text-[#cbd5e1] block mb-1.5 tracking-wider font-semibold">
              Project Interest / Subject
            </span>
            <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="Project Interest Selection">
              {projectTypes.map((type) => (
                <button
                  type="button"
                  key={type}
                  role="radio"
                  aria-checked={formData.subject === type}
                  onClick={() => setFormData({ ...formData, subject: type })}
                  className={`px-3 py-1 text-[10px] uppercase tracking-wider transition-all border cursor-pointer rounded-xs focus-visible:outline-2 focus-visible:outline-[#3b82f6] ${
                    formData.subject === type
                      ? "bg-[#2563eb]/20 text-[#60a5fa] border-[#3b82f6] font-semibold"
                      : "bg-[#0e0f14] text-[#94a3b8] border-[#282a35] hover:border-[#3b82f6]/60 hover:text-white"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Message */}
          <div>
            <label htmlFor="contact-message" className="text-[10px] uppercase text-[#cbd5e1] block mb-1 tracking-wider font-semibold">
              Message / Project Scope *
            </label>
            <textarea
              id="contact-message"
              required
              aria-required="true"
              aria-invalid={!!fieldErrors.message}
              rows={3}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: false });
              }}
              placeholder="Tell me about your product requirements, timeline, or engineering stack..."
              className={`w-full px-3.5 py-2.5 text-xs bg-[#0b0c10] border text-[#f9fafb] rounded-xs outline-none transition-all placeholder:text-[#64748b] resize-none focus-visible:outline-2 focus-visible:outline-[#3b82f6] ${
                fieldErrors.message ? "border-red-500" : "border-[#282a35] focus:border-[#3b82f6]"
              }`}
            />
          </div>

          {/* Error notice if any */}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              role="alert"
              className="p-3 bg-[#1f0a0a] border border-red-500/40 text-red-400 text-xs flex items-center justify-between gap-2 rounded-xs"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
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
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] focus-visible:outline-2 focus-visible:outline-white cursor-pointer rounded-xs"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" aria-hidden="true" />
                  <span>DISPATCHING...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>SEND MESSAGE</span>
                </>
              )}
            </button>

            <span className="text-[10px] text-[#94a3b8] font-mono">
              Direct inbox • 24h response
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
