import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { fetchMovies } from '../../api'
const initialState = {
  totalResults: 0,
  data: [],
};

export const fetchMoviesAsync = createAsyncThunk(
  'movies/fetch', async (params, { dispatch, rejectWithValue}) => {
    try {
      const res = await fetchMovies(params)
      dispatch(set({
        totalResults: res.totalResults,
        data: res.Search
      }))
    } catch (error) {
      if (error.message !== 'SERVER_ERR') {
        dispatch(set({
          totalResults: 0,
          data: []
        }))
      } else {
        throw rejectWithValue(error)
      }
    }
  }
)

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,

  reducers: {
    set: (state, action) => {
      return action.payload;
    },
    remove: (state, action) => {
      state.data.splice(action.payload, 1)
    }
  },
});

export const { set, remove } = moviesSlice.actions;
export const selectMovies = (state) => state.movies;

export default moviesSlice.reducer;
