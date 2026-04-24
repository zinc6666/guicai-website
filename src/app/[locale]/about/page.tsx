'use client';

import Link from "next/link";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { Cpu, Zap, ShieldCheck, ArrowRight, Fingerprint, Sparkles, Globe } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations();

  const stats = [
    { key: 'stat1', icon: <Fingerprint className="w-8 h-8 text-blue-500" /> },
    { key: 'stat2', icon: <Globe className="w-8 h-8 text-cyan-500" /> },
    { key: 'stat3', icon: <Zap className="w-8 h-8 text-purple-500" /> },
    { key: 'stat4', icon: <Sparkles className="w-8 h-8 text-pink-500" /> }
  ];

  const keywords = ["COLOR", "EMPOWER", "VIVIDITY", "HEALTH", "INSPIRATION", "CREATION"];

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 font-sans pb-32 overflow-hidden selection:bg-blue-500/30">
      
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-100 via-purple-50 to-transparent blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-gradient-to-tl from-cyan-100 via-transparent to-transparent blur-[100px] rounded-full"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>

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

      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-32 px-6 lg:px-12 flex flex-col items-center text-center z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-200 mb-8 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-gray-600 tracking-wider">GUICAI TECHNOLOGY</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500">
              {t('about_page.hero.title')}
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-8 leading-relaxed max-w-4xl mx-auto tracking-wide">
            {t('about_page.hero.subtitle')}
          </p>
          
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-normal">
            {t('about_page.hero.desc')}
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, staggerChildren: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.key}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group rounded-[2rem] bg-white border border-gray-100 p-8 backdrop-blur-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 tracking-tight">
                  {t(`about_page.stats.${stat.key}.value`)}
                </h3>
                <p className="text-gray-500 font-medium tracking-wide">
                  {t(`about_page.stats.${stat.key}.label`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Advanced Bento Grid Content */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          
          {/* Main Large Card */}
          <motion.div 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-8 bg-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden group border border-gray-100 shadow-2xl flex flex-col justify-end min-h-[450px]"
          >
            {/* Animated Mesh/Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] group-hover:bg-blue-200/40 transition-colors duration-700"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="mb-auto pb-10">
                <Cpu className="w-12 h-12 text-gray-400 group-hover:text-blue-500 transition-colors duration-500" />
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-gray-900 mt-auto">
                {t('about_page.cards.intro.title')}
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl font-normal">
                {t('about_page.cards.intro.desc')}
              </p>
            </div>
          </motion.div>

          {/* Right Stack Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8 h-full">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-white backdrop-blur-2xl rounded-[3rem] p-10 border border-gray-100 shadow-xl flex-1 group hover:border-gray-200 transition-colors relative overflow-hidden flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 blur-[50px] rounded-full"></div>
              <div className="relative z-10">
                <ShieldCheck className="w-10 h-10 text-gray-400 mb-8 group-hover:text-blue-500 transition-colors duration-500" />
                <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
                  {t('about_page.cards.team.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg font-normal">
                  {t('about_page.cards.team.desc')}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-white backdrop-blur-2xl rounded-[3rem] p-10 border border-gray-100 shadow-xl flex-1 group hover:border-gray-200 transition-colors relative overflow-hidden flex flex-col justify-center"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-50 blur-[50px] rounded-full"></div>
              <div className="relative z-10">
                <Zap className="w-10 h-10 text-gray-400 mb-8 group-hover:text-purple-500 transition-colors duration-500" />
                <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
                  {t('about_page.cards.patents.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg font-normal">
                  {t('about_page.cards.patents.desc')}
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter text-white">
              {t('about_page.cta.title')}
            </h2>
            <Link 
              href="/contact" 
              className="group inline-flex items-center gap-4 px-12 py-6 bg-white text-gray-900 rounded-full font-black text-xl hover:scale-105 transition-all duration-300 shadow-xl"
            >
              {t('about_page.cta.btn')} 
              <motion.div
                className="bg-gray-100 text-gray-900 rounded-full p-2 group-hover:translate-x-2 transition-transform"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
