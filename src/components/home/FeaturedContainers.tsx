import { useTranslations } from 'next-intl';
import { CONTAINERS } from '@/lib/constants';
import { Locale } from '@/lib/i18n';
import { Link } from '@/lib/i18n';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ContainerCard from '@/components/containers/ContainerCard';

interface FeaturedContainersProps {
  locale: Locale;
}

export default function FeaturedContainers({ locale }: FeaturedContainersProps) {
  const a = useTranslations('actions');

  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'tr' ? 'Konteyner Çözümlerimiz' : 'Our Container Solutions'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {locale === 'tr'
              ? 'Farklı ihtiyaçlara yönelik geniş konteyner seçeneklerimizi keşfedin.'
              : 'Explore our wide range of container options for different needs.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Displaying featured containers (show less on homepage) */}
          {CONTAINERS.slice(0, 3).map((container) => (
            <ContainerCard key={container.id} container={container} locale={locale} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/konteynerlar">
            <Button variant="primary" size="lg">
              {locale === 'tr' ? 'Tüm Konteynerler' : 'All Containers'}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
} 