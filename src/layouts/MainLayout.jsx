import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useCompanyData } from '../hooks/useCompanyData';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

export default function MainLayout() {
  const { seo } = useCompanyData();
  const location = useLocation();

  useEffect(() => {
    document.title = seo.title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seo.description);
  }, [seo, location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
