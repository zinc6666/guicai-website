'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FloatingCommunity() {
  const t = useTranslations('common');
  
  return (
    <Link 
      href="/gallery"
      className="fixed bottom-8 right-8 z-[100] group flex items-center gap-3 bg-black text-white px-5 py-4 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-white/10"
    >
      <div className="relative">
        <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
        <div className="absolute inset-0 bg-yellow-400 blur-md opacity-50 rounded-full animate-pulse"></div>
      </div>
      <span className="font-bold whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
        {t('floating_community')}
      </span>
    </Link>
  );
}