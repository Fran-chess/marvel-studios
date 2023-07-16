import axios from "axios";
const url = import.meta.env.VITE_URL

console.log(import.meta.env.VITE_URL);

export const fetchData = async () => {
  try {
    const {data} = await axios.get(url)
    const results = data.data.results
    return results;
  } catch (e) {
    console.log("Error fetching data", e);
    throw e;
  }
};
