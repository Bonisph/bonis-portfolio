"use client";

import { useState } from "react";
import { personal } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";

// Card com controle de erro de imagem por item
function PersonalCard({ item, index, isWide, t }: {
  item: typeof personal[number];
  index: number;
  isWide: boolean;
  t: (f: { pt: string; en: string }) => string;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = item.image && !imgFailed;

  return (
    <div
      className={`group relative bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-400 hover:shadow-md transition-all duration-300 ${isWide ? "md:col-span-2" : ""}`}
    >
      {showImage && (
        <div className={`relative overflow-hidden ${isWide ? "h-80" : "h-52"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={t(item.title)}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        </div>
      )}

      <div className="p-7">
        <span className="text-xs font-semibold text-neutral-300 mb-3 block">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-xl font-bold text-neutral-900 mb-3 leading-tight">
          {t(item.title)}
        </h3>
        <p className="text-sm text-neutral-500 leading-relaxed">
          {t(item.description)}
        </p>
      </div>
    </div>
  );
}

export default function Personal() {
  const { t } = useLang();

  return (
    <section id="pessoal" className="py-28 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
          {t({ pt: "Lado pessoal", en: "Personal side" })}
        </span>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-snug max-w-lg">
            {t({
              pt: "O que me forma além do trabalho",
              en: "What shapes me beyond work",
            })}
          </h2>
          <p className="text-sm text-neutral-400 max-w-xs text-right hidden md:block">
            {t({
              pt: "Paixões, valores e coisas que me movem",
              en: "Passions, values and things that drive me",
            })}
          </p>
        </div>

        {personal.length === 0 ? (
          <p className="text-neutral-300 italic text-sm">
            {t({ pt: "Nenhum item adicionado ainda.", en: "No items added yet." })}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personal.map((item, index) => {
              const isWide = personal.length % 2 !== 0 && index === personal.length - 1;
              return (
                <PersonalCard
                  key={item.id}
                  item={item}
                  index={index}
                  isWide={isWide}
                  t={t}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
