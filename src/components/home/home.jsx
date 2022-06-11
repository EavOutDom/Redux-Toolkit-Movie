import React, { useEffect } from "react";
import MovieListing from "../mlisting/movie-listing";
import { useDispatch } from "react-redux";
import { getMovies, getShows } from "../../features/movies/movie-slice";
const Home = () => {
    const dispatch = useDispatch();
    let moviesTitle = 'Batman';
    let showsTitle = 'Stranger';
    useEffect(() => {
        dispatch(getMovies(moviesTitle));
    }, [dispatch, moviesTitle]);
    useEffect(() => {
        dispatch(getShows(showsTitle));
    }, [dispatch, showsTitle]);
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;
