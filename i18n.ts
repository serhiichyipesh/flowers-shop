import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['ua', 'ru', 'en'];

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  if (!locales.includes(locale)) return notFound();

  return {
    locale,
    messages: (await import(`/locales/${locale}/common.json`)).default,
  };
});
