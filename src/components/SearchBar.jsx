import React, { useState, useEffect } from 'react'
import { RiSearchLine, RiStarLine } from "react-icons/ri";
import { fetchCharactersData } from "../api/api"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
    }
    const timeoutId = setTimeout(fetchResults, 500);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div className='relative'>
        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className='border border-zinc-950 text-lg text-black rounded-xl focus:outline-none focus:ring-1 focus:ring-red-800 lg:w-96 ' />
        <button onClick={() => {}} className='absolute right-0 top-0 h-full w-8 flex items-center justify-center cursor-pointer'>
            <RiSearchLine />
        </button>
        {results.map((result, index) => (
          <div key={index}>
            <p>{result.name}</p>
          </div>
        ))}
    </div>
  )
}

export default SearchBar
