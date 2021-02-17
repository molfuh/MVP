import React, { useState } from 'react';
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
      sound1.play();
      if (isEcho) {
        sound1.loop = true;
      }
    } else if (locationX >= midPointX + (dimensions.width / 10.24) && locationX <= midPointX + (dimensions.width / 3.072) && locationY >= midPointY - (dimensions.width / 3.84) && locationY <= midPointY - (dimensions.width / 7.68)) {
      sound1.play();
      if (isEcho) {
        sound2.loop = true;
      }
    } else if (locationY <= midPointY + (dimensions.width / 12.8) && locationY >= midPointY - (dimensions.width / 12.8) && (locationX >= midPointX + (dimensions.width / 5.9)) && (locationX <= midPointX + (dimensions.width / 5.9) + (dimensions.width / 3.84))) {
      sound3.play();
      if (isEcho) {
        sound3.loop = true;
      }
    } else if (locationX >= midPointX + (dimensions.width / 10.24) && locationX <= midPointX + (dimensions.width / 3.072) && locationY <= midPointY + (dimensions.width / 3.84) && locationY >= midPointY + (dimensions.width / 7.68)) {
      sound4.play();
      if (isEcho) {
        sound4.loop = true;
      }
    } else if (locationX <= midPointX + (dimensions.width / 12.8) && locationX >= midPointX - (dimensions.width / 12.8) && (locationY >= midPointY + (dimensions.width / 5.9)) && (locationY <= midPointY + (dimensions.width / 5.9) + (dimensions.width / 3.84))) {
      sound5.play();
      if (isEcho) {
        sound5.loop = true;
      }
    } else if (locationX <= midPointX - (dimensions.width / 10.24) && locationX >= midPointX - (dimensions.width / 3.072) && locationY <= midPointY + (dimensions.width / 3.84) && locationY >= midPointY + (dimensions.width / 7.68)) {
      sound6.play();
      if (isEcho) {
        sound6.loop = true;
      }
    } else if (locationY <= midPointY + (dimensions.width / 12.8) && locationY >= midPointY - (dimensions.width / 12.8) && (locationX <= midPointX - (dimensions.width / 5.9)) && (locationX >= midPointX - (dimensions.width / 5.9) - (dimensions.width / 3.84))) {
      sound7.play();
      if (isEcho) {
        sound7.loop = true;
      }
    } else if (locationX <= midPointX - (dimensions.width / 10.24) && locationX >= midPointX - (dimensions.width / 3.072) && locationY >= midPointY - (dimensions.width / 3.84) && locationY <= midPointY - (dimensions.width / 7.68)) {
      sound8.play();
      if (isEcho) {
        sound8.loop = true;
      }
    }
  }


  const handleBeats = (amount = 0) => {
      if (amount === 4) {
        return;
      }
      const sound1 = new Audio(require('../assets/sounds/tongue_drum_sounds/MTD_1.mp3'));
      setTimeout(() => {
        sound1.play();
        sound1.loop = true;
        handleBeats(amount += 1, true);
      }, 1930)
    }


  const [toggleBeats, setToggleBeats] = useState(false);
  const toggleFunctionBeats = () => {
    setToggleBeats(!toggleBeats);
    if (!toggleBeats) {
      handleBeats();
    }
  };

  const [toggleEcho, setToggleEcho] = useState(false);
  const toggleFunctionEcho = () => {
    setToggleEcho(!toggleEcho);
  };

  const [toggleBird, setToggleBird] = useState(false);
  const [toggleFire, setToggleFire] = useState(false);
  const [toggleTree, setToggleTree] = useState(false);
  const [toggleWater, setToggleWater] = useState(false);

  const togglePlay = (type) => {
    const bird = new Audio(require('../assets/backing_tracks/TDMBirdsShort.mp3'));
    const fire = new Audio(require('../assets/backing_tracks/TDMFireShort.mp3'));
    const tree = new Audio(require('../assets/backing_tracks/TDMForestShort.mp3'));
    const water = new Audio(require('../assets/backing_tracks/TDMStreamShort.mp3'));

    if (type === 'bird') {
      setToggleBird(!toggleBird);
      bird.volume = 0.04;
      bird.play();
      bird.loop = true;
    } else if (type === 'fire') {
      setToggleFire(!toggleFire);
      fire.volume = 0.2;
      fire.play();
      fire.loop = true;
    } else if (type === 'tree') {
      setToggleTree(!toggleTree);
      tree.volume = 0.2;
      tree.play();
      tree.loop = true;
    } else if (type === 'water') {
      setToggleWater(!toggleWater);
      water.volume = 0.04;
      water.play();
      water.loop = true;
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
            style={{
              height: 30,
              bottom: 0,
              left: 40,
              zIndex: 5,
            }}
            source={require('../assets/bird.png')}
          />
        <Switch
            style={{
              left: 30,
            }}
            trackColor={{true: 'teal', false: 'gray'}}
            thumbColor="white"
            ios_backgroundColor="gray"
            onValueChange={() => togglePlay('bird')}
            value={toggleBird}
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
              width: 23,
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
            style={{
              height: 30,
              bottom: 0,
              left: 40,
              zIndex: 5,
            }}
            source={require('../assets/bird.png')}
          />
        <Switch
            style={{
              left: 30,
            }}
            trackColor={{true: 'teal', false: 'gray'}}
            thumbColor="white"
            ios_backgroundColor="gray"
            onValueChange={() => togglePlay('bird')}
            value={toggleBird}
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
              width: 23,
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
  }
});

export default Music;