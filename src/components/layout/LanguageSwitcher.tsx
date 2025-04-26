"use client";

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from '@/lib/i18n';
import { Locale, locales, pathnames } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;
    
    // URL'de [locale] bölümünü değiştirerek yeni sayfaya git
    // Pathnames nesnesine bakarak doğru URL'yi bulabilmek için
    // Örneğin: /tr/hakkimizda -> /en/about-us
    
    // Pathnames içinde kök yoldan sonraki kısmı bul
    const path = pathname.replace(`/${locale}`, '');
    
    // Tüm pathnames için kontrol et ve eşleşeni bul
    let newPath = '';
    
    // Hizmet detay sayfaları için özel durum kontrolü
    // Örnek: /tr/hizmetlerimiz/denizyolu -> /en/services/sea-freight
    if (path.startsWith('/hizmetlerimiz/')) {
      const servicePath = path.replace('/hizmetlerimiz/', '');
      
      // Slug eşleştirmelerini tanımla
      const slugMap: Record<string, string> = {
        'denizyolu': 'sea-freight',
        'karayolu': 'road-freight',
        'demiryolu': 'rail-freight',
        'hava-kargo': 'air-freight',
        'proje-kargo': 'project-cargo',
        'intermodal': 'intermodal'
      };
      
      if (newLocale === 'en' && slugMap[servicePath]) {
        newPath = `/services/${slugMap[servicePath]}`;
      }
    }
    // İngilizce hizmet detay sayfalarından Türkçe'ye
    else if (path.startsWith('/services/')) {
      const servicePath = path.replace('/services/', '');
      
      // Ters slug eşleştirmelerini tanımla (İngilizce -> Türkçe)
      const reverseSlugMap: Record<string, string> = {
        'sea-freight': 'denizyolu',
        'road-freight': 'karayolu',
        'rail-freight': 'demiryolu',
        'air-freight': 'hava-kargo',
        'project-cargo': 'proje-kargo',
        'intermodal': 'intermodal'
      };
      
      if (newLocale === 'tr' && reverseSlugMap[servicePath]) {
        newPath = `/hizmetlerimiz/${reverseSlugMap[servicePath]}`;
      } else if (newLocale === 'en') {
        // İngilizce'den İngilizce'ye geçişte (Türkçe slug kullanılmışsa)
        for (const [enSlug, trSlug] of Object.entries(reverseSlugMap)) {
          if (servicePath === trSlug) {
            newPath = `/services/${enSlug}`;
            break;
          }
        }
      }
    }
    // Diğer özel durumlar için kontrol
    else if (pathname === `/${locale}/hakkimizda` && newLocale === 'en') {
      // Hakkımızda sayfasındaysak ve İngilizce'ye değiştiriyorsak
      newPath = '/about-us';
    } else if (pathname === `/${locale}/about-us` && newLocale === 'tr') {
      // About Us sayfasındaysak ve Türkçe'ye değiştiriyorsak
      newPath = '/hakkimizda';
    } else if (pathname === `/${locale}/iletisim` && newLocale === 'en') {
      // İletişim sayfasındaysak ve İngilizce'ye değiştiriyorsak
      newPath = '/contact';
    } else if (pathname === `/${locale}/contact` && newLocale === 'tr') {
      // Contact sayfasındaysak ve Türkçe'ye değiştiriyorsak
      newPath = '/iletisim';
    } else {
      // Diğer sayfalar için pathnames içinden doğru çeviriyi bul
      Object.entries(pathnames).forEach(([routePath, localizedPaths]) => {
        // localizedPaths bir nesne veya string olabilir
        if (typeof localizedPaths === 'object') {
          // Mevcut dilin yolunu bul
          const currentLocalePath = localizedPaths[locale];
          // Eğer mevcut yol, şu anki pathname ile eşleşiyorsa
          if (currentLocalePath === path) {
            // Yeni dilin yolunu al
            newPath = localizedPaths[newLocale];
          }
        }
      });
      
      // Eğer hiçbir özel eşleşme bulunamazsa, path'i olduğu gibi kullan
      if (!newPath) {
        newPath = path;
      }
    }
    
    // Değişiklik yapıldı ise ve yeni bir path tanımlandıysa, yönlendir
    if (newPath) {
      console.log(`Navigating from: ${pathname} to: /${newLocale}${newPath}`);
      window.location.pathname = `/${newLocale}${newPath}`;
    } else {
      // Hiçbir özel durum veya eşleşme bulunamadıysa, sadece locale değiştir
      window.location.pathname = `/${newLocale}${path}`;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentLocaleLabel = locale === 'tr' ? 'TR' : 'EN';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{currentLocaleLabel}</span>
        <svg
          className={cn('ml-1 h-5 w-5 transition-transform', {
            'rotate-180': isOpen,
          })}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={cn(
                  'block w-full px-4 py-2 text-left text-sm hover:bg-gray-100',
                  {
                    'bg-gray-100 font-medium': locale === l,
                  }
                )}
              >
                {l === 'tr' ? 'Türkçe' : 'English'}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 