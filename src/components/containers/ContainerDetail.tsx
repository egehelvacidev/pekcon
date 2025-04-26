"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Container as ContainerType } from '@/types/container';
import { Locale } from '@/lib/i18n';
import { priceRequestFormSchema, PriceRequestFormValues } from '@/lib/schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Image from 'next/image';

interface ContainerDetailProps {
  container: ContainerType;
  locale: Locale;
}

export default function ContainerDetail({ container, locale }: ContainerDetailProps) {
  const t = useTranslations('containers');
  const contactT = useTranslations('contact');
  const [activeImage, setActiveImage] = useState(0);
  const [showPriceRequestForm, setShowPriceRequestForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PriceRequestFormValues>({
    resolver: zodResolver(priceRequestFormSchema),
    defaultValues: {
      container: container.title[locale],
    },
  });

  const onSubmit = async (data: PriceRequestFormValues) => {
    // In a real application, you would send this data to your backend
    console.log('Form data:', data);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setFormSubmitted(true);
    reset();
  };

  return (
    <div className="bg-white py-8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="mb-4 relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={container.images[activeImage] || '/images/containers/placeholder.jpg'}
                alt={container.title[locale]}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {container.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative aspect-square rounded overflow-hidden border-2 ${
                    index === activeImage ? 'border-blue-500' : 'border-transparent'
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${container.title[locale]} - ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{container.title[locale]}</h1>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-4">{container.description[locale]}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="font-semibold">{t('type')}:</span>{' '}
                  <span className="capitalize">{container.type.replace('_', ' ')}</span>
                </div>
                <div>
                  <span className="font-semibold">{t('size')}:</span> {container.size}'
                </div>
                <div>
                  <span className="font-semibold">{t('feature')}:</span>{' '}
                  <span className="capitalize">{container.feature.replace('_', ' ')}</span>
                </div>
                <div>
                  <span className="font-semibold">{t('condition')}:</span> {t(container.condition)}
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">{t('technicalSpecs')}</h2>
              
              <div className="border rounded-lg overflow-hidden mb-6">
                <div className="bg-gray-50 px-4 py-2 border-b">
                  <h3 className="font-semibold">{t('dimensions')}</h3>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{locale === 'tr' ? 'İç Uzunluk' : 'Internal Length'}</p>
                      <p>{container.specs.dimensions.internal.length}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{locale === 'tr' ? 'İç Genişlik' : 'Internal Width'}</p>
                      <p>{container.specs.dimensions.internal.width}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{locale === 'tr' ? 'İç Yükseklik' : 'Internal Height'}</p>
                      <p>{container.specs.dimensions.internal.height}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{locale === 'tr' ? 'Dış Uzunluk' : 'External Length'}</p>
                      <p>{container.specs.dimensions.external.length}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{locale === 'tr' ? 'Dış Genişlik' : 'External Width'}</p>
                      <p>{container.specs.dimensions.external.width}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{locale === 'tr' ? 'Dış Yükseklik' : 'External Height'}</p>
                      <p>{container.specs.dimensions.external.height}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{locale === 'tr' ? 'Kapı Genişliği' : 'Door Width'}</p>
                      <p>{container.specs.dimensions.door.width}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{locale === 'tr' ? 'Kapı Yüksekliği' : 'Door Height'}</p>
                      <p>{container.specs.dimensions.door.height}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b">
                  <h3 className="font-semibold">{t('capacity')}</h3>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{locale === 'tr' ? 'Maksimum Brüt Ağırlık' : 'Max Gross Weight'}</p>
                      <p>{container.specs.capacity.maxGrossWeight}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{locale === 'tr' ? 'Dara Ağırlığı' : 'Tare'}</p>
                      <p>{container.specs.capacity.tare}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{locale === 'tr' ? 'Yük Kapasitesi' : 'Payload'}</p>
                      <p>{container.specs.capacity.payload}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{locale === 'tr' ? 'Hacim' : 'Capacity'}</p>
                      <p>{container.specs.capacity.capacity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Request Button */}
            {!showPriceRequestForm && !formSubmitted && (
              <Button
                onClick={() => setShowPriceRequestForm(true)}
                variant="primary"
                size="lg"
                className="w-full mb-4"
              >
                {t('requestPrice')}
              </Button>
            )}

            {/* Price Request Form */}
            {showPriceRequestForm && !formSubmitted && (
              <div className="border rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">
                  {locale === 'tr' ? 'Fiyat Teklifi İsteyin' : 'Request Price Quote'}
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {contactT('name')}
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {contactT('email')}
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {contactT('phone')}
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register('phone')}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {locale === 'tr' ? 'Firma (Opsiyonel)' : 'Company (Optional)'}
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register('company')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {locale === 'tr' ? 'Konteyner' : 'Container'}
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
                      readOnly
                      {...register('container')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {locale === 'tr' ? 'Miktar' : 'Quantity'}
                    </label>
                    <input
                      type="number"
                      min="1"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register('quantity')}
                    />
                    {errors.quantity && (
                      <p className="mt-1 text-sm text-red-600">{errors.quantity.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {locale === 'tr' ? 'Ekstra Bilgi (Opsiyonel)' : 'Additional Information (Optional)'}
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register('message')}
                    ></textarea>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      isLoading={isSubmitting}
                    >
                      {locale === 'tr' ? 'Gönder' : 'Submit'}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      onClick={() => setShowPriceRequestForm(false)}
                    >
                      {locale === 'tr' ? 'İptal' : 'Cancel'}
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Success Message */}
            {formSubmitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {locale === 'tr' ? 'Talebiniz Alındı' : 'Request Received'}
                </h3>
                <p className="text-green-700 mb-4">
                  {locale === 'tr'
                    ? 'Fiyat teklifiniz için talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.'
                    : 'Your request for a price quote has been successfully received. We will contact you shortly.'}
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setFormSubmitted(false);
                    setShowPriceRequestForm(false);
                  }}
                >
                  {locale === 'tr' ? 'Tamam' : 'Close'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
} 