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
            className="flex flex-col gap-1 border-b border-border pb-6 last:border-none sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <p className="font-semibold">{item.school}</p>
              <p className="text-sm text-muted">{item.degree}</p>
            </div>
            <span className="text-sm text-muted">{item.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
