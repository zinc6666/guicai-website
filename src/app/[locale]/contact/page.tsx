'use client';

import { useTranslations } from 'next-intl';
import { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm } from '@/actions';
import { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, ShoppingCart, Send, Loader2, Plus, Minus } from "lucide-react";

const initialState = {
  success: false,
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  const t = useTranslations();

  return (
    <button 
      type="submit" 
      disabled={pending}
      className="w-full py-5 bg-black text-white rounded-2xl font-bold hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 shadow-lg shadow-gray-200 group"
    >
      {pending ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          发送中...
        </>
      ) : (
        <>
          {t('contact.form.submit')}
          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </>
      )}
    </button>
  );
}

export default function ContactPage() {
  const t = useTranslations();
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [zoom, setZoom] = useState(15); // Initial zoom level

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
      // Optional: Add toast notification here
      alert(state.message);
    } else if (!state.success && state.message) {
      alert(state.message);
    }
  }, [state]);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: t('contact.info.address.title'),
      value: t('contact.info.address.value'),
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-600" />,
      title: t('contact.info.marketing.title'),
      value: t('contact.info.marketing.value'),
    },
    {
      icon: <Mail className="w-6 h-6 text-green-600" />,
      title: t('contact.info.sales.title'),
      value: t('contact.info.sales.value'),
    },
    {
      icon: <Mail className="w-6 h-6 text-cyan-600" />,
      title: t('contact.info.service.title'),
      value: t('contact.info.service.value'),
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-orange-600" />,
      title: t('contact.info.taobao.title'),
      value: t('contact.info.taobao.value'),
      link: t('contact.info.taobao.link'),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pt-32 pb-20">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">{t('contact.title')}</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-300">
                  <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                    {info.icon}
                  </div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg font-bold text-gray-900">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-3xl h-80 flex items-center justify-center border border-gray-200 overflow-hidden relative">
               <iframe 
                 key={zoom}
                 src={`https://maps.google.com/maps?q=河南省郑州市金水区西亚斯科教产业园&z=${zoom}&output=embed`}
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen={false} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
               ></iframe>
               
               {/* Custom Map Marker Overlay with Hover Expansion */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                 {/* Container for Pin and Card, shifted up so Pin Tip is at Center */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer pb-1">
                   {/* Info Card - Hover to Expand */}
                   <div className="mb-2 bg-white/80 backdrop-blur-md px-2 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40 flex items-center max-w-[50px] group-hover:max-w-[600px] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] h-[50px] z-20 origin-bottom">
                     <div className="flex items-center justify-center min-w-[34px] px-1">
                       <MapPin className="w-6 h-6 text-blue-600" />
                     </div>
                     
                     <div className="flex flex-col whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 ml-2 pr-4 border-l border-gray-400/30 pl-4">
                       <span className="font-extrabold text-gray-900 text-sm leading-tight">公司地址</span>
                       <span className="text-xs font-medium text-gray-600 leading-tight mt-0.5">河南省郑州市金水区兴达路街道惠科路33号西亚斯科教产业园10号楼4层</span>
                     </div>
                   </div>

                   {/* Bouncing Pin */}
                   <div className="relative z-10 animate-[bounce_2s_infinite]">
                     <MapPin className="w-12 h-12 text-blue-600 fill-blue-600 drop-shadow-2xl" />
                   </div>
                 </div>

                 {/* 3D Ground Pulse Effect - Centered exactly at map center */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center pointer-events-none">
                   {/* Perspective Container for 3D effect */}
                   <div className="relative w-full h-full flex items-center justify-center" style={{ transform: 'perspective(500px) rotateX(60deg)' }}>
                     {/* Outer Ring 1 */}
                     <div className="absolute w-full h-full bg-blue-500/20 rounded-full animate-ping opacity-75" style={{ animationDuration: '3s' }}></div>
                     {/* Outer Ring 2 (Delayed) */}
                     <div className="absolute w-3/4 h-3/4 bg-blue-500/30 rounded-full animate-ping opacity-75" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
                     {/* Inner Core Glow */}
                     <div className="absolute w-1/2 h-1/2 bg-blue-600/40 rounded-full blur-md"></div>
                     {/* Center Solid Dot */}
                     <div className="absolute w-3 h-3 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.8)] z-10"></div>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 lg:p-12 rounded-3xl border border-gray-100 shadow-2xl shadow-gray-100">
            <h2 className="text-3xl font-bold mb-8">在线留言</h2>
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">{t('contact.form.name')}</label>
                  <input name="name" type="text" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-black transition-all outline-none" placeholder="您的姓名" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">{t('contact.form.email')}</label>
                  <input name="email" type="email" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-black transition-all outline-none" placeholder="您的邮箱" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">{t('contact.form.message')}</label>
                <textarea name="message" rows={6} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-black transition-all outline-none resize-none" placeholder="请写下您的需求或建议..." required></textarea>
              </div>
              <SubmitButton />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
