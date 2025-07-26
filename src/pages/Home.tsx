import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/API";
import { useTheme } from "../contexts/ThemeContext";
interface TMDBMovie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
}

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<TMDBMovie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const { isDark, Toggle } = useTheme();
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.log(error);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    try {
      const results = await searchMovies(searchQuery);
      setMovies(results);
    } catch (error) {
      console.error(error);
      setError("Failed to search movies");
    } finally {
      setSearchQuery(searchQuery);
    }
  };

  return (
    <div className={`Home ${isDark ? "dark-mode" : "light-mode"}`}>
      <div className="hero-section"></div>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="search"
          placeholder="Search for movie..."
          className={`search-input ${isDark ? "dark-mode" : "light-mode"}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ backgroundColor: isDark ? "" : "white" }}
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading ? (
        <div className="loading"> loading....</div>
      ) : (
        <div className="content">
          <h2>popular movies this year</h2>
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={{
                  id: movie.id,
                  movie_Name: movie.title,
                  movie_Img: movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/300x450?text=No+Image",
                  movie_Date: movie.release_date,
                }}
              />
            ))}
          </div>
        </div>
      )}
      <footer style={{ backgroundColor: isDark ? "black" : "white" }}>
        <div className="rights">
          <h3>
            watch all your favorite movies with <span><a href="#">framezone</a></span> all in
            one place
            <i className="fa fa-flag"></i>
          </h3>
          <p>
            all rights reseved for{" "}
            <a
              href="mailto:abdelrhmanfaroukaa@gmail.com?subject=Hello%20Farouk&body=Hi%20Farouk,%0D%0A%0D%0AI%20want%20to%20contact%20you%20regarding..."
              target="_blank"
              rel="noopener noreferrer"
            >
              abdelrhmanfaroukaa@gmail.com
            </a>
            in 2025
          </p>
        </div>
        <div className="contact">
          <a
            href="https://www.facebook.com/AbdelrhmanFarouka"
            style={{ color: isDark ? "white" : "black" }}
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/abdelrhman-farouk-98b708271/"
            style={{ color: isDark ? "white" : "black" }}
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/abdelrhmanfarouk11"
            style={{ color: isDark ? "white" : "black" }}
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
