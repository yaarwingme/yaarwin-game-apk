import Logo from './Logo';
import { REGISTER_URL, NAV_LINKS } from '../lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-700 text-primary-100">
      <div className="container-max py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-primary-200 leading-relaxed">
              YaarWin Game is your destination for fast, secure, and exciting
              mobile gaming. Download the latest APK and start playing today.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-primary-700 bg-accent-500 hover:bg-accent-400 transition-colors"
              >
                Register Now
              </a>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-cta-500 hover:bg-cta-600 transition-colors"
              >
                Login
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-sm text-primary-200 hover:text-accent-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              YaarWin Game
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#/#what-is-yaarwin"
                  className="text-sm text-primary-200 hover:text-accent-500 transition-colors"
                >
                  What is YaarWin Game?
                </a>
              </li>
              <li>
                <a
                  href="#/#apk-download"
                  className="text-sm text-primary-200 hover:text-accent-500 transition-colors"
                >
                  YaarWin APK Download
                </a>
              </li>
              <li>
                <a
                  href="#/#register"
                  className="text-sm text-primary-200 hover:text-accent-500 transition-colors"
                >
                  How to Register
                </a>
              </li>
              <li>
                <a
                  href="#/#login"
                  className="text-sm text-primary-200 hover:text-accent-500 transition-colors"
                >
                  YaarWin Login Guide
                </a>
              </li>
              <li>
                <a
                  href="#/#features"
                  className="text-sm text-primary-200 hover:text-accent-500 transition-colors"
                >
                  Game Features
                </a>
              </li>
              <li>
                <a
                  href="#/#faq"
                  className="text-sm text-primary-200 hover:text-accent-500 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              Get Started
            </h3>
            <p className="text-sm text-primary-200 mb-4">
              Join thousands of players on YaarWin Game today. Register in
              minutes and start your gaming journey.
            </p>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-5 py-3 rounded-lg text-sm font-semibold text-primary-700 bg-accent-500 hover:bg-accent-400 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-500">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-200">
              &copy; {year} YaarWin Game. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#/privacy-policy"
                className="text-sm text-primary-200 hover:text-accent-500 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#/terms"
                className="text-sm text-primary-200 hover:text-accent-500 transition-colors"
              >
                Terms &amp; Conditions
              </a>
              <a
                href="#/disclaimer"
                className="text-sm text-primary-200 hover:text-accent-500 transition-colors"
              >
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
