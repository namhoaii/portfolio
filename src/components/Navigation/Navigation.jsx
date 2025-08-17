import React from "react";

import { LanguageSwitcher } from "@components/LanguageSwitcher";

const Navigation = () => {
  return (
    <div className="items-center space-x-8">
      <LanguageSwitcher></LanguageSwitcher>
    </div>
  );
};

export default Navigation;
