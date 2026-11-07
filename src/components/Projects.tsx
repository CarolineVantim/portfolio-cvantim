"use client";

import { useLanguage } from "@/i18n/LanguageContext";

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
        >
          {tag}
        </span>
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
    <section id="projetos" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
          {t.projects.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">{t.projects.subtitle}</p>

        <h3 className="mt-10 text-sm font-semibold text-muted">{t.projects.casesTitle}</h3>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {t.projects.items.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-border bg-background p-6"
            >
              <h4 className="text-base font-semibold">{project.title}</h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <Tags tags={project.tags} />
            </article>
          ))}
        </div>

        <h3 className="mt-12 text-sm font-semibold text-muted">{t.projects.reposTitle}</h3>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {t.projects.repos.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent/60"
            >
              <h4 className="text-base font-semibold">{repo.title}</h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {repo.description}
              </p>
              <Tags tags={repo.tags} />
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                <GitHubIcon />
                {t.projects.repoLinkLabel}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
