import { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { Locale } from '@/lib/i18n';
import { generateSEOMetadata } from '@/lib/utils';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { CONTAINER_DATA } from '@/lib/constants';

export function generateMetadata({ params }: { params: { locale: Locale, slug: string } }): Metadata {
  const locale = params.locale;
  const slug = params.slug;
  
  const containerData = CONTAINER_DATA[slug];
  
  if (!containerData) {
    return generateSEOMetadata({
      title: `${slug.replace(/-/g, ' ')} | PEKCON KONTEYNER`,
      description: locale === 'tr'
        ? `PEKCON KONTEYNER ${slug.replace(/-/g, ' ')} detayları, teknik özellikleri ve satın alma bilgileri.`
        : `PEKCON KONTEYNER ${slug.replace(/-/g, ' ')} details, technical specifications and purchasing information.`,
      locale,
      canonicalUrl: `/konteynerlar/${slug}`,
    });
  }
  
  const title = locale === 'tr' 
    ? `${containerData.name} | PEKCON KONTEYNER` 
    : `${containerData.name} | PEKCON KONTEYNER`;
  
  const description = locale === 'tr'
    ? `PEKCON KONTEYNER ${containerData.name} detayları, teknik özellikleri ve satın alma bilgileri.`
    : `PEKCON KONTEYNER ${containerData.name} details, technical specifications and purchasing information.`;
  
  return generateSEOMetadata({
    title,
    description,
    locale,
    canonicalUrl: `/konteynerlar/${slug}`,
  });
}

export default function ContainerDetails({ params }: { params: { slug: string, locale: Locale } }) {
  const locale = params.locale as Locale;
  const { slug } = params;
  
  // Konteyner verisini slug'dan al
  const containerData = CONTAINER_DATA[slug];
  
  // Eğer belirtilen slug için veri bulunamazsa notFound() fonksiyonunu çağır
  if (!containerData) {
    notFound();
  }
  
  return (
    <main className="pt-40 pb-20">
      <Container>
        <div className="mb-8">
          <Button variant="outline" size="sm" className="mb-4" asChild>
            <a href={locale === 'tr' ? '/tr/konteynerlar' : '/en/containers'}>
              {locale === 'tr' ? 'Tüm Konteynerlar' : 'All Containers'}
            </a>
          </Button>
          <h1 className="text-3xl font-bold mb-2">{containerData.name}</h1>
          <p className="text-gray-600">
            {locale === 'tr' ? 
              `${containerData.category.toUpperCase()} | ${containerData.size}' feet` : 
              `${containerData.category.toUpperCase()} | ${containerData.size}' feet`}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-100 rounded-lg overflow-hidden relative aspect-video">
            {containerData.images && containerData.images.length > 0 ? (
              <Image 
                src={containerData.images[0]} 
                alt={containerData.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-400">
                  {locale === 'tr' ? 'Konteyner görseli mevcut değil' : 'Container image not available'}
                </p>
              </div>
            )}
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">
              {locale === 'tr' ? 'Teknik Özellikler' : 'Technical Specifications'}
            </h2>
            
            <div className="border rounded-lg overflow-hidden mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                      {locale === 'tr' ? 'Konteyner Tipi' : 'Container Type'}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {containerData.name}
                    </td>
                  </tr>
                  
                  {containerData.specs?.internal && (
                    <tr>
                      <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                        {locale === 'tr' ? 'İç Boyutlar' : 'Internal Dimensions'}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {locale === 'tr' ? 
                          `U: ${containerData.specs.internal.length}, G: ${containerData.specs.internal.width}, Y: ${containerData.specs.internal.height}` : 
                          `L: ${containerData.specs.internal.length}, W: ${containerData.specs.internal.width}, H: ${containerData.specs.internal.height}`}
                      </td>
                    </tr>
                  )}
                  
                  {containerData.specs?.external && (
                    <tr>
                      <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                        {locale === 'tr' ? 'Dış Boyutlar' : 'External Dimensions'}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {locale === 'tr' ? 
                          `U: ${containerData.specs.external.length}, G: ${containerData.specs.external.width}, Y: ${containerData.specs.external.height}` : 
                          `L: ${containerData.specs.external.length}, W: ${containerData.specs.external.width}, H: ${containerData.specs.external.height}`}
                      </td>
                    </tr>
                  )}
                  
                  {containerData.specs?.doorOpening && (
                    <tr>
                      <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                        {locale === 'tr' ? 'Kapı Açıklığı' : 'Door Opening'}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {locale === 'tr' ? 
                          `G: ${containerData.specs.doorOpening.width}, Y: ${containerData.specs.doorOpening.height}` : 
                          `W: ${containerData.specs.doorOpening.width}, H: ${containerData.specs.doorOpening.height}`}
                      </td>
                    </tr>
                  )}
                  
                  {containerData.specs?.roofOpening && (
                    <tr>
                      <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                        {locale === 'tr' ? 'Çatı Açıklığı' : 'Roof Opening'}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {locale === 'tr' ? 
                          `G: ${containerData.specs.roofOpening.width}, U: ${containerData.specs.roofOpening.length}` : 
                          `W: ${containerData.specs.roofOpening.width}, L: ${containerData.specs.roofOpening.length}`}
                      </td>
                    </tr>
                  )}
                  
                  {containerData.specs?.weight && (
                    <>
                      <tr>
                        <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                          {locale === 'tr' ? 'Dara Ağırlığı' : 'Tare Weight'}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {containerData.specs.weight.tare}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                          {locale === 'tr' ? 'Yük Kapasitesi' : 'Payload Capacity'}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {containerData.specs.weight.payload}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                          {locale === 'tr' ? 'Maksimum Brüt Ağırlık' : 'Maximum Gross Weight'}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {containerData.specs.weight.maxGross}
                        </td>
                      </tr>
                    </>
                  )}
                  
                  {containerData.specs?.capacity && (
                    <tr>
                      <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-700">
                        {locale === 'tr' ? 'Kapasite' : 'Capacity'}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {containerData.specs.capacity.volume}
                        {containerData.specs.capacity.maxEurPallets && (
                          <span className="block text-gray-500 mt-1">
                            {locale === 'tr' 
                              ? `${containerData.specs.capacity.maxEurPallets} EUR palet` 
                              : `${containerData.specs.capacity.maxEurPallets} EUR pallets`}
                          </span>
                        )}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            {containerData.features && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  {locale === 'tr' ? 'Özellikler' : 'Features'}
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {containerData.features[locale].map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">
                {locale === 'tr' ? 'Fiyat Teklifi Alın' : 'Get a Price Quote'}
              </h2>
              <p className="text-gray-600 mb-4">
                {locale === 'tr'
                  ? 'Bu konteyner hakkında detaylı bilgi ve fiyat teklifi almak için lütfen bizimle iletişime geçin.'
                  : 'Please contact us for detailed information and price quotation about this container.'}
              </p>
              <Button variant="primary" asChild>
                <a href={locale === 'tr' ? '/tr/iletisim' : '/en/contact'}>
                  {locale === 'tr' ? 'İletişime Geçin' : 'Contact Us'}
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4">
            {locale === 'tr' ? 'Açıklama' : 'Description'}
          </h2>
          <div className="prose max-w-none">
            <p>
              {containerData.description?.[locale]}
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">
              {locale === 'tr' ? 'Kullanım Alanları' : 'Usage Areas'}
            </h3>
            <p>
              {containerData.usage?.[locale]}
            </p>
            
            <p className="mt-4">
              {locale === 'tr'
                ? 'PEKCON KONTEYNER olarak, müşterilerimizin ihtiyaçlarına göre uygun çözümler sunmaktayız. Daha fazla bilgi için lütfen bizimle iletişime geçin.'
                : 'As PEKCON KONTEYNER, we offer suitable solutions according to the needs of our customers. Please contact us for more information.'}
            </p>
          </div>
        </div>
        
        {containerData.images && containerData.images.length > 1 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">
              {locale === 'tr' ? 'Görseller' : 'Images'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {containerData.images.map((image, index) => (
                <div 
                  key={index} 
                  className="bg-gray-100 rounded-lg overflow-hidden relative aspect-video"
                >
                  <Image 
                    src={image} 
                    alt={`${containerData.name} - ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </main>
  );
} 