import { Link } from '@/lib/i18n';
import { Service } from '@/types/service';
import { Locale } from '@/lib/i18n';
import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaShip, FaTruck, FaTrain, FaPlane, FaBoxes, FaExchangeAlt } from 'react-icons/fa';

interface ServiceCardProps {
  service: Service;
  locale: Locale;
}

export default function ServiceCard({ service, locale }: ServiceCardProps) {
  const t = useTranslations('services');
  const a = useTranslations('actions');

  const getIcon = () => {
    switch (service.icon) {
      case 'FaShip':
        return <FaShip className="h-8 w-8 mb-4 text-blue-600" />;
      case 'FaTruck':
        return <FaTruck className="h-8 w-8 mb-4 text-blue-600" />;
      case 'FaTrain':
        return <FaTrain className="h-8 w-8 mb-4 text-blue-600" />;
      case 'FaPlane':
        return <FaPlane className="h-8 w-8 mb-4 text-blue-600" />;
      case 'FaBoxes':
        return <FaBoxes className="h-8 w-8 mb-4 text-blue-600" />;
      case 'FaExchangeAlt':
        return <FaExchangeAlt className="h-8 w-8 mb-4 text-blue-600" />;
      default:
        return <FaShip className="h-8 w-8 mb-4 text-blue-600" />;
    }
  };

  // Hizmet path'ini oluştur
  const getServicePath = () => {
    const slug = service.slug;
    
    // Slug'a göre İngilizce dilinde farklı URL
    if (locale === 'en') {
      // İngilizce için servis id'sini kullan
      return `/services/${service.id}`;
    }
    
    // Türkçe için normal slug
    return `/services/${slug}`;
  };

  // "Detaylı Bilgi" yada "Learn More" butonunun metni
  const getLearnMoreText = () => {
    return locale === 'en' ? 'Learn More' : 'Detaylı Bilgi';
  };

  return (
    <Card hoverable className="h-full flex flex-col">
      <Card.Content className="flex flex-col items-center text-center h-full">
        {getIcon()}
        <Card.Title className="mb-2">{service.title[locale]}</Card.Title>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {service.shortDescription[locale]}
        </p>
        <div className="mt-auto pt-4">
          <Link href={getServicePath()} locale={locale}>
            <Button variant="outline" size="sm">
              {getLearnMoreText()}
            </Button>
          </Link>
        </div>
      </Card.Content>
    </Card>
  );
} 