import { getRequestConfig } from "next-intl/server";
import { isLocale } from "./locales";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = requested && isLocale(requested) ? requested : "pt-BR";
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: "UTC",
  };
});
