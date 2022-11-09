import {createSlice} from '@reduxjs/toolkit';
// import Facebook from '../../images/06/01/Bitmap.png';
// import Twitter from '../../images/06/01copy4/BitmapCopy2.png';
// import Youtube from '../../images/06/01copy3/Bitmap.png';
// import Instagram from '../../images/06/01copy/Bitmap.png';
// const Image_Icon = [Facebook, Youtube, Twitter, Instagram];
import uuid from 'react-native-uuid';

const initialState = [
  {
    id: uuid.v4(),
    city: 'Udupi',
    state: 'Karnataka',
    // weatherImage: mostlySunny,
    temperature: '31°C',
    detail: 'Mostly Sunny',
  },
  {
    id: uuid.v4(),
    city: 'Bengaluru',
    state: 'Karnataka',
    // weatherImage: rain,
    temperature: '29°C',
    detail: 'Rain',
  },
  {
    id: uuid.v4(),
    city: 'Mumbai',
    state: 'Maharashtra',
    // weatherImage: mostlyCloudy,
    temperature: '32°C',
    detail: 'Mostly Cloudy',
  },
  {
    id: uuid.v4(),
    city: 'Kolkatta',
    state: 'West-Bengal',
    //weatherImage: partlyCloudy,
    temperature: '30°C',
    detail: 'Partly Cloudy',
  },
  {
    id: uuid.v4(),
    city: 'Panaji',
    state: 'Goa',
    //weatherImage: thunderstorm,
    temperature: '31°C',
    detail: 'Thunderstorm',
  },
  {
    id: uuid.v4(),
    city: 'Newyork',
    state: 'United States ',
    // weatherImage: clearNight,
    temperature: '24°C',
    detail: 'Clear Night',
  },
];

export const Slice = createSlice({
  name: 'favourite',
  initialState: {
    value: initialState,
    preState: initialState,
  },
  reducers: {
    addfavourite: (state, action) => {
      state.value.push(action.payload);
      state.preState.push(action.payload);
    },
    filter: (state, action) => {
      state.value = state.preState.filter(item =>
        item.city.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
  },
});

export const {addfavourite, filter} = Slice.actions;

export default Slice.reducer;
