"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import styles from "./CookieBanner.module.scss";

const STORAGE_KEY = "Zyra_cookie_consent";

const CookieBanner = () => {
  const t = useTranslations("CookieBanner");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={t("label")}
      className={styles.banner}
    >
      <div className={styles.banner__content}>
        <p className={styles.banner__text}>
          {t("message")}{" "}
          <Link href="/privacy-policy" className={styles.banner__link}>
            {t("learnMore")}
          </Link>
        </p>
        <div className={styles.banner__actions}>
          <button
            type="button"
            onClick={decline}
            className={styles.banner__decline}
          >
            {t("decline")}
          </button>
          <button
            type="button"
            onClick={accept}
            className={styles.banner__accept}
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
