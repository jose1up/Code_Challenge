import { GET_TEXT } from "../action";

export const initialState = {
  textList: [],
};

const cases = {};

cases[GET_TEXT] = (initialState, payload) => {
  return {
    ...initialState,
    textList: [...initialState.textList, payload],
  };
};

export default function rootReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}
