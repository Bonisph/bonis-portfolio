"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle } = useLang();

  const navLinks = [
    { label: lang === "pt" ? "Sobre" : "About",        href: "#sobre" },
    { label: lang === "pt" ? "Experiência" : "Works",    href: "#works" },
    { label: lang === "pt" ? "Conteúdo" : "Content",   href: "#conteudo" },
    { label: lang === "pt" ? "Eventos" : "Events",      href: "#eventos" },
    { label: lang === "pt" ? "Pessoal" : "Personal",    href: "#pessoal" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "border-b border-neutral-200 shadow-sm" : "border-b border-neutral-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-semibold text-neutral-900 tracking-tight hover:text-neutral-600 transition-colors"
        >
          {siteConfig.name}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggle}
            className="ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 text-xs font-semibold text-neutral-500 hover:border-neutral-900 hover:text-neutral-900 transition-all"
            aria-label="Trocar idioma"
          >
            <span className={lang === "pt" ? "text-neutral-900" : "text-neutral-400"}>PT</span>
            <span className="text-neutral-300">|</span>
            <span className={lang === "en" ? "text-neutral-900" : "text-neutral-400"}>EN</span>
          </button>
        </nav>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-neutral-200 text-xs font-semibold text-neutral-500"
          >
            <span className={lang === "pt" ? "text-neutral-900" : "text-neutral-400"}>PT</span>
            <span className="text-neutral-300">|</span>
            <span className={lang === "en" ? "text-neutral-900" : "text-neutral-400"}>EN</span>
          </button>

          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-neutral-900 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-neutral-900 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-neutral-900 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm text-neutral-700 hover:text-neutral-900 font-medium text-left"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
