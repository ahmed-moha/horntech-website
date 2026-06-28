import ClientsPartners from '../components/home/ClientsPartners';
import CtaBanner from '../components/home/CtaBanner';
import FeaturedServices from '../components/home/FeaturedServices';
import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import WhyChooseUs from '../components/home/WhyChooseUs';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedServices />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <ClientsPartners />
      <CtaBanner />
    </>
  );
}
