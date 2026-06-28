import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useCompanyData } from '../../hooks/useCompanyData';
import {
  formatAddress,
  formatEmailLink,
  formatPhoneLink,
} from '../../utils/formatters';
import Container from '../common/Container';
import { navLinks } from '../../routes/navLinks';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const { company, contacts, socialMedia, legal } = useCompanyData();
  const address = formatAddress(company.headquarters);
  const primaryPhone = contacts.phone[0];
  const primaryEmail = contacts.email.general;

  return (
    <footer className="border-t border-slate-100 bg-slate-900 text-slate-300">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-white">{company.name}</h3>
            <p className="mt-3 text-sm leading-relaxed">{company.tagline}</p>
            <SocialLinks socialMedia={socialMedia} className="mt-6" />
          </div>

          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-brand-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand" />
                <a
                  href={formatPhoneLink(primaryPhone)}
                  className="hover:text-brand-light"
                >
                  {primaryPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-brand" />
                <a
                  href={formatEmailLink(primaryEmail)}
                  className="hover:text-brand-light"
                >
                  {primaryEmail}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Working Hours</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {Object.entries(contacts.workingHours).map(([day, hours]) => (
                <li key={day} className="flex justify-between gap-4">
                  <span>{day}</span>
                  <span className="text-slate-400">{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link to={legal.privacyPolicy} className="hover:text-brand-light">
              Privacy Policy
            </Link>
            <Link to={legal.termsOfService} className="hover:text-brand-light">
              Terms of Service
            </Link>
            <Link to={legal.cookiePolicy} className="hover:text-brand-light">
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
