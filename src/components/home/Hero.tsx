"use client";

import { Link } from '@/lib/i18n';
import { Locale } from '@/lib/i18n';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { useEffect, useState, useRef } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const [windowHeight, setWindowHeight] = useState('100vh');
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoAttempts, setVideoAttempts] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Pencere yüksekliğini ve genişliğini belirlemek için useEffect kullanımı
  useEffect(() => {
    const updateDimensions = () => {
      // Mobil tarayıcılarda adres çubuğu sorunu için vh yerine window.innerHeight kullanımı
      setWindowHeight(`${window.innerHeight}px`);
      // Mobil cihaz kontrolü
      setIsMobile(window.innerWidth < 768);
    };
    
    // İlk yükleme ve resize olayında boyutları güncelle
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Video oynatma işlemi için ayrı bir useEffect
  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        // Video yükleme olayını dinle
        videoRef.current.onloadeddata = () => {
          setVideoLoaded(true);
        };

        try {
          // Video'yu gizli yükle ve hazırlandığında oynat
          videoRef.current.load();

          // Video hazır olduğunda oynatma girişiminde bulun
          await videoRef.current.play();
          console.log('Video başarıyla başlatıldı');
        } catch (error) {
          console.log('Video otomatik oynatılamadı:', error);
          
          // Mobil cihazlarda ek girişim
          if (isMobile && videoAttempts < 3) {
            console.log(`Video oynatma girişimi ${videoAttempts + 1}`);
            setVideoAttempts(prev => prev + 1);
            
            // Mobil tarayıcılarda kullanıcı etkileşimi gerektiren durumlar için
            // Sayfa yüklendikten sonra bir süre bekleyip tekrar dene
            setTimeout(() => {
              if (videoRef.current) {
                videoRef.current.play().catch(e => 
                  console.log('Yeniden deneme başarısız:', e)
                );
              }
            }, 1000);
          }
        }
      }
    };

    playVideo();

    // Kullanıcı etkileşimi sonrasında videoyu başlatmak için event listener ekle
    const handleUserInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(e => console.log('Etkileşim sonrası başlatma başarısız:', e));
      }
    };

    // Dokunma, tıklama vb. olaylar için dinleyiciler ekle
    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('scroll', handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };
  }, [isMobile, videoAttempts]);

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

  // Tarayıcının video kontrollerini gizlemek için özel CSS sınıfı
  const videoClass = `absolute inset-0 w-full h-full object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`;

  return (
    <div 
      className="relative flex items-center overflow-hidden"
      style={{ height: windowHeight, minHeight: '500px' }}
    >
      {/* Arkaplan video - mobil cihazlarda düşük kalitede veya statik görüntü kullanılabilir */}
      <div className="absolute inset-0 video-container">
        <style jsx>{`
          .video-container video::-webkit-media-controls {
            display: none !important;
          }
          .video-container video::-webkit-media-controls-start-playback-button {
            display: none !important;
          }
          video::-webkit-media-controls-panel {
            display: none !important;
            opacity: 0 !important;
          }
          video::-webkit-media-controls-play-button {
            display: none !important;
            opacity: 0 !important;
          }
          video::-webkit-media-controls-overlay-play-button {
            display: none !important;
          }
          video::-webkit-media-controls-enclosure {
            display: none !important;
          }
        `}</style>
        <video
          ref={videoRef}
          className={videoClass}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero/video-thumbnail.jpg"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          webkit-playsinline="true"
        >
          <source src="https://s3.tebi.io/pekcon/%C4%B0simsiz%20video%20%E2%80%90%20Clipchamp%20ile%20yap%C4%B1ld%C4%B1%20%282%29.mp4" type="video/mp4" />
          {/* Yedek kaynak kaldırıldı, tek kaynak kullanımı yeterli */}
        </video>
        
        {/* Video üzerinde gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60" />
      </div>
      
      <Container className="relative z-10 pt-16 md:pt-24">
        <div className="max-w-full md:max-w-2xl mx-auto md:mx-0 text-center md:text-left text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8 
                        tracking-tight text-transparent bg-clip-text bg-gradient-to-r 
                        from-white to-blue-200 animate-fade-in">
            {locale === 'tr' 
              ? 'Global Lojistik Çözümler' 
              : 'Global Logistics Solutions'}
            <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {locale === 'tr' 
              ? '& Konteyner Tedarik Hizmetleri' 
              : '& Container Supply Services'}
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 animate-fade-in-delay font-light px-4 md:px-0">
            {locale === 'tr'
              ? 'PEKCON Container&Logistics, uluslararası taşımacılık ve konteyner tedariğinde güvenilir çözüm ortağınız.'
              : 'PEKCON Container&Logistics, your reliable partner in international transportation and container supply.'}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start animate-fade-in-delay-long px-4 md:px-0">
            <Link href={locale === 'tr' ? "/konteynerlar" : "/containers"} className="order-1 sm:order-1 w-full sm:w-auto">
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 animate-pulse animation-duration-3000 w-full sm:w-auto"
              >
                <FaShoppingCart className="text-lg" />
                {locale === 'tr' ? 'Konteyner Satış' : 'Container Sales'}
              </Button>
            </Link>
            <Link href={locale === 'tr' ? "/hizmetlerimiz" : "/services"} className="order-2 sm:order-2 w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white/20 transition-all text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full w-full sm:w-auto"
              >
                {locale === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      
      {/* Alt yönlendirme oku - responsive tasarım */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center">
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