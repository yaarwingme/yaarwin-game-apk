import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';

function getPath() {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

export default function App() {
  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const onHashChange = () => {
      setPath(getPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderPage = () => {
    switch (path) {
      case '/about':
        return <AboutPage />;
      case '/privacy-policy':
        return <PrivacyPage />;
      case '/disclaimer':
        return <DisclaimerPage />;
      case '/contact':
        return <ContactPage />;
      case '/terms':
        return <TermsPage />;
      default:
        return <HomePage />;
    }
  };

  return <>{renderPage()}</>;
}
