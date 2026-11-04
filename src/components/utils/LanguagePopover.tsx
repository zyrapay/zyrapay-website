"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { Global, Translate } from "iconsax-reactjs";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

const LanguagePopover = () => {
  const t = useTranslations("Translation");

  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", label: t("english") },
    { code: "fr", label: t("french") },
    { code: "sw", label: t("swahili") },
  ];

  const switchLocale = (newLocale: string) => {
    setOpen(false);
    if (newLocale === currentLocale) return;

    router.replace(pathname, { locale: newLocale });
    router.refresh();
  };

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(true)}
        onFocus={() => setOpen(true)}
        aria-label={`Select language. Current language: ${currentLocale.toUpperCase()}`}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-1.5 transition-colors duration-300 hover:bg-gray-100"
      >
        <Global size={20} color="#1c1c1c" variant="TwoTone" />
        <span className="text-sm font-medium text-gray-900">
          {currentLocale.toUpperCase()}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          // pt-2 is part of the hover area, so the cursor never "leaves" between button and card
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{ transformOrigin: "top right" }}
            className="absolute right-0 top-full z-[110] pt-2"
          >
            <div className="w-fit min-w-[220px] rounded-xl border border-gray-100 bg-white p-4 shadow-lg">
              <div className="mb-4">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Select your language
                </span>
              </div>

              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                {languages.map((lang) => {
                  const isActive = currentLocale === lang.code;

                  return (
                    <li key={lang.code}>
                      <button
                        type="button"
                        onClick={() => switchLocale(lang.code)}
                        aria-current={isActive ? "true" : undefined}
                        className={`flex w-full cursor-pointer items-center gap-3 rounded-[10px] border px-4 py-3 text-left text-sm font-medium transition-colors duration-200 ${
                          isActive
                            ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                            : "border-transparent bg-transparent text-gray-500 hover:bg-black/[0.04] hover:text-gray-900"
                        }`}
                      >
                        <Translate
                          size={20}
                          variant="TwoTone"
                          color={isActive ? "#4f46e5" : "currentColor"}
                        />
                        <span>{lang.label}</span>
                        {isActive && (
                          <span className="ml-auto text-xs font-semibold">✓</span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LanguagePopover;