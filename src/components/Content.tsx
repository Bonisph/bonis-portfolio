"use client";

import Image from "next/image";
import { content } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import TypeOnView from "@/components/TypeOnView";

export default function Content() {
  const { t } = useLang();

  return (
    <section id="conteudo" style={{ borderBottom: "2px solid var(--ink)", background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 32px" }}>
        <Reveal>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.2em",
            textTransform: "uppercase", marginBottom: 28, color: "var(--muted)",
          }}>
            (05) {t({ pt: "Conteúdo & Mídia", en: "Content & Media", es: "Contenido & Medios" })}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <TypeOnView
            as="h2"
            id="content-heading"
            className="display-heading"
            text={t({ pt: "Conteúdos", en: "Content", es: "Contenido" })}
            style={{
              fontSize: "clamp(34px, 4.5vw, 64px)",
              letterSpacing: "-0.02em",
              margin: "0 0 48px",
              color: "var(--ink)",
            }}
          />
        </Reveal>

        {content.length === 0 ? (
          <p style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", color: "var(--faint)", fontStyle: "italic" }}>
            {t({ pt: "Nenhum conteúdo adicionado ainda.", en: "No content added yet.", es: "Ningún contenido añadido aún." })}
          </p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "2px solid var(--ink)" }}>
            {content.map((item, i) => (
              <Reveal key={item.id} delay={i * 60}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap",
                    padding: "20px 0",
                    borderBottom: "2px solid var(--ink)",
                    textDecoration: "none",
                    transition: "background .2s",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                >
                  {item.thumbnail && (
                    <div style={{
                      position: "relative", width: 80, height: 56, flexShrink: 0,
                      overflow: "hidden", border: "2px solid var(--ink)",
                    }}>
                      <Image
                        fill
                        sizes="80px"
                        src={item.thumbnail}
                        alt={t(item.title)}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}

                  <div style={{ width: 110, flexShrink: 0 }}>
                    <span className="event-chip">{item.platform}</span>
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{
                      fontFamily: "var(--display)",
                      fontWeight: 700, fontSize: 15, textTransform: "uppercase",
                      letterSpacing: "-0.01em", color: "var(--ink)", margin: "0 0 4px",
                      overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    }}>
                      {t(item.title)}
                    </h3>
                    <p style={{
                      fontSize: 12, fontWeight: 500, lineHeight: 1.6,
                      textTransform: "uppercase", color: "var(--muted)",
                      margin: 0, overflow: "hidden", display: "-webkit-box",
                      WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                    } as React.CSSProperties}>
                      {t(item.excerpt)}
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", color: "var(--muted)" }}>
                      {item.date}
                    </span>
                    <span style={{ fontSize: 18, color: "var(--ink)", lineHeight: 1 }} aria-hidden="true">↗</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
