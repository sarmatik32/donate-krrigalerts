import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';
import { Send, MessageSquareText, ExternalLink, Users } from 'lucide-react';

export const TelegramLinks: React.FC = () => {
  const telegramItems = [
    {
      id: 'channel',
      title: 'TELEGRAM-КАНАЛ',
      actionText: '🕊️ Кривий Ріг Alerts',
      description: 'Сповіщення 24/7',
      url: CONFIG.TELEGRAM_CHANNEL_URL,
      icon: <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
      badge: 'Офіційний',
      bgGradient: 'from-sky-500 to-blue-600',
      hoverBorder: 'hover:border-sky-300'
    },
    {
      id: 'chat',
      title: 'TELEGRAM-ЧАТ',
      actionText: '🕊️ Чатік - Pigeon 💬',
      description: 'Обговорення та взаємодія',
      url: CONFIG.TELEGRAM_CHAT_URL,
      icon: <MessageSquareText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
      badge: 'Спільнота',
      bgGradient: 'from-blue-600 to-indigo-600',
      hoverBorder: 'hover:border-indigo-300'
    }
  ];

  return (
    <section className="w-full max-w-lg mx-auto my-2.5 sm:my-4 px-3">
      {/* Block Header */}
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-1.5">
          <div className="p-1 bg-sky-500/10 backdrop-blur-md rounded-md border border-sky-200 text-sky-700">
            <Users className="w-3.5 h-3.5 text-sky-600" />
          </div>
          <h2 className="text-xs sm:text-sm font-extrabold text-slate-800 tracking-tight">
            НАШІ КАНАЛИ
          </h2>
        </div>
        <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-white/70 backdrop-blur-sm border border-white text-sky-800 shadow-2xs">
          Telegram
        </span>
      </div>

      {/* Buttons List */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {telegramItems.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * index + 0.2, duration: 0.35 }}
            aria-label={`${item.title}: ${item.actionText}`}
            className={`group relative flex flex-col justify-between p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl glass-card glass-card-hover border overflow-hidden cursor-pointer ${item.hoverBorder}`}
          >
            {/* Telegram Blue Glow Background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between gap-1 mb-2">
              {/* Icon */}
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.bgGradient} flex items-center justify-center shadow-xs text-white transition-transform duration-300 group-hover:scale-105`}>
                {item.icon}
              </div>

              {/* External Link Badge */}
              <div className="p-1.5 rounded-lg bg-sky-500 text-white group-hover:bg-sky-600 transition-all duration-300 shadow-2xs">
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
            </div>

            <div className="relative z-10 flex flex-col text-left min-w-0">
              <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-sky-800 truncate">
                {item.badge}
              </span>
              <span className="text-xs sm:text-base font-bold text-slate-900 group-hover:text-sky-950 transition-colors leading-tight mt-0.5 truncate">
                {item.actionText}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-600 truncate mt-0.5 font-medium hidden sm:block">
                {item.description}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
