import { Service } from '@/types/service';
import { Locale } from '@/lib/i18n';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Link } from '@/lib/i18n';
import { useTranslations } from 'next-intl';
import { FaShip, FaTruck, FaTrain, FaPlane, FaBoxes, FaExchangeAlt, FaCheckCircle, FaGlobeAmericas, FaMapMarkerAlt, FaListUl, FaInfoCircle } from 'react-icons/fa';
import ServiceCard from '@/components/services/ServiceCard';
import { SERVICES } from '@/lib/constants';

interface ServiceDetailProps {
  service: Service;
  locale: Locale;
}

export default function ServiceDetail({ service, locale }: ServiceDetailProps) {
  const a = useTranslations('actions');
  
  console.log(`Rendering ServiceDetail with locale: ${locale}, service: ${service.id}`);

  const getIcon = () => {
    switch (service.icon) {
      case 'FaShip':
        return <FaShip className="h-16 w-16 text-blue-600" />;
      case 'FaTruck':
        return <FaTruck className="h-16 w-16 text-blue-600" />;
      case 'FaTrain':
        return <FaTrain className="h-16 w-16 text-blue-600" />;
      case 'FaPlane':
        return <FaPlane className="h-16 w-16 text-blue-600" />;
      case 'FaBoxes':
        return <FaBoxes className="h-16 w-16 text-blue-600" />;
      case 'FaExchangeAlt':
        return <FaExchangeAlt className="h-16 w-16 text-blue-600" />;
      default:
        return <FaShip className="h-16 w-16 text-blue-600" />;
    }
  };

  // Parse the service description to identify sections
  const renderDescription = () => {
    // URL'de /en/ varsa her zaman İngilizce içeriği göster
    // Window nesnesini kullanarak mevcut URL'yi kontrol et
    const currentLocale = locale === 'en' ? 'en' : 'tr';
    const sections = service.description[currentLocale].split('\n\n');
    
    return sections.map((section, idx) => {
      // Check if this is a section header (all caps)
      if (section.toUpperCase() === section && !section.includes(':') && section.length < 100) {
        return (
          <div key={idx} className="mb-8 mt-10">
            <div className="flex items-center border-b pb-2 border-blue-200">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <FaInfoCircle className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-blue-700">
                {section}
              </h2>
            </div>
          </div>
        );
      }
      
      // Check if this is a sub-header (contains A) or B) pattern)
      else if (section.match(/^[A-Z]\)\s/)) {
        return (
          <div key={idx} className="mb-6 mt-8 bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3 text-sm">
                {section.charAt(0)}
              </span>
              {section.substring(2)}
            </h3>
          </div>
        );
      }
      
      // Check if this section starts with "Servis Ağı:" or "Service Network:"
      else if (section.startsWith('Servis Ağı:') || section.startsWith('Service Network:')) {
        const [label, ...value] = section.split(':');
        const networkValue = value.join(':').trim();
        
        return (
          <div key={idx} className="my-5 bg-blue-50 p-5 rounded-lg border border-blue-100">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-blue-600 mr-3 mt-1 text-xl flex-shrink-0" />
              <div>
                <div className="font-semibold text-blue-800">{label}:</div>
                <div className="text-gray-700 mt-1">{networkValue}</div>
              </div>
            </div>
          </div>
        );
      }
      
      // Check if this is a list of items (starts with "-")
      else if (section.includes('\n-')) {
        const [listTitle, ...listItems] = section.split('\n-');
        return (
          <div key={idx} className="my-6 bg-gray-50 p-5 rounded-lg">
            {listTitle && (
              <div className="mb-4 flex items-center border-b pb-2 border-gray-200">
                <FaListUl className="text-blue-600 mr-2 text-lg" />
                <h4 className="font-semibold text-gray-800">{listTitle}</h4>
              </div>
            )}
            <ul className="space-y-3 pl-3">
              {listItems.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start bg-white p-3 rounded-md shadow-sm">
                  <FaCheckCircle className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      }
      
      // Regular paragraph
      else {
        return (
          <p key={idx} className="my-4 leading-relaxed text-gray-700">
            {section}
          </p>
        );
      }
    });
  };

  // İletişim butonunun metni
  const getContactButtonText = () => {
    return locale === 'en' ? 'Contact Us' : 'İletişime Geçin';
  };

  return (
    <div className="py-12">
      <Container>
        {/* Header Section */}
        <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100 shadow-sm">
          <div className="flex items-center mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm mr-5 flex-shrink-0">
              {getIcon()}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-3">{service.title[locale]}</h1>
              <p className="text-lg text-gray-600">
                {service.shortDescription[locale]}
              </p>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-blue-100">
            <Link href={locale === 'tr' ? '/iletisim' : '/contact'} locale={locale}>
              <Button variant="primary" size="lg" className="shadow-md">
                {getContactButtonText()}
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="prose prose-lg max-w-none service-description">
            {renderDescription()}
          </div>
        </div>

        {/* Other Services Section */}
        <div className="mt-16 bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
            {locale === 'tr' ? 'Diğer Hizmetlerimiz' : 'Our Other Services'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.filter(s => s.id !== service.id)
              .slice(0, 3)
              .map(otherService => (
                <ServiceCard 
                  key={otherService.id} 
                  service={otherService} 
                  locale={locale} 
                />
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
} 