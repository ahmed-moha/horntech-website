import { ArrowRight } from 'lucide-react';
import { useCompanyData } from '../../hooks/useCompanyData';
import Button from '../common/Button';
import Container from '../common/Container';

export default function Hero() {
  const { company } = useCompanyData();

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-brand/20 via-white to-accent/10 py-20 lg:py-28"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-accent/20 px-4 py-1 text-sm font-semibold text-accent-dark">
            {company.industry}
          </span>
          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            {company.tagline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            {company.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/contact" variant="accent">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button to="/services" variant="secondary">
              Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
