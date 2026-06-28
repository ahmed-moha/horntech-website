import { Award } from 'lucide-react';
import { useCompanyData } from '../../hooks/useCompanyData';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';

export default function Certifications() {
  const { certifications } = useCompanyData();

  return (
    <section className="py-20" aria-labelledby="certifications-heading">
      <Container>
        <SectionHeader
          eyebrow="Recognition"
          title="Certifications & Partnerships"
          subtitle="Industry-recognized standards and partnerships that validate our expertise."
        />
        <div className="flex flex-wrap justify-center gap-4">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-6 py-4 transition-all duration-300 hover:-translate-y-1"
            >
              <Award className="h-6 w-6 text-accent" />
              <span className="font-semibold text-slate-800">{cert}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
