import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Droplets, Shield, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ScrollCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
  imageColor: string;
}

const cards: ScrollCard[] = [
  {
    icon: <Leaf size={28} strokeWidth={1.5} />,
    title: 'Nature-Inspired Formulas',
    description: 'Every COSME product begins with nature\'s finest ingredients. We source organic botanicals, plant extracts, and mineral-rich compounds from trusted farms around the world.',
    bullets: [
      '100% organic and sustainably sourced ingredients.',
      'Cold-pressed extraction to preserve potency.',
      'Seasonal botanical blends for optimal freshness.',
      'Zero synthetic fillers or harsh chemicals.',
    ],
    imageColor: '#E8F0E6',
  },
  {
    icon: <Droplets size={28} strokeWidth={1.5} />,
    title: 'Science-Backed Results',
    description: 'Nature meets innovation. Our dermatologist-tested formulas combine ancient botanical wisdom with modern skincare science for visible, lasting results.',
    bullets: [
      'Clinically tested for efficacy and safety.',
      'pH-balanced for all skin types.',
      'Dermatologist recommended and approved.',
      'Visible results in as little as 14 days.',
    ],
    imageColor: '#F0EDE6',
  },
  {
    icon: <Shield size={28} strokeWidth={1.5} />,
    title: 'Clean & Conscious Beauty',
    description: 'We believe beauty should never come at a cost to your health or the planet. Every product is cruelty-free, vegan, and packaged in recyclable materials.',
    bullets: [
      'Cruelty-free and 100% vegan formulas.',
      'Recyclable and biodegradable packaging.',
      'Carbon-neutral manufacturing process.',
      'Transparent ingredient sourcing.',
    ],
    imageColor: '#E6EDE8',
  },
  {
    icon: <Globe size={28} strokeWidth={1.5} />,
    title: 'Trusted Worldwide',
    description: 'From our roots in natural wellness to shelves across the globe, COSME has become a trusted name in clean skincare for over 350,000 clients worldwide.',
    bullets: [
      'Available in 40+ countries worldwide.',
      'Award-winning product formulations.',
      'Trusted by dermatologists and estheticians.',
      'Community of 350,000+ happy customers.',
    ],
    imageColor: '#EDE8E0',
  },
];

export default function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const chapterCards = cardRefs.current.filter(
      (card): card is HTMLDivElement => Boolean(card),
    );
    if (!chapterCards.length) return;

    chapterCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          autoAlpha: index === 0 ? 1 : 0.46,
          y: index === 0 ? 0 : 56,
          scale: index === 0 ? 1 : 0.965,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
            end: 'top 42%',
            scrub: 0.9,
            invalidateOnRefresh: true,
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          },
        },
      );

      if (index < chapterCards.length - 1) {
        gsap.to(card, {
          autoAlpha: 0.42,
          y: -26,
          scale: 0.968,
          ease: 'none',
          scrollTrigger: {
            trigger: chapterCards[index + 1],
            start: 'top 80%',
            end: 'top 42%',
            scrub: 0.9,
            invalidateOnRefresh: true,
          },
        });
      }
    });

    if (stageRef.current) {
      gsap.fromTo(
        stageRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      );

      gsap.to(stageRef.current, {
        y: -38,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.1,
          invalidateOnRefresh: true,
        },
      });
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      aria-label="Our Philosophy"
      className="relative z-30 overflow-clip bg-[#F5EDE0]"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(92, 122, 98, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 70% 60%, rgba(232, 213, 183, 0.4) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="relative z-10 mx-auto w-[min(1380px,calc(100%-64px))] py-[clamp(96px,13vw,180px)] max-[1100px]:w-[calc(100%-36px)]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <aside className="lg:sticky lg:top-[16vh] lg:h-fit">
            <div
              ref={stageRef}
              className="rounded-[28px] border border-[#5C7A62]/12 bg-white/68 p-[clamp(28px,3.2vw,46px)] backdrop-blur-sm"
            >
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-[#2D2D2D]/36">
                Rooted In Nature
              </p>
              <h2 className="mt-5 text-[clamp(2.05rem,4.3vw,3.7rem)] font-light leading-[1.08] tracking-[-0.03em] text-[#2D2D2D]/92">
                Our Philosophy In Four Chapters
              </h2>
              <p className="mt-5 max-w-md text-[clamp(0.9rem,1.15vw,1rem)] font-light leading-[1.75] text-[#6B6B6B]">
                Scroll through each chapter to explore how COSME combines nature,
                science, and trust into a single ritual.
              </p>

              <div className="mt-8 space-y-3">
                {cards.map((card, index) => (
                  <div key={card.title} className="flex items-center gap-3">
                    <span
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? 'w-11 bg-[#5C7A62]/75'
                          : 'w-6 bg-[#5C7A62]/22'
                      }`}
                    />
                    <span className="text-[0.78rem] font-light uppercase tracking-[0.14em] text-[#2D2D2D]/46">
                      Chapter {index + 1}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[20px] border border-[#5C7A62]/10 bg-[#FDF8F0]/85 px-5 py-4">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[#2D2D2D]/36">
                  Current Focus
                </p>
                <p className="mt-2 text-[0.95rem] font-medium leading-[1.45] text-[#2D2D2D]/88">
                  {cards[activeIndex]?.title}
                </p>
              </div>
            </div>
          </aside>

          <div className="space-y-[clamp(24px,3vw,44px)] pb-[clamp(24px,5vh,60px)] lg:pt-[16vh]">
            {cards.map((card, i) => (
              <article
                key={card.title}
                ref={(el: HTMLDivElement | null) => {
                  cardRefs.current[i] = el;
                }}
                className="relative overflow-hidden rounded-[26px] border border-[#5C7A62]/10 bg-white/78 p-[clamp(24px,3vw,42px)] shadow-[0_12px_32px_rgba(45,45,45,0.05)] backdrop-blur-sm"
              >
                <div
                  className="absolute inset-0 opacity-65"
                  style={{
                    background: `linear-gradient(140deg, ${card.imageColor} 0%, rgba(255,255,255,0.72) 58%)`,
                  }}
                />
                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full border border-[#5C7A62]/18 bg-[#5C7A62]/10 text-[#5C7A62]">
                      {card.icon}
                    </div>
                    <span className="text-[0.74rem] font-medium uppercase tracking-[0.22em] text-[#2D2D2D]/45">
                      Chapter {i + 1}
                    </span>
                  </div>

                  <h3 className="text-[clamp(1.35rem,2.2vw,2rem)] font-medium leading-[1.2] tracking-[-0.015em] text-[#2D2D2D]/92">
                    {card.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-[clamp(0.9rem,1.05vw,0.98rem)] font-light leading-[1.75] text-[#6B6B6B]">
                    {card.description}
                  </p>

                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {card.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#5C7A62]" />
                        <span className="text-[0.86rem] font-light leading-[1.7] text-[#6B6B6B]">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
