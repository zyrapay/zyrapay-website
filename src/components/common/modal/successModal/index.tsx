import styles from "./SuccessModal.module.scss";
import Image from "next/image";
import SuccessLogoGIF from "@/assets/gif/success.gif";
import { useTranslations } from "next-intl";

const SuccessModal = () => {
  const t = useTranslations("Modal");
  return (
    <div className={styles.success}>
      <div className={styles.success__container}>
        <div className={styles.success__image_wrapper}>
          <Image src={SuccessLogoGIF} alt="SuccessLogoGIF" />
        </div>
        <div className={styles.success__content}>
          <h3>
            {t("waitlist.title")} <span>{t("waitlist.title_highlight")}</span>{" "}
          </h3>
          <p>
             {t("waitlist.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
