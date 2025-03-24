
import React, { useEffect, useRef } from 'react';

interface RevealAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: string;
  threshold?: number;
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({
  children,
  className = "",
  delay = 0,
  animation = "animate-fade-in",
  threshold = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(animation);
            entry.target.classList.add("opacity-100");
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animation, delay, threshold]);

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};

export default RevealAnimation;
