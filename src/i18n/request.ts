import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, locales } from '../lib/i18n';

export default getRequestConfig(async ({ locale }) => {
  // Locale değeri undefined ise defaultLocale'i kullan
  const activeLocale = locale && locales.includes(locale as any) ? locale : defaultLocale;
  
  return {
    locale: activeLocale,
    messages: (await import(`../../public/locales/${activeLocale}/common.json`)).default,
    timeZone: 'Europe/Istanbul',
  };
}); 