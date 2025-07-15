import { useMovieContext } from "../contexts/MovieContexts.jsx";
import { useTheme } from "../contexts/ThemeContext.js";
import defultImg from '../assets/defult-image.jpg'
interface Movie {
  id: number;
  movie_Date: string;
  movie_Name: string;
  movie_Img: string;
}

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const { isFavorites, addFavorites, removeFavorites } = useMovieContext();
  const Favorite = isFavorites(movie.id);
  const { movie_Date, movie_Img, movie_Name } = movie;

  const { isDark, Toggle } = useTheme();
  const onFavorite = (e) => {
    console.log(`Favorite clicked on ${movie_Name}`);
    e.preventDefault();
    if (Favorite) {
      removeFavorites(movie.id);
    } else {
      addFavorites(movie);
    }
  };

  return (
    <div
      className="movie-card"
      style={{
        backgroundColor: isDark ? "" : "#fff",
        color: isDark ? "" : "black",
      }}
    >
      <div className="movie-poster">
        <img
          src={movie_Img || "https://via.placeholder.com/300x450?text=No+Image"}
          alt={movie_Name}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defultImg;
          }}
        />
      </div>
      <div className="movie-overlay">
        <button
          className={`favorite-btn ${isFavorites(movie.id) ? "active" : ""}`}
          onClick={onFavorite}
        >
          ❤
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie_Name}</h3>
        <p
          style={{
            color: isDark ? "" : "black",
          }}
        >
          {movie_Date.split("-")[0]}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
