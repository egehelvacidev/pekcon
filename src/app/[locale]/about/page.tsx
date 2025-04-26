import { redirect } from '@/lib/i18n';

export default function AboutPage({ params }: { params: { locale: string } }) {
  const redirectTarget = params.locale === 'tr' ? '/hakkimizda' : '/about-us';
  redirect(redirectTarget);
} 