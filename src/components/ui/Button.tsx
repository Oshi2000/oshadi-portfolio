import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark' | 'success';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  href,
  target,
  rel,
  download,
  isLoading = false,
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variantStyles = {
    primary: 'bg-brand-600 hover:bg-brand-700 text-white shadow-sm hover:shadow-glow hover:-translate-y-0.5 border border-brand-500/30',
    secondary: 'bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-subtle hover:-translate-y-0.5',
    outline: 'bg-transparent hover:bg-brand-50 text-brand-700 border border-brand-200 hover:border-brand-300',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900',
    dark: 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow-card hover:-translate-y-0.5 border border-slate-700',
    success: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-glow-qa hover:-translate-y-0.5 border border-emerald-500/30',
  };

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
        className={combinedClassName}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
            <span>{children}</span>
            {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
          </>
        )}
      </a>
    );
  }

  return (
    <button className={combinedClassName} disabled={isLoading} {...props}>
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
        </>
      )}
    </button>
  );
};
