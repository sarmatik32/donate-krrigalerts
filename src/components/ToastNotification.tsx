import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface ToastNotificationProps {
  message: string | null;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({ message }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-3.5 rounded-2xl bg-slate-900/90 text-white backdrop-blur-xl border border-white/20 shadow-2xl flex items-center gap-3 text-sm sm:text-base font-semibold tracking-wide pointer-events-none max-w-[90vw] text-center"
        >
          <div className="p-1 bg-emerald-500 rounded-full text-white shadow-xs">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
