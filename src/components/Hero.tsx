import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { Cloud, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex flex-col items-center text-center pt-2 sm:pt-4 pb-1 px-2 max-w-lg mx-auto"
    >
      {/* Top Organization Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 mb-2.5 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-sky-900 text-[11px] sm:text-xs font-bold tracking-wide shadow-xs"
      >
        <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
        <span>{CONFIG.PAGE_TITLE}</span>
      </motion.div>

      {/* Logo Container with Cloud Glow Integration */}
      <motion.div 
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5, type: "spring", stiffness: 140 }}
        className="relative group mb-3"
      >
        {/* Soft Background Cloud Halo Behind Logo */}
        <div className="absolute -inset-3 bg-gradient-to-r from-white/90 via-sky-100/70 to-white/90 rounded-full blur-lg opacity-90 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
        
        {/* Glass Round Frame for Logo */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 p-1 rounded-full bg-white/85 backdrop-blur-md border-2 border-white logo-cloud-glow flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-[1.03]">
          <img 
            src={CONFIG.LOGO_PATH} 
            alt="Логотип Оперитивне Оповіщення Кривий Ріг" 
            className="w-full h-full object-cover rounded-full shadow-inner"
            onError={(e) => {
              // Fallback if logo fails to load
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/public/logo.png';
            }}
          />
        </div>

        {/* Decorative Mini Cloud Badge near logo */}
        <div className="absolute -bottom-1 -right-0.5 p-1 bg-white/90 backdrop-blur-sm rounded-full shadow-md text-sky-500 border border-sky-100 animate-float-bob">
          <Cloud className="w-4 h-4 fill-sky-100" />
        </div>
      </motion.div>

      {/* Cloud-styled Headline Container: «Донат — це твій спосіб діяти» */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="relative my-2 py-2 px-5 sm:px-6 inline-flex items-center justify-center gap-2"
      >
        {/* Soft Fluffy Cloud Background Shape */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-full border border-white/90 shadow-sm shadow-sky-900/10 -z-10" />
        
        {/* Cloud Puff Accents around the pill */}
        <div className="absolute -top-2 left-6 w-7 h-7 bg-white/85 rounded-full -z-10 blur-[0.5px]" />
        <div className="absolute -top-3 right-10 w-9 h-9 bg-white/80 rounded-full -z-10 blur-[0.5px]" />
        <div className="absolute -bottom-1.5 left-12 w-6 h-6 bg-white/80 rounded-full -z-10 blur-[0.5px]" />
        
        {/* Small Cloud Icon */}
        <Cloud className="w-4 h-4 text-sky-500 fill-sky-100 shrink-0" />

        <h1 className="text-base sm:text-lg md:text-xl font-calligraphy font-bold text-slate-900 leading-snug">
          «Донат — це твій спосіб діяти»
        </h1>
      </motion.div>

      {/* Subtitle / Description */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="mt-1 text-[11px] sm:text-xs font-sf-display text-slate-700/90 font-medium max-w-xs leading-normal px-2.5 py-0.5 rounded-lg bg-white/40 backdrop-blur-xs border border-white/50 shadow-2xs"
      >
        {CONFIG.SUBTITLE}
      </motion.p>
    </motion.header>
  );
};
