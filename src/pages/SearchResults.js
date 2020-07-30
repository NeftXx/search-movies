import React from "react";
import { MovieList } from "../components";

export class SearchResults extends React.Component {
  state = { isLoading: true, inputMovie: "", results: [] };

  _handleSearch = () => {
    if (this.props.location.state) {
      const { inputMovie, results } = this.props.location.state;
      this.setState({ isLoading: false, inputMovie, results });
    }
  };

  _renderResults = () => {
    return this.state.results.length === 0 ? (
      <p>Results not found!</p>
    ) : (
      <MovieList movies={this.state.results} />
    );
  };

  componentDidMount() {
    this._handleSearch();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.state) {
      const prevSearch = prevProps.location.state.inputMovie;
      const newSearch = this.props.location.state.inputMovie;
      if (prevSearch !== newSearch) {
        this._handleSearch();
      }
    } else {
      this._handleSearch();
    }
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          this._renderResults()
        )}
      </>
    );
  }
}
