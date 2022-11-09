import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getWeatherData =
  createAsyncThunk('WeatherData/getWeatherdata', async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7f14fecc0amsh94e262433bad045p16cb92jsn8fcc5d01f9ef',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    const response = await fetch(
      'https://weatherapi-com.p.rapidapi.com/current.json?q=mumbai',
      options,
    );
    try {
      const data = response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  });


const WeatherDataSlice = createSlice({
  name: 'WeatherData',
  initialState: {
    value: [],
    status: false,
  },
  extraReducers: {
    [getWeatherData.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getWeatherData.fulfilled]: (state, action) => {
      state.status = 'success';
      state.value = action.payload;
    },
    [getWeatherData.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default WeatherDataSlice.reducer;
