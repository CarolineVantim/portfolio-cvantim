"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="habilidades" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
          {t.skills.title}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {t.skills.categories.map((category) => (
            <div key={category.name}>
              <h3 className="mb-3 text-sm font-semibold text-foreground">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-border pt-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              {t.skills.certificationsTitle}
            </h3>
            <ul className="space-y-1 text-sm text-muted">
              {t.skills.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              {t.skills.languagesTitle}
            </h3>
            <ul className="space-y-1 text-sm text-muted">
              {t.skills.languages.map((lang) => (
                <li key={lang.name}>
                  {lang.name} — {lang.level}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
