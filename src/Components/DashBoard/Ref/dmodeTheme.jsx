import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Load saved theme or default to light mode
    return localStorage.getItem("theme") === "dark";
  });

  // Use effect to apply theme changes
  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Update localStorage only when state updates
  }, [darkMode]); // Runs only when darkMode changes

  const toggleTheme = () => {
    setDarkMode((prev) => {
      return !prev;
    }); // Correctly toggles state
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
