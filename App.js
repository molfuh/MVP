import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, PanResponder, Dimensions } from 'react-native';

const App = () => {
  const dimensions = Dimensions.get('window');
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
    console.log(locationX, locationY, dimensions.height)
  }

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <TouchableOpacity activeOpacity = { .5 } onPress={onPress}>
        <Image
          style={{
            height: dimensions.height,
            width: dimensions.width,
            resizeMode: 'contain',
          }}
          source={require('./assets/tongue_drum.png')}
        />
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
  // drum: {
  //   // flex: 1,
  //   width: dimensions.width,
  //   // height: dimensions.height,
  //   resizeMode: 'contain'
  // }
});

export default App;