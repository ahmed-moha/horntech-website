import { useState } from 'react';
import { useCompanyData } from '../../hooks/useCompanyData';
import { resolveImagePath } from '../../utils/assets';
import Container from '../common/Container';
import ImageFallback from '../common/ImageFallback';
import SectionHeader from '../common/SectionHeader';

function LogoImage({ name, logoPath }) {
  const [hasError, setHasError] = useState(false);
  const src = resolveImagePath(logoPath);

  if (hasError || !src) {
    return <ImageFallback name={name} className="mx-auto" />;
  }

  return (
    <img
      src={src}
      alt={`${name} logo`}
      className="mx-auto h-12 max-w-full object-contain"
      onError={() => setHasError(true)}
    />
  );
}

export default function ClientsPartners() {
  const { clients, partners } = useCompanyData();

  return (
    <section className="bg-slate-50 py-20" aria-labelledby="clients-heading">
      <Container>
        <SectionHeader
          eyebrow="Trusted By"
          title="Clients & Partners"
          subtitle="Proud to work with leading organizations across the region."
        />

        <div className="mb-12">
          <h3 className="mb-6 text-center text-lg font-semibold text-slate-700">
            Our Clients
          </h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <LogoImage name={client.name} logoPath={client.logo} />
                <p className="mt-3 text-sm font-medium text-slate-600">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-center text-lg font-semibold text-slate-700">
            Our Partners
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partners.map((partner) => (
              <span
                key={partner.name}
                className="rounded-full border border-brand/20 bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition-all duration-300 hover:bg-brand/5"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
