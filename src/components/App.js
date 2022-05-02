import Navbar from "./Navbar";
import MovieCart from "./MovieCart";
import React from "react";
import { data } from "../data";
import { addMovies, setShowFavourite } from "../actions";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
  }
  isFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const idx = movies.favList.indexOf(movie);
    if (idx !== -1) return true;
    return false;
  };
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourite(val));
  };
  render() {
    const { movies } = this.props.store.getState();
    const { list, favList, showFavourites } = movies;
    const displayMovies = showFavourites ? favList : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCart
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isFavourite(movie)}
              />
            ))}
            {showFavourites && favList.length == 0 ? (
              <div style={{ padding: 10, color: "red" }}>No fav list yet</div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
