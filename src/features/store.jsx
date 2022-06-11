import { configureStore } from "@reduxjs/toolkit" 
import moviesReducer from './movies/movie-slice';
export const store = configureStore({
    reducer: {
        movies: moviesReducer,
    }
});