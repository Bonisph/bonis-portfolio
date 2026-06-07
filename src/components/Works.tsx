"use client";

import { works } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";

const ArrowUpRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-5.5M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M3 9h18v4.5" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export default function Works() {
  const { lang, t } = useLang();

  const experiences = works.filter((w) => w.type === "experience");
  const projects = works.filter((w) => w.type === "project");

  return (
    <section id="works" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
          Works
        </span>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-snug">
            {t({ pt: "O que já fiz", en: "What I've done" })}
          </h2>
          <p className="text-sm text-neutral-400">Proof of work</p>
        </div>

        {works.length === 0 && (
          <p className="text-neutral-300 italic text-sm">
            {t({ pt: "Nenhum work adicionado ainda.", en: "No works added yet." })}
          </p>
        )}

        {/* Experiences */}
        {experiences.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
              <BriefcaseIcon />
              {t({ pt: "Experiências", en: "Experience" })}
            </div>
            <div className="space-y-4">
              {experiences.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row md:items-center gap-4 border border-neutral-200 rounded-xl p-6 hover:border-neutral-400 transition-all duration-200"
                >
                  {/* Period */}
                  <div className="md:w-36 flex-shrink-0">
                    <span className="text-xs text-neutral-400 font-medium">{item.period}</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h3 className="font-semibold text-neutral-900">{t(item.title)}</h3>
                      {item.company && (
                        <span className="text-sm text-neutral-400">@ {item.company}</span>
                      )}
                    </div>
                    <p className="text-sm text-neutral-500 leading-relaxed">{t(item.description)}</p>
                  </div>

                  {/* Tags */}
                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-500 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
              <CodeIcon />
              {t({ pt: "Projetos", en: "Projects" })}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((item) => (
                <a
                  key={item.id}
                  href={item.link || "#"}
                  target={item.link ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="group block bg-white border border-neutral-200 rounded-xl p-6 hover:border-neutral-400 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs text-neutral-400">{item.period}</span>
                    {item.link && (
                      <span className="text-neutral-300 group-hover:text-neutral-700 transition-colors">
                        <ArrowUpRight />
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-neutral-700 transition-colors">
                    {t(item.title)}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                    {t(item.description)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-500 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
