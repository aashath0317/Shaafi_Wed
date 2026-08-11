import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="container text-center">

        {/* Bismillah */}
        <div className="hero-bismillah fade-up">
          <p className="bismillah-ar">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
          <p className="bismillah-en">அளவற்ற அருளாளனும் நிகரற்ற அன்புடையோனுமாகிய அல்லாஹ்வின் திருப்பெயரால்...</p>
        </div>

        {/* Calligraphy Names */}
        <div className="hero-calligraphy fade-up delay-1">
          <h1 className="calligraphy-text calligraphy-inline">
            <span className="cal-name">Shaafi</span>
            <span className="cal-amp">&</span>
            <span className="cal-name">Fathima</span>
          </h1>
        </div>

        {/* Couple Image with Floral Frame */}
        <div className="hero-couple fade-up delay-2">
          <div className="floral-frame">
            <img src="/frame.png" alt="" className="frame-bg" aria-hidden="true" />
            <img src="/couple.png" alt="Wedding couple" className="couple-img" />
            <img src="/flowers.png" alt="" className="flowers-bg" aria-hidden="true" />
          </div>
        </div>

        {/* Invitation Lead */}
        <div className="hero-lead fade-up delay-3">
          <span className="lead-label">இரு குடும்பத்தினரின் நல்வாழ்த்துகளோடு...</span>
          <h2 className="lead-heading">எங்கள் இதயங்களை இணைக்கும் இந்த இனிய திருமண நன்னாளில், உங்களின் பொன்னான நல்வருகையை அன்போடு விழைகிறோம்</h2>
        </div>

        {/* Couple Names */}
        <div className="hero-names fade-up delay-4">
          <div className="name-card">
            <span className="role-label">மணமகன்</span>
            <h1 className="couple-name">முனாஃபர் முஹம்மது ஷாஃபி</h1>
          </div>

          <div className="names-connector">
            <svg viewBox="0 0 24 24" className="heart-icon" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="weds-text">இணையும்</span>
            <svg viewBox="0 0 24 24" className="heart-icon" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          <div className="name-card">
            <span className="role-label">மணமகள்</span>
            <h1 className="couple-name">ஸாலிஹீன் ஃபாத்திமா</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
