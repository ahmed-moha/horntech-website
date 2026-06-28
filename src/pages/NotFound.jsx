import Container from '../components/common/Container';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <h1 className="text-6xl font-bold text-brand">404</h1>
        <p className="mt-4 text-xl text-slate-600">Page not found</p>
        <Button to="/" className="mt-8">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
