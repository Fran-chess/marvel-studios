import { useState } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export function BurgerButton() {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button className="text-3xl" onClick={handleOpenModal}>
        <RiMenuFill />
      </button>
      <div
        className={`fixed top-0 right-0 h-screen bg-zinc-900 text-white w-full transform transition-transform duration-300 ease-in-out z-50 ${
          modal ? "-translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-0 right-0 text-2xl z-60 p-4"
          onClick={handleOpenModal}
        >
          <RiCloseFill />
        </button>
        <div className="flex flex-col justify-center h-full">
          <ul className="p-4 space-y-4 text-2xl font-medium">
            <li className="text-center">
              <Link to="/new" className="hover:underline">News</Link>
            </li>
            <li className="text-center">
              <Link to="/characters" className="hover:underline">Characters</Link>
            </li>
            <li className="text-center">
              <Link to="/comics" className="hover:underline">Comics</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
