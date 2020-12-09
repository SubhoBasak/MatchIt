import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const LevelButton = ({navigation, level_name, bg_img}) => {
  const start_game = () => {
    navigation.navigate('game', {bg_img: bg_img, level: level_name});
  };

  return (
    <TouchableOpacity style={style.lvl_btn_container} onPress={start_game}>
      <ImageBackground
        style={style.lvl_btn}
        source={require('../assets/images/level_btn.png')}>
        <Text style={style.lvl_btn_text}>{level_name}</Text>
      </ImageBackground>
      <Image source={bg_img} style={style.lvl_img} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  lvl_btn_container: {
    width: '60%',
    paddingHorizontal: 5,
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 5,
  },
  lvl_btn: {
    width: 55,
    height: 55,
    alignItems: 'center',
    marginRight: 5,
  },
  lvl_btn_text: {
    color: '#222',
    fontSize: 32,
    fontWeight: 'bold',
  },
  lvl_img: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    opacity: 0.85,
  },
});

export default LevelButton;
