"use client";

import { siteConfig } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import TypeOnView from "@/components/TypeOnView";

export default function About() {
  const { t } = useLang();
  const bio = t(siteConfig.bio);

  return (
    <section id="sobre" style={{ borderBottom: "2px solid var(--ink)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 32px" }}>
        <Reveal>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.2em",
            textTransform: "uppercase", marginBottom: 28, color: "var(--muted)",
          }}>
            (01) {t({ pt: "Sobre", en: "About", es: "Sobre mí" })}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <TypeOnView
            as="h2"
            id="about-heading"
            className="display-heading"
            text={t({ pt: "Quem é Pedro Bonis?", en: "Who is Pedro Bonis?", es: "¿Quién es Pedro Bonis?" })}
            style={{
              fontSize: "clamp(34px, 4.5vw, 64px)",
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
              margin: "0 0 24px",
              color: "var(--ink)",
            }}
          />
        </Reveal>

        <Reveal delay={160}>
          {bio ? (
            <div style={{ fontSize: 13, fontWeight: 500, textTransform: "uppercase", lineHeight: 1.7, color: "var(--body)", maxWidth: 820 }}>
              {bio.split("\n").filter(Boolean).map((p, i) => (
                <p key={i} style={{ margin: "0 0 16px" }}>{p.trim()}</p>
              ))}
            </div>
          ) : (
            <p style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", color: "var(--faint)", margin: 0 }}>
              {t({ pt: "[ seção vazia — aguardando sua bio ]", en: "[ empty section — bio coming soon ]", es: "[ sección vacía — bio próximamente ]" })}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
