"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { contactInfo } from "@/i18n/translations";

export default function Hero() {
  const { t } = useLanguage();
  const [firstName, ...rest] = contactInfo.name.split(" ");
  const roles = t.hero.headline.split("|").map((role) => role.trim());

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* fundo: grade + brilho */}
      <div aria-hidden className="hero-grid absolute inset-0" />
      <div
        aria-hidden
        className="absolute left-1/2 top-[38%] h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.13] blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-32 text-center sm:px-8">
        <div className="rise">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.03] px-4 py-1.5 text-xs tracking-wide text-muted ring-1 ring-white/10">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
            {t.hero.status}
          </span>

          <p className="mt-10 font-serif text-xl italic text-muted sm:text-2xl">
            {t.hero.greeting.trim()}
          </p>

          <h1 className="mt-2 text-[clamp(3.5rem,13vw,9.5rem)] font-extralight leading-[0.9] tracking-[-0.04em]">
            {firstName}
            <br />
            <span className="text-shine font-serif font-normal italic tracking-[-0.02em]">
              {rest.join(" ")}
            </span>
          </h1>

          <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-7 gap-y-2.5 text-[11px] uppercase tracking-[0.25em] text-muted sm:text-xs">
            {roles.map((role) => (
              <li key={role} className="flex items-center gap-2.5">
                <span className="h-1 w-1 rounded-full bg-accent/70" aria-hidden />
                {role}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-muted/80">
            {contactInfo.city}, {t.hero.country}
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="#experiencia"
              className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_0_40px_-8px_rgb(45_212_191/0.7)] transition-all hover:shadow-[0_0_60px_-6px_rgb(45_212_191/0.9)]"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contato"
              className="rounded-full px-7 py-3.5 text-sm font-semibold ring-1 ring-white/15 transition-colors hover:bg-white/[0.04] hover:ring-white/30"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label={t.nav.sobre}
        className="scroll-cue absolute bottom-8 left-1/2 h-14 w-px -translate-x-1/2 overflow-hidden bg-white/10"
      />
    </section>
  );
}
