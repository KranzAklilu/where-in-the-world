import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Moon } from "../../assets/svg/moon.svg";
import { ReactComponent as Sun } from "../../assets/svg/sun.svg";
import { ThemeContext } from "../../context/ThemeProvider";

const Index = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const ThemeIcon = theme === "dark" ? Moon : Sun;

  return (
    <header className="header">
      <Link className="logo" to="/">
        Where in the world?
      </Link>
      <button className="header__button" onClick={toggleTheme}>
        <ThemeIcon className="theme-icon" />
        <p>{theme === "dark" ? "Dark Mode" : "Light Mode"}</p>
      </button>
    </header>
  );
};

export default Index;
