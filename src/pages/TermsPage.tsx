import Layout from '../components/Layout';
import PageHero from '../components/PageHero';

export default function TermsPage() {
  return (
    <Layout
      title="YaarWin Terms & Conditions – Usage Agreement"
      description="Read the YaarWin Terms and Conditions to understand the rules, rights, and responsibilities for using the YaarWin Game platform and APK."
      canonical="https://4yaarwin.com/terms"
      keywords="YaarWin Terms, YaarWin Game terms and conditions, usage agreement"
    >
      <PageHero
        title="YaarWin Terms & Conditions"
        breadcrumb="Terms & Conditions"
        subtitle="Please read these terms carefully before using the YaarWin Game platform."
      />
      <section className="section-pad bg-white">
        <div className="container-max max-w-4xl prose-content">
          <p className="text-primary-400 text-sm mb-8">
            Last updated: July 14, 2026
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the YaarWin Game platform, including the
            YaarWin App and website, you agree to be bound by these Terms and
            Conditions. If you do not agree with any part of these terms, you
            must not use our platform. Your continued use of Yaar Win Game
            constitutes acceptance of any updates or modifications to these
            terms.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            2. Eligibility
          </h2>
          <p>
            YaarWin Game is intended for users aged 18 years and above. By
            registering, you confirm that you meet this age requirement and are
            legally permitted to use the platform in your jurisdiction. We
            reserve the right to request age verification at any time.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            3. Account Registration
          </h2>
          <p>
            To access full features of YaarWin Game, you must complete the
            YaarWin Register process by providing accurate and current
            information. You are responsible for maintaining the
            confidentiality of your YaarWin Login credentials and for all
            activities under your account. Notify us immediately of any
            unauthorized use of your account.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            4. Acceptable Use
          </h2>
          <p>
            You agree to use YaarWin Game only for lawful purposes. You must not
            use the platform to violate any laws, infringe rights of others,
            transmit harmful content, attempt to gain unauthorized access to
            our systems, use automated tools to manipulate gameplay, or engage
            in any form of cheating or fraud. Violations may result in account
            suspension or permanent termination.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            5. APK Download and Installation
          </h2>
          <p>
            The YaarWin Game APK is provided for direct download from our
            official website. You may download and install the APK on your
            personal devices for personal, non-commercial use. Redistribution,
            modification, or reverse engineering of the YaarWin App is strictly
            prohibited. We are not liable for any issues arising from APK
            downloads from unofficial sources.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            6. Rewards and Transactions
          </h2>
          <p>
            YaarWin Game may offer rewards, bonuses, and transaction features.
            All rewards are subject to platform rules and may be modified or
            discontinued at our discretion. You are responsible for any tax
            obligations arising from rewards received. We reserve the right to
            void rewards obtained through fraudulent or suspicious activity.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            7. Intellectual Property
          </h2>
          <p>
            All content on YaarWin Game, including the YaarWin App, website
            design, logos, text, and graphics, is the property of YaarWin and
            protected by intellectual property laws. You may not copy,
            reproduce, or distribute any content without our prior written
            consent.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            8. Limitation of Liability
          </h2>
          <p>
            YaarWin Game shall not be liable for any indirect, incidental,
            special, or consequential damages arising from your use of the
            platform. Our total liability shall not exceed the amount you have
            paid to us, if any, in the preceding 30 days.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            9. Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate your account at any
            time for violations of these terms or for any other reason we deem
            appropriate. Upon termination, your right to use YaarWin Game ceases
            immediately. You may also delete your account at any time by
            contacting support.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            10. Changes to Terms
          </h2>
          <p>
            We may update these Terms and Conditions at any time. Changes are
            effective immediately upon posting. Your continued use of the
            YaarWin App after changes are posted constitutes acceptance of the
            revised terms. We encourage you to review this page periodically.
          </p>

          <p className="mt-8 text-primary-400">
            For questions about these terms, visit our{' '}
            <a href="#/contact" className="text-cta-500 hover:underline">Contact page</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
