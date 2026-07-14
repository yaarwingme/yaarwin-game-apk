import { UserPlus, LogIn } from 'lucide-react';
import { REGISTER_URL } from '../lib/constants';

export default function StickyMobileButton() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary-700/95 backdrop-blur-md border-t border-primary-500 px-4 py-3 flex gap-3 shadow-lg shadow-primary-900/50">
      <a
        href={REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold text-primary-700 bg-accent-500 active:scale-95 transition-transform"
      >
        <UserPlus className="w-4 h-4" />
        Register
      </a>
      <a
        href={REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold text-white bg-cta-500 active:scale-95 transition-transform"
      >
        <LogIn className="w-4 h-4" />
        Login
      </a>
    </div>
  );
}
