"use client";

import { useState } from "react";
import Image from "next/image";
import { personal } from "@/data/portfolio";
import { useLang } from "@/context/LanguageContext";

function PersonalCard({ item, index, isWide, t }: {
  item: typeof personal[number];
  index: number;
  isWide: boolean;
  t: (f: { pt: string; en: string; es?: string }) => string;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = item.image && !imgFailed;

  return (
    <div
      className={`group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-md transition-all duration-300 ${isWide ? "md:col-span-2" : ""}`}
    >
      {/* Layout: texto à esquerda, imagem quadrada à direita */}
      <div className="flex flex-col md:flex-row h-full">

        {/* Texto */}
        <div className="flex-1 p-7 flex flex-col justify-center min-w-0">
          <span className="text-xs font-semibold text-neutral-300 dark:text-neutral-600 mb-3 block">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 leading-tight">
            {t(item.title)}
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {t(item.description)}
          </p>
        </div>

        {/* Imagem quadrada — lado direito */}
        {showImage && (
          <div className="md:w-72 md:flex-shrink-0 h-64 md:h-auto overflow-hidden">
            <Image
              src={item.image!}
              alt={t(item.title)}
              width={288}
              height={256}
              onError={() => setImgFailed(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Personal() {
  const { t } = useLang();

  return (
    <section id="pessoal" aria-labelledby="personal-heading" className="py-28 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
          {t({ pt: "Lado pessoal", en: "Personal side", es: "Lado personal" })}
        </span>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2 id="personal-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white leading-snug max-w-lg">
            {t({
              pt: "O que me forma além do trabalho",
              en: "What shapes me beyond work",
              es: "Lo que me define más allá del trabajo",
            })}
          </h2>
          <p className="text-sm text-neutral-400 max-w-xs text-right hidden md:block">
            {t({
              pt: "Paixões, valores e coisas que me movem",
              en: "Passions, values and things that drive me",
              es: "Pasiones, valores y cosas que me impulsan",
            })}
          </p>
        </div>

        {personal.length === 0 ? (
          <p className="text-neutral-300 italic text-sm">
            {t({ pt: "Nenhum item adicionado ainda.", en: "No items added yet.", es: "Ningún ítem añadido aún." })}
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
