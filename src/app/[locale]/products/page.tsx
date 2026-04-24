'use client';

import Link from "next/link";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { Layers, Box, Settings, ChevronDown, Check, Zap, Cpu, BarChart3, PenTool, Beaker, Wrench, ArrowRight } from "lucide-react";
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
                  <span className="font-bold">{t('products_page.capacity_value')}</span>
                </li>
                <li className="flex justify-between">
                  <span>{t('products_page.scenarios')}</span>
                  <span className="font-bold">{t('products_page.scenarios_value')}</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-500" /> {t('products_page.core_advantages')}
              </h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('products_page.core_advantages_desc')}
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
          <div className="grid md:grid-cols-1 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Beaker className="w-6 h-6 text-teal-600" /> {t('products_page.consumables')}
              </h4>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-teal-500"></div>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{t('products_page.pigments')}</h5>
                    <p className="text-sm text-gray-500 mt-2">高浓度、低VOC，色域覆盖广，耐候性强，专为高精度分配定制。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 font-sans pb-32 overflow-hidden selection:bg-blue-500/30">
      
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-100 via-purple-50 to-transparent blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-gradient-to-tl from-cyan-100 via-transparent to-transparent blur-[100px] rounded-full"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>

      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-32 px-6 lg:px-12 flex flex-col items-center text-center z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-200 mb-8 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-gray-600 tracking-wider">CORE PRODUCTS</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500">
              {t('nav.products')}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-normal">
            {t('hero.description')}
          </p>
        </motion.div>
      </section>

      {/* Product Grid */}
      <div className="w-full px-6 lg:px-12 relative z-10 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 gap-12">
          {products.map((product) => (
            <div 
              key={product.key} 
              className={`group bg-white border border-gray-100 rounded-[3rem] transition-all duration-700 overflow-hidden relative z-10 ${
                expandedProduct === product.key ? 'shadow-2xl shadow-blue-900/5 ring-1 ring-blue-100 scale-[1.01] z-20' : 'hover:shadow-xl hover:border-gray-200'
              }`}
            >
              {/* Main Card Content */}
              <div className="p-10 grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-6 mb-6">
                    <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center shadow-md transition-transform duration-500 border border-gray-100 bg-white group-hover:scale-105`}>
                      <div>
                        {product.icon}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-4xl font-black text-gray-900 tracking-tight flex items-center flex-wrap gap-x-2">
                        {product.title.includes('全球首款') || product.title.includes("World's First") ? (
                          <>
                            <span className="relative inline-block">
                              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-20 blur animate-pulse"></span>
                              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                {product.title.substring(0, product.title.includes('全球首款') ? 4 : 13)}
                              </span>
                            </span>
                            <span>{product.title.substring(product.title.includes('全球首款') ? 4 : 13)}</span>
                          </>
                        ) : (
                          product.title
                        )}
                      </h2>
                      <p className="text-xl text-gray-500 mt-2 font-medium">{product.desc}</p>
                    </div>
                  </div>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-center text-gray-600 text-lg">
                        <div className={`w-2.5 h-2.5 rounded-full mr-4 flex-shrink-0 ${
                          expandedProduct === product.key ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-gray-300'
                        }`}></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-1 flex flex-col justify-center h-full">
                  <button 
                    onClick={() => toggleProduct(product.key)}
                    className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-500 flex items-center justify-center gap-3 ${
                      expandedProduct === product.key 
                        ? 'bg-gray-900 text-white shadow-2xl scale-105' 
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
                    }`}
                  >
                    {expandedProduct === product.key ? t('products_page.collapse_details') : t('products_page.view_details')}
                    <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${
                      expandedProduct === product.key ? 'rotate-180' : ''
                    }`} />
                  </button>
                </div>
              </div>

              {/* Expandable Details Section */}
              <div 
                id={`details-${product.key}`}
                className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                  expandedProduct === product.key ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-10 pt-0 border-t border-gray-100 bg-gray-50/30">
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
