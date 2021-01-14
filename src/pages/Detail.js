import React, { useEffect, useState } from "react";

import DetailCard from "../components/DetailCard/Index";

const Detail = ({ match }) => {
  const [countryDetails, setCountryDetails] = useState({
    name: "Loading...",
    flag: "",
    nativeName: "Loading...",
    population: "Loading...",
    region: "Loading...",
    subregion: "Loading...",
    capital: "Loading...",
    topLevelDomain: [],
    currencies: [],
    languages: [],
    borders: [],
  });
  const [border, setBorder] = useState(false);

  const countryName = match.params.country;
  const url = border
    ? `https://restcountries.eu/rest/v2/alpha/${countryName}`
    : `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`;

  useEffect(() => {
    const fetchData = async function () {
      const data = await (await fetch(url)).json();
      const {
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
      } = Array.isArray(data) ? data[0] : data;
      setCountryDetails({
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
      });
    };
    fetchData();
  }, [url]);

  return <DetailCard setBorder={setBorder} countryDetails={countryDetails} />;
};

export default Detail;
