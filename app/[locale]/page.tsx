"use client";

import { motion } from "motion/react";
import { main } from "motion/react-client";
import { useTranslations } from "next-intl";
import FAQSection from "./(home)/_components/faqs";
import PhoneHomeScreen from "./(home)/_components/props/phoneMU";
import Button from "@/src/components/common/button";

const ease = [0.22, 1, 0.36, 1] as const;

const Page = () => {
  const t = useTranslations("HomePage.heroSection");

  const heading = [t("titleLine1"), t("titleLine2")];

  return (
    <main>
    <section className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col items-center justify-center space-y-6 px-4 py-32 text-center sm:px-6 lg:py-20">
      <h1 className="flex flex-col text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        {heading.map((line, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: index * 0.25, ease }}
            className="block"
          >
            {line}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65, ease }}
        className="mx-auto w-full max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg"
      >
        {t("description")}
      </motion.p>

      <motion.a
        href="#waitlist"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85, ease }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <Button>
            {t("cta")}
        </Button>


      </motion.a>
      <PhoneHomeScreen/>
    </section>
    <FAQSection />
    </main>
  );
};

export default Page;