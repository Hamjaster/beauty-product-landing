import { FadeIn } from './FadeIn';

const highlights = [
  'Formulated with organic botanicals and plant-derived actives.',
  'Dermatologist-tested and pH-balanced for all skin types.',
  'Sustainably sourced ingredients with zero synthetic fillers.',
];

export default function RingShowcaseSection() {
  return (
    <section aria-label="Signature Collection" className="relative z-30 overflow-hidden bg-[#FDF8F0]">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 25% 30%, rgba(92, 122, 98, 0.08) 0%, transparent 68%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 78% 68%, rgba(232, 213, 183, 0.2) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="relative z-10 mx-auto grid w-[min(1380px,calc(100%-64px))] gap-6 py-[clamp(88px,11vw,144px)] lg:grid-cols-[1.05fr_0.95fr] max-[1100px]:w-[calc(100%-36px)]">
        <FadeIn direction="up" className="flex items-center">
          <div className="max-w-[36rem]">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-[#2D2D2D]/34">The COSME Difference</p>
            <h2 className="mt-5 text-[clamp(2.25rem,4.8vw,4.2rem)] font-light leading-[1.05] tracking-[-0.03em] text-[#2D2D2D]/92">
              Beauty Rooted in Nature
            </h2>
            <p className="mt-6 text-[clamp(0.95rem,1.25vw,1.05rem)] font-light leading-[1.8] text-[#6B6B6B]">
              Every COSME product is a harmony of nature's finest ingredients and modern skincare science.
            </p>

            <div className="mt-8 h-px w-20 bg-gradient-to-r from-transparent via-[#5C7A62]/40 to-transparent" />

            <div className="mt-8 space-y-4">
              {highlights.map((highlight, index) => (
                <div key={highlight} className="flex items-start gap-4 rounded-[18px] border border-[#5C7A62]/8 bg-white/50 px-4 py-4 backdrop-blur-sm">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#5C7A62]" />
                  <p className="text-[0.92rem] font-light leading-[1.7] text-[#6B6B6B]">
                    <span className="mr-2 text-[#2D2D2D]/28">0{index + 1}</span>
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="rounded-full border border-[#5C7A62]/15 bg-[#5C7A62]/8 px-6 py-3 text-[0.92rem] font-medium text-[#5C7A62] transition-colors duration-200 hover:border-[#5C7A62]/25 hover:bg-[#5C7A62]/12"
              >
                Explore The Collection
              </button>
              <button
                type="button"
                className="rounded-full border border-[#E8D5B7]/40 bg-[#E8D5B7]/15 px-6 py-3 text-[0.92rem] font-medium text-[#2D2D2D]/80 transition-colors duration-200 hover:border-[#E8D5B7]/60 hover:bg-[#E8D5B7]/25"
              >
                Find Your Routine
              </button>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.08} className="relative">
          <div className="relative min-h-[680px] overflow-hidden rounded-[34px] border border-[#5C7A62]/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.5))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.06)] backdrop-blur-sm max-[768px]:min-h-[520px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(92,122,98,0.06)_0%,transparent_48%)]" />
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(92,122,98,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(92,122,98,0.04) 1px, transparent 1px)', backgroundSize: '100% 100%, 64px 64px' }} />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#2D2D2D]/32">Product #1</p>
                  <p className="mt-2 text-[1rem] font-light tracking-[0.18em] text-[#2D2D2D]/58">Signature Moisturizer</p>
                </div>
                <div className="rounded-full border border-[#5C7A62]/10 bg-[#5C7A62]/5 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[#5C7A62]/60">
                  Best Seller
                </div>
              </div>

              <div className="relative flex flex-1 items-center justify-center py-8">
                <div className="absolute inset-12 rounded-full bg-[#5C7A62]/[0.04] blur-3xl" />
                <div className="relative z-10 flex h-[300px] w-[300px] items-center justify-center rounded-full bg-gradient-to-br from-[#E8F0E6] to-[#F0EDE6] shadow-[0_24px_36px_rgba(0,0,0,0.04)]">
                  <span className="text-[4rem] font-light text-[#5C7A62]/40">C</span>
                </div>
              </div>

              <div className="grid gap-3 border-t border-[#5C7A62]/8 pt-5 sm:grid-cols-3">
                <div className="rounded-[18px] border border-[#5C7A62]/8 bg-white/40 px-4 py-4">
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[#2D2D2D]/32">Formula</p>
                  <p className="mt-2 text-[0.92rem] font-light text-[#6B6B6B]">Organic botanicals with hyaluronic acid complex.</p>
                </div>
                <div className="rounded-[18px] border border-[#5C7A62]/8 bg-white/40 px-4 py-4">
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[#2D2D2D]/32">Texture</p>
                  <p className="mt-2 text-[0.92rem] font-light text-[#6B6B6B]">Lightweight, fast-absorbing, non-greasy finish.</p>
                </div>
                <div className="rounded-[18px] border border-[#5C7A62]/8 bg-white/40 px-4 py-4">
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[#2D2D2D]/32">Result</p>
                  <p className="mt-2 text-[0.92rem] font-light text-[#6B6B6B]">Deeply hydrated, radiant skin in 14 days.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

