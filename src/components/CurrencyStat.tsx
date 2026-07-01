"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import CountUp from "@/components/CountUp";

let cachedRate: number | null = null;
let pending: Promise<number> | null = null;

function fetchRate(): Promise<number> {
  if (cachedRate !== null) return Promise.resolve(cachedRate);
  if (pending) return pending;
  pending = fetch("https://api.frankfurter.app/latest?from=BRL&to=USD")
    .then((r) => r.json())
    .then((d) => { cachedRate = d.rates?.USD ?? 0.18; return cachedRate!; })
    .catch(() => { cachedRate = 0.18; return 0.18; });
  return pending;
}

export default function CurrencyStat({ brl, ptValue }: { brl: number; ptValue: string }) {
  const { lang } = useLang();
  const [displayValue, setDisplayValue] = useState(ptValue);

  useEffect(() => {
    if (lang === "pt") { setDisplayValue(ptValue); return; }
    fetchRate().then((rate) => {
      const k = Math.round((brl * rate) / 1000);
      setDisplayValue(`$${k}k+`);
    });
  }, [lang, brl, ptValue]);

  return <CountUp value={displayValue} />;
}
