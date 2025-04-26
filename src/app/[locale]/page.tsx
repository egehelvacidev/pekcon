import { Metadata } from 'next';
import { Locale } from '@/lib/i18n';
import { generateSEOMetadata } from '@/lib/utils';

import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import FeaturedContainers from '@/components/home/FeaturedContainers';

type Props = {
  params: {
    locale: Locale;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const locale = params.locale;
  
  const title = locale === 'tr' 
    ? 'PEKCON Container&Logistics | Lojistik ve Konteyner Çözümleri' 
    : 'PEKCON Container&Logistics | Logistics and Container Solutions';
  
  const description = locale === 'tr'
    ? 'PEKCON KONTEYNER, uluslararası taşımacılık ve konteyner tedariğinde güvenilir çözüm ortağınız.'
    : 'PEKCON KONTEYNER, your reliable partner in international transportation and container supply.';
  
  return generateSEOMetadata({
    title,
    description,
    locale,
    canonicalUrl: '/',
  });
}

export default function Home({ params }: Props) {
  const locale = params.locale;
  
  return (
    <main>
      <Hero locale={locale} />
      <ServicesOverview locale={locale} />
      <FeaturedContainers locale={locale} />
    </main>
  );
} 