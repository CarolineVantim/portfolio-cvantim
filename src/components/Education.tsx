"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="formacao" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
        {t.education.title}
      </h2>

      <ul className="mt-8 space-y-6">
        {t.education.items.map((item) => (
          <li
            key={`${item.school}-${item.degree}`}
            className="border-b border-border pb-6 last:border-none"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-lg font-semibold">{item.degree}</h3>
              <span className="shrink-0 text-sm text-muted">{item.period}</span>
            </div>
            <p className="text-sm font-medium text-accent">{item.school}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
