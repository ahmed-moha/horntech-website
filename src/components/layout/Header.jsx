import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCompanyData } from '../../hooks/useCompanyData';
import { companyLogo } from '../../utils/assets';
import Button from '../common/Button';
import Container from '../common/Container';
import { navLinks } from '../../routes/navLinks';

export default function Header() {
  const { company } = useCompanyData();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-brand/10 text-brand-dark'
        : 'text-slate-600 hover:bg-slate-50 hover:text-brand-dark'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label={`${company.name} home`}
          >
            {companyLogo ? (
              <img
                src={companyLogo}
                alt={`${company.name} logo`}
                className="h-10 w-auto"
              />
            ) : (
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white">
                HT
              </span>
            )}
            <span className="hidden text-lg font-bold text-slate-900 sm:inline">
              {company.name}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact" variant="accent" className="ml-4">
              Get in Touch
            </Button>
          </nav>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-50 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-slate-100 bg-white lg:hidden"
          aria-label="Mobile navigation"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              to="/contact"
              variant="accent"
              className="mt-2 w-full"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
