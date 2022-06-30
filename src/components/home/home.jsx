import React, { useEffect } from "react";
import MovieListing from "../mlisting/movie-listing";
import { useDispatch, useSelector } from "react-redux";
import { getAllLoading, getMovies, getShows } from "../../features/movies/movie-slice";
import Loading from "../loading/loading";
const Home = () => {
    const loading = useSelector(getAllLoading);
    // console.log(loading);
    const dispatch = useDispatch();
    let moviesTitle = 'Batman';
    let showsTitle = 'Stranger';
    useEffect(() => {
        dispatch(getMovies(moviesTitle));
    }, [dispatch, moviesTitle]);
    useEffect(() => {
        dispatch(getShows(showsTitle));
    }, [dispatch, showsTitle]);

    if (loading) {
        return <div><Loading/></div>;
    }
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;
