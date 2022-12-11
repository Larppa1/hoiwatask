import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
  peopleList: [],
};

export const fetchPeopleList = createAsyncThunk(
  'peopleList/fetchPeopleList',
  async () => {
    try {
      const res = await fetch('https://swapi.dev/api/people');
      const data = await res.json();
      return data.results;
    } catch (e) {
      console.warn(e);
    }
  },
);

const peopleListSlice = createSlice({
  name: 'peopleList',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.peopleList[action.payload].favorite = true;
    },
    removeFavorite: (state, action) => {
      state.peopleList[action.payload].favorite = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPeopleList.fulfilled, (state, action) => {
      state.peopleList = action.payload.map((res, index) => ({
        id: index,
        name: res.name,
        height: res.height,
        mass: res.mass,
        hairColor: res.hair_color,
        skinColor: res.skin_color,
        eyeColor: res.eye_color,
        birthYear: res.birth_year,
        gender: res.gender,
        favorite: false,
      }));
    });
  },
});

export const getPeopleList = state => state.peopleList.peopleList;

export const {addFavorite, removeFavorite} = peopleListSlice.actions;

export default peopleListSlice.reducer;
