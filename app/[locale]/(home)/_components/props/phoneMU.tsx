"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion, type Variants } from "motion/react";
import {
  Add,
  Bank,
  Building,
  Card,
  Chart,
  Chart2,
  Coin1,
  Home2,
  MedalStar,
  More,
  SearchNormal1,
  ShoppingBag,
  Shuffle,
  ArrowSwapHorizontal,
} from "iconsax-reactjs";
import { BiBell } from "react-icons/bi";

type Transaction = {
  id: string;
  name: string;
  time: string;
  amount: string;
  icon: ReactNode;
  iconClassName: string;
};

type Action = { label: string; icon: ReactNode };
type Tab = { label: string; icon: (active: boolean) => ReactNode };

const transactions: Transaction[] = [
  {
    id: "1",
    name: "Starbucks",
    time: "Today, 16:30",
    amount: "-£3.25",
    icon: <ShoppingBag size={22} variant="Bold" color="currentColor" />,
    iconClassName: "bg-emerald-700 text-white",
  },
  {
    id: "2",
    name: "AirBnB",
    time: "Today, 15:30",
    amount: "-£100",
    icon: <Building size={22} variant="Bold" color="currentColor" />,
    iconClassName: "bg-rose-400 text-white",
  },
];

const actions: Action[] = [
  { label: "Add money", icon: <Add size={24} color="currentColor" /> },
  { label: "Move", icon: <Shuffle size={22} color="currentColor" /> },
  { label: "Details", icon: <Bank size={22} variant="Bold" color="currentColor" /> },
  { label: "More", icon: <More size={22} color="currentColor" /> },
];

const tabs: Tab[] = [
  {
    label: "Home",
    icon: (active) => (
      <Home2 size={24} variant={active ? "Bold" : "Linear"} color="currentColor" />
    ),
  },
  {
    label: "Invest",
    icon: (active) => (
      <Chart size={24} variant={active ? "Bold" : "Linear"} color="currentColor" />
    ),
  },
  {
    label: "Payments",
    icon: (active) => (
      <ArrowSwapHorizontal
        size={24}
        variant={active ? "Bold" : "Linear"}
        color="currentColor"
      />
    ),
  },
  {
    label: "Crypto",
    icon: (active) => (
      <Coin1 size={24} variant={active ? "Bold" : "Linear"} color="currentColor" />
    ),
  },
  {
    label: "Rewards",
    icon: (active) => (
      <MedalStar size={24} variant={active ? "Bold" : "Linear"} color="currentColor" />
    ),
  },
];

/* ---------------------------------- Motion --------------------------------- */

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Root: the phone rises in, then its children stagger one after another.
const root: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease,
      delayChildren: 0.35,
      staggerChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const fadeDown: Variants = {
  hidden: { opacity: 0, y: -14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const balance: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.92, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease },
  },
};

const group: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const pop: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 20 },
  },
};

const row: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
};

/* -------------------------------- Component -------------------------------- */

type PhoneHomeScreenProps = {
  accountLabel?: string;
  balance?: string;
  className?: string;
};

// Only the top 75% of the phone is shown, fading out into the page background.
// An ellipse centred on the top edge gives the fade a curved (arched) contour:
// the sides dissolve sooner than the middle, instead of a straight line.
// - First radius (width): smaller = a more pronounced curve.
// - Second radius (height): how far down the fade reaches.
// - The 50% stop is where the fade begins; raise it to keep more of the phone solid.
const fadeMask =
  "radial-gradient(ellipse 155% 100% at 50% 0%, #000 60%, transparent 100%)";

