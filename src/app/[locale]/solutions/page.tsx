'use client';

import { useTranslations } from 'next-intl';
import { Droplet, PenTool, Sparkles, Palette, ChevronDown, Check, ArrowRight, Zap, Award } from "lucide-react";
import { useState } from 'react';

export default function SolutionsPage() {
  const t = useTranslations();
  const [expandedSolution, setExpandedSolution] = useState<string | null>(null);

  const toggleSolution = (key: string) => {
    setExpandedSolution(expandedSolution === key ? null : key);
  };

  const solutions = [
    {
      key: 'paint',
      title: t('menu.solutions.paint.title'),
      desc: t('solutions_page.paint.desc'),
      detail: t('solutions_page.paint.detail'),
      highlights: [
        t('solutions_page.paint.highlight1'),
        t('solutions_page.paint.highlight2'),
        t('solutions_page.paint.highlight3')
      ],
      icon: <Droplet className="w-10 h-10 text-blue-600" />,
      image: "bg-gradient-to-br from-blue-50 to-white",
      accent: "text-blue-600",
      highlightBg: "bg-blue-50"
    },
    {
      key: 'ink',
      title: t('menu.solutions.ink.title'),
      desc: t('solutions_page.ink.desc'),
      detail: t('solutions_page.ink.detail'),
      highlights: [
        t('solutions_page.ink.highlight1'),
        t('solutions_page.ink.highlight2'),
        t('solutions_page.ink.highlight3')
      ],
      icon: <PenTool className="w-10 h-10 text-purple-600" />,
      image: "bg-gradient-to-br from-purple-50 to-white",
      accent: "text-purple-600",
      highlightBg: "bg-purple-50"
    },
    {
      key: 'beauty',
      title: t('menu.solutions.beauty.title'),
      desc: t('solutions_page.beauty.desc'),
      detail: t('solutions_page.beauty.detail'),
      highlights: [
        t('solutions_page.beauty.highlight1'),
        t('solutions_page.beauty.highlight2'),
        t('solutions_page.beauty.highlight3')
      ],
      icon: <Sparkles className="w-10 h-10 text-pink-600" />,
      image: "bg-gradient-to-br from-pink-50 to-white",
      accent: "text-pink-600",
      highlightBg: "bg-pink-50"
    },
    {
      key: 'art',
      title: t('menu.solutions.art.title'),
      desc: t('solutions_page.art.desc'),
      detail: t('solutions_page.art.detail'),
      highlights: [
        t('solutions_page.art.highlight1'),
        t('solutions_page.art.highlight2'),
        t('solutions_page.art.highlight3')
      ],
      icon: <Palette className="w-10 h-10 text-orange-600" />,
      image: "bg-gradient-to-br from-orange-50 to-white",
      accent: "text-orange-600",
      highlightBg: "bg-orange-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pt-32 pb-20">
      {/* Header */}
      <div className="w-full px-6 lg:px-12 mb-16">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">{t('nav.solutions')}</h1>
        <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
          {t('trends.description')}
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <div 
              key={solution.key} 
              className={`group relative overflow-hidden rounded-3xl border border-gray-100 transition-all duration-500 bg-white ${
                expandedSolution === solution.key ? 'shadow-2xl ring-1 ring-black/5' : 'hover:shadow-xl hover:border-gray-200'
              }`}
            >
              <div className="p-8 md:p-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl ${solution.image} shadow-sm group-hover:scale-105 transition-transform duration-500`}>
                    {solution.icon}
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${solution.highlightBg} ${solution.accent}`}>
                    Solution
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4 text-gray-900">{solution.title}</h3>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">{solution.desc}</p>
                
                {/* Expanded Content */}
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    expandedSolution === solution.key ? 'max-h-[600px] opacity-100 mb-8' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.detail}
                    </p>
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Award className={`w-5 h-5 ${solution.accent}`} /> {t('products_page.core_advantages')}
                    </h4>
                    <ul className="space-y-3">
                      {solution.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-xl">
                          <Check className={`w-5 h-5 ${solution.accent}`} />
                          <span className="font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button 
                  onClick={() => toggleSolution(solution.key)}
                  className={`mt-auto w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                    expandedSolution === solution.key 
                      ? 'bg-black text-white' 
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {expandedSolution === solution.key ? t('solutions_page.collapse_solution') : t('solutions_page.view_solution')}
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                    expandedSolution === solution.key ? 'rotate-180' : 'group-hover/btn:translate-y-1'
                  }`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
