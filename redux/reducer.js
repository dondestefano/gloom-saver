
import { SET_DECK, ADD_CARD, REMOVE_CARD, DRAW_CARD, SHUFFLE_DECK } from './actionTypes';

export function reducerFunction(state = { activeDeck: [] }, action) {
  console.log('** reducer function was called **');
  const { activeDeck } = state;
  switch (action.type) {
    case SET_DECK:
        console.log('** Set **');
        let deck = action.payload
        return {activeDeck: [deck]}
    case ADD_CARD:
        console.log('** Add **');
      const newCard = action.payload;
      console.log('adding card: ', newCard);
      console.log('array after adding card: ', [...activeDeck, newCard]);
      return { activeDeck: [...activeDeck, newCard] };
    case DRAW_CARD:
        console.log('** Draw **');
      return {activeDeck: [activeDeck.slice(1)]};
    default:
        console.log('** Default state **');
        return state;
  }
}


export const getDeck = (state) => state.activeDeck;