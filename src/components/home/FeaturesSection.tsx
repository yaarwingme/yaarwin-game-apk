import { ShieldCheck, Zap, Trophy, Users, Smartphone, Headphones } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    desc: 'YaarWin Game is optimized for speed with minimal load times, smooth gameplay, and instant transitions between games.',
  },
  {
    icon: ShieldCheck,
    title: 'Bank-Grade Security',
    desc: 'Your data and transactions are protected with end-to-end encryption and secure payment gateways on every session.',
  },
  {
    icon: Trophy,
    title: 'Daily Rewards & Bonuses',
    desc: 'Earn daily login bonuses, referral rewards, and participate in tournaments to win exciting prizes on YaarWin Game.',
  },
  {
    icon: Users,
    title: 'Multiplayer Gaming',
    desc: 'Challenge friends and players worldwide in real-time multiplayer modes designed for competitive gaming.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'The YaarWin App is built mobile-first, delivering a seamless experience across all Android screen sizes.',
  },
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    desc: 'Get instant help from our dedicated support team available round the clock via chat, email, and phone.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-pad bg-primary-50/50">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="text-cta-500 font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mt-2 mb-4">
            Features of YaarWin Game
          </h2>
          <p className="text-primary-400 max-w-2xl mx-auto">
            YaarWin Game comes packed with powerful features designed to give
            you the best mobile gaming experience possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="card group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <f.icon className="w-7 h-7 text-accent-500" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-primary-700 mb-3">
                {f.title}
              </h3>
              <p className="text-primary-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
