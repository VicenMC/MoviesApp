import {ADD_MOVIE_FAVORITE, GET_MOVIES, REMOVE_MOVIE_FAVORITE, GET_MOVIE_DETAIL, CLEAR_MOVIE_DETAIL,} from './types'


export function addMovieFavorite(payload) {
  return { type: ADD_MOVIE_FAVORITE, payload };
}

export function removeMovieFavorite(payload) {
  return { type: REMOVE_MOVIE_FAVORITE, payload };
}

export function getMovies(titulo) {
  return function(dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=4e99304a&s=" + titulo)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_MOVIES, payload: json });
      });
  };
}

export function getMovieDetail(id) {
  if(id)
  return function(dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=4e99304a&i=" + id)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_MOVIE_DETAIL, payload: json });
      });
  };
  return {type: CLEAR_MOVIE_DETAIL}
}


