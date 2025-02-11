import type React from 'react';
import { useState, useLayoutEffect, useCallback } from 'react';

interface RippleProps {
  duration?: number;
  color?: string;
}

interface RippleStyle {
  x: number;
  y: number;
  size: number;
}

export const Ripple: React.FC<RippleProps> = ({
  duration = 500,
  color = 'rgba(255, 255, 255, 0.3)',
}) => {
  const [ripples, setRipples] = useState<RippleStyle[]>([]);

  const addRipple = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rippleContainer.width, rippleContainer.height);
    const x = event.clientX - rippleContainer.left - size / 2;
    const y = event.clientY - rippleContainer.top - size / 2;
    const newRipple = { x, y, size };

    setRipples((prevRipples) => [...prevRipples, newRipple]);
  }, []);

  useLayoutEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prevRipples) => prevRipples.slice(1));
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [ripples, duration]);

  return (
    <span
      className="absolute inset-0 overflow-hidden rounded-[inherit] z-0"
      onMouseDown={addRipple}
    >
      {ripples.map((ripple, index) => (
        <span
          key={index}
          style={{
            position: 'absolute',
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            borderRadius: '50%',
            backgroundColor: color,
            transform: 'scale(0)',
            animation: `ripple ${duration}ms linear`,
          }}
        />
      ))}
    </span>
  );
};
