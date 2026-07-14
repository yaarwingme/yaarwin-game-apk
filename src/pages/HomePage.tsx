import Layout from '../components/Layout';
import HeroSection from '../components/home/HeroSection';
import ContentSection from '../components/home/ContentSection';
import FeaturesSection from '../components/home/FeaturesSection';
import RegisterSection from '../components/home/RegisterSection';
import LoginSection from '../components/home/LoginSection';
import DownloadSection from '../components/home/DownloadSection';
import SecuritySection from '../components/home/SecuritySection';
import FaqSection from '../components/home/FaqSection';
import CtaBanner from '../components/home/CtaBanner';
import { FAQS } from '../lib/constants';

export default function HomePage() {
  return (
    <Layout
      title="YaarWin Game APK Download & Login – Latest Version"
      description="Download YaarWin Game APK latest version, register instantly, login securely, and explore Yaar Win Game features with a fast mobile experience."
      canonical="https://4yaarwin.com/yaarwin-game-apk-download"
      keywords="YaarWin Game, Yaar Win Game, YaarWin Game APK, YaarWin APK Download, YaarWin Login, YaarWin Register, YaarWin App Download"
      faqSchema={FAQS}
    >
      <HeroSection />
      <ContentSection />
      <FeaturesSection />
      <RegisterSection />
      <LoginSection />
      <DownloadSection />
      <SecuritySection />
      <FaqSection />
      <CtaBanner />
    </Layout>
  );
}
