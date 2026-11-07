"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { locales, localeLabels, localeNames, type Locale } from "@/i18n/translations";
import { contactInfo } from "@/i18n/translations";

export default function Nav() {
  const { locale, setLocale, t } = useLanguage();

  const links: { href: string; label: string }[] = [
    { href: "#sobre", label: t.nav.sobre },
    { href: "#habilidades", label: t.nav.habilidades },
    { href: "#experiencia", label: t.nav.experiencia },
    { href: "#projetos", label: t.nav.projetos },
    { href: "#formacao", label: t.nav.formacao },
    { href: "#contato", label: t.nav.contato },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          {contactInfo.name}
        </a>
        <ul className="hidden gap-6 text-sm text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          role="group"
          aria-label="Selecionar idioma"
          className="flex items-center gap-1 rounded-full bg-accent p-1 text-accent-foreground"
        >
          {locales.map((code: Locale) => (
            <button
              key={code}
              onClick={() => setLocale(code)}
              title={localeNames[code]}
              aria-pressed={locale === code}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-opacity sm:text-sm ${
                locale === code ? "bg-accent-foreground/20" : "opacity-70 hover:opacity-100"
              }`}
            >
              {localeLabels[code]}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
