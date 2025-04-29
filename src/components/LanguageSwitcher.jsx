import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState('tr');

  // Sayfa yüklendiğinde mevcut dili belirle
  useEffect(() => {
    const locale = router.locale || router.defaultLocale || 'tr';
    setCurrentLocale(locale);
  }, [router.locale, router.defaultLocale]);

  // Dil değiştirme fonksiyonu
  const switchLanguage = () => {
    const newLocale = currentLocale === 'tr' ? 'en' : 'tr';
    
    // Aynı sayfada kalarak dili değiştir
    router.push(router.pathname, router.asPath, { locale: newLocale, scroll: false });
  };

  return (
    <button 
      onClick={switchLanguage}
      className="fixed bottom-4 right-4 z-50 rounded-full bg-white p-2 shadow-lg transition-all duration-300 hover:scale-110 shadow-glow"
      aria-label={currentLocale === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'}
    >
      <Image 
        src={currentLocale === 'tr' ? '/icons/uk-flag.svg' : '/icons/tr-flag.svg'} 
        alt={currentLocale === 'tr' ? 'English' : 'Türkçe'} 
        width={32} 
        height={32} 
        className="rounded-full"
      />
    </button>
  );
} 