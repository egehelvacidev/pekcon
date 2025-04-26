import { useTranslations } from 'next-intl';
import { SERVICES } from '@/lib/constants';
import { Locale } from '@/lib/i18n';
import { Link } from '@/lib/i18n';
import Container from '@/components/ui/Container';
import ServiceCard from '@/components/services/ServiceCard';
import Button from '@/components/ui/Button';

interface ServicesOverviewProps {
  locale: Locale;
}

export default function ServicesOverview({ locale }: ServicesOverviewProps) {
  const t = useTranslations('services');
  const a = useTranslations('actions');

  const getServicesTitle = () => {
    return locale === 'en' ? 'Our Services' : 'Hizmetlerimiz';
  };

  const getReadMoreText = () => {
    return locale === 'en' ? 'Read More' : 'Devamını Oku';
  };

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{getServicesTitle()}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {locale === 'tr'
              ? 'Kapsamlı lojistik hizmetlerimizle global ticaret ihtiyaçlarınıza çözüm sunuyoruz.'
              : 'We offer solutions to your global trade needs with our comprehensive logistics services.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {SERVICES.slice(0, 6).map((service) => (
            <ServiceCard key={service.id} service={service} locale={locale} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" locale={locale}>
            <Button variant="primary" size="lg">
              {getReadMoreText()}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
} 