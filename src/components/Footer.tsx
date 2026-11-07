"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { contactInfo } from "@/i18n/translations";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mx-auto max-w-5xl px-6 py-8 text-center text-xs text-muted">
      © {new Date().getFullYear()} {contactInfo.name}. {t.footer.rights}
    </footer>
  );
}
