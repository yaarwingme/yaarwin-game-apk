import { Download, FileDown, Settings, CheckCircle2 } from 'lucide-react';
import { REGISTER_URL } from '../../lib/constants';

const instructions = [
  {
    icon: FileDown,
    title: 'Download the APK File',
    desc: 'Click the "Download APK" button to get the latest YaarWin Game APK file directly to your Android device.',
  },
  {
    icon: Settings,
    title: 'Enable Unknown Sources',
    desc: 'Go to Settings > Security and enable "Install from Unknown Sources" to allow APK installation on your device.',
  },
  {
    icon: Download,
    title: 'Install the APK',
    desc: 'Open the downloaded file from your notifications or file manager and tap "Install" to begin the installation.',
  },
  {
    icon: CheckCircle2,
    title: 'Open & Enjoy',
    desc: 'Once installed, open the YaarWin App, register or login, and start enjoying your favorite games instantly.',
  },
];

export default function DownloadSection() {
  return (
    <section id="apk-download" className="section-pad bg-primary-700 bg-hero-pattern">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
            APK Installation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            YaarWin Game APK Download
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto">
            Download and install the YaarWin Game APK in minutes. Follow our
            step-by-step installation guide for a smooth setup on any Android
            device.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {instructions.map((inst, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-500 flex items-center justify-center">
                  <inst.icon className="w-6 h-6 text-primary-700" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {inst.title}
                  </h3>
                  <p className="text-primary-200 text-sm leading-relaxed">
                    {inst.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="card bg-white text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-6">
              <Download className="w-10 h-10 text-accent-500" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-primary-700 mb-2">
              YaarWin Game APK
            </h3>
            <p className="text-primary-400 text-sm mb-2">Latest Version v3.0</p>
            <div className="flex items-center justify-center gap-4 mb-6 text-sm text-primary-400">
              <span>Android 5.0+</span>
              <span className="w-1 h-1 rounded-full bg-primary-300"></span>
              <span>~25 MB</span>
              <span className="w-1 h-1 rounded-full bg-primary-300"></span>
              <span>Virus Free</span>
            </div>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              <Download className="w-5 h-5" />
              Download YaarWin APK
            </a>
            <p className="text-xs text-primary-300 mt-4">
              Safe &amp; secure download. No malware, no adware.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
