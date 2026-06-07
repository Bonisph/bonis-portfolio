"use client";

import { siteConfig } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-neutral-900 border-t border-neutral-800 text-neutral-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {year} {siteConfig.name} —{" "}
          {t({ pt: "Todos os direitos reservados.", en: "All rights reserved." })}
        </p>

        <div className="flex items-center gap-6 text-sm">
          <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Twitter
          </a>
          <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
