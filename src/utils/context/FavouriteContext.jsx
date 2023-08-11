import { createContext, useState, useContext } from "react";

const FavouritesContext = createContext();

export const useFavourites = () => {
  return useContext(FavouritesContext);
};

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const [isActive, setIsActive] = useState(false);

  return (
    <FavouritesContext.Provider value={{ favourites, setFavourites, isActive, setIsActive }}>
      {children}
    </FavouritesContext.Provider>
  );
};
