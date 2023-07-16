import React from 'react'
import { RiSearchLine, RiStarLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className='relative'>
        <input type="text"  className='border border-zinc-950 text-lg text-black rounded-xl focus:outline-none focus:ring-1 focus:ring-red-800 lg:w-96 ' />
        <button className='absolute right-0 top-0 h-full w-8 flex items-center justify-center cursor-pointer'>
            <RiSearchLine />
        </button>
    </div>
  )
}

export default SearchBar