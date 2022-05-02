import { combineReducers } from "redux";

import {
  ADD_MOVIE,
  ADD_FAVOURITE,
  ADD_UNFAVOURITE,
  SET_SHOW_FAVOURITE,
} from "../actions";
const initialState = {
  list: [],
  favList: [],
  showFavourites: false,
};
export function movies(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        list: action.movie,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favList: [action.movie, ...state.favList],
      };
    case ADD_UNFAVOURITE:
      const filteredArray = state.favList.filter(
        (movie) => movie.Title != action.movie.Title
      );
      return {
        ...state,
        favList: filteredArray,
      };
    case SET_SHOW_FAVOURITE:
      return {
        ...state,
        showFavourites: action.val,
      };
    default:
      return state;
  }
}

const initialSearchState = {
  result: {},
};
export function search(state = initialSearchState, action) {
  return state;
}
const initialRootState = {
  movies: initialState,
  search: initialSearchState,
};
// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }
export default combineReducers({
  movies,
  search,
});
