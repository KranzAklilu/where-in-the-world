import React, { useRef, useState } from "react";

import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";

const Index = ({ setRegion, setSearchValue }) => {
  const [open, setOpen] = useState(false);
  const searchInputRef = useRef(null);
  const handleFilterTrigger = function () {
    setOpen(!open);
  };
  const handleOptionsClick = function (event) {
    setOpen(false);
    const region = event.target.dataset.value;
    region && setRegion(region);
  };
  const handleSearch = function (event) {
    event.preventDefault();
    setSearchValue(searchInputRef.current.value);
  };
  return (
    <section className="search-container">
      <form onSubmit={handleSearch} className="search">
        <SearchIcon className="search-icon" onClick={handleSearch} />
        <input
          ref={searchInputRef}
          className="search-input"
          placeholder="Search for a country..."
        />
      </form>

      <div className="custom-select-wrapper">
        <div className={`custom-select ${open ? "open" : ""}`}>
          <div className="custom-select__trigger" onClick={handleFilterTrigger}>
            <span>Filter by Region</span>
            <div className="arrow"></div>
          </div>
          <div className="custom-options" onClick={handleOptionsClick}>
            <span className="custom-option selected" data-value="Africa">
              africa
            </span>
            <span className="custom-option" data-value="Americas">
              americas
            </span>
            <span className="custom-option" data-value="Europe">
              europe
            </span>
            <span className="custom-option" data-value="Asia">
              asia
            </span>
            <span className="custom-option" data-value="Oceania">
              oceania
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
