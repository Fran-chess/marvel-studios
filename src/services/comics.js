import axios from "axios";
const urlComic = import.meta.env.VITE_URL_COMIC;

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