import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS, REGISTER_URL } from '../../lib/constants';
import { UserPlus } from 'lucide-react';

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-primary-50/50">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="text-cta-500 font-semibold text-sm uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-primary-400 max-w-2xl mx-auto">
            Find answers to the most common questions about YaarWin Game, APK
            download, registration, login, and security.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md shadow-primary-900/5 border border-primary-100 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-primary-700 text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-cta-500 flex-shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-primary-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-primary-400 mb-4">
            Still have questions? Register now and get instant support.
          </p>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <UserPlus className="w-5 h-5" />
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
