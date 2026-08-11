import React from 'react';

interface CloudBackgroundProps {
  isAnimationPaused?: boolean;
}

export const CloudBackground: React.FC<CloudBackgroundProps> = ({ isAnimationPaused = false }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Sky Gradient Base */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#38bdf8] via-[#7dd3fc] to-[#bae6fd]"
        style={{
          backgroundImage: `linear-gradient(180deg, #0284c7 0%, #38bdf8 35%, #7dd3fc 70%, #bae6fd 100%)`
        }}
      />

      {/* Atmospheric Sunlight Glow / Sunbeam Effect at Top */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-radial from-white/40 via-sky-100/20 to-transparent blur-3xl rounded-full opacity-80 animate-shimmer" />

      {/* Layer 1: Far Background Clouds (Slowest, smallest, softest opacity) */}
      <div className={`absolute inset-0 ${isAnimationPaused ? '' : 'animate-cloud-slow'}`}>
        <svg 
          className="absolute top-[8%] left-[-10%] w-[380px] h-[180px] text-white/45 blur-[1px]" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>

        <svg 
          className="absolute top-[38%] left-[45%] w-[450px] h-[220px] text-white/40 blur-[1px]" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>

        <svg 
          className="absolute top-[68%] left-[15%] w-[320px] h-[160px] text-white/35 blur-[2px]" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
      </div>

      {/* Layer 2: Midground Clouds (Medium speed, sharper details) */}
      <div className={`absolute inset-0 ${isAnimationPaused ? '' : 'animate-cloud-medium'}`}>
        <svg 
          className="absolute top-[22%] left-[-20%] w-[520px] h-[250px] text-white/60 drop-shadow-sm" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>

        <svg 
          className="absolute top-[52%] left-[30%] w-[480px] h-[230px] text-white/55 drop-shadow-sm" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
      </div>

      {/* Layer 3: Foreground Clouds (Fastest, large, high opacity & soft shadow) */}
      <div className={`absolute inset-0 ${isAnimationPaused ? '' : 'animate-cloud-fast'}`}>
        <svg 
          className="absolute top-[2%] left-[60%] w-[600px] h-[280px] text-white/75 drop-shadow-md" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>

        <svg 
          className="absolute top-[78%] left-[-15%] w-[680px] h-[320px] text-white/70 drop-shadow-lg" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
      </div>

      {/* Soft Bottom Sky Mist Overlay */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-sky-200/60 via-white/20 to-transparent pointer-events-none" />
    </div>
  );
};
