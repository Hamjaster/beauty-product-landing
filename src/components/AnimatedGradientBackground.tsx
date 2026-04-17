import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BlobState {
  x: number;
  y: number;
  size: number;
  opacity: number;
  r: number;
  g: number;
  b: number;
}

const AnimatedGradientBackground = () => {
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const blobs = blobRefs.current.filter(Boolean) as HTMLDivElement[];
    if (blobs.length === 0) return;

    const phases: BlobState[][] = [
      // Phase 1: Sage/cream blend (hero - initial)
      [
        { x: 20, y: 30, size: 55, opacity: 0.35, r: 92, g: 122, b: 98 },
        { x: 78, y: 38, size: 48, opacity: 0.30, r: 232, g: 213, b: 183 },
        { x: 50, y: 62, size: 58, opacity: 0.28, r: 122, g: 158, b: 130 },
        { x: 12, y: 72, size: 42, opacity: 0.25, r: 242, g: 230, b: 208 },
        { x: 65, y: 20, size: 35, opacity: 0.22, r: 61, g: 90, b: 68 },
        { x: 40, y: 80, size: 30, opacity: 0.20, r: 212, g: 184, b: 150 },
      ],
      // Phase 2: Sage fading, cream emerging
      [
        { x: 25, y: 32, size: 58, opacity: 0.32, r: 80, g: 110, b: 88 },
        { x: 74, y: 40, size: 50, opacity: 0.35, r: 232, g: 213, b: 183 },
        { x: 48, y: 60, size: 60, opacity: 0.30, r: 122, g: 158, b: 130 },
        { x: 15, y: 70, size: 44, opacity: 0.28, r: 242, g: 230, b: 208 },
        { x: 60, y: 22, size: 38, opacity: 0.25, r: 92, g: 122, b: 98 },
        { x: 45, y: 78, size: 32, opacity: 0.22, r: 212, g: 184, b: 150 },
      ],
      // Phase 3: Transition midpoint - balanced cream/sage
      [
        { x: 28, y: 28, size: 60, opacity: 0.30, r: 232, g: 213, b: 183 },
        { x: 72, y: 42, size: 52, opacity: 0.35, r: 242, g: 230, b: 208 },
        { x: 48, y: 65, size: 62, opacity: 0.28, r: 122, g: 158, b: 130 },
        { x: 82, y: 68, size: 38, opacity: 0.25, r: 92, g: 122, b: 98 },
        { x: 35, y: 18, size: 40, opacity: 0.32, r: 212, g: 184, b: 150 },
        { x: 55, y: 78, size: 35, opacity: 0.22, r: 61, g: 90, b: 68 },
      ],
      // Phase 4: Cream dominant
      [
        { x: 30, y: 26, size: 62, opacity: 0.35, r: 242, g: 230, b: 208 },
        { x: 70, y: 44, size: 54, opacity: 0.32, r: 232, g: 213, b: 183 },
        { x: 46, y: 66, size: 64, opacity: 0.30, r: 212, g: 184, b: 150 },
        { x: 84, y: 66, size: 40, opacity: 0.25, r: 122, g: 158, b: 130 },
        { x: 32, y: 16, size: 42, opacity: 0.28, r: 92, g: 122, b: 98 },
        { x: 58, y: 80, size: 36, opacity: 0.20, r: 61, g: 90, b: 68 },
      ],
      // Phase 5: Sage return with cream undertones
      [
        { x: 38, y: 22, size: 65, opacity: 0.32, r: 92, g: 122, b: 98 },
        { x: 62, y: 48, size: 55, opacity: 0.35, r: 122, g: 158, b: 130 },
        { x: 18, y: 75, size: 45, opacity: 0.28, r: 232, g: 213, b: 183 },
        { x: 80, y: 28, size: 40, opacity: 0.30, r: 242, g: 230, b: 208 },
        { x: 45, y: 55, size: 50, opacity: 0.25, r: 61, g: 90, b: 68 },
        { x: 70, y: 72, size: 32, opacity: 0.22, r: 212, g: 184, b: 150 },
      ],
      // Phase 6: Atmospheric shift - rich sage with subtle cream
      [
        { x: 32, y: 38, size: 68, opacity: 0.35, r: 61, g: 90, b: 68 },
        { x: 68, y: 28, size: 50, opacity: 0.30, r: 92, g: 122, b: 98 },
        { x: 50, y: 70, size: 55, opacity: 0.28, r: 122, g: 158, b: 130 },
        { x: 15, y: 48, size: 38, opacity: 0.25, r: 232, g: 213, b: 183 },
        { x: 75, y: 55, size: 42, opacity: 0.32, r: 242, g: 230, b: 208 },
        { x: 42, y: 15, size: 35, opacity: 0.22, r: 212, g: 184, b: 150 },
      ],
    ];

    const totalPhases = phases.length - 1;

    const currentStates: BlobState[] = phases[0].map((b) => ({ ...b }));

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: '+=800vh',
        scrub: 3,
        onUpdate: (self) => {
          const progress = self.progress;
          const scaledProgress = progress * totalPhases;
          const currentIndex = Math.min(Math.floor(scaledProgress), totalPhases);
          const nextIndex = Math.min(currentIndex + 1, totalPhases);
          const phaseProgress = scaledProgress - currentIndex;

          blobs.forEach((blob, i) => {
            const start = phases[currentIndex][i % phases[currentIndex].length];
            const end = phases[nextIndex][i % phases[nextIndex].length];

            const cs = currentStates[i];
            cs.x = gsap.utils.interpolate(start.x, end.x, phaseProgress);
            cs.y = gsap.utils.interpolate(start.y, end.y, phaseProgress);
            cs.size = gsap.utils.interpolate(start.size, end.size, phaseProgress);
            cs.opacity = gsap.utils.interpolate(start.opacity, end.opacity, phaseProgress);
            cs.r = Math.round(gsap.utils.interpolate(start.r, end.r, phaseProgress));
            cs.g = Math.round(gsap.utils.interpolate(start.g, end.g, phaseProgress));
            cs.b = Math.round(gsap.utils.interpolate(start.b, end.b, phaseProgress));

            blob.style.left = `${cs.x}%`;
            blob.style.top = `${cs.y}%`;
            blob.style.width = `${cs.size}%`;
            blob.style.height = `${cs.size}%`;
            blob.style.opacity = String(cs.opacity);
            blob.style.background = `radial-gradient(ellipse at center, rgba(${cs.r},${cs.g},${cs.b},0.6) 0%, rgba(${cs.r},${cs.g},${cs.b},0.25) 35%, rgba(${cs.r},${cs.g},${cs.b},0.06) 65%, transparent 100%)`;
          });
        },
      },
    });

    const breatheTl = gsap.timeline({ repeat: -1, yoyo: true, ease: 'sine.inOut' });
    blobs.forEach((blob, i) => {
      breatheTl.to(
        blob,
        {
          x: Math.sin(i * 1.2) * 30,
          y: Math.cos(i * 0.8) * 20,
          scale: 1.08 + i * 0.03,
          duration: 10 + i * 3,
          ease: 'sine.inOut',
        },
        0
      );
    });

    return () => {
      tl.kill();
      breatheTl.kill();
    };
  }, []);

  const initialBlobs: BlobState[] = [
    { x: 20, y: 30, size: 55, opacity: 0.35, r: 92, g: 122, b: 98 },
    { x: 78, y: 38, size: 48, opacity: 0.30, r: 232, g: 213, b: 183 },
    { x: 50, y: 62, size: 58, opacity: 0.28, r: 122, g: 158, b: 130 },
    { x: 12, y: 72, size: 42, opacity: 0.25, r: 242, g: 230, b: 208 },
    { x: 65, y: 20, size: 35, opacity: 0.22, r: 61, g: 90, b: 68 },
    { x: 40, y: 80, size: 30, opacity: 0.20, r: 212, g: 184, b: 150 },
  ];

  return (
    <>
      {/* Base light background */}
      <div aria-hidden="true" className="fixed inset-0 -z-30 bg-[#FDF8F0]" />

      {/* Individual gradient blobs */}
      {initialBlobs.map((blob, i) => (
        <div
          key={i}
          ref={(el) => { blobRefs.current[i] = el; }}
          aria-hidden="true"
          className="fixed rounded-full"
          style={{
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            width: `${blob.size}%`,
            height: `${blob.size}%`,
            opacity: blob.opacity,
            background: `radial-gradient(ellipse at center, rgba(${blob.r},${blob.g},${blob.b},0.6) 0%, rgba(${blob.r},${blob.g},${blob.b},0.25) 35%, rgba(${blob.r},${blob.g},${blob.b},0.06) 65%, transparent 100%)`,
            filter: 'blur(60px)',
            transform: 'translate(-50%, -50%)',
            willChange: 'transform, left, top, width, height, opacity',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Subtle noise texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />
    </>
  );
};

export default AnimatedGradientBackground;
