import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { landingMetadata } from "@/config/site";
import "../globals.css";

export const metadata: Metadata = landingMetadata(
  "pt-BR",
  "MyWedding — Seu casamento, com a sua identidade",
  "Um lugar especial para a história de vocês. Explore modelos de sites de casamento e descubra uma forma mais leve de reunir todos os detalhes.",
);

export default function EntryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  setRequestLocale("pt-BR");
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
