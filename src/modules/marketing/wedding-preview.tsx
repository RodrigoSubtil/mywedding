import Image from "next/image";
import { wedding, weddingDate, type ModelId } from "@/content/wedding";
import type { Locale } from "@/i18n/locales";
import { Icon } from "@/components/ui/icon";

export function WeddingPreview({
  locale,
  model = "natural",
  compact = false,
  priority = false,
}: {
  locale: Locale;
  model?: ModelId;
  compact?: boolean;
  priority?: boolean;
}) {
  const br = locale === "pt-BR";
  const image =
    model === "natural"
      ? "/images/natural.webp"
      : model === "classico"
        ? "/images/classico.webp"
        : "/images/contemporaneo.webp";
  return (
    <div
      className={`wedding-preview theme-${model} ${compact ? "compact" : ""}`}
    >
      <div className="preview-heading">
        <span>{wedding.initials}</span>
        <span>{br ? "O nosso dia" : "O nosso dia"}</span>
        <Icon name="heart" />
      </div>
      <div className="preview-photo">
        <Image
          src={image}
          alt={
            model === "natural"
              ? "Casal de costas num jardim arborizado"
              : model === "classico"
                ? "Alianças junto a flores brancas"
                : "Mesa de casamento em branco e verde"
          }
          width={1200}
          height={900}
          priority={priority}
          sizes={
            compact
              ? "(max-width: 767px) 90vw, 350px"
              : "(max-width: 767px) 90vw, 600px"
          }
        />
      </div>
      <div className="preview-copy">
        <span className="eyebrow">
          {br ? "VAMOS CELEBRAR O AMOR" : "VAMOS CELEBRAR O AMOR"}
        </span>
        <p className="couple-names">{wedding.names}</p>
        <p className="preview-date">{weddingDate(locale)}</p>
        <span className="preview-rule" />
        <p className="small">
          {br
            ? "Um dia especial. Todas as nossas pessoas."
            : "Um dia especial. Todas as nossas pessoas."}
        </p>
      </div>
    </div>
  );
}
