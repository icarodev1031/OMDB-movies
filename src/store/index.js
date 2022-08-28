import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './count/countSlice';
import moviesReducer from './movies/movieSlice';
import nominatesReducer from './nominates/nominatesSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: moviesReducer,
    nominates: nominatesReducer,
  },
});

export default store
