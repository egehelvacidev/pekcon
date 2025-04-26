import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { CONTAINER_DATA } from '@/lib/constants';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { FaRuler, FaWeight, FaDoorOpen, FaWarehouse, FaCheck } from 'react-icons/fa';
import { Key } from 'react';

// Bir container'ın özelliklerini gösteren tipler
type ContainerSpecs = {
  internal?: { length: string; width: string; height: string };
  external?: { length: string; width: string; height: string };
  doorOpening?: { width: string; height: string };
  roofOpening?: { width: string; length: string };
  weight?: { tare: string; payload: string; maxGross: string };
  capacity?: { volume: string; maxEurPallets?: string };
  standard?: { length: string; width: string; height: string };
  options?: { sizes: string; height: string };
  features?: { insulation: string; electricity: string; hvac: string };
};

// Client component yerine server component kullanıyoruz
export async function generateMetadata({ params }: { params: { locale: Locale, slug: string } }): Promise<Metadata> {
  const locale = params.locale;
  const slug = params.slug;
  
  // CONTAINER_DATA'dan slug'a göre konteyner verilerini al
  const containerKey = Object.keys(CONTAINER_DATA).find(key => key === slug);
  
  if (!containerKey) {
    return {
      title: `Container ${slug}`,
      description: `Details about ${slug} container`
    };
  }
  
  const containerData = CONTAINER_DATA[containerKey as keyof typeof CONTAINER_DATA];
  
  const title = locale === 'tr'
    ? `${containerData.name} | PEKCON KONTEYNER`
    : `${containerData.name} | PEKCON KONTEYNER`;
  
  const description = locale === 'tr'
    ? `PEKCON KONTEYNER ${containerData.name} detayları, teknik özellikleri ve satın alma bilgileri.`
    : `PEKCON KONTEYNER ${containerData.name} details, technical specifications and purchasing information.`;
  
  return {
    title,
    description,
    alternates: {
      canonical: `/konteynerlar/${slug}`,
    }
  };
}

// Tip güvenliği için CONTAINER_DATA anahtarlarını kullanıyoruz
type ContainerKeys = keyof typeof CONTAINER_DATA;

