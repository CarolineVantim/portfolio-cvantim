"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
        {t.about.title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground sm:text-lg">
        {t.about.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-3">
        {t.about.stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-2xl font-bold text-accent">{stat.value}</p>
            <p className="text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
