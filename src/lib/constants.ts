import { ContactInfo, MenuItem } from '@/types/common';
import { Container } from '@/types/container';
import { Service } from '@/types/service';
import { FaTruck, FaShip, FaTrain, FaPlane, FaBoxes, FaExchangeAlt } from 'react-icons/fa';

export const COMPANY_NAME = 'PEKCON KONTEYNER';

export const CONTACT_INFO: ContactInfo = {
  address: {
    tr: 'Gülbahar Mah. Avni Dilligil Sok.Köroğlu İş Merkezi No:5 D:6 34394 Şişli/ İstanbul',
    en: 'Gulbahar Mah. Avni Dilligil Sok. Koroglu Business Center No:5 D:6 34394 Sisli/ Istanbul'
  },
  phone: '+90 0212 297 97 58',
  email: 'info@pekcon.com',
  socialMedia: [
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/pekconcontainer/',
      icon: 'instagram'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/pekcon-container-logistics/',
      icon: 'linkedin'
    }
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'home',
    label: {
      tr: 'Ana Sayfa',
      en: 'Home'
    },
    href: '/'
  },
  {
    id: 'about',
    label: {
      tr: 'Hakkımızda',
      en: 'About Us'
    },
    href: '/hakkimizda'
  },
  {
    id: 'services',
    label: {
      tr: 'Hizmetlerimiz',
      en: 'Our Services'
    },
    href: '/hizmetlerimiz',
    subMenu: [
      {
        id: 'sea-freight',
        label: {
          tr: 'Denizyolu Taşımacılığı',
          en: 'Sea Freight'
        },
        href: '/hizmetlerimiz/denizyolu'
      },
      {
        id: 'road-freight',
        label: {
          tr: 'Karayolu Taşımacılığı',
          en: 'Road Freight'
        },
        href: '/hizmetlerimiz/karayolu'
      },
      {
        id: 'rail-freight',
        label: {
          tr: 'Demiryolu Taşımacılığı',
          en: 'Rail Freight'
        },
        href: '/hizmetlerimiz/demiryolu'
      },
      {
        id: 'air-freight',
        label: {
          tr: 'Hava Kargo',
          en: 'Air Freight'
        },
        href: '/hizmetlerimiz/hava-kargo'
      },
      {
        id: 'project-cargo',
        label: {
          tr: 'Proje Kargo',
          en: 'Project Cargo'
        },
        href: '/hizmetlerimiz/proje-kargo'
      },
      {
        id: 'intermodal',
        label: {
          tr: 'Intermodal Taşımacılık',
          en: 'Intermodal Services'
        },
        href: '/hizmetlerimiz/intermodal'
      }
    ]
  },
  {
    id: 'container-sales',
    label: {
      tr: 'Konteynerlar',
      en: 'Containers'
    },
    href: '/konteynerlar'
  },
  {
    id: 'contact',
    label: {
      tr: 'İletişim',
      en: 'Contact'
    },
    href: '/iletisim'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'sea-freight',
    type: 'sea_freight',
    slug: 'denizyolu',
    title: {
      tr: 'Denizyolu Taşımacılığı',
      en: 'Sea Freight'
    },
    shortDescription: {
      tr: 'Global ağımızla güvenilir denizyolu taşımacılığı hizmetleri sunuyoruz.',
      en: 'We offer reliable sea freight services with our global network.'
    },
    description: {
      tr: 'DENIZYOLU\n\nServis Ağı: Dünyadaki tüm konteyner limanları\n\nKüresel veya Bölgesel çaptaki konteyner armatörleri ile kontratlı navlun anlaşmalarımız sayesinde özel indirimli navlunlar sunarak müşterilerimizin maliyetlerini düşürmelerine destek oluyoruz.\n\nDünya limanlarının yaklaşık olarak % 90\'ında güvenilir çözüm ortaklarımız ve acentelerimiz bulunmaktadır. Sonuç itibariyle FFWD olarak hizmet veremediğimiz yerleri Güney ve Kuzey Kutup bölgeleridir. Ancak, yükünüz varsa bunları da proje kargo departmanımızla çözüme ulaştırabiliriz.',
      en: 'SEA FREIGHT\n\nService Network: All container ports in the world\n\nThanks to our contracted freight agreements with global or regional container ship-owners, we offer special discounted freight rates, helping our customers reduce their costs.\n\nWe have reliable solution partners and agents in approximately 90% of world ports. As a result, the only areas we cannot serve as FFWD are the South and North Pole regions. However, if you have cargo, we can solve these with our project cargo department.'
    },
    icon: 'FaShip',
    image: '/images/services/sea-freight.jpg'
  },
  {
    id: 'road-freight',
    type: 'road_freight',
    slug: 'karayolu',
    title: {
      tr: 'Karayolu Taşımacılığı',
      en: 'Road Freight'
    },
    shortDescription: {
      tr: 'Parsiyel ve komple yük taşımacılığında esnek çözümler.',
      en: 'Flexible solutions in partial and complete load transportation.'
    },
    description: {
      tr: 'KARAYOLU\n\nA) Uluslararası\n\nServis Ağı: Avrupa ülkelerinin tamamı, Rusya, CIS, İran, Irak ve Suriye\n\nTürkiye gibi Avrupa ve Asya kıtalarını birbirine bağlayan köprü niteliğinde bir coğrafyada bulunmanın verdiği avantaj, Avrupa\'dan Orta Asya, Rusya, Gürcistan, İran, Irak ve Suriye gibi komşu ülkelere yapılan taşıma hizmetlerinde (veya tam tersi rotada) var olmamızı sağlamaktadır. Bilinmelidir ki Türkiye\'deki kara nakliye filosu tüm komşu ülkeler ve Avrupa ülkelerinden daha fazla sayıda bulunmaktadır.\n\nB) Yurtiçi\n\nServis Ağı: Tüm Türkiye toprakları\n\nKonteyner taşımacılığın bir başka boyutu da KAPIDAN/KAPIYA servis sunabilmenin altyapısı güvenilir, taşıma sigortası sağlayabilen nakliye hizmetidir. Tedarikçilerimiz sayesinde konteynerlerin limandan fabrikalara veya fabrikalardan limanlara ön ve son nakliye hizmeti de sunulmaktadır.\n\nKonteynerlerin limanlarda veya limanlara yakın depolarda yükleme boşaltılması durumunda da ayrıca KAMYON ve TIR nakliyeleri de sağlayabilmekteyiz.',
      en: 'ROAD FREIGHT\n\nA) International\n\nService Network: All European countries, Russia, CIS, Iran, Iraq and Syria\n\nThe advantage of being in a geography that serves as a bridge connecting Europe and Asia, like Turkey, enables us to exist in transportation services from Europe to Central Asia, Russia, Georgia, Iran, Iraq and Syria and neighboring countries (or in the opposite route). It should be known that the land transport fleet in Turkey is more numerous than all neighboring countries and European countries.\n\nB) Domestic\n\nService Network: All Turkish territories\n\nAnother dimension of container transportation is the reliable transportation infrastructure that can provide DOOR-TO-DOOR service and transportation insurance. Thanks to our suppliers, we also offer pre and post transportation services for containers from port to factories or from factories to ports.\n\nIn case of loading and unloading containers at ports or warehouses near ports, we can also provide TRUCK and TIR transportation.'
    },
    icon: 'FaTruck',
    image: '/images/services/road-freight.jpg'
  },
  {
    id: 'rail-freight',
    type: 'rail_freight',
    slug: 'demiryolu',
    title: {
      tr: 'Demiryolu Taşımacılığı',
      en: 'Rail Freight'
    },
    shortDescription: {
      tr: 'Çevre dostu ve ekonomik demiryolu taşımacılık çözümleri.',
      en: 'Environmentally friendly and economical rail transport solutions.'
    },
    description: {
      tr: 'DEMİRYOLU\n\nİçinde bulunduğumuz coğrafyanın koşullarına göre katma değeri en yüksek taşıma aracı hiç kuşkusuz Demiryolu olsa gerek, Ulusal ve Uluslararası demiryolu olanaklarımızın günden güne gelişmesi ve hızlanması, firmalara yeni transit koridor olanakları sağlamakta ve multimodal taşıma alternatifleri üretmektedir. PEKCON Konteyner ve Lojistik multimodal taşımalarda, farklı parkurlarda, uygun ekipman ve vagonlar kullanılarak ekonomik ve güvenli sevkiyat olanağı sağlamaktadır.\n\nTaşıma Parkurları:\n- IRAN (Uluslararası Taşımaya açık tüm istasyonlar)\n- TÜRKİ CUMHURİYETLER (Uluslararası Taşımaya açık tüm istasyonlar)\n- AVRUPA (MULTIMODAL Servis Verilebilen Tüm Parkurlar)\n\nServisler:\n- Blok Tren Servisi\n- Konvansiyonel Kapalı Vagon Servisi\n- Demiryolu Taşımaları için Konteyner ve Özel Ekipman Tedariki\n- Platform Vagon Servisi (Açık yükler, ISO Konteyner ve Swap Body Konteyner Taşımacılığı)\n- Demiryolu Proje Kargo Taşımaları (Gabari dışı ve Ağır ve Hassas Yükler)\n- Özel Tertibatlı Vagon Tedariki (Sarnıç, Silo, Tahıl Vagonu vb.)\n- Vagon Lashing ve Unlashing Hizmetleri\n- Yükleme/Tahliye ve Diğer Terminal Hizmetleri',
      en: 'RAIL FREIGHT\n\nAccording to the conditions of the geography we are in, the mode of transportation with the highest added value is undoubtedly the Railway. The development and acceleration of our national and international railway facilities day by day provides companies with new transit corridor opportunities and produces multimodal transportation alternatives. PEKCON Container and Logistics provides economical and safe shipping opportunities in multimodal transportation, on different routes, using suitable equipment and wagons.\n\nTransportation Routes:\n- IRAN (All stations open to International Transportation)\n- TURKIC REPUBLICS (All stations open to International Transportation)\n- EUROPE (All Routes Where MULTIMODAL Service Can Be Provided)\n\nServices:\n- Block Train Service\n- Conventional Closed Wagon Service\n- Container and Special Equipment Supply for Railway Transportation\n- Platform Wagon Service (Open loads, ISO Container and Swap Body Container Transportation)\n- Railway Project Cargo Transportation (Out-of-gauge and Heavy and Sensitive Loads)\n- Supply of Special Equipped Wagons (Tank, Silo, Grain Wagon, etc.)\n- Wagon Lashing and Unlashing Services\n- Loading/Unloading and Other Terminal Services'
    },
    icon: 'FaTrain',
    image: '/images/services/rail-freight.jpg'
  },
  {
    id: 'air-freight',
    type: 'air_freight',
    slug: 'hava-kargo',
    title: {
      tr: 'Hava Kargo',
      en: 'Air Freight'
    },
    shortDescription: {
      tr: 'Acil ve zaman hassasiyeti olan yükler için hızlı çözümler.',
      en: 'Fast solutions for urgent and time-sensitive loads.'
    },
    description: {
      tr: 'PEKCON KONTEYNER hava kargo hizmetleri, global ağımızdaki tüm büyük havayolları ile entegre çalışmaktadır. Acil ve zaman hassasiyeti olan yükler için en hızlı ve güvenilir çözümleri sunuyoruz.',
      en: 'PEKCON CONTAINER air cargo services work integrated with all major airlines in our global network. We offer the fastest and most reliable solutions for urgent and time-sensitive loads.'
    },
    icon: 'FaPlane',
    image: '/images/services/air-freight.jpg'
  },
  {
    id: 'project-cargo',
    type: 'project_cargo',
    slug: 'proje-kargo',
    title: {
      tr: 'Proje Kargo',
      en: 'Project Cargo'
    },
    shortDescription: {
      tr: 'Büyük ölçekli ve özel projelerde uzman çözümler.',
      en: 'Expert solutions for large-scale and special projects.'
    },
    description: {
      tr: 'Büyük ölçekli ve özel projelerde uzmanlaşmış ekibimizle, ağır ve gabari dışı yüklerin taşınmasında özel çözümler üretiyoruz. Her proje için özel risk değerlendirmesi yaparak, en güvenli taşıma planını oluşturuyoruz.',
      en: 'With our team specialized in large-scale and special projects, we produce special solutions for the transportation of heavy and out-of-gauge loads. We create the safest transportation plan by making a special risk assessment for each project.'
    },
    icon: 'FaBoxes',
    image: '/images/services/project-cargo.jpg'
  },
  {
    id: 'intermodal',
    type: 'intermodal',
    slug: 'intermodal',
    title: {
      tr: 'Intermodal Taşımacılık',
      en: 'Intermodal Services'
    },
    shortDescription: {
      tr: 'Farklı taşıma modlarını birleştirerek optimum çözümler.',
      en: 'Optimum solutions by combining different transport modes.'
    },
    description: {
      tr: 'Intermodal taşımacılık, birden fazla taşıma modunu birleştirerek optimum çözümler sunar. PEKCON KONTEYNER olarak, denizyolu, karayolu, demiryolu ve havayolu taşımacılığını entegre ederek, müşterilerimize maliyet ve zaman avantajı sağlıyoruz.',
      en: 'Intermodal transportation offers optimum solutions by combining multiple modes of transportation. As PEKCON CONTAINER, we provide our customers with cost and time advantages by integrating sea, road, rail and air transportation.'
    },
    icon: 'FaExchangeAlt',
    image: '/images/services/intermodal.jpg'
  }
];

