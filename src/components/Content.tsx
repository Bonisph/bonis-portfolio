"use client";

import { content } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";

const ArrowUpRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const platformColor: Record<string, string> = {
  LinkedIn:  "bg-blue-50 text-blue-600",
  Twitter:   "bg-neutral-100 text-neutral-700",
  YouTube:   "bg-red-50 text-red-600",
  Instagram: "bg-pink-50 text-pink-600",
  Medium:    "bg-green-50 text-green-700",
  Substack:  "bg-orange-50 text-orange-600",
};

export default function Content() {
  const { t } = useLang();

  return (
    <section id="conteudo" className="py-28 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
          {t({ pt: "Conteúdo", en: "Content" })}
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white leading-snug mb-14">
          {t({ pt: "Conteúdos produzidos", en: "Published content" })}
        </h2>

        {content.length === 0 ? (
          <p className="text-neutral-300 italic text-sm">
            {t({ pt: "Nenhum conteúdo adicionado ainda.", en: "No content added yet." })}
          </p>
        ) : (
          <div className="space-y-4">
            {content.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center gap-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-5 hover:border-neutral-400 dark:hover:border-neutral-500 hover:shadow-md transition-all duration-200"
              >
                {/* Thumbnail opcional */}
                {item.thumbnail && (
                  <div className="md:w-20 md:h-14 w-full h-36 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.thumbnail}
                      alt={t(item.title)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Platform badge */}
                <div className="md:w-32 flex-shrink-0">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${platformColor[item.platform] ?? "bg-neutral-100 text-neutral-600"}`}>
                    {item.platform}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                    {t(item.title)}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2">
                    {t(item.excerpt)}
                  </p>
                </div>

                {/* Date + Arrow */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs text-neutral-400">{item.date}</span>
                  <span className="text-neutral-300 group-hover:text-neutral-700 transition-colors">
                    <ArrowUpRight />
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
