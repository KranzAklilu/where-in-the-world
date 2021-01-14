import React from "react";

const Index = ({
  country: { name, flag, population, region, capital },
  history,
}) => {
  const handleCardClick = function () {
    const location = {
      pathname: `/detail/${name}`,
    };
    history.push(location);
  };
  return (
    <>
      <div className="card" onClick={handleCardClick}>
        <img className="card__img" src={flag} alt="" />
        <div className="card__text">
          <h3>{name}</h3>
          <p>
            <span>Population:</span>
            {population}
          </p>
          <p>
            <span>Region:</span> {region}
          </p>
          <p>
            <span>Capital:</span> {capital}
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
