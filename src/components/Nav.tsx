"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { locales, localeLabels, localeNames, type Locale } from "@/i18n/translations";

export default function Nav() {
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { href: string; label: string }[] = [
    { href: "#sobre", label: t.nav.sobre },
    { href: "#experiencia", label: t.nav.experiencia },
    { href: "#projetos", label: t.nav.projetos },
    { href: "#habilidades", label: t.nav.habilidades },
    { href: "#formacao", label: t.nav.formacao },
    { href: "#contato", label: t.nav.contato },
  ];

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-white/[0.06] bg-background/75 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <a href="#top" className="group flex items-baseline gap-1.5 text-lg" onClick={() => setOpen(false)}>
          <span className="font-light tracking-tight">Caroline</span>
          <span className="font-serif italic text-accent transition-opacity group-hover:opacity-80">
            Vantim
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-[13px] tracking-wide text-muted lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="relative transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div role="group" aria-label="Idioma" className="flex items-center text-xs font-medium tracking-widest">
            {locales.map((code: Locale, i) => (
              <span key={code} className="flex items-center">
                {i > 0 && <span className="mx-2 h-3 w-px bg-white/15" aria-hidden />}
                <button
                  onClick={() => setLocale(code)}
                  title={localeNames[code]}
                  aria-pressed={locale === code}
                  className={`py-1 transition-colors ${
                    locale === code ? "text-accent" : "text-muted hover:text-foreground"
                  }`}
                >
                  {localeLabels[code]}
                </button>
              </span>
            ))}
          </div>

          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full ring-1 ring-white/10 lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`h-px w-4 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="mx-auto flex max-w-6xl flex-col px-6 pb-6 sm:px-8 lg:hidden">
          {links.map((link) => (
            <li key={link.href} className="border-t border-white/[0.06]">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-2xl font-extralight tracking-tight"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
