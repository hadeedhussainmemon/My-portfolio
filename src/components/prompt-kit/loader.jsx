import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function Loader({ variant = 'terminal', className }) {
  if (variant === 'pulse') {
    return (
      <div className={cn("flex space-x-1.5", className)}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2.5 h-2.5 bg-blue-500 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    );
  }
  
  if (variant === 'terminal') {
    return (
      <div className={cn("font-mono text-blue-500 text-lg flex items-center gap-1 font-bold", className)}>
        <span>{`> compiling_portfolio`}</span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          _
        </motion.span>
      </div>
    );
  }

  if (variant === 'text-shimmer') {
    return (
      <div className={cn("relative overflow-hidden text-gray-500 font-bold", className)}>
        <span className="opacity-30">LOADING...</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
          animate={{ x: ['-200%', '200%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          style={{ width: '100%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          LOADING...
        </motion.div>
      </div>
    );
  }

  // classic spinner
  return (
    <motion.div
      className={cn("w-6 h-6 border-2 border-blue-500/20 border-t-blue-500 rounded-full", className)}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  );
}
