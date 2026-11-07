"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projetos" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
          {t.projects.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">{t.projects.subtitle}</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {t.projects.items.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="text-base font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
