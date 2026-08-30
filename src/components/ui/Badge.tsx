import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'slate' | 'outline' | 'dark' | 'warning' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  dot = false,
}) => {
  const variantStyles = {
    primary: 'bg-brand-50 text-brand-700 border-brand-200/80',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
    outline: 'bg-white text-slate-700 border-slate-300',
    dark: 'bg-slate-900 text-slate-200 border-slate-700',
    warning: 'bg-amber-50 text-amber-700 border-amber-200/80',
    purple: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
  };

  const dotColors = {
    primary: 'bg-brand-600',
    success: 'bg-emerald-500',
    slate: 'bg-slate-500',
    outline: 'bg-brand-500',
    dark: 'bg-brand-400',
    warning: 'bg-amber-500',
    purple: 'bg-indigo-500',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-2.5 py-1 font-medium',
    lg: 'text-sm px-3.5 py-1.5 font-medium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColors[variant]}`} />
      )}
      {children}
    </span>
  );
};
