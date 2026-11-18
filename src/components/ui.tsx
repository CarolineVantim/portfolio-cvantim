"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Aparece suavemente quando entra na tela. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/** Cabeçalho padrão das seções: "01 ──── SOBRE" + título grande. */
export function SectionHeading({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <Reveal className="mb-14 sm:mb-20">
      <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-muted">
        <span className="font-mono text-accent">{index}</span>
        <span className="h-px w-12 bg-gradient-to-r from-accent/60 to-transparent" />
        <span>{label}</span>
      </div>
      <h2 className="mt-6 max-w-3xl text-4xl font-extralight leading-[1.1] tracking-tight sm:text-6xl">
        {title}
      </h2>
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-28 sm:px-8 sm:py-36">{children}</div>
    </section>
  );
}

export function ArrowUpRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden className={className}>
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
