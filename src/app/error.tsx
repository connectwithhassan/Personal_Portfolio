"use client";

import React, { useEffect } from "react";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log runtime exception for observability
    console.error("Runtime Application Error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#070707] text-[#f9fafb] flex items-center justify-center px-6 py-24">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1f0a0a] border border-red-500/40 text-xs font-mono uppercase text-red-400 rounded-xs">
          <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Runtime Exception</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black font-space tracking-tight text-white uppercase">
          Something Went Wrong
        </h1>

        <div className="space-y-2">
          <p className="text-xs text-[#94a3b8] font-sans leading-relaxed">
            An unexpected error occurred during rendering. You can attempt to re-render the view or return to the main portfolio.
          </p>
          {error?.digest && (
            <p className="text-[10px] font-mono text-[#64748b]">
              Error Digest: {error.digest}
            </p>
          )}
        </div>

        <div className="pt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#111216] border border-[#282a35] hover:border-[#3b82f6] text-[#cbd5e1] hover:text-[#3b82f6] text-xs font-mono uppercase tracking-wider rounded-xs transition-colors focus-visible:outline-2 focus-visible:outline-[#3b82f6]"
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
