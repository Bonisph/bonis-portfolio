"use client";

import { useState } from "react";
import { experiences, projects } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";

const ArrowUpRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
  </svg>
);

// Logo da empresa: usa imagem se disponível, senão inicial
function CompanyLogo({ logo, name }: { logo: string; name: string }) {
  const [failed, setFailed] = useState(false);

  if (logo && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo}
        alt={name}
        onError={() => setFailed(true)}
        className="w-12 h-12 rounded-xl object-cover flex-shrink-0 bg-neutral-100"
      />
    );
  }
  return (
    <div className="w-12 h-12 rounded-xl bg-neutral-200 flex items-center justify-center flex-shrink-0">
      <span className="text-lg font-bold text-neutral-600">{name[0]}</span>
    </div>
  );
}

function periodLabel(start: string, end: string | null, lang: string) {
  const present = lang === "pt" ? "Presente" : "Present";
  return `${start} – ${end ?? present}`;
}

export default function Works() {
  const { lang, t } = useLang();

  return (
    <section id="works" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
          {t({ pt: "Experiência", en: "Experience" })}
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-snug mb-14">
          {t({ pt: "Onde já trabalhei", en: "Where I've worked" })}
        </h2>

        {/* ── EXPERIÊNCIAS ─────────────────────────────────────── */}
        {experiences.length > 0 && (
          <div className="space-y-2 mb-16">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="border border-neutral-200 rounded-2xl p-6 hover:border-neutral-300 hover:shadow-sm transition-all duration-200"
              >
                {exp.roles.length === 1 ? (
                  /* ── Cargo único — logo + info na mesma linha ── */
                  <div className="flex gap-4">
                    <CompanyLogo logo={exp.logo} name={exp.company} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <div>
                          <h3 className="font-semibold text-neutral-900 leading-tight">
                            {t(exp.roles[0].title)}
                          </h3>
                          <p className="text-sm text-neutral-500 mt-0.5">
                            {exp.company}
                          </p>
                          <p className="text-xs text-neutral-400 mt-0.5">
                            {periodLabel(exp.roles[0].start, exp.roles[0].end, lang)}
                          </p>
                        </div>
                        {exp.link && (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer"
                            className="text-neutral-300 hover:text-neutral-700 transition-colors flex-shrink-0">
                            <ArrowUpRight />
                          </a>
                        )}
                      </div>
                      {t(exp.roles[0].description) && (
                        <p className="text-sm text-neutral-500 leading-relaxed mt-3">
                          {t(exp.roles[0].description)}
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  /* ── Múltiplos cargos — empresa no topo, cargos abaixo ── */
                  <div>
                    {/* Cabeçalho da empresa */}
                    <div className="flex items-center gap-4 mb-5">
                      <CompanyLogo logo={exp.logo} name={exp.company} />
                      <div className="flex items-center justify-between flex-1 gap-2 flex-wrap">
                        <h3 className="font-semibold text-neutral-900">{exp.company}</h3>
                        {exp.link && (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer"
                            className="text-neutral-300 hover:text-neutral-700 transition-colors">
                            <ArrowUpRight />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Cargos agrupados com linha vertical */}
                    <div className="ml-16 border-l-2 border-neutral-100 pl-5 space-y-5">
                      {exp.roles.map((role, i) => (
                        <div key={i}>
                          <p className="font-medium text-neutral-800 leading-tight">
                            {t(role.title)}
                          </p>
                          <p className="text-sm text-neutral-400 mt-0.5">
                            {periodLabel(role.start, role.end, lang)}
                          </p>
                          {t(role.description) && (
                            <p className="text-sm text-neutral-500 leading-relaxed mt-2">
                              {t(role.description)}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── PROJETOS (se houver) ─────────────────────────────── */}
        {projects.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
              {t({ pt: "Projetos", en: "Projects" })}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((proj) => (
                <a key={proj.id} href={proj.link || "#"} target="_blank" rel="noopener noreferrer"
                  className="group block border border-neutral-200 rounded-2xl p-6 hover:border-neutral-400 hover:shadow-md transition-all duration-200">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs text-neutral-400">{proj.period}</span>
                    {proj.link && (
                      <span className="text-neutral-300 group-hover:text-neutral-700 transition-colors">
                        <ArrowUpRight />
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{t(proj.title)}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-4">{t(proj.description)}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-500 rounded-full">{tag}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {experiences.length === 0 && projects.length === 0 && (
          <p className="text-neutral-300 italic text-sm">
            {t({ pt: "Nenhuma experiência adicionada ainda.", en: "No experience added yet." })}
          </p>
        )}
      </div>
    </section>
  );
}
