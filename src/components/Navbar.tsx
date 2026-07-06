"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const rafRef = useRef<number | null>(null);

  useEffect(() => { setMounted(true); }, []);

  const navLinks = [
    { label: lang === "pt" ? "Sobre"       : lang === "es" ? "Sobre mí"    : "About",     href: "#sobre" },
    { label: lang === "pt" ? "Experiência" : lang === "es" ? "Experiencia" : "Works",     href: "#works" },
    { label: lang === "pt" ? "Formação"    : lang === "es" ? "Formación"   : "Education", href: "#formacao" },
    { label: lang === "pt" ? "Eventos"     : lang === "es" ? "Eventos"     : "Events",    href: "#eventos" },
    { label: lang === "pt" ? "Pessoal"     : lang === "es" ? "Personal"    : "Personal",  href: "#pessoal" },
  ];

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 50,
      background: "var(--nav-bg)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderBottom: "2px solid var(--ink)",
    }}>
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 32px",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Wordmark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 800,
            fontSize: 17,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            textDecoration: "none",
            textTransform: "uppercase",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          {siteConfig.name}
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ alignItems: "center", gap: 26 }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="nav-link"
            >
              {link.label}
            </button>
          ))}

          {/* Language toggle */}
          <div
            role="group"
            aria-label="Selecionar idioma"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "var(--muted)",
            }}
          >
            {(["pt", "en", "es"] as const).map((l, i) => (
              <React.Fragment key={l}>
                {i > 0 && <span aria-hidden="true" style={{ color: "var(--faint)" }}>|</span>}
                <button
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "0 2px",
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: lang === l ? "var(--ink)" : "var(--faint)",
                    transition: "color 0.2s",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              </React.Fragment>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="theme-toggle"
          >
            {mounted ? (theme === "dark" ? "☀" : "☾") : "☾"}
          </button>

          {/* Contato CTA */}
          <button
            onClick={() => handleNav("#contato")}
            className="contato-pill"
          >
            Contato
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="theme-toggle"
            style={{ width: 32, height: 32, fontSize: 13 }}
          >
            {mounted ? (theme === "dark" ? "☀" : "☾") : "☾"}
          </button>
          <button
            className="flex flex-col"
            style={{ gap: 5, padding: 4, background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span style={{
              display: "block", width: 20, height: 2,
              background: "var(--ink)",
              transition: "all 0.2s",
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }} />
            <span style={{
              display: "block", width: 20, height: 2,
              background: "var(--ink)",
              transition: "all 0.2s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: 20, height: 2,
              background: "var(--ink)",
              transition: "all 0.2s",
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden" style={{
          background: "var(--nav-bg)",
          borderTop: "2px solid var(--ink)",
          padding: "16px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="nav-link"
              style={{ textAlign: "left" }}
            >
              {link.label}
            </button>
          ))}
          <div style={{ display: "flex", gap: 8 }}>
            {(["pt", "en", "es"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: 11, fontWeight: 600, textTransform: "uppercase",
                  color: lang === l ? "var(--ink)" : "var(--faint)",
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button onClick={() => handleNav("#contato")} className="contato-pill" style={{ alignSelf: "flex-start" }}>
            Contato
          </button>
        </div>
      )}
    </header>
  );
}
