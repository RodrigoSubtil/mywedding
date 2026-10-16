import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/locales";
import { AuthPage } from "@/modules/auth/auth-page";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Auth.signup" });
  return {
    title: `${t("title")} — MyWedding`,
    description: t("description"),
    robots: { index: false, follow: true },
  };
}
export default async function Signup({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);
  return <AuthPage locale={locale} mode="criar-conta" />;
}
