import { Component } from "react/cjs/react.production.min";
import { addFavourite, addUnFavourite } from "../actions";

class MoviesCart extends Component {
  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourite(movie));
  };
  handleUnFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addUnFavourite(movie));
  };
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>

        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {this.props.isFavourite == true ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavouriteClick}
              >
                UnFavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default MoviesCart;
