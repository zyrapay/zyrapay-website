"use client";

import Logo from "../logo";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Button from "../button";

const Footer = () => {
  const t = useTranslations("Footer");
  const hero = useTranslations("HomePage");

  const navigation = [
    { id: "f1", label: t("links.community"), href: "#community" },
    { id: "f2", label: t("links.convert"), href: "#convert" },
    { id: "f3", label: t("links.contact"), href: "#contact" },
  ];

  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@zyrapay.com";

  const socials = [
    {
      id: "s1",
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/Zyra-mobilemoney",
    },
    { id: "s2", label: "X (Twitter)", href: "https://x.com/Zyrafinance" },
    {
      id: "s3",
      label: "Instagram",
      href: "https://instagram.com/Zyrafinance",
    },
    { id: "s4", label: contactEmail, href: `mailto:${contactEmail}` },
  ];

  const footerGroups = [
    {
      id: "navigation",
      title: t("navigation"),
      links: navigation.map((item) => ({
        id: item.id,
        label: item.label,
        href: item.href,
      })),
    },
    {
      id: "company",
      title: t("company"),
      links: [
        { id: "privacy", label: t("links.privacy"), href: "/privacy-policy" },
        { id: "terms", label: t("links.terms"), href: "/terms-of-service" },
      ],
    },
    {
      id: "socials",
      title: t("socials"),
      links: socials,
    },
  ];

  const disclaimers = [
    t("disclaimer.paragraph1"),
    t("disclaimer.paragraph2"),
    t("disclaimer.paragraph3"),
    t("disclaimer.paragraph4"),
    t("disclaimer.paragraph5"),
  ];

  return (
    <footer id="contact">
      <div className="mx-auto w-full max-w-7xl overflow-hidden bg-white p-4 sm:p-6 lg:p-8">
        <section className="relative mb-12 flex min-h-112 w-full items-center justify-center overflow-hidden rounded-4xl border-2 border-black/10 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.01)_100%),#fafafa] px-5 py-12 text-center sm:mb-16 sm:px-8 lg:mb-16 lg:min-h-136">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#c3ff4066,transparent_50%)]"
          />

          <div className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-6">
            <span className="text-[0.95rem] font-semibold tracking-wide text-[#3f7d00]">
              {t("tag")}
            </span>

            <h2 className="text-[2.5rem] font-semibold leading-[1.05] tracking-tighter text-gray-900 sm:text-5xl lg:text-[5rem]">
              {t("title")}
            </h2>

            <p className="max-w-136 text-base leading-[1.7] text-gray-600">
              {t("description")}
            </p>

            <Button variant="dark" popoverTarget="join_waitlist">
              {hero("heroSection.cta")}
            </Button>
          </div>
        </section>

        <div className="flex flex-col justify-between gap-12 border-b border-black/10 px-2 pb-12 sm:px-4 lg:flex-row lg:gap-20 lg:px-6">
          <div className="flex w-full max-w-[20rem] flex-col gap-6">
            <Logo />

            <p className="text-base leading-[1.7] text-gray-600">
              {t("description")}
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-8 lg:max-w-[650px] lg:grid-cols-3 lg:justify-items-end lg:gap-x-10">
            {footerGroups.map((group) => (
              <div key={group.id} className="flex min-w-0 flex-col gap-5">
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-500">
                  {group.title}
                </span>

                <ul className="m-0 flex list-none flex-col gap-4 p-0">
                  {group.links.map((item) => (
                    <li key={item.id}>
                      {item.href.startsWith("/") ? (
                        <Link
                          href={item.href}
                          className="break-words text-[0.95rem] leading-[1.5] text-gray-700 no-underline transition-colors duration-200 hover:text-[#3f7d00]"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="break-words text-[0.95rem] leading-[1.5] text-gray-700 no-underline transition-colors duration-200 hover:text-[#3f7d00]"
                          {...(item.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 px-2 pt-8 sm:px-4 md:flex-row md:items-center lg:px-6">
          <p className="text-sm leading-[1.5] text-gray-500">
            {t("copyright")}
          </p>

          <span className="text-sm leading-normal text-gray-500">
            {t("built")}
          </span>
        </div>

        <div className="grid gap-3 px-2 py-6 text-justify text-xs leading-relaxed text-gray-500 sm:px-4 lg:px-6">
          {disclaimers.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;