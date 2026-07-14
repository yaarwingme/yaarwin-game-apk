import { useState, useEffect } from 'react';
import { Menu, X, UserPlus, LogIn } from 'lucide-react';
import Logo from './Logo';
import { REGISTER_URL, NAV_LINKS } from '../lib/constants';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary-700/95 backdrop-blur-md shadow-lg shadow-primary-900/30'
          : 'bg-primary-700'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#/" aria-label="YaarWin Game home">
            <Logo />
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="text-sm font-medium text-primary-100 hover:text-accent-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-primary-700 bg-accent-500 hover:bg-accent-400 transition-all duration-300 shadow-md"
            >
              <UserPlus className="w-4 h-4" />
              Register Now
            </a>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-cta-500 hover:bg-cta-600 transition-all duration-300 shadow-md"
            >
              <LogIn className="w-4 h-4" />
              Login
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col gap-1 mb-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-primary-100 hover:bg-primary-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-3 px-4">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-primary-700 bg-accent-500"
              >
                <UserPlus className="w-4 h-4" />
                Register
              </a>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-cta-500"
              >
                <LogIn className="w-4 h-4" />
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
