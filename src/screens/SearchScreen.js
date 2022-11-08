import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useState} from 'react';

const SearchScreen = ({navigation}) => {
  const [state, setState] = useState(false);
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
            onPress={() => navigation.navigate('Home')}>
            <Image
              style={styles.backButton}
              source={require('../images/weather/Android/4_Search/xxxhdpi/icon_back_black.png')}
            />
          </TouchableOpacity>

          <TextInput
            placeholder="search"
            style={{right: 10,color:"black",textAlign:"left",width:'60%'}}
            onChangeText={() => setState(!state)}
          />
        </View>
        {state ? (
          <Image
            style={styles.crossButton}
            source={require('../images/weather/Android/5_Search2/Group/xxxhdpi/icon_clear.png')}
          />
        ) : null}
      </View>
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
