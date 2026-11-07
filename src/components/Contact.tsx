"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { contactInfo } from "@/i18n/translations";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
          {t.contact.title}
        </h2>
        <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          {t.contact.heading}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted">{t.contact.subtitle}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${contactInfo.email}`}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {contactInfo.email}
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            {t.contact.linkedinLabel}
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            {t.contact.githubLabel}
          </a>
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            {contactInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
