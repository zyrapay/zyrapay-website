import type { Metadata } from "next";
import Link from "next/link";
import styles from "./styles/Page.module.scss";

const CONTACT_EMAIL = process.env.Zyra_CONTACT_EMAIL ?? "info@zyrapay.com";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions governing your use of Zyra's payments platform.",
};

const LAST_UPDATED = "May 24, 2026";

export default function TermsOfServicePage() {
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
          <h1 className={styles.page__title}>Terms of Service</h1>
          <p className={styles.page__updated}>Last updated: {LAST_UPDATED}</p>
        </header>

        <div className={styles.page__body}>
          <section className={styles.section} aria-labelledby="intro">
            <h2 className={styles.section__title} id="intro">
              1. Introduction
            </h2>
            <p className={styles.section__text}>
              These Terms of Service ("Terms") govern your access to and use of
              the Zyra mobile application, website, and payment services
              (collectively, the "Service") operated by Zyra Finance Ltd
              ("Zyra", "we", "our", "us"), a company registered in Nigeria.
            </p>
            <p className={styles.section__text}>
              By creating an account or using the Service in any way, you
              confirm that you are at least 18 years of age, have the legal
              capacity to enter into a binding contract, and agree to be bound
              by these Terms and our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>. If you do not
              agree, do not use the Service.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="services">
            <h2 className={styles.section__title} id="services">
              2. Description of Services
            </h2>
            <p className={styles.section__text}>
              Zyra provides a digital payments platform that enables:
            </p>
            <ul className={styles.section__list}>
              <li>
                Instant money transfers between Zyra wallets and Nigerian bank
                accounts.
              </li>
              <li>
                QR code-based payments for merchants, ride-hailing drivers, and
                other businesses.
              </li>
              <li>
                Wallet top-ups, balance management, and transaction history.
              </li>
              <li>
                Payment collections and settlement services for registered
                businesses.
              </li>
            </ul>
            <p className={styles.section__text}>
              The Service is available in Nigeria and operates under licences
              and regulatory approvals issued by the Central Bank of Nigeria
              (CBN). We reserve the right to modify, suspend, or discontinue
              any part of the Service at any time.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="accounts">
            <h2 className={styles.section__title} id="accounts">
              3. Accounts and Registration
            </h2>
            <p className={styles.section__text}>
              To use the Service, you must register an account and complete our
              Know Your Customer (KYC) verification process as required by
              Nigerian law. You agree to:
            </p>
            <ul className={styles.section__list}>
              <li>
                Provide accurate, current, and complete information during
                registration and keep it up to date.
              </li>
              <li>
                Maintain the confidentiality of your login credentials and
                immediately notify us of any unauthorised access.
              </li>
              <li>
                Accept responsibility for all activity that occurs under your
                account.
              </li>
              <li>
                Not share your account with, or transfer it to, any other
                person.
              </li>
            </ul>
            <p className={styles.section__text}>
              We reserve the right to suspend or terminate any account that we
              believe, in our sole discretion, poses a fraud, security, or
              regulatory compliance risk.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="payments">
            <h2 className={styles.section__title} id="payments">
              4. Payments and Transactions
            </h2>
            <p className={styles.section__text}>
              All transactions are subject to the following conditions:
            </p>
            <ul className={styles.section__list}>
              <li>
                <strong>Authorisation</strong> — by initiating a transaction,
                you authorise Zyra to debit your wallet or linked account for
                the stated amount plus any applicable fees.
              </li>
              <li>
                <strong>Irreversibility</strong> — completed transactions are
                generally irreversible. If you believe a transaction was
                unauthorised or erroneous, contact us immediately at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </li>
              <li>
                <strong>Fees</strong> — applicable transaction fees are
                disclosed in the app before you confirm a payment. We may
                update fees at any time with reasonable prior notice.
              </li>
              <li>
                <strong>Limits</strong> — daily and monthly transaction limits
                apply as required by CBN regulations. Limits may vary based on
                your KYC tier.
              </li>
              <li>
                <strong>Failed transactions</strong> — if a transaction fails
                after your wallet has been debited, the amount will be reversed
                within 24 – 72 hours in accordance with our settlement
                processes.
              </li>
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="prohibited">
            <h2 className={styles.section__title} id="prohibited">
              5. Prohibited Uses
            </h2>
            <p className={styles.section__text}>
              You agree not to use the Service to:
            </p>
            <ul className={styles.section__list}>
              <li>
                Engage in money laundering, terrorist financing, or any other
                activity prohibited by Nigerian law or international sanctions.
              </li>
              <li>
                Process payments for illegal goods or services, including
                unlicensed gambling, counterfeit products, or controlled
                substances.
              </li>
              <li>
                Circumvent transaction limits, KYC requirements, or other
                compliance controls.
              </li>
              <li>
                Use another person's identity, account, or payment instrument
                without their authorisation.
              </li>
              <li>
                Introduce malware, conduct phishing attacks, or otherwise
                attempt to compromise the security or integrity of the Service.
              </li>
              <li>
                Use automated tools to access the Service in a manner that
                exceeds reasonable personal use without our written consent.
              </li>
            </ul>
            <p className={styles.section__text}>
              Violation of this section may result in immediate account
              suspension, fund holds, and reporting to the appropriate
              regulatory and law enforcement authorities.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="intellectual">
            <h2 className={styles.section__title} id="intellectual">
              6. Intellectual Property
            </h2>
            <p className={styles.section__text}>
              All content, branding, software, and technology comprising the
              Service are owned by or licensed to Zyra and are protected by
              Nigerian and international intellectual property laws. You are
              granted a limited, non-exclusive, non-transferable licence to use
              the Service for personal or business purposes in accordance with
              these Terms. You may not copy, modify, distribute, sell, or
              reverse-engineer any part of the Service.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="disclaimers">
            <h2 className={styles.section__title} id="disclaimers">
              7. Disclaimers and Limitation of Liability
            </h2>
            <p className={styles.section__text}>
              The Service is provided "as is" and "as available". To the fullest
              extent permitted by applicable law, Zyra disclaims all warranties,
              express or implied, including warranties of merchantability,
              fitness for a particular purpose, and non-infringement.
            </p>
            <p className={styles.section__text}>
              Zyra shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including loss of profits, data,
              or goodwill, arising out of or in connection with your use of the
              Service, even if we have been advised of the possibility of such
              damages. Our total aggregate liability to you for any claim arising
              under these Terms shall not exceed the amount of fees you paid to
              us in the three (3) months preceding the claim.
            </p>
            <p className={styles.section__text}>
              Nothing in these Terms excludes or limits liability for fraud,
              gross negligence, or death or personal injury caused by our
              negligence, or any other liability that cannot be excluded by law.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="indemnity">
            <h2 className={styles.section__title} id="indemnity">
              8. Indemnity
            </h2>
            <p className={styles.section__text}>
              You agree to indemnify, defend, and hold harmless Zyra and its
              officers, directors, employees, and agents from any claims,
              liabilities, damages, losses, and expenses (including reasonable
              legal fees) arising out of or in connection with your use of the
              Service, your breach of these Terms, or your violation of any
              applicable law or third-party right.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="termination">
            <h2 className={styles.section__title} id="termination">
              9. Termination
            </h2>
            <p className={styles.section__text}>
              You may close your account at any time by contacting us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will
              process any remaining balance in accordance with our standard
              settlement procedures, subject to any regulatory holds.
            </p>
            <p className={styles.section__text}>
              We may suspend or terminate your access immediately and without
              notice if you breach these Terms, if required by law or a
              regulator, or if we reasonably suspect fraudulent or illegal
              activity on your account. Termination does not affect any rights
              or obligations that arose prior to the termination date.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="governing">
            <h2 className={styles.section__title} id="governing">
              10. Governing Law and Disputes
            </h2>
            <p className={styles.section__text}>
              These Terms are governed by and construed in accordance with the
              laws of the Federal Republic of Nigeria. Any dispute arising out
              of or in connection with these Terms shall be submitted first to
              good-faith negotiation. If unresolved within 30 days, the dispute
              shall be referred to arbitration in Lagos, Nigeria, under the
              Arbitration and Conciliation Act (Cap A18 LFN 2004), with the
              award being final and binding.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="changes">
            <h2 className={styles.section__title} id="changes">
              11. Changes to These Terms
            </h2>
            <p className={styles.section__text}>
              We may update these Terms from time to time. We will notify you
              of material changes by posting the updated Terms in the app or on
              this page and updating the "Last updated" date. Continued use of
              the Service after the effective date of any change constitutes
              your acceptance of the revised Terms.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="contact">
            <h2 className={styles.section__title} id="contact">
              12. Contact Us
            </h2>
            <p className={styles.section__text}>
              For questions or concerns about these Terms, please contact us:
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
