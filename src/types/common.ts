export interface SocialMedia {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  address: {
    tr: string;
    en: string;
  };
  phone: string;
  email: string;
  socialMedia: SocialMedia[];
}

export interface MenuItem {
  id: string;
  label: {
    tr: string;
    en: string;
  };
  href: string;
  subMenu?: MenuItem[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
} 