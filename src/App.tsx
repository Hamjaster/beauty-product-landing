import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Menu, MoonStar, Users, Sparkles, Heart, X } from 'lucide-react';
import AnimatedGradientBackground from './components/AnimatedGradientBackground';
import EcosystemCard from './components/EcosystemCard';
import HorizontalScrollSection from './components/HorizontalScrollSection';
import { DetailsSection, SiteFooter } from './components';
import product from './assets/bottle.svg';
gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Values', href: '#values' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
] as const;

function App() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const ecosystemSectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Shoe float animation: hero right → ecosystem center
  useGSAP(() => {
    if (!imageRef.current || !aboutTextRef.current || !aboutSectionRef.current) return;

    gsap.to(imageRef.current, {
      width: '38vw',
      scale: 1.08,
      scrollTrigger: {
        trigger: aboutSectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      },
    });

    gsap.fromTo(
      aboutTextRef.current,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: 'top 40%',
          end: 'top 10%',
          scrub: 1.5,
        },
      });
    
  });

  useGSAP(() => {
    if (!ecosystemSectionRef.current || !imageRef.current || !aboutSectionRef.current) return;

    const cards = cardRefs.current.filter(Boolean);

    cards.forEach((card, i) => {
      const isLeft = i % 2 === 0;
      const isTop = i < 2;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: isLeft ? -80 : 80,
          y: isTop ? -60 : 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ecosystemSectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1.5,
          },
        },
      );
    });

    gsap.to(imageRef.current, {
      x: 0,
      y: "-45%",
      scale: 0.65,
      width: () => (window.innerWidth < 768 ? '72vw' : window.innerWidth < 1100 ? '54vw' : '44vw'),
      transformOrigin: '50% 50%',
      ease: 'none',
      overwrite: true,
      scrollTrigger: {
        trigger: ecosystemSectionRef.current,
        start: 'top 72%',
        end: 'top 24%',
        scrub: 1.1,
        invalidateOnRefresh: true,
      },
    });
  });

  return (
    <main className="text-[#2D2D2D]">
      {/* Animated gradient background (subtle, behind everything) */}
      <AnimatedGradientBackground />

      {/* ===== GLOBAL FIXED HEADER ===== */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex w-[min(1380px,calc(100%-64px))] items-start justify-between gap-4 pt-[18px] max-[1100px]:w-[calc(100%-36px)]">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-[10px] justify-self-start text-[#5C7A62] no-underline">
          <div className="flex flex-col gap-[2px] text-[26px] font-medium leading-[0.84] tracking-[0.04em] max-[768px]:text-[22px]">
            <span>COSME</span>
          </div>
          <div className="relative h-[44px] w-[52px] opacity-95">
            <span className="absolute inset-[3px] rounded-[28px] border-2 border-[#5C7A62]/40" />
            <span className="absolute right-4 top-2 h-[27px] w-[20px] rotate-12 rounded-[20px] border-2 border-[#5C7A62]/40" />
          </div>
        </a>

        {/* Navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-[clamp(22px,2.3vw,48px)] rounded-full border border-[#5C7A62]/10 bg-white/50 px-6 py-3 backdrop-blur-[10px] lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-[13px] font-light text-[#2D2D2D]/72 no-underline transition-colors duration-200 hover:text-[#5C7A62]"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="relative flex items-center gap-2">
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#5C7A62]/12 bg-white/70 text-[#5C7A62] backdrop-blur-[10px] transition-colors duration-200 hover:bg-white/90 lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
          </button>
        </div>
        </div>

        <div className="mx-auto w-[min(1380px,calc(100%-64px))] max-[1100px]:w-[calc(100%-36px)]">
          <div
            id="mobile-navigation"
            className={`mt-3 overflow-hidden rounded-[24px] border border-[#5C7A62]/10 bg-white/82 backdrop-blur-[18px] transition-all duration-300 lg:hidden ${mobileMenuOpen ? 'max-h-[26rem] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="grid gap-2 p-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-[18px] border border-transparent px-4 py-3 text-[0.95rem] font-medium text-[#2D2D2D]/82 no-underline transition-colors duration-200 hover:border-[#5C7A62]/10 hover:bg-[#FDF8F0] hover:text-[#5C7A62]"
                >
                  <span>{link.label}</span>
                  <MoonStar className="h-4 w-4 opacity-40" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section id="home" aria-label="Hero" className="relative min-h-screen scroll-mt-24 overflow-hidden bg-[#FDF8F0]">
        {/* Subtle decorative blob — top right, very soft */}
        <div
          className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(232,213,183,0.5) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Subtle decorative blob — bottom left */}
        <div
          className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(92,122,98,0.2) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="relative -mt-24 z-10 flex min-h-screen flex-col items-center justify-center px-6  pb-0">
          {/* Top content area */}
          <div className="flex flex-col items-center text-center">
            {/* Eyebrow label */}
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.35em] text-[#5C7A62]/60 mb-5">
              Discover the Nature with
            </p>

            {/* Main heading */}
            <h1 className="flex items-baseline gap-[0.15em] text-[clamp(2.9rem,6.8vw,5.9rem)] font-light leading-[0.95] tracking-[-0.03em] text-[#2D2D2D]">
              <span>COSME</span>
              <span className="font-normal text-[#5C7A62]">TIC</span>
            </h1>

            {/* Body copy */}
            <p className="mt-5 max-w-120 text-[clamp(0.82rem,1vw,0.95rem)] font-light leading-[1.7] text-[#6B6B6B]">
              At PureGlow Skincare, we believe in the power of nature to nurture
              and restore your skin. Our products are crafted with the purest
              organic ingredients, harnessing the gifts of the earth to create a
              radiant, healthy glow for your skin.
            </p>

            {/* CTA Button */}
            <button
              type="button"
              className="mt-7 inline-flex items-center gap-2 rounded-lg border border-[#5C7A62]/25 bg-[#5C7A62] px-7 py-3 text-[0.88rem] font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#3D5A44] hover:shadow-md"
            >
              Learn More
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* ===== PRODUCT IMAGE AREA — bottom center ===== */}
          
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-[#2D2D2D]/30">
            <span className="text-[0.65rem] uppercase tracking-[0.2em]">Scroll</span>
            <div className="h-8 w-5 rounded-full border border-[#2D2D2D]/20 flex items-start justify-center p-1">
              <div className="h-1.5 w-1.5 rounded-full bg-[#5C7A62]/50 animate-bounce" />
            </div>
          </div>
        </div> */}
      </section>
        <div ref={aboutSectionRef} className="start-scale"></div>

      <div
            ref={imageRef}
            className="pointer-events-none fixed left-1/2 top-1/2 z-10 w-[34vw] -translate-x-1/2 -translate-y-1/2"
          >
            <img src={product} className=' h-auto w-full object-contain '  />
   
          </div>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" ref={aboutSectionRef} aria-label="About" className="relative h-screen scroll-mt-24 bg-[#FDF8F0]">
        <div className="pt-[80px]">
          <div className="h-[18vh]" />

          <div
            ref={aboutTextRef}
            className="relative z-[5] mx-auto w-[min(900px,calc(100%-32px))] text-center text-[#5C7A62]"
          >
            <p className="text-[clamp(1.5rem,3.2vw,2.4rem)] font-light leading-[1.5] tracking-[0.01em]">
              We are COSME — a premium organic skincare brand dedicated to harnessing nature's finest ingredients for radiant, healthy skin.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ECOSYSTEM SECTION ===== */}
      <section id="values" ref={ecosystemSectionRef} aria-label="Our Values" className="relative h-screen scroll-mt-24 bg-[#F5EDE0]">
        <div className="relative mx-auto flex h-full w-[min(1380px,calc(100%-64px))] items-center justify-center max-[1100px]:w-[calc(100%-36px)]">
          {/* Cards grid */}
          <div className="relative z-20 grid h-full w-full grid-cols-2 grid-rows-2 gap-6 py-16 max-[768px]:grid-cols-1 max-[768px]:grid-rows-4 max-[768px]:gap-4">
            <div
              ref={(el) => { cardRefs.current[0] = el; }}
              className="flex items-start justify-start pt-8 max-[768px]:order-1 max-[768px]:pt-0"
            >
              <EcosystemCard
                icon={<Leaf size={26} strokeWidth={1.8} />}
                title="100% Organic Ingredients Sourced From Trusted Farms Worldwide."
              />
            </div>

            <div
              ref={(el) => { cardRefs.current[1] = el; }}
              className="flex items-start justify-end pt-8 max-[768px]:order-2 max-[768px]:pt-0"
            >
              <EcosystemCard
                icon={<Users size={26} strokeWidth={1.8} />}
                title="Trusted By Over 350,000 Clients Across 40+ Countries."
              />
            </div>

            <div
              ref={(el) => { cardRefs.current[2] = el; }}
              className="flex items-end justify-start pb-8 max-[768px]:order-3 max-[768px]:pb-0"
            >
              <EcosystemCard
                icon={<Sparkles size={26} strokeWidth={1.8} />}
                title="Science-Backed Formulas That Deliver Visible Results."
              />
            </div>

            <div
              ref={(el) => { cardRefs.current[3] = el; }}
              className="flex items-end justify-end pb-8 max-[768px]:order-4 max-[768px]:pb-0"
            >
              <EcosystemCard
                icon={<Heart size={26} strokeWidth={1.8} />}
                title="Cruelty-Free, Vegan, And Sustainably Packaged."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== HORIZONTAL SCROLL SECTION ===== */}
      <HorizontalScrollSection />
      <DetailsSection />
      <SiteFooter />

    </main>
  );
}

export default App;
