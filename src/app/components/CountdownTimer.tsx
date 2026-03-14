import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: string;
  onExpire?: () => void;
  compact?: boolean;
  showIcon?: boolean;
}

export function CountdownTimer({ targetDate, onExpire, compact = false, showIcon = true }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.total <= 0 && onExpire) {
        onExpire();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onExpire]);

  if (timeLeft.total <= 0) {
    return (
      <div className="flex items-center gap-1.5 text-red-400">
        {showIcon && <Clock className="w-4 h-4" />}
        <span className="text-sm font-medium">Expired</span>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="flex items-center gap-1.5 text-yellow-400">
        {showIcon && <Clock className="w-3.5 h-3.5" />}
        <span className="text-xs font-mono">
          {formatCompactTime(timeLeft)}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {showIcon && <Clock className="w-4 h-4 text-yellow-400" />}
      <div className="flex items-center gap-2 font-mono text-sm">
        {timeLeft.days > 0 && (
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-yellow-400">{timeLeft.days}</span>
            <span className="text-[10px] text-gray-400">DAYS</span>
          </div>
        )}
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-yellow-400">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="text-[10px] text-gray-400">HRS</span>
        </div>
        <span className="text-yellow-400 mb-3">:</span>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-yellow-400">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="text-[10px] text-gray-400">MIN</span>
        </div>
        <span className="text-yellow-400 mb-3">:</span>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-yellow-400">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="text-[10px] text-gray-400">SEC</span>
        </div>
      </div>
    </div>
  );
}

function calculateTimeLeft(targetDate: string) {
  const now = new Date('2026-03-13T12:00:00').getTime();
  const target = new Date(targetDate).getTime();
  const difference = target - now;

  if (difference <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    total: difference,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function formatCompactTime(timeLeft: ReturnType<typeof calculateTimeLeft>) {
  if (timeLeft.days > 0) {
    return `${timeLeft.days}d ${timeLeft.hours}h`;
  }
  if (timeLeft.hours > 0) {
    return `${timeLeft.hours}h ${timeLeft.minutes}m`;
  }
  return `${timeLeft.minutes}m ${timeLeft.seconds}s`;
}
