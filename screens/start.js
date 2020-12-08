import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

{
  /* <Button title="Start" onPress={() => navigation.navigate('game')} />
<Button title="Help" onPress={() => navigation.navigate('help')} /> */
}

const Start = ({navigation}) => {
  return (
    <>
      <Image
        source={require('../assets/images/start_screen_bg.jpg')}
        style={style.start_screen}
      />
    </>
  );
};

const style = StyleSheet.create({
  start_screen: {
    width: '100%',
    height: '100%',
  },
});

export default Start;
