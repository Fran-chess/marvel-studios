import axios from "axios";

const url = import.meta.env.VITE_URL;


export const fetchCharactersData = async (searchTerm = "") => {
  try {
    const queryUrl = searchTerm ? `${url}&nameStartsWith=${searchTerm}` : url;
    const {data} = await axios.get(queryUrl);
    let results = data.data.results;

    results = results.filter(character => {
      return !character.thumbnail.path.endsWith('/image_not_available');
    });

    if (!searchTerm) {
      let characters = [];
      for(let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * results.length);
        characters.push(results[randomIndex]);
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








