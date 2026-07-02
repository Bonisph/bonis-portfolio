"use client";

import { useState } from "react";
import Image from "next/image";
import { education } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";
import type { Lang } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const ArrowUpRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
  </svg>
);

function InstitutionLogo({ logo, name, logoBg }: { logo: string; name: string; logoBg?: "dark" | "light" }) {
  const [failed, setFailed] = useState(false);
  const isDark = logoBg === "dark";
  const bg = isDark ? "bg-neutral-900 dark:bg-neutral-700" : "bg-neutral-100 dark:bg-neutral-800";

  if (logo && !failed) {
    return (
      <Image
        src={logo}
        alt={name}
        width={48}
        height={48}
        onError={() => setFailed(true)}
        className={`w-12 h-12 rounded-xl object-cover flex-shrink-0 ${bg}`}
      />
    );
  }
  return (
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${bg}`}>
      <span className={`text-lg font-bold ${isDark ? "text-white" : "text-neutral-600 dark:text-neutral-300"}`}>{name[0]}</span>
    </div>
  );
}

function periodLabel(start: string, end: string | null, lang: Lang) {
  const present = lang === "pt" ? "Presente" : lang === "es" ? "Presente" : "Present";
  return `${start} – ${end ?? present}`;
}

export default function Education() {
  const { lang, t } = useLang();

  if (education.length === 0) return null;

  return (
    <section id="formacao" aria-labelledby="formacao-heading" className="py-28 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
            {t({ pt: "Formação", en: "Education", es: "Formación" })}
          </span>

          <h2 id="formacao-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white leading-snug mb-14">
            {t({ pt: "Onde me formei", en: "Where I studied", es: "Dónde estudié" })}
          </h2>
        </Reveal>

        <div className="space-y-3">
          {education.map((edu, idx) => (
            <Reveal key={edu.id} delay={idx * 80}>
              <div className="border border-neutral-200 dark:border-neutral-700 rounded-2xl p-6 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex gap-4">
                  <InstitutionLogo logo={edu.logo} name={edu.institution} logoBg={edu.logoBg} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white leading-tight">
                          {t(edu.degree)}
                        </h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                          {edu.institution}
                        </p>
                        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">
                          {periodLabel(edu.start, edu.end, lang)}
                        </p>
                      </div>
                      {edu.link && (
                        <a
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ver ${edu.institution}`}
                          className="text-neutral-300 dark:text-neutral-600 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors flex-shrink-0"
                        >
                          <ArrowUpRight />
                        </a>
                      )}
                    </div>
                    {edu.description && t(edu.description) && (
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mt-3">
                        {t(edu.description)}
                      </p>
                    )}
                    {edu.stats && edu.stats.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-700/60">
                        {edu.stats.map((stat, si) => (
                          <div key={si} className="bg-neutral-50 dark:bg-neutral-800 rounded-lg px-3 py-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 hover:bg-white dark:hover:bg-neutral-700">
                            <p className="text-sm font-bold text-neutral-900 dark:text-white leading-none tabular-nums"><CountUp value={stat.value} /></p>
                            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1 leading-none whitespace-nowrap">{t(stat.label)}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
