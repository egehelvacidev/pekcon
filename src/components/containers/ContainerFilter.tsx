"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { 
  ContainerFilterOptions, 
  ContainerType, 
  ContainerSize, 
  ContainerFeature, 
  ContainerCondition 
} from '@/types/container';
import { Locale } from '@/lib/i18n';
import Button from '@/components/ui/Button';

interface ContainerFilterProps {
  onFilterChange: (filters: ContainerFilterOptions) => void;
  locale: Locale;
}

export default function ContainerFilter({ onFilterChange, locale }: ContainerFilterProps) {
  const t = useTranslations('containers');
  const [filters, setFilters] = useState<ContainerFilterOptions>({});

  const containerTypes: ContainerType[] = ['dry', 'reefer', 'open_top', 'flat_rack', 'tank'];
  const containerSizes: ContainerSize[] = ['10', '20', '40', '45'];
  const containerFeatures: ContainerFeature[] = ['standard', 'high_cube', 'double_door', 'curtain_side'];
  const containerConditions: ContainerCondition[] = ['new', 'used'];

  const formatFilterLabel = (value: string): string => {
    return value.replace(/_/g, ' ');
  };

  const handleFilterChange = (key: keyof ContainerFilterOptions, value: any | null) => {
    const newFilters = { ...filters };
    
    if (value === null) {
      delete newFilters[key];
    } else {
      newFilters[key] = value;
    }
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    setFilters({});
    onFilterChange({});
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">{t('filters')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('type')}
          </label>
          <select
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={filters.type || ''}
            onChange={(e) => 
              handleFilterChange(
                'type', 
                e.target.value ? e.target.value as ContainerType : null
              )
            }
          >
            <option value="">{t('all')}</option>
            {containerTypes.map((type) => (
              <option key={type} value={type}>
                {formatFilterLabel(type)}
              </option>
            ))}
          </select>
        </div>
        
        {/* Size Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('size')}
          </label>
          <select
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={filters.size || ''}
            onChange={(e) => 
              handleFilterChange(
                'size', 
                e.target.value ? e.target.value as ContainerSize : null
              )
            }
          >
            <option value="">{t('all')}</option>
            {containerSizes.map((size) => (
              <option key={size} value={size}>
                {size}'
              </option>
            ))}
          </select>
        </div>
        
        {/* Feature Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('feature')}
          </label>
          <select
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={filters.feature || ''}
            onChange={(e) => 
              handleFilterChange(
                'feature', 
                e.target.value ? e.target.value as ContainerFeature : null
              )
            }
          >
            <option value="">{t('all')}</option>
            {containerFeatures.map((feature) => (
              <option key={feature} value={feature}>
                {formatFilterLabel(feature)}
              </option>
            ))}
          </select>
        </div>
        
        {/* Condition Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('condition')}
          </label>
          <select
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={filters.condition || ''}
            onChange={(e) => 
              handleFilterChange(
                'condition', 
                e.target.value ? e.target.value as ContainerCondition : null
              )
            }
          >
            <option value="">{t('all')}</option>
            {containerConditions.map((condition) => (
              <option key={condition} value={condition}>
                {t(condition)}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="flex justify-end space-x-4">
        <Button
          variant="outline"
          onClick={resetFilters}
          className="px-4 py-2"
        >
          {t('resetFilters')}
        </Button>
      </div>
    </div>
  );
} 