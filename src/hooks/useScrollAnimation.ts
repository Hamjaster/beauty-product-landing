import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation<T extends HTMLElement>(
  animation: (el: T) => gsap.TweenVars | gsap.TimelineVars,
  options?: { trigger?: string; start?: string; end?: string }
) {
  const ref = useRef<T>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const { trigger = ref.current, start = 'top 80%', end = 'top 20%' } = options || {};

    gsap.fromTo(ref.current, animation(ref.current as T), {
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub: 1,
      },
    });
  });

  return ref;
}

export function useParallax(speed = 0.5) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  return ref;
}

export function useTextReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const chars = ref.current.querySelectorAll('.char');

    gsap.fromTo(
      chars,
      { opacity: 0, y: 40, rotateX: -40 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
        },
      }
    );
  });

  return ref;
}
