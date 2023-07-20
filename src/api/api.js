import axios from "axios";

const url = import.meta.env.VITE_URL;
const urlComic = import.meta.env.VITE_URL_COMIC;

export const fetchCharactersData = async (searchTerm = "") => {
  try {
    const queryUrl = searchTerm ? `${url}&nameStartsWith=${searchTerm}` : url;
    const {data} = await axios.get(queryUrl);
    const results = data.data.results;

    if (!searchTerm) {
      let characters = [];
      for(let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * results.length);
        characters.push(results[randomIndex]);
        // Remove the selected character from the results array to avoid duplicates
        results.splice(randomIndex, 1);
      }
      return characters;
    }

    return results;
  } catch (e) {
    console.log("Error fetching data", e);
    throw e;
  }
};


export const fetchComicData = async (characterId) => {
  try {
    const { data } = await axios.get(urlComic.replace("{characterId}", characterId));
    const comics = data.data.results;
    return comics;
  } catch (e) {
    console.log("Error fetching data", e);
    throw e;
  }
};





