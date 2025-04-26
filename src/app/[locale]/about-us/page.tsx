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
    title: locale === 'tr' ? 'Hakkımızda |  PEKCON Container&Logistics' : 'About Us | PEKCON Container&Logistics',
    description:
      locale === 'tr'
        ? 'PEKCON KONTEYNER hakkında bilgi edinin. Konteyner taşımacılığı ve lojistik çözüm ortağınız.'
        : 'Learn about PEKCON CONTAINER. Your container shipping and logistics solution partner.',
  };
}

export default function AboutUs({ params }: Props) {
  const locale = params.locale;
  
  // Sadece "en" locale için bu sayfayı göster, "tr" için hakkimizda sayfasına yönlendir
  if (locale === 'tr') {
    notFound();
  }

  return (
    <main className="pt-28 pb-16 bg-white">
      <Container>
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Section */}
          <div className="order-2 md:order-1">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2018, <span className="font-semibold">PEKCON CONTAINER</span> operates in the field of container supply chain management and international transportation. Based in Istanbul, our company provides services through an extensive agency network.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With a wide agency network worldwide, we continue to provide services in FCL full container, LCL partial container, domestic transportation, ship chartering, transit trade transportation, and combined transportation with a quality, reliable, professional service approach and extensive agency connections, especially to the Far East, Middle East, and Mediterranean Countries, as well as many regions of Africa, Europe, and America.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With an unconditional customer satisfaction approach, we see our valued customers as our business and logistics solution partners; in the position of producing solutions, not problems; never compromising on ethical rules; with boutique approaches, maximum care at every stage of the transportation process, and accurate and up-to-date information; our company has chosen long-term relationships as its goal.
            </p>
          </div>

          {/* Image Section */}
          <div className="order-1 md:order-2">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://s3.tebi.io/pekcon/containergif.gif" 
                alt="PEKCON CONTAINER" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-black/30"></div>
            </div>
          </div>
        </div>

        {/* Global Presence Indicators */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Global Presence</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl font-bold mb-2">5+</div>
              <div className="text-gray-700">Continents Served</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-700">Country Network</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl font-bold mb-2">100+</div>
              <div className="text-gray-700">Agency Connections</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl font-bold mb-2">1000+</div>
              <div className="text-gray-700">Successful Operations</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose PEKCON CONTAINER?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 flex flex-col items-center text-center h-full">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-700">
                We work with maximum security and on-time delivery guarantee in transportation processes.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center h-full">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Solutions</h3>
              <p className="text-gray-700">
                Thanks to our dynamic structure, we offer fast and effective solutions to all your logistics needs.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center h-full">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-700">
                With our experienced staff, we professionally manage international transportation processes.
              </p>
            </Card>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us for more information about container transportation and logistics solutions.
          </p>
          <Link href="/contact" locale="en">
            <Button variant="secondary" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
} 