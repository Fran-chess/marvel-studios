import { useEffect, useState } from "react";
import { Figure } from "./Figure";
import { fetchCharactersData } from "../services/characters";
import { useFavourites } from "../utils/context/FavouriteContext";

const Main = () => {
  const [data, setData] = useState([]);
  const { favourites, isActive } = useFavourites();

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetchCharactersData();
      setData(results);
    };
    fetchData();
  }, []);

  const charactersToShow = isActive ? data.filter(character => favourites.includes(character.id)) : data;

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-10">
      {charactersToShow.map(character => (
        <article key={character.id} className="dark:bg-zinc-950 transform transition-transform duration-500 hover:scale-110 overflow-hidden rounded-md shadow-lg hover:shadow-2xl p-2 bg-zinc-200 cursor-pointer relative">
          <Figure character={character} />
        </article>
      ))}
    </ul>
  );
};

export default Main;
