import React, { useContext } from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header/Index";
import { ThemeContext } from "./context/ThemeProvider";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="App" className={`theme-${theme}`}>
      <div className="app-wrapper">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail" exact component={Detail} />
          <Route path="/detail/:country" exact component={Detail} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
