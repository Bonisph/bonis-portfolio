"use client";

import { siteConfig } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

export default function About() {
  const { t } = useLang();
  const bio = t(siteConfig.bio);

  return (
    <section id="sobre" style={{ borderBottom: "2px solid var(--ink)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 32px" }}>
        <SectionHead
          id="about-heading"
          title={t({ pt: "Sobre", en: "About", es: "Sobre mí" })}
        />
        <Reveal delay={160}>
          {bio ? (
            <div className="prose">
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
