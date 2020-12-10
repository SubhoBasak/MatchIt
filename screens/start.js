import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  ImageBackground,
  Image,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';

// TrackPlayer.setupPlayer({}).then(async () => {});
// TrackPlayer.add({
//   id: 'bg_music_id',
//   url: require('../assets/music/bg_music.mp3'),
//   title: 'MatchIt',
//   artist: 'Subho Basak',
//   album: 'React Native',
//   artwork: require('../assets/images/logo.png'),
// });
// TrackPlayer.play();

const Start = ({navigation}) => {
  const [sound, setSound] = React.useState([
    true,
    require('../assets/images/sound.png'),
  ]);

  const set_sound = () => {
    if (sound[0]) {
      setSound([false, require('../assets/images/no-sound.png')]);
      // TrackPlayer.stop();
    } else {
      setSound([true, require('../assets/images/sound.png')]);
      // TrackPlayer.play();
    }
  };

  return (
    <>
      <ImageBackground
        source={require('../assets/images/start_screen_bg.jpg')}
        style={style.bg_img}>
        <View style={style.container}>
          <View style={style.sound_view}>
            <TouchableOpacity onPress={set_sound}>
              <Image source={sound[1]} style={style.sound_img} />
            </TouchableOpacity>
          </View>
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
  sound_view: {
    flex: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '100%',
    paddingRight: 50,
    paddingTop: 50,
  },
  sound_img: {
    width: 48,
    height: 48,
    borderRadius: 32,
  },
  btn_container: {
    flex: 2,
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
