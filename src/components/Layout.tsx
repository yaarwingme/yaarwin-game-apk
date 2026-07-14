import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import StickyMobileButton from './StickyMobileButton';
import Seo from './Seo';

interface LayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  faqSchema?: { q: string; a: string }[];
}

export default function Layout({
  children,
  title,
  description,
  canonical,
  keywords,
  faqSchema,
}: LayoutProps) {
  return (
    <>
      <Seo
        title={title}
        description={description}
        canonical={canonical}
        keywords={keywords}
        faqSchema={faqSchema}
      />
      <Header />
      <main className="min-h-screen pt-16 md:pt-20 pb-20 md:pb-0">
        {children}
      </main>
      <Footer />
      <StickyMobileButton />
    </>
  );
}
