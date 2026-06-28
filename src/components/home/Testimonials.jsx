import { Quote, Star } from 'lucide-react';
import { useCompanyData } from '../../hooks/useCompanyData';
import Card from '../common/Card';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';

export default function Testimonials() {
  const { testimonials } = useCompanyData();

  return (
    <section className="py-20" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by businesses across Somalia and East Africa."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <Quote className="h-8 w-8 text-brand/30" />
              <p className="mt-4 text-slate-600 italic">
                &ldquo;{testimonial.comment}&rdquo;
              </p>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <div className="mt-4 border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
