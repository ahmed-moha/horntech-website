import { ImageIcon } from 'lucide-react';
import { getInitials } from '../../utils/assets';

export default function ImageFallback({
  name,
  className = '',
  size = 'md',
}) {
  const sizeClasses = {
    sm: 'h-12 w-12 text-sm',
    md: 'h-16 w-16 text-base',
    lg: 'h-24 w-24 text-xl',
    xl: 'h-full w-full text-2xl',
  };

  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-brand/20 to-accent/20 font-bold text-brand-dark ${sizeClasses[size]} ${className}`}
      aria-hidden="true"
    >
      {name ? getInitials(name) : <ImageIcon className="h-6 w-6" />}
    </div>
  );
}
