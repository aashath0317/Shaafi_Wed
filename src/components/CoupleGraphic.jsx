import './CoupleGraphic.css';

export default function CoupleGraphic() {
  return (
    <svg
      viewBox="0 0 240 260"
      className="couple-svg"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Islamic wedding couple silhouette"
    >
      <defs>
        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0D6B4B" />
          <stop offset="100%" stopColor="#148C63" />
        </linearGradient>
        <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C5973E" />
          <stop offset="50%" stopColor="#E8D5A3" />
          <stop offset="100%" stopColor="#C5973E" />
        </linearGradient>
      </defs>

      {/* Decorative arch frame */}
      <path
        d="M 30 250 L 30 100 Q 30 30 120 30 Q 210 30 210 100 L 210 250"
        fill="none"
        stroke="url(#goldGrad2)"
        strokeWidth="2.5"
        className="arch-line"
      />
      <path
        d="M 38 250 L 38 104 Q 38 40 120 40 Q 202 40 202 104 L 202 250"
        fill="none"
        stroke="url(#goldGrad2)"
        strokeWidth="1"
        strokeDasharray="4,4"
        opacity="0.5"
      />

      {/* Crescent & star at top of arch */}
      <g transform="translate(120, 22)">
        <path
          d="M -6 -8 A 8 8 0 1 0 6 8 A 6 6 0 1 1 -6 -8 Z"
          fill="url(#goldGrad2)"
        />
        <polygon
          points="8,-6 9,-3 12,-3 10,-1 11,2 8,0.5 5,2 6,-1 4,-3 7,-3"
          fill="url(#goldGrad2)"
        />
      </g>

      {/* ── Groom (left) ── */}
      {/* Head */}
      <circle cx="90" cy="90" r="18" fill="url(#greenGrad)" />
      {/* Topi / kufi cap */}
      <ellipse cx="90" cy="78" rx="16" ry="8" fill="#0A5C3E" />
      <rect x="74" y="78" width="32" height="4" rx="2" fill="#0A5C3E" />

      {/* Body - thobe/jubba */}
      <path
        d="M 70 108 Q 68 130 66 170 L 66 240 Q 78 245 90 245 Q 102 245 114 240 L 114 170 Q 112 130 110 108 Q 100 104 90 104 Q 80 104 70 108 Z"
        fill="url(#greenGrad)"
      />
      {/* Collar detail */}
      <path
        d="M 82 108 L 90 118 L 98 108"
        fill="none"
        stroke="#0A5C3E"
        strokeWidth="1.5"
      />

      {/* ── Bride (right) ── */}
      {/* Head */}
      <circle cx="150" cy="90" r="18" fill="url(#greenGrad)" />
      {/* Hijab */}
      <path
        d="M 130 85 Q 130 68 150 65 Q 170 68 170 85 L 172 110 Q 168 120 160 125 L 150 128 L 140 125 Q 132 120 128 110 Z"
        fill="#0A5C3E"
        opacity="0.85"
      />
      {/* Face area (lighter) */}
      <circle cx="150" cy="90" r="13" fill="#E8F5EE" opacity="0.3" />

      {/* Body - flowing dress */}
      <path
        d="M 130 114 Q 125 140 120 180 L 116 245 Q 133 250 150 250 Q 167 250 184 245 L 180 180 Q 175 140 170 114 Q 160 108 150 108 Q 140 108 130 114 Z"
        fill="url(#greenGrad)"
      />
      {/* Dress fold details */}
      <path
        d="M 135 140 Q 150 155 165 140"
        fill="none"
        stroke="#0A5C3E"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M 130 180 Q 150 195 170 180"
        fill="none"
        stroke="#0A5C3E"
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Gold decorative details on bride */}
      <circle cx="150" cy="105" r="2.5" fill="url(#goldGrad2)" />
      <line x1="145" y1="115" x2="155" y2="115" stroke="url(#goldGrad2)" strokeWidth="1.5" />

      {/* Hands meeting in center - connection */}
      <path
        d="M 108 165 Q 115 160 120 162 Q 125 164 128 162"
        fill="none"
        stroke="url(#goldGrad2)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Bottom flourish */}
      <path
        d="M 60 252 Q 120 265 180 252"
        fill="none"
        stroke="url(#goldGrad2)"
        strokeWidth="1.5"
      />
      <circle cx="120" cy="258" r="2" fill="url(#goldGrad2)" />
    </svg>
  );
}
