import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/locales";
import { Demo } from "@/modules/marketing/demo";

export const metadata: Metadata = {
  title: "Clara & Miguel — Demonstração MyWedding",
  robots: { index: false, follow: true },
};

export default async function DemoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);
  return <Demo locale={locale} />;
}
