import React from 'react';
import RecentSearch from '../screens/RecentSearch';
import Favourite from '../screens/Favourite';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Favourite" component={Favourite} />
      <Stack.Screen name="RecentSearch" component={RecentSearch} />
    </Stack.Navigator>
  );
};

export default StackNav;
