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
  const containerRef = useRef<HTMLDivElement>(null);

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
          // Video'yu hazırla ve oynat
          videoRef.current.muted = true; // Öncelikle sessiz olduğundan emin ol
          videoRef.current.autoplay = true;
          videoRef.current.load();
          videoRef.current.play()
            .then(() => console.log('Video başarıyla başlatıldı'))
            .catch(error => {
              console.log('Video otomatik oynatılamadı:', error);
              
              // Mobil cihazlarda ek girişim - birkaç kez deneme yap
              if (isMobile && videoAttempts < 5) {
                console.log(`Video oynatma girişimi ${videoAttempts + 1}`);
                setVideoAttempts(prev => prev + 1);
                
                // Mobil tarayıcılarda kullanıcı etkileşimi gerektiren durumlar için
                setTimeout(() => {
                  if (videoRef.current) {
                    // Video kontrollerini kapat ve tekrar oynatmayı dene
                    videoRef.current.controls = false;
                    videoRef.current.play().catch(e => 
                      console.log('Yeniden deneme başarısız:', e)
                    );
                  }
                }, 300 * videoAttempts); // Her denemede biraz daha bekle
              }
            });
        } catch (error) {
          console.log('Video başlatma hatası:', error);
        }
      }
    };

    playVideo();

    // Kullanıcı etkileşimi sonrasında videoyu başlatmak için event listener ekle
    const handleUserInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.controls = false; // Etkileşimden sonra kontrolleri kapat
        videoRef.current.play().catch(e => console.log('Etkileşim sonrası başlatma başarısız:', e));
      }
    };

    // Videoyu başlatmak için tüm olası kullanıcı etkileşimlerini dinle
    const events = ['touchstart', 'touchend', 'click', 'scroll', 'mousemove'];
    
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    // Video container tıklaması - video kontrollerini engellemek için
    const preventShowControls = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(console.error);
      }
      return false;
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('click', preventShowControls);
      containerRef.current.addEventListener('touchstart', preventShowControls);
    }

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
      
      if (containerRef.current) {
        containerRef.current.removeEventListener('click', preventShowControls);
        containerRef.current.removeEventListener('touchstart', preventShowControls);
      }
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
      <div className="absolute inset-0 video-container" ref={containerRef}>
        {/* Global CSS stil etiketi - video kontrollerini tüm tarayıcılarda gizlemek için */}
        <style jsx global>{`
          /* Video kontrollerini her türlü tarayıcıda gizle */
          video::-webkit-media-controls,
          video::-webkit-media-controls-panel,
          video::-webkit-media-controls-panel-container,
          video::-webkit-media-controls-start-playback-button,
          video::-webkit-media-controls-play-button,
          video::-webkit-media-controls-overlay-play-button,
          video::-webkit-media-controls-overlay-play-button-container,
          video::-webkit-media-controls-volume-slider-container,
          video::-webkit-media-controls-volume-slider,
          video::-webkit-media-controls-mute-button,
          video::-webkit-media-controls-timeline,
          video::-webkit-media-controls-current-time-display,
          video::-webkit-media-controls-time-remaining-display,
          video::-webkit-media-controls-fullscreen-button,
          video::-webkit-media-controls-toggle-closed-captions-button,
          video::-webkit-media-controls-enclosure {
            display: none !important;
            opacity: 0 !important;
            pointer-events: none !important;
            visibility: hidden !important;
            width: 0 !important;
            height: 0 !important;
          }
          
          /* Firefox için */
          video::-moz-range-thumb, 
          video::-moz-range-track {
            display: none !important;
          }
          
          /* Mobil tarayıcılar için ek stil */
          .video-container {
            pointer-events: none;
          }
          
          /* IE için */
          video::-ms-track {
            display: none !important;
          }
          
          /* Zoom ve focus sorununu önle */
          .video-focus-trap {
            pointer-events: none;
            user-select: none;
          }
        `}</style>
        
        {/* Arka plan gradient'i - video üzerinde tıklamayı engelleyen bir katman olarak da çalışır */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60 video-focus-trap"
          onClick={(e) => e.stopPropagation()}
        ></div>
        
        <video
          ref={videoRef}
          className={videoClass}
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          preload="auto"
          poster="/images/hero/video-thumbnail.jpg"
          controls={false}
          disablePictureInPicture={true}
          disableRemotePlayback={true}
          style={{
            pointerEvents: 'none',
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
          controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
        >
          <source src="https://s3.tebi.io/pekcon/%C4%B0simsiz%20video%20%E2%80%90%20Clipchamp%20ile%20yap%C4%B1ld%C4%B1%20%282%29.mp4" type="video/mp4" />
        </video>
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