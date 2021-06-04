import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import movieReducer from "./features/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
