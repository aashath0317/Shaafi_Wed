import './QuranVerse.css';

export default function QuranVerse() {
  return (
    <section className="quran-section" id="quran">
      <div className="container text-center">
        <div className="quran-card fade-up">

          {/* Top corner ornaments */}
          <span className="quran-corner quran-corner-tl" aria-hidden="true">❦</span>
          <span className="quran-corner quran-corner-tr" aria-hidden="true">❦</span>

          <p className="quran-arabic">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>

          <div className="quran-divider" aria-hidden="true">
            <span className="qd-line"></span>
            <span className="qd-dot">✦</span>
            <span className="qd-line"></span>
          </div>

          <p className="quran-english">
            "And among His Signs is this, that He created for you mates from among yourselves,
            that you may dwell in tranquility with them, and He has put love and mercy between your hearts."
          </p>

          <span className="quran-ref">— Surah Ar-Rum [30:21] —</span>

          {/* Bottom corner ornaments */}
          <span className="quran-corner quran-corner-bl" aria-hidden="true">❦</span>
          <span className="quran-corner quran-corner-br" aria-hidden="true">❦</span>
        </div>
      </div>
    </section>
  );
}
