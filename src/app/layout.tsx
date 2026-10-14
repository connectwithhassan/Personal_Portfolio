import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "S.M HASSAN ABBAS | Full Stack Developer & Project Manager",
  description:
    "Portfolio of S.M Hassan Abbas - Technical Project Manager & Full-Stack Developer specializing in Next.js, Node.js, Fastify, AI/RAG integrations, and scalable software systems.",
  keywords: [
    "Hassan Abbas",
    "Full Stack Developer",
    "Project Manager",
    "Next.js",
    "Fastify",
    "React",
    "Karachi",
    "Pakistan",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo-01.webp", type: "image/webp" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${inter.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#070707] text-[#f2f2f2] font-sans antialiased selection:bg-[#2563eb] selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
