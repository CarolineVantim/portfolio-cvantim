"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, locales, type Locale } from "./translations";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof dictionaries)[Locale];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "locale";
const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en", it: "it" };

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as string[]).includes(value);
}

/** Idioma salvo pela pessoa ou, na primeira visita, o idioma do navegador. */
function preferredLocale(): Locale | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) return saved;
  } catch {
    // localStorage indisponível (modo privado, cookies bloqueados): segue sem salvar
  }
  const browser = navigator.language?.slice(0, 2).toLowerCase();
  return isLocale(browser) ? browser : null;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Começa sempre em "pt" para o HTML do servidor e do cliente baterem;
  // a preferência é aplicada logo depois de montar.
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const preferred = preferredLocale();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- só existe no navegador
    if (preferred && preferred !== "pt") setLocaleState(preferred);
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLang[locale];
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale: (next: Locale) => {
        setLocaleState(next);
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch {
          // sem persistência, mas a troca funciona
        }
      },
      t: dictionaries[locale],
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
