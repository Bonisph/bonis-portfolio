"use client";

import { siteConfig, aboutStats } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLang();
  const bio = t(siteConfig.bio);
  const filledStats = aboutStats.filter((s) => s.value);

  return (
    <section id="sobre" aria-labelledby="about-heading" className="py-28 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
          {t({ pt: "Sobre", en: "About", es: "Sobre mí" })}
        </span>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white leading-snug mb-6">
              {t({ pt: "Quem é Pedro Bonis?", en: "Who is Pedro Bonis?", es: "¿Quién es Pedro Bonis?" })}
            </h2>
            {bio ? (
              <div className="space-y-4 text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {bio.split("\n").filter(Boolean).map((paragraph, i) => (
                  <p key={i}>{paragraph.trim()}</p>
                ))}
              </div>
            ) : (
              <p className="text-neutral-300 italic text-sm">
                {t({ pt: "Bio ainda não adicionada.", en: "Bio not added yet.", es: "Bio aún no añadida." })}
              </p>
            )}
          </div>

          {/* Stats — só renderiza se tiver dados */}
          {filledStats.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {filledStats.map((stat) => (
                <div key={stat.value} className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
                  <p className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-neutral-400">{t(stat.label)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
