"use client";

import { useState } from "react";
import Image from "next/image";
import { personal } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

export default function Personal() {
  const { t } = useLang();

  return (
    <section id="pessoal" style={{ borderBottom: "2px solid var(--ink)", background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 32px" }}>
        <SectionHead
          id="pessoal-heading"
          title={t({ pt: "Além do trabalho", en: "Beyond work", es: "Más allá del trabajo" })}
          subtitle={t({ pt: "O que me forma como pessoa.", en: "What shapes me as a person.", es: "Lo que me forma como persona." })}
          airy
        />
        {personal.length === 0 ? (
          <p style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", color: "var(--faint)", fontStyle: "italic" }}>
            {t({ pt: "Nenhum item adicionado ainda.", en: "No items added yet.", es: "Ningún ítem añadido aún." })}
          </p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
            {personal.map((item) => (
              <PersonalItem key={item.id} item={item} t={t} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function PersonalItem({
  item,
  t,
}: {
  item: typeof personal[number];
  t: (f: { pt: string; en: string; es?: string }) => string;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = item.image && !imgFailed;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: showImage ? "0.9fr 1.1fr" : "1fr",
      gap: 48,
      alignItems: "center",
    }} className="personal-grid">
      {showImage && (
        <Reveal>
          <div style={{
            border: "2px solid var(--ink)",
            aspectRatio: "4/3",
            overflow: "hidden",
            position: "relative",
          }}>
            <Image
              src={item.image!}
              alt={t(item.title)}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              onError={() => setImgFailed(true)}
              style={{ objectFit: "cover", display: "block" }}
            />
          </div>
        </Reveal>
      )}

      <Reveal delay={80}>
        <h2
          className="editorial-heading"
          style={{ fontSize: "clamp(30px, 3.8vw, 52px)", margin: "0 0 22px" }}
        >
          {t(item.title)}
        </h2>

        <p className="prose" style={{ margin: "0 0 30px" }}>
          {t(item.description)}
        </p>

        {item.stats && item.stats.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {item.stats.map((stat, si) => (
              <PersonalStatCard key={si} value={stat.value} label={t(stat.label)} />
            ))}
          </div>
        )}
      </Reveal>
    </div>
  );
}

function PersonalStatCard({ value, label }: { value: string; label: string }) {
  return (
    <div
      style={{
        background: "var(--bg)",
        border: "2px solid var(--ink)",
        padding: 20,
        transition: "all .25s cubic-bezier(.4,0,.2,1)",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.28)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{
        fontFamily: "var(--display)",
        fontWeight: 700, fontSize: 30, color: "var(--ink)",
      }}>
        {value}
      </div>
      <div style={{ fontSize: 11, textTransform: "uppercase", marginTop: 6, opacity: 0.65, color: "var(--ink)" }}>
        {label}
      </div>
    </div>
  );
}
