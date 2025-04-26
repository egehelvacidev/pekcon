import { notFound } from 'next/navigation';

export default function AboutPage({ params }: { params: { locale: string } }) {
  // Kullanıcıyı doğrudan notFound() ile yönlendir
  // Bu, Next.js'in dahili 404 işleyicisini kullanır ve daha güvenlidir
  notFound();
} 