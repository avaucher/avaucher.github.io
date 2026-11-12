"use client";

import { useEffect } from "react";

export default function ThemeToggle() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      try {
        if (!sessionStorage.getItem("theme")) {
          document.documentElement.classList.toggle("dark", e.matches);
        }
      } catch {}
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const nextDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextDark);
    try {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (nextDark === systemDark) {
        sessionStorage.removeItem("theme");
      } else {
        sessionStorage.setItem("theme", nextDark ? "dark" : "light");
      }
    } catch {}
  };

  return (
    <button
      type="button"
      id="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle light/dark theme"
      className="p-1 -my-1 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
    >
      {/* Moon icon (visible in light mode) */}
      <svg
        className="w-4 h-4 block dark:hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
      {/* Sun icon (visible in dark mode) */}
      <svg
        className="w-4 h-4 hidden dark:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    </button>
  );
}
