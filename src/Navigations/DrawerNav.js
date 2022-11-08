import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Favourite from '../screens/Favourite';
import RecentSearch from '../screens/RecentSearch';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './StackNav';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Stack"
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Stack" component={StackNav} />
        <Drawer.Screen name="Favourite" component={Favourite} />
        <Drawer.Screen name="RecentSearch" component={RecentSearch} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({});
