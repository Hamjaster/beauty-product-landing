import type { ReactNode } from 'react';

interface EcosystemCardProps {
  icon: ReactNode;
  title: string;
}

export default function EcosystemCard({ icon, title }: EcosystemCardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-[28px]"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 100%)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(92, 122, 98, 0.12)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)',
      }}
    >
      {/* Subtle top-left highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px]"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, transparent 60%)',
        }}
      />

      {/* Subtle bottom-right edge highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px]"
        style={{
          background: 'linear-gradient(315deg, rgba(92,122,98,0.06) 0%, transparent 40%)',
        }}
      />

      <div className="relative flex items-center gap-5 p-6">
        {/* Icon container */}
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(92,122,98,0.1) 0%, rgba(92,122,98,0.04) 100%)',
            border: '1px solid rgba(92,122,98,0.15)',
          }}
        >
          <div className="text-[#5C7A62]">{icon}</div>
        </div>

        {/* Divider */}
        <div className="h-10 w-px shrink-0 bg-[#5C7A62]/15" />

        {/* Text */}
        <p className="text-[1.05rem] font-light leading-[1.45] tracking-[0.01em] text-[#2D2D2D]/85">
          {title}
        </p>
      </div>
    </div>
  );
}
