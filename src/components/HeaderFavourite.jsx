import { useFavourites } from '../utils/context/FavouriteContext';
import { RiStarLine, RiStarFill } from 'react-icons/ri';

const HeaderFavourite = () => {
  const { isActive, setIsActive } = useFavourites();

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="text-2xl cursor-pointer border border-white">
      <button onClick={handleToggle} className="border border-black">
        {isActive ? <RiStarFill /> : <RiStarLine />}
      </button>
    </div>
  );
};

export default HeaderFavourite;