// Örnek konteyner verileri
export const CONTAINERS: Container[] = [
  {
    id: 'dry-20-standard-new',
    slug: 'standart-20-kuru-yuk-konteyneri',
    title: {
      tr: '20\' Standart Kuru Yük Konteyneri',
      en: '20\' Standard Dry Container'
    },
    description: {
      tr: '20 feet standart kuru yük konteyneri, uluslararası standartlara uygun üretilmiş olup, her türlü kuru yük taşımacılığı için uygundur.',
      en: '20 feet standard dry container, manufactured in accordance with international standards, suitable for all kinds of dry cargo transportation.'
    },
    type: 'dry',
    size: '20',
    feature: 'standard',
    condition: 'new',
    images: [
      '/images/konteyner/20ft_Dry_Container/20DRY.jpg'
    ],
    specs: {
      dimensions: {
        internal: {
          length: '5.90 m',
          width: '2.35 m',
          height: '2.39 m'
        },
        external: {
          length: '6.06 m',
          width: '2.44 m',
          height: '2.59 m'
        },
        door: {
          width: '2.34 m',
          height: '2.28 m'
        }
      },
      capacity: {
        maxGrossWeight: '30,480 kg',
        tare: '2,300 kg',
        payload: '28,180 kg',
        capacity: '33.2 m³'
      }
    }
  },
  {
    id: 'dry-40-high-cube-new',
    slug: '40-high-cube-kuru-yuk-konteyneri',
    title: {
      tr: '40\' High Cube Kuru Yük Konteyneri',
      en: '40\' High Cube Dry Container'
    },
    description: {
      tr: '40 feet high cube kuru yük konteyneri, standart konteynerlerden yaklaşık 30 cm daha yüksek olup, daha fazla hacim sunar. Her türlü kuru yük taşımacılığında kullanılabilir.',
      en: '40 feet high cube dry container is about 30 cm higher than standard containers, offering more volume. It can be used in all kinds of dry cargo transportation.'
    },
    type: 'dry',
    size: '40',
    feature: 'high_cube',
    condition: 'new',
    images: [
      '/images/konteyner/40ft_High_Cube_Container/40HC.jpg'
    ],
    specs: {
      dimensions: {
        internal: {
          length: '12.03 m',
          width: '2.35 m',
          height: '2.70 m'
        },
        external: {
          length: '12.19 m',
          width: '2.44 m',
          height: '2.90 m'
        },
        door: {
          width: '2.34 m',
          height: '2.58 m'
        }
      },
      capacity: {
        maxGrossWeight: '32,500 kg',
        tare: '3,900 kg',
        payload: '28,600 kg',
        capacity: '76.4 m³'
      }
    }
  },
  {
    id: 'reefer-40-high-cube-new',
    slug: '40-high-cube-refrigerated-konteyner',
    title: {
      tr: '40\' High Cube Buzdolabı Konteyneri',
      en: '40\' High Cube Refrigerated Container'
    },
    description: {
      tr: '40 feet high cube buzdolabı konteyneri, sıcaklık kontrolü gerektiren yükler için ideal çözümdür. -30°C ile +30°C arasında sıcaklık kontrolü sağlanabilir.',
      en: '40 feet high cube refrigerated container is the ideal solution for loads requiring temperature control. Temperature control between -30°C and +30°C can be provided.'
    },
    type: 'reefer',
    size: '40',
    feature: 'high_cube',
    condition: 'new',
    images: [
      '/images/konteyner/40ft_Reefer_Container/40RF.jpg'
    ],
    specs: {
      dimensions: {
        internal: {
          length: '11.58 m',
          width: '2.29 m',
          height: '2.50 m'
        },
        external: {
          length: '12.19 m',
          width: '2.44 m',
          height: '2.90 m'
        },
        door: {
          width: '2.29 m',
          height: '2.50 m'
        }
      },
      capacity: {
        maxGrossWeight: '34,000 kg',
        tare: '4,900 kg',
        payload: '29,100 kg',
        capacity: '67.6 m³'
      }
    }
  },
  {
    id: 'open-top-20-standard-used',
    slug: '20-open-top-konteyner',
    title: {
      tr: '20\' Open Top Konteyner',
      en: '20\' Open Top Container'
    },
    description: {
      tr: '20 feet open top konteyner, üstten yükleme imkanı sunarak, yüksek ve vinç ile yüklenmesi gereken yükler için ideal bir çözümdür.',
      en: '20 feet open top container offers top loading option, making it an ideal solution for high loads and loads that need to be loaded with a crane.'
    },
    type: 'open_top',
    size: '20',
    feature: 'standard',
    condition: 'used',
    images: [
      '/images/konteyner/20ft_Open_Top_Container/20opentop.jpg'
    ],
    specs: {
      dimensions: {
        internal: {
          length: '5.89 m',
          width: '2.35 m',
          height: '2.35 m'
        },
        external: {
          length: '6.06 m',
          width: '2.44 m',
          height: '2.59 m'
        },
        door: {
          width: '2.34 m',
          height: '2.28 m'
        }
      },
      capacity: {
        maxGrossWeight: '30,480 kg',
        tare: '2,400 kg',
        payload: '28,080 kg',
        capacity: '32.5 m³'
      }
    }
  }
];

export const ABOUT_INFO = {
  overview: {
    tr: [
      "PEKCON KONTEYNER, 2010 yılında kurulmuş olup, konteyner satışı ve lojistik hizmetleri alanında uzmanlaşmıştır. Türkiye'nin önde gelen konteyner tedarikçilerinden biri olarak, müşterilerimize yüksek kaliteli ve güvenilir hizmetler sunmaktayız.",
      "Geniş ürün yelpazemiz ile her ihtiyaca uygun konteyner çözümleri sağlıyoruz. Standart nakliye konteynerlerinden özel tasarım ofis ve yaşam alanlarına kadar birçok farklı konteyner tipini müşterilerimize sunuyoruz.",
      "Profesyonel ekibimiz ve güçlü tedarik zincirimiz sayesinde, müşterilerimizin taleplerini en kısa sürede ve en uygun fiyatlarla karşılamak için çalışıyoruz."
    ],
    en: [
      "PEKCON KONTEYNER was established in 2010 and specializes in container sales and logistics services. As one of Turkey's leading container suppliers, we provide high-quality and reliable services to our customers.",
      "With our wide range of products, we provide container solutions suitable for every need. We offer many different types of containers to our customers, from standard shipping containers to custom-designed offices and living spaces.",
      "Thanks to our professional team and strong supply chain, we work to meet our customers' demands in the shortest time and at the most affordable prices."
    ]
  },
  mission: {
    tr: "Müşterilerimize en kaliteli konteyner çözümlerini sunarak, lojistik ve depolama ihtiyaçlarında güvenilir bir iş ortağı olmak. Sektördeki yenilikleri takip ederek ve sürekli gelişerek, müşteri memnuniyetini en üst düzeyde tutmak için çalışıyoruz.",
    en: "To be a reliable business partner in logistics and storage needs by offering the highest quality container solutions to our customers. We work to keep customer satisfaction at the highest level by following innovations in the sector and continuously improving."
  },
  vision: {
    tr: "Türkiye'nin ve bölgenin lider konteyner tedarikçisi olmak. Yenilikçi çözümlerimiz, müşteri odaklı yaklaşımımız ve çevreye duyarlı iş modelimiz ile sektörde fark yaratmayı hedefliyoruz.",
    en: "To become the leading container supplier in Turkey and the region. We aim to make a difference in the sector with our innovative solutions, customer-oriented approach, and environmentally sensitive business model."
  },
  values: [
    {
      id: 1,
      title: {
        tr: "Kalite",
        en: "Quality"
      },
      description: {
        tr: "Her zaman en yüksek kalite standartlarında ürün ve hizmet sunmayı taahhüt ediyoruz.",
        en: "We are committed to always providing products and services to the highest quality standards."
      },
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      id: 2,
      title: {
        tr: "Güvenilirlik",
        en: "Reliability"
      },
      description: {
        tr: "Müşterilerimizin güvenini kazanmak ve korumak için dürüst ve şeffaf bir şekilde çalışıyoruz.",
        en: "We work honestly and transparently to earn and maintain the trust of our customers."
      },
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      id: 3,
      title: {
        tr: "Müşteri Odaklılık",
        en: "Customer Focus"
      },
      description: {
        tr: "Müşteri memnuniyetini her zaman ön planda tutarak, müşterilerimizin ihtiyaçlarına özel çözümler sunuyoruz.",
        en: "By always prioritizing customer satisfaction, we offer customized solutions to our customers' needs."
      },
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      id: 4,
      title: {
        tr: "Yenilikçilik",
        en: "Innovation"
      },
      description: {
        tr: "Sektördeki gelişmeleri yakından takip ederek, yenilikçi ürün ve hizmetler geliştiriyoruz.",
        en: "By closely following developments in the sector, we develop innovative products and services."
      },
      icon: "M13 6v6m0 0v6m0-6h6m-6 0H7"
    },
    {
      id: 5,
      title: {
        tr: "Çevre Duyarlılığı",
        en: "Environmental Sensitivity"
      },
      description: {
        tr: "Çevreye duyarlı iş süreçleri ile sürdürülebilir bir gelecek için çalışıyoruz.",
        en: "We work for a sustainable future with environmentally sensitive business processes."
      },
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      id: 6,
      title: {
        tr: "Ekip Çalışması",
        en: "Teamwork"
      },
      description: {
        tr: "Başarının ancak güçlü bir ekip çalışması ile mümkün olduğuna inanıyoruz.",
        en: "We believe that success is only possible with strong teamwork."
      },
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    }
  ]
};

