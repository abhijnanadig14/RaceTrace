import { useEffect, useState } from "react";

type Session = {
  session_key: number;
  session_name: string;
  date_start: string;
  date_end: string;
  meeting_key: number;
};

type NextSessionProps = {
  sessions: Session[];
};

export default function NextSession({ sessions }: NextSessionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (sessions.length === 0) return;

    const sessionStart = new Date(sessions[0].date_start).getTime();

    const updateCountdown = () => {
      const difference = sessionStart - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

      const minutes = Math.floor((difference / (1000 * 60)) % 60);

      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [sessions]);

  if (sessions.length === 0) {
    return (
      <div className="rounded-xl bg-gradient-to-r from-[#8B0000] via-[#D90000] to-[#FF1801] px-8 py-7 text-white">
        Loading...
      </div>
    );
  }

  const nextSession = sessions[0];

  return (
    <div className="rounded-xl bg-gradient-to-r from-[#8B0000] via-[#D90000] to-[#FF1801] px-8 py-7 text-white">
      {/* Session heading */}
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-lg font-semibold">{nextSession.session_name}</h2>
      </div>

      {/* Countdown */}
      <div className="flex gap-5">
        <div>
          <p className="text-3xl font-bold leading-none">
            {String(timeLeft.days).padStart(2, "0")}
          </p>
          <p className="mt-2 text-sm">DAYS</p>
        </div>

        <div>
          <p className="text-3xl font-bold leading-none">
            {String(timeLeft.hours).padStart(2, "0")}
          </p>
          <p className="mt-2 text-sm">HRS</p>
        </div>

        <div>
          <p className="text-3xl font-bold leading-none">
            {String(timeLeft.minutes).padStart(2, "0")}
          </p>
          <p className="mt-2 text-sm">MINS</p>
        </div>

        <div>
          <p className="text-3xl font-bold leading-none">
            {String(timeLeft.seconds).padStart(2, "0")}
          </p>
          <p className="mt-2 text-sm">SEC</p>
        </div>
      </div>
    </div>
  );
}
