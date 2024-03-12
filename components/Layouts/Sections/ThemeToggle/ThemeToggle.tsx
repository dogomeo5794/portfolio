"use client";

import DarkThemeSvgIcon from "@/icons/DarkThemeSvgIcon";
import LightThemeSvgIcon from "@/icons/LightThemeSvgIcon";
import { ThemeContext } from "@/theme/ThemeContext";
import React, { useContext, useState } from "react";

const ThemToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme(theme === "dark" ? "" : "dark");
  };

  return (
    <button
      className="p-2 rounded-md text-light-gray-primary dark:text-dark-gray-primary hover:bg-[#0001] dark:hover:bg-[#fff1] hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors"
      id="theme-toggle"
      onClick={handleToggleTheme}
    >
      {theme === "dark" ? (
        <DarkThemeSvgIcon className="flex" />
      ) : (
        <LightThemeSvgIcon className="flex" />
      )}
    </button>
  );
};

export default ThemToggle;
