export function buildTimeline(data) {
  const { company, about, statistics, certifications } = data;
  const currentYear = new Date().getFullYear();

  return [
    {
      year: company.founded,
      title: 'Company Founded',
      description: about.story,
    },
    {
      year: company.founded + 2,
      title: 'Expanded Service Portfolio',
      description: `Launched core IT services to support ${company.industry.toLowerCase()} needs across Somalia.`,
    },
    {
      year: company.founded + 4,
      title: 'Regional Growth',
      description: `Reached ${statistics.countriesServed} countries served with ${statistics.projects}+ completed projects.`,
    },
    {
      year: company.founded + 6,
      title: 'Industry Recognition',
      description: `Achieved certifications including ${certifications.slice(0, 2).join(' and ')}.`,
    },
    {
      year: currentYear,
      title: 'Leading Digital Partner',
      description: company.vision,
    },
  ];
}
