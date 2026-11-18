import type { Metadata } from "next";
import { Manrope, Instrument_Serif, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Caroline Vantim — QA Engineer";
const description =
  "Portfólio de Caroline Vantim, QA Analyst especializada em automação de testes com IA, API testing e Shift Left.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-cvantim.vercel.app"),
  title,
  description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Caroline Vantim",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${instrumentSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
