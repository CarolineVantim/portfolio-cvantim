"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import type { Dictionary } from "@/i18n/translations";
import { Reveal, Section, SectionHeading } from "./ui";

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
    <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-muted">
      {items.map((point, index) => (
        <li key={index} className="flex gap-4">
          <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-accent/60" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

function Role({ job, promoted, promotedLabel }: { job: Job; promoted: boolean; promotedLabel: string }) {
  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-light tracking-tight sm:text-3xl">{job.role}</h3>
          {promoted && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent ring-1 ring-accent/30">
              <span aria-hidden>↑</span>
              {promotedLabel}
            </span>
          )}
        </div>
        <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-muted">{job.period}</span>
      </div>
      <Highlights items={job.highlights} />
    </div>
  );
}

export default function Experience() {
  const { t } = useLanguage();
  const groups = groupByCompany(t.experience.jobs);

  return (
    <Section id="experiencia" className="bg-surface/60">
      <SectionHeading index="02" label={t.nav.experiencia} title={t.experience.title} />

      <ol>
        {groups.map((roles) => {
          const first = roles[0];
          return (
            <li key={`${first.company}-${first.role}`}>
              <Reveal className="grid gap-6 border-t border-white/[0.08] py-12 md:grid-cols-[220px_1fr] md:gap-12">
                <div>
                  <p className="font-serif text-2xl italic text-accent">{first.company}</p>
                  <p className="mt-1 text-xs text-muted">{first.location}</p>
                </div>

                {roles.length === 1 ? (
                  <Role job={first} promoted={false} promotedLabel={t.experience.promotedLabel} />
                ) : (
                  <ol className="relative space-y-12 border-l border-dashed border-accent/30 pl-8">
                    {roles.map((job, index) => (
                      <li key={job.role} className="relative">
                        <span
                          aria-hidden
                          className={`absolute -left-[37px] top-3 h-2.5 w-2.5 rounded-full ring-4 ring-surface ${
                            index === 0 ? "bg-accent" : "bg-muted"
                          }`}
                        />
                        <Role
                          job={job}
                          promoted={index < roles.length - 1}
                          promotedLabel={t.experience.promotedLabel}
                        />
                      </li>
                    ))}
                  </ol>
                )}
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
