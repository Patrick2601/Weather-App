import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {DrawerActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getWeatherData} from '../Redux/Reducers/WeatherDataSlice';
import {useEffect} from 'react';
import {useState} from 'react';
import {addfavourite, deleteFav} from '../Redux/Reducers/Slice';

import uuid from 'react-native-uuid';
import moment from 'moment';

const Home = ({navigation}) => {
  const [click, setClick] = useState(true);
  const [favourite, setFavourite] = useState(false);

  const [date, setDate] = useState('');
  const currentDateTime = () => {
    const dateTimeMoment = moment()
      .utcOffset('+05:30')
      .format('ddd, DD MMM YY    hh:mm a')
      .toUpperCase();
    setDate(dateTimeMoment);
  };

  const weatherData = useSelector(state => state.weatherData.value);
  const dispatch = useDispatch();
  const addToFavourite = () => {
    setFavourite(!favourite);
    const obj = {
      id: uuid.v4(),
      city: weatherData.location.name,
      state: weatherData.location.region,
      weatherImage: `https:${weatherData.current.condition.icon}`,
      temperature: weatherData.current.temp_c,
      detail: weatherData.current.condition.text,
    };
    dispatch(addfavourite(obj));
  };
  const deleteFavourite = () => {
    setFavourite(!favourite);
    console.log('dele');
    dispatch(deleteFav(weatherData.location.name));
  };
  useEffect(() => {
    currentDateTime();
  }, [useDispatch, useSelector]);
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../images/weather/Android/1_Splash/xxxhdpi/background_android.png')}>
      <SafeAreaView style={styles.main}>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '50%',
            }}>
            <TouchableOpacity
              style={{width: 20, height: 20}}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
                source={require('../images/weather/Android/2_Home/mdpi/icon_menu_white.png')}
              />
            </TouchableOpacity>

            <Image
              style={{width: 113, height: 24, resizeMode: 'contain'}}
              source={require('../images/weather/Android/2_Home/mdpi/logo.png')}
            />
          </View>
          <TouchableOpacity
            style={{width: 17.5, height: 17.5}}
            onPress={() => navigation.navigate('SearchScreen')}>
            <Image
              style={{width: 17.5, height: 17.5, resizeMode: 'contain'}}
              source={require('../images/weather/Android/2_Home/mdpi/icon_search_white.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View style={styles.details}>
            <View style={styles.details1}>
              <Text style={styles.text1}>{date}</Text>
              <Text style={styles.text2}>
                {weatherData.location?.name}, {weatherData.location?.region}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: '35%',
                  marginTop: 20,
                }}>
                {!favourite ? (
                  <TouchableOpacity onPress={() => addToFavourite()}>
                    <Image
                      style={{width: 20, height: 17.5, resizeMode: 'contain'}}
                      source={require('../images/weather/Android/2_Home/Group11/xxxhdpi/icon_favourite.png')}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => deleteFavourite()}>
                    <Image
                      style={{width: 20, height: 17.5, resizeMode: 'contain'}}
                      source={require('../images/weather/Android/7_Favourite/Group3/xxxhdpi/icon_favourite_active.png')}
                    />
                  </TouchableOpacity>
                )}

                <Text style={{color: '#ffffff'}}>Add to favourite</Text>
              </View>
            </View>
            <View style={styles.details2}>
              <Image
                style={{width: 140, height: 100, resizeMode: 'contain'}}
                source={
                  weatherData.current?.condition.icon
                    ? {uri: `https:${weatherData.current?.condition.icon}`}
                    : require('../images/weather/Android/sun.png')
                }
              />
              {click ? (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.text4}>
                    {weatherData.current?.temp_c}
                  </Text>
                  <View style={styles.bodyviewbox}>
                    <View style={styles.bodyviewbox1}>
                      <Text style={styles.text8}>°C</Text>
                    </View>
                    <View style={styles.bodyviewbox2}>
                      <TouchableOpacity onPress={() => setClick(false)}>
                        <Text style={styles.text10}>°F</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ) : (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.text4}>
                    {weatherData.current?.temp_f}
                  </Text>
                  <View style={styles.bodyviewbox}>
                    <View style={styles.bodyviewbox4}>
                      <TouchableOpacity onPress={() => setClick(true)}>
                        <Text style={styles.text11}>°C</Text>
                      </TouchableOpacity>
                      <Text style={styles.text11}>°C</Text>
                    </View>
                    <View style={styles.bodyviewbox3}>
                      <Text style={styles.text12}>°F</Text>
                    </View>
                  </View>
                </View>
              )}

              <Text style={styles.text5}>
                {weatherData.current?.condition.text}
              </Text>
            </View>
          </View>
          <ScrollView
            style={{
              marginTop: 210,
              backgroundColor: 'rgba(255,255,255,0.1)',
            }}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={styles.bottomContent}>
                <Image
                  style={{width: 13, height: 26}}
                  source={require('../images/weather/Android/2_Home/Min-Max/xxxhdpi/icon_temperature_info.png')}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={styles.textContent1}>Min-Max</Text>
                  <Text style={styles.textContent2}>22°-34°</Text>
                </View>
              </View>
              <View style={styles.bottomContent}>
                <Image
                  style={{width: 24, height: 23, marginRight: 1}}
                  source={require('../images/weather/Android/2_Home/Precipitation/xxxhdpi/icon_precipitation_info.png')}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={styles.textContent1}>Precipitation</Text>
                  <Text style={styles.textContent2}>
                    {weatherData.current?.precip_in}%
                  </Text>
                </View>
              </View>
              <View style={styles.bottomContent}>
                <Image
                  style={{width: 15, height: 20}}
                  source={require('../images/weather/Android/2_Home/Humidity/xxxhdpi/icon_humidity_info.png')}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={styles.textContent1}>Humidity</Text>
                  <Text style={styles.textContent2}>
                    {weatherData.current?.humidity}%
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: 'center',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 0 : 0,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 35,
    // backgroundColor:'red'
  },
  details: {
    flex: 0,
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  details1: {
    alignItems: 'center',
    top: 70,
  },
  details2: {
    alignItems: 'center',
    top: 140,
    height: 300,
  },
  text1: {
    color: 'white',
    opacity: 0.6,
  },
  text2: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
  text4: {
    color: 'white',
    fontSize: 52,
  },
  text5: {
    color: 'white',
    fontSize: 18,
  },
  text7: {
    width: 7,
    height: 13,
    fontSize: 11,
    color: '#E32843',
    marginLeft: 5,
  },
  text8: {
    width: 19,
    height: 19,
    fontSize: 16,
    color: '#E32843',
    marginTop: 5,
    marginLeft: 3,
  },
  text9: {
    width: 7,
    height: 13,
    fontSize: 11,
    color: '#FFFFFF',
    marginLeft: 5,
  },
  text10: {
    width: 19,
    height: 19,
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 5,
    marginLeft: 3,
  },
  text11: {
    width: 19,
    height: 19,
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 5,
    marginLeft: 3,
  },
  text12: {
    width: 19,
    height: 19,
    fontSize: 16,
    color: '#E32843',
    marginTop: 5,
    marginLeft: 3,
  },
  bottomContent: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 80 : 120,
    height: 80,
    paddingLeft: 26,
    paddingTop: 20,
    // paddingHorizontal:20
  },
  textContent1: {color: 'white'},
  textContent2: {color: 'white', fontSize: 18},
  bodyviewbox: {
    width: 56,
    height: 30,
    flexDirection: 'row',
    marginTop: 6,
    marginLeft: 10,
  },
  bodyviewbox1: {
    width: 28,
    height: 30,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  bodyviewbox2: {
    width: 28,
    height: 30,
    borderWidth: 0.8,
    borderColor: 'white',
    flexDirection: 'row',
  },
  bodyviewbox3: {
    width: 28,
    height: 30,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  bodyviewbox4: {
    width: 28,
    height: 30,
    borderWidth: 0.8,
    borderColor: 'white',
    flexDirection: 'row',
  },
});
