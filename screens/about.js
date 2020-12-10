import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const About = () => {
  return (
    <ImageBackground
      style={style.about_container}
      source={require('../assets/images/about.jpg')}>
      <View style={style.my_profile}>
        <Image
          style={style.my_img}
          source={require('../assets/images/me.jpg')}
        />
        <View style={style.profile_text}>
          <Text style={style.my_name}>Subho Basak</Text>
          <Text style={style.my_email}>subhobasak50@gmail.com</Text>
        </View>
      </View>
      <ScrollView>
        <Text style={style.some_text}>
          Language: JavaScript{'\n'}
          Framework: ReactNative{'\n'}
          Icons: https://flaticon.com{'\n'}
          Images: https://pinterest.com{'\n'}
          GitHub: https://github.com/SubhoBasak/MatchIt{'\n'}
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  about_container: {
    width: '100%',
    height: '100%',
  },
  my_profile: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 3,
  },
  my_img: {
    width: 84,
    height: 84,
    borderRadius: 64,
    marginLeft: 10,
  },
  profile_text: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  my_name: {
    fontSize: 32,
    color: '#ddd',
  },
  my_email: {
    color: 'lightsteelblue',
  },
  some_text: {
    color: '#ddd',
    padding: 20,
    lineHeight: 30,
  },
});

export default About;
