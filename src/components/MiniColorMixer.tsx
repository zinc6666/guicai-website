'use client'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import { useState, useEffect } from 'react'; 
import { Pipette } from 'lucide-react';

interface Props { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  onMixComplete?: (color: string) => void;
} 

export default function MiniColorMixerModal({ isOpen, onClose, title, onMixComplete }: Props) { 
  const [color1, setColor1] = useState('#FF3366'); 
  const [color2, setColor2] = useState('#33CCFF'); 
  const [mixedColor, setMixedColor] = useState('#FF8800'); 
  const [isMixing, setIsMixing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Auto-mix on open or color change
      mixColors();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color1, color2, isOpen]);

  const mixColors = () => { 
    setIsMixing(true);
    setTimeout(() => {
      const r = Math.round((parseInt(color1.slice(1,3),16) + parseInt(color2.slice(1,3),16)) / 2); 
      const g = Math.round((parseInt(color1.slice(3,5),16) + parseInt(color2.slice(3,5),16)) / 2); 
      const b = Math.round((parseInt(color1.slice(5,7),16) + parseInt(color2.slice(5,7),16)) / 2); 
      const resultColor = `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
      setMixedColor(resultColor); 
      setIsMixing(false);
    }, 400);
  }; 

  const handleApply = () => {
    if (onMixComplete) {
      onMixComplete(mixedColor);
    }
    onClose();
  };

  return ( 
    <AnimatePresence> 
      {isOpen && ( 
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-xl" onClick={onClose}> 
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.9, y: 20 }} 
            onClick={(e) => e.stopPropagation()}
            className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-10 max-w-lg w-full mx-4 shadow-2xl relative" 
          > 
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
            >
              ✕
            </button>
            
            <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <Pipette className="w-8 h-8 text-pink-400" />
              {title}
            </h3> 

            {/* 艺术预览区 */} 
            <div 
              className="h-64 rounded-2xl mb-8 relative overflow-hidden shadow-inner border border-white/10" 
            > 
              {/* Left Color */}
              <motion.div 
                className="absolute top-0 left-0 w-1/2 h-full"
                style={{ backgroundColor: color1 }}
                animate={{ x: isMixing ? '50%' : '0%', opacity: isMixing ? 0 : 1 }}
                transition={{ duration: 0.5 }}
              />
              {/* Right Color */}
              <motion.div 
                className="absolute top-0 right-0 w-1/2 h-full"
                style={{ backgroundColor: color2 }}
                animate={{ x: isMixing ? '-50%' : '0%', opacity: isMixing ? 0 : 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Mixed Result */}
              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ backgroundColor: mixedColor }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isMixing ? 0 : 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-white/90 text-5xl font-black drop-shadow-2xl tracking-widest mix-blend-overlay">GUICAI</div> 
                <span className="text-white font-mono text-sm mt-4 bg-black/30 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/20">
                  {mixedColor.toUpperCase()}
                </span>
              </motion.div>

              {/* Loading */}
              {isMixing && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                  <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
            </div> 

            {/* 颜色选择 */} 
            <div className="grid grid-cols-2 gap-6"> 
              <div className="bg-black/20 p-4 rounded-2xl border border-white/5"> 
                <p className="text-white/70 text-xs font-bold mb-3 uppercase tracking-wider text-center">基底色 (Base)</p> 
                <div className="relative w-full h-12 rounded-xl overflow-hidden shadow-sm border border-white/20">
                  <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="absolute -inset-2 w-[150%] h-[150%] cursor-pointer" /> 
                </div>
              </div> 
              <div className="bg-black/20 p-4 rounded-2xl border border-white/5"> 
                <p className="text-white/70 text-xs font-bold mb-3 uppercase tracking-wider text-center">融合色 (Mix)</p> 
                <div className="relative w-full h-12 rounded-xl overflow-hidden shadow-sm border border-white/20">
                  <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="absolute -inset-2 w-[150%] h-[150%] cursor-pointer" /> 
                </div>
              </div> 
            </div> 

            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }} 
              onClick={handleApply} 
              className="mt-8 w-full py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-2xl font-bold text-lg tracking-wider shadow-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all border border-white/20" 
            > 
              ✨ 将色彩应用到画面 
            </motion.button> 
          </motion.div> 
        </div> 
      )} 
    </AnimatePresence> 
  ); 
}