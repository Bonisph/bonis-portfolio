"use client";

import { siteConfig } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer id="contato" style={{ background: "var(--ink)", color: "var(--bg)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 32px 48px" }}>
        <Reveal>
          <h2 style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 800,
            textTransform: "uppercase",
            fontSize: "clamp(40px, 6vw, 92px)",
            lineHeight: 0.94,
            letterSpacing: "-0.03em",
            margin: "0 0 40px",
            color: "var(--bg)",
          }}>
            {t({
              pt: "Vamos construir\nalgo juntos.",
              en: "Let's build\nsomething together.",
              es: "Construyamos\nalgo juntos.",
            }).split("\n").map((line, i) => (
              <span key={i} style={{ display: "block" }}>{line}</span>
            ))}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 70 }}>
            <a
              href={siteConfig.socials.calendly}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "14px 26px",
                background: "var(--bg)",
                color: "var(--ink)",
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 700, fontSize: 13, letterSpacing: "0.05em",
                textTransform: "uppercase", textDecoration: "none",
                border: "2px solid var(--bg)", transition: "all .2s", display: "inline-block",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--bg)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--bg)"; e.currentTarget.style.color = "var(--ink)"; }}
            >
              {t({ pt: "Marque uma reunião", en: "Schedule a meeting", es: "Agenda una reunión" })}
            </a>
            <a
              href={siteConfig.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "14px 26px",
                background: "transparent",
                color: "var(--bg)",
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 700, fontSize: 13, letterSpacing: "0.05em",
                textTransform: "uppercase", textDecoration: "none",
                border: "2px solid var(--bg)", transition: "all .2s", display: "inline-block",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg)"; e.currentTarget.style.color = "var(--ink)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--bg)"; }}
            >
              Telegram
            </a>
          </div>
        </Reveal>

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16, paddingTop: 24, borderTop: "1px solid #333",
          fontSize: 11, fontWeight: 600, textTransform: "uppercase", color: "#888",
        }}>
          <span>© {year} Pedro Bonis</span>
          <div style={{ display: "flex", gap: 18 }}>
            {[
              { label: "Twitter", href: siteConfig.socials.twitter },
              { label: "LinkedIn", href: siteConfig.socials.linkedin },
              { label: "GitHub", href: siteConfig.socials.github },
              { label: "Instagram", href: siteConfig.socials.instagram },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--bg)", textDecoration: "none", transition: "opacity .2s", fontSize: 11, fontWeight: 600, textTransform: "uppercase" }}
                onMouseEnter={(e) => { e.currentTarget.style.textDecoration = "underline"; }}
                onMouseLeave={(e) => { e.currentTarget.style.textDecoration = "none"; }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
