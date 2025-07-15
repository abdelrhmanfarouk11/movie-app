import "./css/app.css";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContexts.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.js";
function App() {
  return (
    <MovieProvider>
      <ThemeProvider>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Favorite" element={<Favorite />} />
          </Routes>
        </div>
      </ThemeProvider>
    </MovieProvider>
  );
}

export default App;
