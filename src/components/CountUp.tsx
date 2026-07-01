"use client";

import { useEffect, useRef, useState } from "react";

function parse(raw: string): { prefix: string; num: number; suffix: string } | null {
  const m = raw.match(/^((?:R\$)?[^0-9]*?)(\d[\d.]*)(.*)/);
  if (!m) return null;
  const numStr = m[2].replace(/\./g, "");
  const num = parseFloat(numStr);
  if (isNaN(num)) return null;
  return { prefix: m[1], num, suffix: m[3] };
}

export default function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const parsed = parse(value);

  useEffect(() => {
    if (!parsed) { setDisplay(value); return; }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1000;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const cur = Math.round(parsed.num * eased);
          setDisplay(`${parsed.prefix}${cur}${parsed.suffix}`);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref} className={className}>{parsed ? display : value}</span>;
}
