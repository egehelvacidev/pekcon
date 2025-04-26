import { Link } from '@/lib/i18n';
import { Container } from '@/types/container';
import { Locale } from '@/lib/i18n';
import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Image from 'next/image';

interface ContainerCardProps {
  container: Container;
  locale: Locale;
}

export default function ContainerCard({ container, locale }: ContainerCardProps) {
  const t = useTranslations('containers');
  const a = useTranslations('actions');

  return (
    <Card hoverable className="h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={container.images[0] || '/images/containers/placeholder.jpg'}
          alt={container.title[locale]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <Card.Content className="flex-grow flex flex-col">
        <Card.Title className="mb-2">{container.title[locale]}</Card.Title>
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="flex items-center">
            <span className="font-medium mr-2">{t('type')}:</span>
            <span className="capitalize">
              {container.type.replace('_', ' ')}
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-medium mr-2">{t('size')}:</span>
            <span>{container.size}'</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium mr-2">{t('feature')}:</span>
            <span className="capitalize">
              {container.feature.replace('_', ' ')}
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-medium mr-2">{t('condition')}:</span>
            <span>{t(container.condition)}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {container.description[locale]}
        </p>
      </Card.Content>
    </Card>
  );
} 