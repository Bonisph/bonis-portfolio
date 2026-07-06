"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: "light",
  toggleTheme: () => {},
});

function systemPrefersDark(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const CSS_VARS: Record<Theme, Record<string, string>> = {
  light: {
    "--bg":      "#ffffff",
    "--ink":     "#0a0a0a",
    "--bg-alt":  "#f4f4f2",
    "--body":    "#1a1a1a",
    "--muted":   "#404040",
    "--faint":   "#8a8a8a",
    "--nav-bg":  "rgba(255,255,255,0.92)",
    "--glass":   "rgba(255,255,255,0.65)",
    "--glass2":  "rgba(255,255,255,0.85)",
    "--scrim":   "rgba(0,20,40,0.14)",
    "--hero-b":  "1",
  },
  dark: {
    "--bg":      "#0f0f0f",
    "--ink":     "#f2f2f2",
    "--bg-alt":  "#161616",
    "--body":    "#d6d6d6",
    "--muted":   "#a3a3a3",
    "--faint":   "#7a7a7a",
    "--nav-bg":  "rgba(15,15,15,0.9)",
    "--glass":   "rgba(15,15,15,0.65)",
    "--glass2":  "rgba(15,15,15,0.85)",
    "--scrim":   "rgba(0,10,20,0.45)",
    "--hero-b":  "0.5",
  },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "dark" || saved === "light") return saved;
    return systemPrefersDark() ? "dark" : "light";
  });

  useEffect(() => {
    const vars = CSS_VARS[theme];
    Object.entries(vars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      const explicit = localStorage.getItem("portfolio-theme-explicit");
      if (!explicit) setTheme(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = () => {
    localStorage.setItem("portfolio-theme-explicit", "1");
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
