import React, { useState } from "react";

import Filter from "../components/Filter/Index";
import CardContainer from "../components/CardContainer/Index";

const Home = ({ history }) => {
  const [region, setRegion] = useState("");
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <Filter setRegion={setRegion} setSearchValue={setSearchValue} />
      <CardContainer
        history={history}
        region={region}
        searchValue={searchValue}
        setRegion={setRegion}
        setSearchValue={setSearchValue}
      />
    </div>
  );
};

export default Home;
