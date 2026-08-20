"use client";

import { useState } from "react";
import Image from "next/image";
import { education } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";
import type { Lang } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

function periodLabel(start: string, end: string | null, lang: Lang) {
  const present = lang === "pt" ? "Presente" : lang === "es" ? "Presente" : "Present";
  return `${start} – ${end ?? present}`;
}

function InstitutionLogo({ logo, name }: { logo: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (logo && !failed) {
    return (
      <Image
        src={logo}
        alt={name}
        width={56}
        height={56}
        onError={() => setFailed(true)}
        style={{ width: 56, height: 56, border: "2px solid var(--ink)", objectFit: "cover", flexShrink: 0, display: "block", background: "var(--bg)" }}
      />
    );
  }
  return (
    <div style={{
      width: 56, height: 56, border: "2px solid var(--ink)", flexShrink: 0,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "var(--bg-alt)",
    }}>
      <span style={{ fontSize: 18, fontWeight: 700, fontFamily: "var(--display)" }}>{name[0]}</span>
    </div>
  );
}

export default function Education() {
  const { lang, t } = useLang();

  if (education.length === 0) return null;

  return (
    <section id="formacao" style={{ borderBottom: "2px solid var(--ink)", background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 32px" }}>
        <SectionHead
          id="formacao-heading"
          title={t({ pt: "Formação", en: "Education", es: "Formación" })}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {education.map((edu, idx) => (
            <Reveal key={edu.id} delay={idx * 80}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "56px 1fr auto",
                gap: 20,
                alignItems: "start",
                border: "2px solid var(--ink)",
                background: "var(--bg)",
                padding: 28,
              }}>
                <InstitutionLogo logo={edu.logo} name={edu.institution} />

                <div>
                  <h3 style={{
                    fontFamily: "var(--display)",
                    fontWeight: 700, textTransform: "uppercase",
                    fontSize: 22, margin: 0, letterSpacing: "-0.01em", color: "var(--ink)",
                  }}>
                    {t(edu.degree)}
                  </h3>
                  <div style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", marginTop: 4, color: "var(--body)" }}>
                    {edu.institution}
                  </div>
                  {edu.description && t(edu.description) && (
                    <p className="prose" style={{ margin: "14px 0 0" }}>
                      {t(edu.description)}
                    </p>
                  )}
                </div>

                <div style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", color: "var(--muted)", whiteSpace: "nowrap" }}>
                  {periodLabel(edu.start, edu.end, lang)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
