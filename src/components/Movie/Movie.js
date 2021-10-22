import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';
var newArray = "";
class Movie extends React.Component {

    componentDidMount(){
        this.props.getMovieDetail(this.props.id);
    }
componentWillUnmount(){
    this.props.getMovieDetail();
}
    render() {
        return (
            <div className="containerPage">
            <div className="movie-detail">
                {this.props.movieDetail && <div className="generalContainer">
                 <div className="imageContainer">
                <img className="moviePoster" src = {this.props.movieDetail.Poster} alt=""/>
                </div>
                <div className="infoContainer">
                <strong className="textTitle"> </strong>
                <span className="textTitle">{this.props.movieDetail.Title}</span>
                <div className="asideInfo">
                <strong className="textDirector">Director: </strong>
                <span className="textDirector">{this.props.movieDetail.Director}</span>
                <br />
                <strong className="textPlot">Plot: </strong>
                <span className="textPlot">{this.props.movieDetail.Plot}</span>
                <br/>
                <strong className="textRated">Rated: </strong>
                <span className="textRated">{this.props.movieDetail.Rated}</span>
                <br/>
                <strong className="textActors">Actors: </strong>
                <span className="textActors">{this.props.movieDetail.Actors}</span>
                <br/>
                <strong className="textLanguage">Language: </strong>
                <span className="textLanguage">{this.props.movieDetail.Language}</span>
                <br/>
                <strong className="textAwards">Awards: </strong>
                <span className="textAwards">{this.props.movieDetail.Awards}</span>
                <br/>
                <div className="ratings" >
                <div className="ratingsGeneral">

                {
                    
                    this.props.movieDetail.Ratings && this.props.movieDetail.Ratings.map((e) => {
                        if(e.Source === 'Internet Movie Database'){ newArray = "https://upload.wikimedia.org/wikipedia/commons/6/6a/New-imdb-logo.png"}
                        else if(e.Source === 'Rotten Tomatoes' && e.Value >= '80%'){newArray = "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/31/1501854760-certified-fresh.png?resize=480:*"}
                        else if(e.Source === 'Rotten Tomatoes' && e.Value >= '50%'){newArray = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/757px-Rotten_Tomatoes.svg.png"}
                            else if(e.Source === 'Rotten Tomatoes' && e.Value <= '50%'){newArray = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Rotten_Tomatoes_rotten.svg/1061px-Rotten_Tomatoes_rotten.svg.png"}
                        else if(e.Source === 'Metacritic'){newArray = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Metacritic_logo_original.svg/1200px-Metacritic_logo_original.svg.png"}
                        return(
                            <div className="ratingsContainer">
                            <strong className="ratingInfo">{e.Source}</strong>
                            <br/>
                            <p className="ratingInfo">{e.Value}</p>
                            <img className="logoImageIM" src={newArray} alt=""/>
                            </div>
                            )
                    })
                }
                </div>
                <div class="logosContainer">
                </div>
                </div>
                </div>
                </div>
                </div>}
            </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({movieDetail: state.movieDetail,})


export default connect(mapStateToProps,{getMovieDetail})(Movie);