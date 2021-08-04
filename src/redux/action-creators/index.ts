import { ActionTypes } from "../actions/types";
import { Dispatch } from "redux";
import { Action } from "../actions";
export const newTile = (tile: boolean[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.TILES,
      payload: tile,
    });
  };
};

export const addRow = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.ROW
    });
  };
};
