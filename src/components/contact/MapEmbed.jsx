import { useCompanyData } from '../../hooks/useCompanyData';
import { formatAddress, getMapEmbedUrl } from '../../utils/formatters';

export default function MapEmbed() {
  const { company } = useCompanyData();
  const address = formatAddress(company.headquarters);
  const mapUrl = getMapEmbedUrl(company.headquarters);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100">
      <iframe
        title={`Map showing ${company.name} at ${address}`}
        src={mapUrl}
        className="h-80 w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
