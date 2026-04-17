import { motion, type MotionProps } from 'framer-motion';

interface GlassCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = true, ...motionProps }: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card rounded-xl p-6 ${hover ? 'transition-all duration-300 hover:border-border-medium hover:bg-glass-bg/50' : ''} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
