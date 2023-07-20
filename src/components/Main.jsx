import React, { useEffect, useState } from "react";
import { Figure } from "./Figure";
import { fetchCharactersData } from "../api/api";


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
    <div className=" grid lg:grid-cols-5 row-span-2 gap-6 p-10">
    {data.map(character => (
      <article  key={character.id}  className=" bg-zinc-50 dark:bg-zinc-950  ">
        <Figure character={character} />
      </article>
    ))}
  </div>
  );
};
export default Main;
