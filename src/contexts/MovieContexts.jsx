import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorites = (movie) => {
    if (!movie?.id) return;
    setFavorites((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const removeFavorites = (id) => {
    setFavorites((prev) => prev.filter((m) => m.id !== id));
  };

  const isFavorites = (id) => favorites.some((m) => m.id === id);

  const removeAllFavorites = () => setFavorites([]);

  const value = {
    favorites,
    addFavorites,
    removeFavorites,
    isFavorites,
    removeAllFavorites,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
