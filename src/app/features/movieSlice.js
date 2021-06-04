import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null,
  },
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const selectRecommend = (state) => state.movies.recommend;
export const selectnewDisney = (state) => state.movies.newDisney;
export const selectOriginal = (state) => state.movies.original;
export const selectTrending = (state) => state.movies.trending;

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;
