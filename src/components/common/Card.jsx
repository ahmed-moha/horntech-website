export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`rounded-2xl border border-slate-100 bg-white p-6 ${
        hover ? 'transition-all duration-300 hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
