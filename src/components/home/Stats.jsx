import { useCompanyData } from '../../hooks/useCompanyData';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import StatCard from '../common/StatCard';

export default function Stats() {
  const { statistics } = useCompanyData();

  const statItems = [
    { value: `${statistics.clients}+`, label: 'Happy Clients' },
    { value: `${statistics.projects}+`, label: 'Projects Completed' },
    { value: statistics.employees, label: 'Team Members' },
    { value: `${statistics.yearsExperience}+`, label: 'Years Experience' },
    { value: statistics.countriesServed, label: 'Countries Served' },
  ];

  return (
    <section
      className="bg-gradient-to-r from-brand to-brand-dark py-20 text-white"
      aria-labelledby="stats-heading"
    >
      <Container>
        <SectionHeader
          eyebrow="Our Impact"
          title="Numbers That Speak"
          subtitle="Delivering measurable results for businesses across the region."
          className="[&_h2]:text-white [&_p]:text-brand-light [&_span]:bg-white/20 [&_span]:text-white"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {statItems.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
