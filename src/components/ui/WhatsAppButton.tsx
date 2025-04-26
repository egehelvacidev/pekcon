'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
  const locale = useLocale();
  const phoneNumber = "+905543545201";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Sayfa yüklendikten sonra butonu görünür hale getir (animasyon için)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const tooltipText = locale === 'tr' ? 'Bize WhatsApp\'tan yazın' : 'Message us on WhatsApp';
  
  return (
    <div className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      {/* Nabız efekti arka planı */}
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-70 animate-ping"></div>
      
      {/* Ana buton */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative flex items-center justify-center bg-green-500 text-white rounded-full w-16 h-16 shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 shadow-green-500/30"
        aria-label={tooltipText}
      >
        <FaWhatsapp size={30} className="animate-pulse" />
      </a>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-800 text-white text-sm rounded-md py-2 px-4 whitespace-nowrap shadow-lg">
          {tooltipText}
          <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </div>
  );
} 