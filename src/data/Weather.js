import {View, Text} from 'react-native';
import uuid from 'react-native-uuid';
import img1 from '../images/weather/Android/sun.png';
// import img2 from '../images/weather/Android/2_Home/Precipitation/xxxhdpi/icon_precipitation_info.png';
// import img3 from '../images/weather/Android/2_Home/Humidity/xxxhdpi/icon_humidity_info.png';
const Data = [
  {
    id: uuid.v4(),
    info: 'Min-Max',
    image: img1,
    degree: '22-34',
  },
  {
    id: uuid.v4(),
    info: 'Precipitation',
    image: img1,
    degree: '0%',
  },
  {
    id: uuid.v4(),
    info: 'Humidity',
    image: img1,
    degree: '47%',
  },
];

export default Data;
