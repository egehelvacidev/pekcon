import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { Locale } from '@/lib/i18n';
import { generateSEOMetadata } from '@/lib/utils';
import { SERVICES } from '@/lib/constants';
import Container from '@/components/ui/Container';
import ServiceCard from '@/components/services/ServiceCard';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const locale = params.locale;
  
  const title = locale === 'tr' 
    ? 'Hizmetlerimiz | PEKCON KONTEYNER' 
    : 'Our Services | PEKCON CONTAINER';
  
  const description = locale === 'tr'
    ? 'PEKCON KONTEYNER olarak denizyolu, karayolu, demiryolu, hava kargo, proje kargo ve intermodal taşımacılık hizmetleri sunuyoruz.'
    : 'At PEKCON CONTAINER, we provide sea freight, road freight, rail freight, air freight, project cargo and intermodal transportation services.';
  
  return generateSEOMetadata({
    title,
    description,
    locale,
    canonicalUrl: '/services',
  });
}

export default function Services({ params }: { params: { locale: Locale } }) {
  const locale = params.locale as Locale;
  const t = useTranslations('services');
  
  return (
    <main className="pt-40 pb-16 bg-white">
      <Container>
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">
            {locale === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            {locale === 'tr' 
              ? 'PEKCON KONTEYNER olarak, global lojistik ihtiyaçlarınıza yönelik kapsamlı çözümler sunuyoruz. Profesyonel ekibimiz ve geniş hizmet ağımız ile tüm taşımacılık süreçlerinizi güvenle yönetiyoruz.'
              : 'At PEKCON CONTAINER, we offer comprehensive solutions for your global logistics needs. With our professional team and extensive service network, we safely manage all your transportation processes.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} locale={locale} />
          ))}
        </div>
      </Container>
    </main>
  );
} 