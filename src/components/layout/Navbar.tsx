"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Link } from '@/lib/i18n';
import { MENU_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Locale } from '@/lib/i18n';

type NavbarProps = {
  locale: Locale;
};

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'relative w-full z-20 transition-all duration-200',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Desktop Navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="font-bold text-xl text-blue-600">
                PEKCON KONTEYNER
              </Link>
            </div>
            <div className="hidden md:ml-10 md:block">
              <div className="flex items-center space-x-4">
                {MENU_ITEMS.map((item) => {
                  const label = item.label[locale];
                  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                  
                  // If item has submenu
                  if (item.subMenu) {
                    return (
                      <div key={item.id} className="relative group">
                        <Link
                          href={item.href}
                          className={cn(
                            'px-3 py-2 rounded-md text-sm font-medium hover:text-blue-600 hover:bg-gray-50',
                            isActive ? 'text-blue-600' : 'text-gray-700'
                          )}
                        >
                          {label}
                          <svg
                            className="inline-block ml-1 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                        <div className="hidden group-hover:block absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {item.subMenu.map((subItem) => {
                              const subLabel = subItem.label[locale];
                              const isSubActive = pathname === subItem.href;
                              
                              return (
                                <Link
                                  key={subItem.id}
                                  href={subItem.href}
                                  className={cn(
                                    'block px-4 py-2 text-sm hover:bg-gray-100',
                                    isSubActive ? 'text-blue-600 bg-gray-50' : 'text-gray-700'
                                  )}
                                >
                                  {subLabel}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  // Regular menu item
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={cn(
                        'px-3 py-2 rounded-md text-sm font-medium hover:text-blue-600 hover:bg-gray-50',
                        isActive ? 'text-blue-600' : 'text-gray-700'
                      )}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {MENU_ITEMS.map((item) => {
              const label = item.label[locale];
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              
              // If item has submenu
              if (item.subMenu) {
                return (
                  <div key={item.id} className="py-2">
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-3 py-2 rounded-md text-base font-medium',
                        isActive ? 'text-blue-600 bg-gray-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                    <div className="pl-4 mt-1">
                      {item.subMenu.map((subItem) => {
                        const subLabel = subItem.label[locale];
                        const isSubActive = pathname === subItem.href;
                        
                        return (
                          <Link
                            key={subItem.id}
                            href={subItem.href}
                            className={cn(
                              'block px-3 py-2 rounded-md text-sm',
                              isSubActive ? 'text-blue-600 bg-gray-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subLabel}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              
              // Regular menu item
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium',
                    isActive ? 'text-blue-600 bg-gray-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
} 