"use client";

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { FiSearch, FiFilter, FiBox, FiMaximize2, FiX } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';
import { TbBoxPadding } from 'react-icons/tb';
import { motion } from 'framer-motion';

// Konteyner tipi tanımı
type ContainerType = {
  id: string;
  name: string;
  slug: string;
  category: string;
  size: string;
};

// Konteyner tipi kategorileri
const containerCategories = [
  { id: 'all', tr: 'Tümü', en: 'All' },
  { id: 'dry', tr: 'Dry', en: 'Dry' },
  { id: 'high-cube', tr: 'High Cube', en: 'High Cube' },
  { id: 'open-top', tr: 'Open Top', en: 'Open Top' },
  { id: 'flat-rack', tr: 'Flat Rack', en: 'Flat Rack' },
  { id: 'reefer', tr: 'Reefer', en: 'Reefer' },
  { id: 'tank', tr: 'Tank', en: 'Tank' },
  { id: 'double-door', tr: 'Double Door', en: 'Double Door' },
  { id: 'open-side', tr: 'Open Side', en: 'Open Side' },
  { id: 'other', tr: 'Diğer', en: 'Other' },
];

// Boyut kategorileri
const sizeCategories = [
  { id: 'all', tr: 'Tümü', en: 'All' },
  { id: '10', tr: '10\'', en: '10\'' },
  { id: '20', tr: '20\'', en: '20\'' },
  { id: '40', tr: '40\'', en: '40\'' },
  { id: '45', tr: '45\'', en: '45\'' },
];

// Konteyner tiplerine göre ikon seçme
const getContainerIcon = (category: string) => {
  switch(category) {
    case 'dry':
      return <BsBoxSeam className="w-6 h-6" />;
    case 'high-cube':
      return <FiMaximize2 className="w-6 h-6" />;
    case 'open-top':
      return <TbBoxPadding className="w-6 h-6" />;
    case 'flat-rack':
      return <FiBox className="w-6 h-6" />;
    default:
      return <BsBoxSeam className="w-6 h-6" />;
  }
};

interface ContainerSearchListProps {
  locale: Locale;
}

