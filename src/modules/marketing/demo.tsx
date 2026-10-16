"use client";
import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import type { Locale } from "@/i18n/locales";
import { Header } from "@/components/layout/header";
import { models } from "@/content/wedding";
import { WeddingPreview } from "./wedding-preview";
import { GuestExperience } from "./guest-experience";

const subscribe = (callback: () => void) => {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
};
const snapshot = () => window.location.hash.slice(1);
const serverSnapshot = () => "natural";

export function Demo({ locale }: { locale: Locale }) {
  const t = useTranslations("Demo");
  const hash = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const model = models.find((model) => model.id === hash)?.id ?? "natural";
  return (
    <>
      <Header locale={locale} demo />
      <main className="container section demo-page">
        <a className="text-link" href={`/${locale}/#modelos`}>
          ← {t("back")}
        </a>
        <div className="section-heading centered">
          <p className="eyebrow">{t("label")}</p>
          <h1>{t("title")}</h1>
          <p>{t("description")}</p>
        </div>
        <nav className="style-picker" aria-label={t("choose")}>
          {models.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={model === item.id ? "true" : undefined}
            >
              {t(`styleNames.${i}`)}
            </a>
          ))}
        </nav>
        <div className="full-preview">
          <WeddingPreview key={model} locale={locale} model={model} priority />
          <section className="demo-story">
            <h2>{t("ourStory")}</h2>
            <p>{t("story")}</p>
          </section>
        </div>
        <div className="section-heading centered">
          <p className="eyebrow">{t("day")}</p>
          <h2>{t("rsvp")}</h2>
          <p className="small">{t("note")}</p>
        </div>
        <GuestExperience standalone />
      </main>
    </>
  );
}
