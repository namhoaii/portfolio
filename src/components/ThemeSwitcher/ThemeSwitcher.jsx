import { useTheme } from "@components/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  // Icon chuyển động
  const variants = {
    enter: { y: "100%", opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  };

  // Toggle logic
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = theme === "dark";

  return (
    <div
      onClick={toggleTheme}
      className="inline-flex items-center justify-center h-8 w-8 rounded-full cursor-pointer overflow-hidden bg-gray-200 dark:bg-gray-800"
    >
      <AnimatePresence initial={false} mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute"
          >
            <Moon className="h-5 w-5 text-orange-400" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute"
          >
            <Sun className="h-5 w-5 text-gray-800" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
