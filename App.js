import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, PanResponder, Dimensions, Button, Pressable } from 'react-native';
import { Audio as AudioPlay } from 'expo-av';

const App = () => {
  const dimensions = Dimensions.get('window');

  // console.log('width: ', dimensions.width);

  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);

  // const [imageHeight, setImageHeight] = useState(0);
  // const [imageWidth, setImageWidth] = useState(0);

  // Image.getSize(require('./assets/tongue_drum.png'), (width, height) => {setImageHeight(height), setImageWidth(width)}, (e) => {console.log('error: ', e)});
  // console.log('width:', imageWidth)

  const drumTopX = Math.floor(dimensions.width / 2);
  const drumTopY = Math.floor((dimensions.height - (dimensions.width * 1.2)) / 2);
  // console.log('X: ', drumTopX)
  // console.log('Y: ', drumTopY)
  const midPointX = Math.floor(((dimensions.width / 2)) * 1.02);
  const midPointY = Math.floor((drumTopY + (dimensions.width / 2)) / 1.04);
  // console.log('midX: ', midPointX)// - 150)
  // console.log('midY: ', midPointY)// + 150)

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
  const [sound, setSound] = React.useState();

  // console.log(midPointX, midPointY)
  const onPress = async () => {

    const { sound } = await AudioPlay.Sound.createAsync(
      require('./assets/firstFile.mp3')
    );
    setSound(sound);
    console.log('Playing Sound');
    await sound.playAsync();

    // var audio = new Audio(require('./assets/firstFile.mp3'));

    console.log(Math.floor(locationX), Math.floor(locationY) /*, dimensions.height, dimensions.width*/)

    // const synth = new Tone.Synth().toDestination();

    // if (locationX <= midPointX + 60 && locationX >= midPointX - 60 && (locationY >= midPointY - (dimensions.width / 5.9) - 200) && (locationY <= midPointY - 130)) {
    if (locationX <= midPointX + (dimensions.width / 12.8) && locationX >= midPointX - (dimensions.width / 12.8) && (locationY >= midPointY - (dimensions.width / 5.9) - (dimensions.width / 3.84)) && (locationY <= midPointY - (dimensions.width / 5.9))) {
      console.log('clicked')
      console.log('in 1');
      // audio.play();
    // } else if (locationX >= midPointX + 75 && locationX <= midPointX + 250 && locationY >= midPointY - 200 && locationY <= midPointY - 100) {
    } else if (locationX >= midPointX + (dimensions.width / 10.24) && locationX <= midPointX + (dimensions.width / 3.072) && locationY >= midPointY - (dimensions.width / 3.84) && locationY <= midPointY - (dimensions.width / 7.68)) {
      // synth.triggerAttackRelease("D4", "4n");
      console.log('in 2');

    // } else if (locationY <= midPointY + 60 && locationY >= midPointY - 60 && (locationX >= midPointX + 130) && (locationX <= midPointX + 130 + 200)) {
    } else if (locationY <= midPointY + (dimensions.width / 12.8) && locationY >= midPointY - (dimensions.width / 12.8) && (locationX >= midPointX + (dimensions.width / 5.9)) && (locationX <= midPointX + (dimensions.width / 5.9) + (dimensions.width / 3.84))) {
      // synth.triggerAttackRelease("E4", "4n");
      console.log('in 3')

    } else if (locationX >= midPointX + (dimensions.width / 10.24) && locationX <= midPointX + (dimensions.width / 3.072) && locationY <= midPointY + (dimensions.width / 3.84) && locationY >= midPointY + (dimensions.width / 7.68)) {
      // synth.triggerAttackRelease("G4", "4n");
      console.log('in 4');

    // } else if (locationX <= midPointX + 60 && locationX >= midPointX - 60 && (locationY >= midPointY + 130) && (locationY <= midPointY + 130 + 200)) {
    } else if (locationX <= midPointX + (dimensions.width / 12.8) && locationX >= midPointX - (dimensions.width / 12.8) && (locationY >= midPointY + (dimensions.width / 5.9)) && (locationY <= midPointY + (dimensions.width / 5.9) + (dimensions.width / 3.84))) {
      // synth.triggerAttackRelease("A4", "4n");
      console.log('in 5')

    // } else if (locationX <= midPointX - 75 && locationX >= midPointX - 250 && locationY <= midPointY + 200 && locationY >= midPointY + 100) {
    } else if (locationX <= midPointX - (dimensions.width / 10.24) && locationX >= midPointX - (dimensions.width / 3.072) && locationY <= midPointY + (dimensions.width / 3.84) && locationY >= midPointY + (dimensions.width / 7.68)) {
      // synth.triggerAttackRelease("C5", "4n");
      console.log('in 6');

    // } else if (locationY <= midPointY + 60 && locationY >= midPointY - 60 && (locationX <= midPointX - 130) && (locationX >= midPointX - 130 - 200)) {
    } else if (locationY <= midPointY + (dimensions.width / 12.8) && locationY >= midPointY - (dimensions.width / 12.8) && (locationX <= midPointX - (dimensions.width / 5.9)) && (locationX >= midPointX - (dimensions.width / 5.9) - (dimensions.width / 3.84))) {
      // synth.triggerAttackRelease("D5", "4n");
      console.log('in 7')

    // } else if (locationX <= midPointX - 75 && locationX >= midPointX - 250 && locationY >= midPointY - 200 && locationY <= midPointY - 100) {
    } else if (locationX <= midPointX - (dimensions.width / 10.24) && locationX >= midPointX - (dimensions.width / 3.072) && locationY >= midPointY - (dimensions.width / 3.84) && locationY <= midPointY - (dimensions.width / 7.68)) {
      // synth.triggerAttackRelease("E5", "4n");
      console.log('in 8');
    }
  }
  // const [recording, setRecording] = React.useState();

  // const onPressRecord = async() => {
  //   try {
  //     console.log('Requesting permissions..');
  //     await Audio.requestPermissionsAsync();
  //     await Audio.setAudioModeAsync({
  //       allowsRecordingIOS: true,
  //       playsInSilentModeIOS: true,
  //     });
  //     console.log('Starting recording..');
  //     const recording = new Audio.Recording();
  //     await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
  //     await recording.startAsync();
  //     setRecording(recording);
  //     console.log('Recording started');
  //   } catch (err) {
  //     console.error('Failed to start recording', err);
  //   }
  // }

  // const onPressStopRecord = async() => {
  //   console.log('Stopping recording..');
  //   setRecording(undefined);
  //   await recording.stopAndUnloadAsync();
  //   const uri = recording.getURI();
  //   console.log('Recording stopped and stored at', uri);
  // }

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Pressable onPress={onPress}>
        <Image
          style={{
            height: dimensions.height,
            width: dimensions.width,
            resizeMode: 'contain',
          }}
          source={require('./assets/tongue_drum.png')}
        />
      </Pressable>
      {/* <View style={styles.button}>
        <Button
          onPress={onPressRecord}
          title="Record"
          color="#841584"
          accessibilityLabel="records audio"
        />
        <Button
          onPress={onPressStopRecord}
          title="Stop Recording"
          color="#841584"
          accessibilityLabel="records audio"
        />
      </View> */}
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
  button: {
    position: 'absolute',
    bottom: 50,
  }
  // drum: {
  //   // flex: 1,
  //   width: dimensions.width,
  //   // height: dimensions.height,
  //   resizeMode: 'contain'
  // }
});

export default App;

/*
MATH PROBLEM FOR IDENTIFYING TOP PART OF DRUM IMAGE:
(dimensions.height - (dimensions.width * 1.2)) / 2
*/