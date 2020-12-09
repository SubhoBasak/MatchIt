import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const Box = ({value, selected, setSelected}) => {
  const select_set_bg = () => {
    if (value === 0) {
      return (
        <Image
          source={require('../assets/images/sets/set_1.png')}
          style={style.box_container}
        />
      );
    } else if (value === 1) {
      return (
        <Image
          source={require('../assets/images/sets/set_2.png')}
          style={style.box_container}
        />
      );
    } else if (value === 2) {
      return (
        <Image
          source={require('../assets/images/sets/set_3.png')}
          style={style.box_container}
        />
      );
    } else if (value === 3) {
      return (
        <Image
          source={require('../assets/images/sets/set_4.png')}
          style={style.box_container}
        />
      );
    } else if (value === 4) {
      return (
        <Image
          source={require('../assets/images/sets/set_5.png')}
          style={style.box_container}
        />
      );
    } else if (value === 5) {
      return (
        <Image
          source={require('../assets/images/sets/set_6.png')}
          style={style.box_container}
        />
      );
    } else if (value === 6) {
      return (
        <Image
          source={require('../assets/images/sets/set_7.png')}
          style={style.box_container}
        />
      );
    } else if (value === 7) {
      return (
        <Image
          source={require('../assets/images/sets/set_8.png')}
          style={style.box_container}
        />
      );
    } else if (value === 8) {
      return (
        <Image
          source={require('../assets/images/sets/set_9.png')}
          style={style.box_container}
        />
      );
    } else if (value === 9) {
      return (
        <Image
          source={require('../assets/images/sets/set_10.png')}
          style={style.box_container}
        />
      );
    } else if (value === 10) {
      return (
        <Image
          source={require('../assets/images/sets/set_11.png')}
          style={style.box_container}
        />
      );
    } else if (value === 11) {
      return (
        <Image
          source={require('../assets/images/sets/set_12.png')}
          style={style.box_container}
        />
      );
    }
  };

  return (
    <TouchableOpacity style={style.box_container}>
      <ImageBackground
        source={require('../assets/images/box.png')}
        style={style.box_background}>
        {select_set_bg()}
      </ImageBackground>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  box_container: {
    width: 50,
    height: 50,
  },
  box_background: {
    width: '100%',
    height: '100%',
  },
  box_img: {
    width: '95%',
    height: '95%',
  },
});

export default Box;
