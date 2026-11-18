"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowUpRight, Reveal, Section, SectionHeading } from "./ui";

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-accent/80">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4 fill-current">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projetos">
      <SectionHeading index="03" label={t.nav.projetos} title={t.projects.title} />
      <Reveal>
        <p className="-mt-8 mb-16 max-w-2xl text-base leading-relaxed text-muted">{t.projects.subtitle}</p>
      </Reveal>

      <Reveal>
        <h3 className="mb-6 text-xs uppercase tracking-[0.3em] text-muted">{t.projects.reposTitle}</h3>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {t.projects.repos.map((repo, i) => (
          <Reveal key={repo.url} delay={i * 120} className="h-full">
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="lux-card group flex h-full flex-col p-8 sm:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <h4 className="text-2xl font-light tracking-tight sm:text-3xl">{repo.title}</h4>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-1 ring-white/10 transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground group-hover:ring-accent">
                  <ArrowUpRight />
                </span>
              </div>
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-muted">{repo.description}</p>
              <Tags tags={repo.tags} />
              <span className="mt-8 inline-flex items-center gap-2 border-t border-white/[0.06] pt-6 text-sm text-muted transition-colors group-hover:text-foreground">
                <GitHubIcon />
                {t.projects.repoLinkLabel}
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="mb-6 mt-24 text-xs uppercase tracking-[0.3em] text-muted">{t.projects.casesTitle}</h3>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {t.projects.items.map((project, i) => (
          <Reveal key={project.title} delay={i * 120} className="h-full">
            <article className="lux-card flex h-full flex-col p-8">
              <span className="font-serif text-4xl italic text-accent/70">0{i + 1}</span>
              <h4 className="mt-6 text-xl font-light tracking-tight">{project.title}</h4>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
              <Tags tags={project.tags} />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