const PhoneHomeScreen = ({
  accountLabel = "Personal · EUR",
  balance: balanceLabel = "€1,905",
  className = "",
}: PhoneHomeScreenProps) => {
  return (
    <MotionConfig reducedMotion="user">
      <div
        className={`relative mx-auto aspect-433/699 w-full max-w-90 overflow-hidden ${className}`}
        style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
      >
        <motion.div
          variants={root}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative aspect-433/932 w-full overflow-hidden rounded-[4rem] bg-black text-white ring-1 ring-white/10"
        >
          {/* Background gradient */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-b from-purple-600 via-purple-950/120 via-42% to-black"
          />

          <div className="relative flex h-full flex-col border-18 border-black/40 rounded-t-[4rem]">
            {/* Status bar */}
            <motion.div
              variants={fadeDown}
              className="flex items-center justify-between px-8 pt-4 text-[13px] font-semibold"
            >
              <span>9:41</span>
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="flex items-end gap-0.5">
                  <span className="h-1 w-0.75 rounded-sm bg-white" />
                  <span className="h-1.5 w-0.75 rounded-sm bg-white" />
                  <span className="h-2 w-0.75 rounded-sm bg-white" />
                  <span className="h-2.5 w-0.75 rounded-sm bg-white" />
                </span>
                <span className="relative h-2.5 w-5 rounded-0.75 border border-white/60">
                  <span className="absolute inset-px rounded-[1px] bg-white" />
                </span>
              </div>
            </motion.div>

            {/* Top bar */}
            <motion.div
              variants={fadeDown}
              className="mt-3 flex items-center justify-between gap-2.5 px-4"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-violet-400 to-fuchsia-500 text-sm font-semibold"
                aria-hidden="true"
              >
                Z
              </div>

<div>
   <button
                type="button"
                aria-label="Cards"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-colors hover:bg-white/25"
              >
                <BiBell size={18} color="currentColor" />
              </button>
</div>

            </motion.div>

            {/* Balance */}
            <motion.div
              variants={balance}
              className="mt-12 flex flex-col items-start px-6"
            >
              <p className="text-[13px] text-white/75">{accountLabel}</p>
              <p className="mt-1 text-[3.25rem] leading-none font-semibold tracking-tight">
                {balanceLabel}
              </p>
              <button
                type="button"
                className="mt-4 rounded-full bg-white/15 px-6 py-2.5 text-[14px] font-medium backdrop-blur-md transition-colors hover:bg-white/25"
              >
                Accounts
              </button>
            </motion.div>

            {/* Carousel dots */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center justify-center gap-1.5"
              aria-hidden="true"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            </motion.div>

            {/* Quick actions */}
            <motion.div variants={group} className="mt-8 grid grid-cols-4 px-3">
              {actions.map((action) => (
                <motion.button
                  key={action.label}
                  type="button"
                  variants={pop}
                  whileTap={{ scale: 0.92 }}
                  className="group flex flex-col items-center gap-2"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-colors group-hover:bg-white/25">
                    {action.icon}
                  </span>
                  <span className="text-[12px] font-medium">{action.label}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Transactions */}
            <motion.div
              variants={fadeUp}
              className="mx-4 mt-6 rounded-3xl bg-white/[0.09] px-4 pt-2 pb-3 backdrop-blur-md"
            >
              <motion.ul
                variants={{
                  hidden: {},
                  visible: {
                    transition: { delayChildren: 0.15, staggerChildren: 0.14 },
                  },
                }}
              >
                {transactions.map((tx) => (
                  <motion.li
                    key={tx.id}
                    variants={row}
                    className="flex items-center gap-3 py-3"
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${tx.iconClassName}`}
                    >
                      {tx.icon}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[15px] font-medium">{tx.name}</p>
                      <p className="text-[12px] text-white/55">{tx.time}</p>
                    </div>

                    <span className="text-[15px] font-medium">{tx.amount}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <button
                type="button"
                className="mt-1 block w-full py-2 text-center text-[15px] font-medium"
              >
                See all
              </button>
            </motion.div>

            {/* Widgets */}
            <motion.div
              variants={fadeUp}
              className="mt-5 flex items-center justify-between px-5"
            >
              <h3 className="text-[17px] font-semibold">Widgets</h3>
              <button type="button" aria-label="Add widget">
                <Add size={22} color="currentColor" />
              </button>
            </motion.div>

            {/* Tab bar (sits below the visible crop, kept for completeness) */}
            <nav
              aria-label="Primary"
              className="absolute inset-x-0 bottom-0 border-t border-white/5 bg-black/70 px-2 pt-3 pb-6 backdrop-blur-xl"
            >
              <ul className="grid grid-cols-5">
                {tabs.map((tab, index) => {
                  const active = index === 0;

                  return (
                    <li key={tab.label}>
                      <button
                        type="button"
                        aria-current={active ? "page" : undefined}
                        className={`flex w-full flex-col items-center gap-1 ${
                          active ? "text-white" : "text-white/50"
                        }`}
                      >
                        {tab.icon(active)}
                        <span className="text-[11px] font-semibold">
                          {tab.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <span
                aria-hidden="true"
                className="mx-auto mt-3 block h-1 w-32 rounded-full bg-white"
              />
            </nav>
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default PhoneHomeScreen;