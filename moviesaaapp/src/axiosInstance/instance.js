import axios from "axios";

export const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3", // Base URL for TMDb API
    timeout: 5000, // Optional timeout
});