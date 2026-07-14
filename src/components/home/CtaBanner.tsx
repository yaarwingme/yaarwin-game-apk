import { Download, UserPlus } from 'lucide-react';
import { REGISTER_URL } from '../../lib/constants';

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-14 md:py-20">
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Play YaarWin Game?
        </h2>
        <p className="text-primary-100 max-w-2xl mx-auto mb-8">
          Download the latest YaarWin Game APK, register for free, and start
          your gaming adventure today. Join 10,000+ players already winning!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Download className="w-5 h-5" />
            Download APK
          </a>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            <UserPlus className="w-5 h-5" />
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
