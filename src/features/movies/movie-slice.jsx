import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { APIKey } from "../../common/api/movie-api-key";

//use your own api key on https://www.omdbapi.com/

export const getMovies = createAsyncThunk(
    "movies/getMovies",
    async (moivesTitle) => {
        try {
            const response = await axios(
                `https://www.omdbapi.com/?apiKey=${APIKey}&s=${moivesTitle}&type=movie`
            );
            return response.data;
        } catch (error) {
            return console.log(error);
        }
        // const response = await movieApi
        //     .get(`?apiKey=${APIKey}&s=${title}&type=movie`)
        //     .catch((error) => console.log(error));
        // return response.data;
    }
);

export const getShows = createAsyncThunk(
    "shows/getShows",
    async (showsTitle) => {
        try {
            const response = await axios(
                `https://www.omdbapi.com/?apiKey=${APIKey}&s=${showsTitle}&type=series`
            );
            return response.data;
        } catch (error) {
            return console.log(error);
        }
    }
);

export const getMovieDetail = createAsyncThunk(
    "movieDetail/getMovieDetail",
    async (imdbID) => {
        try {
            const response = await axios(
                `https://www.omdbapi.com/?apiKey=${APIKey}&i=${imdbID}&plot=full`
            );
            return response.data;
        } catch (error) {
            return console.log(error);
        }
    }
);

const initialState = {
    movies: [],
    shows: [],
    movieDetail: {},
    loading: false,
};
export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload;
        },
        removeSelection: (state, action) => {
            state.movieDetail = {};
        },
    },
    extraReducers: {
        [getMovies.pending]: (state, action) => {
            state.loading = true;
            console.log("pending");
        },
        [getMovies.fulfilled]: (state, action) => {
            console.log("fetch successful");
            state.loading = false;
            state.movies = action.payload;
            // return { ...state, movies: action.payload };
        },
        [getMovies.rejected]: (state, action) => {
            state.loading = false;
            console.log("rejected");
        },
        [getShows.pending]: (state, action) => {
            state.loading = true;
            console.log("pending");
        },
        [getShows.fulfilled]: (state, action) => {
            console.log("fetch successful");
            state.loading = false;
            state.shows = action.payload;
            // return { ...state, shows: action.payload };
        },
        [getShows.rejected]: (state, action) => {
            state.loading = false;
            console.log("rejected");
        },
        [getMovieDetail.pending]: (state, action) => {
            state.loading = true;
            console.log("pending");
        },
        [getMovieDetail.fulfilled]: (state, action) => {
            state.loading = false;
            console.log("fetch successful");
            state.movieDetail = action.payload;
            // return { ...state, movieDetail: action.payload };
        },
        [getMovieDetail.rejected]: (state, action) => {
            state.loading = false;
            console.log("rejected");
        },
    },
});

export const { addMovies, removeSelection } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllMovieDetail = (state) => state.movies.movieDetail;
export const getAllLoading = (state) => state.movies.loading;
export default movieSlice.reducer;
