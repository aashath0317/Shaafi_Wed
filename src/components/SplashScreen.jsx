import { useState, useRef } from 'react';
import './SplashScreen.css';

export default function SplashScreen({ onOpen, audioRef }) {
  const [hasStarted, setHasStarted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const videoRef = useRef(null);

  const handleTap = () => {
    if (hasStarted) return;
    setHasStarted(true);

    // Start nasheed audio (ref from App so it persists)
    if (audioRef?.current) {
      audioRef.current.play().catch(() => {});
    }

    // Start intro video
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleVideoEnd = () => {
    // Video finished — transition to main page
    setLeaving(true);
    setTimeout(() => onOpen(), 600);
  };

  return (
    <div className={`intro-overlay ${leaving ? 'intro--leaving' : ''}`}>

      {/* Tap-to-play prompt (shown before user taps) */}
      {!hasStarted && (
        <div className="intro-tap-prompt" onClick={handleTap}>
          <div className="tap-circle">
            <svg viewBox="0 0 60 60" className="play-icon" aria-hidden="true">
              <circle cx="30" cy="30" r="28" fill="rgba(13, 107, 75, 0.85)" stroke="#C5973E" strokeWidth="2" />
              <polygon points="24,18 24,42 44,30" fill="#C5973E" />
            </svg>
          </div>
          <span className="tap-label">Tap to Play</span>
        </div>
      )}

      {/* Intro video — frozen on first frame until tapped */}
      <video
        ref={videoRef}
        className="intro-video"
        src="/intro.mp4"
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        onClick={handleTap}
      />
    </div>
  );
}
