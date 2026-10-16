import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Landing } from "@/modules/marketing/landing";
import messages from "@/i18n/messages/pt-BR.json";

export default function EntryPage() {
  setRequestLocale("pt-BR");
  return (
    <NextIntlClientProvider locale="pt-BR" messages={messages} timeZone="UTC">
      <Landing locale="pt-BR" />
    </NextIntlClientProvider>
  );
}
