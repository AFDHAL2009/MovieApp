import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import MovieNavigation from './movieNavigation';
const MovieStack = () => {
  return (
    <NavigationContainer>
      <MovieNavigation />
    </NavigationContainer>
  );
};
export default MovieStack;
