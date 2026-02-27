'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Globe, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    const currentPath = pathname.replace(`/${locale}`, '');
    const newPath = `/${newLocale}${currentPath}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 transition-all border border-gray-200"
      >
        <Globe className="w-4 h-4" />
        <span>Language</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-white shadow-xl border border-gray-100 rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
          <div className="py-1">
            <button
              onClick={() => switchLanguage('zh')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center justify-between ${
                locale === 'zh' ? 'font-bold text-blue-600 bg-blue-50' : 'text-gray-700'
              }`}
            >
              <span>简体中文</span>
              {locale === 'zh' && <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>}
            </button>
            <button
              onClick={() => switchLanguage('en')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center justify-between ${
                locale === 'en' ? 'font-bold text-blue-600 bg-blue-50' : 'text-gray-700'
              }`}
            >
              <span>English</span>
              {locale === 'en' && <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
