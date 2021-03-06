import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from "./MovieSlice";
import movieDetailReducer from './MovieDetailSlice'


const rootReducer = combineReducers({
    movies: movieReducer,
    movieDetail: movieDetailReducer,

});

export default rootReducer;