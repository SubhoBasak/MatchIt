import React from 'react';
import {View, StyleSheet, Button, ImageBackground} from 'react-native';

const Start = ({navigation}) => {
  return (
    <>
      <ImageBackground
        source={require('../assets/images/start_screen_bg.jpg')}
        style={style.bg_img}>
        <View style={style.container}>
          <View style={style.btn_container}>
            <View style={style.btn_view}>
              <Button
                title="Start"
                onPress={() => navigation.navigate('level')}
                color="dodgerblue"
              />
            </View>
            <View style={style.btn_view}>
              <Button
                title="Help"
                onPress={() => navigation.navigate('help')}
                color="limegreen"
              />
            </View>
            <View style={style.btn_view}>
              <Button
                title="About"
                onPress={() => navigation.navigate('about')}
                color="gold"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const style = StyleSheet.create({
  bg_img: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 50,
  },
  btn_container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  btn_view: {
    width: '40%',
    margin: 10,
    padding: 2,
    backgroundColor: 'white',
    borderRadius: 15,
  },
});

export default Start;
