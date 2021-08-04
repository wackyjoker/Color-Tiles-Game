import { ActionTypes } from "../actions/types";
import { Action } from "../actions";

const initialState = {
  row: 2,
  tiles: [],
};

const GameReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ROW:
      return { ...state, row: state.row +1 };

    case ActionTypes.TILES:
      return { ...state, tiles: action.payload };

    default:
      return state;
  }
};

export default GameReducer;
