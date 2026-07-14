import { Gamepad2 } from 'lucide-react';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 shadow-lg shadow-accent-500/30">
        <Gamepad2 className="w-6 h-6 text-primary-700" strokeWidth={2.5} />
      </div>
      <span className="font-display text-2xl font-bold text-gradient-gold tracking-tight">
        YaarWin
      </span>
    </div>
  );
}
