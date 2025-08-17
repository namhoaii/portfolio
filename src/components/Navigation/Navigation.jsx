import React from "react";

import { LanguageSwitcher } from "@components/LanguageSwitcher";
import { ThemeSwitcher } from "@components/ThemeSwitcher";

const Navigation = () => {
  return (
    <div className="items-center space-x-8">
      <LanguageSwitcher></LanguageSwitcher>
      <ThemeSwitcher></ThemeSwitcher>
    </div>
  );
};

export default Navigation;
