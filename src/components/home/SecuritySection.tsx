import { ShieldCheck, Lock, FileLock2, Eye, Server, KeyRound } from 'lucide-react';

const items = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    desc: 'All data transmitted between your device and YaarWin servers is encrypted using industry-standard SSL/TLS protocols.',
  },
  {
    icon: FileLock2,
    title: 'Secure Payment Processing',
    desc: 'Transactions are processed through PCI-DSS compliant gateways. We never store your card or banking details on our servers.',
  },
  {
    icon: Eye,
    title: 'Privacy-First Approach',
    desc: 'We collect only the data needed to provide our services. Your personal information is never sold to third parties.',
  },
  {
    icon: Server,
    title: 'Protected Servers',
    desc: 'YaarWin Game runs on secured cloud infrastructure with 24/7 monitoring, firewalls, and regular security audits.',
  },
  {
    icon: KeyRound,
    title: 'Account Safety Tools',
    desc: 'Two-factor authentication, session management, and password recovery options keep your account protected.',
  },
  {
    icon: ShieldCheck,
    title: 'Fair Play Guarantee',
    desc: 'Our gaming algorithms are audited for fairness. Every player has an equal and transparent gaming experience.',
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="section-pad bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="text-cta-500 font-semibold text-sm uppercase tracking-wider">
            Trust &amp; Safety
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mt-2 mb-4">
            YaarWin Game Security &amp; Privacy
          </h2>
          <p className="text-primary-400 max-w-2xl mx-auto">
            At YaarWin Game, your security and privacy are our top priorities.
            We implement multiple layers of protection to ensure a safe gaming
            environment for every user.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="card">
              <div className="w-12 h-12 rounded-xl bg-cta-500/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-cta-500" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-primary-700 mb-2">
                {item.title}
              </h3>
              <p className="text-primary-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
