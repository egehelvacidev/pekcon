import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Locale } from './i18n'

/**
 * Combine Tailwind classes with clsx and twMerge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get localized content based on current locale
 */
export function getLocalizedContent<T extends Record<string, any>>(content: T, field: keyof T, locale: Locale): string {
  const localizedField = content[field]
  
  if (typeof localizedField === 'string') {
    return localizedField
  }
  
  if (localizedField && typeof localizedField === 'object' && locale in localizedField) {
    return localizedField[locale] || localizedField['tr']
  }
  
  return ''
}

/**
 * Format date based on locale
 */
export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'tr' ? 'tr-TR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

/**
 * Generate SEO metadata
 */
export function generateSEOMetadata({
  title,
  description,
  locale,
  ogImage = '/images/og-image.jpg',
  canonicalUrl,
}: {
  title: string
  description: string
  locale: Locale
  ogImage?: string
  canonicalUrl: string
}) {
  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'tr': `${process.env.NEXT_PUBLIC_SITE_URL}/tr${canonicalUrl}`,
        'en': `${process.env.NEXT_PUBLIC_SITE_URL}/en${canonicalUrl}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'PEKCON KONTEYNER',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(/\s/g, '')
}

/**
 * Scroll to element with smooth scrolling
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
} 