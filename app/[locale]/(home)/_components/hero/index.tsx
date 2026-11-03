"use client";
import { useTranslations } from "next-intl";
import styles from "./styles/Hero.module.scss";
import Button from "@/components/common/button";
import Modal from "@/components/common/modal";
import WaitlistForm from "@/app/[locale]/(home)/_components/form/Waitlist";
import SuccessModal from "@/components/common/modal/successModal";
import Image from "next/image";
import heroImage from "@/assets/brand/hands.png";

const HeroSection = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero_wrapper}>
          <div className={styles.border_round}>
            <div className={styles.hero_content}>
              <div className={styles.hero_content_left}>
                <div className={styles.hero_content_left_top}>
                  <h1>{t("heroSection.title")}</h1>
                  <p>{t("heroSection.description")}</p>
                </div>
                <Button variant={"secondary"} popoverTarget="join_waitlist">
                  {t("heroSection.cta")}
                </Button>
              </div>

              <div className={styles.hero_content_right}>
                <div className={styles.hero_image_wrapper}>
                  <Image
                    src={heroImage}
                    alt="Zyra mobile money transfer"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.hero_image}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal id="join_waitlist">
        <WaitlistForm />
      </Modal>

      <Modal id="success_waitlist">
        <SuccessModal />
      </Modal>
    </>
  );
};

export default HeroSection;
