import { useState, useEffect } from 'react';
import './CountdownTimers.css';

const NIKAH_DATE = new Date('2026-08-16T15:30:00+05:30');
const WALIMA_DATE = new Date('2026-08-18T12:30:00+05:30');

function calcTimeLeft(target) {
  const diff = target - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n) {
  return String(n).padStart(2, '0');
}

function TimerDisplay({ time }) {
  return (
    <div className="timer-grid">
      {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
        <div className={`timer-cell ${unit === 'seconds' ? 'timer-cell--active' : ''}`} key={unit}>
          <span className="timer-num">{pad(time[unit])}</span>
          <span className="timer-label">{unit}</span>
        </div>
      ))}
    </div>
  );
}

export default function CountdownTimers() {
  const [nikahTime, setNikahTime] = useState(calcTimeLeft(NIKAH_DATE));
  const [walimaTime, setWalimaTime] = useState(calcTimeLeft(WALIMA_DATE));

  useEffect(() => {
    const interval = setInterval(() => {
      setNikahTime(calcTimeLeft(NIKAH_DATE));
      setWalimaTime(calcTimeLeft(WALIMA_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown-section section-padding" id="countdown">
      <div className="container text-center">
        <span className="section-badge">Count Every Moment</span>
        <h2 className="section-title">Countdown To Our Special Days</h2>
        <div className="divider"><span className="divider-icon">✦</span></div>

        <div className="countdown-stack">

          {/* Nikah Timer */}
          <div className="countdown-card card fade-up">
            <div className="cd-badge cd-badge--nikah">
              Nikah Ceremony
            </div>
            <h3 className="cd-title">Marriage Ceremony</h3>
            <p className="cd-date">Sunday, 16th August 2026 • 3:30 PM</p>
            <TimerDisplay time={nikahTime} />
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Nikah+Ceremony+Shaafi+%26+Sithik&dates=20260816T100000Z/20260816T123000Z&details=Nikah+ceremony+of+Munafar+Mohamed+Shaafi+and+Sithik+Fathima.&location=432,+Kayar+Road,+Eravur+2A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline cd-calendar-btn"
            >
              Add to Calendar
            </a>
          </div>

          {/* Walima Timer */}
          <div className="countdown-card card fade-up delay-2">
            <div className="cd-badge cd-badge--walima">
              Walima Feast
            </div>
            <h3 className="cd-title">Wedding Reception</h3>
            <p className="cd-date">Tuesday, 18th August 2026 • 12:30 PM</p>
            <TimerDisplay time={walimaTime} />
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Walima+Reception+Shaafi+%26+Sithik&dates=20260818T070000Z/20260818T100000Z&details=Walima+reception+of+Munafar+Mohamed+Shaafi+and+Sithik+Fathima.&location=432,+Kayar+Road,+Eravur+2A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline cd-calendar-btn"
            >
              Add to Calendar
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
