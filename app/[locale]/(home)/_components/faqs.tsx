"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { TbChevronDown } from "react-icons/tb";

// Must match FAQ.groups in en.json / fr.json (id + number of questions).
const groups = [
  { id: "gettingStarted", count: 4 },
  { id: "sending", count: 7 },
  { id: "paying", count: 4 },
  { id: "business", count: 4 },
  { id: "trust", count: 4 },
] as const;

type GroupId = (typeof groups)[number]["id"];

const FAQSection = () => {
  const t = useTranslations("FAQ");
  const [activeId, setActiveId] = useState<GroupId>(groups[0].id);

  const active = groups.find((group) => group.id === activeId) ?? groups[0];
  const questions = Array.from({ length: active.count }, (_, i) => `q${i + 1}`);

  return (
    <section className="w-full p-4 bg-black rounded-t-full" id="faq">
      <div className="mx-auto w-full max-w-300 p-4">
        <div className="mx-auto mb-10 flex w-full max-w-xl flex-col items-center gap-6 text-center">
          <span className="text-[0.95rem] font-semibold tracking-wide text-accent">
            {t("tag")}
          </span>

          <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.05em]">
            {t("title")}
          </h2>

          <p className="text-base leading-[1.7]">{t("description")}</p>
        </div>

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label={t("title")}
          className="mx-auto mb-10 flex w-full max-w-3xl flex-wrap justify-center gap-2"
        >
          {groups.map((group) => {
            const isActive = group.id === activeId;

            return (
              <button
                key={group.id}
                type="button"
                role="tab"
                id={`faq-tab-${group.id}`}
                aria-selected={isActive}
                aria-controls={`faq-panel-${group.id}`}
                onClick={() => setActiveId(group.id)}
                className={`
                  rounded-full px-4 py-2 text-sm font-medium
                  transition-colors duration-200
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700/40
                  ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "bg-gray-700/[0.06] text-gray-700/70 hover:bg-gray-700/10"
                  }
                `}
              >
                {t(`groups.${group.id}.title`)}
              </button>
            );
          })}
        </div>

        {/* Questions: keyed by group so open items reset when switching tabs */}
        <div
          key={active.id}
          role="tabpanel"
          id={`faq-panel-${active.id}`}
          aria-labelledby={`faq-tab-${active.id}`}
          className="mx-auto flex w-full max-w-3xl flex-col"
        >
          {questions.map((id, index) => (
            <details
              key={id}
              name={`faq-${active.id}`}
              className="
                group border-b border-gray-700/[0.08]
                first:border-t first:border-gray-700/[0.08]
              "
            >
              <summary
                className="
                  flex w-full cursor-pointer list-none items-center gap-6
                  py-6
                  [&::-webkit-details-marker]:hidden
                "
              >
                <span className="shrink-0 text-[0.85rem] font-semibold tracking-[0.05em] text-gray-700/35">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Question */}
                <span
                  className="
                    flex-1 text-base leading-[1.4] font-medium
                    text-gray-700/[0.78] transition-colors duration-250
                    group-open:text-gray-500
                    sm:text-[1.1rem]
                  "
                >
                  {t(`groups.${active.id}.items.${id}.question`)}
                </span>

                {/* Icon */}
                <TbChevronDown
                  className="
                    h-4 w-4 shrink-0 text-gray-300/90
                    transition-transform duration-300
                    group-open:rotate-45
                  "
                  aria-hidden="true"
                />
              </summary>

              {/* Answer */}
              <div
                className="
                  grid grid-rows-[0fr] opacity-0
                  transition-[grid-template-rows,opacity]
                  duration-400 ease-[cubic-bezier(0.65,0,0.35,1)]
                  group-open:grid-rows-[1fr]
                  group-open:opacity-100
                "
              >
                <div className="overflow-hidden">
                  <div className="pb-7 pr-0 sm:pr-14">
                    <p className="text-[0.95rem] leading-[1.7] text-gray-700/[0.68]">
                      {t(`groups.${active.id}.items.${id}.answer`)}
                    </p>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;