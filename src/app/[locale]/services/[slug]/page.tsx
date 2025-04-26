import { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { Locale } from '@/lib/i18n';
import { generateSEOMetadata } from '@/lib/utils';
import { SERVICES } from '@/lib/constants';
import ServiceDetail from '@/components/services/ServiceDetail';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    locale: Locale;
    slug: string;
  };
};

// Hizmet slug'larını ingilizce-türkçe eşleştirmeleri
const slugMap: Record<string, string> = {
  'sea-freight': 'denizyolu',
  'road-freight': 'karayolu',
  'rail-freight': 'demiryolu',
  'air-freight': 'hava-kargo',
  'project-cargo': 'proje-kargo',
  'intermodal': 'intermodal'
};

// Ters slug eşleştirmeleri
const reverseSlugMap: Record<string, string> = {
  'denizyolu': 'sea-freight',
  'karayolu': 'road-freight',
  'demiryolu': 'rail-freight',
  'hava-kargo': 'air-freight',
  'proje-kargo': 'project-cargo',
  'intermodal': 'intermodal'
};

// Bir slug'ı kabul eden ve servisi bulan yardımcı fonksiyon
function findServiceBySlug(slug: string, locale: Locale) {
  console.log(`Finding service with slug: ${slug}, locale: ${locale}`);
  
  // İngilizce locale için
  if (locale === 'en') {
    // Önce İngilizce id'ye göre ara (sea-freight, road-freight gibi)
    let service = SERVICES.find(s => s.id === slug);
    
    // Eğer bulunamazsa ve Türkçe slug kullanılmışsa (denizyolu, karayolu gibi)
    if (!service && reverseSlugMap[slug]) {
      const enSlug = reverseSlugMap[slug];
      service = SERVICES.find(s => s.id === enSlug);
    }
    
    console.log(`Found service for EN:`, service?.id);
    return service;
  } 
  // Türkçe locale için
  else {
    // Önce Türkçe slug'a göre ara (denizyolu, karayolu gibi)
    let service = SERVICES.find(s => s.slug === slug);
    
    // Eğer bulunamazsa ve İngilizce id kullanılmışsa (sea-freight, road-freight gibi)
    if (!service && slugMap[slug]) {
      const trSlug = slugMap[slug];
      service = SERVICES.find(s => s.slug === trSlug);
    }
    
    console.log(`Found service for TR:`, service?.slug);
    return service;
  }
}

// Generate metadata for the page
export function generateMetadata({ params }: Props): Metadata {
  const locale = params.locale;
  const service = findServiceBySlug(params.slug, locale);
  
  if (!service) {
    return {};
  }
  
  const title = `${service.title[locale]} | ${locale === 'tr' ? 'PEKCON KONTEYNER' : 'PEKCON CONTAINER'}`;
  const description = service.shortDescription[locale];
  
  // Doğru canonical URL belirleme
  let canonicalSlug = params.slug;
  if (locale === 'en') {
    canonicalSlug = service.id; // İngilizce için id kullan (sea-freight gibi)
  } else {
    canonicalSlug = service.slug; // Türkçe için slug kullan (denizyolu gibi)
  }
  
  return generateSEOMetadata({
    title,
    description,
    locale,
    ogImage: service.image,
    canonicalUrl: `/services/${canonicalSlug}`,
  });
}

// Generate static paths for all services
export function generateStaticParams() {
  // Hem orijinal slug'lar hem de eşleştirilmiş slug'lar için path'ler oluştur
  const paths: {slug: string}[] = [];
  
  SERVICES.forEach(service => {
    paths.push({ slug: service.slug });
    
    // Eşleştirilmiş slug varsa onu da ekle
    const englishSlug = Object.entries(slugMap).find(([en, tr]) => tr === service.slug)?.[0];
    if (englishSlug) {
      paths.push({ slug: englishSlug });
    }
  });
  
  return paths;
}

export default function ServiceDetailPage({ params }: Props) {
  const locale = params.locale as Locale;
  const service = findServiceBySlug(params.slug, locale);
  
  if (!service) {
    notFound();
  }
  
  console.log(`ServiceDetailPage - locale: ${locale}, service: ${service.id}`);
  
  return (
    <main className="pt-32 pb-20">
      <ServiceDetail service={service} locale={locale} />
    </main>
  );
} 