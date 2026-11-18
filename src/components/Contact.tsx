"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { contactInfo } from "@/i18n/translations";
import { ArrowUpRight, Reveal } from "./ui";

export default function Contact() {
  const { t } = useLanguage();

  const links = [
    { href: contactInfo.linkedin, label: t.contact.linkedinLabel, external: true },
    { href: contactInfo.github, label: t.contact.githubLabel, external: true },
    { href: `tel:${contactInfo.phone.replace(/\s/g, "")}`, label: contactInfo.phone, external: false },
  ];

  return (
    <section id="contato" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[480px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.09] blur-[140px]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-32 text-center sm:px-8 sm:py-44">
        <Reveal>
          <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-[0.3em] text-muted">
            <span className="font-mono text-accent">06</span>
            <span className="h-px w-12 bg-gradient-to-r from-accent/60 to-transparent" />
            <span>{t.contact.title}</span>
          </div>
          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-extralight leading-[1.1] tracking-tight sm:text-6xl">
            {t.contact.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">{t.contact.subtitle}</p>
        </Reveal>

        <Reveal delay={150}>
          <a
            href={`mailto:${contactInfo.email}`}
            className="group mt-14 inline-flex items-center gap-3 font-serif text-3xl italic text-foreground transition-colors hover:text-accent sm:text-5xl"
          >
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
              {contactInfo.email}
            </span>
            <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-8 sm:w-8" />
          </a>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm ring-1 ring-white/10 transition-all hover:bg-white/[0.04] hover:ring-accent/50"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-accent" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
