import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { Mail, MessageCircle, Phone, MapPin, UserPlus } from 'lucide-react';
import { REGISTER_URL } from '../lib/constants';

export default function ContactPage() {
  return (
    <Layout
      title="Contact YaarWin – Get Support & Help"
      description="Contact YaarWin Game support for help with registration, login, APK download, or any questions. We are available 24/7 to assist you."
      canonical="https://4yaarwin.com/contact"
      keywords="Contact YaarWin, YaarWin Game support, YaarWin help"
    >
      <PageHero
        title="Contact YaarWin"
        breadcrumb="Contact Us"
        subtitle="Have questions about YaarWin Game? Our support team is available 24/7 to help you."
      />
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-700 mb-6">
                Get in Touch
              </h2>
              <p className="text-primary-400 mb-8">
                Whether you need help with YaarWin Register, YaarWin Login, APK
                installation, or have general questions, we are here to help.
                Choose your preferred method below to reach us.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-1">Email Support</h3>
                    <p className="text-primary-400 text-sm">support@4yaarwin.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-700 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-1">Live Chat</h3>
                    <p className="text-primary-400 text-sm">
                      Available 24/7 in the YaarWin App
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-1">Phone Support</h3>
                    <p className="text-primary-400 text-sm">Available 9 AM - 9 PM (IST)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-1">Online Platform</h3>
                    <p className="text-primary-400 text-sm">4yaarwin.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <UserPlus className="w-5 h-5" />
                  Register Now
                </a>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-primary-700 mb-6">
                Send Us a Message
              </h2>
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for your message. Our team will get back to you shortly.');
                }}
              >
                <div>
                  <label className="block text-sm font-semibold text-primary-600 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-cta-500 focus:ring-2 focus:ring-cta-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary-600 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-cta-500 focus:ring-2 focus:ring-cta-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary-600 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-cta-500 focus:ring-2 focus:ring-cta-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary-600 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your issue or question..."
                    className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-cta-500 focus:ring-2 focus:ring-cta-500/20 outline-none transition-all resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
