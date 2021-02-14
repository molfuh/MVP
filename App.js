import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, PanResponder } from 'react-native';

const App = () => {
  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture:
      (event, gestureState) => true,
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture:
      (event, gestureState) => false,
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      //After the change in the location
      setLocationX(event.nativeEvent.locationX.toFixed(2));
      setLocationY(event.nativeEvent.locationY.toFixed(2));
    },
  });

  const onPress = () => {
    console.log(locationX, locationY)
    if (locationX > 500) {
      console.log('nice')
    }
  }

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <TouchableOpacity activeOpacity = { .5 } onPress={onPress}>
      {/* <View {...panResponder.panHandlers}> */}
        <Image
          style={styles.drum}
          source={require('./assets/tongue_drum.png')}
        />
      {/* </View> */}
          </TouchableOpacity>
          <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drum: {
    flex: 1,
    width: 400,
    height: 400,
    resizeMode: 'contain'
  }
});

export default App;