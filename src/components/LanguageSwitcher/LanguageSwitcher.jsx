import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import UsaIcon from "@assets/icons/usa.png";
import VietNamIcon from "@assets/icons/vietnam.png";

// Map ngôn ngữ sang icon
const languageMap = {
  en: UsaIcon,
  vi: VietNamIcon,
};

// Danh sách các ngôn ngữ hỗ trợ
const languages = ["en", "vi"];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Khởi tạo index từ i18n.language (đã được detect sẵn)
  const [langIndex, setLangIndex] = useState(() => {
    const detectedLang = i18n.language;
    const index = languages.indexOf(detectedLang);
    return index >= 0 ? index : 0;
  });

  // Đồng bộ langIndex nếu ngôn ngữ thay đổi từ nơi khác
  useEffect(() => {
    const currentLang = i18n.language;
    const newIndex = languages.indexOf(currentLang);
    if (newIndex !== langIndex) {
      setLangIndex(newIndex);
    }
  }, [i18n.language]);

  // Khi nhấn để đổi ngôn ngữ
  const nextLanguage = () => {
    const newIndex = (langIndex + 1) % languages.length;
    const newLang = languages[newIndex];

    setLangIndex(newIndex);
    i18n.changeLanguage(newLang); // Tự động lưu vào localStorage (nhờ i18next-browser-languagedetector)
  };

  const currentLang = languages[langIndex];
  const currentIcon = languageMap[currentLang];

  const variants = {
    enter: { y: "100%", opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  };

  return (
    <div
      className="inline-block h-7 w-7 rounded-full cursor-pointer overflow-hidden relative"
      onClick={nextLanguage}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={currentLang}
          src={currentIcon}
          alt={currentLang}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
