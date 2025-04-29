"use client";

import { useState, useEffect, useRef } from 'react';
import Container from '@/components/ui/Container';
import Navbar from '@/components/layout/Navbar';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import { Locale } from '@/lib/i18n';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n';
import { CONTACT_INFO } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

type HeaderProps = {
  locale: Locale;
};

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations('navigation');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  // Mobil için karanlık arka planı kontrol edelim
  const [isTransparentHeader, setIsTransparentHeader] = useState(true);

  // Scroll yönetimi
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        setIsTransparentHeader(false);
      } else {
        setScrolled(false);
        setIsTransparentHeader(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Sayfa ilk yüklendiğinde de kontrol et
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobil menü dışında bir yere tıklandığında menüyü kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Mobil menü açıldığında body scroll'u engelle
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`flex-shrink-0 ${scrolled ? 'bg-transparent' : isTransparentHeader ? 'bg-white/10 backdrop-blur-sm' : 'bg-transparent'} px-10 sm:px-30 py-3 rounded-md`}>
            <Link href="/">
              <Image
                src="/images/logo/pekcon_logo_temp.png"
                alt="PEKCON"
                width={400}
                height={200}
                className="object-contain drop-shadow-lg h-20 sm:h-20 w-auto"
              />
            </Link>
          </div>

          {/* Center - Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <nav className={`flex items-center space-x-4 xl:space-x-8 ${isTransparentHeader && !scrolled ? 'opacity-70 hover:opacity-100 transition-opacity' : ''}`}>
              <Link 
                href="/" 
                className={`font-medium text-sm xl:text-base px-2 xl:px-3 py-2 rounded-md transition-colors ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : isTransparentHeader 
                      ? 'text-white hover:text-blue-200 hover:bg-white/10' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {t('home')}
              </Link>
              <Link 
                href={locale === 'tr' ? "/hakkimizda" : "/about-us"} 
                className={`font-medium text-sm xl:text-base px-2 xl:px-3 py-2 rounded-md transition-colors ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : isTransparentHeader 
                      ? 'text-white hover:text-blue-200 hover:bg-white/10' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {t('about')}
              </Link>
              <Link 
                href={locale === 'tr' ? "/hizmetlerimiz" : "/services"} 
                className={`font-medium text-sm xl:text-base px-2 xl:px-3 py-2 rounded-md transition-colors ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : isTransparentHeader 
                      ? 'text-white hover:text-blue-200 hover:bg-white/10' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {t('services')}
              </Link>
              <Link 
                href="/konteynerlar" 
                className={`font-medium text-sm xl:text-base px-2 xl:px-3 py-2 rounded-md transition-colors ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : isTransparentHeader 
                      ? 'text-white hover:text-blue-200 hover:bg-white/10' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {t('containerSales')}
              </Link>
              <Link 
                href={locale === 'tr' ? "/iletisim" : "/contact"} 
                className={`font-medium text-sm xl:text-base px-2 xl:px-3 py-2 rounded-md transition-colors ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : isTransparentHeader 
                      ? 'text-white hover:text-blue-200 hover:bg-white/10' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {t('contact')}
              </Link>
            </nav>
          </div>
          
          {/* Right Side - Language Switcher & Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className={isTransparentHeader && !scrolled ? 'shadow-glow transition-all duration-300' : ''}>
            <LanguageSwitcher locale={locale} />
            </div>
            
            <button
              type="button"
              className={`inline-flex lg:hidden items-center justify-center p-2 rounded-md touch-target
                ${isTransparentHeader && !scrolled ? 'bg-white/30 backdrop-blur-sm hover:bg-white/50' : ''}
                transition-colors duration-300
              `}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className={`block h-6 w-6 ${scrolled ? 'text-gray-700' : 'text-white'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className={`block h-6 w-6 ${scrolled ? 'text-gray-700' : 'text-white'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu - Full Screen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-white animate-fade-in" ref={menuRef}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/images/logo/pekcon_logo_temp.png"
                  alt="PEKCON"
                  width={200}
                  height={60}
                  className="object-contain h-16 w-auto"
                />
              </Link>
              <button
                type="button"
                className="p-2 rounded-md text-gray-700"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="flex-1 overflow-y-auto p-4">
              <div className="flex flex-col space-y-1 animate-slide-up">
                <Link 
                  href="/" 
                  className="font-medium text-xl text-gray-700 hover:text-blue-600 py-4 px-4 hover:bg-blue-50 rounded-lg transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('home')}
                </Link>
                <Link 
                  href={locale === 'tr' ? "/hakkimizda" : "/about-us"} 
                  className="font-medium text-xl text-gray-700 hover:text-blue-600 py-4 px-4 hover:bg-blue-50 rounded-lg transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('about')}
                </Link>
                <Link 
                  href={locale === 'tr' ? "/hizmetlerimiz" : "/services"} 
                  className="font-medium text-xl text-gray-700 hover:text-blue-600 py-4 px-4 hover:bg-blue-50 rounded-lg transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('services')}
                </Link>
                <Link 
                  href="/konteynerlar" 
                  className="font-medium text-xl text-gray-700 hover:text-blue-600 py-4 px-4 hover:bg-blue-50 rounded-lg transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('containerSales')}
                </Link>
                <Link 
                  href={locale === 'tr' ? "/iletisim" : "/contact"} 
                  className="font-medium text-xl text-gray-700 hover:text-blue-600 py-4 px-4 hover:bg-blue-50 rounded-lg transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('contact')}
                </Link>
              </div>
              
              <div className="mt-8 border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  {locale === 'tr' ? 'Hızlı İletişim' : 'Quick Contact'}
                </h3>
                
                {/* İletişim */}
                <div className="space-y-4">
                  <a 
                    href={`tel:${CONTACT_INFO.phone}`} 
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <FaPhoneAlt className="mr-3 text-blue-500" />
                    <span>{CONTACT_INFO.phone}</span>
                  </a>
                  
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`} 
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <FaEnvelope className="mr-3 text-blue-500" />
                    <span>{CONTACT_INFO.email}</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
