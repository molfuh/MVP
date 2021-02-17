import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Music from './components/Music.js';
import Home from './components/Home.js';
import Greets from './components/Greets.js';

const Stack = createStackNavigator();

const App = () => (
  <Music />
  // <NavigationContainer>
  //   <Stack.Navigator>
  //     {/* <Stack.Screen
  //       name="Home"
  //       component={Home}
  //       options={{ title: 'Welcome' }}
  //       />
  //     <Stack.Screen
  //       name="Greets"
  //       component={Greets}
  //       /> */}
  //     <Stack.Screen name="Music" component={Music} />
  //   </Stack.Navigator>
  // </NavigationContainer>
)

export default App;