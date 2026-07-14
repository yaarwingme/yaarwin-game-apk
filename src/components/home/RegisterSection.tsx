import { UserPlus, CheckCircle2 } from 'lucide-react';
import { REGISTER_URL } from '../../lib/constants';

const steps = [
  {
    num: '1',
    title: 'Click the Register Button',
    desc: 'Tap the "Register Now" button anywhere on our site to open the official YaarWin registration page.',
  },
  {
    num: '2',
    title: 'Enter Your Phone Number or Email',
    desc: 'Provide a valid phone number or email address that you have access to for account verification.',
  },
  {
    num: '3',
    title: 'Create a Strong Password',
    desc: 'Choose a secure password with at least 8 characters, including letters, numbers, and symbols for safety.',
  },
  {
    num: '4',
    title: 'Enter the Invitation Code',
    desc: 'Use the invitation code provided to link your account and unlock welcome bonuses on YaarWin Game.',
  },
  {
    num: '5',
    title: 'Verify & Start Playing',
    desc: 'Complete the OTP verification, accept the terms, and your YaarWin Game account is ready to use.',
  },
];

export default function RegisterSection() {
  return (
    <section id="register" className="section-pad bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="text-cta-500 font-semibold text-sm uppercase tracking-wider">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mt-2 mb-4">
            How to Register on YaarWin
          </h2>
          <p className="text-primary-400 max-w-2xl mx-auto">
            Registering on YaarWin Game is quick and free. Follow these simple
            steps to create your account in under two minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-700 text-accent-500 font-display text-xl font-bold flex items-center justify-center">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-700 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-primary-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="card bg-gradient-to-br from-primary-600 to-primary-700 border-primary-500 text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-accent-500 flex items-center justify-center mb-6">
              <UserPlus className="w-10 h-10 text-primary-700" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Join YaarWin Game?
            </h3>
            <p className="text-primary-100 mb-6">
              Create your free account now and get instant access to all games,
              rewards, and features.
            </p>
            <ul className="text-left mb-8 space-y-2 max-w-xs mx-auto">
              {['Free registration', 'Welcome bonus', 'Secure account', 'Instant access'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-primary-100">
                    <CheckCircle2 className="w-5 h-5 text-cta-400 flex-shrink-0" />
                    {item}
                  </li>
                )
              )}
            </ul>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent w-full"
            >
              <UserPlus className="w-5 h-5" />
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
