import React from 'react';
import {View, StyleSheet} from 'react-native';
import Box from '../components/box';

const sample = require('../utils/sample');

const Level_set_1 = ({game_matrix}) => {
  const [selected, setSelected] = React.useState(-1);

  return (
    <View style={style.row_container}>
      <View style={style.column_container}>
        <Box
          value={game_matrix[0]}
          selected={selected}
          setSelected={setSelected}
        />
        <Box
          value={game_matrix[1]}
          selected={selected}
          setSelected={setSelected}
        />
        <Box
          value={game_matrix[2]}
          selected={selected}
          setSelected={setSelected}
        />
      </View>
      <View style={style.column_container}>
        <Box
          value={game_matrix[3]}
          selected={selected}
          setSelected={setSelected}
        />
        <Box
          value={game_matrix[4]}
          selected={selected}
          setSelected={setSelected}
        />
        <Box
          value={game_matrix[5]}
          selected={selected}
          setSelected={setSelected}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  row_container: {
    display: 'flex',
    flexDirection: 'column',
  },
  column_container: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Level_set_1;
