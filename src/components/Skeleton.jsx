import React from 'react';

export default function Skeleton({ variant = 'text', className = '' }) {
  const baseStyles = 'animate-pulse bg-slate-800/40 border border-white/5';
  
  const variants = {
    text: 'h-4 w-full rounded-md',
    title: 'h-12 w-3/4 rounded-lg',
    circle: 'rounded-full aspect-square',
    card: 'h-64 rounded-2xl',
    hexagon: 'aspect-square w-full opacity-30',
  };

  if (variant === 'hexagon') {
    return (
      <div className={`relative ${baseStyles} ${className}`} style={{ clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
      </div>
    );
  }

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] translate-x-[-100%] animate-[shimmer_2s_infinite]" />
    </div>
  );
}
