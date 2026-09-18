import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

export function Source({ href, children, className }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { href, isHovered })
      )}
    </div>
  );
}

export function SourceTrigger({ href, showFavicon, className }) {
  const domain = href ? new URL(href).hostname.replace('www.', '') : '';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold text-zinc-600 border border-zinc-300 hover:border-emerald-700 hover:text-emerald-700 transition-colors cursor-pointer uppercase tracking-widest",
        className
      )}
    >
      {showFavicon && (
        <img
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
          alt={domain}
          className="w-3.5 h-3.5 rounded-sm grayscale group-hover:grayscale-0"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      )}
      <span>{domain}</span>
    </a>
  );
}

export function SourceContent({ title, description, isHovered, className }) {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 5, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 rounded-none border border-zinc-900 bg-white shadow-xl z-50 pointer-events-none",
            className
          )}
        >
          <div className="space-y-2">
            <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-widest line-clamp-1">{title}</h4>
            {description && (
              <p className="text-xs text-zinc-500 leading-relaxed font-medium line-clamp-3">
                {description}
              </p>
            )}
          </div>
          {/* Triangle pointer */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-zinc-900" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
