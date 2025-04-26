import { Metadata } from 'next';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n';
import { notFound } from 'next/navigation';

type Params = {
  locale: string;
};

type Props = {
  params: Params;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  
  return {
    title: locale === 'tr' ? 'Hakkımızda | PEKCON KONTEYNER' : 'About Us | PEKCON CONTAINER',
    description:
      locale === 'tr'
        ? 'PEKCON KONTEYNER hakkında bilgi edinin. Konteyner taşımacılığı ve lojistik çözüm ortağınız.'
        : 'Learn about PEKCON CONTAINER. Your container shipping and logistics solution partner.',
  };
}

export default function HakkimizdaPage({ params }: Props) {
  const locale = params.locale;
  const t = useTranslations('about');
  const actionT = useTranslations('actions');
  
  // Sadece "tr" locale için bu sayfayı göster, "en" için about-us sayfasına yönlendir
  if (locale === 'en') {
    notFound();
  }

  return (
    <main className="pt-28 pb-16">
      <Container>
        {/* Başlık Bölümü */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hakkımızda</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Ana İçerik */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Metin Bölümü */}
          <div className="order-2 md:order-1">
            <p className="text-gray-700 mb-6 leading-relaxed">
              2018 yılında kurulan <span className="font-semibold">PEKCON KONTEYNER</span>, konteyner tedarik zinciri yönetimi ve uluslararası taşımacılık alanında faaliyet göstermektedir. İstanbul merkezli firmamız, geniş acente ağı ile hizmet vermektedir.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Dünya çapında geniş acente ağına sahip olan firmamız, başta Uzakdoğu, Ortadoğu ve Akdeniz Ülkeleri olmak üzere Afrika, Avrupa ve Amerika'nın birçok bölgesine kaliteli, güvenilir, profesyonel hizmet anlayışı ve geniş acente bağlantıları ile FCL tam konteyner, LCL parsiyel konteyner, yurt içi taşımacılık, gemi kiralama, transit ticaret taşımaları ve kombine taşımacılık alanlarında hizmet vermeye devam etmektedir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Koşulsuz müşteri memnuniyeti anlayışı ile değerli müşterilerimizi iş ve lojistik çözüm ortakları olarak gören; sorun değil, çözüm üreten konumunda; etik kurallara asla taviz vermeyen; butik yaklaşımlar, taşıma sürecinin her aşamasında maksimum özen ve doğru, güncel bilgi aktarımı ile firmamız, uzun vadeli ilişkileri hedef olarak seçmiştir.
            </p>
          </div>

          {/* Resim Bölümü */}
          <div className="order-1 md:order-2">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/hero/containergif.gif" 
                alt="PEKCON KONTEYNER" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-black/30"></div>
            </div>
          </div>
        </div>

        {/* Küresel Varlık Göstergeleri */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Küresel Varlığımız</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl font-bold mb-2">5+</div>
              <div className="text-gray-700">Hizmet Verilen Kıta</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-700">Ülke Ağı</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl font-bold mb-2">100+</div>
              <div className="text-gray-700">Acente Bağlantısı</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl font-bold mb-2">1000+</div>
              <div className="text-gray-700">Başarılı Operasyon</div>
            </div>
          </div>
        </div>

        {/* Neden Biz Bölümü */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Neden PEKCON KONTEYNER?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 flex flex-col items-center text-center h-full">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Güvenilirlik</h3>
              <p className="text-gray-700">
                Taşıma süreçlerinde maksimum güvenlik ve zamanında teslimat garantisi ile çalışıyoruz.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center h-full">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Hızlı Çözümler</h3>
              <p className="text-gray-700">
                Dinamik yapımız sayesinde tüm lojistik ihtiyaçlarınıza hızlı ve etkili çözümler sunuyoruz.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center h-full">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Uzman Ekip</h3>
              <p className="text-gray-700">
                Deneyimli kadromuz ile uluslararası taşımacılık süreçlerini profesyonelce yönetiyoruz.
              </p>
            </Card>
          </div>
        </div>

        {/* İletişim CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">İletişime Geçin</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Konteyner taşımacılığı ve lojistik çözümleri hakkında daha fazla bilgi için bizimle iletişime geçin.
          </p>
          <Link href="/iletisim" locale="tr">
            <Button variant="secondary" size="lg">
              İletişime Geç
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}