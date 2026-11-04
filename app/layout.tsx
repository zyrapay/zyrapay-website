import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Nav from "@/components/common/nav";
import Footer from "@/components/common/footer";
import CookieBanner from "@/components/common/cookie-banner";

const uncutSans = localFont({
  src: "./fonts/UncutSans-Variable.woff2",
  variable: "--font-uncut-sans",
  display: "swap",
});


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${uncutSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black focus:outline-2"
        >
          Skip to main content
        </a>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Nav />
          <main id="main-content" className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>

        {/* <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),
                  s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6a5f8604261fbd1d47c5b4dc/1ju2i71bq';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script> */}
      </body>
    </html>
  );
}
