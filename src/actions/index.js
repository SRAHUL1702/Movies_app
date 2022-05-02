//actions types
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const ADD_UNFAVOURITE = "ADD_UNFAVOURITE";
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";
//actions creator
export function addMovies(movie) {
  return {
    type: ADD_MOVIE,
    movie,
  };
}
export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie,
  };
}
export function addUnFavourite(movie) {
  return {
    type: ADD_UNFAVOURITE,
    movie,
  };
}
export function setShowFavourite(val) {
  return {
    type: SET_SHOW_FAVOURITE,
    val,
  };
}
