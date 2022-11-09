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
import Data from '../data/Weather';
import FavouriteList from '../components/FavouriteList';
import { filter } from '../Redux/Reducers/Slice';

const SearchScreen = ({navigation}) => {
  const [state, setState] = useState(false);
  const [value, setValue] = useState('');
  const inpRef = useRef();
  const favData = useSelector(state => state.favourite.value);
  const dispatch=useDispatch()

  const handleChange = (text) => {
    setState(true);
    console.log(text)
    dispatch(filter(text))

  };
  const renderItem = ({item}) => (
    <FavouriteList
      city={item.city}
      state={item.state}
      temperature={item.temperature}
      detail={item.detail}
      weatherImage={item.weatherImage}
    />
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
              onChangeText={(text)=>handleChange(text)}
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
        {/* <FlatList
          data={favData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        /> */}
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
