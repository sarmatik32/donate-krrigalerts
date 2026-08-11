import React, { useState } from 'react';
import { CloudBackground } from './components/CloudBackground';
import { Hero } from './components/Hero';
import { DonationBanks } from './components/DonationBanks';
import { Cards } from './components/Cards';
import { TelegramLinks } from './components/TelegramLinks';
import { Footer } from './components/Footer';
import { ToastNotification } from './components/ToastNotification';
import { CONFIG } from './config';
import { X, QrCode, Copy, Check } from 'lucide-react';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isAnimationPaused, setIsAnimationPaused] = useState<boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isLinkCopied, setIsLinkCopied] = useState<boolean>(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 2200);
  };

  const handleToggleAnimation = () => {
    setIsAnimationPaused(!isAnimationPaused);
    showToast(!isAnimationPaused ? 'Анімація хмар призупинена' : 'Анімація хмар відновлена');
  };

  const handleSharePage = async () => {
    const shareData = {
      title: CONFIG.PAGE_TITLE,
      text: `${CONFIG.SLOGAN} — ${CONFIG.PAGE_TITLE}`,
      url: window.location.href,
    };

    if (navigator.share && window.isSecureContext) {
      try {
        await navigator.share(shareData);
      } catch {
        setIsShareModalOpen(true);
      }
    } else {
      setIsShareModalOpen(true);
    }
  };

  const handleCopyPageUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsLinkCopied(true);
      showToast('✓ Посилання на сторінку скопійовано');
      setTimeout(() => setIsLinkCopied(false), 2000);
    } catch {
      setIsShareModalOpen(true);
    }
  };

  return (
    <div className="relative min-h-screen font-sans text-slate-800 antialiased selection:bg-sky-200 selection:text-sky-900 pb-4 overflow-x-hidden">
      {/* Animated Sky & Clouds Background Layer */}
      <CloudBackground isAnimationPaused={isAnimationPaused} />

      {/* Main Content Container (Mobile-first max-w-md ~480-520px) */}
      <main className="relative z-10 container mx-auto px-2 sm:px-4 py-1 sm:py-3 flex flex-col items-center">
        {/* Hero Section with Logo & Cloud Text Slogan */}
        <Hero />

        {/* Section 1: Donation Banks (Monobank, ПУМБ, Sense Bank) */}
        <DonationBanks />

        {/* Section 2: Bank Cards with Click-To-Copy */}
        <Cards onCopySuccess={showToast} />

        {/* Section 3: Telegram Channels & Chats */}
        <TelegramLinks />

        {/* Footer */}
        <Footer 
          isAnimationPaused={isAnimationPaused}
          onToggleAnimation={handleToggleAnimation}
          onSharePage={handleSharePage}
        />
      </main>

      {/* Floating Toast Notification */}
      <ToastNotification message={toastMessage} />

      {/* Share & QR Code Modal */}
      {isShareModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsShareModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-sm p-6 rounded-3xl bg-white/95 backdrop-blur-xl border border-white shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsShareModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-3">
              <QrCode className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              Поділитися сторінкою
            </h3>
            <p className="text-xs text-slate-600 mt-1 mb-4">
              Скопіюйте посилання для біографії або розміщення у соцмережах
            </p>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-2 mb-4">
              <span className="text-xs font-mono text-slate-700 truncate">
                {window.location.href}
              </span>
              <button
                type="button"
                onClick={handleCopyPageUrl}
                className="px-3 py-1.5 rounded-lg bg-sky-500 text-white text-xs font-bold flex items-center gap-1 shrink-0 hover:bg-sky-600 transition-colors"
              >
                {isLinkCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{isLinkCopied ? 'Є!' : 'Копіювати'}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsShareModalOpen(false)}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              Закрити
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
