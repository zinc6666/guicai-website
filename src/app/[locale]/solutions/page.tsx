import { useTranslations } from 'next-intl';
import { Droplet, PenTool, Sparkles, Palette } from "lucide-react";

export default function SolutionsPage() {
  const t = useTranslations();

  const solutions = [
    {
      key: 'paint',
      title: t('menu.solutions.paint.title'),
      desc: t('menu.solutions.paint.desc'),
      icon: <Droplet className="w-10 h-10 text-blue-500" />,
      image: "bg-gradient-to-br from-blue-100 to-blue-50"
    },
    {
      key: 'ink',
      title: t('menu.solutions.ink.title'),
      desc: t('menu.solutions.ink.desc'),
      icon: <PenTool className="w-10 h-10 text-purple-500" />,
      image: "bg-gradient-to-br from-purple-100 to-purple-50"
    },
    {
      key: 'beauty',
      title: t('menu.solutions.beauty.title'),
      desc: t('menu.solutions.beauty.desc'),
      icon: <Sparkles className="w-10 h-10 text-pink-500" />,
      image: "bg-gradient-to-br from-pink-100 to-pink-50"
    },
    {
      key: 'art',
      title: t('menu.solutions.art.title'),
      desc: t('menu.solutions.art.desc'),
      icon: <Palette className="w-10 h-10 text-orange-500" />,
      image: "bg-gradient-to-br from-orange-100 to-orange-50"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution) => (
            <div key={solution.key} className="group relative overflow-hidden rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500">
              <div className={`h-48 ${solution.image} flex items-center justify-center`}>
                <div className="bg-white p-4 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {solution.icon}
                </div>
              </div>
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{solution.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{solution.desc}</p>
                <button className="text-sm font-bold text-gray-900 flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  查看方案 <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
