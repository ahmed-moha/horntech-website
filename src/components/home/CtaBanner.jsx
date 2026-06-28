import { useCompanyData } from '../../hooks/useCompanyData';
import Button from '../common/Button';
import Container from '../common/Container';

export default function CtaBanner() {
  const { company, contacts } = useCompanyData();

  return (
    <section
      className="bg-gradient-to-r from-brand-dark to-brand py-16"
      aria-labelledby="cta-heading"
    >
      <Container className="text-center">
        <h2 id="cta-heading" className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Transform Your Business?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-light">
          Partner with {company.name} for innovative technology solutions. Reach
          out to our sales team at{' '}
          <a
            href={`mailto:${contacts.email.sales}`}
            className="font-semibold text-accent hover:underline"
          >
            {contacts.email.sales}
          </a>
        </p>
        <Button to="/contact" variant="accent" className="mt-8">
          Start a Conversation
        </Button>
      </Container>
    </section>
  );
}
