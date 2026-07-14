interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-primary-700 bg-hero-pattern py-16 md:py-24">
      <div className="container-max text-center">
        <nav className="mb-4 text-sm text-primary-200">
          <a href="#/" className="hover:text-accent-500 transition-colors">
            Home
          </a>
          <span className="mx-2">/</span>
          <span className="text-accent-500">{breadcrumb}</span>
        </nav>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="max-w-2xl mx-auto text-primary-100 text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
