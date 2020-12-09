import React from 'react';
import {Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import LevelButton from '../components/level_btn';

const level_bg_imgs = [
  require('../assets/images/backgrounds/bg_img_1.jpg'),
  require('../assets/images/backgrounds/bg_img_2.jpg'),
  require('../assets/images/backgrounds/bg_img_3.jpg'),
  require('../assets/images/backgrounds/bg_img_4.jpg'),
  require('../assets/images/backgrounds/bg_img_5.jpg'),
  require('../assets/images/backgrounds/bg_img_6.jpg'),
  require('../assets/images/backgrounds/bg_img_7.jpg'),
  require('../assets/images/backgrounds/bg_img_8.jpg'),
  require('../assets/images/backgrounds/bg_img_9.jpg'),
  require('../assets/images/backgrounds/bg_img_10.jpg'),
  require('../assets/images/backgrounds/bg_img_11.jpg'),
  require('../assets/images/backgrounds/bg_img_12.jpg'),
  require('../assets/images/backgrounds/bg_img_13.jpg'),
  require('../assets/images/backgrounds/bg_img_14.jpg'),
  require('../assets/images/backgrounds/bg_img_15.jpg'),
  require('../assets/images/backgrounds/bg_img_16.jpg'),
  require('../assets/images/backgrounds/bg_img_17.jpg'),
  require('../assets/images/backgrounds/bg_img_18.jpg'),
  require('../assets/images/backgrounds/bg_img_19.jpg'),
  require('../assets/images/backgrounds/bg_img_20.jpg'),
  require('../assets/images/backgrounds/bg_img_21.jpg'),
  require('../assets/images/backgrounds/bg_img_22.jpg'),
  require('../assets/images/backgrounds/bg_img_23.jpg'),
];

const Level = ({navigation}) => {
  let levels = [];
  for (let i = 0; i < 23; i++) {
    levels.push(
      <LevelButton
        navigation={navigation}
        key={i}
        level_name={i + 1}
        bg_img={level_bg_imgs[i]}
      />,
    );
  }

  return (
    <ImageBackground
      source={require('../assets/images/level_bg.jpg')}
      style={style.main_container}>
      <Text style={style.header}>Select Level</Text>
      <ScrollView style={style.scroll_style}>{levels}</ScrollView>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  main_container: {
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 26,
    width: '100%',
    textAlign: 'center',
    paddingTop: 10,
    color: '#222',
  },
  scroll_style: {
    paddingHorizontal: 30,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '100%',
  },
});

export default Level;
