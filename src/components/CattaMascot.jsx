import React from 'react';

/**
 * CattaMascot Component
 * 
 * Recreates the adorable 3D glossy pink cat mascot and radiant orb 
 * matching the visual reference image.
 */
export default function CattaMascot({ className = '' }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Radiant Glowing Background Circle from Reference */}
      <div className="absolute w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 rounded-full pink-orb-glow opacity-95 animate-pulse" 
           style={{ animationDuration: '4s' }} />

      {/* Secondary ambient outer glow */}
      <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />

      {/* 3D-styled Vector Mascot */}
      <svg 
        viewBox="0 0 400 400" 
        className="relative z-10 w-72 h-72 sm:w-84 sm:h-84 md:w-92 md:h-92 drop-shadow-[0_20px_25px_rgba(10,5,18,0.7)]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main 3D pink body gradient */}
          <radialGradient id="catBodyGrad" cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#ff70b8" />
            <stop offset="35%" stopColor="#ff3399" />
            <stop offset="70%" stopColor="#d81075" />
            <stop offset="100%" stopColor="#9b004f" />
          </radialGradient>

          {/* Head gradient with top-left specular highlight */}
          <radialGradient id="catHeadGrad" cx="35%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#ff85c5" />
            <stop offset="40%" stopColor="#ff3a9d" />
            <stop offset="75%" stopColor="#d60f73" />
            <stop offset="100%" stopColor="#8d0047" />
          </radialGradient>

          {/* Ear inner depth gradient */}
          <radialGradient id="earInnerGrad" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#ffa0d2" />
            <stop offset="60%" stopColor="#e62080" />
            <stop offset="100%" stopColor="#7a003e" />
          </radialGradient>

          {/* Paw gradient */}
          <radialGradient id="pawGrad" cx="40%" cy="30%" r="50%">
            <stop offset="0%" stopColor="#ff7cb8" />
            <stop offset="70%" stopColor="#cf0d6c" />
            <stop offset="100%" stopColor="#7a003e" />
          </radialGradient>

          {/* Tail gradient */}
          <linearGradient id="tailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4fa6" />
            <stop offset="50%" stopColor="#e01278" />
            <stop offset="100%" stopColor="#7d0040" />
          </linearGradient>

          {/* Ambient ground shadow */}
          <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(10,5,15,0.7)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Mascot Ground Shadow */}
        <ellipse cx="200" cy="365" rx="110" ry="18" fill="url(#groundShadow)" />

        {/* Curled Tail (Left) */}
        <path 
          d="M 140 290 C 110 300 95 325 100 345 C 105 360 125 365 140 350 C 150 340 148 325 142 315 C 136 305 138 295 145 288" 
          stroke="url(#tailGrad)" 
          strokeWidth="28" 
          strokeLinecap="round" 
        />

        {/* Chubby Cat Body */}
        <ellipse cx="205" cy="275" rx="82" ry="75" fill="url(#catBodyGrad)" />

        {/* Back Ears with 3D Depth */}
        {/* Left Ear */}
        <path 
          d="M 130 155 C 115 110 135 70 155 85 C 170 98 178 128 170 150 Z" 
          fill="url(#catHeadGrad)" 
        />
        <path 
          d="M 137 145 C 127 115 140 92 153 100 C 162 108 168 128 163 142 Z" 
          fill="url(#earInnerGrad)" 
        />

        {/* Right Ear */}
        <path 
          d="M 270 155 C 285 110 265 70 245 85 C 230 98 222 128 230 150 Z" 
          fill="url(#catHeadGrad)" 
        />
        <path 
          d="M 263 145 C 273 115 260 92 247 100 C 238 108 232 128 237 142 Z" 
          fill="url(#earInnerGrad)" 
        />

        {/* Chubby Round Head */}
        <circle cx="200" cy="180" r="76" fill="url(#catHeadGrad)" />

        {/* Forehead cute detail dots */}
        <circle cx="193" cy="132" r="3" fill="#1c071d" />
        <circle cx="207" cy="132" r="3" fill="#1c071d" />

        {/* Expressive dark eyes */}
        {/* Left Eye */}
        <ellipse cx="165" cy="175" rx="6" ry="7.5" fill="#1c071d" />
        <circle cx="163" cy="172" r="2.2" fill="#ffffff" />

        {/* Right Eye */}
        <ellipse cx="235" cy="175" rx="6" ry="7.5" fill="#1c071d" />
        <circle cx="233" cy="172" r="2.2" fill="#ffffff" />

        {/* Whiskers (subtle dark cute lines) */}
        {/* Left whiskers */}
        <rect x="135" y="178" width="16" height="4" rx="2" fill="#1c071d" transform="rotate(-6 135 178)" />
        <rect x="137" y="188" width="15" height="4" rx="2" fill="#1c071d" transform="rotate(4 137 188)" />

        {/* Right whiskers */}
        <rect x="250" y="178" width="16" height="4" rx="2" fill="#1c071d" transform="rotate(6 250 178)" />
        <rect x="248" y="188" width="15" height="4" rx="2" fill="#1c071d" transform="rotate(-4 248 188)" />

        {/* Sweet mouth / nose */}
        <path 
          d="M 193 186 C 196 190 200 190 200 186 C 200 190 204 190 207 186" 
          stroke="#1c071d" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
        />

        {/* Front Chubby Paws */}
        {/* Left Paw */}
        <g>
          <ellipse cx="178" cy="335" rx="20" ry="18" fill="url(#pawGrad)" />
          {/* Paw toe splits */}
          <line x1="172" y1="335" x2="172" y2="348" stroke="#8d0047" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="184" y1="335" x2="184" y2="348" stroke="#8d0047" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Right Paw */}
        <g>
          <ellipse cx="226" cy="335" rx="20" ry="18" fill="url(#pawGrad)" />
          {/* Paw toe splits */}
          <line x1="220" y1="335" x2="220" y2="348" stroke="#8d0047" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="232" y1="335" x2="232" y2="348" stroke="#8d0047" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
