import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplet, Layers, Award, Leaf, Search, Globe } from "lucide-react";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "@/components/LanguageSwitcher";
import TeamCarousel from "@/components/TeamCarousel";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Full spectrum linear gradient background (Red to Purple, Left to Right) - Enhanced Visibility */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-red-100 via-yellow-100 via-green-100 via-teal-100 via-blue-100 to-purple-100"></div>
        
        {/* Top-to-bottom fade mask (Transparent at top, becoming White at very bottom) */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        
        <div className="w-full px-6 lg:px-12 text-center">
          {/* GUICAI Logo Recreated with CSS - Responsive & Overlapping */}
          <div className="flex justify-center items-center mb-12 select-none transform-gpu py-20 w-[80vw] mx-auto">
            <div className="flex -space-x-[0.10em] text-[33vw] lg:text-[18vw] font-black tracking-tighter leading-none">
              <span className="text-red-600/90 mix-blend-multiply z-10 drop-shadow-2xl">G</span>
              <span className="text-yellow-400/90 mix-blend-multiply z-20 drop-shadow-2xl">U</span>
              <span className="text-lime-500/90 mix-blend-multiply z-30 drop-shadow-2xl">i</span>
              <span className="text-teal-500/90 mix-blend-multiply z-40 drop-shadow-2xl">C</span>
              <span className="text-blue-600/90 mix-blend-multiply z-50 drop-shadow-2xl">A</span>
              <span className="text-purple-600/90 mix-blend-multiply z-60 drop-shadow-2xl">i</span>
            </div>
          </div>

          <p className="text-2xl md:text-3xl font-bold text-gray-700 mb-10 tracking-tight">
            {t('hero.subtitle')}
          </p>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            {t('hero.description')}
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/products" className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
              {t('hero.explore')} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about" className="px-8 py-3 bg-gray-100 text-gray-900 rounded-full font-medium hover:bg-gray-200 transition-colors">
              {t('hero.request')}
            </Link>
          </div>
        </div>
      </section>

      {/* Brand & Team Image Banner */}
      <section className="w-full bg-white pb-20">
        <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-12">
          <TeamCarousel />
        </div>
      </section>

      {/* Wide Application Areas - Innovative & High Impact */}
      <section className="py-24 bg-black text-white overflow-hidden">
        <div className="w-full px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                COLOR<br/>COLLISION
              </h2>
              <p className="text-xl text-gray-400 max-w-md">{t('home.collision.desc')}</p>
            </div>
            <Link href="/solutions" className="hidden md:flex items-center gap-2 text-lg font-bold hover:text-blue-400 transition-colors group">
              {t('home.collision.view_all')} <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
            {/* Item 1: Large Vertical */}
            <div className="md:col-span-4 md:row-span-2 group relative rounded-3xl overflow-hidden bg-blue-600 h-64 md:h-auto">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-500 scale-100 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
              <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-4xl font-black mb-2 text-white">{t('home.applications.industrial.title_1')}<br/>{t('home.applications.industrial.title_2')}</h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{t('home.applications.industrial.desc')}</p>
                <div className="w-12 h-1 bg-blue-500 mt-4 transition-all duration-500 w-0 group-hover:w-24"></div>
              </div>
            </div>

            {/* Item 2: Horizontal Top */}
            <div className="md:col-span-4 md:row-span-1 group relative rounded-3xl overflow-hidden bg-purple-600 h-48 md:h-auto">
              <div className="absolute inset-0 bg-[url('/meizhuang.jpg')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-500 scale-100 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent transition-all duration-500 group-hover:from-purple-900/90"></div>
              <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-3xl font-black mb-1 text-white">{t('home.applications.beauty.title')}</h3>
                <p className="text-sm font-bold text-purple-300 opacity-80 group-hover:opacity-100 transition-opacity">{t('home.applications.beauty.desc')}</p>
              </div>
            </div>

            {/* Item 3: Square */}
            <div className="md:col-span-4 md:row-span-1 group relative rounded-3xl overflow-hidden bg-yellow-500 h-48 md:h-auto">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-500 scale-100 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-900/50 to-yellow-500/50 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl font-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100">{t('home.applications.art.title')}</h3>
              </div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white group-hover:opacity-0 transition-opacity">{t('home.applications.art.subtitle')}</h3>
              </div>
            </div>

            {/* Item 4: Horizontal Bottom */}
            <div className="md:col-span-5 md:row-span-1 group relative rounded-3xl overflow-hidden bg-pink-600 h-48 md:h-auto">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-500 scale-100 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                <div>
                  <h3 className="text-3xl font-black mb-1 text-white">{t('home.applications.textile.title')}</h3>
                  <p className="text-pink-200">{t('home.applications.textile.desc')}</p>
                </div>
                <ArrowRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>

            {/* Item 5: Vertical Right */}
            <div className="md:col-span-3 md:row-span-1 group relative rounded-3xl overflow-hidden bg-teal-600 h-48 md:h-auto">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-500 scale-100 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-teal-900/40 hover:bg-teal-900/20 transition-colors"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
                <h3 className="text-3xl font-black text-white mb-2">{t('home.applications.future.title')}</h3>
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white">{t('home.applications.future.tag')}</span>
              </div>
              <ArrowRight className="w-8 h-8 text-white flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Dark Mode Redesign */}
      <section className="py-24 bg-[#0a0a0a] border-t border-gray-900">
        <div className="w-full px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-3xl bg-gray-900/50 hover:bg-gray-900 transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/10 border border-gray-800 hover:border-green-900/30">
              <div className="w-14 h-14 bg-green-900/20 text-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner shadow-green-900/20">
                <Leaf className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">{t('features.eco.title')}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {t('features.eco.description')}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-3xl bg-gray-900/50 hover:bg-gray-900 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 border border-gray-800 hover:border-blue-900/30">
              <div className="w-14 h-14 bg-blue-900/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner shadow-blue-900/20">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{t('features.quality.title')}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {t('features.quality.description')}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-3xl bg-gray-900/50 hover:bg-gray-900 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/10 border border-gray-800 hover:border-purple-900/30">
              <div className="w-14 h-14 bg-purple-900/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner shadow-purple-900/20">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{t('features.custom.title')}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {t('features.custom.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-gray-800">
        <div className="w-full px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
            {/* Left Columns */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
              {/* Product Center */}
              <div>
                <h4 className="font-bold mb-6 text-white text-lg">{t('nav.products')}</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="/products" className="hover:text-white transition-colors">{t('menu.products.desktop.title')}</Link></li>
                  <li><Link href="/products" className="hover:text-white transition-colors">{t('menu.products.industrial.title')}</Link></li>
                  <li><Link href="/products" className="hover:text-white transition-colors">{t('menu.products.accessories.title')}</Link></li>
                </ul>
              </div>

              {/* Solutions (Mapped to "Innovative Products") */}
              <div>
                <h4 className="font-bold mb-6 text-white text-lg">{t('nav.solutions')}</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="/solutions" className="hover:text-white transition-colors">{t('menu.solutions.paint.title')}</Link></li>
                  <li><Link href="/solutions" className="hover:text-white transition-colors">{t('menu.solutions.ink.title')}</Link></li>
                  <li><Link href="/solutions" className="hover:text-white transition-colors">{t('menu.solutions.beauty.title')}</Link></li>
                  <li><Link href="/solutions" className="hover:text-white transition-colors">{t('menu.solutions.art.title')}</Link></li>
                </ul>
              </div>

              {/* Brand Intro */}
              <div>
                <h4 className="font-bold mb-6 text-white text-lg">{t('menu.about.intro.title')}</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="/about" className="hover:text-white transition-colors">{t('footer.brand_story')}</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">{t('footer.brand_strength')}</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">{t('footer.cooperation')}</Link></li>
                </ul>
              </div>

              {/* Service & Support */}
              <div>
                <h4 className="font-bold mb-6 text-white text-lg">{t('footer.service_support')}</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="/contact" className="hover:text-white transition-colors">{t('footer.after_sales')}</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">{t('footer.contact')}</Link></li>
                  <li><a href="#" className="hover:text-white transition-colors">{t('footer.video_tutorials')}</a></li>
                </ul>
              </div>

              {/* About Us */}
              <div>
                <h4 className="font-bold mb-6 text-white text-lg">{t('nav.sustainability')}</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="/about" className="hover:text-white transition-colors">{t('menu.about.team.title')}</Link></li>
                  <li><Link href="/culture" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">{t('footer.exhibitions')}</Link></li>
                </ul>
              </div>

              {/* News Center */}
              <div>
                <h4 className="font-bold mb-6 text-white text-lg">{t('footer.news_center')}</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">{t('footer.company_news')}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{t('footer.industry_news')}</a></li>
                </ul>
              </div>
            </div>

            {/* Right Side - Contact & QR */}
            <div className="lg:w-[400px] flex flex-col items-start lg:items-end border-l border-gray-800 lg:pl-12">
              <div className="text-right mb-8">
                <h4 className="font-bold text-lg mb-4 flex items-center justify-end gap-2">
                  {t('footer.follow_us')} <span className="text-green-500"><Globe className="w-5 h-5" /></span>
                </h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>{t('footer.hotline')}：<span className="text-white">138-xxxx-xxxx</span></p>
                  <p>{t('footer.marketing_email')}：marketing@guicai.com</p>
                  <p>{t('footer.sales_email')}：sales@guicai.com</p>
                  <p>{t('footer.service_email')}：service@guicai.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-center">
                  <div className="w-28 h-28 bg-white mb-3 p-2 flex items-center justify-center">
                    {/* Placeholder for QR Code */}
                    <div className="w-full h-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs">
                      {t('footer.qr_placeholder')}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 max-w-[120px]">
                    {t('footer.wechat_mp')}<br/>
                    {t('footer.get_updates')}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-28 h-28 bg-white mb-3 p-2 flex items-center justify-center">
                    {/* Placeholder for QR Code */}
                    <div className="w-full h-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs">
                      {t('footer.qr_placeholder')}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 max-w-[120px]">
                    {t('footer.app_name')}<br/>
                    {t('footer.app_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-xs space-y-2">
            <div className="flex flex-wrap justify-center gap-4">
              <span>豫ICP备xxxxxxxx号</span>
              <span>豫公网安备xxxxxxxxxxxxxx号</span>
              <span>{t('footer.license')}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <span>{t('footer.phone_label')}：0371-xxxxxxxx</span>
              <span>{t('footer.address_label')}：{t('footer.address_value')}</span>
            </div>
            <p className="mt-4">
              Copyright © {new Date().getFullYear()} {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
