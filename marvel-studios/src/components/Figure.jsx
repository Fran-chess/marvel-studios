import React, { useEffect, useState } from "react";
import { fetchData } from "../api/api";
export const Figure = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCharacterData();
  }, []);

  const fetchCharacterData = async () => {
    try {
      const apiData = await fetchData();
      setIsLoading(true);
      setData(apiData);
      console.log(apiData);
    } catch (err) {
      console.log("Error fetching data", err);
      setIsLoading(false);
    }
  };

  if (!isLoading) {
    return <div className="dark:text-white">Loading...</div>;
  }

  return (
    <>
      {data && data.map((character) => (
        <figure key={character.id} className="border-2 border-red-500">
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt="img"
            className=""
          />
          <h2 className="dark:text-white text-3xl font-medium mt-3 ml-5 mb-2">{character.name}</h2>
        </figure>
      ))}
    </>
  );
};
