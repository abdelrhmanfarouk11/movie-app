const API = "09d0be1118c322e8414e6d51d3bd8e1b";
const URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${URL}/movie/popular?api_key=${API}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${URL}/search/movie?api_key=${API}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};
