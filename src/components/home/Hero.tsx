"use client";

import { Link } from '@/lib/i18n';
import { Locale } from '@/lib/i18n';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { useEffect, useState, useRef } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const [windowHeight, setWindowHeight] = useState('100vh');
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoAttempts, setVideoAttempts] = useState(0);
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

  // Video otomatik oynatmayı zorlayan güçlü bir çözüm
  useEffect(() => {
    let videoPlayTimer: any = null; 
    let interactionTimer: any = null;
    let videoPlayAttempts = 0;
    const maxAttempts = 10;
    
    // Kullanıcı etkileşimi olduğunda video oynatmayı dene
    const tryPlayVideo = () => {
      if (videoRef.current && videoRef.current.paused) {
        console.log('Video oynatma deneniyor...');
        
        // Mobil cihazlar için gerekli tüm ayarları yap
        videoRef.current.muted = true;
        videoRef.current.playsInline = true;
        videoRef.current.setAttribute('playsinline', '');
        videoRef.current.setAttribute('webkit-playsinline', '');
        videoRef.current.controls = false;
        
        // Video oynatmayı dene
        videoRef.current.play()
          .then(() => {
            console.log('Video başarıyla oynatılıyor');
            setVideoPlaying(true);
            setVideoAttempts(0);
          })
          .catch((error) => {
            console.error('Video oynatma hatası:', error);
            
            // Eğer maksimum deneme sayısına ulaşılmadıysa tekrar dene
            if (videoPlayAttempts < maxAttempts) {
              videoPlayAttempts++;
              console.log(`Deneme ${videoPlayAttempts}/${maxAttempts}`);
              
              // Farklı bir süre bekleyerek tekrar dene
              clearTimeout(videoPlayTimer);
              videoPlayTimer = setTimeout(tryPlayVideo, 300 * videoPlayAttempts);
            }
          });
      }
    };
    
    // Video yüklendiğinde çalışacak fonksiyon
    const handleVideoLoaded = () => {
      console.log('Video yüklendi');
      setVideoLoaded(true);
      tryPlayVideo();
    };
    
    // Kullanıcı etkileşimi ile videoyu başlatma girişimi
    const handleUserInteraction = () => {
      console.log('Kullanıcı etkileşimi algılandı');
      tryPlayVideo();
    };
    
    // Video hazır olduğunda
    if (videoRef.current) {
      // Video başlatma öncesi hazırlık
      videoRef.current.load();
      videoRef.current.onloadeddata = handleVideoLoaded;
      
      // Video ilerleme olayı
      videoRef.current.ontimeupdate = () => {
        if (videoRef.current && videoRef.current.currentTime > 0 && !videoPlaying) {
          console.log('Video ilerlemeye başladı');
          setVideoPlaying(true);
        }
      };
      
      // Mobil cihazlar için ekstra ayarlar
      videoRef.current.muted = true;
      videoRef.current.setAttribute('playsinline', '');
      videoRef.current.setAttribute('webkit-playsinline', '');
      videoRef.current.controls = false;
      
      // Sayfa yüklendikten sonra düzenli aralıklarla oynatmayı dene
      interactionTimer = setInterval(() => {
        if (!videoPlaying && videoRef.current && videoRef.current.paused) {
          tryPlayVideo();
        } else if (videoPlaying) {
          clearInterval(interactionTimer);
        }
      }, 1000);
    }
    
    // Tüm olası kullanıcı etkileşimleri için olay dinleyicileri
    const events = [
      'touchstart', 'touchend', 'click', 'scroll', 'mousemove', 
      'keydown', 'visibilitychange', 'focus', 'pointerdown', 'mousedown'
    ];
    
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { passive: true });
    });
    
    // Video container tıklama olayı
    const preventShowControls = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      tryPlayVideo();
    };
    
    if (containerRef.current) {
      containerRef.current.addEventListener('click', preventShowControls);
      containerRef.current.addEventListener('touchstart', preventShowControls);
    }
    
    // Temizleme işlemleri
    return () => {
      clearTimeout(videoPlayTimer);
      clearInterval(interactionTimer);
      
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
      
      if (containerRef.current) {
        containerRef.current.removeEventListener('click', preventShowControls);
        containerRef.current.removeEventListener('touchstart', preventShowControls);
      }
    };
  }, [videoPlaying]);

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

  return (
    <div 
      className="relative flex items-center overflow-hidden"
      style={{ height: windowHeight, minHeight: '500px' }}
    >
      {/* Arkaplan video/görsel alanı */}
      <div className="absolute inset-0 video-container" ref={containerRef}>
        {/* Global CSS stil etiketi - video kontrollerini tüm tarayıcılarda gizlemek için */}
        <style jsx global>{`
          /* Video kontrollerini her türlü tarayıcıda gizle */
          video::-webkit-media-controls,
          video::-webkit-media-controls-panel,
          video::-webkit-media-controls-play-button,
          video::-webkit-media-controls-overlay-play-button,
          video::-webkit-media-controls-start-playback-button,
          video::-webkit-media-controls-volume-slider-container,
          video::-webkit-media-controls-volume-slider,
          video::-webkit-media-controls-mute-button,
          video::-webkit-media-controls-timeline,
          video::-webkit-media-controls-fullscreen-button,
          video::-webkit-media-controls-download-button,
          video::-webkit-media-controls-enclosure,
          video::-internal-media-controls-download-button,
          video::-internal-media-controls-overflow-button {
            display: none !important;
            opacity: 0 !important;
            pointer-events: none !important;
            visibility: hidden !important;
            width: 0 !important;
            height: 0 !important;
            position: absolute !important;
          }
          
          /* Mobil cihazlarda zoom/focus sorununu önle */
          .video-container {
            pointer-events: none;
          }
          
          /* Video tüm tarayıcılarda oynatılsın */
          video[autoplay]:not([muted]) {
            muted: true;
          }
          
          /* Video stilini düzgün ayarla */
          .hero-video {
            object-fit: cover;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        `}</style>
        
        {/* Statik arka plan görseli - video yüklenene kadar görünür */}
        <div className={`absolute inset-0 bg-cover bg-center z-10 transition-opacity duration-1000 ${videoPlaying ? 'opacity-0' : 'opacity-100'}`}>
          <Image 
            src="/images/hero/video-thumbnail.jpg" 
            alt="PEKCON Container & Logistics" 
            fill 
            priority 
            sizes="100vw"
            style={{ objectFit: 'cover' }} 
          />
        </div>
        
        {/* Optimized video element */}
        <video
          ref={videoRef}
          className={`hero-video z-0 ${videoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
          poster="/images/hero/video-thumbnail.jpg"
          controls={false}
          style={{ pointerEvents: 'none' }}
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src="https://s3.tebi.io/pekcon/%C4%B0simsiz%20video%20%E2%80%90%20Clipchamp%20ile%20yap%C4%B1ld%C4%B1%20%282%29.mp4" type="video/mp4" />
        </video>
        
        {/* Arka plan gradient'i */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/75 z-20"></div>
      </div>
      
      <Container className="relative z-30 pt-16 md:pt-24">
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
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center z-30">
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