// Konteyner Verileri - Tüm konteyner tiplerinin teknik özellikleri
export const CONTAINER_DATA = {
  // Dry Konteynerler
  "20-dry-konteyner": {
    name: "20' Dry Konteyner",
    slug: "20-dry-konteyner",
    category: "dry",
    size: "20",
    specs: {
      external: {
        length: "6.058 m (19'11\")",
        width: "2.438 m (8'0\")",
        height: "2.591 m (8'6\")"
      },
      internal: {
        length: "5.898 m (19'4\")",
        width: "2.352 m (7'9\")",
        height: "2.393 m (7'10\")"
      },
      doorOpening: {
        width: "2.340 m (7'8\")",
        height: "2.280 m (7'6\")"
      },
      weight: {
        tare: "2.300 kg (5.071,5 lbs)",
        payload: "28.200 kg (62.170 lbs)",
        maxGross: "30.480 kg (67.197 lbs)"
      },
      capacity: {
        volume: "33,2 m³ (1.172 ft³)",
        maxEurPallets: 11
      }
    },
    description: {
      tr: "20' Dry konteynerleri kuru yük taşımacılığı için kullanılan standart konteynerlerdir. Mobilya, elektronik eşya, kıyafet, paketlenmiş gıda gibi kuru yüklerin taşınmasında idealdir. Standart boyutları ve kapasitesi ile dünya çapında en yaygın kullanılan konteyner tipidir. Dayanıklı çelik yapısı sayesinde güvenli bir taşıma sağlar.",
      en: "20' Dry containers are standard containers used for dry cargo transportation. They are ideal for carrying dry loads such as furniture, electronic equipment, clothing, packaged food. With its standard dimensions and capacity, it is the most widely used container type worldwide. It provides safe transportation thanks to its durable steel structure."
    },
    usage: {
      tr: "Genel kargo taşımacılığı, ithalat ve ihracat yükleri, mobilya, elektronik ürünler, beyaz eşya, kıyafet, paketlenmiş ürünler, depolama, hammadde ve genel ticari malların taşınması için uygundur.",
      en: "Suitable for general cargo transportation, import and export loads, furniture, electronic products, white goods, clothing, packaged products, storage, raw materials and transportation of general commercial goods."
    },
    images: [
      "/images/konteyner/20ft_Dry_Container/20DRY.jpg"
    ],
    features: {
      tr: [
        "Dayanıklı çelik yapı",
        "Hava şartlarına dayanıklı",
        "Güvenli kilitleme sistemi",
        "Kolay yükleme ve boşaltma",
        "Standart boyutlar"
      ],
      en: [
        "Durable steel structure",
        "Weather resistant",
        "Secure locking system",
        "Easy loading and unloading",
        "Standard dimensions"
      ]
    }
  },
  
  "40-dry-konteyner": {
    name: "40' Dry Konteyner",
    slug: "40-dry-konteyner",
    category: "dry",
    size: "40",
    specs: {
      external: {
        length: "12.192 m (40'0\")",
        width: "2.438 m (8'0\")",
        height: "2.591 m (8'6\")"
      },
      internal: {
        length: "12.032 m (39'6\")",
        width: "2.352 m (7'9\")",
        height: "2.393 m (7'10\")"
      },
      doorOpening: {
        width: "2.340 m (7'8\")",
        height: "2.280 m (7'6\")"
      },
      weight: {
        tare: "3.750 kg (8.268,8 lbs)",
        payload: "27.600 kg (61.200 lbs)",
        maxGross: "30.480 kg (67.200 lbs)"
      },
      capacity: {
        volume: "67,7 m³ (2.389 ft³)",
        maxEurPallets: 25
      }
    },
    description: {
      tr: "40' Dry konteynerleri, 20' konteynerlerden iki kat daha uzun olup daha fazla kargo taşıma kapasitesine sahiptir. Hacimli ve büyük miktarlardaki kuru yüklerin taşınması için idealdir. Standart yüksekliğe sahip bu konteynerler, genel kargo taşımacılığında dünya çapında yaygın olarak kullanılmaktadır.",
      en: "40' Dry containers are twice as long as 20' containers and have more cargo carrying capacity. It is ideal for transporting bulky and large quantities of dry cargo. These containers with standard height are widely used worldwide in general cargo transportation."
    },
    usage: {
      tr: "Hacimli kargo taşımacılığı, ev taşıma, büyük ölçekli ithalat ve ihracat yükleri, otomotiv parçaları, mobilya, elektronik ürünler, beyaz eşya, inşaat malzemeleri, hammadde ve genel ticari malların taşınması için uygundur.",
      en: "Suitable for bulky cargo transportation, home moving, large-scale import and export loads, automotive parts, furniture, electronic products, white goods, construction materials, raw materials and transportation of general commercial goods."
    },
    images: [
      "/images/konteyner/40ft_Dry_Container/40DRY.jpg"
    ],
    features: {
      tr: [
        "Daha geniş iç hacim",
        "Dayanıklı çelik yapı",
        "Hava şartlarına dayanıklı",
        "Güvenli kilitleme sistemi",
        "Standart boyutlar"
      ],
      en: [
        "Larger internal volume",
        "Durable steel structure",
        "Weather resistant",
        "Secure locking system",
        "Standard dimensions"
      ]
    }
  },
  
  "40-high-cube-konteyner": {
    name: "40' High Cube Konteyner",
    slug: "40-high-cube-konteyner",
    category: "high-cube",
    size: "40",
    specs: {
      external: {
        length: "12.192 m (40'0\")",
        width: "2.438 m (8'0\")",
        height: "2.896 m (9'6\")"
      },
      internal: {
        length: "12.032 m (39'6\")",
        width: "2.352 m (7'9\")",
        height: "2.698 m (8'10\")"
      },
      doorOpening: {
        width: "2.340 m (7'8\")",
        height: "2.585 m (8'6\")"
      },
      weight: {
        tare: "3.730 kg (8.223 lbs)",
        payload: "28.770 kg (63.427 lbs)",
        maxGross: "32.500 kg (71.650 lbs)"
      },
      capacity: {
        volume: "76,4 m³ (2.698 ft³)",
        maxEurPallets: 25
      }
    },
    description: {
      tr: "40' High Cube konteynerler, standart 40' konteynerden yaklaşık 30 cm daha yüksek olup daha fazla hacim sağlar. Yüksek eşyaların taşınmasında ve hacim gerektiren yükler için idealdir. Ekstra yükseklik, özellikle düşük yoğunluklu veya yüksek ürünler için %13 daha fazla iç hacim sunar.",
      en: "40' High Cube containers are about 30 cm higher than standard 40' containers and provide more volume. It is ideal for transportation of tall items and loads requiring volume. Extra height offers 13% more internal volume, especially for low-density or tall products."
    },
    usage: {
      tr: "Yüksek eşyaların taşınması, hafif ve hacimli ürünler, mobilya, elektronik eşya, beyaz eşya, otomotiv parçaları, tekstil ürünleri ve genel kargo taşımacılığı için idealdir.",
      en: "Ideal for transporting tall items, light and voluminous products, furniture, electronic equipment, white goods, automotive parts, textile products and general cargo transportation."
    },
    images: [
      "/images/konteyner/40ft_High_Cube_Container/40HC.jpg"
    ],
    features: {
      tr: [
        "Ekstra yükseklik",
        "Daha fazla iç hacim",
        "Dayanıklı çelik yapı",
        "Hava şartlarına dayanıklı",
        "Güvenli kilitleme sistemi"
      ],
      en: [
        "Extra height",
        "More internal volume",
        "Durable steel structure",
        "Weather resistant",
        "Secure locking system"
      ]
    }
  },
  
  "45-high-cube-konteyner": {
    name: "45' High Cube Konteyner",
    slug: "45-high-cube-konteyner",
    category: "high-cube",
    size: "45",
    specs: {
      external: {
        length: "13.716 m (45'0\")",
        width: "2.438 m (8'0\")",
        height: "2.896 m (9'6\")"
      },
      internal: {
        length: "13.556 m (44'6\")",
        width: "2.352 m (7'9\")",
        height: "2.698 m (8'10\")"
      },
      doorOpening: {
        width: "2.340 m (7'8\")",
        height: "2.585 m (8'6\")"
      },
      weight: {
        tare: "4.800 kg (10.580 lbs)",
        payload: "27.700 kg (61.067 lbs)",
        maxGross: "32.500 kg (71.650 lbs)"
      },
      capacity: {
        volume: "85 m³ (3.002 ft³)",
        maxEurPallets: 33
      }
    },
    description: {
      tr: "45' High Cube konteynerler, en uzun standart konteyner tipidir. 40' High Cube konteynerlerinden 5 feet daha uzun olup maksimum iç hacim sunar. Büyük ve hacimli yüklerin taşınması için idealdir. Ekstra uzunluk ve yükseklik, özellikle hafif ve hacimli ürünlerin taşınmasında büyük avantaj sağlar.",
      en: "45' High Cube containers are the longest standard container type. It is 5 feet longer than 40' High Cube containers and offers maximum internal volume. It is ideal for transporting large and voluminous loads. Extra length and height provide a great advantage especially in transporting light and voluminous products."
    },
    usage: {
      tr: "Maksimum alan gerektiren yükler, hafif ve hacimli ürünler, otomotiv parçaları, mobilya, beyaz eşya, elektronik ürünler ve genel kargo taşımacılığı için idealdir.",
      en: "Ideal for loads requiring maximum space, light and voluminous products, automotive parts, furniture, white goods, electronic products and general cargo transportation."
    },
    images: [
      "/images/konteyner/45ft_High_Cube_Container/45HC.jpg"
    ],
    features: {
      tr: [
        "Maksimum iç hacim",
        "Ekstra uzunluk ve yükseklik",
        "Dayanıklı çelik yapı",
        "Hava şartlarına dayanıklı",
        "Güvenli kilitleme sistemi"
      ],
      en: [
        "Maximum internal volume",
        "Extra length and height",
        "Durable steel structure",
        "Weather resistant",
        "Secure locking system"
      ]
    }
  },
  
  "20-open-top-konteyner": {
    name: "20' Open Top Konteyner",
    slug: "20-open-top-konteyner",
    category: "open-top",
    size: "20",
    specs: {
      external: {
        length: "6.058 m (19'11\")",
        width: "2.438 m (8'0\")",
        height: "2.591 m (8'6\")"
      },
      internal: {
        length: "5.900 m (19'4\")",
        width: "2.350 m (7'8\")",
        height: "2.380 m (7'10\")"
      },
      doorOpening: {
        width: "2.340 m (7'8\")",
        height: "2.280 m (7'6\")"
      },
      roofOpening: {
        width: "2.230 m (7'3\")",
        length: "5.440 m (17'10\")"
      },
      weight: {
        tare: "2.350 kg (5.181 lbs)",
        payload: "28.130 kg (62.026 lbs)",
        maxGross: "30.480 kg (67.200 lbs)"
      },
      capacity: {
        volume: "32,5 m³ (1.147 ft³)"
      }
    },
    description: {
      tr: "20' Open Top konteynerler, çatısı tamamen açılabilen standart kuru yük konteynerleridir. Özellikle vinç ile yükleme gerektiren uzun, yüksek veya büyük parçaların taşınması için idealdir. Açılabilir çatı branda ile kapatılarak hava koşullarından korunabilir. Hem normal hem de üstten yükleme yapılabilmesi sayesinde çok yönlü kullanım sunar.",
      en: "20' Open Top containers are standard dry cargo containers with a fully openable roof. It is ideal for transporting long, high or large parts that require loading with a crane. The openable roof can be closed with a tarpaulin to protect from weather conditions. It offers versatile use thanks to both normal and top loading."
    },
    usage: {
      tr: "Üstten yükleme gerektiren büyük ve ağır makineler, uzun parçalar, endüstriyel ekipmanlar, ağır çelik yapılar, mermer bloklar, uzun borular, cam panel, ağır makine parçaları ve diğer büyük yüklerin taşınması için idealdir.",
      en: "Ideal for transporting large and heavy machinery, long parts, industrial equipment, heavy steel structures, marble blocks, long pipes, glass panels, heavy machine parts and other large loads that require top loading."
    },
    images: [
      "/images/konteyner/20ft_Open_Top_Container/20opentop.jpg"
    ],
    features: {
      tr: [
        "Açılabilir çatı",
        "Üstten ve kapıdan yükleme imkanı",
        "Dayanıklı çelik yapı",
        "Hava şartlarına dayanıklı branda örtü",
        "Güvenli kilitleme sistemi"
      ],
      en: [
        "Openable roof",
        "Top and door loading option",
        "Durable steel structure",
        "Weather resistant tarpaulin cover",
        "Secure locking system"
      ]
    }
  },
  
  "40-open-top-konteyner": {
    name: "40' Open Top Konteyner",
    slug: "40-open-top-konteyner",
    category: "open-top",
    size: "40",
    specs: {
      external: {
        length: "12.192 m (40'0\")",
        width: "2.438 m (8'0\")",
        height: "2.591 m (8'6\")"
      },
      internal: {
        length: "12.034 m (39'5\")",
        width: "2.350 m (7'8\")",
        height: "2.380 m (7'10\")"
      },
      doorOpening: {
        width: "2.340 m (7'8\")",
        height: "2.280 m (7'6\")"
      },
      roofOpening: {
        width: "2.230 m (7'3\")",
        length: "11.574 m (37'11\")"
      },
      weight: {
        tare: "3.850 kg (8.488 lbs)",
        payload: "26.630 kg (58.708 lbs)",
        maxGross: "30.480 kg (67.200 lbs)"
      },
      capacity: {
        volume: "67,3 m³ (2.376 ft³)"
      }
    },
    description: {
      tr: "40' Open Top konteynerler, 20' modeline göre daha uzundur ve daha büyük yüklerin taşınmasına olanak tanır. Çatısı tamamen açılabilen bu konteynerler, özellikle uzun parçaların ve büyük ekipmanların taşınması için idealdir. Yüksek güvenlik standartları ile üretilen bu konteynerler, değerli kargolarınızın güvenli bir şekilde taşınmasını sağlar.",
      en: "40' Open Top containers are longer than the 20' model and allow for transportation of larger loads. These containers with a fully openable roof are ideal for transporting especially long parts and large equipment. Manufactured with high safety standards, these containers ensure the safe transportation of your valuable cargo."
    },
    usage: {
      tr: "Uzun ve büyük endüstriyel ekipmanlar, ağır makineler, inşaat ekipmanları, metal yapılar, çelik bobinler, metal levhalar, cam paneller, ağaç gövdeleri, demir çubuklar, borular ve standart kapılardan sığmayan diğer yükler için idealdir.",
      en: "Ideal for long and large industrial equipment, heavy machinery, construction equipment, metal structures, steel coils, metal sheets, glass panels, tree trunks, iron bars, pipes and other loads that do not fit through standard doors."
    },
    images: [
      "/images/konteyner/40ft_Open_Top_Container/400T.jpg"
    ],
    features: {
      tr: [
        "Geniş üst açıklık",
        "Uzun yükler için ideal",
        "Üstten ve kapıdan yükleme imkanı",
        "Dayanıklı çelik yapı",
        "Hava şartlarına dayanıklı branda örtü"
      ],
      en: [
        "Wide top opening",
        "Ideal for long loads",
        "Top and door loading option",
        "Durable steel structure",
        "Weather resistant tarpaulin cover"
      ]
    }
  },
  
  "20-flat-rack-konteyner": {
    name: "20' Flat Rack Konteyner",
    slug: "20-flat-rack-konteyner",
    category: "flat-rack",
    size: "20",
    specs: {
      external: {
        length: "6.058 m (19'11\")",
        width: "2.438 m (8'0\")",
        height: "2.591 m (8'6\")"
      },
      internal: {
        length: "5.700 m (18'8\")",
        width: "2.230 m (7'3\")",
        height: "2.200 m (7'3\")"
      },
      weight: {
        tare: "2.400 kg (5.291 lbs)",
        payload: "28.080 kg (61.907 lbs)",
        maxGross: "30.480 kg (67.200 lbs)"
      }
    },
    description: {
      tr: "20' Flat Rack konteynerler, yan duvarları olmayan veya katlanabilir yan duvarlara sahip platform yapısında konteynerlerdir. Ağır ve büyük yüklerin, düzensiz şekilli yüklerin, ahşap sandıkların, makine ve ekipmanların, kereste ve diğer uzun malzemelerin taşınması için idealdir. Yüksek yükleme kapasitesi ve kolay yükleme avantajı sağlar.",
      en: "20' Flat Rack containers are containers with a platform structure without side walls or with foldable side walls. Ideal for transporting heavy and large loads, irregularly shaped loads, wooden crates, machinery and equipment, lumber and other long materials. Provides high loading capacity and easy loading advantage."
    },
    usage: {
      tr: "Büyük makine ve ekipmanlar, ahşap sandıklar, düzensiz şekilli yükler, kereste ve uzun malzemeler, inşaat malzemeleri, otomotiv parçaları, ağır ve büyük metal ürünler için idealdir.",
      en: "Ideal for large machinery and equipment, wooden crates, irregularly shaped loads, lumber and long materials, construction materials, automotive parts, heavy and large metal products."
    },
    images: [
      "/images/konteyner/20ft_Flat_Rack_Container/20FR.jpg"
    ],
    features: {
      tr: [
        "Yan duvar olmaması",
        "Ağır yükler için güçlendirilmiş taban",
        "Yüksek yükleme kapasitesi",
        "Kolay yükleme ve boşaltma",
        "Çok yönlü kargo bağlama noktaları"
      ],
      en: [
        "No side walls",
        "Reinforced base for heavy loads",
        "High loading capacity",
        "Easy loading and unloading",
        "Versatile cargo lashing points"
      ]
    }
  },
  
  "40-flat-rack-konteyner": {
    name: "40' Flat Rack Konteyner",
    slug: "40-flat-rack-konteyner",
    category: "flat-rack",
    size: "40",
    specs: {
      external: {
        length: "12.192 m (40'0\")",
        width: "2.438 m (8'0\")",
        height: "2.591 m (8'6\")"
      },
      internal: {
        length: "11.820 m (38'9\")",
        width: "2.230 m (7'3\")",
        height: "2.200 m (7'3\")"
      },
      weight: {
        tare: "4.900 kg (10.803 lbs)",
        payload: "39.580 kg (87.260 lbs)",
        maxGross: "44.480 kg (98.063 lbs)"
      }
    },
    description: {
      tr: "40' Flat Rack konteyner, 20' Flat Rack'tan daha uzun olup, daha büyük ve daha uzun yüklerin taşınmasına olanak tanır. Yan duvarları olmayan bu konteyner, ağır ve büyük makinelerin, düzensiz şekilli ekipmanların ve büyük yapı malzemelerinin taşınması için idealdir. Güçlendirilmiş yapısı sayesinde ağır yüklerin taşınmasında güvenli bir tercih sunar.",
      en: "40' Flat Rack container is longer than 20' Flat Rack, allowing for the transportation of larger and longer loads. This container without side walls is ideal for transporting heavy and large machinery, irregularly shaped equipment and large building materials. It offers a safe choice for transporting heavy loads thanks to its reinforced structure."
    },
    usage: {
      tr: "Büyük ve uzun makineler, inşaat ekipmanları, yapı malzemeleri, ağır metal ürünler, düzensiz şekilli yükler, uzun borular, tekne ve yat taşımacılığı için idealdir.",
      en: "Ideal for large and long machinery, construction equipment, building materials, heavy metal products, irregularly shaped loads, long pipes, boat and yacht transportation."
    },
    images: [
      "/images/konteyner/40ft_Flat_Rack_Container/40FR.jpg"
    ],
    features: {
      tr: [
        "Daha uzun platform",
        "Yan duvar olmaması",
        "Ağır yükler için güçlendirilmiş taban",
        "Yüksek yükleme kapasitesi",
        "Çok yönlü kargo bağlama noktaları"
      ],
      en: [
        "Longer platform",
        "No side walls",
        "Reinforced base for heavy loads",
        "High loading capacity",
        "Versatile cargo lashing points"
      ]
    }
  },
  
  // Reefer Konteynerler
  "20-reefer-konteyner": {
    name: "20' Reefer Konteyner",
    slug: "20-reefer-konteyner",
    category: "reefer",
    size: "20",
    specs: {
      external: {
        length: "6.058 m (19'11\")",
        width: "2.438 m (8'0\")",
        height: "2.591 m (8'6\")"
      },
      internal: {
        length: "5.444 m (17'10\")",
        width: "2.290 m (7'6\")",
        height: "2.275 m (7'5\")"
      },
      doorOpening: {
        width: "2.290 m (7'6\")",
        height: "2.250 m (7'4\")"
      },
      weight: {
        tare: "3.080 kg (6.790 lbs)",
        payload: "27.400 kg (60.410 lbs)",
        maxGross: "30.480 kg (67.200 lbs)"
      },
      capacity: {
        volume: "28,3 m³ (1.000 ft³)"
      }
    },
    description: {
      tr: "20' Reefer (soğutuculu) konteynerler, sıcaklığa duyarlı ürünlerin taşınması için kullanılan özel konteynerledir. İzolasyonlu yapısı ve soğutma ünitesi sayesinde, iç sıcaklığı kontrol edilebilir. -30°C ile +30°C arasında istenen sıcaklığa ayarlanabilir. Gıda ürünleri, ilaçlar, çiçekler ve diğer sıcaklık hassasiyeti olan ürünlerin güvenli taşınması için idealdir.",
      en: "20' Reefer (refrigerated) containers are special containers used for transporting temperature-sensitive products. Thanks to its insulated structure and cooling unit, the internal temperature can be controlled. It can be adjusted to the desired temperature between -30°C and +30°C. It is ideal for safe transportation of food products, pharmaceuticals, flowers and other temperature-sensitive products."
    },
    usage: {
      tr: "Dondurulmuş veya soğutulmuş gıdalar, taze meyve ve sebzeler, et ürünleri, süt ürünleri, ilaçlar, kimyasallar, elektronik malzemeler ve sıcaklık kontrolü gerektiren diğer ürünlerin taşınması için uygundur.",
      en: "Suitable for transporting frozen or refrigerated foods, fresh fruits and vegetables, meat products, dairy products, pharmaceuticals, chemicals, electronic materials and other products requiring temperature control."
    },
    images: [
      "/images/konteyner/20ft_Reefer_Container/20RF.jpg"
    ],
    features: {
      tr: [
        "Sıcaklık kontrol sistemi",
        "Yüksek izolasyon",
        "Nem kontrolü",
        "Dijital sıcaklık göstergesi",
        "Kendinden soğutma ünitesi"
      ],
      en: [
        "Temperature control system",
        "High insulation",
        "Humidity control",
        "Digital temperature display",
        "Self-contained cooling unit"
      ]
    }
  },
  
  "40-reefer-konteyner": {
    name: "40' Reefer Konteyner",
    slug: "40-reefer-konteyner",
    category: "reefer",
    size: "40",
    specs: {
      external: {
        length: "12.192 m (40'0\")",
        width: "2.438 m (8'0\")",
        height: "2.591 m (8'6\")"
      },
      internal: {
        length: "11.561 m (37'11\")",
        width: "2.294 m (7'6\")",
        height: "2.279 m (7'5\")"
      },
      doorOpening: {
        width: "2.290 m (7'6\")",
        height: "2.250 m (7'4\")"
      },
      weight: {
        tare: "4.650 kg (10.251 lbs)",
        payload: "27.850 kg (61.400 lbs)",
        maxGross: "32.500 kg (71.650 lbs)"
      },
      capacity: {
        volume: "59,3 m³ (2.095 ft³)"
      }
    },
    description: {
      tr: "40' Reefer konteynerleri, 20' modeline göre daha fazla hacim sunan soğutuculu konteynerlerdir. Güçlü soğutma sistemi ve yüksek izolasyonu sayesinde, taşıma süresince istenen sıcaklık değerlerini koruyabilir. Uzun mesafeli taşımacılıkta bile ürünlerin tazeliğini ve kalitesini korumak için ideal bir çözümdür.",
      en: "40' Reefer containers are refrigerated containers that offer more volume compared to the 20' model. Thanks to its powerful cooling system and high insulation, it can maintain the desired temperature values during transportation. It is an ideal solution to preserve the freshness and quality of products even in long-distance transportation."
    },
    usage: {
      tr: "Büyük hacimli dondurulmuş veya soğutulmuş gıdalar, taze ürünler, et ve balık ürünleri, süt ürünleri, aşılar, ilaçlar, kimyasallar ve sıcaklık kontrolü gerektiren diğer ürünlerin taşınması için uygundur.",
      en: "Suitable for transporting large volumes of frozen or refrigerated foods, fresh products, meat and fish products, dairy products, vaccines, pharmaceuticals, chemicals and other products requiring temperature control."
    },
    images: [
      "/images/konteyner/40ft_Reefer_Container/40RF.jpg"
    ],
    features: {
      tr: [
        "Güçlü soğutma sistemi",
        "Geniş iç hacim",
        "Hassas sıcaklık kontrolü",
        "Nem kontrolü",
        "Uzun mesafe taşımacılığa uygun"
      ],
      en: [
        "Powerful cooling system",
        "Large internal volume",
        "Precise temperature control",
        "Humidity control",
        "Suitable for long-distance transportation"
      ]
    }
  },
  
  // Tank Konteynerler
  "20-tank-konteyner": {
    name: "20' Tank Konteyner",
    slug: "20-tank-konteyner",
    category: "tank",
    size: "20",
    specs: {
      external: {
        length: "6.058 m (19'11\")",
        width: "2.438 m (8'0\")",
        height: "2.591 m (8'6\")"
      },
      capacity: {
        volume: "21.000-26.000 litre (5.550-6.870 galon)"
      },
      weight: {
        tare: "3.800 kg (8.378 lbs)",
        payload: "26.680 kg (58.819 lbs)",
        maxGross: "30.480 kg (67.200 lbs)"
      }
    },
    description: {
      tr: "20' Tank konteynerleri, sıvı, gaz ve toz halindeki malzemelerin taşınması için özel olarak tasarlanmış konteynerlerdir. Paslanmaz çelik veya diğer uygun malzemelerden yapılan iç tank, dış ISO çerçeve ile korunmaktadır. Tehlikeli ve tehlikesiz sıvıların güvenli taşınmasında tercih edilir.",
      en: "20' Tank containers are specially designed containers for transporting liquid, gas and powdered materials. The inner tank made of stainless steel or other suitable materials is protected by an outer ISO frame. It is preferred for safe transportation of hazardous and non-hazardous liquids."
    },
    usage: {
      tr: "Kimyasallar, gıda maddeleri (yağ, süt, şarap vb.), sıvı yakıtlar, içme suyu, bitkisel yağlar, endüstriyel sıvılar, gazlar ve toz halindeki ürünlerin taşınması için idealdir.",
      en: "Ideal for transporting chemicals, food products (oil, milk, wine, etc.), liquid fuels, drinking water, vegetable oils, industrial liquids, gases and powdered products."
    },
    images: [
      "/images/konteyner/20ft_Tank_Container/20TANK.jpg"
    ],
    features: {
      tr: [
        "Paslanmaz çelik tank",
        "Koruyucu dış ISO çerçeve",
        "Yükleme/boşaltma vanaları",
        "Basınç ve sıcaklık göstergeleri",
        "Çeşitli tehlikeli maddelere uygun sertifikalar"
      ],
      en: [
        "Stainless steel tank",
        "Protective outer ISO frame",
        "Loading/unloading valves",
        "Pressure and temperature indicators",
        "Certifications for various hazardous materials"
      ]
    }
  },
  
  "40-tank-konteyner": {
    name: "40' Tank Konteyner",
    slug: "40-tank-konteyner",
    category: "tank",
    size: "40",
    specs: {
      external: {
        length: "12.192 m (40'0\")",
        width: "2.438 m (8'0\")",
        height: "2.591 m (8'6\")"
      },
      capacity: {
        volume: "40.000-45.000 litre (10.570-11.890 galon)"
      },
      weight: {
        tare: "5.400 kg (11.900 lbs)",
        payload: "30.080 kg (66.315 lbs)",
        maxGross: "35.480 kg (78.220 lbs)"
      }
    },
    description: {
      tr: "40' Tank konteynerleri, 20' modeline göre daha fazla hacim sunan tank konteynerlerdir. Daha büyük miktarlarda sıvı, gaz ve toz halindeki malzemelerin taşınmasında kullanılır. Özellikle büyük miktarda sıvı taşınması gereken durumlarda ekonomik bir çözüm sunar.",
      en: "40' Tank containers are tank containers that offer more volume compared to the 20' model. It is used for transporting larger quantities of liquid, gas and powdered materials. It offers an economical solution especially in cases where large amounts of liquid need to be transported."
    },
    usage: {
      tr: "Büyük hacimli kimyasallar, gıda maddeleri, sıvı yakıtlar, içme suyu, endüstriyel sıvılar ve diğer sıvı, gaz veya toz halindeki ürünlerin taşınması için idealdir.",
      en: "Ideal for transporting large volumes of chemicals, food products, liquid fuels, drinking water, industrial liquids, and other liquid, gas or powdered products."
    },
    images: [
      "/images/konteyner/40ft_Tank_Container/40TANK.jpg"
    ],
    features: {
      tr: [
        "Geniş hacimli paslanmaz çelik tank",
        "Dayanıklı ISO dış çerçeve",
        "Gelişmiş yükleme/boşaltma sistemleri",
        "Basınç kontrol sistemleri",
        "Sıcaklık koruma özellikleri"
      ],
      en: [
        "Large volume stainless steel tank",
        "Durable ISO outer frame",
        "Advanced loading/unloading systems",
        "Pressure control systems",
        "Temperature protection features"
      ]
    }
  },
  
  // Double Door Konteynerler
  "20-double-door-konteyner": {
    name: "20' Double Door Konteyner",
    slug: "20-double-door-konteyner",
    category: "double-door",
    size: "20",
    specs: {
      external: {
        length: "6.058 m (19'11\")",
        width: "2.438 m (8'0\")",
        height: "2.591 m (8'6\")"
      },
      internal: {
        length: "5.898 m (19'4\")",
        width: "2.352 m (7'9\")",
        height: "2.393 m (7'10\")"
      },
      doorOpening: {
        width: "2.340 m (7'8\")",
        height: "2.280 m (7'6\")"
      },
      weight: {
        tare: "2.400 kg (5.291 lbs)",
        payload: "28.080 kg (61.907 lbs)",
        maxGross: "30.480 kg (67.200 lbs)"
      },
      capacity: {
        volume: "33,2 m³ (1.172 ft³)",
        maxEurPallets: 11
      }
    },
    description: {
      tr: "20' Double Door konteynerler, hem ön hem de arka tarafından açılabilen kapılara sahip konteynerlerdir. Bu özellik, yükleme ve boşaltma işlemlerinde büyük kolaylık sağlar. Özellikle uzun ürünlerin yüklenmesinde ve forklift ile yapılan operasyonlarda zaman kazandırır.",
      en: "20' Double Door containers are containers with doors that can be opened from both the front and rear sides. This feature provides great convenience in loading and unloading operations. It saves time especially in loading long products and operations with forklifts."
    },
    usage: {
      tr: "Uzun ürünler, palet yüklemeleri, mobilya, inşaat malzemeleri, endüstriyel ürünler ve hızlı yükleme/boşaltma gerektiren ürünlerin taşınması için idealdir.",
      en: "Ideal for transporting long products, pallet loads, furniture, construction materials, industrial products and products requiring fast loading/unloading."
    },
    images: [
      "/images/konteyner/20ft_Double_Door_Container/20DD.jpg"
    ],
    features: {
      tr: [
        "Hem ön hem arkadan açılabilen kapılar",
        "Kolay yükleme/boşaltma",
        "270 derece açılabilen kapılar",
        "Güçlendirilmiş kapı kilitleri",
        "Standart ISO ölçüleri"
      ],
      en: [
        "Doors that can be opened from both front and rear",
        "Easy loading/unloading",
        "Doors that can open 270 degrees",
        "Reinforced door locks",
        "Standard ISO dimensions"
      ]
    }
  },
  
  "40-dc-double-door-konteyner": {
    name: "40' DC Double Door Konteyner",
    slug: "40-dc-double-door-konteyner",
    category: "double-door",
    size: "40",
    specs: {
      external: {
        length: "12.192 m (40'0\")",
        width: "2.438 m (8'0\")",
        height: "2.591 m (8'6\")"
      },
      internal: {
        length: "12.032 m (39'6\")",
        width: "2.352 m (7'9\")",
        height: "2.393 m (7'10\")"
      },
      doorOpening: {
        width: "2.340 m (7'8\")",
        height: "2.280 m (7'6\")"
      },
      weight: {
        tare: "3.900 kg (8.600 lbs)",
        payload: "26.580 kg (58.600 lbs)",
        maxGross: "30.480 kg (67.200 lbs)"
      },
      capacity: {
        volume: "67,7 m³ (2.389 ft³)",
        maxEurPallets: 25
      }
    },
    description: {
      tr: "40' DC Double Door konteynerler, standart yükseklikte ve her iki ucunda da kapısı bulunan uzun konteynerlerdir. Bu özellik sayesinde, ürünlerin konteynerin her iki ucundan da yüklenip boşaltılması mümkündür. Özellikle uzun ürünlerin veya birden fazla lokasyonda yükleme/boşaltma yapılacak kargoların taşınmasında tercih edilir.",
      en: "40' DC Double Door containers are long containers with standard height and doors at both ends. This feature makes it possible to load and unload products from both ends of the container. It is preferred especially for transporting long products or cargoes that will be loaded/unloaded at more than one location."
    },
    usage: {
      tr: "Uzun ürünler, ağaç ve kereste, boru, metal profiller, endüstriyel makineler, inşaat malzemeleri ve çoklu lokasyon teslimatları gerektiren ürünler için idealdir.",
      en: "Ideal for long products, wood and timber, pipes, metal profiles, industrial machinery, construction materials and products requiring multiple location deliveries."
    },
    images: [
      "/images/konteyner/40ft_DC_Double_Door_Container/40CDD.jpg"
    ],
    features: {
      tr: [
        "Her iki uçta tam genişlikte kapılar",
        "Standart yükseklik",
        "Kolay yükleme ve boşaltma imkanı",
        "270 derece açılabilen kapılar",
        "Güvenli kilitleme sistemi"
      ],
      en: [
        "Full width doors at both ends",
        "Standard height",
        "Easy loading and unloading capability",
        "Doors that can open 270 degrees",
        "Secure locking system"
      ]
    }
  },
  
  "40-hc-double-door-konteyner": {
    name: "40' HC Double Door Konteyner",
    slug: "40-hc-double-door-konteyner",
    category: "double-door",
    size: "40",
    specs: {
      external: {
        length: "12.192 m (40'0\")",
        width: "2.438 m (8'0\")",
        height: "2.896 m (9'6\")"
      },
      internal: {
        length: "12.032 m (39'6\")",
        width: "2.352 m (7'9\")",
        height: "2.698 m (8'10\")"
      },
      doorOpening: {
        width: "2.340 m (7'8\")",
        height: "2.585 m (8'6\")"
      },
      weight: {
        tare: "4.200 kg (9.260 lbs)",
        payload: "28.300 kg (62.390 lbs)",
        maxGross: "32.500 kg (71.650 lbs)"
      },
      capacity: {
        volume: "76,4 m³ (2.698 ft³)",
        maxEurPallets: 25
      }
    },
    description: {
      tr: "40' HC Double Door konteynerler, High Cube yüksekliğine ve her iki ucunda da kapısı bulunan konteynerlerdir. Standart konteynerlerden yaklaşık 30 cm daha yüksek olup, iki taraflı yükleme imkanı sunar. Bu özellikler, hem hacimli yüklerin taşınması hem de operasyonel verimlilik için ideal bir çözüm sunar.",
      en: "40' HC Double Door containers are containers with High Cube height and doors at both ends. They are about 30 cm taller than standard containers and offer two-sided loading capability. These features offer an ideal solution for both transporting voluminous loads and operational efficiency."
    },
    usage: {
      tr: "Yüksek ve hacimli ürünler, mobilya, elektronik eşya, beyaz eşya, otomotiv parçaları, hafif ve hacimli ürünler ve çoklu teslimat gerektiren ürünler için idealdir.",
      en: "Ideal for tall and voluminous products, furniture, electronic equipment, white goods, automotive parts, light and voluminous products and products requiring multiple deliveries."
    },
    images: [
      "/images/konteyner/40ft_HC_Double_Door_Container/40HCDD.jpg"
    ],
    features: {
      tr: [
        "Ekstra yükseklik",
        "Her iki uçta tam genişlikte kapılar",
        "İki yönlü yükleme imkanı",
        "Daha fazla hacim",
        "Güvenli kilitleme sistemi"
      ],
      en: [
        "Extra height",
        "Full width doors at both ends",
        "Two-way loading capability",
        "More volume",
        "Secure locking system"
      ]
    }
  },
  
  // Open Side Konteynerler
  "20-dc-open-side-konteyner": {
    name: "20' DC Open Side Konteyner",
    slug: "20-dc-open-side-konteyner",
    category: "open-side",
    size: "20",
    specs: {
      external: {
        length: "6.058 m (19'11\")",
        width: "2.438 m (8'0\")",
        height: "2.591 m (8'6\")"
      },
      internal: {
        length: "5.898 m (19'4\")",
        width: "2.352 m (7'9\")",
        height: "2.393 m (7'10\")"
      },
      doorOpening: {
        width: "2.340 m (7'8\")",
        height: "2.280 m (7'6\")"
      },
      sideOpening: {
        length: "5.898 m (19'4\")",
        height: "2.280 m (7'6\")"
      },
      weight: {
        tare: "2.850 kg (6.283 lbs)",
        payload: "27.630 kg (60.914 lbs)",
        maxGross: "30.480 kg (67.200 lbs)"
      },
      capacity: {
        volume: "33,2 m³ (1.172 ft³)"
      }
    },
    description: {
      tr: "20' DC Open Side konteynerler, standart yükseklikte olup, bir veya her iki yanında açılabilen kapılar bulunan konteynerlerdir. Bu özellik, özellikle ağır veya geniş ürünlerin yandan yüklenmesine olanak tanır. Forklift ile yapılan yükleme işlemlerinde büyük kolaylık sağlar.",
      en: "20' DC Open Side containers are containers with standard height and doors that can be opened on one or both sides. This feature allows especially heavy or wide products to be loaded from the side. It provides great convenience in loading operations with forklifts."
    },
    usage: {
      tr: "Geniş ürünler, paletli yükler, ağır makineler, inşaat malzemeleri, ahşap ürünler ve standart kapılardan giremeyecek ebattaki yükler için idealdir.",
      en: "Ideal for wide products, palletized loads, heavy machinery, construction materials, wooden products and loads that cannot fit through standard doors."
    },
    images: [
      "/images/konteyner/20ft_DC_Open_Side_Container/20DCOS.jpg"
    ],
    features: {
      tr: [
        "Yandan açılabilir tam boy kapılar",
        "Standart yükseklik",
        "Kolay yandan yükleme",
        "Ağır yüklere uygun",
        "Güvenli kilitleme sistemi"
      ],
      en: [
        "Full-length side-opening doors",
        "Standard height",
        "Easy side loading",
        "Suitable for heavy loads",
        "Secure locking system"
      ]
    }
  },
  
  // Yeni Open Side Konteynerler
  "40-dc-open-side-konteyner": {
    name: "40' DC Open Side Konteyner",
    slug: "40-dc-open-side-konteyner",
    category: "open-side",
    size: "40",
    specs: {
      external: {
        length: "12.192 m (40'0\")",
        width: "2.438 m (8'0\")",
        height: "2.591 m (8'6\")"
      },
      internal: {
        length: "12.032 m (39'6\")",
        width: "2.352 m (7'9\")",
        height: "2.393 m (7'10\")"
      },
      doorOpening: {
        width: "2.340 m (7'8\")",
        height: "2.280 m (7'6\")"
      },
      sideOpening: {
        length: "12.032 m (39'6\")",
        height: "2.280 m (7'6\")"
      },
      weight: {
        tare: "4.100 kg (9.040 lbs)",
        payload: "26.380 kg (58.160 lbs)",
        maxGross: "30.480 kg (67.200 lbs)"
      },
      capacity: {
        volume: "67,7 m³ (2.389 ft³)"
      }
    },
    description: {
      tr: "40' DC Open Side konteynerler, standart yükseklikte olup, bir veya her iki yanında uzunlamasına açılabilen kapılar bulunan konteynerlerdir. Bu özellik, özellikle uzun ve geniş ürünlerin yandan yüklenmesine olanak tanır. Forklift ile yapılan yükleme işlemlerinde ve uzun ürünlerin taşınmasında büyük avantaj sağlar.",
      en: "40' DC Open Side containers are containers with standard height and doors that can be opened longitudinally on one or both sides. This feature allows especially long and wide products to be loaded from the side. It provides a great advantage in loading operations with forklifts and transportation of long products."
    },
    usage: {
      tr: "Uzun ve geniş ürünler, paletli yükler, uzun metal profiller, ağaç ve kereste ürünleri, inşaat malzemeleri, endüstriyel makineler ve standart kapılardan giremeyecek ebattaki uzun yükler için idealdir.",
      en: "Ideal for long and wide products, palletized loads, long metal profiles, wood and timber products, construction materials, industrial machinery and long loads that cannot fit through standard doors."
    },
    images: [
      "/images/konteyner/40ft_DC_Open_Side_Container/40HCOS.jpg"
    ],
    features: {
      tr: [
        "Yandan açılabilir tam boy kapılar",
        "Standart yükseklik",
        "Uzun ürünler için ideal genişlik",
        "Kolay yandan yükleme",
        "Ağır yüklere uygun"
      ],
      en: [
        "Full-length side-opening doors",
        "Standard height",
        "Ideal width for long products",
        "Easy side loading",
        "Suitable for heavy loads"
      ]
    }
  },
  
  "40-hc-open-side-konteyner": {
    name: "40' HC Open Side Konteyner",
    slug: "40-hc-open-side-konteyner",
    category: "open-side",
    size: "40",
    specs: {
      external: {
        length: "12.192 m (40'0\")",
        width: "2.438 m (8'0\")",
        height: "2.896 m (9'6\")"
      },
      internal: {
        length: "12.032 m (39'6\")",
        width: "2.352 m (7'9\")",
        height: "2.698 m (8'10\")"
      },
      doorOpening: {
        width: "2.340 m (7'8\")",
        height: "2.585 m (8'6\")"
      },
      sideOpening: {
        length: "12.032 m (39'6\")",
        height: "2.585 m (8'6\")"
      },
      weight: {
        tare: "4.300 kg (9.480 lbs)",
        payload: "28.200 kg (62.170 lbs)",
        maxGross: "32.500 kg (71.650 lbs)"
      },
      capacity: {
        volume: "76,4 m³ (2.698 ft³)"
      }
    },
    description: {
      tr: "40' HC Open Side konteynerler, High Cube yüksekliğine sahip olup bir veya her iki yanında uzunlamasına açılabilen kapılar bulunan konteynerlerdir. Standart konteynerlerden yaklaşık 30 cm daha yüksek olduğundan, hem yüksek hem de uzun ürünlerin taşınması için ideal bir çözüm sunar. Yandan yükleme imkanı özellikle büyük ve hacimli ürünler için büyük kolaylık sağlar.",
      en: "40' HC Open Side containers are containers with High Cube height and doors that can be opened longitudinally on one or both sides. Being about 30 cm taller than standard containers, it offers an ideal solution for transporting both tall and long products. The side loading capability provides great convenience especially for large and voluminous products."
    },
    usage: {
      tr: "Yüksek ve uzun ürünler, mobilya, beyaz eşya, elektronik ürünler, otomotiv parçaları, uzun inşaat malzemeleri, hacimli tekstil ürünleri ve standart kapılardan geçemeyecek büyüklükteki yükler için idealdir.",
      en: "Ideal for tall and long products, furniture, white goods, electronic products, automotive parts, long construction materials, voluminous textile products and loads too large to pass through standard doors."
    },
    images: [
      "/images/konteyner/40ft_HC_Open_Side_Container/40HCOS.jpg"
    ],
    features: {
      tr: [
        "Ekstra yükseklik",
        "Yandan açılabilir tam boy kapılar",
        "Daha fazla iç hacim",
        "Kolay yandan yükleme",
        "Yüksek ve uzun yükler için ideal"
      ],
      en: [
        "Extra height",
        "Full-length side-opening doors",
        "More internal volume",
        "Easy side loading",
        "Ideal for tall and long loads"
      ]
    }
  },
  
  // Platform Konteynerler
  "20-platform-konteyner": {
    name: "20' Platform Konteyner",
    slug: "20-platform-konteyner",
    category: "platform",
    size: "20",
    specs: {
      external: {
        length: "6.058 m (19'11\")",
        width: "2.438 m (8'0\")",
        height: "0.226 m (0'9\")"
      },
      internal: {
        length: "5.988 m (19'8\")",
        width: "2.398 m (7'10\")",
        height: "0.190 m (0'7\")"
      },
      weight: {
        tare: "2.100 kg (4.630 lbs)",
        payload: "28.380 kg (62.570 lbs)",
        maxGross: "30.480 kg (67.200 lbs)"
      }
    },
    description: {
      tr: "20' Platform konteynerler, yan duvarlar veya çatı olmadan düz bir yükleme alanı sunan konteynerlerin en temel versiyonudur. Sadece taban ve köşe direklerinden oluşan bu konteynerler, özellikle büyük ve alışılmadık şekilli yükleri taşımak için idealdir. Güçlendirilmiş tabanı sayesinde ağır yükleri taşıma kapasitesine sahiptir.",
      en: "20' Platform containers are the most basic version of containers, offering a flat loading area without side walls or roof. Consisting only of a base and corner posts, these containers are ideal for carrying large and unusually shaped loads. Thanks to its reinforced base, it has the capacity to carry heavy loads."
    },
    usage: {
      tr: "Aşırı yüksek veya genişlikteki yükler, ağır makine parçaları, inşaat ekipmanları, büyük metal yapılar, keresteler, uzun borular ve standart konteynerlere sığmayan diğer hacimli yükler için idealdir.",
      en: "Ideal for extremely tall or wide loads, heavy machine parts, construction equipment, large metal structures, timber, long pipes and other bulky loads that do not fit in standard containers."
    },
    images: [
      "/images/konteyner/20ft_Platform_Container/20Platform.jpg"
    ],
    features: {
      tr: [
        "Düz yükleme alanı",
        "Güçlendirilmiş taban",
        "Yan duvar ve çatı yok",
        "Aşırı boyutlu yüklere uygun",
        "ISO standartlarına uygun bağlantı noktaları"
      ],
      en: [
        "Flat loading area",
        "Reinforced base",
        "No side walls and roof",
        "Suitable for oversized loads",
        "Connection points compliant with ISO standards"
      ]
    }
  },
  
  "40-platform-konteyner": {
    name: "40' Platform Konteyner",
    slug: "40-platform-konteyner",
    category: "platform",
    size: "40",
    specs: {
      external: {
        length: "12.192 m (40'0\")",
        width: "2.438 m (8'0\")",
        height: "0.226 m (0'9\")"
      },
      internal: {
        length: "12.122 m (39'9\")",
        width: "2.398 m (7'10\")",
        height: "0.190 m (0'7\")"
      },
      weight: {
        tare: "3.800 kg (8.380 lbs)",
        payload: "40.700 kg (89.730 lbs)",
        maxGross: "44.500 kg (98.100 lbs)"
      }
    },
    description: {
      tr: "40' Platform konteynerler, 20' modelinden daha uzun olup daha fazla yük taşıma kapasitesine sahiptir. Herhangi bir yan duvar veya üst yapı olmaksızın, sadece düz bir platform sunar. Bu özelliği sayesinde, özellikle uzun ve ağır yüklerin taşınmasında tercih edilir. Güçlendirilmiş yapısı ile ağır endüstriyel ekipmanları bile taşıyabilir.",
      en: "40' Platform containers are longer than the 20' model and have more cargo carrying capacity. Without any side walls or superstructure, it offers just a flat platform. Due to this feature, it is preferred especially for transporting long and heavy loads. With its reinforced structure, it can carry even heavy industrial equipment."
    },
    usage: {
      tr: "Uzun ve ağır yükler, inşaat makineleri, uzun borular, tekne ve yat taşımacılığı, endüstriyel ekipmanlar, büyük metal yapılar ve standart konteynerlere sığmayan diğer büyük yükler için idealdir.",
      en: "Ideal for long and heavy loads, construction machinery, long pipes, boat and yacht transportation, industrial equipment, large metal structures and other large loads that do not fit in standard containers."
    },
    images: [
      "/images/konteyner/40ft_Platform_Container/40platform.jpg"
    ],
    features: {
      tr: [
        "Uzun platform tasarımı",
        "Yan duvar ve üst yapı yok",
        "Güçlendirilmiş taban",
        "Yüksek yük kapasitesi",
        "ISO standartlarına uygun bağlantı noktaları"
      ],
      en: [
        "Long platform design",
        "No side walls and superstructure",
        "Reinforced base",
        "High load capacity",
        "Connection points compliant with ISO standards"
      ]
    }
  },
  
  // Diğer Özel Konteynerler
  "10-feet-konteyner": {
    name: "10' Feet Konteyner",
    slug: "10-feet-konteyner",
    category: "other",
    size: "10",
    specs: {
      external: {
        length: "2.991 m (9'10\")",
        width: "2.438 m (8'0\")",
        height: "2.591 m (8'6\")"
      },
      internal: {
        length: "2.831 m (9'3\")",
        width: "2.352 m (7'9\")",
        height: "2.393 m (7'10\")"
      },
      doorOpening: {
        width: "2.340 m (7'8\")",
        height: "2.280 m (7'6\")"
      },
      weight: {
        tare: "1.450 kg (3.197 lbs)",
        payload: "10.050 kg (22.156 lbs)",
        maxGross: "11.500 kg (25.353 lbs)"
      },
      capacity: {
        volume: "15,9 m³ (561 ft³)"
      }
    },
    description: {
      tr: "10' Feet konteynerler, standart konteynerlerden daha kısa olan kompakt konteynerlerdir. Küçük boyutları sayesinde, özellikle dar alanlarda ve daha az hacimli yükler için ideal bir çözümdür. Hafif malzemelerin taşınması, geçici depolama veya özel projeler için sıkça tercih edilir.",
      en: "10' Feet containers are compact containers that are shorter than standard containers. Due to their small size, they are an ideal solution especially for narrow spaces and less voluminous loads. They are frequently preferred for transporting light materials, temporary storage or special projects."
    },
    usage: {
      tr: "Küçük hacimli yükler, ofis ekipmanları, kişisel eşyalar, şantiye malzemeleri, geçici depolama ihtiyaçları ve dar alanlara yerleştirilmesi gereken konteynerler için idealdir.",
      en: "Ideal for small volume loads, office equipment, personal items, construction site materials, temporary storage needs and containers that need to be placed in narrow spaces."
    },
    images: [
      "/images/konteyner/10ft_Special_Container/10Special.jpg"
    ],
    features: {
      tr: [
        "Kompakt boyut",
        "Kolay taşınabilirlik",
        "Dar alanlara uygunluk",
        "Standart ISO ölçüleri",
        "Çok yönlü kullanım"
      ],
      en: [
        "Compact size",
        "Easy transportability",
        "Suitability for narrow spaces",
        "Standard ISO dimensions",
        "Versatile usage"
      ]
    }
  },
  
  "yasam-konteyneri": {
    name: "Yaşam Konteyneri",
    slug: "yasam-konteyneri",
    category: "other",
    size: "all",
    specs: {
      standard: {
        length: "6.058 m (19'11\")",
        width: "2.438 m (8'0\")",
        height: "2.800 m (9'2\")"
      },
      options: {
        sizes: "10', 20', 40' ve özel ölçüler",
        height: "2.591 m (8'6\") - 3.000 m (9'10\")"
      },
      weight: {
        tare: "3.000-4.500 kg (6.614-9.921 lbs) (boyuta göre değişir)"
      },
      features: {
        insulation: "50-100 mm poliüretan veya taş yünü",
        electricity: "220V veya 110V sistem, LED aydınlatma",
        hvac: "Klima, ısıtma sistemi, havalandırma"
      }
    },
    description: {
      tr: "Yaşam konteynerleri, insan yaşamına uygun olarak dizayn edilmiş özel konteynerlerdir. İzolasyon, elektrik, su tesisatı, pencere, kapı ve iç bölmeler gibi yaşamsal altyapılar içerir. Şantiye ofisi, geçici konaklama, afet sonrası barınma, kafe, mağaza veya özel amaçlı projeler için kullanılabilir.",
      en: "Living containers are special containers designed for human habitation. They contain vital infrastructures such as insulation, electricity, plumbing, windows, doors and internal compartments. They can be used for construction site offices, temporary accommodation, post-disaster shelter, cafes, stores or special purpose projects."
    },
    usage: {
      tr: "Şantiye ofisleri, geçici konaklama üniteleri, işçi barınma alanları, afet sonrası acil barınma, kafeler, satış noktaları, güvenlik kulübeleri ve özel yaşam alanları olarak kullanılabilir.",
      en: "Can be used as construction site offices, temporary accommodation units, worker housing areas, emergency shelter after disasters, cafes, sales points, security booths and special living spaces."
    },
    images: [
      "/images/konteyner/Living_Container/Living.jpg"
    ],
    features: {
      tr: [
        "Isı ve ses izolasyonu",
        "Elektrik ve su tesisatı",
        "Pencere ve kapılar",
        "İklimlendirme sistemleri",
        "Özelleştirilebilir iç mekan"
      ],
      en: [
        "Heat and sound insulation",
        "Electrical and plumbing systems",
        "Windows and doors",
        "Air conditioning systems",
        "Customizable interior"
      ]
    }
  },
  
  "20-dv-bulk-konteyner": {
    name: "20' DV Bulk Konteyner",
    slug: "20-dv-bulk-konteyner",
    category: "other",
    size: "20",
    specs: {
      external: {
        length: "6.058 m (19'11\")",
        width: "2.438 m (8'0\")",
        height: "2.591 m (8'6\")"
      },
      internal: {
        length: "5.898 m (19'4\")",
        width: "2.352 m (7'9\")",
        height: "2.393 m (7'10\")"
      },
      doorOpening: {
        width: "2.340 m (7'8\")",
        height: "2.280 m (7'6\")"
      },
      loading: {
        hatch: "3-5 adet üst yükleme kapağı",
        discharge: "Arka kapı tahliye portu"
      },
      weight: {
        tare: "2.500 kg (5.512 lbs)",
        payload: "27.980 kg (61.685 lbs)",
        maxGross: "30.480 kg (67.200 lbs)"
      },
      capacity: {
        volume: "33,2 m³ (1.172 ft³)"
      }
    },
    description: {
      tr: "20' DV Bulk konteynerler, dökme yüklerin taşınması için özel olarak tasarlanmış konteynerlerdir. Üst kısmında bulunan yükleme kapakları ve arka kapıda bulunan tahliye portu sayesinde, dökme yüklerin kolay yüklenmesi ve boşaltılması sağlanır. Tahıl, gübre, toz halindeki maddeler ve diğer dökme kargo tipleri için idealdir.",
      en: "20' DV Bulk containers are containers specially designed for transporting bulk cargo. Thanks to the loading hatches on the top and the discharge port on the rear door, easy loading and unloading of bulk cargo is ensured. It is ideal for grain, fertilizer, powdered substances and other types of bulk cargo."
    },
    usage: {
      tr: "Tahıllar, tohumlar, gübreler, granül malzemeler, kimyasal tozlar, plastik granüller, kahve çekirdekleri ve diğer dökme kuru yükler için idealdir.",
      en: "Ideal for grains, seeds, fertilizers, granular materials, chemical powders, plastic granules, coffee beans and other bulk dry cargo."
    },
    images: [
      "/images/konteyner/20ft_DV_Bulk_Container/20DVBULK.jpg"
    ],
    features: {
      tr: [
        "Üst yükleme kapakları",
        "Arka kapı tahliye portu",
        "Dökme yük için özel tasarım",
        "Kolay yükleme ve boşaltma",
        "Toz ve nem koruması"
      ],
      en: [
        "Top loading hatches",
        "Rear door discharge port",
        "Special design for bulk cargo",
        "Easy loading and unloading",
        "Dust and moisture protection"
      ]
    }
  },
  
  "off-shore-konteyner": {
    name: "Off Shore Konteyner",
    slug: "off-shore-konteyner",
    category: "other",
    size: "all",
    specs: {
      standard: {
        sizes: "8', 10', 20' ve özel ölçüler",
        height: "2.591 m (8'6\") - 3.000 m (9'10\")"
      },
      construction: {
        material: "Güçlendirilmiş çelik",
        certification: "DNV 2.7-1, EN 12079, ISO 10855 standartları"
      },
      weight: {
        payload: "Boyuta göre 5.000-30.000 kg (11.023-66.139 lbs)"
      },
      features: {
        lifting: "4 köşe kaldırma noktaları",
        stackability: "3-4 yüksekliğinde istiflenebilir",
        watertight: "IP56 veya daha yüksek su geçirmezlik"
      }
    },
    description: {
      tr: "Off Shore konteynerler, açık deniz platformları ve gemiler için özel olarak tasarlanmış dayanıklı konteynerlerdir. Zor deniz koşullarına, tuzlu suya ve yüksek rüzgar hızlarına dayanacak şekilde üretilir. Özel kaldırma aparatları ve sağlamlaştırılmış yapısıyla, açık deniz operasyonlarında ekipman ve malzeme taşıması için idealdir.",
      en: "Off Shore containers are durable containers specially designed for offshore platforms and ships. They are manufactured to withstand harsh sea conditions, salt water and high wind speeds. With special lifting attachments and reinforced structure, they are ideal for carrying equipment and materials in offshore operations."
    },
    usage: {
      tr: "Açık deniz petrol ve gaz platformlarına malzeme taşıma, denizcilik operasyonları, zorlu çevre koşullarında ekipman taşıma, okyanus taşımacılığı ve offshore endüstrisi için uygundur.",
      en: "Suitable for transporting materials to offshore oil and gas platforms, maritime operations, transporting equipment in harsh environmental conditions, ocean transportation and offshore industry."
    },
    images: [
      "/images/konteyner/Off_Shore_Container/OffShore.jpg"
    ],
    features: {
      tr: [
        "Deniz koşullarına dayanıklı yapı",
        "Özel kaldırma noktaları",
        "Uluslararası standartlara uygunluk",
        "Korozyona dayanıklı kaplama",
        "Yüksek emniyet faktörü"
      ],
      en: [
        "Structure resistant to marine conditions",
        "Special lifting points",
        "Compliance with international standards",
        "Corrosion resistant coating",
        "High safety factor"
      ]
    }
  },
  
  "45-hc-curtain-side-konteyner": {
    name: "45' HC Curtain Side Konteyner",
    slug: "45-hc-curtain-side-konteyner",
    category: "curtain-side",
    size: "45",
    specs: {
      external: {
        length: "13.716 m (45'0\")",
        width: "2.438 m (8'0\")",
        height: "2.896 m (9'6\")"
      },
      internal: {
        length: "13.556 m (44'6\")",
        width: "2.350 m (7'8\")",
        height: "2.698 m (8'10\")"
      },
      doorOpening: {
        width: "2.340 m (7'8\")",
        height: "2.585 m (8'6\")"
      },
      sideOpening: {
        length: "13.556 m (44'6\")",
        height: "2.550 m (8'4\")"
      },
      weight: {
        tare: "4.950 kg (10.910 lbs)",
        payload: "27.550 kg (60.740 lbs)",
        maxGross: "32.500 kg (71.650 lbs)"
      },
      capacity: {
        volume: "85 m³ (3.002 ft³)"
      }
    },
    description: {
      tr: "45' HC Curtain Side (Perde Yan) konteynerler, High Cube yüksekliğine ve her iki yanında da perdeler şeklinde açılabilen esnek yan duvarlara sahip konteynerlerdir. 45 feet uzunluğuyla maksimum kapasiteye ulaşırken, perde sistemi sayesinde yandan yükleme yapma imkanı sunar. Bu özellikler, hem uzun hem de yüksek yüklerin taşınması ve kolay yükleme/boşaltma operasyonları için ideal bir çözüm sunar.",
      en: "45' HC Curtain Side containers are containers with High Cube height and flexible side walls that can be opened like curtains on both sides. While reaching maximum capacity with a length of 45 feet, it offers the possibility of side loading thanks to the curtain system. These features offer an ideal solution for transporting both long and tall loads and for easy loading/unloading operations."
    },
    usage: {
      tr: "Uzun ve yüksek yükler, mobilya, beyaz eşya, elektronik ürünler, otomotiv parçaları, tekstil ürünleri, paletli yükler, inşaat malzemeleri ve yandan yükleme gerektiren ağır ve hacimli ürünler için idealdir.",
      en: "Ideal for long and tall loads, furniture, white goods, electronic products, automotive parts, textile products, palletized loads, construction materials and heavy and voluminous products requiring side loading."
    },
    images: [
      "/images/konteyner/45ft_HC_Curtain_Side_Container/45HCCS.jpg"
    ],
    features: {
      tr: [
        "Maksimum iç hacim",
        "Perde şeklinde açılabilen yan duvarlar",
        "Ekstra uzunluk ve yükseklik",
        "Kolay yandan yükleme",
        "Ağır ve hacimli yüklere uygun"
      ],
      en: [
        "Maximum internal volume",
        "Side walls that can be opened like curtains",
        "Extra length and height",
        "Easy side loading",
        "Suitable for heavy and voluminous loads"
      ]
    }
  }
}; 
