import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { SearchForm, NavBar } from "./components";
import { Detail, Home, NotFound, SearchResults } from "./pages";

import "bulma/css/bulma.css";
import "./App.css";

class App extends React.Component {
  _handleResults = (inputMovie, results) => {
    this.props.history.push({
      pathname: "/results",
      state: { inputMovie, results },
    });
  };

  render() {
    return (
      <>
        <NavBar>
          <div className="navbar-end">
            <div className="navbar-item">
              <SearchForm onResults={this._handleResults} />
            </div>
          </div>
        </NavBar>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/results" component={SearchResults} />
            <Route path="/detail/:movieId" component={Detail} />
            <Route component={NotFound} />
          </Switch>          
        </div>
      </>
    );
  }
}

export default withRouter(App);
