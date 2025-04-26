import { Metadata } from 'next';
import { Locale } from '@/lib/i18n';
import { generateSEOMetadata } from '@/lib/utils';
import ContainerSearchList from '@/components/containers/ContainerSearchList';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const locale = params.locale;
  
  const title = locale === 'tr' 
    ? 'Konteynerlar | PEKCON KONTEYNER' 
    : 'Containers | PEKCON KONTEYNER';
  
  const description = locale === 'tr'
    ? 'PEKCON KONTEYNER konteyner çeşitleri. Geniş konteyner seçeneğimiz ile ihtiyaçlarınıza uygun çözümler sunuyoruz.'
    : 'PEKCON KONTEYNER container types. We offer solutions that meet your needs with our wide range of container options.';
  
  return generateSEOMetadata({
    title,
    description,
    locale,
    canonicalUrl: '/konteynerlar',
  });
}

export default function ContainersPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const t = useTranslations('containers');
  
  // English için yönlendirme
  if (locale === 'en') {
    notFound();
  }
  
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-6">Konteynerlar</h1>
          <p className="text-lg text-gray-600 max-w-4xl leading-relaxed mb-10">
            PEKCON KONTEYNER olarak, farklı ihtiyaçlara yönelik geniş konteyner seçeneklerimizle hizmet vermekteyiz.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 max-w-4xl mb-12">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">Global Konteyner Tedarik Ağımız</h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="leading-relaxed">
                Türkiye'nin <span className="font-semibold">en büyük sıfır ve ikinci el konteyner tedarikçilerinden</span> biri olan firmamız, Türkiye'nin yanı sıra Dünyanın bir çok noktasındaki anlaşmalı depoları ile müşterilerimizin taleplerini en hızlı şeklide karşılayabilecek organizasyon ağına sahiptir.
              </p>
              
              <div className="w-full border-t border-gray-200 my-2"></div>
              
              <p className="leading-relaxed">
                Standart ISO yük konteynerlerinin yanında <span className="font-semibold">özel üretimli ve tertibatlı konteynerleri</span> de bulunduğumuz global ağ içerisinde sunabilmekteyiz. Sunduğumuz bu konteynerler için özellikle üzerinde durduğumuz nokta konteynerlerin yükleme kondisyonlarının sorunsuz ve uluslararası kural ve standartlara uygun olarak üretilmesi ve sertifikalandırılmış olmasıdır.
              </p>
              
              <div className="w-full border-t border-gray-200 my-2"></div>
              
              <p className="leading-relaxed">
                Kara yolu ve ağırlıklı olarak deniz yolu taşımacılığı konusunda <span className="font-semibold">SOC (Sahibine ait Konteyner)</span> kullanımının kullanıcılara sağladığı navlun ve liman maliyet avantajları haricinde bu konteynerler varış yerinde depolama ve barınma amaçlı olarak da kullanabilmektedir. Ayrıca bu konteynerlerin sahibi olan kişi/kurum bir başka yüklemesine bu konteynerleri kullanabileceği gibi bir başkasına satışını da yapabilir.
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-blue-600 font-medium">
                Farklı ihtiyaçlarınız için uygun konteyner çözümlerini inceleyebilirsiniz.
              </p>
            </div>
          </div>
        </div>
        
        <ContainerSearchList locale={locale} />
      </div>
    </main>
  );
} 