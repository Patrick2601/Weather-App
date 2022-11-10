import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const Slice = createSlice({
  name: 'slice',
  initialState: {
    value: initialState,
    favData: initialState,
    allData: initialState,
    search: [],
  },
  reducers: {
    addfavourite: (state, action) => {
      const city = state.allData.map(value => value.city);
      if (city.includes(action.payload.city)) {
        alert('City Already Exist');
      } else {
        state.value.push(action.payload);
        state.favData.push(action.payload);
        state.allData.push(action.payload);
      }
    },
    addSearchCity: (state, action) => {
      state.search.push(action.payload);
      state.allData.push(action.payload);
    },
    getSearchData: (state, action) => {
      state.search = state.allData.filter(item => item.search === true);
    },

    filterSearch: (state, action) => {
      state.value = state.favData.filter(item =>
        item.city.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
    // filter: (state, action) => {
    //   state.value = state.favData.filter(item =>
    //     item.city.toLowerCase().includes(action.payload.toLowerCase()),
    //   );
    // },
    deleteFav: (state, action) => {
      state.favData = state.favData.filter(
        item => item.city !== action.payload,
      );
      // state.value = state.value.filter(item => item.id !== action.payload.id);
      // state.allData = state.allData.filter(
      //   item => item.id !== action.payload.id,
      // );
      
    },
    deleteSearch: (state, action) => {
      state.search = state.value.filter(item => item.id !== action.payload.id);
      // state.value = state.value.filter(item => item.id !== action.payload.id);
      // state.allData = state.allData.filter(
      //   item => item.id !== action.payload.id,
      // );
    },
  },
});

export const {
  addfavourite,
  filter,
  deleteFav,
  filterSearch,
  addSearchCity,
  getSearchData,
  deleteSearch
} = Slice.actions;

export default Slice.reducer;
