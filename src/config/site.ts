import type { Metadata } from "next";
import type { Locale } from "@/i18n/locales";

// Configuração pública de build; nunca contém credenciais.
const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const siteOrigin = configuredOrigin
  ? new URL(configuredOrigin)
  : undefined;
if (
  siteOrigin &&
  (!["https:", "http:"].includes(siteOrigin.protocol) ||
    siteOrigin.username ||
    siteOrigin.password ||
    siteOrigin.pathname !== "/" ||
    siteOrigin.search ||
    siteOrigin.hash)
) {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL deve ser apenas a origem pública, por exemplo https://projeto.pages.dev, sem caminho ou credenciais.",
  );
}

export function landingMetadata(
  locale: Locale,
  title: string,
  description: string,
): Metadata {
  const route = `/${locale}/`;
  const image = siteOrigin
    ? new URL(`/social/mywedding-${locale}.jpg`, siteOrigin)
    : undefined;
  return {
    title,
    description,
    ...(siteOrigin
      ? {
          metadataBase: siteOrigin,
          alternates: {
            canonical: route,
            languages: {
              "pt-BR": "/pt-BR/",
              "pt-PT": "/pt-PT/",
              "x-default": "/",
            },
          },
          openGraph: {
            type: "website",
            siteName: "MyWedding",
            title,
            description,
            url: route,
            locale: locale.replace("-", "_"),
            alternateLocale: locale === "pt-BR" ? "pt_PT" : "pt_BR",
            images: [{ url: image!, width: 1200, height: 630, alt: title }],
          },
          twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image!],
          },
        }
      : {}),
  };
}
