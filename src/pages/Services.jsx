import { useCompanyData } from '../hooks/useCompanyData';
import Button from '../components/common/Button';
import Container from '../components/common/Container';
import SectionHeader from '../components/common/SectionHeader';
import ServiceCard from '../components/services/ServiceCard';

export default function Services() {
  const { company, services, contacts } = useCompanyData();

  return (
    <>
      <section className="bg-gradient-to-br from-brand/20 via-white to-accent/10 py-16">
        <Container className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            {company.name}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            {company.tagline}
          </p>
        </Container>
      </section>

      <section className="py-20" aria-labelledby="services-grid-heading">
        <Container>
          <SectionHeader
            eyebrow={company.industry}
            title={company.tagline}
            subtitle={company.description}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-brand to-brand-dark p-8 text-center text-white">
            <h2 className="text-2xl font-bold">{company.mission}</h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-light">
              {contacts.email.sales}
            </p>
            <Button to="/contact" variant="accent" className="mt-6">
              Get a Quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
