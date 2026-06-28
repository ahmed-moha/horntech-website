import { useCompanyData } from '../../hooks/useCompanyData';
import { buildTimeline } from '../../utils/timeline';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';

export default function Timeline() {
  const data = useCompanyData();
  const milestones = buildTimeline(data);

  return (
    <section className="bg-slate-50 py-20" aria-labelledby="timeline-heading">
      <Container>
        <SectionHeader
          eyebrow="Our Journey"
          title="Company Timeline"
          subtitle="Key milestones in our growth and evolution."
        />
        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-4 top-0 h-full w-0.5 bg-brand/30 md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={`${milestone.year}-${milestone.title}`}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden w-1/2 md:block" />
                <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-xs font-bold text-slate-900 md:left-1/2">
                  {milestone.year}
                </div>
                <div className="ml-12 w-full rounded-2xl border border-slate-100 bg-white p-6 md:ml-0 md:w-1/2 md:pl-8">
                  <h3 className="text-lg font-bold text-slate-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
