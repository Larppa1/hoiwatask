import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favoritesList: [],
};

const favoritesListSlice = createSlice({
  name: 'favoritesList',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favoritesList.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favoritesList = state.favoritesList.filter(
        item => !item.name.includes(action.payload),
      );
    },
  },
});

export const getFavoritesList = state => state.favoritesList.favoritesList;

export const {addToFavorites, removeFromFavorites} = favoritesListSlice.actions;

export default favoritesListSlice.reducer;
