"use client";

import { useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Icon } from "@/components/ui/icon";
import { wedding, weddingDate } from "@/content/wedding";

export function GuestExperience({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const t = useTranslations("Landing.experience");
  const locale = useLocale();
  const [step, setStep] = useState(0);
  const [attending, setAttending] = useState("yes");
  const [responded, setResponded] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const panels = useRef<(HTMLDivElement | null)[]>([]);
  const prefix = standalone ? "demo-guest" : "guest";
  const activate = (next: number, focus: "tab" | "panel" = "tab") => {
    setStep(next);
    if (focus === "panel")
      requestAnimationFrame(() => panels.current[next]?.focus());
    else tabs.current[next]?.focus();
  };
  return (
    <div className={`experience ${standalone ? "standalone" : ""}`}>
      <div className="experience-controls" data-reveal>
        <div
          className="experience-tabs"
          role="tablist"
          aria-orientation="vertical"
          aria-label={t("title")}
        >
          {[0, 1, 2].map((index) => (
            <button
              ref={(node) => {
                tabs.current[index] = node;
              }}
              type="button"
              role="tab"
              key={index}
              id={`${prefix}-tab-${index}`}
              aria-controls={`${prefix}-panel-${index}`}
              aria-selected={step === index}
              tabIndex={step === index ? 0 : -1}
              onClick={() => setStep(index)}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                  event.preventDefault();
                  activate((index + 1) % 3);
                }
                if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                  event.preventDefault();
                  activate((index + 2) % 3);
                }
                if (event.key === "Home") {
                  event.preventDefault();
                  activate(0);
                }
                if (event.key === "End") {
                  event.preventDefault();
                  activate(2);
                }
              }}
            >
              <Icon
                name={
                  index === 0
                    ? "pin"
                    : index === 1
                      ? "checkCircle"
                      : "listChecks"
                }
              />
              <span>{t(`tabs.${index}`)}</span>
              <Icon name="arrow" />
            </button>
          ))}
        </div>
        <div className="experience-description" key={step}>
          <h3>{t(`detailTitle.${step}`)}</h3>
          <p>{t(`detailBody.${step}`)}</p>
        </div>
      </div>
      <div className="experience-stage" data-reveal>
        <div className="demo-card-heading">
          <Icon name="heart" />
          <span>{wedding.names}</span>
          <span className="demo-tag">
            {locale === "pt-BR" ? "Exemplo" : "Exemplo"}
          </span>
        </div>
        {[0, 1, 2].map((index) => (
          <div
            className="experience-panel"
            role="tabpanel"
            ref={(node) => {
              panels.current[index] = node;
            }}
            id={`${prefix}-panel-${index}`}
            aria-labelledby={`${prefix}-tab-${index}`}
            tabIndex={0}
            hidden={step !== index}
            key={index}
          >
            {index === 0 && (
              <>
                <p className="eyebrow">{weddingDate(locale)}</p>
                <h3>{t("tabs.0")}</h3>
                <div className="event-line">
                  <Icon name="calendar" />
                  <div>
                    <strong>{t("ceremony")}</strong>
                    <p>
                      {wedding.ceremonyTime} · {wedding.venue}
                    </p>
                  </div>
                </div>
                <div className="event-line">
                  <Icon name="glasses" />
                  <div>
                    <strong>{t("reception")}</strong>
                    <p>
                      {wedding.receptionTime} · {wedding.venue}
                    </p>
                  </div>
                </div>
                <p className="small">
                  <Icon name="pin" /> {t("fictionalVenue")}
                </p>
                <button
                  className="button button-secondary"
                  onClick={() => activate(1, "panel")}
                >
                  {t("tabs.1")}
                  <Icon name="arrow" />
                </button>
              </>
            )}
            {index === 1 && (
              <>
                <h3>{t("responseTitle")}</h3>
                <p>{t("responseBody")}</p>
                <fieldset className="response-options">
                  <legend className="sr-only">{t("responseTitle")}</legend>
                  {(["yes", "no"] as const).map((value) => (
                    <label key={value}>
                      <input
                        type="radio"
                        name={`${prefix}-response`}
                        value={value}
                        checked={attending === value}
                        onChange={() => setAttending(value)}
                      />
                      {t(value)}
                    </label>
                  ))}
                </fieldset>
                <button
                  className="button"
                  onClick={() => {
                    setResponded(true);
                    activate(2, "panel");
                  }}
                >
                  {t("simulate")}
                  <Icon name="arrow" />
                </button>
              </>
            )}
            {index === 2 && (
              <>
                <h3>{t("summary")}</h3>
                <p className="small">Ana & Rafael · 2 {t("guests")}</p>
                <div className="summary-stats">
                  {(["confirmed", "declined", "pending"] as const).map(
                    (key, i) => (
                      <div key={key}>
                        <strong>
                          {i === 0
                            ? responded && attending === "yes"
                              ? 2
                              : 0
                            : i === 1
                              ? responded && attending === "no"
                                ? 2
                                : 0
                              : responded
                                ? 0
                                : 2}
                        </strong>
                        <span>{t(key)}</span>
                      </div>
                    ),
                  )}
                </div>
                <p className="simulation-feedback" role="status">
                  {responded ? t("saved") : t("simulation")}
                </p>
                <button
                  className="text-link"
                  onClick={() => {
                    setResponded(false);
                    setAttending("yes");
                    activate(0, "panel");
                  }}
                >
                  {t("reset")}
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
