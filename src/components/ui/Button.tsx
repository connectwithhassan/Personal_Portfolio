"use client";

import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external = false,
      icon,
      iconPosition = "right",
      className = "",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-mono uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none focus-visible:outline-2 focus-visible:outline-offset-2";

    const variantStyles = {
      primary:
        "bg-[#2563eb] hover:bg-[#1d4ed8] text-white border border-[#3b82f6]/40 shadow-[0_0_15px_rgba(37,99,235,0.25)] hover:shadow-[0_0_20px_rgba(37,99,235,0.45)] focus-visible:outline-white",
      secondary:
        "bg-[#111216] hover:bg-[#17181f] text-[#cbd5e1] hover:text-[#3b82f6] border border-[#282a35] hover:border-[#3b82f6] focus-visible:outline-[#3b82f6]",
      outline:
        "bg-transparent hover:bg-[#2563eb]/10 text-[#f9fafb] hover:text-[#3b82f6] border border-[#282a35] hover:border-[#2563eb] focus-visible:outline-[#3b82f6]",
      ghost:
        "bg-transparent hover:bg-[#17181f] text-[#94a3b8] hover:text-[#f9fafb] border border-transparent focus-visible:outline-[#3b82f6]",
    };

    const sizeStyles = {
      sm: "text-[11px] px-3 py-1.5 gap-1.5 rounded-sm",
      md: "text-xs px-5 py-2.5 gap-2 rounded-sm",
      lg: "text-sm px-6 py-3.5 gap-2.5 rounded-sm",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} disabled={disabled} className={combinedClassName} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
