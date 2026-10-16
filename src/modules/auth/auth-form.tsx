"use client";

import { useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import type { Locale } from "@/i18n/locales";

type Mode = "entrar" | "criar-conta";
type Field = "email" | "password" | "confirmation";
type ErrorCode =
  | "emailRequired"
  | "emailInvalid"
  | "passwordRequired"
  | "passwordShort"
  | "confirmationRequired"
  | "confirmationMismatch";
const subscribe = () => () => {};
const clientReady = () => true;
const serverReady = () => false;

export function AuthForm({ mode, locale }: { mode: Mode; locale: Locale }) {
  const t = useTranslations("Auth");
  const signup = mode === "criar-conta";
  const ready = useSyncExternalStore(subscribe, clientReady, serverReady);
  const [values, setValues] = useState<Record<Field, string>>({
    email: "",
    password: "",
    confirmation: "",
  });
  const [errors, setErrors] = useState<Partial<Record<Field, ErrorCode>>>({});
  const [revealed, setRevealed] = useState({
    password: false,
    confirmation: false,
  });
  const [notice, setNotice] = useState<"login" | "signup" | "recovery" | null>(
    null,
  );
  const inputs = useRef<Partial<Record<Field, HTMLInputElement | null>>>({});
  const fields: Field[] = signup
    ? ["email", "password", "confirmation"]
    : ["email", "password"];

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Partial<Record<Field, ErrorCode>> = {};
    if (!values.email.trim()) next.email = "emailRequired";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "emailInvalid";
    if (!values.password) next.password = "passwordRequired";
    else if (signup && values.password.length < 8)
      next.password = "passwordShort";
    if (signup && !values.confirmation)
      next.confirmation = "confirmationRequired";
    else if (signup && values.confirmation !== values.password)
      next.confirmation = "confirmationMismatch";
    setErrors(next);
    setNotice(null);
    const first = fields.find((field) => next[field]);
    if (first) {
      inputs.current[first]?.focus();
      return;
    }
    setNotice(signup ? "signup" : "login");
  }

  return (
    <>
      <form
        className="auth-form"
        noValidate
        onSubmit={submit}
        aria-label={t(signup ? "signup.title" : "login.title")}
      >
        <fieldset className="auth-fields" disabled={!ready}>
          <legend className="sr-only">{t("credentials")}</legend>
          {fields.map((field) => {
            const password = field !== "email";
            const shown = password && revealed[field];
            const error = errors[field];
            const id = `auth-${mode}-${field}`;
            return (
              <div className="form-field" key={field}>
                <label htmlFor={id}>{t(`fields.${field}`)}</label>
                <div className="input-wrap">
                  <input
                    id={id}
                    ref={(node) => {
                      inputs.current[field] = node;
                    }}
                    type={password ? (shown ? "text" : "password") : "email"}
                    inputMode={field === "email" ? "email" : undefined}
                    autoComplete={
                      field === "email"
                        ? "email"
                        : signup
                          ? "new-password"
                          : "current-password"
                    }
                    autoCapitalize="none"
                    spellCheck={false}
                    required
                    value={values[field]}
                    aria-invalid={!!error}
                    aria-describedby={
                      error
                        ? `${id}-error`
                        : signup && field === "password"
                          ? `${id}-hint`
                          : undefined
                    }
                    onChange={(event) => {
                      setValues((previous) => ({
                        ...previous,
                        [field]: event.target.value,
                      }));
                      setErrors((previous) => ({
                        ...previous,
                        [field]: undefined,
                      }));
                      setNotice(null);
                    }}
                  />
                  {password && (
                    <button
                      className="password-toggle"
                      type="button"
                      aria-label={
                        field === "confirmation"
                          ? t(shown ? "hideConfirmation" : "showConfirmation")
                          : t(shown ? "hidePassword" : "showPassword", {
                              field: t(`fields.${field}`).toLowerCase(),
                            })
                      }
                      aria-pressed={shown}
                      onClick={() =>
                        setRevealed((previous) => ({
                          ...previous,
                          [field]: !previous[field],
                        }))
                      }
                    >
                      <Icon name={shown ? "eyeOff" : "eye"} />
                    </button>
                  )}
                </div>
                {signup && field === "password" && !error && (
                  <p className="field-hint" id={`${id}-hint`}>
                    {t("passwordHint")}
                  </p>
                )}
                {error && (
                  <p className="field-error" id={`${id}-error`}>
                    <Icon name="alert" width="16" height="16" />
                    {t(`errors.${error}`)}
                  </p>
                )}
              </div>
            );
          })}
          {!signup && (
            <button
              className="text-link auth-recovery"
              type="button"
              onClick={() => setNotice("recovery")}
            >
              {t("forgotPassword")}
            </button>
          )}
          <button className="button auth-submit" type="submit">
            {t(signup ? "signup.submit" : "login.submit")}
            <Icon name="arrow" />
          </button>
        </fieldset>
        <div className="auth-notice" role="status" aria-live="polite">
          {notice && (
            <p>
              <Icon name="info" />
              {t(`feedback.${notice}`)}
            </p>
          )}
        </div>
      </form>
      <div className="auth-divider" />
      <p className="auth-alternate">
        {t(signup ? "signup.alternate" : "login.alternate")}{" "}
        <Link
          className="text-link"
          href={`/${locale}/${signup ? "entrar" : "criar-conta"}/`}
        >
          {t(signup ? "login.submit" : "signup.submit")}
        </Link>
      </p>
      <p className="auth-demo-note">
        <Icon name="info" width="16" height="16" />
        {t("demoNote")}
      </p>
      <noscript>
        <p className="field-error">{t("noScript")}</p>
      </noscript>
    </>
  );
}
