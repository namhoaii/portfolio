import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percent = (scrollTop / windowHeight) * 100;
    setScrollPercent(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none overflow-x-hidden">
      <div
        className={`
          h-1
          bg-gradient-to-r
          from-blue-500 to-purple-500
          dark:from-orange-500 dark:to-pink-600
          transition-all duration-200 ease-out
        `}
        style={{
          width: `${scrollPercent}%`,
          opacity: scrollPercent > 0 ? 1 : 0,
          transition: "width 0.2s ease-out, opacity 0.5s ease-in-out",
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
