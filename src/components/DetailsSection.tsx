import { FadeIn } from './FadeIn';

const detailCards = [
  {
    label: 'Clients',
    value: '350K+',
    title: 'Happy Customers Worldwide',
    description: 'A global community of people who trust COSME for their daily skincare ritual.',
    variant: 'rings',
  },
  {
    label: 'Experience',
    value: '16+',
    title: 'Years of Natural Beauty',
    description: 'Over a decade and a half of perfecting organic skincare formulations.',
    variant: 'stat',
  },
  {
    label: 'Products',
    value: '50+',
    title: 'Signature Formulations',
    description: 'A curated collection of cleansers, serums, moisturizers, and treatments.',
    variant: 'stat',
  },
  {
    label: 'Reach',
    value: '40+',
    title: 'Countries Served',
    description: 'From local roots to global shelves — COSME is trusted across continents.',
    variant: 'wide',
  },
  
] as const;

function DetailCard({
  label,
  value,
  title,
  description,
  variant,
}: (typeof detailCards)[number]) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[30px] border border-[#5C7A62]/8 bg-white/40 backdrop-blur-sm transition-colors duration-300 hover:border-[#5C7A62]/15 ${
        variant === 'rings'
          ? 'min-h-[360px] lg:row-span-2'
          : variant === 'wide'
            ? 'min-h-[170px] lg:col-span-2'
            : 'min-h-[170px]'
      }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.6),transparent_42%)]" />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(92,122,98,0.06) 0%, transparent 45%)' }} />

      {variant === 'rings' ? (
        <div className="relative flex h-full min-h-[360px] flex-col justify-between p-[clamp(24px,3vw,38px)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#2D2D2D]/35">{label}</p>
              <p className="mt-2 text-[clamp(2.4rem,5vw,4rem)] font-light leading-none tracking-[-0.04em] text-[#2D2D2D]/92">{value}</p>
            </div>
            <div className="h-12 w-12 rounded-full border border-[#5C7A62]/10 bg-[#5C7A62]/5" />
          </div>

          <div className="mx-auto grid place-items-center py-4">
            <div className="relative h-[240px] w-[240px] rounded-full border border-[#5C7A62]/8 bg-[radial-gradient(circle_at_center,rgba(92,122,98,0.06)_0%,rgba(92,122,98,0.02)_42%,transparent_72%)]">
              <span className="absolute inset-8 rounded-full border border-[#5C7A62]/6" />
              <span className="absolute inset-16 rounded-full border border-[#5C7A62]/8" />
              <span className="absolute inset-24 rounded-full border border-[#5C7A62]/10" />
              <span className="absolute inset-[45%] rounded-full bg-[#5C7A62] shadow-[0_0_32px_rgba(92,122,98,0.18)]" />
            </div>
          </div>

          <div className="max-w-[24rem]">
            <h3 className="text-[clamp(1.4rem,2vw,1.85rem)] font-medium leading-[1.15] tracking-[-0.02em] text-[#2D2D2D]/92">{title}</h3>
            <p className="mt-4 text-[0.95rem] font-light leading-[1.75] text-[#6B6B6B]">{description}</p>
          </div>
        </div>
      ) : (
        <div
          className={`relative flex h-full flex-col justify-between p-[clamp(22px,2.8vw,34px)] ${
            variant === 'frame' ? 'min-h-[220px]' : 'min-h-[170px]'
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#2D2D2D]/32">{label}</p>
              <p className="mt-3 text-[clamp(2rem,3.4vw,2.8rem)] font-light leading-none tracking-[-0.04em] text-[#2D2D2D]/90">{value}</p>
            </div>
            <div className="mt-1 h-9 w-9 rounded-full border border-[#5C7A62]/12 bg-[#5C7A62]/6" />
          </div>

          <div className="mt-10 max-w-[32rem]">
            <h3 className="text-[clamp(1.1rem,1.6vw,1.35rem)] font-medium leading-[1.25] tracking-[-0.015em] text-[#2D2D2D]/90">{title}</h3>
            <p className="mt-3 text-[0.88rem] font-light leading-[1.75] text-[#6B6B6B]">{description}</p>
          </div>

          {variant === 'frame' ? (
            <div className="absolute inset-x-0 bottom-0 h-[44%] overflow-hidden">
              <div className="absolute left-[-10%] bottom-[-22%] h-[140%] w-[70%] rounded-full border border-[#5C7A62]/6" />
              <div className="absolute left-[6%] bottom-[-40%] h-[150%] w-[76%] rounded-full border border-[#5C7A62]/4" />
              <div className="absolute right-[-4%] bottom-[-18%] h-[80%] w-[54%] rotate-45 rounded-[44px] border border-[#5C7A62]/6" />
            </div>
          ) : null}

          {variant === 'seal' ? (
            <div className="absolute right-6 bottom-6 h-24 w-24 rounded-full border border-[#5C7A62]/6 bg-[radial-gradient(circle_at_center,rgba(92,122,98,0.04),transparent_68%)]" />
          ) : null}
        </div>
      )}
    </article>
  );
}

export default function DetailsSection() {
  return (
    <section aria-label="Our Impact" className="relative z-30 overflow-hidden bg-[#FDF8F0]">
      <div
        className="absolute inset-0 opacity-35"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 25%, rgba(92, 122, 98, 0.06) 0%, transparent 68%)',
          filter: 'blur(90px)',
        }}
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 65% 70%, rgba(232, 213, 183, 0.15) 0%, transparent 72%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 mx-auto w-[min(1380px,calc(100%-64px))] py-[clamp(88px,11vw,144px)] max-[1100px]:w-[calc(100%-36px)]">
        <FadeIn direction="up" className="mx-auto mb-[clamp(44px,5vw,72px)] max-w-[760px] text-center">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-[#2D2D2D]/34">The Numbers Behind The Glow</p>
          <h2 className="mt-5 text-[clamp(2.2rem,4.8vw,4rem)] font-light leading-[1.08] tracking-[-0.03em] text-[#2D2D2D]/92">
            Our Impact
          </h2>
          <p className="mx-auto mt-5 max-w-[42rem] text-[clamp(0.95rem,1.3vw,1.05rem)] font-light leading-[1.8] text-[#6B6B6B]">
            Real numbers that reflect our commitment to natural beauty and customer trust.
          </p>
          <div className="mx-auto mt-7 h-px w-20 bg-gradient-to-r from-transparent via-[#5C7A62]/40 to-transparent" />
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:auto-rows-[minmax(170px,auto)]">
          {detailCards.map((card, index) => (
            <div
              key={card.title}
              className={`${
                index === 0
                  ? 'lg:col-span-5 lg:row-span-2'
                  : index === 1
                    ? 'lg:col-span-3'
                    : index === 2
                      ? 'lg:col-span-4'
                      : index === 3
                        ? 'lg:col-span-7'
                        : index === 4
                          ? 'lg:col-span-5'
                          : 'lg:col-span-3'
              }`}
            >
              <FadeIn direction="up" delay={index * 0.06}>
                <DetailCard {...card} />
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
