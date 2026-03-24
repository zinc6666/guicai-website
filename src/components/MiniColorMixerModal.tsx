'use client'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import { useEffect, useRef, useState } from 'react'; 

interface Props { 
  isOpen: boolean; 
  onClose: () => void; 
  title?: string; 
} 

export default function MiniColorMixerModal({ isOpen, onClose, title = '灵感工坊' }: Props) { 
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [colors, setColors] = useState(['#FF3366', '#33CCFF', '#FFCC00']); 
  const [mixedColor, setMixedColor] = useState('#FF8800'); 
  const [rgb, setRgb] = useState({ r: 255, g: 136, b: 0 }); 
  const [history, setHistory] = useState<string[]>([]); 

  const mixColors = (source: string[]) => { 
    let r = 0, g = 0, b = 0; 
    source.forEach(c => { 
      r += parseInt(c.slice(1,3),16); 
      g += parseInt(c.slice(3,5),16); 
      b += parseInt(c.slice(5,7),16); 
    }); 
    r = Math.floor(r / source.length); 
    g = Math.floor(g / source.length); 
    b = Math.floor(b / source.length); 
    const hex = `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`; 
    setMixedColor(hex); 
    setRgb({ r, g, b }); 
  }; 

  useEffect(() => {
    mixColors(colors);
  }, [colors]);

  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      const el = panelRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) onClose();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('pointerdown', onPointerDown, true);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown, true);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  const saveToHistory = () => { 
    if (!history.includes(mixedColor)) { 
      setHistory(prev => [mixedColor, ...prev].slice(0, 12)); 
    } 
  }; 

  const loadFromHistory = (color: string) => { 
    setMixedColor(color); 
    setRgb({ 
      r: parseInt(color.slice(1,3),16), 
      g: parseInt(color.slice(3,5),16), 
      b: parseInt(color.slice(5,7),16), 
    }); 
  }; 

  const randomMix = () => { 
    const randoms = Array.from({length:3}, () => '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,'0')); 
    setColors(randoms); 
  }; 

  return ( 
    <AnimatePresence> 
      {isOpen && ( 
        <div className="fixed inset-0 z-50 pointer-events-none"> 
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, y: 30 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.92, y: 30 }} 
            ref={panelRef}
            className="pointer-events-auto fixed bottom-4 left-1/2 -translate-x-1/2 w-[min(560px,calc(100vw-24px))] max-h-[72vh] overflow-y-auto overflow-x-hidden rounded-[1.75rem] border border-white/18 bg-white/10 backdrop-blur-3xl shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
          > 
            <div className="px-6 pt-6 pb-4 border-b border-white/10 flex items-center justify-between"> 
              <div className="min-w-0">
                <h3 className="text-xl md:text-2xl font-black tracking-tight text-white truncate">{title}</h3> 
                <div className="mt-1 text-[10px] text-white/55 tracking-[0.22em] uppercase">Inspiration Workshop</div>
              </div>
              <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors flex items-center justify-center text-xl">✕</button> 
            </div> 

            <div className="p-6">
              <div 
                className="h-44 md:h-56 rounded-3xl relative overflow-hidden shadow-2xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${colors[0]}, ${mixedColor}, ${colors[1]}, ${colors[2]})` }} 
              > 
                <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/15 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-black/20 blur-3xl" />
                <div className="relative text-white/90 text-4xl md:text-5xl font-black tracking-[0.22em] drop-shadow-[0_18px_30px_rgba(0,0,0,0.55)]">GUICAI</div> 
              </div> 

              <div className="mt-5 border border-white/10 bg-black/20 backdrop-blur-xl rounded-3xl p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-white/70 text-sm">选择三种颜色进行混合</div>
                  <div className="text-white/50 text-xs font-mono">RGB({rgb.r}, {rgb.g}, {rgb.b})</div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {colors.map((color, i) => ( 
                    <div key={i} className="relative h-12 md:h-14 rounded-2xl overflow-hidden border border-white/20 shadow-inner">
                      <input 
                        type="color" 
                        value={color} 
                        onChange={(e) => { 
                          const newColors = [...colors]; 
                          newColors[i] = e.target.value; 
                          setColors(newColors); 
                        }} 
                        className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] cursor-pointer" 
                      /> 
                    </div>
                  ))} 
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                    onClick={() => mixColors(colors)} 
                    className="py-3.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-2xl font-bold text-base shadow-lg"
                  > 
                    🌀 开始混合 
                  </motion.button> 
                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                    onClick={randomMix} 
                    className="py-3.5 bg-white/10 text-white border border-white/25 rounded-2xl font-medium hover:bg-white/15 transition-colors"
                  > 
                    🎲 随机组合 
                  </motion.button> 
                </div>
              </div>

              <div className="mt-5 flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="w-full md:flex-1 flex items-center gap-4 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl p-5">
                  <div className="w-16 h-16 rounded-2xl shadow-inner border border-white/15" style={{ backgroundColor: mixedColor }} />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <div className="font-mono text-3xl font-black text-white truncate">{mixedColor.toUpperCase()}</div>
                      <div className="text-white/60 text-xs font-mono">RGB({rgb.r}, {rgb.g}, {rgb.b})</div>
                    </div>
                    <div className="mt-1 text-white/50 text-xs tracking-[0.22em] uppercase">Hex Color</div>
                  </div>
                </div>
                <div className="w-full md:w-auto flex gap-3">
                  <button 
                    onClick={() => navigator.clipboard.writeText(mixedColor.toUpperCase())} 
                    className="flex-1 md:flex-none px-6 py-4 bg-white/15 hover:bg-white/25 border border-white/20 text-white rounded-2xl text-sm font-semibold transition-colors"
                  > 
                    复制 HEX 
                  </button> 
                  <button
                    onClick={saveToHistory}
                    className="flex-1 md:flex-none px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/15 text-white/90 rounded-2xl text-sm font-semibold transition-colors"
                  >
                    保存
                  </button>
                </div>
              </div> 

              {history.length > 0 && ( 
                <div className="mt-5 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl p-5"> 
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <p className="text-white/70 text-sm">历史记录</p> 
                    <div className="text-white/40 text-xs">{history.length}/12</div>
                  </div>
                  <div className="flex gap-3 overflow-x-auto pb-2"> 
                    {history.map((c, i) => ( 
                      <motion.button 
                        key={i} 
                        whileHover={{ scale: 1.12, y: -3 }} 
                        whileTap={{ scale: 0.96 }} 
                        onClick={() => loadFromHistory(c)} 
                        className="w-12 h-12 rounded-2xl flex-shrink-0 shadow border border-white/25" 
                        style={{ backgroundColor: c }} 
                      /> 
                    ))} 
                  </div> 
                </div> 
              )} 

              <button
                onClick={onClose}
                className="mt-5 w-full py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white/85 font-semibold transition-colors"
              >
                关闭灵感工坊
              </button>
            </div>
          </motion.div> 
        </div> 
      )} 
    </AnimatePresence> 
  ); 
}
