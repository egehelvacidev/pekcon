import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

import { Locale, locales } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'PEKCON KONTEYNER',
  description: 'PEKCON KONTEYNER kurumsal web sitesi',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// HTML lang özniteliğini dinamik olarak belirleme
export function generateHtmlMetadata({ params }: { params: { locale: string } }) {
  return {
    lang: params.locale,
  };
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../../public/locales/${locale}/common.json`)).default;
  } catch (error) {
    notFound();
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  // Validate locale with type assertion
  const locale = params.locale as Locale;
  if (!locales.includes(locale as Locale)) notFound();

  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex min-h-screen flex-col">
        <Header locale={locale as Locale} />
        <main className="flex-grow">{children}</main>
        <Footer locale={locale as Locale} />
        <WhatsAppButton />
      </div>
    </NextIntlClientProvider>
  );
} 