import {ADD_CART} from '../constants/app';

const initialState = {
  cart: [],
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      console.log('CARTTTTTTT', state);
      return {...state, cart: action.payload};

    default:
      return state;
  }
};
