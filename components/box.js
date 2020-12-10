import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const Box = ({
  index,
  value,
  show,
  setShowSet,
  selected,
  selectedIndex,
  setSelected,
  setSelectedIndex,
}) => {
  let show_set = show;
  value = value[index];
  show = show[index];

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

  const btn_pressed = () => {
    if (show == 0) {
      if (selected === -1) {
        show_set[index] = 1;
        setShowSet(show_set);
        setSelected(value);
        setSelectedIndex(index);
      } else if (selected === value) {
        show_set[index] = 1;
        setShowSet(show_set);
        setSelected(-1);
        setSelectedIndex(-1);
      } else {
        show_set[index] = 0;
        show_set[selectedIndex] = 0;
        setShowSet(show_set);
        setSelected(-1);
        setSelectedIndex(-1);
      }
    }
  };

  return (
    <TouchableOpacity style={style.box_container} onPress={btn_pressed}>
      <ImageBackground
        source={require('../assets/images/box.png')}
        style={style.box_background}>
        {show ? select_set_bg() : <></>}
      </ImageBackground>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  box_container: {
    width: 50,
    height: 50,
    marginRight: 5,
    marginBottom: 5,
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
