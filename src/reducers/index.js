import  { GET_MOVIES, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE, GET_MOVIE_DETAIL, CLEAR_MOVIE_DETAIL } from '../actions/types.js'

const initialState = {
    movies:undefined,
    moviesFav: [],
    movieDetail: undefined
}

export default function reducer(state = initialState, {type, payload}){
switch(type){
    case GET_MOVIES: 
    return {
            ...state,
            movies: payload.Search,
        };
    case ADD_MOVIE_FAVORITE:{
        if(state.moviesFav){
            if(state.moviesFav.find(movie => movie.id === payload.id)) return state
            else return{...state, moviesFav: [...state.moviesFav, payload]}
        } else{
            return{
                ...state,
                moviesFav: [payload],
            }
        };}

        case REMOVE_MOVIE_FAVORITE:{
        if(state.moviesFav){
            return {...state, moviesFav: state.moviesFav.filter(movie => movie.id !== payload)}
        } else{
            return state;
        };}


        case GET_MOVIE_DETAIL:{
            return {...state, movieDetail : payload};
        }

        case CLEAR_MOVIE_DETAIL:{
            return {...state, movieDetail : undefined};
        }
    
    default: return state;
}
}