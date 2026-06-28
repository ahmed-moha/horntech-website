import BusinessHours from '../components/contact/BusinessHours';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import MapEmbed from '../components/contact/MapEmbed';
import Container from '../components/common/Container';
import SocialLinks from '../components/layout/SocialLinks';
import { useCompanyData } from '../hooks/useCompanyData';

export default function Contact() {
  const { company, socialMedia } = useCompanyData();

  return (
    <>
      <section className="bg-gradient-to-br from-brand/20 via-white to-accent/10 py-16">
        <Container className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            {company.name}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            {company.description}
          </p>
        </Container>
      </section>

      <section className="py-20" aria-labelledby="contact-form-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 id="contact-form-heading" className="text-2xl font-bold">
                Send Us a Message
              </h2>
              <p className="mt-2 text-slate-600">
                Fill out the form below and our team will respond promptly.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <div>
              <ContactDetails />
              <div className="mt-6">
                <BusinessHours />
              </div>
              <div className="mt-6">
                <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
                <SocialLinks socialMedia={socialMedia} />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">Find Us</h2>
            <MapEmbed />
          </div>
        </Container>
      </section>
    </>
  );
}
