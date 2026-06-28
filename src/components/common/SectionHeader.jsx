export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignment =
    align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <div className={`mb-12 flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-brand/10 px-4 py-1 text-sm font-semibold text-brand-dark">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-slate-600">{subtitle}</p>
      )}
    </div>
  );
}
