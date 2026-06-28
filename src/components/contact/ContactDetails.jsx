import { Mail, MapPin, Phone } from 'lucide-react';
import { useCompanyData } from '../../hooks/useCompanyData';
import {
  formatAddress,
  formatEmailLink,
  formatLocationAddress,
  formatPhoneLink,
} from '../../utils/formatters';
import Card from '../common/Card';

export default function ContactDetails() {
  const { company, contacts, locations } = useCompanyData();
  const address = formatAddress(company.headquarters);

  return (
    <div className="space-y-6">
      <Card hover={false}>
        <h3 className="text-lg font-bold">Head Office</h3>
        <ul className="mt-4 space-y-4">
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <span className="text-slate-600">{address}</span>
          </li>
          {contacts.phone.map((phone) => (
            <li key={phone} className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-brand" />
              <a
                href={formatPhoneLink(phone)}
                className="text-slate-600 hover:text-brand"
              >
                {phone}
              </a>
            </li>
          ))}
          {Object.entries(contacts.email).map(([key, email]) => (
            <li key={key} className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-brand" />
              <div>
                <span className="text-xs font-medium uppercase text-slate-400">
                  {key}
                </span>
                <a
                  href={formatEmailLink(email)}
                  className="block text-slate-600 hover:text-brand"
                >
                  {email}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      {locations.map((location) => (
        <Card key={location.office} hover={false}>
          <h3 className="text-lg font-bold">{location.office}</h3>
          <p className="mt-2 text-slate-600">
            {formatLocationAddress(location)}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={formatPhoneLink(location.phone)}
                className="text-brand hover:underline"
              >
                {location.phone}
              </a>
            </li>
            <li>
              <a
                href={formatEmailLink(location.email)}
                className="text-brand hover:underline"
              >
                {location.email}
              </a>
            </li>
          </ul>
        </Card>
      ))}
    </div>
  );
}
