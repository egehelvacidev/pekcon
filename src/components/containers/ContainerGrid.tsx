"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Container, ContainerFilterOptions } from '@/types/container';
import { Locale } from '@/lib/i18n';
import ContainerCard from '@/components/containers/ContainerCard';
import ContainerFilter from '@/components/containers/ContainerFilter';

interface ContainerGridProps {
  containers: Container[];
  locale: Locale;
}

export default function ContainerGrid({ containers, locale }: ContainerGridProps) {
  const t = useTranslations('containers');
  const [filteredContainers, setFilteredContainers] = useState<Container[]>(containers);
  const [filters, setFilters] = useState<ContainerFilterOptions>({});

  useEffect(() => {
    const filtered = containers.filter((container) => {
      // Apply type filter
      if (filters.type && container.type !== filters.type) {
        return false;
      }
      
      // Apply size filter
      if (filters.size && container.size !== filters.size) {
        return false;
      }
      
      // Apply feature filter
      if (filters.feature && container.feature !== filters.feature) {
        return false;
      }
      
      // Apply condition filter
      if (filters.condition && container.condition !== filters.condition) {
        return false;
      }
      
      return true;
    });
    
    setFilteredContainers(filtered);
  }, [filters, containers]);

  const handleFilterChange = (newFilters: ContainerFilterOptions) => {
    setFilters(newFilters);
  };

  return (
    <div className="space-y-8">
      <ContainerFilter onFilterChange={handleFilterChange} locale={locale} />
      
      {filteredContainers.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">{t('noContainersFound')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContainers.map((container) => (
            <ContainerCard key={container.id} container={container} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
} 