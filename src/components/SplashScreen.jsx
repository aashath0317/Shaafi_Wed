import { useState, useRef } from 'react';
import './SplashScreen.css';

export default function SplashScreen({ onOpen, audioRef }) {
  const [hasStarted, setHasStarted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const videoRef = useRef(null);

  const handleTap = () => {
    if (hasStarted) return;
    setHasStarted(true);

    // Start nasheed audio
    if (audioRef?.current) {
      audioRef.current.play().catch(() => {});
    }

    // Start intro video
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleVideoEnd = () => {
    setLeaving(true);
    setTimeout(() => onOpen(), 600);
  };

  return (
    <div
      className={`intro-overlay ${leaving ? 'intro--leaving' : ''}`}
      onClick={handleTap}
    >
      <video
        ref={videoRef}
        className="intro-video"
        src="/intro.mp4"
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
      />
    </div>
  );
}
