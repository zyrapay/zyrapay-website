import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import "../globals.css";

import { routing } from "@/i18n/routing";
import localFont from "next/font/local";
import CookieBanner from "@/src/components/common/cookie-banner";
import Footer from "@/src/components/common/footer";
import Nav from "@/src/components/common/nav";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}
const uncutSans = localFont({
  src: "../fonts/UncutSans-Variable.woff2",
  variable: "--font-uncut-sans",
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${uncutSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Nav />
          {children}
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
