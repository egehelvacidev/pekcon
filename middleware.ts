import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales, pathnames } from './src/lib/i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale,
  // Pathnames configurations
  pathnames,
  // Locale detection configuration
  localeDetection: true,
  // Locale prefix settings - 'as-needed' means / will redirect to /tr for default locale
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!_next|api|.*\\..*).*)']
}; 