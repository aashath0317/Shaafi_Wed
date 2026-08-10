import { useState } from 'react';
import './SplashScreen.css';

export default function SplashScreen({ onOpen }) {
  const [isOpened, setIsOpened] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const handleTap = () => {
    if (isOpened) return;
    setIsOpened(true);

    // After doors finish opening, fade out overlay and reveal content
    setTimeout(() => {
      setLeaving(true);
      setTimeout(() => onOpen(), 800);
    }, 1600);
  };

  return (
    <div className={`doors-overlay ${leaving ? 'doors--leaving' : ''}`}>

      {/* Ambient floating particles */}
      <div className="particles" aria-hidden="true">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${8 + Math.random() * 84}%`,
              top: `${8 + Math.random() * 84}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* 3D perspective wrapper */}
      <div className="doors-scene">

        {/* ═══ LEFT DOOR ═══ */}
        <div className={`door door--left ${isOpened ? 'door--open' : ''}`}>
          <div className="door-face">

            {/* Gold border (left half) */}
            <div className="door-border door-border--left">

              {/* Islamic geometric pattern strip along the seam */}
              <div className="door-pattern-strip door-pattern--right-edge">
                <svg viewBox="0 0 20 400" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <pattern id="islamicL" x="0" y="0" width="20" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 20 10 L 10 20 L 0 10 Z" fill="none" stroke="#C5973E" strokeWidth="0.8" opacity="0.6" />
                      <circle cx="10" cy="10" r="2" fill="#C5973E" opacity="0.3" />
                    </pattern>
                  </defs>
                  <rect width="20" height="400" fill="url(#islamicL)" />
                </svg>
              </div>

              {/* Top arch — left half */}
              <svg className="door-arch-left" viewBox="0 0 100 60" aria-hidden="true">
                <path d="M 90 55 Q 90 10 50 10 L 50 55" fill="none" stroke="#C5973E" strokeWidth="1.5" />
                <path d="M 82 55 Q 82 18 50 18 L 50 55" fill="none" stroke="#C5973E" strokeWidth="0.7" strokeDasharray="3,3" opacity="0.4" />
              </svg>

              {/* Bismillah — left half (first part) */}
              <p className="door-bismillah-left">بِسْمِ ٱللَّٰهِ</p>

              {/* Ornament */}
              <div className="door-ornament-line">
                <span className="dol-line"></span>
                <span className="dol-dot">◆</span>
              </div>

              {/* Label */}
              <p className="door-label-left">Wedding</p>

              {/* Groom name */}
              <h2 className="door-name-left">Sithik</h2>
              <h2 className="door-name-left door-name--sub">Fathima</h2>

              {/* Bottom flourish */}
              <svg className="door-flourish" viewBox="0 0 60 20" aria-hidden="true">
                <path d="M 5 10 Q 30 22 55 10" fill="none" stroke="#C5973E" strokeWidth="1" />
                <circle cx="55" cy="10" r="1.5" fill="#C5973E" />
              </svg>
            </div>
          </div>
        </div>

        {/* ═══ RIGHT DOOR ═══ */}
        <div className={`door door--right ${isOpened ? 'door--open' : ''}`}>
          <div className="door-face">

            {/* Gold border (right half) */}
            <div className="door-border door-border--right">

              {/* Islamic geometric pattern strip along the seam */}
              <div className="door-pattern-strip door-pattern--left-edge">
                <svg viewBox="0 0 20 400" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <pattern id="islamicR" x="0" y="0" width="20" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 20 10 L 10 20 L 0 10 Z" fill="none" stroke="#C5973E" strokeWidth="0.8" opacity="0.6" />
                      <circle cx="10" cy="10" r="2" fill="#C5973E" opacity="0.3" />
                    </pattern>
                  </defs>
                  <rect width="20" height="400" fill="url(#islamicR)" />
                </svg>
              </div>

              {/* Top arch — right half */}
              <svg className="door-arch-right" viewBox="0 0 100 60" aria-hidden="true">
                <path d="M 10 55 Q 10 10 50 10 L 50 55" fill="none" stroke="#C5973E" strokeWidth="1.5" />
                <path d="M 18 55 Q 18 18 50 18 L 50 55" fill="none" stroke="#C5973E" strokeWidth="0.7" strokeDasharray="3,3" opacity="0.4" />
              </svg>

              {/* Bismillah — right half (second part) */}
              <p className="door-bismillah-right">ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>

              {/* Ornament */}
              <div className="door-ornament-line door-ornament--reverse">
                <span className="dol-dot">◆</span>
                <span className="dol-line"></span>
              </div>

              {/* Label */}
              <p className="door-label-right">Invitation</p>

              {/* Bride name */}
              <h2 className="door-name-right">Munafar</h2>
              <h2 className="door-name-right door-name--sub">Mohamed Shaafi</h2>

              {/* Bottom flourish */}
              <svg className="door-flourish door-flourish--right" viewBox="0 0 60 20" aria-hidden="true">
                <path d="M 55 10 Q 30 22 5 10" fill="none" stroke="#C5973E" strokeWidth="1" />
                <circle cx="5" cy="10" r="1.5" fill="#C5973E" />
              </svg>
            </div>
          </div>
        </div>

        {/* ═══ CENTER SEAL (wax-seal style, sits on top of seam) ═══ */}
        <div className={`center-seal ${isOpened ? 'seal--hidden' : ''}`} onClick={handleTap}>
          {/* Crescent & star */}
          <svg viewBox="0 0 60 60" className="seal-svg" aria-hidden="true">
            <circle cx="30" cy="30" r="28" fill="#0D6B4B" stroke="#C5973E" strokeWidth="2" />
            <circle cx="30" cy="30" r="24" fill="none" stroke="#C5973E" strokeWidth="0.7" strokeDasharray="3,2" opacity="0.5" />
            <g transform="translate(30, 26)">
              <path d="M -7 -9 A 9 9 0 1 0 7 9 A 7 7 0 1 1 -7 -9 Z" fill="#C5973E" />
              <polygon points="10,-7 11.5,-3.5 15,-3.5 12.5,-0.5 13.5,3 10,1 6.5,3 7.5,-0.5 5,-3.5 8.5,-3.5" fill="#C5973E" />
            </g>
          </svg>

          <span className="seal-text">Tap to Reveal</span>
        </div>

      </div>
    </div>
  );
}
