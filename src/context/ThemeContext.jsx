import React, { createContext, useState, useMemo, useEffect } from "react";

// Create ColorModeContext
export const ColorModeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  // Get initial mode from localStorage or default to 'light'
  const storedMode = localStorage.getItem("theme") || "light";
  const [mode, setMode] = useState(storedMode);

  // Toggle color mode and save the preference to localStorage
  const toggleColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode); 
  };

  const value = useMemo(
    () => ({
      mode,
      toggleColorMode,
    }),
    [mode]
  );

  useEffect(() => {
    // If mode is changed, update localStorage
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ThemeContextProvider;
