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

const Home = ({navigation}) => {
  return (
    <View style={styles.main}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../images/weather/Android/1_Splash/xxxhdpi/background_android.png')}>
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
          <Image
            style={{width: 17.5, height: 17.5, resizeMode: 'contain'}}
            source={require('../images/weather/Android/2_Home/mdpi/icon_search_white.png')}
          />
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={styles.details}>
            <View style={styles.details1}>
              <Text style={styles.text1}>WED,28 NOV 2018 11.35 AM</Text>
              <Text style={styles.text2}>UDUPI,KARNATAKA</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: '35%',
                  marginTop: 20,
                }}>
                <Image
                  style={{width: 20, height: 17.5}}
                  source={require('../images/weather/Android/2_Home/Group11/xxxhdpi/icon_favourite.png')}
                />
                <Text style={styles.text1}>Add to favotite</Text>
              </View>
            </View>
            <View style={styles.details2}>
              <Image
                style={{width: 84, height: 87}}
                source={require('../images/weather/Android/sun.png')}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.text4}>31</Text>
                <View style={styles.bodyviewbox}>
                  <View style={styles.bodyviewbox1}>
                    <Text style={styles.text8}>°C</Text>
                  </View>
                  <View style={styles.bodyviewbox2}>
                    <Text style={styles.text10}>°F</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.text5}>Mostly Sunny</Text>
            </View>
          </View>
        </ScrollView>
        <ScrollView
          style={{
            flex: 1,
            width: '102%',
            height: '122%',
            flex: 1,
            borderWidth: 0.3,
            borderTopColor: 'white',
            top: Platform.OS === 'ios' ? 75 : 40,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View style={styles.bottomContent}>
            <Image
              style={{width: 13, height: 26}}
              source={require('../images/weather/Android/2_Home/Min-Max/xxxhdpi/icon_temperature_info.png')}
            />
            <View style={{marginLeft:10}}>
              <Text style={styles.textContent1}>Min-Max</Text>
              <Text style={styles.textContent2}>22°-34°</Text>
            </View>
          </View>
          <View style={styles.bottomContent}>
            <Image
              style={{width: 24, height: 23, marginRight: 10}}
              source={require('../images/weather/Android/2_Home/Precipitation/xxxhdpi/icon_precipitation_info.png')}
            />
            <View style={{marginLeft:10}}>
              <Text style={styles.textContent1}>Precipitation</Text>
              <Text style={styles.textContent2}>0%</Text>
            </View>
          </View>
          <View style={styles.bottomContent}>
            <Image
              style={{width: 15, height: 20}}
              source={require('../images/weather/Android/2_Home/Humidity/xxxhdpi/icon_humidity_info.png')}
            />
            <View style={{marginLeft:10}}>
              <Text style={styles.textContent1}>Humidity</Text>
              <Text style={styles.textContent2}>47%</Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 60 : 0,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 35,
    marginTop: 10,
  },
  details: {
    flex: 4.5,
    width: '100%',
    marginTop: 30,
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
  bottomContent: {
    flex:1,
    flexDirection: 'row',
    width: 95,
    height: 41,
    paddingLeft: 25,
    width: '50%',
    paddingTop: 18,
    justifyContent: 'space-evenly',
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
});
