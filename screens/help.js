import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Help = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/help_bg.jpg')}
      style={style.help_bg}>
      <View style={style.help_header}>
        <Image
          source={require('../assets/images/help.png')}
          style={style.help_header_img}
        />
        <Text style={style.help_header_txt}>Help</Text>
      </View>
      <ScrollView style={style.help_scroll_bar}>
        <Text style={style.help_main_txt}>
          In this game there are some boxes on the screen. Every box has some
          hidden images. You can see the hidden images by clicking on it. To
          complete this game you have to find two pair of every image.
          {'\n\n\t\t\t'}
          Here is the basic rule of this game. First of all, there will be many
          boxes with all hidden images. You can start the game by clicking any
          of the box. The hidden photo will be shown. Then you have to guess the
          other pair. If you click on the right pair then both image will be
          shown on display and thery will be no longer hidden. But if you press
          any other image then both images will be hidden again. And by this way
          you have to find all pairs and have to unclock all the images. If you
          unlock all the hidden images the the game will be over and the next
          level will be unlock.{'\n\n\t\t\t'}There are total 23 level. The game
          difficuly will be increase as the level will goes up.{'\n\n'}
          <Text style={style.help_footer}>
            For any other help you can email me on my mail address:
            subhobasak50@gmail.com
          </Text>
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  help_bg: {
    width: '100%',
    height: '100%',
  },
  help_scroll_bar: {
    display: 'flex',
    flexDirection: 'column',
  },
  help_header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  help_header_img: {
    width: 50,
    height: 50,
  },
  help_header_txt: {
    fontSize: 28,
    color: '#6624f2',
  },
  help_main_txt: {
    color: '#555',
    fontSize: 20,
    padding: 20,
    margin: 20,
    backgroundColor: '#ffffffbb',
    borderRadius: 20,
    borderColor: 'blueviolet',
    borderWidth: 3,
  },
  help_footer: {
    fontSize: 12,
    color: '#aaa',
  },
});

export default Help;
