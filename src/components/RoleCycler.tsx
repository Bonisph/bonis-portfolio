"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";

const ROLES = [
  { pt: "Embaixador Web3", en: "Web3 Ambassador", es: "Embajador Web3" },
  { pt: "Líder de Growth", en: "Growth Leader", es: "Líder de Growth" },
  { pt: "Criador de Conteúdo", en: "Content Creator", es: "Creador de Contenido" },
  { pt: "Palestrante", en: "Speaker", es: "Orador" },
] as const;

export default function RoleCycler() {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      const swap = setTimeout(() => {
        setIdx((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, 350);
      return () => clearTimeout(swap);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="inline-block text-blue-400 font-semibold"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
      }}
    >
      {t(ROLES[idx])}
    </span>
  );
}
