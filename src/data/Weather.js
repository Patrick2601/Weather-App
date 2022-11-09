import uuid from 'react-native-uuid';
const mostlySunny = require('../images/weather/Android/sun.png');
const rain = require('../images/weather/Android/7.1_Favourite_Clear_Confirm/icon_rain_small.png');
const mostlyCloudy = require('../images/weather/Android/7.1_Favourite_Clear_Confirm/icon_mostly_cloudy_small.png');
const partlyCloudy = require('../images/weather/Android/7.1_Favourite_Clear_Confirm/icon_partly_cloudy_small.png');
 const thunderstorm = require('../images/weather/Android/7.1_Favourite_Clear_Confirm/icon_thunderstorm_small.png');
 const clearNight = require('../images/weather/Android/7.1_Favourite_Clear_Confirm/icon_clear_night_small.png');

export const Data = [
  {
    id: 1,
    city: 'Udupi',
    state: 'Karnataka',
   weatherImage: mostlySunny,
    temperature: '31°C',
    detail: 'Mostly Sunny',
  },
  {
    id: 2,
    city: 'Bengaluru',
    state: 'Karnataka',
    weatherImage: rain,
    temperature: '29°C',
    detail: 'Rain',
  },
  {
    id: 3,
    city: 'Mumbai',
    state: 'Maharashtra',
    weatherImage: mostlyCloudy,
    temperature: '32°C',
    detail: 'Mostly Cloudy',
  },
  {
    id: 4,
    city: 'Kolkatta',
    state: 'West-Bengal',
    weatherImage: partlyCloudy,
    temperature: '30°C',
    detail: 'Partly Cloudy',
  },
  {
    id: 5,
    city: 'Panaji',
    state: 'Goa',
    weatherImage: thunderstorm,
    temperature: '31°C',
    detail: 'Thunderstorm',
  },
  {
    id: 6,
    city: 'Newyork',
    state: 'United States ',
    weatherImage: clearNight,
    temperature: '24°C',
    detail: 'Clear Night',
  },
];

export default Data;
