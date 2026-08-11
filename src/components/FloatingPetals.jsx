import './FloatingPetals.css';

export default function FloatingPetals() {
  // Generate random petals
  const petals = Array.from({ length: 20 }).map((_, i) => {
    const left = Math.random() * 100;
    const animDuration = 10 + Math.random() * 15;
    const animDelay = Math.random() * 10;
    const scale = 0.5 + Math.random() * 0.8;
    const opacity = 0.5 + Math.random() * 0.5;
    const isPink = Math.random() > 0.4;

    return (
      <div
        key={i}
        className="petal-container"
        style={{
          left: `${left}%`,
          animationDuration: `${animDuration}s`,
          animationDelay: `${animDelay}s`,
          transform: `scale(${scale})`,
          opacity: opacity,
        }}
      >
        <svg 
          viewBox="0 0 512 512" 
          className={`petal ${isPink ? 'petal-pink' : 'petal-gold'}`}
          style={{ animationDuration: `${animDuration * 0.8}s` }}
          fill="currentColor"
        >
          <path d="M256,0C210.7,0,172.9,34.4,166,78.5C121.9,71.6,78.2,100.8,64,143.6c-14.2,42.8-1.5,91.2,31.4,120.4 c-32.9,29.1-45.6,77.6-31.4,120.4c14.2,42.8,57.9,72,102,65.1C212.1,493.6,233,512,256,512s43.9-18.4,50-62.5 c44.1,6.9,87.8-22.3,102-65.1c14.2-42.8,1.5-91.2-31.4-120.4c32.9-29.1,45.6-77.6,31.4-120.4C393.8,100.8,350.1,71.6,306,78.5 C299.1,34.4,261.3,0,256,0z" />
          <circle cx="256" cy="256" r="60" fill="rgba(255,255,255,0.4)" />
        </svg>
      </div>
    );
  });

  return (
    <div className="floating-petals-wrapper" aria-hidden="true">
      {petals}
    </div>
  );
}
