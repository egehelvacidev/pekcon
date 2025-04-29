import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Locale } from '@/lib/i18n';
import { generateSEOMetadata } from '@/lib/utils';
import { CONTACT_INFO } from '@/lib/constants';
import Container from '@/components/ui/Container';
import { notFound } from 'next/navigation';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const locale = params.locale;
  
  const title = locale === 'tr' 
    ? 'İletişim | PEKCON KONTEYNER' 
    : 'Contact | PEKCON CONTAINER';
  
  const description = locale === 'tr'
    ? 'PEKCON KONTEYNER ile iletişime geçin. Telefon numaramız ve e-posta adresimiz.'
    : 'Contact PEKCON CONTAINER. Our phone number and email address.';
  
  return generateSEOMetadata({
    title,
    description,
    locale,
    canonicalUrl: '/contact',
  });
}

export default function Contact({ params }: { params: { locale: Locale } }) {
  const locale = params.locale as Locale;
  const t = useTranslations('contact');
  
  // Only show this page for "en" locale, redirect to "iletisim" page for "tr"
  if (locale === 'tr') {
    notFound();
  }
  
  return (
    <main className="pt-32 pb-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            You can contact us for any questions or requests. We will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-8 transition-all hover:shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">{CONTACT_INFO.address.en}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 transition-all hover:shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <FaPhone className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone Number</h3>
                  <p className="text-gray-600">
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-blue-600 hover:underline">
                      {CONTACT_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 transition-all hover:shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email Address</h3>
                  <p className="text-gray-600">
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-600 hover:underline">
                      {CONTACT_INFO.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Social Media</h3>
              <div className="flex space-x-4">
                {CONTACT_INFO.socialMedia.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-50 p-3 rounded-full text-blue-600 hover:bg-blue-100 transition-colors"
                    aria-label={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.id === 'instagram' && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                    )}
                    {social.id === 'linkedin' && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Google Maps and Logo Area */}
          <div className="lg:col-span-3">
            <div className="bg-white p-4 rounded-xl shadow-sm h-full flex flex-col gap-4">
              {/* Google Maps Embed */}
              <div className="w-full h-[400px] rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Gulbahar,+Avni+Dilligil+St.+No:5,+34394+Sisli/Istanbul&center=41.0685418,29.0016467&zoom=20.5"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              
              {/* Get Directions Button */}
              <div className="mt-2 mb-2">
                <a 
                  href="https://www.google.com/maps/dir//Avni+Dilligil+Sk.+No:5+Gülbahar+34394+Şişli/İstanbul/@41.0685418,29.0016467,20z/data=!4m5!4m4!1m0!1m2!1m1!1s0x14cab656452b9bd1:0x1339f9f51b05e017" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <FaMapMarkerAlt />
                  Get Directions
                </a>
              </div>
              
              {/* Logo Area */}
              <div className="relative w-full h-[200px]">
                <Image 
                  src="/images/logo/pekcon_logo_temp copy.png" 
                  alt="PEKCON CONTAINER Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
} 