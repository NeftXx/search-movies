import React from "react";
import PropTypes from "prop-types";
import { OMDB_URL } from "../settings";
import { Link } from "react-router-dom";

export class Detail extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string,
    }),
  };

  state = { movie: {} };

  async _fetchMovie({ id }) {
    try {
      const res = await fetch(
        `${OMDB_URL}&i=${id}`
      );
      const movie = await res.json();
      this.setState({ movie });
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this._fetchMovie({ id: movieId });
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;

    return (
      <div>
        <Link to="/">
          <button>Volver</button>
        </Link>
        <h1>{Title}</h1>
        <img src={Poster} alt={Title} />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    );
  }
}
