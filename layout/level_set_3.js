import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Box from '../components/box';

const Level_set_1 = ({game_matrix}) => {
  const [showSet, setShowSet] = React.useState([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);
  const [selected, setSelected] = React.useState(-1);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  let win = true;
  for (let i in showSet) {
    if (showSet[i] === 0) {
      win = false;
      break;
    }
  }
  if (win) {
    alert('Level cleared!!');
  }

  return (
    <View style={style.row_container}>
      <View style={style.column_container}>
        <Box
          index={0} // index of this button
          value={game_matrix} // value of this button
          show={showSet} // will it show it's set or not
          setShowSet={(set) => setShowSet(set)} // function to change show set
          selected={selected} // currently selected set
          selectedIndex={selectedIndex} // index of currently selected set
          setSelected={(set) => setSelected(set)} // change the selelcted set
          setSelectedIndex={(index) => setSelectedIndex(index)} // change the index of selected set
        />
        <Box
          index={1} // index of this button
          value={game_matrix} // value of this button
          show={showSet} // will it show it's set or not
          setShowSet={setShowSet} // function to change show set
          selected={selected} // currently selected set
          selectedIndex={selectedIndex} // index of currently selected set
          setSelected={setSelected} // change the selelcted set
          setSelectedIndex={setSelectedIndex} // change the index of selected set
        />
        <Box
          index={2} // index of this button
          value={game_matrix} // value of this button
          show={showSet} // will it show it's set or not
          setShowSet={setShowSet} // function to change show set
          selected={selected} // currently selected set
          selectedIndex={selectedIndex} // index of currently selected set
          setSelected={setSelected} // change the selelcted set
          setSelectedIndex={setSelectedIndex} // change the index of selected set
        />
        <Box
          index={3} // index of this button
          value={game_matrix} // value of this button
          show={showSet} // will it show it's set or not
          setShowSet={setShowSet} // function to change show set
          selected={selected} // currently selected set
          selectedIndex={selectedIndex} // index of currently selected set
          setSelected={setSelected} // change the selelcted set
          setSelectedIndex={setSelectedIndex} // change the index of selected set
        />
      </View>
      <View style={style.column_container}>
        <Box
          index={4} // index of this button
          value={game_matrix} // value of this button
          show={showSet} // will it show it's set or not
          setShowSet={setShowSet} // function to change show set
          selected={selected} // currently selected set
          selectedIndex={selectedIndex} // index of currently selected set
          setSelected={setSelected} // change the selelcted set
          setSelectedIndex={setSelectedIndex} // change the index of selected set
        />
        <Box
          index={5} // index of this button
          value={game_matrix} // value of this button
          show={showSet} // will it show it's set or not
          setShowSet={setShowSet} // function to change show set
          selected={selected} // currently selected set
          selectedIndex={selectedIndex} // index of currently selected set
          setSelected={setSelected} // change the selelcted set
          setSelectedIndex={setSelectedIndex} // change the index of selected set
        />
        <Box
          index={6} // index of this button
          value={game_matrix} // value of this button
          show={showSet} // will it show it's set or not
          setShowSet={setShowSet} // function to change show set
          selected={selected} // currently selected set
          selectedIndex={selectedIndex} // index of currently selected set
          setSelected={setSelected} // change the selelcted set
          setSelectedIndex={setSelectedIndex} // change the index of selected set
        />
        <Box
          index={7} // index of this button
          value={game_matrix} // value of this button
          show={showSet} // will it show it's set or not
          setShowSet={setShowSet} // function to change show set
          selected={selected} // currently selected set
          selectedIndex={selectedIndex} // index of currently selected set
          setSelected={setSelected} // change the selelcted set
          setSelectedIndex={setSelectedIndex} // change the index of selected set
        />
      </View>
      <View style={style.column_container}>
        <Box
          index={8} // index of this button
          value={game_matrix} // value of this button
          show={showSet} // will it show it's set or not
          setShowSet={(set) => setShowSet(set)} // function to change show set
          selected={selected} // currently selected set
          selectedIndex={selectedIndex} // index of currently selected set
          setSelected={(set) => setSelected(set)} // change the selelcted set
          setSelectedIndex={(index) => setSelectedIndex(index)} // change the index of selected set
        />
        <Box
          index={9} // index of this button
          value={game_matrix} // value of this button
          show={showSet} // will it show it's set or not
          setShowSet={setShowSet} // function to change show set
          selected={selected} // currently selected set
          selectedIndex={selectedIndex} // index of currently selected set
          setSelected={setSelected} // change the selelcted set
          setSelectedIndex={setSelectedIndex} // change the index of selected set
        />
        <Box
          index={10} // index of this button
          value={game_matrix} // value of this button
          show={showSet} // will it show it's set or not
          setShowSet={setShowSet} // function to change show set
          selected={selected} // currently selected set
          selectedIndex={selectedIndex} // index of currently selected set
          setSelected={setSelected} // change the selelcted set
          setSelectedIndex={setSelectedIndex} // change the index of selected set
        />
        <Box
          index={11} // index of this button
          value={game_matrix} // value of this button
          show={showSet} // will it show it's set or not
          setShowSet={setShowSet} // function to change show set
          selected={selected} // currently selected set
          selectedIndex={selectedIndex} // index of currently selected set
          setSelected={setSelected} // change the selelcted set
          setSelectedIndex={setSelectedIndex} // change the index of selected set
        />
      </View>
      <View style={style.column_container}>
        <Box
          index={12} // index of this button
          value={game_matrix} // value of this button
          show={showSet} // will it show it's set or not
          setShowSet={setShowSet} // function to change show set
          selected={selected} // currently selected set
          selectedIndex={selectedIndex} // index of currently selected set
          setSelected={setSelected} // change the selelcted set
          setSelectedIndex={setSelectedIndex} // change the index of selected set
        />
        <Box
          index={13} // index of this button
          value={game_matrix} // value of this button
          show={showSet} // will it show it's set or not
          setShowSet={setShowSet} // function to change show set
          selected={selected} // currently selected set
          selectedIndex={selectedIndex} // index of currently selected set
          setSelected={setSelected} // change the selelcted set
          setSelectedIndex={setSelectedIndex} // change the index of selected set
        />
        <Box
          index={14} // index of this button
          value={game_matrix} // value of this button
          show={showSet} // will it show it's set or not
          setShowSet={setShowSet} // function to change show set
          selected={selected} // currently selected set
          selectedIndex={selectedIndex} // index of currently selected set
          setSelected={setSelected} // change the selelcted set
          setSelectedIndex={setSelectedIndex} // change the index of selected set
        />
        <Box
          index={15} // index of this button
          value={game_matrix} // value of this button
          show={showSet} // will it show it's set or not
          setShowSet={setShowSet} // function to change show set
          selected={selected} // currently selected set
          selectedIndex={selectedIndex} // index of currently selected set
          setSelected={setSelected} // change the selelcted set
          setSelectedIndex={setSelectedIndex} // change the index of selected set
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  row_container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  column_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Level_set_1;
