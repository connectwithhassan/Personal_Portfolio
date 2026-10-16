import type { Metadata, Viewport } from "next";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://connectwithhassan.vercel.app";

export const viewport: Viewport = {
  themeColor: "#070707",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "S.M HASSAN ABBAS | Full Stack Developer & Project Manager",
    template: "%s | S.M Hassan Abbas",
  },
  description:
    "Portfolio of S.M Hassan Abbas - Technical Project Manager & Full-Stack Developer specializing in Next.js, Node.js, Fastify, Python/Django, AI/RAG integrations, and scalable software systems.",
  keywords: [
    "Hassan Abbas",
    "S.M Hassan Abbas",
    "Full Stack Developer",
    "Technical Project Manager",
    "Next.js Developer",
    "Fastify Developer",
    "React Engineer",
    "AI & RAG Solutions",
    "Karachi",
    "Pakistan",
  ],
  authors: [{ name: "S.M Hassan Abbas", url: "https://github.com/connectwithhassan" }],
  creator: "S.M Hassan Abbas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "S.M HASSAN ABBAS | Full Stack Developer & Project Manager",
    description:
      "Technical Project Manager & Full-Stack Developer specializing in Next.js, Node.js, Fastify, AI/RAG integrations, and scalable systems.",
    siteName: "S.M Hassan Abbas Portfolio",
    images: [
      {
        url: "/profile-nobg.png",
        width: 1200,
        height: 630,
        alt: "S.M Hassan Abbas - Full Stack Developer & Project Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S.M HASSAN ABBAS | Full Stack Developer & Project Manager",
    description:
      "Technical Project Manager & Full-Stack Developer specializing in Next.js, Node.js, Fastify, AI/RAG integrations, and scalable software architectures.",
    images: ["/profile-nobg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.webp", type: "image/webp" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Person JSON-LD for rich search engine snippets
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "S.M Hassan Abbas",
    jobTitle: "Technical Project Manager & Full-Stack Developer",
    url: siteUrl,
    sameAs: [
      "https://github.com/connectwithhassan",
      "https://www.linkedin.com/in/syed-muhammad-hassan-abbas-naqvi-a92218323",
      "https://www.instagram.com/its._.hassannn/",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Fastify",
      "Python",
      "Django",
      "PostgreSQL",
      "MongoDB",
      "Agile Project Management",
      "AI & RAG Architecture",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "Pakistan",
    },
  };

  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${inter.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className="min-h-screen bg-[#070707] text-[#f2f2f2] font-sans antialiased selection:bg-[#2563eb] selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
