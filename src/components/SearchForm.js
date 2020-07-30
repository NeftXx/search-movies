import React from "react";
import { OMDB_URL } from "../settings";

export class SearchForm extends React.Component {
  state = {
    inputMovie: "",
  };

  _handleChange = (e) => {
    this.setState({ inputMovie: e.target.value });
  };

  _handleSubmit = async (e) => {
    e.preventDefault();
    const { inputMovie } = this.state;

    if (inputMovie) {
      try {
        const res = await fetch(
          `${OMDB_URL}&s=${inputMovie}`
        );
        const { Search = [] } = await res.json();
        this.props.onResults(inputMovie, Search);
      } catch (error) {
        console.error(error);
      }
    }
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this._handleChange}
              type="text"
              placeholder="Movie to search"
            />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    );
  }
}
