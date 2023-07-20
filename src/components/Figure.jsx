  import React from "react";
 

  export const Figure = ({ character }) => {
    return (
      <figure key={character.id} className="flex flex-col h-4/6">
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt="img"
        className="w-full flex-grow"
      />
      <h2 className="dark:text-white text-3xl font-medium flex-shrink-0">{character.name}</h2>
    </figure>
    );
  };
