import { CheckCircle } from 'lucide-react';
import { useCompanyData } from '../../hooks/useCompanyData';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';

export default function WhyChooseUs() {
  const { about } = useCompanyData();

  return (
    <section className="py-20" aria-labelledby="why-heading">
      <Container>
        <SectionHeader
          eyebrow="Why HornTech"
          title="Why Choose Us"
          subtitle="We combine local expertise with international standards to deliver exceptional results."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {about.whyChooseUs.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1"
            >
              <CheckCircle className="h-6 w-6 shrink-0 text-brand" />
              <span className="font-medium text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
