"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { Reveal, Section, SectionHeading } from "./ui";

export default function Education() {
  const { t } = useLanguage();

  return (
    <Section id="formacao">
      <SectionHeading index="05" label={t.nav.formacao} title={t.education.title} />

      <ul>
        {t.education.items.map((item) => (
          <li key={`${item.school}-${item.degree}`}>
            <Reveal className="group grid gap-4 border-t border-white/[0.08] py-10 md:grid-cols-[160px_1fr] md:gap-12">
              <span className="font-mono text-xs uppercase tracking-wider text-muted md:pt-2">{item.period}</span>
              <div>
                <h3 className="text-2xl font-light tracking-tight transition-colors group-hover:text-accent sm:text-[1.7rem]">
                  {item.degree}
                </h3>
                <p className="mt-2 font-serif text-lg italic text-accent/90">{item.school}</p>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
