'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/team-guicai.jpg',
    title: '凝聚色彩力量',
    subtitle: '只为呈现最精准的每一抹色彩'
  },
  {
    id: 2,
    image: '/team-slide-2.jpg',
    title: '全球化研发视野',
    subtitle: '链接世界前沿科技，赋能本土创新'
  },
  {
    id: 3,
    image: '/team-slide-3.jpg',
    title: '共创未来色彩',
    subtitle: '与合作伙伴携手，重新定义行业标准'
  }
];

export default function TeamCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          
          {/* Text Content */}
          <div className={`absolute bottom-0 left-0 w-full pb-12 text-center text-white transition-all duration-700 transform ${
            index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">{slide.title}</h3>
            <p className="text-lg md:text-xl text-gray-200 font-light">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/30 text-white transition-all opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/30 text-white transition-all opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-white' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
