import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector, Provider  } from 'react-redux';
import { getDeck } from './redux/reducer';
import { DRAW_CARD, SHUFFLE_DECK } from './redux/actionTypes';
import { store } from './redux/store';

const defaultDeck = () => {
  let item1 = { name: "+1", id: "itemone"};
  let item2 = { name: "+0", id: "itemtwo"};
  let item3 = { name: "-1", id: "itemthree"};
  let item4 = { name: "+2", id: "itemfour"};
  let item5 = { name: "-2", id: "itemFive"};

  return [item1, item2, item3, item4, item5]
}

const dispatch = useDispatch();
const deck = useSelector(getDeck);

const useDrawDeck = () => {
  const [drawDeck, updateDrawDeck] = useState([]);

  const drawTop = () => {
    console.log(deck)
    updateDrawDeck([deck[0], ...drawnDeck]);
    dispatch({ type: DRAW_CARD  })
  }
    return [drawDeck, drawTop]
}

export default function App() {

  const [drawDeck, drawTop] = useDrawDeck()

  const currentCard= () => {
    if (drawDeck.length !== 0) {
      return drawDeck[0].name
    }
    else {
    return "No card drawn"
    }
  } 
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>{currentCard()}</Text>
        <Button title = "Draw"  onPress={() => {drawTop();}}/>
        <Button titel = "Shuffle" onPress={() => dispatch({ type: SHUFFLE_DECK  })}/>
        <StatusBar style="auto"/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});