import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { Cloud, Pause, Play, Heart, Share2 } from 'lucide-react';

interface FooterProps {
  isAnimationPaused: boolean;
  onToggleAnimation: () => void;
  onSharePage: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  isAnimationPaused, 
  onToggleAnimation,
  onSharePage 
}) => {
  return (
    <footer className="w-full max-w-lg mx-auto mt-3 pb-4 px-3 text-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-card border flex flex-col items-center gap-1.5"
      >
        {/* Patriotic / Community Message */}
        <div className="flex items-center gap-1 text-xs sm:text-sm font-bold text-slate-800">
          <span>Слава Україні!</span>
          <span className="text-xs">🇺🇦</span>
          <span className="text-sky-600 font-extrabold">• Разом до перемоги</span>
        </div>

        <p className="text-[10px] sm:text-xs text-slate-600 font-medium max-w-xs leading-snug">
          Дякуємо кожному, хто підтримує наш проект та робить свій внесок!
        </p>

        {/* Action Controls */}
        <div className="flex items-center justify-center gap-2 mt-1 pt-2 border-t border-slate-200/60 w-full">
          {/* Pause/Play Sky Animation Button */}
          <button
            type="button"
            onClick={onToggleAnimation}
            className="px-2.5 py-1 rounded-lg bg-white/80 hover:bg-white text-slate-700 text-[11px] sm:text-xs font-semibold border border-slate-200/80 shadow-2xs flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
            title="Переключити рух хмар"
          >
            <Cloud className="w-3 h-3 text-sky-500" />
            <span>Хмари: {isAnimationPaused ? 'Пауза' : 'Рух'}</span>
            {isAnimationPaused ? (
              <Play className="w-2.5 h-2.5 text-emerald-600" />
            ) : (
              <Pause className="w-2.5 h-2.5 text-slate-500" />
            )}
          </button>

          {/* Share Bio Page Button */}
          <button
            type="button"
            onClick={onSharePage}
            className="px-2.5 py-1 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-[11px] sm:text-xs font-semibold shadow-2xs flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
          >
            <Share2 className="w-3 h-3" />
            <span>Поділитися</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-1 text-[10px] sm:text-[11px] text-slate-600 font-medium">
          © {new Date().getFullYear()} {CONFIG.PAGE_TITLE}
        </div>
      </motion.div>
    </footer>
  );
};
