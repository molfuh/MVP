import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Greets = ({ route, navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Music')
    }, 3000);
  }, []);

  //check if person already existed with database!

  return (
    <View
    style={{
      top: 50,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>Welcome, {route.params.name}! You ready to make some music?</Text>
    </View>
    )
}

export default Greets;