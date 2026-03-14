interface PredictXLogoProps {
  size?: number;
  iconOnly?: boolean;
  className?: string;
}

export function PredictXLogo({ size = 40, iconOnly = false, className = "" }: PredictXLogoProps) {
  if (iconOnly) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F3BA2F" />
            <stop offset="50%" stopColor="#2F80ED" />
            <stop offset="100%" stopColor="#9D4EDD" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9D4EDD" />
            <stop offset="50%" stopColor="#2F80ED" />
            <stop offset="100%" stopColor="#F3BA2F" />
          </linearGradient>
        </defs>
        
        {/* Outer hexagonal frame */}
        <path
          d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z"
          stroke="url(#gradient1)"
          strokeWidth="3"
          fill="none"
          opacity="0.4"
        />
        
        {/* Inner prediction X with motion trails */}
        <g>
          {/* Motion trail lines */}
          <line x1="30" y1="35" x2="25" y2="30" stroke="#2F80ED" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
          <line x1="70" y1="35" x2="75" y2="30" stroke="#F3BA2F" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
          <line x1="30" y1="65" x2="25" y2="70" stroke="#9D4EDD" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
          <line x1="70" y1="65" x2="75" y2="70" stroke="#2F80ED" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
          
          {/* Main X shape */}
          <path
            d="M30 30 L50 50 L70 30"
            stroke="url(#gradient1)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30 70 L50 50 L70 70"
            stroke="url(#gradient2)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Center prediction point */}
          <circle cx="50" cy="50" r="5" fill="#F3BA2F">
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Prediction nodes */}
          <circle cx="30" cy="30" r="3" fill="#2F80ED" />
          <circle cx="70" cy="30" r="3" fill="#F3BA2F" />
          <circle cx="30" cy="70" r="3" fill="#9D4EDD" />
          <circle cx="70" cy="70" r="3" fill="#2F80ED" />
        </g>
        
        {/* Analytics data points */}
        <circle cx="50" cy="20" r="2" fill="#F3BA2F" opacity="0.6" />
        <circle cx="80" cy="50" r="2" fill="#2F80ED" opacity="0.6" />
        <circle cx="50" cy="80" r="2" fill="#9D4EDD" opacity="0.6" />
        <circle cx="20" cy="50" r="2" fill="#F3BA2F" opacity="0.6" />
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient1-full" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F3BA2F" />
            <stop offset="50%" stopColor="#2F80ED" />
            <stop offset="100%" stopColor="#9D4EDD" />
          </linearGradient>
          <linearGradient id="gradient2-full" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9D4EDD" />
            <stop offset="50%" stopColor="#2F80ED" />
            <stop offset="100%" stopColor="#F3BA2F" />
          </linearGradient>
        </defs>
        
        {/* Outer hexagonal frame */}
        <path
          d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z"
          stroke="url(#gradient1-full)"
          strokeWidth="3"
          fill="none"
          opacity="0.4"
        />
        
        {/* Inner prediction X with motion trails */}
        <g>
          {/* Motion trail lines */}
          <line x1="30" y1="35" x2="25" y2="30" stroke="#2F80ED" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
          <line x1="70" y1="35" x2="75" y2="30" stroke="#F3BA2F" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
          <line x1="30" y1="65" x2="25" y2="70" stroke="#9D4EDD" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
          <line x1="70" y1="65" x2="75" y2="70" stroke="#2F80ED" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
          
          {/* Main X shape */}
          <path
            d="M30 30 L50 50 L70 30"
            stroke="url(#gradient1-full)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30 70 L50 50 L70 70"
            stroke="url(#gradient2-full)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Center prediction point */}
          <circle cx="50" cy="50" r="5" fill="#F3BA2F">
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Prediction nodes */}
          <circle cx="30" cy="30" r="3" fill="#2F80ED" />
          <circle cx="70" cy="30" r="3" fill="#F3BA2F" />
          <circle cx="30" cy="70" r="3" fill="#9D4EDD" />
          <circle cx="70" cy="70" r="3" fill="#2F80ED" />
        </g>
        
        {/* Analytics data points */}
        <circle cx="50" cy="20" r="2" fill="#F3BA2F" opacity="0.6" />
        <circle cx="80" cy="50" r="2" fill="#2F80ED" opacity="0.6" />
        <circle cx="50" cy="80" r="2" fill="#9D4EDD" opacity="0.6" />
        <circle cx="20" cy="50" r="2" fill="#F3BA2F" opacity="0.6" />
      </svg>
      
      <span 
        className="font-bold tracking-tight"
        style={{
          fontSize: `${size * 0.6}px`,
          background: 'linear-gradient(135deg, #F3BA2F 0%, #2F80ED 50%, #9D4EDD 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        PredictX
      </span>
    </div>
  );
}

// Export standalone icon for use in favicons, app icons, etc.
export function PredictXIcon({ size = 100 }: { size?: number }) {
  return <PredictXLogo size={size} iconOnly />;
}
