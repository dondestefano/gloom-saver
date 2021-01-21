
import { SET_DECK, ADD_CARD, REMOVE_CARD, DRAW_CARD, SHUFFLE_DECK } from './actionTypes';

export function reducerFunction(state = { activeDeck: [] }, action) {
  console.log('** reducer function was called **');
  const { activeDeck } = state;
  switch (action.type) {
    case SET_DECK:
        let deck = action.payload
        return {activeDeck: [standardDeck]}
    case ADD_CARD:
      const newCard = action.payload;
      console.log('adding card: ', newCard);
      console.log('array after adding card: ', [...activeDeck, newCard]);
      return { activeDeck: [...activeDeck, newCard] };
    case DRAW_CARD:
      return {activeDeck: [activeDeck.slice(1)]};
    case SHUFFLE_DECK:
        return {activeDeck: [shuffleDeck(activeDeck)]}
    default:
        return state;
  }
}

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

export const getDeck = (state) => state.activeDeck;