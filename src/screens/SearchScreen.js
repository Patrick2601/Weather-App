import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useState} from 'react';
import {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FavouriteList from '../components/FavouriteList';
import {addfavourite, filter, filterSearch} from '../Redux/Reducers/Slice';
import {getDataFromApi} from '../Services/Api';
import {getWeatherData} from '../Redux/Reducers/WeatherDataSlice';
import {addSearchCity} from '../Redux/Reducers/Slice';
import uuid from 'react-native-uuid';

const SearchScreen = ({navigation}) => {
  const [state, setState] = useState(false);
  const [text, setText] = useState('');
  const [data, setData] = useState('');
  const inpRef = useRef();
  const SearchData = useSelector(state => state.weatherData.value);
  const dispatch = useDispatch();
  const handleChange = async string => {
    setState(true);
    setText(string);
    const Data = await getDataFromApi(text);
    setData(Data);
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        dispatch(getWeatherData(item.name));
        navigation.navigate('HomeScreen');
        const obj = {
          id: uuid.v4(),
          city: SearchData.location?.name,
          state: SearchData.location?.region,
          weatherImage: `https:${SearchData.current?.condition.icon}`,
          temperature: SearchData.current?.temp_c,
          detail: SearchData.current?.condition.text,
          favourite: false,
          search: true,
        };
        dispatch(addSearchCity(obj));
      }}>
      <View
        style={{
          height: 58,
          borderWidth: 0.2,
          justifyContent: 'center',
          borderColor: 'grey',
        }}>
        <Text style={{color: 'black', fontSize: 15, paddingLeft: 15}}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '40%',
          }}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Image
              style={styles.backButton}
              source={require('../images/weather/Android/4_Search/xxxhdpi/icon_back_black.png')}
            />
          </TouchableOpacity>

          <TextInput
            placeholder="search"
            style={{
              right: 10,
              color: 'black',
              textAlign: 'left',
              width: '60%',
            }}
            onChangeText={text => handleChange(text)}
            ref={inpRef}
          />
        </View>
        {state ? (
          <TouchableOpacity
            onPress={() => {
              inpRef.current.clear();
              setState(false);
            }}>
            <Image
              style={styles.crossButton}
              source={require('../images/weather/Android/5_Search2/Group/xxxhdpi/icon_clear.png')}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  backButton: {
    width: 18,
    height: 18,
    marginLeft: 10,
    alignSelf: 'center',
  },
  crossButton: {
    width: 18,
    height: 18,
    alignSelf: 'center',
    right: 10,
  },
});
