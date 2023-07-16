import React from "react";
import ThemeSwitcher from "../utils/context/ThemeSwitcher";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Favourite from "./Favourite";

const Header = () => {
  return (
    <nav className="border-b dark:border-zinc-600 border-zinc-800  flex justify-between items-center bg-zinc-50 dark:bg-zinc-950 lg:mb-4 lg:p-3">
      <Logo />
      <SearchBar />
      <div className="border-l dark:border-zinc-600 border-zinc-800 flex items-center space-x-5 pl-3">
      <Favourite />
      <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Header;
