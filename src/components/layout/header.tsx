"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { Locale } from "@/i18n/locales";
import { Icon } from "@/components/ui/icon";
import { Brand } from "@/components/ui/brand";
import { LanguageSwitcher } from "./language-switcher";

export function Header({
  locale,
  demo = false,
}: {
  locale: Locale;
  demo?: boolean;
}) {
  const t = useTranslations("Landing");
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const home = `/${locale}/`;
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <div className="container header-inner">
        <Brand href={home} />
        <nav
          className={`main-nav ${open ? "is-open" : ""}`}
          id="main-nav"
          aria-label={t("nav.label")}
        >
          {(["modelos", "como-funciona", "recursos", "duvidas"] as const).map(
            (id, index) => (
              <a
                key={id}
                href={`${demo ? home : ""}#${id}`}
                onClick={() => setOpen(false)}
              >
                {t(`nav.items.${index}`)}
              </a>
            ),
          )}
          <Link
            className="mobile-account-link"
            href={`${home}entrar/`}
            onClick={() => setOpen(false)}
          >
            {t("nav.login")}
          </Link>
          <a
            className="button mobile-nav-action"
            href={`${home}#contato`}
            onClick={() => setOpen(false)}
          >
            {t("nav.contact")}
          </a>
        </nav>
        <div className="header-tools">
          <LanguageSwitcher
            locale={locale}
            page={demo ? "demonstracao" : undefined}
            onOpen={() => setOpen(false)}
          />
          <Link className="header-login" href={`${home}entrar/`}>
            {t("nav.login")}
          </Link>
          <a className="button header-action" href={`${home}#contato`}>
            {t("nav.contact")}
            <Icon name="diagonal" />
          </a>
          <button
            className="menu-trigger"
            ref={trigger}
            type="button"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? t("nav.close") : t("nav.open")}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
