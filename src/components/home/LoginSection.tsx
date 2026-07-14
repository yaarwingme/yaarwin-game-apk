import { LogIn, KeyRound, Eye, ShieldCheck } from 'lucide-react';
import { REGISTER_URL } from '../../lib/constants';

const steps = [
  {
    icon: KeyRound,
    title: 'Open the YaarWin App or Website',
    desc: 'Launch the YaarWin App on your Android device or visit the web platform from any browser.',
  },
  {
    icon: LogIn,
    title: 'Enter Your Credentials',
    desc: 'Input your registered phone number or email address along with your password to access your account.',
  },
  {
    icon: Eye,
    title: 'Complete Security Check',
    desc: 'If prompted, complete the captcha or OTP verification to ensure your account stays protected.',
  },
  {
    icon: ShieldCheck,
    title: 'Access Your Dashboard',
    desc: 'Once verified, you are logged in and ready to play games, check rewards, and manage your account.',
  },
];

export default function LoginSection() {
  return (
    <section id="login" className="section-pad bg-primary-50/50">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="text-cta-500 font-semibold text-sm uppercase tracking-wider">
            Secure Access
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mt-2 mb-4">
            How to Login to YaarWin Game
          </h2>
          <p className="text-primary-400 max-w-2xl mx-auto">
            Logging into your YaarWin Game account is simple and secure. Follow
            these steps to access your gaming dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="card text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cta-400 to-cta-600 flex items-center justify-center mb-5">
                <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <span className="text-accent-600 font-display text-sm font-bold">
                Step {i + 1}
              </span>
              <h3 className="text-lg font-semibold text-primary-700 mt-2 mb-2">
                {step.title}
              </h3>
              <p className="text-primary-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <LogIn className="w-5 h-5" />
            Login to YaarWin Game
          </a>
        </div>
      </div>
    </section>
  );
}
