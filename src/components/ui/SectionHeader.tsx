import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badgeText?: string;
  badgeVariant?: 'primary' | 'success' | 'slate' | 'outline' | 'purple';
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeVariant = 'primary',
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badgeText && (
        <div className={`mb-3.5 ${isCenter ? 'flex justify-center' : ''}`}>
          <Badge variant={badgeVariant} dot size="md">
            {badgeText}
          </Badge>
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
        {title}{' '}
        {titleHighlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">
            {titleHighlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
