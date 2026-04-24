'use client';

import { useTranslations } from 'next-intl';
import { Target, Eye, Heart, ChevronDown } from "lucide-react";
import { useState } from 'react';
import { motion } from "framer-motion";

export default function CulturePage() {
  const t = useTranslations();
  const [expandedValue, setExpandedValue] = useState<string | null>(null);

  const toggleValue = (key: string) => {
    setExpandedValue(expandedValue === key ? null : key);
  };

  const keywords = ["COLOR", "EMPOWER", "VIVIDITY", "HEALTH", "INSPIRATION", "CREATION"];

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
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-20">
      
      {/* Keywords Marquee Section */}
      <section className="pt-32 pb-10 relative z-10 overflow-hidden border-b border-gray-100 bg-white/50 backdrop-blur-sm">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex gap-16 items-center px-8"
          >
            {[...keywords, ...keywords].map((keyword, idx) => (
              <div key={idx} className="flex items-center gap-16">
                <span className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 tracking-widest">
                  {keyword}
                </span>
                <span className="w-4 h-4 rounded-full bg-blue-500/20"></span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Header */}
      <div className="w-full px-6 lg:px-12 mt-20 mb-20 text-center">
        <h1 className="text-5xl font-extrabold mb-8 tracking-tight">{t('nav.about')}</h1>
        <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed italic">
          "{t('hero.subtitle_1')}
        </p>
        <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed italic">
          {t('hero.subtitle_2')}"
        </p>
      </div>

      {/* Culture Values - Products Style Layout */}
      <div className="w-full px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-1 gap-12">
          {values.map((value) => (
            <div 
              key={value.key} 
              id={value.key}
              className={`group bg-white border border-gray-100 rounded-3xl transition-all duration-500 overflow-hidden ${
                expandedValue === value.key ? 'shadow-2xl ring-1 ring-black/5' : 'hover:shadow-xl hover:border-gray-200'
              }`}
            >
              {/* Main Card Content */}
              <div className="p-10 grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-6 mb-6">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-300 ${
                      expandedValue === value.key ? 'bg-black text-white scale-110' : `${value.bg} group-hover:scale-110`
                    }`}>
                      {value.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{value.title}</h2>
                      <p className="text-lg text-gray-500 mt-1">{value.desc}</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-1 flex flex-col justify-center h-full">
                  <button 
                    onClick={() => toggleValue(value.key)}
                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      expandedValue === value.key 
                        ? 'bg-black text-white shadow-lg scale-105' 
                        : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {expandedValue === value.key ? t('products_page.collapse_details') : t('products_page.view_details')}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                      expandedValue === value.key ? 'rotate-180' : ''
                    }`} />
                  </button>
                </div>
              </div>

              {/* Expandable Details Section */}
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedValue === value.key ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-10 pt-0 border-t border-gray-100 bg-gray-50/50">
                  <div className="pt-10 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm text-lg text-gray-700 leading-relaxed">
                      {value.detail}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
