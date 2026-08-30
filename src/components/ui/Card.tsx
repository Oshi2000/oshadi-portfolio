import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'dark' | 'outline' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300 relative';

  const variantStyles = {
    default: 'bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-slate-300',
    glass: 'glass-panel shadow-subtle hover:shadow-card hover:border-brand-200/80',
    dark: 'bg-slate-900 border border-slate-800 text-white shadow-card',
    outline: 'bg-transparent border border-slate-200 hover:border-slate-300 hover:bg-slate-50/50',
    interactive: 'bg-white border border-slate-200 shadow-card hover:shadow-card-hover hover:border-brand-300 hover:-translate-y-1 cursor-pointer',
  };

  const paddingStyles = {
    none: '',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-7',
    lg: 'p-8 sm:p-10',
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
