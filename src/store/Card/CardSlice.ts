import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    savedMovies: []
  },
  reducers: {
    saveMovie: (state, action) => {
      state.savedMovies.push(action.payload);
    }
  }
});

export const { saveMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
