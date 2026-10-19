import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "success" | "muted";
  size?: "sm" | "md";
  dot?: boolean;
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  size = "sm",
  dot = false,
  className = "",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-mono uppercase tracking-wider font-medium select-none";

  const sizeStyles = {
    sm: "text-[10px] px-2 py-0.5 gap-1.5 rounded-sm",
    md: "text-xs px-2.5 py-1 gap-2 rounded-sm",
  };

  const variantStyles = {
    default: "bg-[#111216] border border-[#282a35] text-[#cbd5e1]",
    accent: "bg-[#2563eb]/10 border border-[#2563eb]/30 text-[#60a5fa]",
    success: "bg-emerald-950/40 border border-emerald-500/30 text-emerald-400",
    muted: "bg-[#0c0c0e] border border-[#1c1d24] text-[#94a3b8]",
  };

  const dotStyles = {
    default: "bg-[#cbd5e1]",
    accent: "bg-[#3b82f6]",
    success: "bg-emerald-400 animate-pulse",
    muted: "bg-[#94a3b8]",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotStyles[variant]}`} />}
      <span>{children}</span>
    </span>
  );
}
