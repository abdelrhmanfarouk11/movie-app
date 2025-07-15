import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDark, setDark] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  const Toggle = () => {
    setDark(isDark === true ? false : true);
  };
  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, Toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);
