import {ADD_CART, SET_INPUT_MODAL_VISIBLE} from '../constants/app';

export const addCart = item => {
  return {type: ADD_CART, payload: item};
};

export const setInputModalvisible = isVisible => {
  return {type: SET_INPUT_MODAL_VISIBLE, payload: isVisible};
};
