import React, { useEffect, useState } from "react";

const TIMEZONES = [
  { label: "PST", offset: -8 },
  { label: "MST", offset: -7 },
  { label: "CST", offset: -6 },
  { label: "EST", offset: -5 },
];

const getTimeInZone = (offset) => {
  const utc = new Date();
  const local = new Date(
    utc.getTime() + (offset * 60 + utc.getTimezoneOffset()) * 60000
  );
  return local.toLocaleString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};

const HeaderBar = ({ sourceId, userName = "Rick Wood" }) => {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const t = {};
      TIMEZONES.forEach(({ label, offset }) => {
        t[label] = getTimeInZone(offset);
      });
      setTimes(t);
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-between items-center px-6 py-2 bg-gray-50 border-b border-gray-200 text-[13px]">
      <div className="flex items-center h-[63px]">
        {TIMEZONES.map((tz) => (
          <span key={tz.label}>
            <span className="font-bold">{tz.label}:</span> {times[tz.label]}
          </span>
        ))}
        <span className="ml-4">
          <span className="font-bold">SourceId:</span> {sourceId}
          <button
            className="ml-2 text-gray-500 hover:text-blue-600"
            title="Copy"
          >
            <svg
              className="w-4 h-4 inline"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect
                x="9"
                y="9"
                width="13"
                height="13"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <rect
                x="3"
                y="3"
                width="13"
                height="13"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <img
          src="https://ui-avatars.com/api/?name=Rick+Wood"
          alt="User"
          className="h-6 w-6 rounded-full"
        />
        <span>{userName}</span>
      </div>
    </div>
  );
};

export default HeaderBar;
