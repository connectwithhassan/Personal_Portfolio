import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#070707] text-[#f9fafb] flex items-center justify-center px-6 py-24">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111216] border border-[#282a35] text-xs font-mono uppercase text-[#3b82f6] rounded-xs">
          <span>Error 404 • Not Found</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-black font-space tracking-tight text-white uppercase">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-xl font-bold uppercase tracking-tight text-white font-space">
            Architecture Route Not Found
          </h2>
          <p className="text-xs text-[#94a3b8] font-sans leading-relaxed">
            The page or resource you are looking for has been moved, removed, or does not exist in this deployment.
          </p>
        </div>

        <div className="pt-4 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors focus-visible:outline-2 focus-visible:outline-white"
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Return to Portfolio</span>
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#111216] border border-[#282a35] hover:border-[#3b82f6] text-[#cbd5e1] hover:text-[#3b82f6] text-xs font-mono uppercase tracking-wider rounded-xs transition-colors focus-visible:outline-2 focus-visible:outline-[#3b82f6]"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Contact Hassan</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
