import Skeleton from "@yisheng90/react-loading";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as LeftArrow } from "../../assets/svg/left-arrow.svg";
import { ThemeContext } from "../../context/ThemeProvider";
import img from "../../assets/mobile-design-detail-dark.jpg";

const Index = ({
  countryDetails: {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  },
  setBorder,
}) => {
  const { theme } = useContext(ThemeContext);
  const changeBorderState = function () {
    setBorder(true);
  };
  return (
    <div className="detail-card">
      <Link className="detail-card__back" to="/">
        <LeftArrow className="detail-card__svg" />
        <p>Back</p>
      </Link>
      <div className="detail-card__container">
        {flag ? (
          <img className="detail-card__img" src={flag} alt="countries flag" />
        ) : (
          <div className={`detail-card__skeleton ${theme}`}>
            <Skeleton
              color={theme === "dark" ? "hsl(209, 23%, 22%)" : "#ffffff"}
              height="300px"
            />
          </div>
        )}
        <div className="detail-card__text-container">
          <h2 className="detail-card__header">{name}</h2>
          <div className="detail-card__desc-flex">
            <div className="detail-card__desc-container">
              <p className="detail-card__desc">
                <span>Native Name: </span>
                {nativeName}
              </p>
              <p className="detail-card__desc">
                <span>Population: </span>
                {population}
              </p>
              <p className="detail-card__desc">
                <span>Region: </span>
                {region}
              </p>
              <p className="detail-card__desc">
                <span>Sub Region: </span>
                {subregion}
              </p>
              <p className="detail-card__desc">
                <span>Capital: </span>
                {capital}
              </p>
            </div>
            <div className="detail-card__desc-container">
              <div className="detail-card__desc">
                <span>Top Level Domain: </span>
                {topLevelDomain[1]
                  ? topLevelDomain.map((domain, index) => domain)
                  : "Loading..."}
              </div>
              <div className="detail-card__desc">
                <span>Currencies: </span>
                {currencies[0]
                  ? currencies.map(({ name }) => name).join(", ")
                  : "loading.."}
              </div>
              <div className="detail-card__desc">
                <span>Language: </span>
                {languages[0]
                  ? languages.map(({ name }) => name).join(", ")
                  : "Loading..."}
              </div>
            </div>
          </div>
          <div className="detail-card__border-container">
            <h2 className="detail-card__border">Border Countries:</h2>
            {borders[1] ? (
              borders.map((border, index) => (
                <Link
                  to={border}
                  key={index}
                  className="detail-card__border-btn"
                  onClick={changeBorderState}
                >
                  {border}
                </Link>
              ))
            ) : name === "Loading..." ? (
              <span className="detail-card__no-country">Loading...</span>
            ) : (
              <span className="detail-card__no-country">
                Country {name} has No border Countries
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
