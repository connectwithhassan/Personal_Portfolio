import React from "react";

export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function BehanceIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7.74 12.3c.75-.24 1.45-.73 1.77-1.55.33-.84.28-1.84-.13-2.64C8.75 6.87 7.28 6.5 5.86 6.5H0v11h6.14c1.55 0 3.09-.45 3.8-1.92.51-1.07.41-2.42-.2-3.28zm-4.7-3.8h2.37c1.07 0 1.66.45 1.66 1.34 0 .91-.64 1.38-1.7 1.38H3.04V8.5zm2.56 7H3.04v-3.08h2.64c1.23 0 1.89.5 1.89 1.54 0 1.05-.68 1.54-1.97 1.54zM17.18 8.67c-2.77 0-4.66 2.06-4.66 4.9 0 2.87 1.84 4.93 4.75 4.93 2.1 0 3.65-1.07 4.24-2.8h-2.18c-.4.7-1.12.98-1.98.98-1.39 0-2.12-.9-2.22-2.12h6.54c.05-.41.07-.74.07-1.11 0-2.8-1.82-4.78-4.56-4.78zm-2.2 3.82c.15-1.12.87-1.93 2.16-1.93 1.18 0 1.94.75 2.06 1.93h-4.22zM14.6 6.75h5.16v1.33H14.6z" />
    </svg>
  );
}
