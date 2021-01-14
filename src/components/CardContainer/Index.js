import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

import Card from "../Card/Index";
import SkeletonCards from "../Card/SkeletonCards";
import Loader from "./Loader";

const Index = ({
  region: selectedRegion,
  history,
  searchValue,
  setRegion,
  setSearchValue,
}) => {
  const { theme } = useContext(ThemeContext);

  const [countryData, setCountryData] = useState([
    {
      name: "",
      flag: "",
      population: 0,
      region: "",
      capital: "",
    },
  ]);
  const [currentCardCount, setCurrentCardCount] = useState(30);
  const [showMore, setShowMore] = useState(false);
  const [showMoreLoader, setShowMoreLoader] = useState(false);
  const [error, setError] = useState("");

  const url = selectedRegion
    ? `https://restcountries.eu/rest/v2/region/${selectedRegion}`
    : "https://restcountries.eu/rest/v2/all";
  const searchUrl = `https://restcountries.eu/rest/v2/name/${searchValue}`;

  const handleShowMore = function () {
    setShowMoreLoader(true);
    setCurrentCardCount((count) => count + 30);
  };

  useEffect(() => {
    setError("");
    if (selectedRegion) setSearchValue("");
    else setRegion("");
    const fetchData = async function () {
      selectedRegion &&
        setCountryData([
          { name: "", population: 0, region: "", capital: "", flag: "" },
        ]);

      const data = await (await fetch(url)).json();
      data.map(({ flag, name, population, region, capital }, i) => {
        if (currentCardCount > i) {
          setCountryData((currentCountry) => {
            const filterRegion = selectedRegion
              ? currentCountry.filter(
                  (country) => country.region === selectedRegion
                )
              : currentCountry;
            const isDisplayed = filterRegion.find(
              (displayedCountry) => displayedCountry.name === name
            );
            return isDisplayed
              ? [...currentCountry]
              : [
                  ...currentCountry,
                  { name, flag, population, region, capital },
                ];
          });
        }
        return "";
      });
    };
    const fetchSearchedData = async function () {
      setCountryData([
        { name: "", population: 0, region: "", capital: "", flag: "" },
      ]);

      try {
        const data = await (await fetch(searchUrl)).json();
        data.map(({ name, flag, region, population, capital }) => {
          setCountryData((currentCountry) => [
            ...currentCountry,
            { name, flag, region, population, capital },
          ]);
          return "done";
        });
      } catch (err) {
        setError("Country Not recognized try Searching again");
        setCountryData([
          { name: "", population: 0, region: "", capital: "", flag: "" },
        ]);
        console.log(err);
      }
    };
    searchValue ? fetchSearchedData() : fetchData();
  }, [
    url,
    currentCardCount,
    searchValue,
    setRegion,
    setSearchValue,
    selectedRegion,
    searchUrl,
  ]);

  return (
    <>
      <div className="card-container">
        {error ? (
          <h2 className="error">{error}</h2>
        ) : countryData[1] || countryData[0].name.length > 0 ? (
          countryData.map(
            ({ name, flag, region, population, capital }, index) => {
              return (
                name && (
                  <>
                    <Card
                      key={index}
                      country={{ name, flag, region, population, capital }}
                      history={history}
                    />
                    {index === currentCardCount &&
                      !showMore &&
                      setShowMore(true)}
                    {index === currentCardCount &&
                      showMoreLoader &&
                      setShowMoreLoader(false)}
                  </>
                )
              );
            }
          )
        ) : (
          <SkeletonCards theme={theme} />
        )}
      </div>
      {showMore && (
        <button className="show-more" onClick={handleShowMore}>
          Show More...
          {showMoreLoader && <Loader />}
        </button>
      )}
    </>
  );
};

export default Index;
