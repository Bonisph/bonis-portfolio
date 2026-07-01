"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

const SunIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="5" /><path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const rafRef = useRef<number | null>(null);

  const navLinks = [
    { label: lang === "pt" ? "Sobre"       : lang === "es" ? "Sobre mí"    : "About",    href: "#sobre" },
    { label: lang === "pt" ? "Experiência" : lang === "es" ? "Experiencia" : "Works",    href: "#works" },
    { label: lang === "pt" ? "Eventos"     : lang === "es" ? "Eventos"     : "Events",   href: "#eventos" },
    { label: lang === "pt" ? "Conteúdo"   : lang === "es" ? "Contenido"   : "Content",  href: "#conteudo" },
    { label: lang === "pt" ? "Pessoal"     : lang === "es" ? "Personal"    : "Personal", href: "#pessoal" },
  ];

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        rafRef.current = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const langToggle = (
    <div
      role="group"
      aria-label="Selecionar idioma"
      className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 text-xs font-semibold"
    >
      {(["pt", "en", "es"] as const).map((l, i) => (
        <React.Fragment key={l}>
          {i > 0 && <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-600">|</span>}
          <button
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`transition-colors ${lang === l ? "text-neutral-900 dark:text-white" : "text-neutral-400 dark:text-neutral-600 hover:text-neutral-700 dark:hover:text-neutral-300"}`}
          >
            {l.toUpperCase()}
          </button>
        </React.Fragment>
      ))}
    </div>
  );

  const langToggleMobile = (
    <div
      role="group"
      aria-label="Selecionar idioma"
      className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 text-xs font-semibold"
    >
      {(["pt", "en", "es"] as const).map((l, i) => (
        <React.Fragment key={l}>
          {i > 0 && <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-600">|</span>}
          <button
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={lang === l ? "text-neutral-900 dark:text-white" : "text-neutral-400 dark:text-neutral-600"}
          >
            {l.toUpperCase()}
          </button>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/90 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-b border-neutral-200/70 dark:border-neutral-800/70 shadow-sm"
          : "border-b border-neutral-100/70 dark:border-neutral-900/70"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-semibold text-neutral-900 dark:text-white tracking-tight hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
        >
          {siteConfig.name}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:border-neutral-900 dark:hover:border-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          {langToggle}
        </nav>

        {/* Mobile: toggles + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          {langToggleMobile}
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-0.5 bg-neutral-900 dark:bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-neutral-900 dark:bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-neutral-900 dark:bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white font-medium text-left"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
