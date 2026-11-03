
"use client";

import { useState, useEffect } from "react";
import Logo from "../logo";
import Button from "../button";
import LanguagePopover from "@/components/utils/LanguagePopover";
import { useTranslations } from "next-intl";
import { HamburgerMenu, CloseCircle } from "iconsax-reactjs";
import Modal from "../modal";
import WaitlistForm from "@/app/[locale]/(home)/_components/form/Waitlist";

const Nav = () => {
  const t = useTranslations("Navigation");
  const hero = useTranslations("HomePage");

  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { id: "n1", label: t("community"), href: "#community" },
    { id: "n2", label: t("convert"), href: "#convert" },
    { id: "n3", label: t("contact"), href: "#contact" },
  ];

  const close = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    if (menuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <nav
className="sticky top-4 z-50 mx-4 my-4 w-auto rounded-full border border-white bg-black/10 px-4 py-4 backdrop-blur-sm lg:px-8"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <div className="flex items-center justify-center gap-6 lg:gap-8">
            <Logo />

            <ul className="hidden items-center gap-6 md:flex lg:gap-8">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-sm font-medium tracking-tight transition-opacity duration-200 hover:opacity-60 lg:text-base"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop and Mobile Actions */}
          <div className="flex items-center gap-3">
            <LanguagePopover />

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                variant="dark"
                popoverTarget="join_waitlist"
              >
                {hero("heroSection.cta")}
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="nav-drawer"
              className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-black/5 md:hidden"
            >
              <HamburgerMenu size={24} variant="TwoTone" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-[99] bg-black/45 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Navigation Drawer */}
      <aside
        id="nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!menuOpen}
        className={`fixed right-0 top-0 z-[100] flex h-[100dvh] w-[min(80vw,320px)] flex-col gap-8 overflow-y-auto bg-white px-5 py-6 text-gray-900 shadow-[-4px_0_24px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          visibility: menuOpen ? "visible" : "hidden",
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between">
          <Logo />

          <button
            type="button"
            onClick={close}
            aria-label="Close navigation menu"
            className="flex items-center justify-center rounded-lg p-2 transition-opacity duration-200 hover:opacity-60"
          >
            <CloseCircle size={28} variant="TwoTone" />
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="m-0 flex list-none flex-col gap-6 p-0">
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={close}
                tabIndex={menuOpen ? 0 : -1}
                className="text-xl font-semibold tracking-tight text-gray-900 no-underline transition-opacity duration-200 hover:opacity-60"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Drawer CTA */}
        <div className="mt-auto flex flex-col gap-3">
          <Button popoverTarget="join_waitlist">
            {hero("heroSection.cta")}
          </Button>
        </div>
      </aside>

      {/* Waitlist Modal */}
      <Modal id="join_waitlist">
        <WaitlistForm />
      </Modal>
    </>
  );
};

export default Nav;