export default function ContainerDetails({ params }: { params: { slug: string, locale: Locale } }) {
  const locale = params.locale as Locale;
  const { slug } = params;
  
  // Türü güvenli bir şekilde kontrol edip containerData'yı alıyoruz
  const containerKey = Object.keys(CONTAINER_DATA).find(key => key === slug) as ContainerKeys | undefined;
  
  // Eğer belirtilen slug için key bulunamazsa notFound() fonksiyonunu çağır
  if (!containerKey) {
    notFound();
  }
  
  const containerData = CONTAINER_DATA[containerKey];
  const containerSpecs = containerData.specs as ContainerSpecs;
  
  // Sadece ana resmi kullanıyoruz
  const mainImage = containerData.images?.[0] || '';
  
  // Özelliklerin var olup olmadığını kontrol eden yardımcı fonksiyonlar
  const hasInternalDimensions = containerSpecs && containerSpecs.internal !== undefined;
  const hasExternalDimensions = containerSpecs && containerSpecs.external !== undefined;
  const hasDoorOpening = containerSpecs && containerSpecs.doorOpening !== undefined;
  const hasRoofOpening = containerSpecs && containerSpecs.roofOpening !== undefined;
  const hasWeight = containerSpecs && containerSpecs.weight !== undefined;
  const hasCapacity = containerSpecs && containerSpecs.capacity !== undefined;
  
  return (
    <main className="pt-40 pb-20">
      <Container>
        <div className="mb-8">
          <Button
            variant="outline"
            size="sm"
            className="mb-4 hover:scale-105 transition-transform"
          >
            <a href={locale === 'tr' ? '/tr/konteynerlar' : '/en/containers'}>
              {locale === 'tr' ? '← Tüm Konteynerlar' : '← All Containers'}
            </a>
          </Button>
          <h1 className="text-4xl font-bold mb-2 text-blue-900">
            {containerData.name}
          </h1>
          <p className="text-gray-600 flex items-center gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {containerData.category.toUpperCase()}
            </span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              {containerData.size}' feet
            </span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Sadece ana resmi gösteriyoruz, thumbnail galeri kaldırıldı */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="bg-gray-100 relative aspect-video overflow-hidden">
              {containerData.images && containerData.images.length > 0 ? (
                <div>
                  <Image 
                    src={mainImage} 
                    alt={containerData.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-400">
                    {locale === 'tr' ? 'Konteyner görseli mevcut değil' : 'Container image not available'}
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-900">
              <FaRuler className="text-blue-700" />
              {locale === 'tr' ? 'Teknik Özellikler' : 'Technical Specifications'}
            </h2>
            
            <div className="border rounded-xl overflow-hidden mb-6 shadow-md bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                      {locale === 'tr' ? 'Konteyner Tipi' : 'Container Type'}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {containerData.name}
                    </td>
                  </tr>
                  
                  {hasInternalDimensions && (
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                        {locale === 'tr' ? 'İç Boyutlar' : 'Internal Dimensions'}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {locale === 'tr' 
                          ? `U: ${containerSpecs.internal?.length || '-'}, G: ${containerSpecs.internal?.width || '-'}, Y: ${containerSpecs.internal?.height || '-'}` 
                          : `L: ${containerSpecs.internal?.length || '-'}, W: ${containerSpecs.internal?.width || '-'}, H: ${containerSpecs.internal?.height || '-'}`}
                      </td>
                    </tr>
                  )}
                  
                  {hasExternalDimensions && (
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                        {locale === 'tr' ? 'Dış Boyutlar' : 'External Dimensions'}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {locale === 'tr' 
                          ? `U: ${containerSpecs.external?.length || '-'}, G: ${containerSpecs.external?.width || '-'}, Y: ${containerSpecs.external?.height || '-'}` 
                          : `L: ${containerSpecs.external?.length || '-'}, W: ${containerSpecs.external?.width || '-'}, H: ${containerSpecs.external?.height || '-'}`}
                      </td>
                    </tr>
                  )}
                  
                  {hasDoorOpening && (
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                        {locale === 'tr' ? 'Kapı Açıklığı' : 'Door Opening'}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {locale === 'tr' 
                          ? `G: ${containerSpecs.doorOpening?.width || '-'}, Y: ${containerSpecs.doorOpening?.height || '-'}` 
                          : `W: ${containerSpecs.doorOpening?.width || '-'}, H: ${containerSpecs.doorOpening?.height || '-'}`}
                      </td>
                    </tr>
                  )}
                  
                  {hasRoofOpening && (
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                        {locale === 'tr' ? 'Çatı Açıklığı' : 'Roof Opening'}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {locale === 'tr' 
                          ? `G: ${containerSpecs.roofOpening?.width || '-'}, U: ${containerSpecs.roofOpening?.length || '-'}` 
                          : `W: ${containerSpecs.roofOpening?.width || '-'}, L: ${containerSpecs.roofOpening?.length || '-'}`}
                      </td>
                    </tr>
                  )}
                  
                  {hasWeight && (
                    <>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                          {locale === 'tr' ? 'Dara Ağırlığı' : 'Tare Weight'}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {containerSpecs.weight?.tare || '-'}
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                          {locale === 'tr' ? 'Yük Kapasitesi' : 'Payload Capacity'}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {containerSpecs.weight?.payload || '-'}
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                          {locale === 'tr' ? 'Maksimum Brüt Ağırlık' : 'Maximum Gross Weight'}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {containerSpecs.weight?.maxGross || '-'}
                        </td>
                      </tr>
                    </>
                  )}
                  
                  {hasCapacity && (
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                        {locale === 'tr' ? 'Kapasite' : 'Capacity'}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {containerSpecs.capacity?.volume || '-'}
                        {containerSpecs.capacity?.maxEurPallets && (
                          <span className="block text-gray-500 mt-1">
                            {locale === 'tr' 
                              ? `${containerSpecs.capacity.maxEurPallets} EUR palet` 
                              : `${containerSpecs.capacity.maxEurPallets} EUR pallets`}
                          </span>
                        )}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            {containerData.features && containerData.features[locale] && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-blue-900">
                  <FaCheck className="text-green-500" />
                  {locale === 'tr' ? 'Özellikler' : 'Features'}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {containerData.features[locale].map((feature: string, index: number) => (
                    <li 
                      key={index}
                      className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <FaCheck className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-blue-900 flex items-center gap-2">
                <FaWarehouse className="text-blue-700" />
                {locale === 'tr' ? 'Fiyat Teklifi Alın' : 'Get a Price Quote'}
              </h2>
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                <p className="text-gray-700 mb-4">
                  {locale === 'tr'
                    ? 'Bu konteyner hakkında detaylı bilgi ve fiyat teklifi almak için lütfen bizimle iletişime geçin.'
                    : 'Please contact us for detailed information and price quotation about this container.'}
                </p>
                <div>
                  <Button 
                    variant="primary" 
                    className="w-full md:w-auto shadow-lg" 
                  >
                    <a href={locale === 'tr' ? '/tr/iletisim' : '/en/contact'}>
                      {locale === 'tr' ? 'İletişime Geçin' : 'Contact Us'}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900 flex items-center gap-2">
            <FaWarehouse className="text-blue-700" />
            {locale === 'tr' ? 'Açıklama' : 'Description'}
          </h2>
          <div className="prose max-w-none text-gray-700">
            {containerData.description && containerData.description[locale] && (
              <p>
                {containerData.description[locale]}
              </p>
            )}
            
            {containerData.usage && containerData.usage[locale] && (
              <>
                <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-900">
                  {locale === 'tr' ? 'Kullanım Alanları' : 'Usage Areas'}
                </h3>
                <p>
                  {containerData.usage[locale]}
                </p>
              </>
            )}
            
            <p className="mt-4 bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
              {locale === 'tr'
                ? 'PEKCON KONTEYNER olarak, müşterilerimizin ihtiyaçlarına göre uygun çözümler sunmaktayız. Daha fazla bilgi için lütfen bizimle iletişime geçin.'
                : 'As PEKCON KONTEYNER, we offer suitable solutions according to the needs of our customers. Please contact us for more information.'}
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
} 