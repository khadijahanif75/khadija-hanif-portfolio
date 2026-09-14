"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-sm border border-ink/15 dark:border-paper/15 transition-colors duration-300 hover:border-signal dark:hover:border-signal-light"
    >
      <Sun
        size={16}
        className={`absolute transition-all duration-300 ${
          theme === "light" ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      />
      <Moon
        size={16}
        className={`absolute transition-all duration-300 ${
          theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      />
    </button>
  );
}
