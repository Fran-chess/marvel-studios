import React, { useState, useEffect } from "react";
import { RiToggleFill } from "react-icons/ri";
import { RiToggleLine } from "react-icons/ri";

const ThemeSwitcher = () => {
  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
  return savedTheme ? savedTheme : "dark";
})

  useEffect(() => {
    localStorage.setItem('theme', themeMode);
    if(themeMode === "dark"){
      document.documentElement.classList.add("dark");
    }else {
      document.documentElement.classList.remove("dark");
    }},[themeMode]);

    const handleThemeSwitch = () => {
      setThemeMode(themeMode === "dark" ? "light" : "dark");
    }
  return (
    <button onClick={handleThemeSwitch} className="text-3xl dark:text-white ">
      {themeMode === "dark" ? <RiToggleFill /> : <RiToggleLine />}
    </button>
  );
};

export default ThemeSwitcher;
