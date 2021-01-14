import React, { useState, useEffect, createContext } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => "",
});

function ThemeProvider(props) {
  const localTheme = JSON.parse(localStorage.getItem("theme"));

  const [theme, setTheme] = useState(localTheme || "dark");

  const toggleTheme = function () {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }} {...props} />;
}
export { ThemeContext, ThemeProvider };
