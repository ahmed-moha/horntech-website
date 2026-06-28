import { Code, Network, Shield } from 'lucide-react';
import { useCompanyData } from '../../hooks/useCompanyData';
import Card from '../common/Card';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';

const iconMap = {
  code: Code,
  network: Network,
  shield: Shield,
};

export default function FeaturedServices() {
  const { services } = useCompanyData();

  return (
    <section className="bg-slate-50 py-20" aria-labelledby="services-heading">
      <Container>
        <SectionHeader
          eyebrow="What We Do"
          title="Featured Services"
          subtitle="Comprehensive technology solutions tailored for your business needs."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <Card key={service.id}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p className="mt-2 text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Button to="/services">View All Services</Button>
        </div>
      </Container>
    </section>
  );
}
