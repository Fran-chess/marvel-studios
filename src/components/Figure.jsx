import { MainFavourite } from './MainFavourite';

export const Figure = ({ character }) => {
  return (
    <figure key={character.id} className="flex flex-col gap-2 relative">
      <div className="absolute text-red-800">
        <MainFavourite character={character} /> 
      </div>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={`Imagen de ${character.name}`}
        className="w-full object-cover object-center h-96 rounded border border-zinc-950 hover:border-l-2 hover:border-y-2"
      />

      <h2 className="text-black font-medium text-3xl text-center border border-zinc-950  bg-zinc-600">
        {character.name}
      </h2>
    </figure>
  );
};
