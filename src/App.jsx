import { useState, useEffect, useRef } from 'react';
import SplashScreen from './components/SplashScreen';
import HeroSection from './components/HeroSection';
import QuranVerse from './components/QuranVerse';
import EventDetails from './components/EventDetails';
import DuaSection from './components/DuaSection';
import Footer from './components/Footer';
import FloatingPetals from './components/FloatingPetals';
import './App.css';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const mainRef = useRef(null);
  const audioRef = useRef(null);

  // Intersection Observer for scroll fade-up animations
  useEffect(() => {
    if (showSplash) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [showSplash]);

  const handleOpen = () => {
    window.scrollTo(0, 0);
    setShowSplash(false);
  };

  return (
    <>
      {/* Background nasheed — lives in App so it persists after splash */}
      <audio ref={audioRef} src="/nasheed.mp3" loop preload="auto" />

      {showSplash && <SplashScreen onOpen={handleOpen} audioRef={audioRef} />}

      <main
        ref={mainRef}
        className={`main-wrapper ${showSplash ? 'main-hidden' : 'main-visible'}`}
      >
        <FloatingPetals />
        <HeroSection />
        <QuranVerse />
        <EventDetails />
        <DuaSection />
        <Footer />
      </main>
    </>
  );
}
