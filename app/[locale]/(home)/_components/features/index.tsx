import React from "react";
import styles from "./styles/Features.module.scss";
import { TbCashMove, TbExchange, TbLivePhoto, TbLockCog } from "react-icons/tb";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";

const FEATURES = [
  {
    icon: <TbExchange />,
    title: "Instant Transfers",
    description:
      "Send and receive money across borders within minutes — fast, smooth and reliable.",
    className: "large",
  },
  {
    icon: <TbLivePhoto />,
    title: "Live Exchange Rates",
    description: "Transparent real-time rates for Naira, Cedi, CFA and more.",
    className: "small",
  },
  {
    icon: <TbCashMove />,
    title: "Multi-Currency Wallets",
    description:
      "Manage multiple African currencies from one seamless account.",
    className: "small",
  },
  {
    img: <HiOutlineGlobeEuropeAfrica />,
    title: "Built for Africa",
    description:
      "Designed around African commerce, local payments and borderless movement.",
    className: "medium",
  },
  {
    img: <TbLockCog />,
    title: "Secure Infrastructure",
    description:
      "Modern infrastructure focused on speed, reliability and security.",
    className: "medium",
  },
];

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.features__container}>
        <div className={styles.features__top}>
          <p className={styles.features__label}>Core Features</p>

          <h2 className={styles.features__heading}>
            Built for modern African money movement.
          </h2>

          <p className={styles.features__text}>
            Everything you need to send, convert and manage money globally —
            with speed, clarity and confidence.
          </p>
        </div>

        <div className={styles.features__grid}>
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className={`${styles.features__card} ${
                styles[feature.className]
              }`}
            >
              <div className={styles.features__card_glow} />

              <div className={styles.features__content}>
                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>

              <div className={styles.features__visual}>
                <div className={styles.features__visual_blur} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
