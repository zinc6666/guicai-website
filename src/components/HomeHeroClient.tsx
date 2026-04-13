'use client';

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  subtitle1: string;
  subtitle2: string;
}

export default function HomeHeroClient({ subtitle1, subtitle2 }: Props) {
  return (
    <>
      {/* GUICAI Logo Recreated with CSS - Responsive & Overlapping */}
      <div className="flex justify-center items-center mb-12 select-none transform-gpu py-20 w-[80vw] mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="flex -space-x-[0.10em] text-[33vw] lg:text-[18vw] font-black tracking-tighter leading-none"
        >
          <motion.span variants={{ hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 12 } } }} className="text-red-600/90 mix-blend-multiply z-10 drop-shadow-2xl">G</motion.span>
          <motion.span variants={{ hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 12 } } }} className="text-yellow-400/90 mix-blend-multiply z-20 drop-shadow-2xl">U</motion.span>
          <motion.span variants={{ hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 12 } } }} className="text-lime-500/90 mix-blend-multiply z-30 drop-shadow-2xl">i</motion.span>
          <motion.span variants={{ hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 12 } } }} className="text-teal-500/90 mix-blend-multiply z-40 drop-shadow-2xl">C</motion.span>
          <motion.span variants={{ hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 12 } } }} className="text-blue-600/90 mix-blend-multiply z-50 drop-shadow-2xl">A</motion.span>
          <motion.span variants={{ hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 12 } } }} className="text-purple-600/90 mix-blend-multiply z-60 drop-shadow-2xl">i</motion.span>
        </motion.div>
      </div>

      {/* Artistic Diagonal Text Layout */}
      <div className="relative w-full max-w-5xl mx-auto mb-24 px-4 mt-32">
        {/* Decorative Image - Floating Top Right (Moved Above Text) */}
        <motion.div 
          initial={{ y: 60, opacity: 0, rotate: 0 }}
          animate={{ y: 0, opacity: 1, rotate: 6 }}
          transition={{ duration: 1, delay: 1.2, type: "spring", stiffness: 80, damping: 15 }}
          className="absolute -top-32 md:-top-40 right-10 md:right-20 w-32 h-32 md:w-48 md:h-48 transform translate-x-4 md:translate-x-1/2 z-0 hover:rotate-12 transition-transform duration-500"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 backdrop-blur-sm">
            <Image 
              src="/gui4.jpg" 
              alt="Nature & Vitality" 
              fill 
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Top Left Text */}
        <div className="flex justify-start relative z-10">
          <motion.h2 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
            }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 tracking-tight leading-tight drop-shadow-sm text-left flex flex-wrap"
          >
            {subtitle1.split('').map((char, index) => (
              <motion.span 
                key={index}
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 14 } }
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>
        </div>
        
        {/* Bottom Right Text */}
        <div className="flex justify-end mt-12 md:mt-20 relative z-10">
          <motion.h2 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 1.5 } }
            }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 tracking-tight leading-tight drop-shadow-sm text-right flex flex-wrap justify-end"
          >
            {subtitle2.split('').map((char, index) => (
              <motion.span 
                key={index}
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 14 } }
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>
        </div>
      </div>
    </>
  );
}