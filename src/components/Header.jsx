import ThemeSwitcher from "../utils/context/ThemeSwitcher";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Favourite from "./Favourite";
import { BurgerButton } from "./BurgerButton";

const Header = () => {
  return (
    <nav className="flex flex-col gap-4 w-full mt-2 ">
      <div className="border-b border-zinc-100 flex justify-between items-center px-4 pb-3">
      <Logo />
      <div className="flex justify-evenly items-center border-l border-zinc-50 pl-3 space-x-3 text-white">
        <Favourite />
        <ThemeSwitcher />
       <BurgerButton />
      </div>
      </div>
      <SearchBar />
    </nav>
  );
};

export default Header;
