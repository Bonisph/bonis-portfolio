"use client";

import { ReactNode } from "react";
import Reveal from "@/components/Reveal";

/* Every section opens the same way: a short title that matches the nav, and
   an optional subtitle that qualifies what the section actually contains.
   The subtitle is always visually quieter than the title — smaller, in the
   mono, muted — so the two never read as competing headings. */
export default function SectionHead({
  title,
  subtitle,
  id,
  airy = false,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  id?: string;
  /* Set when the section opens onto a photograph rather than text. */
  airy?: boolean;
}) {
  return (
    <div className={`section-head${airy ? " section-head--airy" : ""}`}>
      <Reveal>
        <h2 id={id} className="editorial-heading">
          {title}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={100}>
          <p className="section-sub">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
