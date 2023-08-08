  import React from "react";
 

  export const Figure = ({ character }) => {
    return (
      <figure key={character.id} className="">
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={`Imagen de ${character.name}`}
        className="w-full object-cover object-center h-96 rounded"
      />
      <h2 className="dark:text-white text-3xl text-center pt-4">{character.name}</h2>
    </figure>
    );
  };