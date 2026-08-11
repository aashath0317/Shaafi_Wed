import './FloatingPetals.css';

export default function FloatingPetals() {
  // Generate random petals
  const petals = Array.from({ length: 15 }).map((_, i) => {
    const left = Math.random() * 100;
    const animDuration = 10 + Math.random() * 15;
    const animDelay = Math.random() * 10;
    const scale = 0.5 + Math.random() * 0.8;
    const opacity = 0.2 + Math.random() * 0.4;
    const isLeaf = Math.random() > 0.5;

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
          viewBox="0 0 24 24" 
          className={`petal ${isLeaf ? 'petal-leaf' : 'petal-flower'}`}
          style={{ animationDuration: `${animDuration * 0.8}s` }}
        >
          {isLeaf ? (
            <path d="M12 2C7 2 3 7 3 12c0 5 9 10 9 10s9-5 9-10c0-5-4-10-9-10zm0 18S5 16 5 12c0-4 3-8 7-8s7 4 7 8c0 4-7 8-7 8z" />
          ) : (
            <path d="M12 2C10 5 8 8 12 12C16 8 14 5 12 2ZM12 22C14 19 16 16 12 12C8 16 10 19 12 22ZM2 12C5 10 8 8 12 12C8 16 5 14 2 12ZM22 12C19 14 16 16 12 12C16 8 19 10 22 12Z" />
          )}
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
