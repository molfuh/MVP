import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  PanResponder,
  Dimensions,
  Button,
  Pressable,
  Switch,
  FlatList
} from 'react-native';
import { Audio as AudioAV } from 'expo-av';

const Music = () => {
  const dimensions = Dimensions.get('window');

  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);

  const drumTopX = Math.floor(dimensions.width / 2);
  const drumTopY = Math.floor((dimensions.height - (dimensions.width * 1.2)) / 2);

  const midPointX = Math.floor(((dimensions.width / 2)) * 1.02);
  const midPointY = Math.floor((drumTopY + (dimensions.width / 2)) / 1.04);

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
      setLocationX(event.nativeEvent.locationX.toFixed(2));
      setLocationY(event.nativeEvent.locationY.toFixed(2));
    },
  });

  const [tonic, setTonic] = useState(null);
  const [superTonic, setSuperTonic] = useState(null);
  const [mediant, setMediant] = useState(null);
  const [subdominant, setSubdominant] = useState(null);
  const [dominant, setDominant] = useState(null);
  const [submediant, setSubmediant] = useState(null);
  const [subtonic, setSubTonic] = useState(null);
  const [octave, setOctave] = useState(null);

  const drumPress = async (isEcho) => {
    const sound1 = new Audio(require('../assets/sounds/tongue_drum_sounds/MTD_1.mp3'));
    const sound2 = new Audio(require('../assets/sounds/tongue_drum_sounds/MTD_2.mp3'));
    const sound3 = new Audio(require('../assets/sounds/tongue_drum_sounds/MTD_3.mp3'));
    const sound4 = new Audio(require('../assets/sounds/tongue_drum_sounds/MTD_4.mp3'));
    const sound5 = new Audio(require('../assets/sounds/tongue_drum_sounds/MTD_5.mp3'));
    const sound6 = new Audio(require('../assets/sounds/tongue_drum_sounds/MTD_6.mp3'));
    const sound7 = new Audio(require('../assets/sounds/tongue_drum_sounds/MTD_7.mp3'));
    const sound8 = new Audio(require('../assets/sounds/tongue_drum_sounds/MTD_8.mp3'));

    if (locationX <= midPointX + (dimensions.width / 12.8) && locationX >= midPointX - (dimensions.width / 12.8) && (locationY >= midPointY - (dimensions.width / 5.9) - (dimensions.width / 3.84)) && (locationY <= midPointY - (dimensions.width / 5.9))) {

      const { sound: sound1 } = await AudioAV.Sound.createAsync(
        require('../assets/sounds/tongue_drum_sounds/MTD_1.mp3')
      );
      setTonic(sound1);
      await sound1.playAsync();

      if (isEcho) {
        sound1.setIsLoopingAsync(true);
      }

    } else if (locationX >= midPointX + (dimensions.width / 10.24) && locationX <= midPointX + (dimensions.width / 3.072) && locationY >= midPointY - (dimensions.width / 3.84) && locationY <= midPointY - (dimensions.width / 7.68)) {

      const { sound: sound2 } = await AudioAV.Sound.createAsync(
        require('../assets/sounds/tongue_drum_sounds/MTD_2.mp3')
      );
      setSuperTonic(sound2);
      await sound2.playAsync();

      if (isEcho) {
        sound2.setIsLoopingAsync(true);
      }

    } else if (locationY <= midPointY + (dimensions.width / 12.8) && locationY >= midPointY - (dimensions.width / 12.8) && (locationX >= midPointX + (dimensions.width / 5.9)) && (locationX <= midPointX + (dimensions.width / 5.9) + (dimensions.width / 3.84))) {

      const { sound: sound3 } = await AudioAV.Sound.createAsync(
        require('../assets/sounds/tongue_drum_sounds/MTD_3.mp3')
      );
      setMediant(sound3);
      await sound3.playAsync();

      if (isEcho) {
        sound3.setIsLoopingAsync(true);
      }

    } else if (locationX >= midPointX + (dimensions.width / 10.24) && locationX <= midPointX + (dimensions.width / 3.072) && locationY <= midPointY + (dimensions.width / 3.84) && locationY >= midPointY + (dimensions.width / 7.68)) {

      const { sound: sound4 } = await AudioAV.Sound.createAsync(
        require('../assets/sounds/tongue_drum_sounds/MTD_4.mp3')
      );
      setSubdominant(sound4);
      await sound4.playAsync();

      if (isEcho) {
        sound4.setIsLoopingAsync(true);
      }

    } else if (locationX <= midPointX + (dimensions.width / 12.8) && locationX >= midPointX - (dimensions.width / 12.8) && (locationY >= midPointY + (dimensions.width / 5.9)) && (locationY <= midPointY + (dimensions.width / 5.9) + (dimensions.width / 3.84))) {

      const { sound: sound5 } = await AudioAV.Sound.createAsync(
        require('../assets/sounds/tongue_drum_sounds/MTD_5.mp3')
      );
      setDominant(sound5);
      await sound5.playAsync();

      if (isEcho) {
        sound5.setIsLoopingAsync(true);
      }

    } else if (locationX <= midPointX - (dimensions.width / 10.24) && locationX >= midPointX - (dimensions.width / 3.072) && locationY <= midPointY + (dimensions.width / 3.84) && locationY >= midPointY + (dimensions.width / 7.68)) {

      const { sound: sound6 } = await AudioAV.Sound.createAsync(
        require('../assets/sounds/tongue_drum_sounds/MTD_6.mp3')
      );
      setSubmediant(sound6);
      await sound6.playAsync();

      if (isEcho) {
        sound6.setIsLoopingAsync(true);
      }

    } else if (locationY <= midPointY + (dimensions.width / 12.8) && locationY >= midPointY - (dimensions.width / 12.8) && (locationX <= midPointX - (dimensions.width / 5.9)) && (locationX >= midPointX - (dimensions.width / 5.9) - (dimensions.width / 3.84))) {

      const { sound: sound7 } = await AudioAV.Sound.createAsync(
        require('../assets/sounds/tongue_drum_sounds/MTD_7.mp3')
      );
      setSubTonic(sound7);
      await sound7.playAsync();

      if (isEcho) {
        sound7.setIsLoopingAsync(true);
      }
    } else if (locationX <= midPointX - (dimensions.width / 10.24) && locationX >= midPointX - (dimensions.width / 3.072) && locationY >= midPointY - (dimensions.width / 3.84) && locationY <= midPointY - (dimensions.width / 7.68)) {

      const { sound: sound8 } = await AudioAV.Sound.createAsync(
        require('../assets/sounds/tongue_drum_sounds/MTD_8.mp3')
      );
      setOctave(sound8);
      await sound8.playAsync();

      if (isEcho) {
        sound8.setIsLoopingAsync(true);
      }
    }
  }

  const handleBeats = async (sound, time) => {
      setTimeout(async () => {
        await sound.playAsync();
        sound.setIsLoopingAsync(true);
      }, time)
    }

    const [beat1, setBeat1] = useState(null);
    const [beat2, setBeat2] = useState(null);
    const [beat3, setBeat3] = useState(null);
    const [beat4, setBeat4] = useState(null);

    useEffect(() => {
      if (beat1) {
        handleBeats(beat1, 1950);
      }
    }, [beat1])

    useEffect(() => {
      if (beat2) {
        handleBeats(beat2, 3900);
      }
    }, [beat2])

    useEffect(() => {
      if (beat3) {
        handleBeats(beat3, 5850);
      }
    }, [beat3])

    useEffect(() => {
      if (beat4) {
        handleBeats(beat4, 7800);
      }
    }, [beat4])

  const [toggleBeats, setToggleBeats] = useState(false);

  const toggleFunctionBeats = async () => {
    const { sound: sound1 } = await AudioAV.Sound.createAsync(
      require('../assets/sounds/tongue_drum_sounds/MTD_1.mp3')
    );
    const { sound: sound2 } = await AudioAV.Sound.createAsync(
      require('../assets/sounds/tongue_drum_sounds/MTD_1.mp3')
    );
    const { sound: sound3 } = await AudioAV.Sound.createAsync(
      require('../assets/sounds/tongue_drum_sounds/MTD_1.mp3')
    );
    const { sound: sound4 } = await AudioAV.Sound.createAsync(
      require('../assets/sounds/tongue_drum_sounds/MTD_1.mp3')
    );

    setToggleBeats(!toggleBeats);
    if (!toggleBeats) {
      await setBeat1(sound1);
      await setBeat2(sound2);
      await setBeat3(sound3);
      await setBeat4(sound4);
    } else if (toggleBeats) {
      beat1.unloadAsync();
      beat2.unloadAsync();
      beat3.unloadAsync();
      beat4.unloadAsync();
    }
  };

  const [toggleEcho, setToggleEcho] = useState(false);

  // useEffect(() => {
  //   if (toggleEcho) {
  //     console.log('Yes echo!')
  //   }
  // }, [toggleEcho])

  const toggleFunctionEcho = () => {
    setToggleEcho(!toggleEcho);
  };

  const [toggleRain, setToggleRain] = useState(false);
  const [toggleRainSound, setToggleRainSound] = useState(null);

  const [toggleFire, setToggleFire] = useState(false);
  const [toggleFireSound, setToggleFireSound] = useState(null);

  const [toggleTree, setToggleTree] = useState(false);
  const [toggleTreeSound, setToggleTreeSound] = useState(null);

  const [toggleWater, setToggleWater] = useState(false);
  const [toggleWaterSound, setToggleWaterSound] = useState(null);

  useEffect(() => {
    if (toggleRain) {
      toggleRainSound.playAsync();
      toggleRainSound.setIsLoopingAsync(true);
      toggleRainSound.setVolumeAsync(0.06)
    }
  }, [toggleRainSound])

  useEffect(() => {
    if (toggleFire) {
      toggleFireSound.playAsync();
      toggleFireSound.setIsLoopingAsync(true);
      toggleFireSound.setVolumeAsync(0.12)
    }
  }, [toggleFireSound])

  useEffect(() => {
    if (toggleTree) {
      toggleTreeSound.playAsync();
      toggleTreeSound.setIsLoopingAsync(true);
      toggleTreeSound.setVolumeAsync(0.12)
    }
  }, [toggleTreeSound])

  useEffect(() => {
    if (toggleWater) {
      toggleWaterSound.playAsync();
      toggleWaterSound.setIsLoopingAsync(true);
      toggleWaterSound.setVolumeAsync(0.02)
    }
  }, [toggleWaterSound])

  const togglePlay = async (type) => {

    const { sound: rain } = await AudioAV.Sound.createAsync(
      require('../assets/backing_tracks/TDMRainShort.mp3')
    );

    const { sound: fire } = await AudioAV.Sound.createAsync(
      require('../assets/backing_tracks/TDMFireShort.mp3')
    );

    const { sound: tree } = await AudioAV.Sound.createAsync(
      require('../assets/backing_tracks/TDMForestShort.mp3')
    );

    const { sound: water } = await AudioAV.Sound.createAsync(
      require('../assets/backing_tracks/TDMStreamShort.mp3')
    );

    if (type === 'rain') {
      setToggleRain(!toggleRain);
      setToggleRainSound(rain);

      if (toggleRain) {
        toggleRainSound.unloadAsync();
      }

    } else if (type === 'fire') {
      setToggleFire(!toggleFire);
      setToggleFireSound(fire);

      if (toggleFire) {
        toggleFireSound.unloadAsync();
      }

    } else if (type === 'tree') {
      setToggleTree(!toggleTree);
      setToggleTreeSound(tree);

      if (toggleTree) {
        toggleTreeSound.unloadAsync();
      }
    } else if (type === 'water') {
      setToggleWater(!toggleWater);
      setToggleWaterSound(water);

      if (toggleWater) {
        toggleWaterSound.unloadAsync();
      }
    }
  }

  if (!toggleEcho) {
    return (
      <View style={styles.container} {...panResponder.panHandlers}>
      <View style={styles.backgroundBeats}>
        <Text>
          Add Background Beats
        </Text>
       <Switch
          style={styles.beatsToggle}
          trackColor={{true: 'teal', false: 'gray'}}
          thumbColor="white"
          ios_backgroundColor="gray"
          onValueChange={toggleFunctionBeats}
          value={toggleBeats}
          />
      </View>
      <View style={styles.echo}>
        <Text>
          Enable echoing
        </Text>
       <Switch
          style={{
            left: 30,
          }}
          trackColor={{true: 'teal', false: 'gray'}}
          thumbColor="white"
          ios_backgroundColor="gray"
          onValueChange={() => toggleFunctionEcho()}
          value={toggleEcho}
          />
        </View>
      <TouchableOpacity onPress={() => drumPress(false)}>
        <Image
          style={{
            height: dimensions.height,
            width: dimensions.width,
            resizeMode: 'contain',
          }}
          source={require('../assets/tongue_drum.png')}
        />
      </TouchableOpacity>
      <View style={styles.symbolContainer}>
        <View style={{
              position: 'absolute',
              bottom: -50,
              right: 75,
              zIndex: 3,
            }}>
          <Image
            style={styles.rain}
            source={require('../assets/rain.png')}
          />
        <Switch
            style={{
              left: 30,
            }}
            trackColor={{true: 'teal', false: 'gray'}}
            thumbColor="white"
            ios_backgroundColor="gray"
            onValueChange={() => togglePlay('rain')}
            value={toggleRain}
            />
          </View>
        <View style={{
              position: 'absolute',
              bottom: -50,
              right: -60,
              zIndex: 3,
            }}>
          <Image
            style={{
              height: 30,
              width: 27,
              bottom: 0,
              left: 40,
              zIndex: 5,
            }}
            source={require('../assets/fire.png')}
          />
        <Switch
            style={{
              left: 30,
            }}
            trackColor={{true: 'teal', false: 'gray'}}
            thumbColor="white"
            ios_backgroundColor="gray"
            onValueChange={() => togglePlay('fire')}
            value={toggleFire}
            />
          </View>
        <View style={{
              position: 'absolute',
              bottom: -50,
              right: 150,
              zIndex: 3,
            }}>
          <Image
            style={{
              height: 35,
              width: 25,
              bottom: 0,
              left: 40,
              zIndex: 5,
            }}
            source={require('../assets/tree.png')}
          />
        <Switch
            style={{
              left: 30,
            }}
            trackColor={{true: 'teal', false: 'gray'}}
            thumbColor="white"
            ios_backgroundColor="gray"
            onValueChange={() => togglePlay('tree')}
            value={toggleTree}
            />
          </View>
        <View style={{
              position: 'absolute',
              bottom: -50,
              right: 0,
              zIndex: 3,
            }}>
          <Image
            style={{
              height: 35,
              width: 45,
              bottom: 0,
              left: 30,
              zIndex: 5,
            }}
            source={require('../assets/water.png')}
          />
        <Switch
            style={{
              left: 30,
            }}
            trackColor={{true: 'teal', false: 'gray'}}
            thumbColor="white"
            ios_backgroundColor="gray"
            onValueChange={() => togglePlay('water')}
            value={toggleWater}
            />
          </View>
        </View>
    </View>
    )
  } else {
    return (
      <View style={styles.container} {...panResponder.panHandlers}>
      <View style={styles.backgroundBeats}>
        <Text>
          Add Background Beats
        </Text>
       <Switch
          style={styles.beatsToggle}
          trackColor={{true: 'teal', false: 'gray'}}
          thumbColor="white"
          ios_backgroundColor="gray"
          onValueChange={toggleFunctionBeats}
          value={toggleBeats}
          />
        </View>
      <View style={styles.echo}>
        <Text>
          Enable echoing
        </Text>
       <Switch
          style={{
            left: 30,
          }}
          trackColor={{true: 'teal', false: 'gray'}}
          thumbColor="white"
          ios_backgroundColor="gray"
          onValueChange={() => toggleFunctionEcho()}
          value={toggleEcho}
          />
        </View>
      <TouchableOpacity onPress={() => drumPress(true)}>

        <Image
          style={{
            height: dimensions.height,
            width: dimensions.width,
            resizeMode: 'contain',
          }}
          source={require('../assets/tongue_drum.png')}
        />
      </TouchableOpacity>
      <View style={styles.symbolContainer}>
        <View style={{
              position: 'absolute',
              bottom: -50,
              right: 75,
              zIndex: 3,
            }}>
          <Image
            style={styles.rain}
            source={require('../assets/rain.png')}
          />
        <Switch
            style={{
              left: 30,
            }}
            trackColor={{true: 'teal', false: 'gray'}}
            thumbColor="white"
            ios_backgroundColor="gray"
            onValueChange={() => togglePlay('rain')}
            value={toggleRain}
            />
          </View>
        <View style={{
              position: 'absolute',
              bottom: -50,
              right: -60,
              zIndex: 3,
            }}>
          <Image
            style={{
              height: 30,
              width: 27,
              bottom: 0,
              left: 40,
              zIndex: 5,
            }}
            source={require('../assets/fire.png')}
          />
        <Switch
            style={{
              left: 30,
            }}
            trackColor={{true: 'teal', false: 'gray'}}
            thumbColor="white"
            ios_backgroundColor="gray"
            onValueChange={() => togglePlay('fire')}
            value={toggleFire}
            />
          </View>
        <View style={{
              position: 'absolute',
              bottom: -50,
              right: 150,
              zIndex: 3,
            }}>
          <Image
            style={{
              height: 35,
              width: 25,
              bottom: 0,
              left: 40,
              zIndex: 5,
            }}
            source={require('../assets/tree.png')}
          />
        <Switch
            style={{
              left: 30,
            }}
            trackColor={{true: 'teal', false: 'gray'}}
            thumbColor="white"
            ios_backgroundColor="gray"
            onValueChange={() => togglePlay('tree')}
            value={toggleTree}
            />
          </View>
        <View style={{
              position: 'absolute',
              bottom: -50,
              right: 0,
              zIndex: 3,
            }}>
          <Image
            style={{
              height: 35,
              width: 45,
              bottom: 0,
              left: 30,
              zIndex: 5,
            }}
            source={require('../assets/water.png')}
          />
        <Switch
            style={{
              left: 30,
            }}
            trackColor={{true: 'teal', false: 'gray'}}
            thumbColor="white"
            ios_backgroundColor="gray"
            onValueChange={() => togglePlay('water')}
            value={toggleWater}
            />
          </View>
        </View>
    </View>
    )
  }
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
  },
  backgroundBeats: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 3,
  },
  echo: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 3,
  },
  symbolContainer: {
    position: 'absolute',
    bottom: 70,
    zIndex: 3,
    width: 60,
  },
  beatsToggle: {
    left: 50,
  },
  rain: {
    height: 34,
    width: 33,
    bottom: 0,
    left: 38,
    zIndex: 5,
  }
});

export default Music;