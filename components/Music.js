import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, PanResponder, Dimensions, Button, Pressable, Switch } from 'react-native';

// import { Audio } from 'expo-av';

const Music = () => {
  const dimensions = Dimensions.get('window');

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

  // console.log(midPointX, midPointY)
  const drumPress = async () => {
    // Alert.alert('clicked');
    // console.log('clicked')
  //   const { sound } = AudioPlay.Sound.createAsync(
  //     require('./assets/firstFile.mp3')
  //   );
  //   setSound(sound);
  //   console.log('Playing Sound');
  //  sound.playAsync();

    // initialising Sound as a variable


    const sound1 = new Audio(require('../assets/sounds/MTD_1.mp3'));
    const sound2 = new Audio(require('../assets/sounds/MTD_2.mp3'));
    const sound3 = new Audio(require('../assets/sounds/MTD_3.mp3'));
    const sound4 = new Audio(require('../assets/sounds/MTD_4.mp3'));
    const sound5 = new Audio(require('../assets/sounds/MTD_5.mp3'));
    const sound6 = new Audio(require('../assets/sounds/MTD_6.mp3'));
    const sound7 = new Audio(require('../assets/sounds/MTD_7.mp3'));
    const sound8 = new Audio(require('../assets/sounds/MTD_8.mp3'));


    // const sound = new Audio.Sound();
    // const sound = new Audio(require('./assets/sounds/MTD_1.mp3'));

    console.log(Math.floor(locationX), Math.floor(locationY) /*, dimensions.height, dimensions.width*/)

    // const synth = new Tone.Synth().toDestination();
    // if (locationX <= midPointX + 60 && locationX >= midPointX - 60 && (locationY >= midPointY - (dimensions.width / 5.9) - 200) && (locationY <= midPointY - 130)) {
    if (locationX <= midPointX + (dimensions.width / 12.8) && locationX >= midPointX - (dimensions.width / 12.8) && (locationY >= midPointY - (dimensions.width / 5.9) - (dimensions.width / 3.84)) && (locationY <= midPointY - (dimensions.width / 5.9))) {
      console.log('in 1');
      sound1.play();

      // console.log(        sound1.loop      )
      // try {
      //   await sound.loadAsync(require('./assets/sounds/MTD_1.mp3'));
      //   // await sound.unloadAsync();
      // } catch(e) {
      //   console.log('err in sound: ', e);
      // }
      // await sound.playAsync();

    // } else if (locationX >= midPointX + 75 && locationX <= midPointX + 250 && locationY >= midPointY - 200 && locationY <= midPointY - 100) {
    } else if (locationX >= midPointX + (dimensions.width / 10.24) && locationX <= midPointX + (dimensions.width / 3.072) && locationY >= midPointY - (dimensions.width / 3.84) && locationY <= midPointY - (dimensions.width / 7.68)) {

      // synth.triggerAttackRelease("D4", "4n");
      console.log('in 2');
      // new Audio(require('./assets/firstFile.mp3')).play();
      // new Audio(require('./assets/sounds/MTD_2.mp3')).play();
      sound2.play();
      // sound1.play();

    // } else if (locationY <= midPointY + 60 && locationY >= midPointY - 60 && (locationX >= midPointX + 130) && (locationX <= midPointX + 130 + 200)) {
    } else if (locationY <= midPointY + (dimensions.width / 12.8) && locationY >= midPointY - (dimensions.width / 12.8) && (locationX >= midPointX + (dimensions.width / 5.9)) && (locationX <= midPointX + (dimensions.width / 5.9) + (dimensions.width / 3.84))) {
      // synth.triggerAttackRelease("E4", "4n");
      console.log('in 3')
      sound3.play();

    } else if (locationX >= midPointX + (dimensions.width / 10.24) && locationX <= midPointX + (dimensions.width / 3.072) && locationY <= midPointY + (dimensions.width / 3.84) && locationY >= midPointY + (dimensions.width / 7.68)) {
      // synth.triggerAttackRelease("G4", "4n");
      console.log('in 4');
      sound4.play();

    // } else if (locationX <= midPointX + 60 && locationX >= midPointX - 60 && (locationY >= midPointY + 130) && (locationY <= midPointY + 130 + 200)) {
    } else if (locationX <= midPointX + (dimensions.width / 12.8) && locationX >= midPointX - (dimensions.width / 12.8) && (locationY >= midPointY + (dimensions.width / 5.9)) && (locationY <= midPointY + (dimensions.width / 5.9) + (dimensions.width / 3.84))) {
      // synth.triggerAttackRelease("A4", "4n");
      console.log('in 5')
      sound5.play();


    // } else if (locationX <= midPointX - 75 && locationX >= midPointX - 250 && locationY <= midPointY + 200 && locationY >= midPointY + 100) {
    } else if (locationX <= midPointX - (dimensions.width / 10.24) && locationX >= midPointX - (dimensions.width / 3.072) && locationY <= midPointY + (dimensions.width / 3.84) && locationY >= midPointY + (dimensions.width / 7.68)) {
      // synth.triggerAttackRelease("C5", "4n");
      console.log('in 6');
      sound6.play();

    // } else if (locationY <= midPointY + 60 && locationY >= midPointY - 60 && (locationX <= midPointX - 130) && (locationX >= midPointX - 130 - 200)) {
    } else if (locationY <= midPointY + (dimensions.width / 12.8) && locationY >= midPointY - (dimensions.width / 12.8) && (locationX <= midPointX - (dimensions.width / 5.9)) && (locationX >= midPointX - (dimensions.width / 5.9) - (dimensions.width / 3.84))) {
      // synth.triggerAttackRelease("D5", "4n");
      console.log('in 7')
      sound7.play();

    // } else if (locationX <= midPointX - 75 && locationX >= midPointX - 250 && locationY >= midPointY - 200 && locationY <= midPointY - 100) {
    } else if (locationX <= midPointX - (dimensions.width / 10.24) && locationX >= midPointX - (dimensions.width / 3.072) && locationY >= midPointY - (dimensions.width / 3.84) && locationY <= midPointY - (dimensions.width / 7.68)) {
      // synth.triggerAttackRelease("E5", "4n");
      console.log('in 8');
      sound8.play();
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

  // const onPressRecord = async () => {
  //   const recording = new Audio.Recording();
  //   try {
  //     await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
  //     await recording.startAsync();
  //     // You are now recording!
  //   } catch (e) {
  //     console.log('err in recording: ', e);
  //   }
  // }

  // const stopRecording = async() => {
  //   console.log('Stopping recording..');
  //   setRecording(undefined);
  //   await recording.stopAndUnloadAsync();
  //   const uri = recording.getURI();
  //   console.log('Recording stopped and stored at', uri);
  // }

  const handleBeats = (amount = 0) => {
    if (amount === 4) {
      return;
    }
    const sound1 = new Audio(require('../assets/sounds/MTD_1.mp3'));
    setTimeout(() => {
      sound1.play();
      sound1.loop = true;
      handleBeats(amount += 1);
    }, 1930)
  }

  const [toggle, setToggle] = useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
    if (!toggle) {
      handleBeats();
    }
  };
  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <View style={{
            position: 'absolute',
            top: 10,
            zIndex: 3,
          }}>
        <Text>
          Add Background Beats
        </Text>
       <Switch
          style={{
            right: 10
          }}
          trackColor={{true: 'teal', false: 'gray'}}
          thumbColor="white"
          ios_backgroundColor="gray"
          onValueChange={toggleFunction}
          value={toggle}
          />
        </View>
      <TouchableOpacity onPress={() => drumPress()}>

        <Image
          style={{
            height: dimensions.height,
            width: dimensions.width,
            resizeMode: 'contain',
          }}
          source={require('../assets/tongue_drum.png')}
        />
      </TouchableOpacity>
      <View style={styles.button}>
        {/* <Button
          onPress={onPressRecord}
          title="Record"
          color="#841584"
          accessibilityLabel="records audio"
        />
        <Button
          // onPress={onPressStopRecord}
          title="Stop Recording"
          color="#841584"
          accessibilityLabel="records audio"
        /> */}
      </View>
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

export default Music;

/*
MATH PROBLEM FOR IDENTIFYING TOP PART OF DRUM IMAGE:
(dimensions.height - (dimensions.width * 1.2)) / 2
*/