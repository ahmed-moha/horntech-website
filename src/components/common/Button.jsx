import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-brand text-white hover:bg-brand-dark focus-visible:ring-brand',
  secondary:
    'border-2 border-brand text-brand hover:bg-brand/5 focus-visible:ring-brand',
  accent:
    'bg-accent text-slate-900 hover:bg-accent-dark focus-visible:ring-accent',
};

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  type = 'button',
  className = '',
  ...props
}) {
  const baseClass =
    'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const classes = `${baseClass} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
