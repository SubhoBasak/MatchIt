import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

const About = () => {
  return (
    <ImageBackground
      style={style.about_container}
      source={require('../assets/images/about.jpg')}>
      <Image style={style.my_img} source={require('../assets/images/me.jpg')} />
      <Text>Subho Basak</Text>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  about_container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  my_img: {
    width: '90%',
    height: '50%',
    marginTop: 10,
    borderRadius: 15,
  },
});

export default About;
