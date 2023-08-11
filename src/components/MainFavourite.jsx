import { useFavourites } from '../utils/context/FavouriteContext';
import { RiStarLine, RiStarFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';

export const MainFavourite = ({ character }) => {
  const { favourites, setFavourites } = useFavourites();
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    setIsFavourite(favourites.includes(character.id));
  }, [favourites, character.id]); // Observa los cambios en 'favourites' y 'character.id'

  const handleToggle = () => {
    setIsFavourite(!isFavourite);
    if (isFavourite) {
      setFavourites(favourites.filter((fav) => fav !== character.id));
    } else {
      setFavourites([...favourites, character.id]);
    }
  };

  return (
    <div className="text-2xl cursor-pointer border border-white">
      <button onClick={handleToggle}>
        {isFavourite ? <RiStarFill /> : <RiStarLine />}
      </button>
    </div>
  );
};

