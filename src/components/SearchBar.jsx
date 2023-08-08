import React, { useState, useEffect } from "react";
import { RiSearchLine, RiStarLine } from "react-icons/ri";
import { fetchCharactersData } from "../services/characters";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (searchTerm) {
        try {
          const data = await fetchCharactersData(searchTerm);
          setResults(data);
        } catch (e) {
          console.error(e);
        }
      } else {
        setResults([]);
      }
    };
    const timeoutId = setTimeout(fetchResults, 500);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div className="relative w-4/12">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-5 pl-3 h-9 border border-zinc-300 text-lg text-black rounded-2xl focus:outline-none focus:ring-1 focus:ring-zinc-500 w-full"
        placeholder="Search"
      />
      <button className="absolute right-0 top-0 h-full w-14 text-xl flex items-center justify-center cursor-pointer border border-zinc-300 rounded-r-2xl bg-zinc-200">
        <RiSearchLine />
      </button>
      <div className="absolute w-full mt-2 bg-white rounded-xl shadow-xl px-2 ">
        {results.map((result, index) => (
          <div key={index} className="py-0.5">
            <p className="font-semibold text-lg">{result.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
