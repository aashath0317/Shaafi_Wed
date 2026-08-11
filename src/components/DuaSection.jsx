import { useState } from 'react';
import './DuaSection.css';

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m])
  );
}

const DEFAULT_DUAS = [
  { name: 'ரஹ்மான் மாமா & குடும்பத்தினர்', dua: 'பாரகல்லாஹு லகுமா வ பாரக அலைகுமா! உங்கள் இருவரின் வாழ்விலும் அன்பையும் அமைதியையும் மகிழ்ச்சியையும் அல்லாஹ் பொழிவானாக.' },
  { name: 'ஆயிஷா & ஸைத்', dua: 'வல்ல ரஹ்மான் உங்கள் மணவாழ்க்கையில் பேரருளையும் பரக்கத்தையும் பொழிவானாக!' },
  { name: 'முஹம்மது ரமீஸ்', dua: 'மாஷா அல்லாஹ்! புதுமண தம்பதிகளுக்கு மனமார்ந்த நல்வாழ்த்துகள்!' },
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
      dua: message.trim() || 'அல்லாஹ் உங்கள் மணவாழ்க்கையை ஆசீர்வதிப்பானாக!',
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
        <span className="section-badge">துஆக்கள் & வாழ்த்துகள்</span>
        <h2 className="section-title">உங்கள் நல்வாழ்த்துகளைப் பகிருங்கள்</h2>
        <p className="section-subtitle">உங்கள் அன்பான துஆக்களும் நல்வாழ்த்துகளும் எங்கள் வாழ்வின் பொக்கிஷம்.</p>
        <div className="divider"><span className="divider-icon">✦</span></div>

        <div className="dua-layout">

          {/* Form */}
          <div className="dua-form-card card fade-up">
            <h3 className="dua-form-title">உங்கள் வாழ்த்தை எழுதுங்கள்</h3>

            {submitted && (
              <div className="success-toast">
                ஜஸாகல்லாஹு கைரன்! உங்கள் துஆ பதிவு செய்யப்பட்டது.
              </div>
            )}

            <form onSubmit={handleSubmit} className="dua-form">
              <div className="field">
                <label htmlFor="dua-name">உங்கள் பெயர்</label>
                <input
                  type="text"
                  id="dua-name"
                  required
                  placeholder="எ.கா. சகோதரர் அகமது"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="dua-message">உங்கள் துஆ / வாழ்த்துகள்</label>
                <textarea
                  id="dua-message"
                  rows="3"
                  placeholder="பாரகல்லாஹு லகுமா வ பாரக அலைகுமா..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button type="submit" className="btn-primary dua-submit-btn">
                வாழ்த்தை அனுப்புக
              </button>
            </form>
          </div>

          {/* Duas Wall */}
          <div className="dua-wall-card card fade-up delay-2">
            <h3 className="dua-wall-title">நல்வாழ்த்துச் சுவர்</h3>
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
