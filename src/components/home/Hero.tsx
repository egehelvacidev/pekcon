"use client";

import { Link } from '@/lib/i18n';
import { Locale } from '@/lib/i18n';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { useEffect, useState, useRef } from 'react';
import { FaShoppingCart, FaPlay } from 'react-icons/fa';
import Image from 'next/image';

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const [windowHeight, setWindowHeight] = useState('100vh');
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Pencere yüksekliğini ve genişliğini belirlemek için useEffect kullanımı
  useEffect(() => {
    const updateDimensions = () => {
      // Mobil tarayıcılarda adres çubuğu sorunu için vh yerine window.innerHeight kullanımı
      setWindowHeight(`${window.innerHeight}px`);
      // Mobil cihaz kontrolü
      setIsMobile(window.innerWidth < 768);
      
      // iOS cihaz tespiti
      const userAgent = window.navigator.userAgent.toLowerCase();
      setIsIOS(/iphone|ipad|ipod|macintosh/.test(userAgent) && 'ontouchend' in document);
    };
    
    // İlk yükleme ve resize olayında boyutları güncelle
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Sadece iOS olmayan cihazlarda video otomatik oynatmayı dene
  useEffect(() => {
    if (isIOS || !videoRef.current) return;
    
    const attemptPlay = () => {
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.playsInline = true;
        
        videoRef.current.play()
          .then(() => {
            setVideoPlaying(true);
          })
          .catch((error) => {
            console.error('Video oynatma hatası:', error);
          });
      }
    };
    
    // Video yüklendiğinde oynatmayı dene
    videoRef.current.addEventListener('loadeddata', attemptPlay);
    
    // Kullanıcı etkileşimi olduğunda oynatmayı dene
    const userEvents = ['touchstart', 'click', 'scroll'];
    const handleUserInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        attemptPlay();
      }
    };
    
    userEvents.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });
    
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', attemptPlay);
      }
      
      userEvents.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [isIOS]);

  // Aşağı kaydırma fonksiyonu
  const scrollToNextSection = () => {
    // Services section elementini bul
    const servicesSection = document.getElementById('services-section');
    
    if (servicesSection) {
      // Hizmetler bölümüne kaydır
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Eğer element bulunamazsa, ekran yüksekliği kadar kaydır
      window.scrollTo({
        top: window.innerHeight - 80, // Header'ı görünür bırakmak için biraz üst kısım bırak
        behavior: 'smooth'
      });
    }
  };

  // iOS cihazlarda video oynatma işlemi
  const handleIOSVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      
      videoRef.current.play()
        .then(() => {
          setVideoPlaying(true);
        })
        .catch(error => {
          console.error('iOS video oynatma hatası:', error);
        });
    }
  };

  // iOS cihazlarda otomatik oynatmayı dene
  useEffect(() => {
    if (!isIOS || !videoRef.current) return;
    
    const attemptPlay = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.muted = true;
          videoRef.current.playsInline = true;
          await videoRef.current.play();
          setVideoPlaying(true);
        } catch (error) {
          console.error('iOS video otomatik oynatma hatası:', error);
        }
      }
    };
    
    attemptPlay();
    
    // Kullanıcı etkileşimi olduğunda oynatmayı dene
    const userEvents = ['touchstart', 'click', 'scroll'];
    const handleUserInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        attemptPlay();
      }
    };
    
    userEvents.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });
    
    return () => {
      userEvents.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [isIOS]);

  return (
    <div 
      className="relative flex items-center overflow-hidden"
      style={{ height: windowHeight, minHeight: '500px' }}
    >
      {/* Arkaplan video/görsel alanı */}
      <div className="absolute inset-0 video-container" ref={containerRef}>
        {/* Global CSS stil etiketi - video kontrollerini tüm tarayıcılarda gizlemek için */}
        <style jsx global>{`
          .hero-video {
            object-fit: cover;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        `}</style>
        
        {/* Statik arka plan görseli - Her zaman görünür */}
        <div className="absolute inset-0 bg-cover bg-center z-10">
          <Image 
            src="/images/hero/video-thumbnail.jpg" 
            alt="PEKCON Container & Logistics" 
            fill 
            priority 
            sizes="100vw"
            style={{ objectFit: 'cover' }} 
          />
        </div>
        
        {/* iOS olmayan cihazlar için otomatik oynatılan video */}
        {!isIOS && (
          <video
            ref={videoRef}
            className="hero-video z-20"
            autoPlay
            playsInline
            muted
            loop
            preload="auto"
            poster="/images/hero/video-thumbnail.jpg"
          >
            <source src="/videos/herovideo.mp4" type="video/mp4" />
          </video>
        )}
        
        {/* iOS için özel video çözümü */}
        {isIOS && (
          <>
            <video
              ref={videoRef}
              className="hero-video z-20"
              playsInline
              muted
              loop
              preload="auto"
              poster="/images/hero/video-thumbnail.jpg"
            >
              <source src="/videos/herovideo.mp4" type="video/mp4" />
            </video>
            
            {/* iOS için play butonu - sadece video oynamıyorsa göster */}
            {!videoPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center z-30 cursor-pointer"
                onClick={handleIOSVideoPlay}
              >
                <div className="bg-white/20 rounded-full p-4 backdrop-blur-sm">
                  <FaPlay className="text-white text-3xl" />
                </div>
              </div>
            )}
          </>
        )}
        
        {/* Arka plan gradient'i */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/75 z-40"></div>
      </div>
      
      <Container className="relative z-50 pt-16 md:pt-24">
        <div className="max-w-full md:max-w-2xl mx-auto md:mx-0 text-center md:text-left text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 md:mb-8 
                        tracking-tight text-transparent bg-clip-text bg-gradient-to-r 
                        from-white via-blue-100 to-white animate-fade-in drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)]
                        [text-shadow:_0_1px_5px_rgb(0_0_0_/_80%)] [filter:_drop-shadow(0_0_6px_rgba(255,255,255,0.3))]">
            {locale === 'tr' 
              ? 'Global Lojistik Çözümler' 
              : 'Global Logistics Solutions'}
            <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                          [text-shadow:_0_2px_6px_rgb(0_0_0_/_80%)]">
              {locale === 'tr' 
              ? '& Konteyner Tedarik Hizmetleri' 
              : '& Container Supply Services'}
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 animate-fade-in-delay font-medium px-4 md:px-0 
                      [text-shadow:_0_1px_3px_rgb(0_0_0_/_80%)] drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
            {locale === 'tr'
              ? 'PEKCON Container&Logistics, uluslararası taşımacılık ve konteyner tedariğinde güvenilir çözüm ortağınız.'
              : 'PEKCON Container&Logistics, your reliable partner in international transportation and container supply.'}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start animate-fade-in-delay-long px-4 md:px-0">
            <Link href={locale === 'tr' ? "/konteynerlar" : "/containers"} className="order-1 sm:order-1 w-full sm:w-auto">
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-xl shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 animate-pulse animation-duration-3000 w-full sm:w-auto font-bold"
              >
                <FaShoppingCart className="text-lg" />
                {locale === 'tr' ? 'Konteyner Satış' : 'Container Sales'}
              </Button>
            </Link>
            <Link href={locale === 'tr' ? "/hizmetlerimiz" : "/services"} className="order-2 sm:order-2 w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white/30 hover:border-white transition-all text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full w-full sm:w-auto font-semibold shadow-md hover:shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_60%)]"
              >
                {locale === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      
      {/* Alt yönlendirme oku - responsive tasarım */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center z-50">
        <button 
          onClick={scrollToNextSection}
          aria-label={locale === 'tr' ? 'Aşağı kaydır' : 'Scroll down'}
          className="animate-bounce cursor-pointer p-2 rounded-full bg-white/20 backdrop-blur-sm touch-target transition-all hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>
  );
} 