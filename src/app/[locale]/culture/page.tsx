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

      {/* Culture Values */}
      <div className="w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value) => (
            <div 
              key={value.key} 
              className={`rounded-3xl p-12 ${value.bg} border-2 ${value.border} text-center group hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden`}
              onClick={() => toggleValue(value.key)}
            >
              <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center shadow-md mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">{value.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{value.desc}</p>
              
              {/* Expand Indicator */}
              <div className={`flex justify-center transition-transform duration-300 ${expandedValue === value.key ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-6 h-6 text-gray-400" />
              </div>

              {/* Expandable Content */}
              <div 
                className={`grid transition-all duration-500 ease-in-out ${
                  expandedValue === value.key ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-700 leading-relaxed text-left bg-white/50 p-6 rounded-xl backdrop-blur-sm">
                    {value.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="mt-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">{t('culture_page.story.title')}</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                {t('culture_page.story.p1')}
              </p>
              <p>
                {t('culture_page.story.p2')}
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-96 flex items-center justify-center">
            {/* Placeholder for an image */}
            <span className="text-gray-400 font-medium">公司环境/团队合影</span>
          </div>
        </div>
      </div>
    </div>
  );
}
