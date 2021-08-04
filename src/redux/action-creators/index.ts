import { ActionTypes } from "../actions/types";
import { Dispatch } from "redux";

export const ActionTile = (tile: number[]) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.TILES,
      payload: tile,
    });
  };
};


export const ActionRow = (row: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionTypes.ROW,
            payload: row,
        });
    };
};
