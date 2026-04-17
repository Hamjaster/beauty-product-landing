interface SectionProps {
  children: React.ReactNode;
  className?: string;
  container?: 'narrow' | 'wide' | 'ultrawide';
  id?: string;
}

export function Section({ children, className = '', container = 'wide', id }: SectionProps) {
  const containerClasses = {
    narrow: 'container-narrow',
    wide: 'container-wide',
    ultrawide: 'container-ultrawide',
  };

  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className={containerClasses[container]}>
        {children}
      </div>
    </section>
  );
}
