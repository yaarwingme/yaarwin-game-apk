import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { REGISTER_URL } from '../lib/constants';

export default function AboutPage() {
  return (
    <Layout
      title="About YaarWin Game – Our Story & Mission"
      description="Learn about YaarWin Game, our mission to deliver fast, secure, and rewarding mobile gaming experiences, and what makes us a trusted gaming platform."
      canonical="https://4yaarwin.com/about"
      keywords="About YaarWin Game, Yaar Win Game, YaarWin gaming platform"
    >
      <PageHero
        title="About YaarWin Game"
        breadcrumb="About Us"
        subtitle="Discover the story behind YaarWin Game and our mission to redefine mobile gaming."
      />
      <section className="section-pad bg-white">
        <div className="container-max max-w-4xl prose-content">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-700 mb-4">
            Our Story
          </h2>
          <p>
            YaarWin Game was founded with a simple yet ambitious goal: to create
            a mobile gaming platform that combines entertainment, security, and
            rewards in one seamless experience. We recognized that many existing
            gaming platforms were either too complex, too slow, or lacked proper
            security measures. Yaar Win Game was built to address these gaps and
            provide a platform that gamers could trust and enjoy.
          </p>
          <p>
            Since our launch, we have grown to serve over 10,000 active players
            who enjoy our diverse game library, competitive tournaments, and
            rewarding loyalty programs. Our team of developers, designers, and
            gaming enthusiasts work tirelessly to ensure that every update brings
            meaningful improvements to the YaarWin App experience.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary-700 mt-10 mb-4">
            Our Mission
          </h2>
          <p>
            Our mission is to make high-quality mobile gaming accessible to
            everyone. We believe that gaming should be fun, fair, and rewarding
            for all players, regardless of their device or location. By offering
            the YaarWin Game APK as a direct download, we remove barriers and let
            players get started quickly without unnecessary hurdles.
          </p>
          <p>
            We are committed to continuous improvement, regularly updating the
            YaarWin App with new games, features, and security enhancements
            based on user feedback. Our goal is to build a platform that grows
            with its community and consistently delivers value to every player.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary-700 mt-10 mb-4">
            What Makes Us Different
          </h2>
          <p>
            YaarWin Game stands apart through its focus on three core pillars:
            speed, security, and community. Our platform is engineered for fast
            performance on all Android devices, secured with bank-grade
            encryption, and designed to foster a vibrant community of passionate
            gamers. We also offer one of the most generous reward systems in
            mobile gaming, with daily bonuses, referral incentives, and
            tournament prizes.
          </p>
          <p>
            Ready to join the YaarWin Game community?{' '}
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cta-500 font-semibold hover:underline"
            >
              Register now
            </a>{' '}
            and start your gaming journey today.
          </p>
        </div>
      </section>
    </Layout>
  );
}
