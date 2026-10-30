import React from "react";

interface TorqueLogoProps {
  isWhite?: boolean;
  width?: number;
  height?: number;
}

export default function TorqueLogo({ isWhite = false, width = 230, height = 75 }: TorqueLogoProps) {
  const textColor = isWhite ? "#ffffff" : "#1a1a1a";
  const subTextColor = isWhite ? "#cbd5e1" : "#1a1a1a";

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 280 90" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        {/* Speedometer Arc Gradient */}
        <linearGradient id="speedArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e11d48" />
          <stop offset="35%" stopColor="#ea580c" />
          <stop offset="65%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#84cc16" />
        </linearGradient>

        <linearGradient id="innerGlow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e11d48" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#84cc16" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Speedometer Segmented Rainbow Arc */}
      {/* Segment 1: Red/Pink */}
      <path
        d="M 28 42 A 52 46 0 0 1 54 16"
        fill="none"
        stroke="#e11d48"
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      {/* Segment 2: Orange */}
      <path
        d="M 60 13 A 52 46 0 0 1 96 6"
        fill="none"
        stroke="#f97316"
        strokeWidth="6.5"
      />
      {/* Segment 3: Yellow */}
      <path
        d="M 104 6 A 52 46 0 0 1 140 13"
        fill="none"
        stroke="#eab308"
        strokeWidth="6.5"
      />
      {/* Segment 4: Green */}
      <path
        d="M 146 16 A 52 46 0 0 1 172 42"
        fill="none"
        stroke="#84cc16"
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* Sleek Car Profile Silhouette */}
      <path
        d="M 38 46 C 45 42, 60 38, 76 28 C 88 20, 112 20, 126 28 C 142 38, 155 42, 164 46 C 158 45, 142 42, 102 42 C 62 42, 46 45, 38 46 Z"
        fill={textColor}
      />
      <path
        d="M 72 32 C 82 25, 96 24, 104 24 C 112 24, 124 25, 130 32 Z"
        fill={isWhite ? "#15181e" : "#ffffff"}
      />

      {/* Speedometer needle accent */}
      <line x1="100" y1="42" x2="84" y2="22" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="100" cy="42" r="3.5" fill="#e11d48" />

      {/* Three Horizontal Speed Lines on the left of TORQUE */}
      <line x1="28" y1="58" x2="52" y2="58" stroke={textColor} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="34" y1="63" x2="52" y2="63" stroke={textColor} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="68" x2="52" y2="68" stroke={textColor} strokeWidth="2.5" strokeLinecap="round" />

      {/* Main Brand Text: TORQUE */}
      <text
        x="58"
        y="68"
        fontFamily="'Outfit', sans-serif"
        fontSize="31"
        fontWeight="900"
        fontStyle="italic"
        fill={textColor}
        letterSpacing="0.04em"
      >
        TORQUE
      </text>

      {/* Underline speed line */}
      <line x1="28" y1="74" x2="216" y2="74" stroke={textColor} strokeWidth="2" strokeLinecap="round" />

      {/* Subtitle: AUTO ADVISOR */}
      <text
        x="66"
        y="85"
        fontFamily="'Outfit', sans-serif"
        fontSize="10.5"
        fontWeight="800"
        letterSpacing="0.28em"
        fill={subTextColor}
      >
        AUTO ADVISOR
      </text>
    </svg>
  );
}
