import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import FavouriteList from '../components/FavouriteList';
import {useState} from 'react';
// Are you sure want to remove all the favourites?
const Favourite = ({navigation}) => {
  const [state, setState] = useState(false);
  const change = () =>
    Alert.alert('Are you sure ', 'want to remove all the favourites?', [
      {
        text: 'NO',
        onPress: () => console.log('Cancel Pressed'),
      },
      {text: 'YES', onPress: () => setState(!state)},
    ]);

  return (
    <View style={styles.main}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../images/weather/Android/1_Splash/xxxhdpi/background_android.png')}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '40%',
              }}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate('Home')}>
                <Image
                  style={styles.backButton}
                  source={require('../images/weather/Android/4_Search/xxxhdpi/icon_back_black.png')}
                />
              </TouchableOpacity>

              <Text style={styles.headerText}>Favourite</Text>
            </View>
            <Image
              style={styles.seachButton}
              source={require('../images/weather/Android/2_Home/mdpi/icon_search_white.png')}
            />
          </View>
          {state ? (
            <View style={styles.img}>
              <Image
                style={{height: 84, width: 160}}
                source={require('../images/weather/Android/6_Favourite_Blank/Group38/Group3/xxxhdpi/icon_nothing.png')}
              />
              <Text style={styles.text1}>No Favourites added</Text>
            </View>
          ) : (
            <View>
              <View style={styles.addedTextView}>
                <Text style={styles.text2}>6 City added as favourite</Text>
                <TouchableOpacity onPress={() => change()}>
                  <Text style={styles.text3}>Remove All</Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <FavouriteList />
              </ScrollView>
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    paddingVertical: Platform.OS === 'ios' ? 34 : 0,
  },
  header: {
    width: '100%',
    backgroundColor: '#ffffff',
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    width: 18,
    height: 18,
    marginLeft: 10,
    alignSelf: 'center',
  },
  seachButton: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: 'black',
    marginRight: 20,
  },
  headerText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'black',
  },
  img: {
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    width: 166,
    height: 21,
    fontSize: 18,
    color: '#ffffff',
    marginTop: 30,
  },
  addedTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  text2: {color: '#ffffff'},
  text3: {color: '#ffffff'},
  text4: {color: '#FFE539', textAlign: 'left', fontWeight: '600'},
  text5: {color: '#ffffff', fontSize: 18},
  text6: {
    color: '#ffffff',
  },
  weatherView: {
    width: '90%',
    height: 80,
    marginTop: 20,
    marginLeft: 22,
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 15,
  },
});
