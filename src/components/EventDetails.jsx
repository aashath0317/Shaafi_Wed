import { useState, useEffect } from 'react';
import './EventDetails.css';

const MEHANDI_DATE = new Date('2026-08-15T16:00:00+05:30');
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

export default function EventDetails() {
  const [mehandiTime, setMehandiTime] = useState(calcTimeLeft(MEHANDI_DATE));
  const [nikahTime, setNikahTime] = useState(calcTimeLeft(NIKAH_DATE));
  const [walimaTime, setWalimaTime] = useState(calcTimeLeft(WALIMA_DATE));

  const path = window.location.pathname.toLowerCase().replace(/\/$/, "");
  let showMehandi = true;
  let showNikah = true;
  let showWalima = true;

  if (path === '/mehndi-nikkah') {
    showWalima = false;
  } else if (path === '/wedding' || path === '/valimah') {
    showMehandi = false;
    showNikah = false;
  } else if (path === '/nikkah-valimah') {
    showMehandi = false;
  }

  const visibleEvents = [];
  if (showMehandi) visibleEvents.push('mehandi');
  if (showNikah) visibleEvents.push('nikah');
  if (showWalima) visibleEvents.push('walima');

  const getDelayClass = (eventName) => {
    const index = visibleEvents.indexOf(eventName);
    return index > 0 ? `delay-${index}` : '';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMehandiTime(calcTimeLeft(MEHANDI_DATE));
      setNikahTime(calcTimeLeft(NIKAH_DATE));
      setWalimaTime(calcTimeLeft(WALIMA_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="events-section section-padding" id="events">
      <div className="container text-center">
        <span className="section-badge">Program & Venue</span>
        <h2 className="section-title">Celebration Details</h2>
        <div className="divider"><span className="divider-icon">✦</span></div>

        <div className="events-stack">

          {/* Mehandi */}
          {showMehandi && (
          <div className={`event-card card fade-up ${getDelayClass('mehandi')}`}>
            <div className="event-icon-wrap event-icon--mehandi">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="var(--green-deep)" aria-hidden="true">
                <path d="M17 8C8 10 5.9 16.19 5 20c-.54-2.82 1.4-8.09 5-11 3.5-2.83 7-2.89 7-1zm4-6c-2.15 0-7.39 1.15-11.4 5.1C5.46 11.19 3.53 16.03 3.53 20c0 1.25.96 1.95 2.14 1.63 4.39-1.2 9.09-3.79 12.35-7C21.73 11 23 6 23 2c0-1.1-1.12-2-2-2z"/>
              </svg>
            </div>
            <h3 className="event-name">Mehandi Celebration</h3>
            
            <ul className="event-info-list">
              <li>
                <span className="info-icon">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="var(--gold)"><rect x="3" y="4" width="14" height="14" rx="2" fill="none" stroke="var(--gold)" strokeWidth="1.5"/><line x1="7" y1="2" x2="7" y2="6" stroke="var(--gold)" strokeWidth="1.5"/><line x1="13" y1="2" x2="13" y2="6" stroke="var(--gold)" strokeWidth="1.5"/><line x1="3" y1="9" x2="17" y2="9" stroke="var(--gold)" strokeWidth="1"/></svg>
                </span>
                <div>
                  <strong>Date</strong>
                  <span>Saturday, 15th August 2026</span>
                </div>
              </li>
              <li>
                <span className="info-icon">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="none"><circle cx="10" cy="10" r="7.5" stroke="var(--gold)" strokeWidth="1.5"/><line x1="10" y1="6" x2="10" y2="10" stroke="var(--gold)" strokeWidth="1.5"/><line x1="10" y1="10" x2="13" y2="12" stroke="var(--gold)" strokeWidth="1.5"/></svg>
                </span>
                <div>
                  <strong>Time</strong>
                  <span>4:00 PM onwards</span>
                </div>
              </li>
              <li>
                <span className="info-icon">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="var(--gold)"><path d="M10 2C7 2 4 4.5 4 8c0 4 6 10 6 10s6-6 6-10c0-3.5-3-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"/></svg>
                </span>
                <div>
                  <strong>Venue</strong>
                  <span>Bride Home</span>
                </div>
              </li>
            </ul>

            <div className="event-countdown">
              <TimerDisplay time={mehandiTime} />
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mehandi+Celebration+Shaafi+%26+Fathima&dates=20260815T103000Z/20260815T153000Z&details=Mehandi+celebration+of+Mohamed+Shaafi+and+Fathima.&location=7.793894488759414,81.61647486195118"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline cd-calendar-btn"
              >
                Add to Calendar
              </a>
            </div>
          </div>
          )}

          {/* Nikah */}
          {showNikah && (
          <div className={`event-card card fade-up ${getDelayClass('nikah')}`}>
            <div className="event-icon-wrap event-icon--nikah">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="var(--green-deep)" aria-hidden="true">
                <path d="M12 2C8 2 4 5 4 9c0 3 2 5 4 7l4 6 4-6c2-2 4-4 4-7 0-4-4-7-8-7zm0 2c1.5 0 3 .5 4 1.5L12 9l-4-3.5C9 4.5 10.5 4 12 4z"/>
              </svg>
            </div>
            <h3 className="event-name">Nikah Ceremony</h3>
            
            <ul className="event-info-list">
              <li>
                <span className="info-icon">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="var(--gold)"><rect x="3" y="4" width="14" height="14" rx="2" fill="none" stroke="var(--gold)" strokeWidth="1.5"/><line x1="7" y1="2" x2="7" y2="6" stroke="var(--gold)" strokeWidth="1.5"/><line x1="13" y1="2" x2="13" y2="6" stroke="var(--gold)" strokeWidth="1.5"/><line x1="3" y1="9" x2="17" y2="9" stroke="var(--gold)" strokeWidth="1"/></svg>
                </span>
                <div>
                  <strong>Date</strong>
                  <span>Sunday, 16th August 2026</span>
                </div>
              </li>
              <li>
                <span className="info-icon">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="none"><circle cx="10" cy="10" r="7.5" stroke="var(--gold)" strokeWidth="1.5"/><line x1="10" y1="6" x2="10" y2="10" stroke="var(--gold)" strokeWidth="1.5"/><line x1="10" y1="10" x2="13" y2="12" stroke="var(--gold)" strokeWidth="1.5"/></svg>
                </span>
                <div>
                  <strong>Time</strong>
                  <span>4:00 PM (After Asar Prayer)</span>
                </div>
              </li>
              <li>
                <span className="info-icon">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="var(--gold)"><path d="M10 2C7 2 4 4.5 4 8c0 4 6 10 6 10s6-6 6-10c0-3.5-3-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"/></svg>
                </span>
                <div>
                  <strong>Venue</strong>
                  <span>Bride Home</span>
                </div>
              </li>
            </ul>

            <div className="event-countdown">
              <TimerDisplay time={nikahTime} />
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Nikah+Ceremony+Shaafi+%26+Fathima&dates=20260816T100000Z/20260816T123000Z&details=Nikah+ceremony+of+Mohamed+Shaafi+and+Fathima.&location=7.793894488759414,81.61647486195118"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline cd-calendar-btn"
              >
                Add to Calendar
              </a>
            </div>
          </div>
          )}

          {/* Walima */}
          {showWalima && (
          <div className={`event-card card fade-up ${getDelayClass('walima')}`}>
            <div className="event-icon-wrap event-icon--walima">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="var(--text-gold)" aria-hidden="true">
                <path d="M3 18h18v2H3v-2zm0-4h18v1H3v-1zm3-6c0-2.5 2.7-4.5 6-4.5s6 2 6 4.5c0 1.5-1 3-3 4H9c-2-1-3-2.5-3-4z"/>
              </svg>
            </div>
            <h3 className="event-name">Walima Banquet</h3>
            
            <ul className="event-info-list">
              <li>
                <span className="info-icon">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="var(--gold)"><rect x="3" y="4" width="14" height="14" rx="2" fill="none" stroke="var(--gold)" strokeWidth="1.5"/><line x1="7" y1="2" x2="7" y2="6" stroke="var(--gold)" strokeWidth="1.5"/><line x1="13" y1="2" x2="13" y2="6" stroke="var(--gold)" strokeWidth="1.5"/><line x1="3" y1="9" x2="17" y2="9" stroke="var(--gold)" strokeWidth="1"/></svg>
                </span>
                <div>
                  <strong>Date</strong>
                  <span>Tuesday, 18th August 2026</span>
                </div>
              </li>
              <li>
                <span className="info-icon">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="none"><circle cx="10" cy="10" r="7.5" stroke="var(--gold)" strokeWidth="1.5"/><line x1="10" y1="6" x2="10" y2="10" stroke="var(--gold)" strokeWidth="1.5"/><line x1="10" y1="10" x2="13" y2="12" stroke="var(--gold)" strokeWidth="1.5"/></svg>
                </span>
                <div>
                  <strong>Time</strong>
                  <span>12:30 PM (After Luhar Prayer)</span>
                </div>
              </li>
              <li>
                <span className="info-icon">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="var(--gold)"><path d="M10 2C7 2 4 4.5 4 8c0 4 6 10 6 10s6-6 6-10c0-3.5-3-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"/></svg>
                </span>
                <div>
                  <strong>Venue</strong>
                  <span>Groom Home</span>
                </div>
              </li>
            </ul>

            <div className="event-countdown">
              <TimerDisplay time={walimaTime} />
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Walima+Reception+Shaafi+%26+Saliheen&dates=20260818T070000Z/20260818T100000Z&details=Walima+reception+of+Munafar+Mohamed+Shaafi+and+Saliheen+Fathima.&location=432,+Kayar+Road,+Eravur+2A"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline cd-calendar-btn"
              >
                Add to Calendar
              </a>
            </div>
          </div>
          )}

        </div>

        {/* Map Card */}
        <div className={`map-card card fade-up delay-${visibleEvents.length}`}>
          <h3 className="map-title">Wedding Location</h3>
          <p className="map-address">Bride Home</p>
          <p className="map-desc">Your presence will be a blessing for us. Tap below for live directions.</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=7.793894488759414,81.61647486195118"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Open Google Maps
          </a>
        </div>

      </div>
    </section>
  );
}
