// Dinamik olarak favicon ekleyen script
(function() {
  // Mevcut favicon linklerini temizle
  const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
  existingFavicons.forEach(link => link.parentNode.removeChild(link));

  // Yeni favicon ekle
  const newIcon = document.createElement('link');
  newIcon.rel = 'icon';
  newIcon.href = '/icons/pekcon-favicon.ico';
  newIcon.type = 'image/x-icon';
  
  // 16x16 favicon
  const smallIcon = document.createElement('link');
  smallIcon.rel = 'icon';
  smallIcon.href = '/icons/pekcon-16x16.png';
  smallIcon.type = 'image/png';
  smallIcon.sizes = '16x16';
  
  // 32x32 favicon
  const mediumIcon = document.createElement('link');
  mediumIcon.rel = 'icon';
  mediumIcon.href = '/icons/pekcon-32x32.png';
  mediumIcon.type = 'image/png';
  mediumIcon.sizes = '32x32';
  
  // Apple touch icon
  const appleIcon = document.createElement('link');
  appleIcon.rel = 'apple-touch-icon';
  appleIcon.href = '/icons/pekcon-apple-icon.png';
  appleIcon.sizes = '180x180';

  // Head'e favicon linklerini ekle
  document.head.appendChild(newIcon);
  document.head.appendChild(smallIcon);
  document.head.appendChild(mediumIcon);
  document.head.appendChild(appleIcon);
  
  // Cache buster meta etiketleri ekle
  const cacheControl = document.createElement('meta');
  cacheControl.httpEquiv = 'Cache-Control';
  cacheControl.content = 'no-cache, no-store, must-revalidate';
  
  const pragma = document.createElement('meta');
  pragma.httpEquiv = 'Pragma';
  pragma.content = 'no-cache';
  
  const expires = document.createElement('meta');
  expires.httpEquiv = 'Expires';
  expires.content = '0';
  
  document.head.appendChild(cacheControl);
  document.head.appendChild(pragma);
  document.head.appendChild(expires);
})(); 