export default function ContainerSearchList({ locale }: ContainerSearchListProps) {
  // containerTypes dizisini useMemo ile sarmalıyoruz
  const containerTypes = useMemo<ContainerType[]>(() => [
    { id: '1', name: '20\' Dry Konteyner', slug: '20-dry-konteyner', category: 'dry', size: '20' },
    { id: '2', name: '40\' Dry Konteyner', slug: '40-dry-konteyner', category: 'dry', size: '40' },
    { id: '3', name: '40\' High Cube Konteyner', slug: '40-high-cube-konteyner', category: 'high-cube', size: '40' },
    { id: '4', name: '45\' High Cube Konteyner', slug: '45-high-cube-konteyner', category: 'high-cube', size: '45' },
    { id: '5', name: '20\' Flat Rack Konteyner', slug: '20-flat-rack-konteyner', category: 'flat-rack', size: '20' },
    { id: '6', name: '40\' Flat Rack Konteyner', slug: '40-flat-rack-konteyner', category: 'flat-rack', size: '40' },
    { id: '7', name: '20\' Open Top Konteyner', slug: '20-open-top-konteyner', category: 'open-top', size: '20' },
    { id: '8', name: '40\' Open Top Konteyner', slug: '40-open-top-konteyner', category: 'open-top', size: '40' },
    { id: '9', name: '10\' Feet Konteyner', slug: '10-feet-konteyner', category: 'other', size: '10' },
    { id: '10', name: 'Off Shore Konteyner', slug: 'off-shore-konteyner', category: 'other', size: 'all' },
    { id: '11', name: '20\' Platform Konteyner', slug: '20-platform-konteyner', category: 'other', size: '20' },
    { id: '12', name: '40\' Platform Konteyner', slug: '40-platform-konteyner', category: 'other', size: '40' },
    { id: '13', name: '20\' Reefer Konteyner', slug: '20-reefer-konteyner', category: 'reefer', size: '20' },
    { id: '14', name: '40\' Reefer Konteyner', slug: '40-reefer-konteyner', category: 'reefer', size: '40' },
    { id: '15', name: '20\' Tank Konteyner', slug: '20-tank-konteyner', category: 'tank', size: '20' },
    { id: '16', name: '40\' Tank Konteyner', slug: '40-tank-konteyner', category: 'tank', size: '40' },
    { id: '17', name: '20\' Double Door Konteyner', slug: '20-double-door-konteyner', category: 'double-door', size: '20' },
    { id: '18', name: '40\' DC Double Door Konteyner', slug: '40-dc-double-door-konteyner', category: 'double-door', size: '40' },
    { id: '19', name: '40\' HC Double Door Konteyner', slug: '40-hc-double-door-konteyner', category: 'double-door', size: '40' },
    { id: '20', name: '45\' HC Curtain Side Konteyner', slug: '45-hc-curtain-side-konteyner', category: 'other', size: '45' },
    { id: '21', name: '20\' DC Open Side Konteyner', slug: '20-dc-open-side-konteyner', category: 'open-side', size: '20' },
    { id: '22', name: '40\' DC Open Side Konteyner', slug: '40-dc-open-side-konteyner', category: 'open-side', size: '40' },
    { id: '23', name: '40\' HC Open Side Konteyner', slug: '40-hc-open-side-konteyner', category: 'open-side', size: '40' },
    { id: '24', name: '20\' DV Bulk Konteyner', slug: '20-dv-bulk-konteyner', category: 'other', size: '20' },
    { id: '25', name: 'Yaşam Konteyneri', slug: 'yasam-konteyneri', category: 'other', size: 'all' },
  ], []);
  
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [filteredContainers, setFilteredContainers] = useState(containerTypes);
  const [activeTab, setActiveTab] = useState('all');
  
  // Filtre işlemi
  useEffect(() => {
    const filtered = containerTypes.filter(container => {
      // Arama filtresi
      const matchesSearch = container.name.toLowerCase().includes(searchText.toLowerCase());
      
      // Kategori filtresi
      const matchesCategory = selectedCategory === 'all' || container.category === selectedCategory;
      
      // Boyut filtresi
      const matchesSize = selectedSize === 'all' || container.size === selectedSize;
      
      return matchesSearch && matchesCategory && matchesSize;
    });
    
    setFilteredContainers(filtered);
  }, [searchText, selectedCategory, selectedSize, containerTypes]);

  // Kategoriye göre konteyner sayısını hesaplama
  const getCategoryCount = (category: string) => {
    return containerTypes.filter(
      container => category === 'all' || container.category === category
    ).length;
  };
  
  return (
    <>
      {/* Kategori sekmeler - Yeni eklenen */}
      <div className="mb-6 overflow-x-auto">
        <div className="inline-flex space-x-2 border-b-2 border-gray-100 w-full pb-2">
          {containerCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setActiveTab(category.id);
                setSelectedCategory(category.id);
              }}
              className={`px-4 py-3 rounded-lg font-medium text-sm whitespace-nowrap flex items-center transition-all ${
                activeTab === category.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{locale === 'tr' ? category.tr : category.en}</span>
              <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-white bg-opacity-20">
                {getCategoryCount(category.id)}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Arama ve Filtreleme Alanı - Yeniden tasarlandı */}
      <div className="bg-white p-5 rounded-xl shadow-sm mb-8 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Arama Kutusu */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-blue-500" />
              </div>
              <input
                type="text"
                placeholder={locale === 'tr' ? 'Konteyner ara...' : 'Search containers...'}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {searchText && (
                <button
                  onClick={() => setSearchText('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <FiX className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
          
          {/* Filtreleme Seçenekleri */}
          <div className="flex gap-4">
            {/* Boyut Filtresi */}
            <div className="w-full md:w-48">
              <select
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="block w-full px-4 py-3 text-base border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="" disabled>
                  {locale === 'tr' ? 'Boyut seçin' : 'Select size'}
                </option>
                {sizeCategories.map((size) => (
                  <option key={size.id} value={size.id}>
                    {locale === 'tr' ? size.tr : size.en}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Filtrelenmiş sonuç bilgisi */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm font-medium text-gray-500 bg-gray-100 px-4 py-2 rounded-lg">
          {locale === 'tr' 
            ? `${filteredContainers.length} konteyner bulundu` 
            : `${filteredContainers.length} containers found`}
        </div>
      </div>
      
      {/* Konteyner Listesi */}
      {filteredContainers.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-200"
        >
          <div className="bg-gray-100 p-4 rounded-full mb-4">
            <BsBoxSeam className="h-10 w-10 text-gray-400" />
          </div>
          <p className="text-gray-500 font-medium mb-1">
            {locale === 'tr' 
              ? 'Arama kriterlerinize uygun konteyner bulunamadı.' 
              : 'No containers found matching your search criteria.'}
          </p>
          <p className="text-gray-400 text-sm">
            {locale === 'tr' 
              ? 'Farklı arama kriterleri deneyin.' 
              : 'Try different search criteria.'}
          </p>
          <button 
            onClick={() => {
              setSearchText('');
              setSelectedCategory('all');
              setSelectedSize('all');
              setActiveTab('all');
            }}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            {locale === 'tr' ? 'Filtreleri Temizle' : 'Clear Filters'}
          </button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredContainers.map((container, index) => (
            <motion.div
              key={container.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            >
              <Link 
                href={locale === 'tr' 
                  ? `/tr/konteynerlar/${container.slug}` 
                  : `/en/containers/${container.slug}`
                } 
                className="block h-full"
              >
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                  <div className="p-5 flex items-center gap-4 border-b border-gray-100">
                    <div className={`p-3 rounded-lg ${
                      container.category === 'dry' ? 'bg-blue-50 text-blue-600' :
                      container.category === 'high-cube' ? 'bg-purple-50 text-purple-600' :
                      container.category === 'open-top' ? 'bg-green-50 text-green-600' :
                      container.category === 'flat-rack' ? 'bg-orange-50 text-orange-600' :
                      container.category === 'reefer' ? 'bg-cyan-50 text-cyan-600' :
                      container.category === 'tank' ? 'bg-red-50 text-red-600' :
                      container.category === 'double-door' ? 'bg-yellow-50 text-yellow-600' :
                      container.category === 'open-side' ? 'bg-teal-50 text-teal-600' :
                      'bg-gray-50 text-gray-600'
                    }`}>
                      {getContainerIcon(container.category)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{container.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {container.size === 'all' ? '' : container.size + '\' '}
                        {locale === 'tr' ? 
                          containerCategories.find(c => c.id === container.category)?.tr :
                          containerCategories.find(c => c.id === container.category)?.en
                        }
                      </p>
                    </div>
                  </div>
                  <div className="p-5 bg-gray-50 flex-grow flex items-center justify-center">
                    <div className="flex items-center justify-center w-full text-center">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {locale === 'tr' ? 'Detaylar' : 'Details'}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
} 