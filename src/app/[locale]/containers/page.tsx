import { Metadata } from 'next';
import { Locale } from '@/lib/i18n';
import { generateSEOMetadata } from '@/lib/utils';
import ContainerSearchList from '@/components/containers/ContainerSearchList';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const locale = params.locale;
  
  return generateSEOMetadata({
    title: locale === 'tr' ? 'Konteynerlar | PEKCON KONTEYNER' : 'Containers | PEKCON CONTAINER',
    description: locale === 'tr'
      ? 'PEKCON KONTEYNER konteyner çeşitleri, satış ve kiralama hizmetleri. Farklı tip ve boyutlarda konteyner seçenekleri için bizi ziyaret edin.'
      : 'PEKCON KONTEYNER container types, sales and rental services. Visit us for different types and sizes of container options.',
    locale,
    canonicalUrl: '/konteynerlar',
  });
}

export default function ContainersPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const t = useTranslations('containers');
  
  // Türkçe için yönlendirme
  if (locale === 'tr') {
    notFound();
  }
  
  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-6">Containers</h1>
          <p className="text-lg text-gray-600 max-w-4xl leading-relaxed mb-10">
            At PEKCON CONTAINER, we provide services with a wide range of container options for different needs.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 max-w-4xl mb-12">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">Our Global Container Supply Network</h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="leading-relaxed">
                As one of <span className="font-semibold">Turkey's largest suppliers of new and second-hand containers</span>, our company has an organizational network that can meet our customers' demands in the fastest way possible, with contracted warehouses in many locations around the world as well as in Turkey.
              </p>
              
              <div className="w-full border-t border-gray-200 my-2"></div>
              
              <p className="leading-relaxed">
                In addition to standard ISO cargo containers, we can also offer <span className="font-semibold">specially manufactured and equipped containers</span> within our global network. The point we particularly emphasize for these containers is that the loading conditions of the containers are trouble-free and manufactured and certified in accordance with international rules and standards.
              </p>
              
              <div className="w-full border-t border-gray-200 my-2"></div>
              
              <p className="leading-relaxed">
                Apart from the freight and port cost advantages provided to users by <span className="font-semibold">SOC (Shipper Owned Container)</span> usage in road transport and predominantly maritime transport, these containers can also be used for storage and accommodation purposes at the destination. Additionally, the person/institution that owns these containers can use them for another shipment or sell them to someone else.
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-blue-600 font-medium">
                You can explore suitable container solutions for your different needs.
              </p>
            </div>
          </div>
        </div>
        
        <ContainerSearchList locale={locale} />
      </div>
    </main>
  );
} 