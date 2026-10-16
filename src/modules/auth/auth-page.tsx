import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/locales";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Icon } from "@/components/ui/icon";
import { Brand } from "@/components/ui/brand";
import { AuthForm } from "./auth-form";

export async function AuthPage({
  locale,
  mode,
}: {
  locale: Locale;
  mode: "entrar" | "criar-conta";
}) {
  const t = await getTranslations({ locale, namespace: "Auth" });
  const section = mode === "entrar" ? "login" : "signup";
  return (
    <div className="auth-page">
      <a className="skip-link" href="#auth-content">
        {t("skip")}
      </a>
      <header className="auth-header">
        <div className="container header-inner">
          <Brand href={`/${locale}/`} />
          <LanguageSwitcher locale={locale} page={mode} />
        </div>
      </header>
      <main className="auth-main container" id="auth-content">
        <Link className="auth-back text-link" href={`/${locale}/`}>
          <Icon name="arrowLeft" />
          {t("back")}
        </Link>
        <div className="auth-card">
          <div className="auth-heading">
            <span className="auth-mark" aria-hidden="true">
              <Icon
                name={mode === "entrar" ? "lock" : "userPlus"}
                width="24"
                height="24"
              />
            </span>
            <p className="eyebrow">{t("eyebrow")}</p>
            <h1>{t(`${section}.title`)}</h1>
            <p>{t(`${section}.description`)}</p>
          </div>
          <AuthForm key={mode} mode={mode} locale={locale} />
        </div>
        <p className="auth-footer">MyWedding · {t("footer")}</p>
      </main>
    </div>
  );
}
