"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { contactInfo } from "@/i18n/translations";
import { heroPhotos } from "@/data/photos";
import PhotoCarousel from "./PhotoCarousel";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
      <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl text-center lg:text-left">
          <p className="mb-3 text-sm font-medium text-accent">{t.hero.greeting}</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{contactInfo.name}</h1>
          <p className="mt-3 text-base text-muted sm:text-lg">{t.hero.headline}</p>
          <p className="mt-1 text-sm text-muted">
            {contactInfo.city}, {t.hero.country}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
            <a
              href="#experiencia"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contato"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <PhotoCarousel photos={heroPhotos} />
      </div>
    </section>
  );
}
