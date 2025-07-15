import "../css/navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
const NavBar = () => {
  const { isDark, Toggle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const restarHandler = () => {
    window.location.reload();
  };
  const handleMenuBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className="navbar "
        id="navbar"
        style={{
          backgroundColor: isDark ? "#222" : "#fff",
          color: isDark ? "white" : "black",
        }}
      >
        <div className="navbar-brand" onClick={restarHandler}>
          <Link to="/">FrameZone</Link>
          <i className="fa-solid fa-video"></i>
        </div>
        <div className="navbar-links">
          {isDark ? (
            <i className="fa-solid fa-sun toggle" onClick={Toggle}></i>
          ) : (
            <i className="fa-solid fa-moon toggle" onClick={Toggle}></i>
          )}
          <Link to="/Favorite" className="nav-link">
            <div className="inline-link">
              <p style={{ color: isDark ? "white" : "black" }}>FAVORITES</p>
              <i className="fa-solid fa-heart  icon"></i>
            </div>
          </Link>
          <i
            className={`fa-solid fa-bars menu-bar ${isOpen ? "rotate" : ""}`}
            onClick={handleMenuBar}
            style={{ color: isDark ? "" : "black" }}
          ></i>
        </div>
      </nav>

      <div
        className={`sidebar ${isDark ? "dark-mode" : "light-mode"} ${
          isOpen ? "open " : "closed"
        }`}
      >
        <div className="navbar-brand">
          <Link to="/">FrameZone</Link>
          <i className="fa-solid fa-video"></i>
        </div>

        <hr />
        <div className="navbar-links">
          <Link to="/Favorite" className="nav-link">
            <div
              className={`inline-link ${isDark ? "dark-mode" : "light-mode"}`}
            >
              <p>FAVORITES</p>
              <i className="fa-solid fa-heart  icon"></i>
            </div>
          </Link>
          <i className="fa-solid fa-x close" onClick={handleMenuBar}></i>
        </div>
      </div>
    </>
  );
};

export default NavBar;
