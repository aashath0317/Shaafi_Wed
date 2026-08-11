import { useState } from 'react';
import './DuaSection.css';

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m])
  );
}

const DEFAULT_DUAS = [
  { name: 'Uncle Rahmaan & Family', dua: 'Barakallahu lakuma wa baraka \'alaykuma! May Allah bless you both with a life full of love, peace and happiness.' },
  { name: 'Aisha & Zayd', dua: 'May Allah SWT shower His finest blessings on your union and fill your home with mercy and barakah!' },
  { name: 'Mohamed Rameez', dua: 'MashaAllah! Heartfelt congratulations to the newlyweds. May your marriage be a source of great joy.' },
];

function getStoredDuas() {
  try {
    const stored = localStorage.getItem('wedding_duas_sithik_shaafi');
    if (stored) return JSON.parse(stored);
  } catch { /* ignore */ }
  return DEFAULT_DUAS;
}

function saveDuas(duas) {
  localStorage.setItem('wedding_duas_sithik_shaafi', JSON.stringify(duas));
}

export default function DuaSection() {
  const [duas, setDuas] = useState(getStoredDuas);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newDua = {
      name: name.trim(),
      dua: message.trim() || 'May Allah bless your marriage!',
    };

    const updated = [newDua, ...duas];
    setDuas(updated);
    saveDuas(updated);
    setName('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="dua-section section-padding" id="duas">
      <div className="container text-center">
        <span className="section-badge">Duas & Blessings</span>
        <h2 className="section-title">Send Your Blessings</h2>
        <p className="section-subtitle">Your prayers and heartfelt wishes mean the world to us.</p>
        <div className="divider"><span className="divider-icon">✦</span></div>

        <div className="dua-layout">

          {/* Form */}
          <div className="dua-form-card card fade-up">
            <h3 className="dua-form-title">Write Your Dua</h3>

            {submitted && (
              <div className="success-toast">
                JazakAllah Khair! Your dua has been recorded.
              </div>
            )}

            <form onSubmit={handleSubmit} className="dua-form">
              <div className="field">
                <label htmlFor="dua-name">Your Name</label>
                <input
                  type="text"
                  id="dua-name"
                  required
                  placeholder="e.g. Brother Ahmed"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="dua-message">Your Dua / Wishes</label>
                <textarea
                  id="dua-message"
                  rows="3"
                  placeholder="Barakallahu lakuma wa baraka 'alaykuma..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button type="submit" className="btn-primary dua-submit-btn">
                Send Dua
              </button>
            </form>
          </div>

          {/* Duas Wall */}
          <div className="dua-wall-card card fade-up delay-2">
            <h3 className="dua-wall-title">Blessings Wall</h3>
            <div className="dua-wall-list">
              {duas.map((d, i) => (
                <div className="dua-item" key={i}>
                  <span className="dua-author">{d.name}</span>
                  <p className="dua-text">"{d.dua}"</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
