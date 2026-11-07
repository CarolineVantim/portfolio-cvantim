"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import type { Dictionary } from "@/i18n/translations";

type Job = Dictionary["experience"]["jobs"][number];

// Agrupa cargos consecutivos na mesma empresa (ex.: promoções).
function groupByCompany(jobs: Job[]): Job[][] {
  const groups: Job[][] = [];
  for (const job of jobs) {
    const last = groups[groups.length - 1];
    if (last && last[0].company === job.company) last.push(job);
    else groups.push([job]);
  }
  return groups;
}

function Highlights({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
      {items.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  );
}

export default function Experience() {
  const { t } = useLanguage();
  const groups = groupByCompany(t.experience.jobs);

  return (
    <section id="experiencia" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
        {t.experience.title}
      </h2>

      <ol className="mt-8 space-y-10 border-l border-border pl-6 sm:pl-8">
        {groups.map((roles) => {
          const first = roles[0];
          const dot = (
            <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent sm:-left-[37px]" />
          );

          if (roles.length === 1) {
            return (
              <li key={`${first.company}-${first.role}`} className="relative">
                {dot}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold">{first.role}</h3>
                  <span className="text-sm text-muted">{first.period}</span>
                </div>
                <p className="text-sm font-medium text-accent">{first.company}</p>
                <p className="text-xs text-muted">{first.location}</p>
                <Highlights items={first.highlights} />
              </li>
            );
          }

          // Mesma empresa, vários cargos: o primeiro da lista é o mais recente (promoção).
          return (
            <li key={first.company} className="relative">
              {dot}
              <h3 className="text-lg font-semibold text-accent">{first.company}</h3>
              <p className="text-xs text-muted">{first.location}</p>

              <ol className="mt-4 space-y-6 border-l-2 border-dashed border-accent/40 pl-5">
                {roles.map((job, index) => (
                  <li key={job.role} className="relative">
                    <span className="absolute -left-[27px] top-2 h-2 w-2 rounded-full bg-accent" />
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-base font-semibold">{job.role}</h4>
                        {index < roles.length - 1 && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent">
                            <span aria-hidden>↑</span>
                            {t.experience.promotedLabel}
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-muted">{job.period}</span>
                    </div>
                    <Highlights items={job.highlights} />
                  </li>
                ))}
              </ol>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
