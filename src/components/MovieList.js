import React from "react";
import PropTypes from "prop-types";
import { Movie } from "./Movie";

export class MovieList extends React.Component {
  static propTypes = {
    movies: PropTypes.array,
  };

  render() {
    const { movies } = this.props;
    return (
      <div className="columns is-desktop">
        {movies.map((movie) => {
          return (
            <div key={movie.imdbID} className="column">
              <Movie
                id={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
