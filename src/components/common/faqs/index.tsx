"use client";

import style from "./FAQ.module.scss";
import { useTranslations } from "next-intl";
import { TbCancel, TbChevronDown } from "react-icons/tb";

const FAQSection = () => {
  const t = useTranslations("FAQ");

  const questions = [
    { id: "q1" },
    { id: "q2" },
    { id: "q3" },
    { id: "q4" },
    { id: "q5" },
  ];

  return (
    <section className={style.faq} id="faq">
      <div className={style.faq__wrapper}>
        <div className={style.faq__header}>
          <span>{t("tag")}</span>

          <h2>{t("title")}</h2>

          <p>{t("description")}</p>
        </div>

        <div className={style.faq__list}>
          {questions.map((item, index) => (
            <details key={item.id} name="faq" className={style.faq__item}>
              <summary className={style.faq__summary}>
                <span className={style.faq__number}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={style.faq__question}>
                  {t(`items.${item.id}.question`)}
                </span>

                <TbChevronDown className={style.faq__icon} aria-hidden="true" />
              </summary>

              <div className={style.faq__answer}>
                <p>{t(`items.${item.id}.answer`)}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
