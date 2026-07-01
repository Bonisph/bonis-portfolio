"use client";

import { siteConfig } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-neutral-900 dark:bg-neutral-950 border-t border-neutral-800 dark:border-neutral-800/60 text-neutral-400 dark:text-neutral-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm">
          © {year} {siteConfig.name}.{" "}
          {t({ pt: "Todos os direitos reservados.", en: "All rights reserved.", es: "Todos los derechos reservados." })}
        </p>

        <div className="flex items-center gap-6 text-sm">
          <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Twitter<span className="sr-only"> {t({ pt: "(abre em nova aba)", en: "(opens in new tab)", es: "(abre en nueva pestaña)" })}</span>
          </a>
          <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn<span className="sr-only"> {t({ pt: "(abre em nova aba)", en: "(opens in new tab)", es: "(abre en nueva pestaña)" })}</span>
          </a>
          <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub<span className="sr-only"> {t({ pt: "(abre em nova aba)", en: "(opens in new tab)", es: "(abre en nueva pestaña)" })}</span>
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7 7 7M12 3v18" />
            </svg>
            {t({ pt: "Topo", en: "Top", es: "Inicio" })}
          </button>
        </div>
      </div>
    </footer>
  );
}
