import type { Metadata } from "next";
import Link from "next/link";
import styles from "./styles/Page.module.scss";

const CONTACT_EMAIL = process.env.Zyra_CONTACT_EMAIL ?? "info@zyrapay.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Zyra collects, uses, and protects your personal information.",
};

const LAST_UPDATED = "May 24, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.page__inner}>
        <Link href="/" className={styles.page__back} aria-label="Back to home">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M10 12L6 8l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to home
        </Link>

        <header className={styles.page__header}>
          <span className={styles.page__tag}>Legal</span>
          <h1 className={styles.page__title}>Privacy Policy</h1>
          <p className={styles.page__updated}>Last updated: {LAST_UPDATED}</p>
        </header>

        <div className={styles.page__body}>
          <section className={styles.section} aria-labelledby="intro">
            <h2 className={styles.section__title} id="intro">
              1. Introduction
            </h2>
            <p className={styles.section__text}>
              Zyra ("we", "our", "us") operates a Nigerian payments platform
              that helps businesses and ride-hailing drivers receive money
              instantly. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our mobile
              application and website (collectively, the "Service").
            </p>
            <p className={styles.section__text}>
              By using the Service you agree to the collection and use of
              information in accordance with this policy. If you do not agree,
              please do not use the Service.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="info-collect">
            <h2 className={styles.section__title} id="info-collect">
              2. Information We Collect
            </h2>
            <p className={styles.section__text}>
              We collect information you provide directly and information
              generated automatically when you use the Service:
            </p>
            <ul className={styles.section__list}>
              <li>
                <strong>Identity data</strong> — full name, date of birth, BVN,
                NIN, and government-issued ID (collected as part of KYC
                verification required by Nigerian regulations).
              </li>
              <li>
                <strong>Contact data</strong> — email address, phone number, and
                physical address.
              </li>
              <li>
                <strong>Financial data</strong> — bank account details, wallet
                balance, transaction history, and payment records.
              </li>
              <li>
                <strong>Device data</strong> — device type, operating system,
                unique device identifiers, and IP address.
              </li>
              <li>
                <strong>Usage data</strong> — pages visited, features used,
                time spent, and crash reports.
              </li>
              <li>
                <strong>Location data</strong> — coarse location (city/region)
                derived from IP address, and precise GPS location only if
                explicitly granted for QR payment features.
              </li>
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="how-use">
            <h2 className={styles.section__title} id="how-use">
              3. How We Use Your Information
            </h2>
            <p className={styles.section__text}>
              We use collected information to:
            </p>
            <ul className={styles.section__list}>
              <li>
                Create and manage your account and wallet.
              </li>
              <li>
                Process payments, transfers, and merchant collections.
              </li>
              <li>
                Verify your identity and comply with KYC/AML obligations under
                Nigerian law (CBN regulations).
              </li>
              <li>
                Detect and prevent fraud, money laundering, and unauthorised
                transactions.
              </li>
              <li>
                Send transactional notifications (payment confirmations, alerts,
                security codes).
              </li>
              <li>
                Improve and personalise the Service based on usage patterns.
              </li>
              <li>
                Comply with legal obligations, court orders, and regulatory
                requirements.
              </li>
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="sharing">
            <h2 className={styles.section__title} id="sharing">
              4. How We Share Your Information
            </h2>
            <p className={styles.section__text}>
              We do not sell your personal data. We share information only in
              the following circumstances:
            </p>
            <ul className={styles.section__list}>
              <li>
                <strong>Licensed banking and payment partners</strong> — to
                process transactions, fund wallets, and settle payments.
              </li>
              <li>
                <strong>KYC and identity verification providers</strong> — to
                validate identity documents as required by the CBN.
              </li>
              <li>
                <strong>Fraud and risk management services</strong> — to
                identify suspicious activity and protect users.
              </li>
              <li>
                <strong>Regulatory authorities</strong> — when required by law,
                court order, or to respond to lawful requests from public
                authorities.
              </li>
              <li>
                <strong>Service providers</strong> — cloud infrastructure,
                analytics, and support tools acting on our behalf under strict
                data processing agreements.
              </li>
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="retention">
            <h2 className={styles.section__title} id="retention">
              5. Data Retention
            </h2>
            <p className={styles.section__text}>
              We retain your personal data for as long as your account is active
              and for up to seven (7) years thereafter, as required by Nigerian
              financial regulations. Transaction records may be retained longer
              where required by law or for the resolution of disputes.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="security">
            <h2 className={styles.section__title} id="security">
              6. Security
            </h2>
            <p className={styles.section__text}>
              We implement industry-standard security measures including TLS
              encryption in transit, AES-256 encryption at rest, multi-factor
              authentication, and regular security audits. No system is
              completely secure; if you believe your account has been
              compromised, contact us immediately at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="rights">
            <h2 className={styles.section__title} id="rights">
              7. Your Rights
            </h2>
            <p className={styles.section__text}>
              Subject to applicable law, you have the right to:
            </p>
            <ul className={styles.section__list}>
              <li>Access the personal data we hold about you.</li>
              <li>Correct inaccurate or incomplete data.</li>
              <li>
                Request deletion of your data (where not required for regulatory
                compliance).
              </li>
              <li>Object to or restrict certain processing activities.</li>
              <li>Receive a portable copy of your data.</li>
            </ul>
            <p className={styles.section__text}>
              To exercise any of these rights, email us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="cookies">
            <h2 className={styles.section__title} id="cookies">
              8. Cookies and Tracking
            </h2>
            <p className={styles.section__text}>
              Our website uses essential cookies to maintain session state and
              analytics cookies to understand how visitors use the site. You can
              control cookies through our cookie banner or your browser settings.
              Declining analytics cookies will not affect your ability to use the
              Service.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="children">
            <h2 className={styles.section__title} id="children">
              9. Children's Privacy
            </h2>
            <p className={styles.section__text}>
              The Service is not directed at children under 18. We do not
              knowingly collect personal data from minors. If you believe a
              minor has provided us with personal information, contact us and we
              will delete it promptly.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="changes">
            <h2 className={styles.section__title} id="changes">
              10. Changes to This Policy
            </h2>
            <p className={styles.section__text}>
              We may update this Privacy Policy from time to time. We will
              notify you of material changes by posting the new policy on this
              page and updating the "Last updated" date. Continued use of the
              Service after changes constitutes your acceptance of the updated
              policy.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="contact">
            <h2 className={styles.section__title} id="contact">
              11. Contact Us
            </h2>
            <p className={styles.section__text}>
              For privacy-related questions or requests, contact our Data
              Protection team:
            </p>
            <ul className={styles.section__list}>
              <li>
                Email:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>Company: Zyra Finance Ltd, Lagos, Nigeria</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
