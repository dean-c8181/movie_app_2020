import React from "react";
import "./components/Movie.css";

function Movie({year, title, summary, poster, genres}){
    return(
        <div className="movies_movie">
            <div className="posterBox"><img src={poster} alt={title} title={title}/></div>
            <div className="movie_data">                
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres_genre">{genre}</li>                        
                    ))}
                </ul>
                <p className="movie_summary">{summary.slice(0,120)}...</p>               
            </div>
        </div>
    );
}

/* Movie.propTypes ={
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}      PropTypes가 import가 안됨. 주석처리  */

export default Movie;