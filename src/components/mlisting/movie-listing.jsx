import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movie-slice";
import MovieCard from "../mcard/movie-card";
import "../mlisting/movie-listing.scss";
const MovieListing = () => {
    // const { movies, shows } = useSelector((state) => {return (state.movies, state.shows)});
    // console.log(movies);
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);

    let renderMovie,
        renderShows = "";
    renderMovie =
        movies.Response === "True" ? (
            movies.Search.map((data, index) => {
                return (
                    <MovieCard
                        key={index}
                        title={data.Title}
                        poster={data.Poster}
                        year={data.Year}
                        imdbID={data.imdbID}
                    />
                );
            })
        ) : (
            <div>
                <h3 className="movies-error">{movies.Error}</h3>
            </div>
        );
    renderShows =
        shows.Response === "True" ? (
            shows.Search.map((data, index) => {
                return (
                    <MovieCard
                        key={index}
                        title={data.Title}
                        poster={data.Poster}
                        year={data.Year}
                        imdbID={data.imdbID}
                    />
                );
            })
        ) : (
            <div>
                <h3 className="movies-error">{shows.Error}</h3>
            </div>
        );
    return (
        <div className="movie-wrapper">
            <>
                <div className="movie-list">
                    <h2>Movies</h2>
                    <div className="movie-container">{renderMovie}</div>
                </div>
                <div className="shows-list">
                    <h2>TV Shows</h2>
                    <div className="movie-container">{renderShows}</div>
                </div>
            </>
        </div>
    );
};

export default MovieListing;
