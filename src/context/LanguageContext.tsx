"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "pt" | "en" | "es";

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
  setLang: (l: Lang) => void;
  t: (field: { pt: string; en: string; es?: string }) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "pt",
  toggle: () => {},
  setLang: () => {},
  t: (f) => f.pt,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const toggle = () => setLang((l) => l === "pt" ? "en" : l === "en" ? "es" : "pt");
  const t = (field: { pt: string; en: string; es?: string }) => {
    if (lang === "es") return field.es ?? field.pt;
    return field[lang];
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
