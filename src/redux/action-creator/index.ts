import { ActionType } from "../actions/types";
import { Dispatch } from "redux";

export const ActionTile = (tile: number[]) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.TILES,
      payload: tile,
    });
  };
};


export const ActionRow = (row: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.ROW,
            payload: row,
        });
    };
};
