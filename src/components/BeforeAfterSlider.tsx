'use client'; 
import { useState, useRef } from 'react'; 
import Image from 'next/image';

interface Props {
  image: string;
  alt: string;
  activeColor: string;
}

export default function BeforeAfterSlider({ image, alt, activeColor }: Props) { 
  const [position, setPosition] = useState(50); 
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement> | PointerEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    setPosition(x);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent text selection
    handlePointerMove(e);
    
    const onMove = (moveEvent: PointerEvent) => handlePointerMove(moveEvent);
    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  const hasColor = activeColor !== 'transparent' && activeColor !== 'bg-transparent';

  return ( 
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden"
      ref={sliderRef}
    > 
      {/* Before 图片 (手工调色 - 原始图片，放在底层) */} 
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={image} 
          alt={`Before ${alt}`}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        {/* A subtle grayscale for "手工调色" to make the contrast more obvious, optional but looks good. Or just original. */}
      </div>
      
      {/* After 图片 (龟彩调色机 - 带颜色滤镜，放在上层并裁剪左侧) */} 
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        style={{ clipPath: `inset(0 0 0 ${position}%)` }} 
      >
        <Image 
          src={image} 
          alt={`After ${alt}`}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        {/* The color overlay */}
        {hasColor && (
          <div 
            className="absolute inset-0 mix-blend-color transition-colors duration-500"
            style={{ backgroundColor: activeColor }}
          ></div>
        )}
      </div> 

      {/* 滑动条 (半透明毛玻璃细线) */} 
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white/40 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.5)] cursor-ew-resize z-20" 
        style={{ left: `${position}%` }} 
        onPointerDown={handlePointerDown}
      > 
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 backdrop-blur-md border border-white/50 rounded-full shadow-lg flex items-center justify-center text-sm hover:scale-110 transition-transform">
          🎨
        </div> 
      </div> 

      {/* 底部渐变遮罩 (为了让文字清晰) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none z-10"></div>

      {/* Labels */}
      <div className="absolute top-6 left-6 text-white text-xs font-bold tracking-widest bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 z-10 pointer-events-none">
        手工调色
      </div> 
      <div className="absolute top-6 right-6 text-white text-xs font-bold tracking-widest bg-gradient-to-r from-pink-500/80 to-cyan-500/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 z-10 pointer-events-none">
        龟彩调色机
      </div> 
    </div> 
  ); 
}
