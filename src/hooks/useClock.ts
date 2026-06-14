import { useEffect, useState } from 'react';

const UTC_FORMAT: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZone: 'UTC',
};

export function useClock(): string {
  const [time, setTime] = useState(() => formatUtc(new Date()));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(formatUtc(new Date()));
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return time;
}

function formatUtc(date: Date): string {
  return `${date.toLocaleTimeString('en-GB', UTC_FORMAT)}Z`;
}
