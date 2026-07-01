'use client';

export default function SuperBLogo() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* Background circle */}
      <circle cx="32" cy="32" r="30" fill="url(#grad1)" stroke="#fff" strokeWidth="2" />

      {/* Superman B Logo */}
      <g transform="translate(32, 32)">
        {/* B shape with superhero flair */}
        <path
          d="M -8 -12 L -2 -12 Q 4 -12 4 -6 Q 4 -2 -2 -2 L -8 -2 L -8 -12 Z"
          fill="#fff"
          stroke="#0052CC"
          strokeWidth="0.5"
        />
        <path
          d="M -8 -2 L 0 -2 Q 6 -2 6 4 Q 6 10 0 10 L -8 10 L -8 -2 Z"
          fill="#fff"
          stroke="#0052CC"
          strokeWidth="0.5"
        />

        {/* Red cape effect */}
        <ellipse cx="-12" cy="0" rx="3" ry="8" fill="#FF4444" opacity="0.7" />
        <ellipse cx="10" cy="0" rx="3" ry="8" fill="#FF4444" opacity="0.7" />

        {/* Shine effect */}
        <circle cx="-2" cy="-8" r="1.5" fill="#FFD700" opacity="0.8" />
      </g>

      {/* Gradients */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1E40AF', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Text */}
      <text
        x="32"
        y="52"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="#fff"
        fontFamily="Arial, sans-serif"
      >
        superB
      </text>
    </svg>
  );
}
