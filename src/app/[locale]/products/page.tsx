'use client';

import { useTranslations } from 'next-intl';
import { Layers, Box, Settings, ChevronDown, Check, Zap, Cpu, BarChart3, PenTool, Beaker, Wrench } from "lucide-react";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ProductsPage() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  useEffect(() => {
    const expand = searchParams.get('expand');
    if (expand) {
      setExpandedProduct(expand);
      // Optional: Scroll to the expanded section after a short delay
      setTimeout(() => {
        const element = document.getElementById(`details-${expand}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }, [searchParams]);

  const toggleProduct = (key: string) => {
    if (expandedProduct === key) {
      setExpandedProduct(null);
    } else {
      setExpandedProduct(key);
      // Optional: Scroll to the expanded section after a short delay
      setTimeout(() => {
        const element = document.getElementById(`details-${key}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const products = [
    {
      key: 'desktop',
      title: t('menu.products.desktop.title'),
      desc: t('menu.products.desktop.desc'),
      icon: <Box className="w-12 h-12 text-blue-600 mb-6" />,
      details: [
        t('products_page.desktop_details.0'),
        t('products_page.desktop_details.1'),
        t('products_page.desktop_details.2'),
        t('products_page.desktop_details.3')
      ],
      extraContent: (
        <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-blue-600" /> {t('products_page.tech_specs')}
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between border-b border-blue-100 pb-2">
                  <span>{t('products_page.min_volume')}</span>
                  <span className="font-bold">0.05g</span>
                </li>
                <li className="flex justify-between border-b border-blue-100 pb-2">
                  <span>{t('products_page.precision')}</span>
                  <span className="font-bold">Delta E &lt; 0.5</span>
                </li>
                <li className="flex justify-between border-b border-blue-100 pb-2">
                  <span>{t('products_page.capacity')}</span>
                  <span className="font-bold">无限云端存储</span>
                </li>
                <li className="flex justify-between">
                  <span>{t('products_page.scenarios')}</span>
                  <span className="font-bold">实验室、美甲美发门店、设计室</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-500" /> {t('products_page.core_advantages')}
              </h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                专为空间有限但对色彩要求极高的环境设计。采用独家微泵技术，即便是极其复杂的色彩配方，也能在几分钟内完美复刻。
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">{t('products_page.fast_response')}</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">{t('products_page.zero_waste')}</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">{t('products_page.silent_run')}</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 text-white p-8 rounded-2xl text-center">
            <h4 className="text-2xl font-bold mb-4">{t('products_page.redefine_workflow')}</h4>
            <p className="text-gray-400 max-w-2xl mx-auto">{t('products_page.redefine_desc')}</p>
          </div>
        </div>
      )
    },
    {
      key: 'industrial',
      title: t('menu.products.industrial.title'),
      desc: t('menu.products.industrial.desc'),
      icon: <Layers className="w-12 h-12 text-purple-600 mb-6" />,
      details: [
        t('products_page.industrial_details.0'),
        t('products_page.industrial_details.1'),
        t('products_page.industrial_details.2'),
        t('products_page.industrial_details.3')
      ],
      extraContent: (
        <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-2xl text-center">
              <BarChart3 className="w-10 h-10 text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold mb-2">{t('products_page.production_boost')}</h4>
              <p className="text-3xl font-black text-purple-700">300%</p>
              <p className="text-sm text-gray-600 mt-2">相比传统人工调色线</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl text-center">
              <Check className="w-10 h-10 text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold mb-2">{t('products_page.pass_rate')}</h4>
              <p className="text-3xl font-black text-purple-700">99.9%</p>
              <p className="text-sm text-gray-600 mt-2">内置光谱仪实时闭环检测</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl text-center">
              <PenTool className="w-10 h-10 text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold mb-2">{t('products_page.maintenance_cost')}</h4>
              <p className="text-3xl font-black text-purple-700">-40%</p>
              <p className="text-sm text-gray-600 mt-2">模块化设计，易于更换</p>
            </div>
          </div>
          <div className="border-l-4 border-purple-600 pl-6 py-2 bg-gray-50 rounded-r-xl">
            <h4 className="text-lg font-bold text-gray-900 mb-2">{t('products_page.industry_4_0')}</h4>
            <p className="text-gray-600">
              {t('products_page.industry_desc')}
            </p>
          </div>
        </div>
      )
    },
    {
      key: 'accessories',
      title: t('menu.products.accessories.title'),
      desc: t('menu.products.accessories.desc'),
      icon: <Settings className="w-12 h-12 text-teal-600 mb-6" />,
      details: [
        t('products_page.accessories_details.0'),
        t('products_page.accessories_details.1'),
        t('products_page.accessories_details.2'),
        t('products_page.accessories_details.3')
      ],
      extraContent: (
        <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Beaker className="w-6 h-6 text-teal-600" /> {t('products_page.consumables')}
              </h4>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex-shrink-0"></div>
                  <div>
                    <h5 className="font-bold text-gray-900">{t('products_page.pigments')}</h5>
                    <p className="text-sm text-gray-500">高浓度、低VOC，色域覆盖广，耐候性强。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex-shrink-0"></div>
                  <div>
                    <h5 className="font-bold text-gray-900">{t('products_page.cleaner')}</h5>
                    <p className="text-sm text-gray-500">有效防止管路堵塞，延长设备寿命。</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Wrench className="w-6 h-6 text-teal-600" /> {t('products_page.service_pack')}
              </h4>
              <div className="bg-teal-50 p-6 rounded-2xl">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-teal-600" /> <span>{t('products_page.quarterly_check')}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-teal-600" /> <span>{t('products_page.parts_replacement')}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-teal-600" /> <span>{t('products_page.support_24h')}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-teal-600" /> <span>{t('products_page.emergency_response')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pt-32 pb-20">
      {/* Header */}
      <div className="w-full px-6 lg:px-12 mb-16">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">{t('nav.products')}</h1>
        <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
          {t('hero.description')}
        </p>
      </div>

      {/* Product Grid */}
      <div className="w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12">
          {products.map((product) => (
            <div 
              key={product.key} 
              className={`group bg-white border border-gray-100 rounded-3xl transition-all duration-500 overflow-hidden ${
                expandedProduct === product.key ? 'shadow-2xl ring-1 ring-black/5' : 'hover:shadow-xl hover:border-gray-200'
              }`}
            >
              {/* Main Card Content */}
              <div className="p-10 grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-6 mb-6">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-300 ${
                      expandedProduct === product.key ? 'bg-black text-white scale-110' : 'bg-gray-50 group-hover:scale-110'
                    }`}>
                      {product.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
                      <p className="text-lg text-gray-500 mt-1">{product.desc}</p>
                    </div>
                  </div>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className={`w-2 h-2 rounded-full mr-3 ${
                          expandedProduct === product.key ? 'bg-black' : 'bg-blue-500'
                        }`}></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-1 flex flex-col justify-center h-full">
                  <button 
                    onClick={() => toggleProduct(product.key)}
                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      expandedProduct === product.key 
                        ? 'bg-black text-white shadow-lg scale-105' 
                        : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {expandedProduct === product.key ? t('products_page.collapse_details') : t('products_page.view_details')}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                      expandedProduct === product.key ? 'rotate-180' : ''
                    }`} />
                  </button>
                </div>
              </div>

              {/* Expandable Details Section */}
              <div 
                id={`details-${product.key}`}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedProduct === product.key ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-10 pt-0 border-t border-gray-100 bg-gray-50/50">
                  <div className="pt-10">
                    {product.extraContent}
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
