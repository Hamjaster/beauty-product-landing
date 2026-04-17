import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Sparkles, Heart, Shield } from 'lucide-react';
import { FadeIn } from './FadeIn';

gsap.registerPlugin(ScrollTrigger);

const approachCards = [
  {
    icon: <Leaf size={24} strokeWidth={1.5} />,
    title: 'Nature As Our Foundation',
    description: 'Every formula starts with the earth\'s purest ingredients — organic botanicals, plant extracts, and mineral-rich compounds.',
    bgGradient: 'from-[#E8F0E6] via-[#F0EDE6] to-[#F5EDE0]',
  },
  {
    icon: <Sparkles size={24} strokeWidth={1.5} />,
    title: 'Science As Our Guide',
    description: 'We blend ancient botanical wisdom with modern dermatological science for formulas that truly work.',
    bgGradient: 'from-[#F0EDE6] via-[#EDE8E0] to-[#F5EDE0]',
  },
  {
    icon: <Heart size={24} strokeWidth={1.5} />,
    title: 'Care As Our Promise',
    description: 'Cruelty-free, vegan, and sustainably packaged — because beauty should never come at a cost to the planet.',
    bgGradient: 'from-[#E6EDE8] via-[#E8F0E6] to-[#F0EDE6]',
  },
  {
    icon: <Shield size={24} strokeWidth={1.5} />,
    title: 'Trust As Our Legacy',
    description: 'Over 350,000 clients worldwide trust COSME for clean, effective skincare that delivers visible results.',
    bgGradient: 'from-[#EDE8E0] via-[#F5EDE0] to-[#E8F0E6]',
  },
];

export default function ApproachSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const cards = cardRefs.current.filter(Boolean);

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top 75%`,
            end: `top 40%`,
            scrub: 1,
          },
          delay: i * 0.1,
        },
      );
    });
  });

  return (
    <section
      ref={sectionRef}
      aria-label="Our Philosophy"
      className="relative z-30 overflow-hidden bg-[#F5EDE0]"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#F5EDE0]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(92, 122, 98, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 60% 70%, rgba(232, 213, 183, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 mx-auto w-[min(1380px,calc(100%-64px))] py-[clamp(80px,10vw,140px)] max-[1100px]:w-[calc(100%-36px)]">
        {/* Section title */}
        <FadeIn direction="up" className="mb-[clamp(48px,6vw,80px)] text-center">
          <h2 className="text-[clamp(2rem,4.2vw,3.2rem)] font-light leading-[1.15] tracking-[-0.01em] text-[#2D2D2D]/90">
            Our Philosophy
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#5C7A62]/40 to-transparent" />
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-6 max-[768px]:grid-cols-1 max-[768px]:gap-4">
          {approachCards.map((card, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="group relative overflow-hidden rounded-[20px] border border-[#5C7A62]/8 bg-white/60 backdrop-blur-sm transition-all duration-500 hover:border-[#5C7A62]/20"
            >
              {/* Card background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-60 transition-opacity duration-500 group-hover:opacity-80`}
              />

              {/* Subtle glow on hover */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, rgba(92, 122, 98, 0.08) 0%, transparent 60%)',
                }}
              />

              <div className="relative flex min-h-[220px] flex-col justify-between p-[clamp(24px,3vw,40px)] max-[768px]:min-h-[180px]">
                {/* Icon + Title */}
                <div>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#5C7A62]/15 bg-[#5C7A62]/8 text-[#5C7A62] transition-colors duration-300 group-hover:border-[#5C7A62]/25 group-hover:bg-[#5C7A62]/12">
                    {card.icon}
                  </div>
                  <h3 className="text-[clamp(1.1rem,1.8vw,1.4rem)] font-medium leading-[1.25] tracking-[-0.01em] text-[#2D2D2D]/85">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-4 text-[clamp(0.82rem,1vw,0.92rem)] font-light leading-[1.7] text-[#6B6B6B]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
