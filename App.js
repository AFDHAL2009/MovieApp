/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import MovieStack from './src/navigation/index';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
function App() {
  useEffect(() => {
    SplashScreen.hide();
  });
  return <MovieStack />;
}

export default App;
