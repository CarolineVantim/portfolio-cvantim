"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { Reveal, Section, SectionHeading } from "./ui";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="habilidades" className="bg-surface/60">
      <SectionHeading index="04" label={t.nav.habilidades} title={t.skills.title} />

      <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
        {t.skills.categories.map((category, i) => (
          <Reveal key={category.name} delay={(i % 2) * 120} className="border-t border-white/[0.08] py-10">
            <h3 className="font-serif text-2xl italic text-accent">{category.name}</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full px-4 py-2 text-sm font-light text-foreground/85 ring-1 ring-white/10 transition-colors hover:text-foreground hover:ring-accent/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-16 md:grid-cols-2">
        <Reveal className="border-t border-white/[0.08] py-10">
          <h3 className="text-xs uppercase tracking-[0.3em] text-muted">{t.skills.certificationsTitle}</h3>
          <ul className="mt-6 space-y-4">
            {t.skills.certifications.map((cert) => (
              <li key={cert} className="flex items-center gap-4 text-lg font-light">
                <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-accent" />
                {cert}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120} className="border-t border-white/[0.08] py-10">
          <h3 className="text-xs uppercase tracking-[0.3em] text-muted">{t.skills.languagesTitle}</h3>
          <ul className="mt-6 space-y-4">
            {t.skills.languages.map((lang) => (
              <li key={lang.name} className="flex items-baseline justify-between gap-4 border-b border-white/[0.05] pb-3">
                <span className="text-lg font-light">{lang.name}</span>
                <span className="font-serif text-base italic text-muted">{lang.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
