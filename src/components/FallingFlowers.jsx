import React, { useEffect, useState } from 'react';
import './FallingFlowers.css';

const FallingFlowers = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate an array of petals with random properties
    const newPetals = Array.from({ length: 25 }).map((_, i) => {
      const size = Math.random() * 15 + 10; // Between 10px and 25px
      const left = Math.random() * 100; // 0% to 100%
      const animationDuration = Math.random() * 10 + 10; // 10s to 20s
      const animationDelay = Math.random() * 15; // 0s to 15s

      return {
        id: i,
        size,
        left,
        animationDuration,
        animationDelay,
      };
    });
    setPetals(newPetals);
  }, []);

  return (
    <div className="falling-flowers-container">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.animationDelay}s`,
          }}
        >
          <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 0C172.93 0 105.61 67.33 105.61 150.4C105.61 233.47 256 512 256 512S406.39 233.47 406.39 150.4C406.39 67.33 339.07 0 256 0Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FallingFlowers;
