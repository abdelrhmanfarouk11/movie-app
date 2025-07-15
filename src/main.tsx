import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContexts.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";

import App from "./App.tsx";
import "./css/index.css";
import "./css/app.css";
import "./css/movie-card.css";
import "./css/navbar.css";
import "./css/home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MovieProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </MovieProvider>
  </StrictMode>
);
