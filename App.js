import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const useDefault = () => {
  let item1 = { name: "+1", id: "itemone"};
  let item2 = { name: "+0", id: "itemtwo"};
  let item3 = { name: "-1", id: "itemthree"};
  let item4 = { name: "+2", id: "itemfour"};
  let item5 = { name: "-2", id: "itemFive"};

  return [item1, item2, item3, item4, item5]
}

const useEmpty = () => {
  return []
}

const deck = () => {
  const [activeDeck, updateActiveDeck] = useState(() => shuffleDeck(useDefault()));
  const [drawnDeck, updateDrawnDeck] = useState(() => useEmpty());

  let initialDeck = useDefault();



  const drawTop = () => {
    console.log(activeDeck)
    updateDrawnDeck([activeDeck[0], ...drawnDeck]);
    updateActiveDeck(activeDeck.slice(1));

    if (activeDeck.length === 1) {
      resetActiveDeck();
    }
  }

  
  //"Fisher–Yates shuffle"
  function shuffleDeck(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue
    }

    return array;
  }

  const resetActiveDeck = () => {
    updateActiveDeck(shuffleDeck(initialDeck));
  }

  return [activeDeck, drawnDeck, drawTop]
}

export default function App() {
  const [activeDeck, drawnDeck, drawTop] = deck()

  const currentCard= () => {
    if (drawnDeck.length !== 0) {
      return drawnDeck[0].name
    }
    else {
    return "No card drawn"
    }
  } 
  return (
    <View style={styles.container}>
      <Text>{currentCard()}</Text>
      <Button title = "Draw"  onPress={() => {drawTop();}}/>
      <StatusBar style="auto"/>
    </View>
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
