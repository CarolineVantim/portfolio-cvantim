"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { contactInfo } from "@/i18n/translations";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 sm:flex-row sm:justify-between sm:px-8">
        <Image
          src="/logo-signature.png"
          alt={contactInfo.name}
          width={128}
          height={128}
        />
        <p className="text-xs tracking-wide text-muted">
          © {new Date().getFullYear()} {contactInfo.name}. {t.footer.rights}
        </p>
        <a href="#top" className="text-xs uppercase tracking-[0.3em] text-muted transition-colors hover:text-accent">
          ↑ {t.footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
