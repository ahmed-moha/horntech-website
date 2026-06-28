import { useCompanyData } from '../../hooks/useCompanyData';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';

export default function Story() {
  const { about, company } = useCompanyData();

  return (
    <section className="py-20" aria-labelledby="story-heading">
      <Container>
        <SectionHeader
          eyebrow="Our Story"
          title="Who We Are"
          subtitle={about.story}
          align="left"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
            <p className="text-lg leading-relaxed text-slate-600">
              {company.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-brand/10 p-6 text-center">
              <p className="text-3xl font-bold text-brand">{company.founded}</p>
              <p className="mt-1 text-sm text-slate-600">Founded</p>
            </div>
            <div className="rounded-2xl bg-accent/10 p-6 text-center">
              <p className="text-3xl font-bold text-accent-dark">
                {company.employees}
              </p>
              <p className="mt-1 text-sm text-slate-600">Employees</p>
            </div>
            <div className="col-span-2 rounded-2xl border border-slate-100 bg-white p-6">
              <p className="text-sm font-medium text-slate-500">Headquarters</p>
              <p className="mt-1 font-semibold text-slate-900">
                {company.headquarters.city}, {company.headquarters.country}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
