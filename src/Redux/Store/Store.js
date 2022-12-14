import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WeatherDataSlice from '../Reducers/WeatherDataSlice';
import Slice from '../Reducers/Slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const reducer = combineReducers({
  favourite: Slice,
  weatherData: WeatherDataSlice,
});

const persistRed = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistRed,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
