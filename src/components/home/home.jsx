import React, { useEffect, useState } from "react";
import MovieListing from "../mlisting/movie-listing";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllLoading,
    getMovies,
    getShows,
} from "../../features/movies/movie-slice";
import Loading from "../loading/loading";
const Home = () => {
    const loading = useSelector(getAllLoading);
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    let moviesTitle = "Batman";
    let showsTitle = "Stranger";
    useEffect(() => {
        dispatch(getMovies(moviesTitle));
    }, [dispatch, moviesTitle]);
    useEffect(() => {
        dispatch(getShows(showsTitle));
    }, [dispatch, showsTitle]);

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }
    return (
        <div>
            <div className="search-bar">
                <form
                    onSubmit={(data) => {
                        data.preventDefault();
                        if (input === "")
                            return alert(
                                "please enter name movies or shows to search"
                            );
                        dispatch(getMovies(input));
                        dispatch(getShows(input));
                    }}
                >
                    <input
                        type={"text"}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button>Search</button>
                </form>
            </div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;
