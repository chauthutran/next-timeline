import { useEffect, useState } from 'react';

export default function Loading () {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => (oldProgress < 100 ? oldProgress + 10 : 100));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="spinner-border animate-spin w-8 h-8 border-4 rounded-full"></div>
      <div className="mt-4 text-sm font-semibold">{progress}%</div>
    </div>
  );
};
