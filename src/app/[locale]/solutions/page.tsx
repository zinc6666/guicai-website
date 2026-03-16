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
        <div className="grid grid-cols-1 gap-12">
          {solutions.map((solution) => (
            <div 
              key={solution.key} 
              className={`group bg-white border border-gray-100 rounded-3xl transition-all duration-500 overflow-hidden ${
                expandedSolution === solution.key ? 'shadow-2xl ring-1 ring-black/5' : 'hover:shadow-xl hover:border-gray-200'
              }`}
            >
              {/* Main Card Content */}
              <div className="p-10 grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-6 mb-6">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-300 ${
                      expandedSolution === solution.key ? 'bg-black text-white scale-110' : 'bg-gray-50 group-hover:scale-110'
                    }`}>
                      {solution.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{solution.title}</h2>
                      <p className="text-lg text-gray-500 mt-1">{solution.desc}</p>
                    </div>
                  </div>
                  
                  {/* Optional: Show highlights as list items here if desired, or keep them in the expanded section. Let's keep them in expanded section like before to match products, or show them here. Let's put a brief text here if needed, or just leave it. Products page has `details` here. We can use `highlights` here. */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {solution.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className={`w-2 h-2 rounded-full mr-3 ${
                          expandedSolution === solution.key ? 'bg-black' : 'bg-blue-500'
                        }`}></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-1 flex flex-col justify-center h-full">
                  <button 
                    onClick={() => toggleSolution(solution.key)}
                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      expandedSolution === solution.key 
                        ? 'bg-black text-white shadow-lg scale-105' 
                        : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {expandedSolution === solution.key ? t('solutions_page.collapse_solution') : t('solutions_page.view_solution')}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                      expandedSolution === solution.key ? 'rotate-180' : ''
                    }`} />
                  </button>
                </div>
              </div>

              {/* Expandable Details Section */}
              <div 
                id={`details-${solution.key}`}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedSolution === solution.key ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-10 pt-0 border-t border-gray-100 bg-gray-50/50">
                  <div className="pt-10 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {solution.detail}
                      </p>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Award className={`w-6 h-6 ${solution.accent}`} /> {t('products_page.core_advantages')}
                      </h4>
                      <ul className="grid md:grid-cols-3 gap-4">
                        {solution.highlights.map((highlight, index) => (
                          <li key={index} className={`flex items-center gap-3 text-gray-700 ${solution.highlightBg} p-4 rounded-xl`}>
                            <Check className={`w-5 h-5 ${solution.accent}`} />
                            <span className="font-medium">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
