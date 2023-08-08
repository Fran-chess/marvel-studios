import React, { useEffect, useState } from "react";
import { Figure } from "./Figure";
import { fetchCharactersData } from "../services/characters";


const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetchCharactersData();
      setData(results);
    };
    fetchData();
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-10">
    {data.map(character => (
      <article  key={character.id}  className="dark:bg-zinc-950 transform transition-transform duration-500 hover:scale-110 overflow-hidden rounded-md shadow-lg hover:shadow-2xl p-3 bg-zinc-600 cursor-pointer relative">
        <Figure character={character} />
      </article>
    ))}
  </div>
  );
};
export default Main;
