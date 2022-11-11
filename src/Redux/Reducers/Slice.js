import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const Slice = createSlice({
  name: 'slice',
  initialState: {
    value: initialState,
    allData: initialState,
    favData: initialState,
    search: [],
    favState: false,
  },
  reducers: {
    addfavourite: (state, action) => {
      const city = state.favData.map(value => value.city);
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
      // state.search = state.allData.filter(item => item.search === true);
      state.search = state.search
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
    deleteAllFav: (state, action) => {
      state.favData = [];
    },

    deleteSearch: (state, action) => {
      state.search = state.search.filter(
        item => item.city !== action.payload.city,
      );
    },
    deleteAllSearch: (state, action) => {
      state.search = [];
      console.log('all search deleted',state.search)
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
  deleteSearch,
  deleteAllFav,
  deleteAllSearch,
} = Slice.actions;

export default Slice.reducer;
