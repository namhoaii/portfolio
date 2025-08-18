import React, { useEffect, useState, useRef } from "react";

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
      rounded-r-xl
      transition-all duration-200 ease-out
      opacity-0
      bg-gradient-to-r
      from-teal-400 to-cyan-500
      dark:from-teal-300 dark:to-cyan-400
      radius
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
