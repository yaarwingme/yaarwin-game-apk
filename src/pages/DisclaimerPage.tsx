import Layout from '../components/Layout';
import PageHero from '../components/PageHero';

export default function DisclaimerPage() {
  return (
    <Layout
      title="YaarWin Disclaimer – Important Legal Information"
      description="Read the YaarWin Disclaimer to understand the terms, limitations, and legal information regarding the use of YaarWin Game platform and APK."
      canonical="https://4yaarwin.com/disclaimer"
      keywords="YaarWin Disclaimer, YaarWin Game disclaimer, legal information"
    >
      <PageHero
        title="YaarWin Disclaimer"
        breadcrumb="Disclaimer"
        subtitle="Please read this disclaimer carefully before using the YaarWin Game platform."
      />
      <section className="section-pad bg-white">
        <div className="container-max max-w-4xl prose-content">
          <p className="text-primary-400 text-sm mb-8">
            Last updated: July 14, 2026
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mb-4">
            General Information
          </h2>
          <p>
            The information provided by YaarWin Game on this website and through
            the YaarWin App is for general informational and entertainment
            purposes only. All information is provided in good faith; however,
            we make no representation or warranty of any kind regarding the
            accuracy, adequacy, validity, reliability, or completeness of any
            information on the platform.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            No Professional Advice
          </h2>
          <p>
            The YaarWin Game platform does not contain professional advice. Any
            gaming outcomes, rewards, or earnings shown are not guaranteed and
            may vary based on skill, participation, and other factors. Nothing
            on this platform constitutes financial, legal, or professional
            advice. You should consult appropriate professionals before making
            any decisions based on information from Yaar Win Game.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            Gaming and Rewards Disclaimer
          </h2>
          <p>
            YaarWin Game involves skill-based gaming that may include reward
            systems. Participation is at your own discretion and risk. We do not
            guarantee any specific winnings or rewards. The availability of
            games and rewards may vary by region and is subject to local laws
            and regulations. Users are responsible for ensuring that
            participation in YaarWin Game is legal in their jurisdiction.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            APK Download Disclaimer
          </h2>
          <p>
            The YaarWin Game APK available on this website is provided as a
            direct download for convenience. While we take all reasonable steps
            to ensure the APK is safe and free from malware, users download and
            install the app at their own risk. We are not liable for any damage
            to your device or data loss resulting from the download or
            installation of the YaarWin APK.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            External Links
          </h2>
          <p>
            YaarWin Game may contain links to external websites that are not
            provided or maintained by us. We do not guarantee the accuracy or
            reliability of any information on these external sites and are not
            responsible for their content or practices.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            Limitation of Liability
          </h2>
          <p>
            Under no circumstances shall YaarWin Game or its team be liable for
            any loss or damage arising from the use of or inability to use our
            platform, including but not limited to direct, indirect, incidental,
            or consequential damages. Your use of the YaarWin App is entirely at
            your own risk.
          </p>

          <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">
            Consent
          </h2>
          <p>
            By using the YaarWin Game platform, you hereby consent to this
            disclaimer and agree to its terms. If you do not agree with any part
            of this disclaimer, please do not use our platform. For questions,
            visit our <a href="#/contact" className="text-cta-500 hover:underline">Contact page</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
