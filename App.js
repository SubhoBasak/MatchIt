/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import About from './screens/about';
import Game from './screens/game';
import Help from './screens/help';
import Level from './screens/level';
import Start from './screens/start';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="start"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="about" component={About} />
          <Stack.Screen name="game" component={Game} />
          <Stack.Screen name="help" component={Help} />
          <Stack.Screen name="level" component={Level} />
          <Stack.Screen name="start" component={Start} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#dddddd',
  },
});

export default App;
