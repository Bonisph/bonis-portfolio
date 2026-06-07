"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "pt" | "en";

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
  t: (field: { pt: string; en: string }) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "pt",
  toggle: () => {},
  t: (f) => f.pt,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const toggle = () => setLang((l) => (l === "pt" ? "en" : "pt"));
  const t = (field: { pt: string; en: string }) => field[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
