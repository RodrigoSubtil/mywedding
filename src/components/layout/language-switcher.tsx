"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { locales, type Locale } from "@/i18n/locales";
import { Icon } from "@/components/ui/icon";

const scrollKey = "mywedding-language-scroll";

export function LanguageSwitcher({
  locale,
  page,
  onOpen,
}: {
  locale: Locale;
  page?: "demonstracao" | "entrar" | "criar-conta";
  onOpen?: () => void;
}) {
  const t = useTranslations("Landing.nav");
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const options = useRef<(HTMLButtonElement | null)[]>([]);
  const pendingScroll = useRef<{ path: string; y: number } | null>(null);

  useLayoutEffect(() => {
    // A raiz e as rotas localizadas têm layouts raiz próprios para gerar o lang correto.
    // Restaurar apenas uma troca de idioma; não interferir na navegação normal.
    try {
      const saved = sessionStorage.getItem(scrollKey);
      const target =
        pendingScroll.current ??
        (saved ? (JSON.parse(saved) as { path: string; y: number }) : null);
      if (!target) return;
      if (
        target.path === window.location.pathname &&
        Number.isFinite(target.y)
      ) {
        sessionStorage.removeItem(scrollKey);
        pendingScroll.current = null;
        window.scrollTo({ top: target.y, behavior: "instant" });
        const frame = requestAnimationFrame(() =>
          window.scrollTo({ top: target.y, behavior: "instant" }),
        );
        return () => cancelAnimationFrame(frame);
      }
    } catch {
      /* Armazenamento opcional; a troca continua disponível. */
    }
  }, [locale]);

  useEffect(() => {
    if (!open) return;
    options.current[locales.indexOf(locale)]?.focus({ preventScroll: true });
    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !container.current?.contains(event.target)
      )
        setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [open, locale]);

  function changeLocale(next: Locale) {
    setOpen(false);
    trigger.current?.focus({ preventScroll: true });
    if (next === locale) return;
    const path = `/${next}/${page ? `${page}/` : ""}`;
    const destination = path + window.location.hash;
    pendingScroll.current = { path, y: window.scrollY };
    try {
      sessionStorage.setItem(scrollKey, JSON.stringify(pendingScroll.current));
    } catch {
      /* Opcional. */
    }
    router.replace(destination, { scroll: false });
  }

  return (
    <div
      className="language-switcher"
      ref={container}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          setOpen(false);
          trigger.current?.focus({ preventScroll: true });
        }
      }}
    >
      <button
        className="language-trigger"
        type="button"
        ref={trigger}
        aria-label={`${t("locale")}: ${locale}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="language-menu"
        onClick={() => {
          if (!open) onOpen?.();
          setOpen(!open);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            onOpen?.();
            setOpen(true);
          }
        }}
      >
        <Icon name="globe" />
        <span>{locale}</span>
        <Icon name="chevron" width="16" height="16" />
      </button>
      {open && (
        <div
          className="language-menu"
          role="menu"
          id="language-menu"
          aria-label={t("locale")}
        >
          {locales.map((value, i) => (
            <button
              key={value}
              type="button"
              role="menuitemradio"
              aria-checked={value === locale}
              lang={value}
              ref={(node) => {
                options.current[i] = node;
              }}
              onClick={() => changeLocale(value)}
              onKeyDown={(event) => {
                let next = i;
                if (event.key === "ArrowDown") next = (i + 1) % locales.length;
                else if (event.key === "ArrowUp")
                  next = (i + locales.length - 1) % locales.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = locales.length - 1;
                else return;
                event.preventDefault();
                options.current[next]?.focus({ preventScroll: true });
              }}
            >
              <span>
                {value === "pt-BR"
                  ? "Português do Brasil"
                  : "Português de Portugal"}
              </span>
              <Icon
                name="check"
                className={value === locale ? "" : "invisible"}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function FooterLanguages({ locale }: { locale: Locale }) {
  return (
    <div className="footer-language-links">
      {locales.map((value) => (
        <Link
          key={value}
          href={`/${value}/`}
          lang={value}
          scroll={false}
          aria-current={value === locale ? "page" : undefined}
          onClick={(event) => {
            if (
              event.ctrlKey ||
              event.metaKey ||
              event.shiftKey ||
              event.altKey
            )
              return;
            try {
              sessionStorage.setItem(
                scrollKey,
                JSON.stringify({ path: `/${value}/`, y: window.scrollY }),
              );
            } catch {
              /* Opcional. */
            }
          }}
        >
          {value === "pt-BR" ? "Português do Brasil" : "Português de Portugal"}
        </Link>
      ))}
    </div>
  );
}
