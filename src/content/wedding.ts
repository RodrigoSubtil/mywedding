export const wedding = {
  names: "Clara & Miguel",
  initials: "C & M",
  date: "2027-09-18T12:00:00Z",
  ceremonyTime: "16:00",
  receptionTime: "18:00",
  venue: "Jardim das Oliveiras",
} as const;

export const models = [
  { id: "classico", image: "/images/classico.webp" },
  { id: "natural", image: "/images/natural.webp" },
  { id: "contemporaneo", image: "/images/contemporaneo.webp" },
] as const;
export type ModelId = (typeof models)[number]["id"];

export function weddingDate(locale: string) {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(wedding.date));
}
