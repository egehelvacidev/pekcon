# PEKCON KONTEYNER Web Sitesi PRD (Product Requirements Document)

## Proje Özeti
PEKCON KONTEYNER için modern, kullanıcı dostu, mobil ve SEO uyumlu bir kurumsal web sitesi geliştirilecektir. Site, Next.js ve Tailwind CSS kullanılarak oluşturulacak, Türkçe ve İngilizce dil desteği sunacaktır.

## Genel Gereksinimler

### Teknik Alt Yapı
- **Framework**: Next.js (App Router)
- **CSS Framework**: Tailwind CSS
- **Programlama Dili**: TypeScript
- **Dil Desteği**: Türkçe ve İngilizce (i18n entegrasyonu)
- **SEO Optimizasyonu**: Meta etiketler, Open Graph, JSON-LD yapılandırılmış veriler
- **Web Vitals**: Yüksek performans, erişilebilirlik skoru (90+ Lighthouse)
- **Versiyon Kontrolü**: Git

### Sayfa Yapısı
1. **Ana Sayfa**
   - Hero Bölümü (Slider veya statik banner)
   - Hizmetler Özeti
   - Hakkımızda Özeti
   - Konteyner Tipleri Showcase
   - İletişim Bilgileri

2. **Hakkımızda**
   - Şirket Tanıtımı
   - Misyon ve Vizyon
   - Tarihçe (2018'den itibaren)
   - Hizmet Ağı
   - Değerler

3. **Hizmetlerimiz**
   - Denizyolu Taşımacılığı
   - Karayolu Taşımacılığı
   - Demiryolu Taşımacılığı
   - Hava Kargo
   - Proje Kargo
   - Intermodal Taşımacılık

4. **Konteyner Satış**
   - Filtreleme Seçenekleri
   - Konteyner Tipleri Grid/Liste Görünümü
   - Detay Sayfaları
   - Talep Formu

5. **İletişim**
   - Form
   - Harita
   - İletişim Bilgileri
   - Sosyal Medya Bağlantıları

### UI/UX Gereksinimleri
- Modern ve profesyonel tasarım
- Kullanıcı dostu navigasyon
- Mobil uyumlu (responsive) tasarım
- Tutarlı marka kimliği
- Hızlı yükleme süreleri
- Erişilebilirlik standartlarına uygunluk
- Kullanıcı geri bildirim mekanizmaları

### Özel Bileşenler
- **Header/Navbar**: Logo, menü, dil değiştirici, iletişim butonu
- **Footer**: Site haritası, iletişim bilgileri, sosyal medya bağlantıları, copyright
- **Dil Değiştirici**: Türkçe/İngilizce geçişi sağlayan dropdown
- **Hizmet Kartları**: İkon, başlık, kısa açıklama içeren kartlar
- **Konteyner Grid**: Filtrelenebilir, görsel ağırlıklı grid
- **İletişim Formu**: Ad, email, telefon, konu, mesaj alanları
- **WhatsApp İletişim Butonu**: Sabit, ekranın köşesinde konumlandırılmış buton

## Teknik Gereksinimler

### Geliştirme Ortamı
```bash
# Proje kurulumu
npx create-next-app@latest pekcon-website --typescript --tailwind --app --eslint
cd pekcon-website

# Gerekli paketlerin yüklenmesi
npm install next-intl react-icons framer-motion react-hook-form zod sharp
```

### Proje Dizin Yapısı
```
├── public/
│   ├── images/
│   │   ├── logo/
│   │   │   ├── logo/
│   │   │   ├── containers/
│   │   │   ├── services/
│   │   │   └── team/
│   ├── locales/
│   │   ├── tr/
│   │   └── en/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── page.tsx
│   │   │   ├── hakkimizda/
│   │   │   ├── hizmetlerimiz/
│   │   │   │   ├── denizyolu/
│   │   │   │   ├── karayolu/
│   │   │   │   ├── demiryolu/
│   │   │   │   ├── hava-kargo/
│   │   │   │   ├── proje-kargo/
│   │   │   │   └── intermodal/
│   │   │   ├── konteyner-satis/
│   │   │   └── iletisim/
│   │   ├── api/
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   └── ContactForm.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   └── FeaturedContainers.tsx
│   │   ├── containers/
│   │   │   ├── ContainerCard.tsx
│   │   │   ├── ContainerGrid.tsx
│   │   │   ├── ContainerFilter.tsx
│   │   │   └── ContainerDetail.tsx
│   │   └── services/
│   │       ├── ServiceCard.tsx
│   │       └── ServiceDetail.tsx
│   ├── lib/
│   │   ├── i18n.ts
│   │   ├── constants.ts
│   │   ├── utils.ts
│   │   └── schema.ts
│   ├── styles/
│   │   └── globals.css
│   └── types/
│       ├── container.ts
│       ├── service.ts
│       └── common.ts
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── middleware.ts
└── package.json
```

### SEO Stratejisi
- Her sayfa için özel meta etiketleri
- Yapılandırılmış veriler (schema.org)
- XML sitemap
- robots.txt
- Canonical URL'ler
- Anlamlı URL yapısı
- Alt etiketleri ile görsel optimizasyonu
- Hız optimizasyonu

### Dil Desteği Gereksinimleri
- URL'lerde dil prefix'i (/tr/, /en/)
- Tarayıcı diline göre otomatik yönlendirme
- Tüm statik içeriklerin çevirisi
- SEO dostu çoklu dil yapısı

### Mobil Uyumluluk
- Tüm ekran boyutları için responsive tasarım
- Touch-friendly arayüz elementleri
- Mobil menü (hamburger)
- Portre ve manzara modlarında optimizasyon

### Performans Gereksinimleri
- Sayfa yükleme süresi < 3s
- First Contentful Paint < 1.8s
- Time to Interactive < 3.8s
- Cumulative Layout Shift < 0.1
- Optimum görsel boyutlandırma ve formatlar (WebP, AVIF)
- Code splitting ve lazy loading
- Server-side rendering veya Static Site Generation

## Konteyner Satış Sayfası Gereksinimleri

### Filtreleme Seçenekleri
- Konteyner Tipi (Dry, Reefer, Open Top, Flat Rack, Tank, vb.)
- Boyut (10', 20', 40', 45')
- Özellik (High Cube, Double Door, Curtain Side, vb.)
- Durum (Sıfır, İkinci El)

### Konteyner Listesi
- Grid görünümünde (resimdeki gibi)
- Her konteyner için:
  - Görsel
  - Başlık (tip ve boyut)
  - Kısa açıklama
  - Detay butonu veya link

### Konteyner Detay Sayfası
- Büyük görseller (galeri)
- Teknik özellikler tablosu
- Detaylı açıklama
- Boyutlar ve kapasiteler
- Fiyat talebi formu

## Müşteri Teslim Planı

### Aşama 1: Tasarım ve Onay
- Wireframe oluşturma
- UI/UX tasarımı
- Müşteri geri bildirimi ve onayı

### Aşama 2: Geliştirme
- Frontend geliştirme
- Responsive tasarım implementasyonu
- SEO implementasyonu
- İçerik entegrasyonu

### Aşama 3: Test ve Optimizasyon
- Browser ve cihaz testleri
- Performans testleri
- SEO kontrolü
- Hata ayıklama

### Aşama 4: Lansman
- Domain ayarları
- SSL sertifikası
- Analitik kurulumu
- Canlıya alma

## Teknik Notlar
- Next.js App Router kullanılacak
- Image optimizasyonu için next/image komponenti
- SSG veya ISR yaklaşımı
- CI/CD pipeline kurulumu
- Dockerfile ve docker-compose.yml ile containerization
- Vercel veya AWS üzerinde hosting

## İçerik Gereksinimleri
- Logo ve marka varlıkları
- Yüksek kaliteli konteyner görselleri
- Tüm hizmet içerikleri
- Hakkımızda metinleri
- İletişim bilgileri
- Sosyal medya bağlantıları
- Tüm içeriklerin Türkçe ve İngilizce versiyonları 