'use client';

import { useTranslations } from 'next-intl';
import { Target, Eye, Heart, ChevronDown } from "lucide-react";
import { useState } from 'react';

export default function CulturePage() {
  const t = useTranslations();
  const [expandedValue, setExpandedValue] = useState<string | null>(null);

  const toggleValue = (key: string) => {
    setExpandedValue(expandedValue === key ? null : key);
  };

  const values = [
    {
      key: 'mission',
      title: t('menu.culture.mission.title'),
      desc: t('menu.culture.mission.desc'),
      detail: t('menu.culture.mission.detail'),
      icon: <Target className="w-12 h-12 text-red-500" />,
      bg: "bg-red-50",
      border: "border-red-100"
    },
    {
      key: 'vision',
      title: t('menu.culture.vision.title'),
      desc: t('menu.culture.vision.desc'),
      detail: t('menu.culture.vision.detail'),
      icon: <Eye className="w-12 h-12 text-blue-500" />,
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      key: 'values',
      title: t('menu.culture.values.title'),
      desc: t('menu.culture.values.desc'),
      detail: t('menu.culture.values.detail'),
      icon: <Heart className="w-12 h-12 text-pink-500" />,
      bg: "bg-pink-50",
      border: "border-pink-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pt-32 pb-20">
      {/* Header */}
      <div className="w-full px-6 lg:px-12 mb-20 text-center">
        <h1 className="text-5xl font-extrabold mb-8 tracking-tight">{t('nav.about')}</h1>
        <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed italic">
          "{t('hero.subtitle')}"
        </p>
      </div>

      {/* Culture Values - Desktop Horizontal Accordion & Mobile Vertical Stack */}
      <div className="w-full px-6 lg:px-12 mb-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 md:h-[600px]">
          {values.map((value) => {
            const isExpanded = expandedValue === value.key;
            return (
              <div 
                key={value.key}
                id={value.key} 
                className={`
                  relative rounded-3xl border-2 ${value.border} ${value.bg} overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer
                  flex flex-col
                  ${/* Mobile styles */ ''}
                  w-full md:w-auto
                  ${/* Desktop styles */ ''}
                  md:h-full
                  ${isExpanded ? 'md:flex-[3]' : 'md:flex-1 hover:md:flex-[1.2]'}
                `}
                onClick={() => toggleValue(value.key)}
              >
                {/* Content Container */}
                <div className="flex flex-col h-full p-8 md:p-10 relative z-10">
                  {/* Icon & Header */}
                  <div className={`flex flex-col md:flex-row items-center md:items-start gap-6 transition-all duration-500 ${isExpanded ? 'md:mb-8' : 'md:mb-0 md:justify-center md:h-full'}`}>
                    <div className={`bg-white w-20 h-20 md:w-24 md:h-24 rounded-full flex-shrink-0 flex items-center justify-center shadow-md transition-all duration-500 ${isExpanded ? '' : 'md:scale-110'}`}>
                      {value.icon}
                    </div>
                    
                    <div className={`text-center md:text-left transition-all duration-500 ${isExpanded ? 'opacity-100' : 'md:opacity-0 md:w-0 md:hidden'}`}>
                      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 whitespace-nowrap">{value.title}</h2>
                      <p className="text-gray-600 font-medium">{value.desc}</p>
                    </div>
                  </div>

                  {/* Collapsed Title for Desktop (Vertical Mode) */}
                  {!isExpanded && (
                    <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
                      <div className="mt-32 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{value.title}</h2>
                        <ChevronDown className="w-6 h-6 text-gray-400 mx-auto animate-bounce mt-4" />
                      </div>
                    </div>
                  )}

                  {/* Detail Content (Desktop & Mobile) */}
                  <div 
                    className={`
                      transition-all duration-700 ease-in-out overflow-hidden
                      ${/* Mobile: Grid Expand */ ''}
                      ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6 md:mt-0' : 'grid-rows-[0fr] opacity-0 h-0 md:h-auto'}
                      md:block md:flex-1
                    `}
                  >
                     <div className={`${isExpanded ? 'block' : 'hidden'} md:block h-full overflow-y-auto pr-2 custom-scrollbar`}>
                        <div className="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl text-lg text-gray-700 leading-relaxed shadow-sm border border-white/50">
                          {value.detail}
                        </div>
                     </div>
                  </div>
                  
                  {/* Mobile Toggle Icon */}
                  <div className={`md:hidden flex justify-center mt-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </div>
                </div>

                {/* Background Decoration */}
                <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            );
          })}
        </div>
      </div>

        {/* Story Section */}
        <div className="w-full px-6 lg:px-12 mt-24 grid md:grid-cols-2 gap-16 items-start">
          <div className="prose prose-lg text-gray-600">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">{t('culture_page.story.title')}</h2>
            <div className="space-y-6 leading-relaxed">
              <p>{t('culture_page.story.p1')}</p>
              <p>{t('culture_page.story.p2')}</p>
              <p>{t('culture_page.story.p3')}</p>
              <p>{t('culture_page.story.p4')}</p>
              <p>{t('culture_page.story.p5')}</p>
            </div>
          </div>
          <div className="sticky top-32">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-[600px] flex items-center justify-center shadow-lg">
              {/* Placeholder for an image */}
              <span className="text-gray-400 font-medium">公司环境/团队合影</span>
            </div>
          </div>
        </div>
      </div>
  );
}
