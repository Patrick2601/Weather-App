import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const FavouriteList = ({
  city,
  state,
  detail,
  temperature,
  weatherImage,
  onLongPress,
  onPress,
}) => {
  return (
    <TouchableOpacity onLongPress={onLongPress} onPress={onPress}>
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
            style={{height: 18, width: 20, top: 14, resizeMode: 'contain'}}
            source={require('../images/weather/Android/7_Favourite/Group3/xxxhdpi/icon_favourite_active.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 6,
          }}>
          <View
            style={{
              height: 23,
            }}>
            <Image
              style={{
                width: 30,
                height: 30,
                bottom: 4,
              }}
              source={{uri: weatherImage}}
            />
          </View>

          <Text style={styles.text5}> {temperature} °C</Text>

          <Text style={styles.text6}>{detail}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export {FavouriteList};

const styles = StyleSheet.create({
  text2: {color: '#ffffff'},
  text3: {color: '#ffffff'},
  text4: {
    color: '#FFE539',
    textAlign: 'left',
    fontWeight: '600',
    fontFamily: 'Roboto-Medium',
  },
  text5: {
    color: '#ffffff',
    fontSize: 17,
    fontFamily: 'Roboto-Medium',
    alignSelf: 'center',
  },

  text6: {
    color: '#ffffff',
    marginLeft: 10,
    fontFamily: 'Roboto-Regular',
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
