import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Key": '3dd9d3eac9msh9a53655ff8b6a7ep119d1bjsn246448268a41',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
