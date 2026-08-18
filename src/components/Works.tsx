"use client";

import { useState } from "react";
import Image from "next/image";
import { experiences } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";
import type { Lang } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import TypeOnView from "@/components/TypeOnView";

function periodLabel(start: string, end: string | null, lang: Lang) {
  const present = lang === "pt" ? "Presente" : lang === "es" ? "Presente" : "Present";
  return `${start} – ${end ?? present}`;
}

function CompanyLogo({ logo, name }: { logo: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (logo && !failed) {
    return (
      <Image
        src={logo}
        alt={name}
        width={56}
        height={56}
        onError={() => setFailed(true)}
        style={{ width: 56, height: 56, border: "2px solid var(--ink)", objectFit: "cover", flexShrink: 0, display: "block" }}
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

export default function Works() {
  const { lang, t } = useLang();

  if (experiences.length === 0) return null;

  return (
    <section id="works" style={{ borderBottom: "2px solid var(--ink)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 32px" }}>
        <Reveal>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.2em",
            textTransform: "uppercase", marginBottom: 28, color: "var(--muted)",
          }}>
            (02) {t({ pt: "Experiência", en: "Experience", es: "Experiencia" })}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <TypeOnView
            as="h2"
            id="works-heading"
            className="display-heading"
            text={t({ pt: "Onde já trabalhei", en: "Where I've worked", es: "Dónde he trabajado" })}
            style={{
              fontSize: "clamp(34px, 4.5vw, 64px)",
              letterSpacing: "-0.02em",
              margin: "0 0 48px",
              color: "var(--ink)",
            }}
          />
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", borderTop: "2px solid var(--ink)" }}>
          {experiences.map((exp, expIdx) => (
            <Reveal key={exp.id} delay={expIdx * 80}>
              {exp.roles.length === 1 ? (
                /* Single role */
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "56px 1fr auto",
                  gap: 20,
                  alignItems: "start",
                  padding: "28px 0",
                  borderBottom: "2px solid var(--ink)",
                }}>
                  <CompanyLogo logo={exp.logo} name={exp.company} />

                  <div>
                    <h3 style={{
                      fontFamily: "var(--display)",
                      fontWeight: 700, textTransform: "uppercase",
                      fontSize: 22, margin: 0, letterSpacing: "-0.01em", color: "var(--ink)",
                    }}>
                      {t(exp.roles[0].title)}
                    </h3>
                    <div style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", marginTop: 4, color: "var(--body)" }}>
                      {exp.company}
                    </div>
                    {t(exp.roles[0].description) && (
                      <p style={{
                        fontSize: 13, fontWeight: 500, lineHeight: 1.7, textTransform: "uppercase",
                        color: "var(--body)", margin: "14px 0 0", maxWidth: 720,
                      }}>
                        {t(exp.roles[0].description)}
                      </p>
                    )}
                    {exp.roles[0].stats && exp.roles[0].stats.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                        {exp.roles[0].stats.map((stat, si) => (
                          <span key={si} className="stat-chip">{stat.value} {t(stat.label)}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", color: "var(--muted)", whiteSpace: "nowrap" }}>
                    {periodLabel(exp.roles[0].start, exp.roles[0].end, lang)}
                  </div>
                </div>
              ) : (
                /* Multi-role */
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "56px 1fr",
                  gap: 20,
                  alignItems: "start",
                  padding: "28px 0",
                  borderBottom: "2px solid var(--ink)",
                }}>
                  <CompanyLogo logo={exp.logo} name={exp.company} />

                  <div>
                    <h3 style={{
                      fontFamily: "var(--display)",
                      fontWeight: 700, textTransform: "uppercase",
                      fontSize: 22, margin: "0 0 20px", letterSpacing: "-0.01em", color: "var(--ink)",
                    }}>
                      {exp.company}
                    </h3>
                    <div style={{ borderLeft: "2px solid var(--ink)", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 28 }}>
                      {exp.roles.map((role, i) => (
                        <div key={i}>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                            <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", color: "var(--ink)" }}>
                              {t(role.title)}
                            </div>
                            <div style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", color: "var(--muted)" }}>
                              {periodLabel(role.start, role.end, lang)}
                            </div>
                          </div>
                          {t(role.description) && (
                            <p style={{
                              fontSize: 13, fontWeight: 500, lineHeight: 1.7, textTransform: "uppercase",
                              color: "var(--body)", margin: "10px 0 0", maxWidth: 720,
                            }}>
                              {t(role.description)}
                            </p>
                          )}
                          {role.stats && role.stats.length > 0 && (
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
                              {role.stats.map((stat, si) => (
                                <span key={si} className="stat-chip">{stat.value} {t(stat.label)}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
