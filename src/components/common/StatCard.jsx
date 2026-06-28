export default function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1">
      <p className="text-4xl font-bold text-brand">{value}</p>
      <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
    </div>
  );
}
