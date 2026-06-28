import { Eye, Target } from 'lucide-react';
import { useCompanyData } from '../../hooks/useCompanyData';
import Card from '../common/Card';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';

export default function MissionVision() {
  const { company } = useCompanyData();

  return (
    <section className="bg-slate-50 py-20" aria-labelledby="mission-heading">
      <Container>
        <SectionHeader
          eyebrow="Purpose"
          title="Mission & Vision"
          subtitle="Guiding principles that drive everything we do."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="mt-3 text-slate-600">{company.mission}</p>
          </Card>
          <Card>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent-dark">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Our Vision</h3>
            <p className="mt-3 text-slate-600">{company.vision}</p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
