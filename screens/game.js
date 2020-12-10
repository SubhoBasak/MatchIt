import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {set} from 'react-native-reanimated';

// import level sets
import Level_set_1 from '../layout/level_set_1';
import Level_set_2 from '../layout/level_set_2';
import Level_set_3 from '../layout/level_set_3';
import Level_set_4 from '../layout/level_set_4';
import Level_set_5 from '../layout/level_set_5';

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function random_set(size) {
  const sets = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  shuffleArray(sets);
  return sets.slice(0, size);
}

function set_game_matrix(set) {
  const sets = random_set(set);
  const game_matrix = [];

  for (let i = 0; i < set; i++) {
    game_matrix.push(sets[i]);
    game_matrix.push(sets[i]);
  }
  shuffleArray(game_matrix);

  return game_matrix;
}

const Game = ({route, navigation}) => {
  let game_matrix;
  let game_stage;

  if (route.params.level < 6) {
    // level 1 - 5
    game_matrix = set_game_matrix(3);
    game_stage = <Level_set_1 game_matrix={game_matrix} />;
  } else if (route.params.level < 11) {
    // level 6 - 10
    game_matrix = set_game_matrix(6);
    game_stage = <Level_set_2 game_matrix={game_matrix} />;
  } else if (route.params.level < 16) {
    // level 11 - 15
    game_matrix = set_game_matrix(8);
    game_stage = <Level_set_3 game_matrix={game_matrix} />;
  } else if (route.params.level < 21) {
    // level 16 - 20
    game_matrix = set_game_matrix(10);
    game_stage = <Level_set_4 game_matrix={game_matrix} />;
  } else {
    // level 21 - 23
    game_matrix = set_game_matrix(12);
    game_stage = <Level_set_5 game_matrix={game_matrix} />;
  }

  return (
    <ImageBackground source={route.params.bg_img} style={style.game_screen_bg}>
      {game_stage}
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  game_screen_bg: {
    width: '100%',
    height: '100%',
  },
});

export default Game;
