import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../axiosInstance/instance";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const response = await instance.get("/movie/popular?api_key=c94b800b13b9b455a5d91c9b54e821a3");
    return response.data.results; // Return the results array directly
});
const moviesSlice = createSlice({
    name: "movies",
    initialState: { movies: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload; // Ensure payload is an array
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default moviesSlice.reducer;