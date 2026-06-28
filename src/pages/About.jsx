import Certifications from '../components/about/Certifications';
import MissionVision from '../components/about/MissionVision';
import Story from '../components/about/Story';
import Timeline from '../components/about/Timeline';
import Values from '../components/about/Values';
import Container from '../components/common/Container';
import { useCompanyData } from '../hooks/useCompanyData';

export default function About() {
  const { company, about } = useCompanyData();

  return (
    <>
      <section className="bg-gradient-to-br from-brand/20 via-white to-accent/10 py-16">
        <Container className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            {company.name}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            {about.story}
          </p>
        </Container>
      </section>
      <Story />
      <MissionVision />
      <Values />
      <Timeline />
      <Certifications />
    </>
  );
}
