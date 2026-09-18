import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on desktop devices
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, .cursor-hover')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.head.removeChild(style);
    };
  }, []);

  // Don't render on mobile
  if (typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-emerald-700 pointer-events-none z-[10000] mix-blend-difference hidden md:flex items-center justify-center text-[6px] font-bold text-white tracking-widest overflow-hidden"
      style={{ marginLeft: '-12px', marginTop: '-12px' }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 700, 
        damping: 35, 
        mass: 0.2 
      }}
    >
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        VIEW
      </motion.span>
    </motion.div>
  );
}
