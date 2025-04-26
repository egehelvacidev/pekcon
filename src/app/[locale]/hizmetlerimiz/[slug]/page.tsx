import { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { Locale } from '@/lib/i18n';
import { generateSEOMetadata } from '@/lib/utils';
import { SERVICES } from '@/lib/constants';
import ServiceDetail from '@/components/services/ServiceDetail';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    locale: Locale;
    slug: string;
  };
};

// Generate metadata for the page
export function generateMetadata({ params }: Props): Metadata {
  const locale = params.locale;
  const service = SERVICES.find(s => s.slug === params.slug);
  
  if (!service) {
    return {};
  }
  
  const title = `${service.title[locale]} | PEKCON KONTEYNER`;
  const description = service.shortDescription[locale];
  
  return generateSEOMetadata({
    title,
    description,
    locale,
    ogImage: service.image,
    canonicalUrl: `/hizmetlerimiz/${params.slug}`,
  });
}

// Generate static paths for all services
export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: Props) {
  const locale = useLocale() as Locale;
  const service = SERVICES.find(s => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }
  
  return (
    <main className="pt-32 pb-20 bg-white">
      <ServiceDetail service={service} locale={locale} />
    </main>
  );
} 