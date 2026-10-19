import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "canvas" | "subtle" | "card" | "elevated";
  hoverable?: boolean;
  bordered?: boolean;
  children: React.ReactNode;
}

export function Card({
  variant = "card",
  hoverable = false,
  bordered = true,
  className = "",
  children,
  ...props
}: CardProps) {
  const baseStyles = "transition-all duration-200";

  const variantStyles = {
    canvas: "bg-[#070707]",
    subtle: "bg-[#0c0c0e]",
    card: "bg-[#111216]",
    elevated: "bg-[#17181f]",
  };

  const borderStyles = bordered ? "border border-[#1c1d24]" : "";
  const hoverStyles = hoverable
    ? "hover:border-[#3b82f6]/60 hover:bg-[#121318]"
    : "";

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${borderStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
