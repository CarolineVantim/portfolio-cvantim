"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { contactInfo } from "@/i18n/translations";
import { heroPhotos } from "@/data/photos";
import { Reveal, Section, SectionHeading } from "./ui";

function Portrait() {
  const photos = heroPhotos.filter((photo) => photo.src);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;
    const id = setInterval(() => setActive((i) => (i + 1) % photos.length), 5000);
    return () => clearInterval(id);
  }, [photos.length]);

  if (photos.length === 0) return null;

  return (
    <div className="relative mx-auto w-full max-w-sm lg:mx-0">
      {/* moldura deslocada */}
      <div aria-hidden className="absolute -inset-2 translate-x-2 translate-y-2 rounded-[2rem] sm:-inset-3 sm:translate-x-4 sm:translate-y-4 ring-1 ring-accent/25" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface ring-1 ring-white/10">
        {photos.map((photo, i) => (
          <Image
            key={photo.src}
            src={photo.src!}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 384px, 90vw"
            priority={i === 0}
            className={`object-cover transition-opacity duration-[1500ms] ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
          <span className="font-serif text-lg italic">{contactInfo.name}</span>
          {photos.length > 1 && (
            <div className="flex gap-1.5">
              {photos.map((photo, i) => (
                <button
                  key={photo.src}
                  aria-label={`${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-1 rounded-full transition-all ${
                    i === active ? "w-6 bg-accent" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const { t } = useLanguage();
  const [lead, ...paragraphs] = t.about.paragraphs;

  return (
    <Section id="sobre">
      <SectionHeading index="01" label={t.nav.sobre} title={t.about.title} />

      <div className="grid items-start gap-16 lg:grid-cols-[5fr_7fr] lg:gap-24">
        <Reveal>
          <Portrait />
        </Reveal>

        <Reveal delay={150}>
          <p className="text-xl font-light leading-relaxed text-foreground sm:text-2xl">{lead}</p>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-24 grid grid-cols-1 sm:grid-cols-3">
        {t.about.stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 120}
            className="border-t border-white/[0.08] py-8 sm:border-l sm:border-t-0 sm:px-8 sm:first:border-l-0 sm:first:pl-0"
          >
            <p className="font-serif text-3xl italic text-accent sm:text-4xl">{stat.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
