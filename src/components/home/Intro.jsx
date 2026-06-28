import { useCompanyData } from '../../hooks/useCompanyData';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';

export default function Intro() {
  const { company } = useCompanyData();

  return (
    <section className="py-20" aria-labelledby="intro-heading">
      <Container>
        <SectionHeader
          eyebrow={company.name}
          title={`Welcome to ${company.name}`}
          subtitle={company.description}
        />
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center">
          <p className="text-lg leading-relaxed text-slate-600">
            Since {company.founded}, we have been at the forefront of{' '}
            {company.industry.toLowerCase()} in {company.headquarters.country},
            helping organizations embrace digital innovation with confidence.
          </p>
        </div>
      </Container>
    </section>
  );
}
