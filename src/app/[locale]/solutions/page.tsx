'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shirt, Footprints, Gem, Pipette, Hammer, ArrowRight, MousePointerClick, Sparkles } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import MiniColorMixerModal from '@/components/MiniColorMixerModal';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

export default function SolutionsPage() {
  const t = useTranslations();
  
  // Track global mixer state
  const [isMixerOpen, setIsMixerOpen] = useState(false);

  const solutions = [
    {
      key: 'clothes',
      icon: <Shirt className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80',
      tag: 'FASHION',
      colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
      height: 'h-[400px] lg:h-[500px]',
      mixerRole: '精准色彩配比，让手绘T恤/卫衣的色彩过渡更加自然，持久不掉色。',
      mixerFeatures: ['色彩渐变', '面料适配', '持久固色']
    },
    {
      key: 'shoes',
      icon: <Footprints className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
      tag: 'SNEAKERS',
      colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
      height: 'h-[400px] lg:h-[500px]',
      mixerRole: '专为皮革及帆布材质研发，提供防水耐磨的专属鞋面调色方案。',
      mixerFeatures: ['皮革专用', '防水耐磨', '个性定制']
    },
    {
      key: 'accessories',
      icon: <Gem className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      tag: 'JEWELRY',
      colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
      height: 'h-[400px]',
      mixerRole: '微距级色彩把控，为耳环、项链等小巧饰品注入灵动光泽。',
      mixerFeatures: ['微距调色', '光泽增强', '永不褪色']
    },
    {
      key: 'ceramics',
      icon: <Pipette className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80',
      tag: 'CERAMICS',
      colSpan: 'col-span-1 md:col-span-2 lg:col-span-1',
      height: 'h-[400px]',
      mixerRole: '模拟高温烧制后的釉料色彩变化，实现所见即所得的专业陶瓷配色。',
      mixerFeatures: ['釉料模拟', '窑变预判', '专业色卡']
    },
    {
      key: 'handicrafts',
      icon: <Hammer className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80',
      tag: 'CRAFTS',
      colSpan: 'col-span-1 md:col-span-3 lg:col-span-1',
      height: 'h-[400px]',
      mixerRole: '跨材质色彩融合技术，完美适应木雕、皮具、布艺等多种手工媒介。',
      mixerFeatures: ['跨材质融合', '纹理保留', '无限创意']
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-gray-900 font-sans pb-20">
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-gray-900">
              释放无限创意潜能
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
              用龟彩智能调色机，让每一抹色彩找到属于它的艺术生命
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Core Area */}
      <section className="relative z-20 w-full px-4 lg:px-8 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-[2.5rem] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 backdrop-blur-sm ${item.colSpan} ${item.height}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src={item.image} 
                  alt={t(`menu.solutions.${item.key}.title`)}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
                <div className="transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                      {item.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                      {t(`menu.solutions.${item.key}.title`)}
                    </h2>
                  </div>
                  
                  <p className="text-white/80 text-lg mb-6 line-clamp-2">
                    {t(`solutions_page.${item.key}.desc`)}
                  </p>

                  {/* Interactive Elements (Appears on Hover) - Mixer Role Details */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-5 mb-4">
                      <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        调色机应用
                      </h4>
                      <p className="text-white/80 text-sm leading-relaxed mb-4">
                        {item.mixerRole}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.mixerFeatures.map((feature, i) => (
                          <span key={i} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rainbow Glow on Hover */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/20 rounded-[2.5rem] transition-colors duration-500 pointer-events-none z-20"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom Call to Action with Global Mixer Button */}
      <section className="mt-32 mb-20 text-center px-6">
        <h2 className="text-4xl font-black mb-12 text-gray-900">开始您的色彩之旅</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => setIsMixerOpen(true)}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(236,72,153,0.5)] transition-all"
          >
            <Sparkles className="w-6 h-6" />
            灵感工坊
          </button>
          
          <Link 
            href="/gallery"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all"
          >
            进入用户作品墙 <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Global Floating Mixer */}
      <MiniColorMixerModal 
        isOpen={isMixerOpen}
        onClose={() => setIsMixerOpen(false)}
      />

    </div>
  );
}
