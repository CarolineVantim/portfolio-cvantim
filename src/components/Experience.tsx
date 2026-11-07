"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
        {t.experience.title}
      </h2>

      <ol className="mt-8 space-y-10 border-l border-border pl-6 sm:pl-8">
        {t.experience.jobs.map((job) => (
          <li key={`${job.company}-${job.role}`} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent sm:-left-[37px]" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">{job.role}</h3>
              <span className="text-sm text-muted">{job.period}</span>
            </div>
            <p className="text-sm font-medium text-accent">{job.company}</p>
            <p className="text-xs text-muted">{job.location}</p>
            {job.highlights.length > 0 && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
                {job.highlights.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
