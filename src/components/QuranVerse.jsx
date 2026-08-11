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
            "உங்களுக்கிடையே அமைதியும், அளப்பரிய அன்பும், கருணையும் நிலவுவதற்காக, உங்கிருந்தே உங்களுக்கான நல்வாழ்க்கைத் துணையை அவன் படைத்திருப்பதும் அவனது பேரருள் சான்றுகளில் ஒன்றாகும்."
          </p>

          <span className="quran-ref">— சூரா அர்-ரூம் [30:21] —</span>

          {/* Bottom corner ornaments */}
          <span className="quran-corner quran-corner-bl" aria-hidden="true">❦</span>
          <span className="quran-corner quran-corner-br" aria-hidden="true">❦</span>
        </div>
      </div>
    </section>
  );
}
