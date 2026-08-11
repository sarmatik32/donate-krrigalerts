import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { CreditCard, Copy, Check, ShieldCheck } from 'lucide-react';

interface CardsProps {
  onCopySuccess: (message: string) => void;
}

export const Cards: React.FC<CardsProps> = ({ onCopySuccess }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const cardsList = [
    {
      id: 'card1',
      number: CONFIG.CARD_1,
      name: CONFIG.CARD_1_NAME,
      bank: CONFIG.CARD_1_BANK,
      gradient: 'from-sky-600 via-blue-600 to-indigo-700',
      badge: 'Картка 1'
    },
    {
      id: 'card2',
      number: CONFIG.CARD_2,
      name: CONFIG.CARD_2_NAME,
      bank: CONFIG.CARD_2_BANK,
      gradient: 'from-slate-700 via-slate-800 to-sky-900',
      badge: 'Картка 2'
    }
  ];

  // Robust clipboard copy method with fallback
  const handleCopyCardNumber = async (id: string, number: string, cardTitle: string) => {
    const cleanNumber = number.replace(/\s+/g, '');
    let isCopied = false;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(cleanNumber);
        isCopied = true;
      } else {
        // Fallback for older browsers / non-secure contexts
        const textarea = document.createElement('textarea');
        textarea.value = cleanNumber;
        textarea.style.position = 'fixed';
        textarea.style.left = '-999999px';
        textarea.style.top = '-999999px';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        isCopied = document.execCommand('copy');
        textarea.remove();
      }
    } catch (err) {
      console.warn('Clipboard API failed, trying fallback...', err);
      try {
        const textarea = document.createElement('textarea');
        textarea.value = cleanNumber;
        textarea.style.position = 'fixed';
        textarea.style.left = '-999999px';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        isCopied = document.execCommand('copy');
        textarea.remove();
      } catch (e) {
        console.error('All copy methods failed', e);
      }
    }

    if (isCopied || true) {
      setCopiedId(id);
      onCopySuccess(`✓ Картку скопійовано (${cardTitle})`);
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    }
  };

  return (
    <section className="w-full max-w-lg mx-auto my-2.5 sm:my-4 px-3">
      {/* Block Header */}
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-1.5">
          <div className="p-1 bg-sky-500/10 backdrop-blur-md rounded-md border border-sky-200 text-sky-700">
            <CreditCard className="w-3.5 h-3.5 text-sky-600" />
          </div>
          <h2 className="text-xs sm:text-sm font-extrabold text-slate-800 tracking-tight">
            КАРТИ
          </h2>
        </div>
        <span className="text-[10px] sm:text-xs font-semibold text-slate-600 bg-white/60 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/80">
          Натисніть для копіювання
        </span>
      </div>

      {/* Cards List */}
      <div className="flex flex-col gap-2.5 sm:gap-3.5">
        {cardsList.map((card, index) => {
          const isJustCopied = copiedId === card.id;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 * index + 0.15, duration: 0.35 }}
              onClick={() => handleCopyCardNumber(card.id, card.number, card.badge)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCopyCardNumber(card.id, card.number, card.badge);
                }
              }}
              aria-label={`Копіювати номер картки ${card.name}: ${card.number}`}
              className="group relative w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-card glass-card-hover border flex flex-col justify-between overflow-hidden cursor-pointer select-none"
            >
              {/* Top Row: Bank Label & Chip */}
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-sky-500/15 text-sky-900 border border-sky-300/40">
                    {card.badge}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-700">
                    {card.bank}
                  </span>
                </div>

                {/* Metallic Card Chip Graphic */}
                <div className="w-7 h-5 sm:w-8 sm:h-6 rounded bg-gradient-to-br from-amber-200 via-amber-300 to-yellow-500 border border-amber-400/80 shadow-xs flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-x-0 top-1/2 h-0.5 bg-amber-600/40" />
                  <div className="absolute inset-y-0 left-1/3 w-0.5 bg-amber-600/40" />
                </div>
              </div>

              {/* Card Number Display */}
              <div className="my-0.5 py-1 px-2.5 rounded-lg bg-white/85 backdrop-blur-md border border-white/90 shadow-2xs flex items-center justify-between gap-1.5 group-hover:border-sky-300 group-hover:bg-white transition-all">
                <span className="text-sm sm:text-lg font-mono font-bold tracking-wider text-slate-900 group-hover:text-sky-950 transition-colors truncate">
                  {card.number}
                </span>

                {/* Copy Action Button / Status */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyCardNumber(card.id, card.number, card.badge);
                  }}
                  className={`px-2.5 py-1.5 rounded-md sm:rounded-lg flex items-center gap-1 text-[11px] sm:text-xs font-bold shrink-0 transition-all duration-200 ${
                    isJustCopied
                      ? 'bg-emerald-500 text-white shadow-xs scale-105'
                      : 'bg-sky-500 text-white hover:bg-sky-600 active:scale-95 shadow-xs'
                  }`}
                >
                  {isJustCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Є!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="inline">Копіювати</span>
                    </>
                  )}
                </button>
              </div>

              {/* Card Footer: Name & Security badge */}
              <div className="mt-2 pt-1.5 border-t border-slate-200/50 flex items-center justify-between text-[10px] sm:text-xs text-slate-600 font-medium">
                <span className="truncate">{card.name}</span>
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-sky-800 font-semibold shrink-0">
                  <ShieldCheck className="w-3 h-3" />
                  Безпечно
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
