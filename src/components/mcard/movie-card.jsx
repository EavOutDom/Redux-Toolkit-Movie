import React from "react";
import { Link } from "react-router-dom";
import "../mcard/movie-card.scss";
const MovieCard = ({ title, poster, year, imdbID }) => {
    return (
        <div className="card-item">
            <div className="card-innner">
                <Link to={`movie/${imdbID}`}>
                    <div className="card-top">
                        <img src={poster} alt={title} />
                    </div>
                    <div className="card-bottom">
                        <div className="card-info">
                            <h5>{title}</h5>
                            <p>{year}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;
