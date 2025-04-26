import { createNavigation } from 'next-intl/navigation';

export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'tr';

// Path name translations for localized routes
export const pathnames = {
  '/': '/',
  '/hakkimizda': {
    tr: '/hakkimizda',
    en: '/about-us',
  },
  '/about-us': {
    tr: '/hakkimizda',
    en: '/about-us',
  },
  '/hizmetlerimiz': {
    tr: '/services',
    en: '/services',
  },
  '/our-services': {
    tr: '/services',
    en: '/services',
  },
  '/services': {
    tr: '/services',
    en: '/services',
  },
  '/services/:slug': {
    tr: '/services/:slug',
    en: '/services/:slug',
  },
  '/hizmetlerimiz/denizyolu': {
    tr: '/services/denizyolu',
    en: '/services/sea-freight',
  },
  '/our-services/sea-freight': {
    tr: '/services/denizyolu',
    en: '/services/sea-freight',
  },
  '/services/denizyolu': {
    tr: '/services/denizyolu',
    en: '/services/sea-freight',
  },
  '/services/sea-freight': {
    tr: '/services/denizyolu',
    en: '/services/sea-freight',
  },
  '/hizmetlerimiz/karayolu': {
    tr: '/services/karayolu',
    en: '/services/road-freight',
  },
  '/our-services/road-freight': {
    tr: '/services/karayolu',
    en: '/services/road-freight',
  },
  '/services/karayolu': {
    tr: '/services/karayolu',
    en: '/services/road-freight',
  },
  '/services/road-freight': {
    tr: '/services/karayolu',
    en: '/services/road-freight',
  },
  '/hizmetlerimiz/demiryolu': {
    tr: '/services/demiryolu',
    en: '/services/rail-freight',
  },
  '/our-services/rail-freight': {
    tr: '/services/demiryolu',
    en: '/services/rail-freight',
  },
  '/services/demiryolu': {
    tr: '/services/demiryolu',
    en: '/services/rail-freight',
  },
  '/services/rail-freight': {
    tr: '/services/demiryolu',
    en: '/services/rail-freight',
  },
  '/hizmetlerimiz/hava-kargo': {
    tr: '/services/hava-kargo',
    en: '/services/air-freight',
  },
  '/our-services/air-freight': {
    tr: '/services/hava-kargo',
    en: '/services/air-freight',
  },
  '/services/hava-kargo': {
    tr: '/services/hava-kargo',
    en: '/services/air-freight',
  },
  '/services/air-freight': {
    tr: '/services/hava-kargo',
    en: '/services/air-freight',
  },
  '/hizmetlerimiz/proje-kargo': {
    tr: '/services/proje-kargo',
    en: '/services/project-cargo',
  },
  '/our-services/project-cargo': {
    tr: '/services/proje-kargo',
    en: '/services/project-cargo',
  },
  '/services/proje-kargo': {
    tr: '/services/proje-kargo',
    en: '/services/project-cargo',
  },
  '/services/project-cargo': {
    tr: '/services/proje-kargo',
    en: '/services/project-cargo',
  },
  '/hizmetlerimiz/intermodal': {
    tr: '/services/intermodal',
    en: '/services/intermodal',
  },
  '/our-services/intermodal': {
    tr: '/services/intermodal',
    en: '/services/intermodal',
  },
  '/services/intermodal': {
    tr: '/services/intermodal',
    en: '/services/intermodal',
  },
  '/konteynerlar': {
    tr: '/konteynerlar',
    en: '/containers',
  },
  '/konteynerlar/:slug': {
    tr: '/konteynerlar/:slug',
    en: '/containers/:slug',
  },
  '/konteyner-satis': {
    tr: '/konteyner-satis',
    en: '/container-sales',
  },
  '/iletisim': {
    tr: '/iletisim',
    en: '/contact',
  },
  '/contact': {
    tr: '/iletisim',
    en: '/contact',
  },
};

export const { Link, redirect, usePathname, useRouter } =
  createNavigation({ locales, pathnames }); 