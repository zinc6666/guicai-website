'use client';

import Link from "next/link";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const t = useTranslations();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      key: 'products',
      href: '/products',
      label: t('nav.products'),
      type: 'mega',
      subItems: [
        { key: 'desktop', title: t('menu.products.desktop.title'), desc: t('menu.products.desktop.desc') },
        { key: 'industrial', title: t('menu.products.industrial.title'), desc: t('menu.products.industrial.desc') },
        { key: 'accessories', title: t('menu.products.accessories.title'), desc: t('menu.products.accessories.desc') },
      ]
    },
    {
      key: 'solutions',
      href: '/solutions',
      label: t('nav.solutions'),
      type: 'mega',
      subItems: [
        { key: 'paint', title: t('menu.solutions.paint.title'), desc: t('menu.solutions.paint.desc') },
        { key: 'ink', title: t('menu.solutions.ink.title'), desc: t('menu.solutions.ink.desc') },
        { key: 'beauty', title: t('menu.solutions.beauty.title'), desc: t('menu.solutions.beauty.desc') },
        { key: 'art', title: t('menu.solutions.art.title'), desc: t('menu.solutions.art.desc') },
      ]
    },
    {
      key: 'about',
      href: '/about',
      label: t('nav.sustainability'),
      type: 'dropdown',
      subItems: [
        { key: 'intro', title: t('menu.about.intro.title'), desc: t('menu.about.intro.desc') },
        { key: 'team', title: t('menu.about.team.title'), desc: t('menu.about.team.desc') },
        { key: 'patents', title: t('menu.about.patents.title'), desc: t('menu.about.patents.desc') },
      ]
    },
    {
      key: 'culture',
      href: '/culture',
      label: t('nav.about'),
      type: 'dropdown',
      subItems: [
        { key: 'mission', title: t('menu.culture.mission.title'), desc: t('menu.culture.mission.desc') },
        { key: 'vision', title: t('menu.culture.vision.title'), desc: t('menu.culture.vision.desc') },
        { key: 'values', title: t('menu.culture.values.title'), desc: t('menu.culture.values.desc') },
      ]
    },
  ];

  return (
    <nav className="fixed w-full bg-gradient-to-r from-red-100/80 via-yellow-100/80 via-green-100/80 via-teal-100/80 via-blue-100/80 to-purple-100/80 backdrop-blur-md z-50 border-b border-gray-100/50" onMouseLeave={() => setHoveredMenu(null)}>
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-20"> {/* Increased height slightly for comfort */}
          <Link href="/" className="flex items-center gap-1">
            {/* Gradient GUICAI Logo for Navigation */}
            <span className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 via-green-500 via-teal-500 via-blue-600 to-purple-600">GUICAI龟彩</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10 h-full ml-auto mr-8"> {/* Increased space-x, moved to right with ml-auto */}
            {menuItems.map((item) => (
              <div 
                key={item.key}
                className="relative h-full flex items-center group"
                onMouseEnter={() => setHoveredMenu(item.key)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link 
                  href={item.href} 
                  className={`relative px-2 py-2 text-base font-medium transition-colors duration-200 ${
                    hoveredMenu === item.key ? 'text-black' : 'text-gray-600 hover:text-black'
                  }`}
                  onClick={() => setHoveredMenu(null)}
                >
                  {item.label}
                  {/* Underline animation */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-300 ease-out ${
                    hoveredMenu === item.key ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </Link>

                {/* Dropdown Logic */}
                {hoveredMenu === item.key && (
                  <>
                    {/* Full Width Mega Menu for Products & Solutions */}
                    {item.type === 'mega' && (
                      <div className="fixed top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] py-12 animate-in fade-in slide-in-from-top-2 duration-500 ease-out z-40">
                        <div className="w-full px-6 lg:px-12">
                          <div className="grid grid-cols-4 gap-12">
                            {/* Header for the section */}
                            <div className="col-span-1 border-r border-gray-100 pr-8">
                              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.label}</h3>
                              <p className="text-gray-500 leading-relaxed">
                                {item.key === 'products' 
                                  ? t('hero.description') 
                                  : t('trends.description')}
                              </p>
                              <Link 
                                href={item.href} 
                                className="inline-flex items-center mt-6 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                                onClick={() => setHoveredMenu(null)}
                              >
                                View All <ChevronRight className="w-4 h-4 ml-1" />
                              </Link>
                            </div>
                            
                            {/* Sub items grid */}
                            <div className="col-span-3 grid grid-cols-3 gap-8">
                              {item.subItems.map((subItem) => (
                                <Link 
                                  key={subItem.key} 
                                  href={`${item.href}?expand=${subItem.key}`}
                                  className="group/item cursor-pointer p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 block"
                                  onClick={() => setHoveredMenu(null)}
                                >
                                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover/item:text-blue-600 transition-colors">{subItem.title}</h4>
                                  <p className="text-sm text-gray-500 leading-relaxed">{subItem.desc}</p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Vertical Dropdown for About & Culture */}
                    {item.type === 'dropdown' && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-72">
                        <div className="bg-white/95 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 rounded-2xl p-3 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-500 ease-out">
                          {item.subItems.map((subItem) => (
                            <div key={subItem.key} className="px-5 py-4 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors duration-200 group/item">
                              <h4 className="text-base font-bold text-gray-900 mb-1 group-hover/item:text-blue-600 transition-colors">{subItem.title}</h4>
                              <p className="text-xs text-gray-500">{subItem.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <LanguageSwitcher />
            <Link href="/contact" className="px-6 py-2.5 bg-black text-white rounded-full text-base font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-200">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-black"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-lg h-[calc(100vh-5rem)] overflow-y-auto z-40">
          <div className="px-6 py-8 space-y-8">
            {menuItems.map((item) => (
              <div key={item.key} className="space-y-4">
                <Link 
                  href={item.href}
                  className="block text-xl font-bold text-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                <div className="pl-4 space-y-4 border-l-2 border-gray-100">
                  {item.subItems.map((subItem) => (
                    <div key={subItem.key}>
                      <h4 className="text-base font-medium text-gray-800">{subItem.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{subItem.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-8 border-t border-gray-100">
              <Link 
                href="/contact" 
                className="block w-full text-center px-6 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
