import Layout from '../components/Layout';
import PageHero from '../components/PageHero';

export default function PrivacyPage() {
  return (
    <Layout
      title="YaarWin Privacy Policy – How We Protect Your Data"
      description="Read the YaarWin Privacy Policy to understand how we collect, use, and protect your personal information on the YaarWin Game platform."
      canonical="https://4yaarwin.com/privacy-policy"
      keywords="YaarWin Privacy Policy, YaarWin Game privacy, data protection"
    >
      <PageHero
        title="YaarWin Privacy Policy"
        breadcrumb="Privacy Policy"
        subtitle="Your privacy matters. Learn how YaarWin Game collects, uses, and safeguards your personal data."
      />
      <section className="section-pad bg-white">
        <div className="container-max max-w-4xl prose-content">
          <p className="text-primary-400 text-sm mb-8">
            Last updated: July 14, 2026
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mb-4">
            1. Information We Collect
          </h2>
          <p>
            When you register on YaarWin Game, we collect your phone number or
            email address, a password of your choosing, and basic device
            information such as device model, operating system version, and
            IP address. This information is necessary to create and secure your
            account on the Yaar Win Game platform.
          </p>
          <p>
            During gameplay, we may also collect usage data including games
            played, session duration, and interaction patterns. This data helps
            us improve the YaarWin App and personalize your experience. We do not
            collect sensitive personal data such as government identification
            numbers or biometric information.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p>
            Your information is used to provide and maintain the YaarWin Game
            service, authenticate your identity during YaarWin Login, process
            transactions, send important account notifications, and improve our
            platform features. We may also use aggregated, non-identifiable data
            for analytics and research purposes.
          </p>
          <p>
            We do not sell your personal data to third parties. We may share
            limited information with trusted service providers who help us
            operate the platform, such as payment processors and cloud hosting
            providers, but only under strict confidentiality agreements.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            3. Data Security
          </h2>
          <p>
            YaarWin Game employs industry-standard security measures including
            SSL/TLS encryption, secure password hashing, and regular security
            audits. Our servers are protected by firewalls and monitored 24/7
            for suspicious activity. Despite these measures, no online platform
            can guarantee absolute security, and we encourage users to take
            personal precautions such as using strong passwords and enabling
            two-factor authentication.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            4. Cookies and Tracking
          </h2>
          <p>
            The YaarWin App and website may use cookies and similar technologies
            to remember your preferences, maintain login sessions, and gather
            analytics data. You can control cookies through your browser
            settings, but disabling them may affect certain features of the
            platform.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            5. Your Rights
          </h2>
          <p>
            You have the right to access, correct, or delete your personal data
            held by YaarWin Game. You may also request that we restrict or stop
            processing your data. To exercise these rights, contact us through
            our <a href="#/contact" className="text-cta-500 hover:underline">Contact</a> page. We
            will respond to your request within 30 days.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            6. Children's Privacy
          </h2>
          <p>
            YaarWin Game is intended for users aged 18 and above. We do not
            knowingly collect personal information from minors. If you believe a
            child has registered on our platform, please contact us
            immediately so we can remove the account.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will notify users
            of significant changes through the YaarWin App or via email.
            Continued use of the platform after changes constitutes acceptance
            of the updated policy.
          </p>

          <p className="mt-8 text-primary-400">
            For questions about this policy, visit our{' '}
            <a href="#/contact" className="text-cta-500 hover:underline">Contact page</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
