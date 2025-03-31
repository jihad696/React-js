import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Slices/movies";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
});