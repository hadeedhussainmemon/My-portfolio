import { AnimatePresence, motion } from 'framer-motion';
import React, { Children, cloneElement, useEffect, useState, useId } from 'react';

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}) {
  const [activeId, setActiveId] = useState(null);
  const uniqueId = useId();

  useEffect(() => {
    if (defaultValue !== undefined) {
      setActiveId(defaultValue);
    }
  }, [defaultValue]);

  return Children.map(children, (child) => {
    const id = child.props['data-id'];

    const handleClick = (e) => {
      if (!enableHover) setActiveId(id);
      if (onValueChange) onValueChange(id);
      if (child.props.onClick) child.props.onClick(e);
    };

    const handleMouseEnter = (e) => {
      if (enableHover) setActiveId(id);
      if (child.props.onMouseEnter) child.props.onMouseEnter(e);
    };

    const handleMouseLeave = (e) => {
      if (enableHover) setActiveId(null);
      if (child.props.onMouseLeave) child.props.onMouseLeave(e);
    };

    return cloneElement(child, {
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      className: `${child.props.className || ''} relative`,
      children: (
        <>
          <AnimatePresence initial={false}>
            {activeId === id && (
              <motion.div
                layoutId={`background-${uniqueId}`}
                className={`absolute inset-0 z-0 ${className}`}
                transition={transition}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {child.props.children}
          </div>
        </>
      ),
    });
  });
}
