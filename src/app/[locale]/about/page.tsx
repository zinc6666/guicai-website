import Link from "next/link";
import { useTranslations } from 'next-intl';
import { Users, Award, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations();

  const features = [
    {
      key: 'intro',
      title: t('menu.about.intro.title'),
      desc: t('menu.about.intro.desc'),
      icon: <Users className="w-8 h-8 text-blue-600" />,
      content: t('hero.description')
    },
    {
      key: 'team',
      title: t('menu.about.team.title'),
      desc: t('menu.about.team.desc'),
      icon: <Award className="w-8 h-8 text-purple-600" />,
      content: t('features.eco.description')
    },
    {
      key: 'patents',
      title: t('menu.about.patents.title'),
      desc: t('menu.about.patents.desc'),
      icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
      content: t('features.quality.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pt-32 pb-20">
      {/* Header */}
      <div className="w-full px-6 lg:px-12 mb-20">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">{t('nav.sustainability')}</h1>
        <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
          {t('hero.subtitle')}
        </p>
      </div>

      {/* Content Sections */}
      <div className="w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.key} className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-8">
                {feature.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{feature.content}</p>
              <div className="h-1 w-20 bg-gray-200 rounded-full"></div>
            </div>
          ))}
        </div>
        
        {/* Additional Stats or Info */}
        <div className="mt-20 bg-black text-white rounded-3xl p-12 lg:p-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">致力于为您提供最优质的色彩解决方案</h2>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
            联系我们
          </Link>
        </div>
      </div>
    </div>
  );
}
