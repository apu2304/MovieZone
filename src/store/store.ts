import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './Card/CardSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer
  }
});

export default store