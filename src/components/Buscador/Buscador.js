import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {getMovies, addMovieFavorite} from '../../actions'
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    return (
      <body>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="containerPage">
      <div className="containerImage">
      </div>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
        <div class="searchbarContainer">
    <button class="searchButton"><i class="fa fa-search"></i></button>
    <input type="text" class="searchInput" onChange={(e) => this.handleChange(e)} placeholder="Type to Search..." />
  </div>
        </form>
        {this.props.movies === undefined ? <h1>No movies found</h1> : 
        <div className="movieSearchContainer">
        <ul className="moviesDisplay">
         {
           this.props.movies.map((movie) => (<li className="searchElement" key={movie.imdbID}> 
            <div className="movieBar">
            <img className="imageMovie" src={`${movie.Poster}`} alt=""/>
            <div className="tittleContainer">
            <Link className="middle" to={`/movie/${movie.imdbID}`}>
            {movie.Title}
            </Link>
            </div>
            {""} 
            <div className="buttonContainer">
            <button className="likeButton" onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID, poster: movie.Poster})} disabled={this.props.moviesFav?.find(m => m.id === movie.imdbID)} ><i class="fa fa-star" aria-hidden="true"></i></button>
            </div>
            </div>
             </li>))
         }
        </ul>
        </div>
        }
      </div>
      </body>

    );
  }
}

const mapStateToProps = (state) => ({movies: state.movies, moviesFav: state.moviesFav})

export default connect(mapStateToProps, {getMovies, addMovieFavorite})(Buscador);
