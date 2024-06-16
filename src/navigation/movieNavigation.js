import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from '../screens/home/home';
import MovieDetails from '../screens/movieDetails/movieDetails';
const Stack = createStackNavigator();
const MovieNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        gestureEnabled: true,
      })}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{
          headerTransparent: true,
          headerTitle: 'Movie Details',
          headerStyle: {},
        }}
      />
    </Stack.Navigator>
  );
};
export default MovieNavigation;
