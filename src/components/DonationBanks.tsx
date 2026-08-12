import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { ExternalLink, Heart, Sparkles } from 'lucide-react';

export const DonationBanks: React.FC = () => {
  const bankButtons = [
    {
      id: 'monobank',
      name: 'МОНО БАНКА',
      subtitle: 'Швидкий донат на Банку',
      url: CONFIG.MONOBANK_URL,
      badge: 'ТОП',
      accentColor: 'border-pink-300/80 bg-gradient-to-r from-pink-500/10 to-purple-500/10',
      logoUrl: '/public/assets/monobank.png',
      fallbackColor: 'bg-slate-900 text-white',
      fallbackText: 'mono'
    },
    {
      id: 'pumb',
      name: 'ПУМБ БАНКА',
      subtitle: 'Прямий переказ ПУМБ',
      url: CONFIG.PUMB_URL,
      badge: '',
      accentColor: 'border-red-200/80 bg-gradient-to-r from-red-500/10 to-rose-500/10',
      logoUrl: '/public/assets/pumb.png',
      fallbackColor: 'bg-red-600 text-white',
      fallbackText: 'ПУМБ'
    },
    {
      id: 'sense',
      name: 'СЕНС БАНКА',
      subtitle: 'Донат через Sense Bank',
      url: CONFIG.SENSE_URL,
      badge: '',
      accentColor: 'border-emerald-200/80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10',
      logoUrl: '/public/assets/sense.png',
      fallbackColor: 'bg-teal-600 text-white',
      fallbackText: 'Sense'
    }
  ];

  return (
    <section className="w-full max-w-lg mx-auto my-2.5 sm:my-4 px-3">
      {/* Block Header */}
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-1.5">
          <div className="p-1 bg-sky-500/10 backdrop-blur-md rounded-md border border-sky-200 text-sky-700">
            <Heart className="w-3.5 h-3.5 fill-sky-500 text-sky-500" />
          </div>
          <h2 className="text-xs sm:text-sm font-extrabold text-slate-800 tracking-tight">
            ПІДТРИМАТИ ДОНАТОМ
          </h2>
        </div>
        <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-white/70 backdrop-blur-sm border border-white text-sky-800 shadow-2xs">
          Офіційні банки
        </span>
      </div>

      {/* Buttons List */}
      <div className="flex flex-col gap-2 sm:gap-2.5">
        {bankButtons.map((bank, index) => (
          <motion.a
            key={bank.id}
            href={bank.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * index + 0.1, duration: 0.35 }}
            aria-label={`Підтримати через ${bank.name}`}
            className="group relative flex items-center justify-between p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl glass-card glass-card-hover border overflow-hidden cursor-pointer"
          >
            {/* Subtle brand glow highlight on hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${bank.accentColor}`} />

            <div className="relative z-10 flex items-center gap-2.5 sm:gap-3.5 min-w-0">
              {/* Bank Logo Image Container */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white p-0.5 border border-white/90 shadow-xs overflow-hidden shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src={bank.logoUrl}
                  alt={`Логотип ${bank.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.className += ` ${bank.fallbackColor} font-extrabold text-[10px] sm:text-xs flex items-center justify-center`;
                      target.parentElement.innerText = bank.fallbackText;
                    }
                  }}
                />
              </div>

              {/* Title & Subtitle */}
              <div className="flex flex-col text-left min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-base font-bold text-slate-900 tracking-tight leading-tight group-hover:text-sky-950">
                    {bank.name}
                  </span>
                  {bank.badge && (
                    <span className="inline-flex items-center gap-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded-full bg-amber-400/90 text-amber-950 border border-amber-300/80 shadow-2xs">
                      <Sparkles className="w-2 h-2 fill-amber-950" />
                      {bank.badge}
                    </span>
                  )}
                </div>
                <span className="text-[11px] sm:text-xs text-slate-600 font-medium truncate mt-0.5">
                  {bank.subtitle}
                </span>
              </div>
            </div>

            {/* Action Icon / Button */}
            <div className="relative z-10 flex items-center gap-1 pl-1.5 text-slate-500 group-hover:text-sky-700 transition-colors">
              <span className="text-[11px] font-semibold hidden sm:inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                Перейти
              </span>
              <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/80 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-2xs">
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
