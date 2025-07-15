import "../css/favorite.css";
import { useMovieContext } from "../contexts/MovieContexts.jsx";
import MovieCard from "../components/MovieCard";
import { useTheme } from "../contexts/ThemeContext.js";

const Favorite = () => {
  const { favorites, removeAllFavorites } = useMovieContext();
  const { isDark } = useTheme();
  if (favorites && favorites.length > 0) {
    return (
      <div
        className="favorites"
        style={{
          backgroundColor: isDark ? "" : "#E4EAF4",
          color: isDark ? "" : "black",
        }}
      >
        <div className="title">
          <h2>your favorite movies are here!</h2>
          <i
            className="fa-solid fa-trash trash"
            onClick={removeAllFavorites}
          ></i>
        </div>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={{
                id: movie.id,
                movie_Name: movie.movie_Name,
                movie_Img: movie.movie_Img,
                movie_Date: movie.movie_Date,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`container ${isDark ? "dark-mode" : "light-mode"}`}>
      <div
        className="favorites-empty"
        style={{ backgroundColor: isDark ? "" : "white" }}
      >
        <h2>No favorite movies yet</h2>
        <p style={{ color: isDark ? "" : "black" }}>
          Start adding movies to your favorites and they will appear here!
        </p>
      </div>
    </div>
  );
};

export default Favorite;
