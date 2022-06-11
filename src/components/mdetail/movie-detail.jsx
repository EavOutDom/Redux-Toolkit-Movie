import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    getAllMovieDetail,
    getMovieDetail,
    removeSelection,
} from "../../features/movies/movie-slice";
import "../mdetail/movie-detail.scss";
const MovieDetail = () => {
    let { imdbId } = useParams();
    const dispatch = useDispatch();
    const movieDetail = useSelector(getAllMovieDetail);
    console.log(movieDetail);
    useEffect(() => {
        dispatch(getMovieDetail(imdbId));
        return () => {
          dispatch(removeSelection());
        }
    }, [dispatch, imdbId]);

    return (
        <div className="movie-section">
            {Object.keys(movieDetail).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <>
                <div className="section-right">
                        <img src={movieDetail.Poster} alt={movieDetail.Title} style={{width: '200px', borderRadius: '15px'}}/>
                    </div>
                    <div className="section-left">
                        <div className="movie-title">{movieDetail.Title}</div>
                        <div className="movie-rating">
                            <span>
                                IMDB Rating <i className="fa fa-star">
                                
                                </i> :{""}
                                {movieDetail.imdbRating}
                            </span>
                            <span>
                                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                                {movieDetail.imdbVotes}
                            </span>
                            <span>
                                Runtime <i className="fa fa-film"></i> :{" "}
                                {movieDetail.Runtime}
                            </span>
                            <span>
                                Year <i className="fa fa-calendar"></i> :{" "}
                                {movieDetail.Year}
                            </span>
                        </div>
                        <div className="movie-plot">{movieDetail.Plot}</div>
                        <div className="movie-info">
                            <div>
                                <span>Director</span>
                                <span>{movieDetail.Director}</span>
                            </div>
                            <div>
                                <span>Stars</span>
                                <span>{movieDetail.Actors}</span>
                            </div>
                            <div>
                                <span>Generes</span>
                                <span>{movieDetail.Genre}</span>
                            </div>
                            <div>
                                <span>Languages</span>
                                <span>{movieDetail.Language}</span>
                            </div>
                            <div>
                                <span>Awards</span>
                                <span>{movieDetail.Awards}</span>
                            </div>
                        </div>
                    </div>
                    
                </>
            )}
        </div>
    );
};

export default MovieDetail;
