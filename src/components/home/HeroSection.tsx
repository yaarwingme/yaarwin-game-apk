import { Download, Shield, Smartphone, Zap, Trophy, Users } from 'lucide-react';
import { REGISTER_URL } from '../../lib/constants';

export default function HeroSection() {
  return (
    <section className="relative bg-primary-700 bg-hero-pattern overflow-hidden">
      <div className="container-max py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/30 text-accent-500 text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Latest Version Available Now
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              YaarWin Game APK Download – Latest Version
            </h1>
            <p className="text-lg text-primary-100 mb-8 max-w-xl mx-auto lg:mx-0">
              Download the YaarWin Game APK, register instantly, and experience
              fast, secure mobile gaming. Join thousands of players on the Yaar
              Win Game platform today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary animate-pulse-glow"
              >
                <Download className="w-5 h-5" />
                Download APK Now
              </a>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                Register Now
              </a>
            </div>
            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-primary-200">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent-500" />
                <span className="text-sm">10K+ Players</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-cta-500" />
                <span className="text-sm">100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-accent-500" />
                <span className="text-sm">Daily Rewards</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-500/20 blur-3xl rounded-full"></div>
              <div className="relative w-72 h-72 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 border border-accent-500/30 flex items-center justify-center animate-float shadow-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mb-4">
                    <Smartphone className="w-12 h-12 text-primary-700" strokeWidth={2} />
                  </div>
                  <p className="text-white font-display text-2xl font-bold">YaarWin</p>
                  <p className="text-accent-500 text-sm mt-1">Game APK</p>
                  <div className="mt-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cta-500/20 text-cta-400 text-xs font-semibold">
                    <Download className="w-3 h-3" />
                    v3.0 Latest
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
