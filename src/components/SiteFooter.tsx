import { FadeIn } from './FadeIn';

const footerLinks = ['Home', 'About', 'Products', 'Ingredients', 'Contact'];

export default function SiteFooter() {
  return (
    <footer aria-label="Site Footer" className="relative z-30 overflow-hidden border-t border-[#5C7A62]/8 bg-[#F5EDE0]">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(ellipse 75% 60% at 50% 0%, rgba(92, 82, 43, 0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 mx-auto w-[min(1380px,calc(100%-64px))] py-[clamp(40px,5vw,72px)] max-[1100px]:w-[calc(100%-36px)]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn direction="up" className="w-full" style={{ maxWidth: '34rem' }}>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-[#2D2D2D]/32">COSME</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3.8vw,3rem)] font-light leading-[1.1] tracking-[-0.03em] text-[#2D2D2D]/92">
              Discover the nature of beautiful skin.
            </h2>
            <p className="mt-5 text-[0.96rem] font-light leading-[1.8] text-[#6B6B6B]">
              Premium organic skincare crafted from nature's finest ingredients. Trusted by over 350,000 clients worldwide since 2008.
            </p>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-[#2D2D2D]/30">Navigation</p>
              <div className="mt-4 space-y-3">
                {footerLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-[0.96rem] font-light text-[#2D2D2D]/72 no-underline transition-colors duration-200 hover:text-[#5C7A62]"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-[#2D2D2D]/30">Contact</p>
              <div className="mt-4 space-y-3 text-[0.96rem] font-light text-[#6B6B6B]">
                <p>Worldwide</p>
                <p>hello@cosme.com</p>
                <p>+1 800 COSME SKIN</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#5C7A62]/8 pt-5 text-[0.78rem] font-light tracking-[0.08em] text-[#2D2D2D]/32 sm:flex-row sm:items-center sm:justify-between">
          <p>2026 COSME. All rights reserved.</p>
          <p>Organic skincare, crafted with nature's finest ingredients.</p>
        </div>
      </div>
    </footer>
  );
}

