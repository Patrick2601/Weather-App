import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const FavouriteList = ({city, state, detail, temperature, weatherImage}) => {
  return (
      <View style={styles.weatherView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.text4}>
            {city},{state}
          </Text>
          <Image
            style={{height: 18, width: 20, top: 14}}
            source={require('../images/weather/Android/7_Favourite/Group3/xxxhdpi/icon_favourite_active.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 6,
          }}>
          <Image
            style={{
              width: 25,
              height: 23,
              resizeMode: 'contain',
            }}
            source={weatherImage}
          />
          <Text style={styles.text5}> {temperature}</Text>

          <Text style={styles.text6}>{detail}</Text>
        </View>
      </View>
  );
};

export default FavouriteList;

const styles = StyleSheet.create({
  text2: {color: '#ffffff'},
  text3: {color: '#ffffff'},
  text4: {color: '#FFE539', textAlign: 'left', fontWeight: '600'},
  text5: {color: '#ffffff', fontSize: 18,marginLeft:5},
  text6: {
    color: '#ffffff',
    marginLeft: 10,
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
