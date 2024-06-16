import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18n";


export default async function Home({ params: { locale } }) {

  const { t, resources } = await initTranslations(locale, ["home"]);

  return (
    <TranslationsProvider locale={locale} namespaces={["home"]} resources={resources}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>{t('hi')}</div>
      </main>
    </TranslationsProvider>
  );
}
