import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="container text-center">

        {/* Bismillah */}
        <div className="hero-bismillah fade-up">
          <p className="bismillah-ar">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
          <p className="bismillah-en">In the name of Allah, the Most Gracious, the Most Merciful</p>
        </div>

        {/* Couple Image with Floral Frame */}
        <div className="hero-couple fade-up delay-1">
          <div className="floral-frame">
            <img src="/flowers.png" alt="" className="flowers-bg" aria-hidden="true" />
            <img src="/couple.png" alt="Wedding couple" className="couple-img" />
          </div>
        </div>

        {/* Invitation Lead */}
        <div className="hero-lead fade-up delay-2">
          <span className="lead-label">Together with their families</span>
          <h2 className="lead-heading">Request the honour of your presence at the wedding celebration of</h2>
        </div>

        {/* Couple Names */}
        <div className="hero-names fade-up delay-3">
          <div className="name-card">
            <span className="role-label">The Groom</span>
            <h1 className="couple-name">Munafar Mohamed Shaafi</h1>
          </div>

          <div className="names-connector">
            <svg viewBox="0 0 60 60" className="ring-icon" aria-hidden="true">
              <circle cx="24" cy="30" r="14" fill="none" stroke="var(--gold)" strokeWidth="2" />
              <circle cx="36" cy="30" r="14" fill="none" stroke="var(--gold)" strokeWidth="2" />
            </svg>
          </div>

          <div className="name-card">
            <span className="role-label">The Bride</span>
            <h1 className="couple-name">Sithik Fathima</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
