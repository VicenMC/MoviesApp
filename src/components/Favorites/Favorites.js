import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite} from '../../actions';
import './Favorites.css';

export class ConnectedList extends Component {
  render() {
    return (
      <div className="containerPage">
        <h2 className="introText">Favorite movies!</h2>
        {this.props.moviesFav === undefined ? <h2 className="introText">If you add some movies to favorites, they will appear here</h2> : 
        <ul className="favMovie">
         {
           this.props.moviesFav.map((movie) => (<li className="listFavorites" key={movie.id}>
            <div className="completeContainer">
            <div className="imageContainer">
            <img className="imageMovie" src={`${movie.poster}`} alt=""/>
            </div>
            <div className="linkContainer">
            <Link className="middle" to={`/movie/${movie.id}`}>
            {movie.title}
            </Link>{""}<button className="buttonDelete" onClick={() => this.props.removeMovieFavorite(movie.id)} >
            Delete from favorites
            </button>
            </div>
            </div>           
            </li>))
         }
        </ul>}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({moviesFav: state.moviesFav})
export default connect(mapStateToProps,{removeMovieFavorite})(ConnectedList);
