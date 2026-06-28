import { useCompanyData } from '../../hooks/useCompanyData';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';

export default function Values() {
  const { company } = useCompanyData();

  return (
    <section className="py-20" aria-labelledby="values-heading">
      <Container>
        <SectionHeader
          eyebrow="Culture"
          title="Core Values"
          subtitle="The values that define our culture and shape our relationships."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {company.values.map((value, index) => (
            <div
              key={value}
              className="rounded-2xl border border-slate-100 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="mt-4 font-semibold text-slate-900">{value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
